<template>
  <div class="password-cracker">

    <div class="guess">
      <input class="password" v-bind:value="guess" disabled />

      <div class="buttons">
        <button v-on:click="reset">Reset</button>
        <button v-on:click="pause" :disabled="tasks.length == 0">Pause</button>
        <button v-on:click="crack" :disabled="tasks.length > 0">Crack</button>
      </div>
    </div>

    <div class="progress">
      <div class="bar">
        <div class="fill" v-bind:style="{ width: percentDone + '%' }"></div>
      </div>
      <span>{{ percentDone }}%</span>
    </div>

    <div class="characters">
      <i v-bind:class="{ active: digit }">digit</i>
      <i v-bind:class="{ active: lower }">lower</i>
      <i v-bind:class="{ active: upper }">upper</i>
      <i v-bind:class="{ active: symbol }">symbol</i>
    </div>

    <div class="speed">
      <input
        v-bind:value="speed"
        v-on:input="$emit('change-speed', $event.target.value)"
        class="slider"
        type="range" min="1" max="10" step="1" />
      <span>{{ passwordsPerSecond.toLocaleString() }}/second</span>
    </div>

    <div style="clear:both;"></div>

    <div v-if="false" class="time">
      <div>Tried {{ progress }}</div>
      Estimated time remaining:<br>
      {{ timeRemaining }}
    </div>

  </div>
</template>

<script>
import anime from 'animejs';
import * as _ from 'lodash';

const hsimp = require('./hsimp')

/*
 * Find the nth set in a cartesian product of sets:
 *  N = size(A) * size(B) * ... * size(Z)
 *  c(i) = [A[i_a], B[i_b], ... Z[i_z]]
 *  i_a = i/(size(B)*size(C)*...*size(Z))
 *  i_b = (i/size(C)*...*size(z-1)) mod size(B)
 *  ...
 *  i_z = i mod size(Z)
 */
function nthProduct(sets, n) {
  let indices = [];

  let tsize = (i) => sets
    .slice(i)
    .map((s) => s.length)
    .reduce((acc,v) => acc * v);

  if (sets.length > 1) {
    indices.push(Math.floor( n / tsize(1) ));

    for (var j = 1; j < (sets.length - 1); j++) {
      indices.push(Math.floor( (n / tsize(j + 1)) % sets[j].length ))
    }
  }
  indices.push( n % sets[sets.length - 1].length );

  return indices.map((i_x,i) => sets[i][i_x]);
}

export default {
  props: ['password', 'speed'],

  data() {
    return {
      chars: [],
      tasks: [],
      counter: 0,
    }
  },

  computed: {
    digit() {
      return /[0-9]/.test(this.password)
    },
    lower() {
      return /[a-z]/.test(this.password)
    },
    upper() {
      return /[A-Z]/.test(this.password)
    },
    symbol() {
      return /[$-/:-?{-~!"^_`\[\]]/.test(this.password)
    },
    alpha() {
      var sets = [];
      if (this.symbol) { sets = sets.concat(_.range(0x20, 0x30)) }
      if (this.upper) { sets = sets.concat(_.range(0x41, 0x5b)) }
      if (this.digit) { sets = sets.concat(_.range(0x30, 0x3a)) }
      if (this.symbol) { sets = sets.concat(_.range(0x3a, 0x41)) }
      if (this.lower) { sets = sets.concat(_.range(0x61, 0x7b)) }
      if (this.symbol) { sets = sets.concat(_.range(0x7b, 0x7f)) }
      return new Set(_.flatten(sets))
    },
    guess() {
      let chars = this.chars.slice().reverse();
      return String.fromCharCode(...chars);
    },
    passwordsPerSecond() {
      return Math.pow(10, this.speed) * 4;
    },
    percentDone() {
      let possible = (this.possibleCombinations || 1);
      let pct = (this.counter / possible) * 100;
      //return Math.round(pct * 100) / 100
      return Math.ceil(pct);
    },
    possibleCombinations() {
      return Math.pow(this.alpha.size, this.password.length);
    },
    progress() {
      let count = hsimp.namedNumber(this.counter).getName();
      let total = hsimp.namedNumber(this.possibleCombinations).getName();
      return count + ' of ' + total;
    },
    timeRemaining() {
      let remaining = this.possibleCombinations - this.counter;
      let time = remaining / this.passwordsPerSecond;

      let period = hsimp.period(time)
      let periodLength = period.getLength()

      let formattedPeriodLength = hsimp.namedNumber(periodLength).getName();
      let periodName = formattedPeriodLength === "1"
          ? period.getSingular()
          : period.getPlural();

      let periodString = formattedPeriodLength + " " + periodName;

      return periodString
    },
  },

  watch: {
    guess(newGuess, oldGuess) {
      if (newGuess == this.password) {
        this.pause()
        this.counter = this.possibleCombinations
      }
      if (newGuess.length > this.password.length) {
        this.pause()
        this.chars = _.invokeMap(this.password, 'charCodeAt').reverse()
        this.counter = this.possibleCombinations
      }
    },
  },

  methods: {
    reset() {
      this.pause();
      this.chars = [];
      this.counter = 0;
      this.$emit('reset');
    },
    fudge() {
      // TODO: fix fudge after reset
      if (this.speed < 2) { return }

      // We don't actually guess passwords very fast, so we can cheat and
      // skip ahead in the sequence. Since we already know the password, we
      // we can't miss it.
      anime({
        targets: this,
        counter: this.counter + this.passwordsPerSecond,
        round: 1,
        duration: 1000,
        easing: 'easeInOutQuint',
        update: () => {
          // Possible values per character
          let base = this.alpha.size
          // Number of characters
          let nchars = Math.ceil(Math.log(this.counter) / Math.log(base));
          // Offset into sequences of length nchars
          let i = this.counter % Math.pow(base, nchars)
          // Find sequence at offset
          let seq = nthProduct(_.fill(Array(nchars), Array.from(this.alpha)), i)
          // Skip to sequence
          this.chars.splice(0, seq.length, ...seq.reverse())
        }
      });

    },
    next(seq, start, stop) {
      // Next string in sequence
      this.counter++

      let i = 0
      while (seq[i] == stop) {
        //seq[i++] = start 
        this.$set(seq, i++, start)
      }
      if (i == seq.length) {
        seq.push(start)
        return
      }
      //seq[i]++
      this.$set(seq, i, seq[i] + 1)
    },
    crack() {
      let start = Math.min(...this.alpha)
      let stop = Math.max(...this.alpha)

      // Simulate guesses per second.
      this.tasks.push(setInterval(this.fudge, 900))

      // Continuously increment string
      this.tasks.push(setInterval(this.next, 100, this.chars, start, stop))
    },
    pause() {
      _.each(this.tasks, clearInterval)
      this.tasks = []
    },
  }
}
</script>

<style scoped>
.password-cracker {
  padding: 0 20px;
}

input.password {
  box-sizing: border-box;
  display: inline-block;

  color: white;
  text-align: center;
  font-size: 32px;

  width: 100%;
  margin: 8px 0;
  padding-right: 10px;

  border: none;
  background: none;
}

.guess {
  position: relative;
}

.buttons {
  position: absolute;
  right: 0px;
  top: 20px;
}

.buttons button {
  font-size: 14px;
  color: #FFF;
  padding: 2px 10px;
  margin-left: 8px;
  display: inline-block;
  border: 1px solid white;
  background: none;
}

.buttons button:hover {
  background: #fff;
  color: #333;
}

.buttons button:disabled {
  opacity: 0.4;
}

/* Progress bar */
.progress {
  display: block;
  width: 100%;
  text-align: center;
}

.progress span {
  line-height: 24px;
  padding-left: 4px;
  color: #FFF;
}

.progress .bar {
  width: 100%;
  height: 4px;
  background-color: #f1f1f1;
  text-align: center !important;
  opacity: 0.4;
}

.progress .fill {
  height: 100%;
  background-color: #2196F3;
  margin: 0;
  padding: 0;
  text-align: center;
}

/* Character indicators */
.characters {
  display: block;
  text-align: left;
  height: 24px;
  margin-top: -14px;
  opacity: 0.5;
}

.characters i {
  font-size: 12px;
  border: 1px solid #ccc;
  padding: 2px 4px;
  margin: 0 4px;
  background: white;
}

.characters i.active {
 opacity: 1;
 background-color: green;
 color: #FFF;
 border: 1px solid #4CAF50 !important;
}

/* Speed slider */
.speed {
  display: inline-block;
  float: right;

  color: #FFF;
  font-size: 12px;
  text-align: center;

  width: 200px;
  margin-top: -24px;
}

.speed label {
  display: block;
  margin: 0 auto;
}

.speed span {
  display: block;
  margin: 0 auto;
}

.speed input {
  display: block;
  width: 100%;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 5px;
    margin: 8px 0;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    background: #FFF;
    cursor: pointer;
    border-radius: 50%;
}

.slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #FFF;
    cursor: pointer;
    border-radius: 50%;
}

input[type='range']::-moz-focus-outer {
  border: 0;
}


</style>
