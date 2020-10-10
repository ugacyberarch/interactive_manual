<template>
  <div class="lottery">
    <div class="ticket">
      <ul class="logo">
        <li>M</li><li>O</li><li>N</li><li>E</li><li>Y</li><li>Y'ALL</li>
      </ul>

      <div class="lead">
        TODAY'S MONEYY'ALL JACKPOT IS $700,000,000!<br>
        HERE'S YOUR CHANCE.
        GUESS THE MONEYY'ALL NUMBERS NOW!
      </div>

      <div class="ticket-numbers">
        <ul>
          <li v-for="pick in picks"
            v-bind:class="[ isWin(pick) ? 'animated infinite shake' : '' ]">
            <span v-for="number in pick">
              {{ number | pad }}
            </span>
          </li>
        </ul>
      </div>

      <div class="barcode">
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
      </div>
    </div>

    <div class="panel">
      <span class="lead">Today's Winning Numbers:</span>

      <div class="winning-numbers">
        <div v-for="number in winner" class="ball animated rollIn">
            <div class="number">{{ number }}</div>
        </div>
      </div>

      <button
        v-if="winner.length == 0"
        v-on:click="draw"
        title="Draw lottery numbers to begin"
        data-tippy
        data-tippy-arrow="true"
        data-tippy-placement="left"
        data-tippy-trigger="manual"
        data-tippy-hideonclick="persistent"
        class="draw">
        Draw
      </button>
      <button v-if="winner.length > 0" v-on:click="reset" class="reset">
        Reset
      </button>

      <div style="clear:both;"></div>

      <div class="crack">
        <label>
          Speed: <span>({{ guessesPerSecond.toLocaleString() }}/second)</span>
        </label>
        <input
          v-model="speed"
          type="range"
          title="Adjust guess speed to see how long it will take to guess all possible numbers"
          data-tippy
          data-tippy-arrow="true"
          data-tippy-placement="bottom"
          data-tippy-trigger="manual"
          data-tippy-hideonclick="persistent"
          data-tippy-flip="false"
          v-on:change="$event.target._tippy.hide()"
          min="1" max="10" class="slider" />

        
        <div class="estimate">
          Estimated Time:<br></br>
          <i class="fas fa-stopwatch"></i>
          <span>{{ totalTimePeriod }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
require('animate.css')
import * as _ from 'lodash';
import tippy from 'tippy.js';
const hsimp = require('./hsimp');

export default {

  data() {
    return {
      speed: 1,
      winner: [],
      picks: _.times(4, this.randomPick),
      tasks: [],
    }
  },

  filters: {
    pad: (n) => _.padStart(n, 2, 0),
  },

  mounted() {
    this.tips = tippy('[data-tippy]');
    _.invokeMap(this.tips.tooltips, 'show');
  },

  destroyed() {
    _.invokeMap(this.tips.tooltips, 'destroy');
  },

  computed: {
    guessesPerSecond() {
      return Math.pow(10, this.speed);
    },
    totalTime() {
      let possible = Math.pow(69, 5) * 26;
      return possible / this.guessesPerSecond;
    },
    totalTimePeriod() {
      let period = hsimp.period(this.totalTime)
      let periodLength = period.getLength()

      let formattedPeriodLength = hsimp.namedNumber(periodLength).getName();
      let periodName = formattedPeriodLength === "1"
          ? period.getSingular()
          : period.getPlural();

      let periodString = formattedPeriodLength + " " + periodName;

      return periodString
    },
  },

  methods: {
    randomPick() {
      return _.times(5, () => _.random(1, 69)).concat(_.random(1, 26))
    },
    pickNumbers() {
      this.picks = _.times(4, this.randomPick);

      // Stop if we would have guessed by now
      let now = performance.now();
      if (this.start && (now - this.start > this.totalTime * 1000)) {
        this.picks.pop();
        this.picks.push(this.winner);
        this.picks = _.shuffle(this.picks);
        _.each(this.tasks, clearInterval)
        this.tasks = []
      }
    },
    draw(event) {
      // Draw random numbers and start "guessing"
      this.winner = this.randomPick();
      this.tasks.push(setInterval(this.pickNumbers, 100));
      this.start = performance.now()
      event.target._tippy.hide();
    },
    reset() {
      // Clear winning numbers and stop "guessing"
      this.winner = [];
      _.each(this.tasks, clearInterval)
      this.tasks = []
    },
    isWin(n) {
      return _.isEqual(this.winner, n);
    },
  },
}
</script>

<style scoped>

.lottery {
  margin: 30px 0;
}

.lottery .ticket { 
  display: inline-block;

  width: 350px;
  height: 100%;

  margin: 0;
  padding: 0;

  border: 4px solid #DEA1BF;
  border-left: 20px solid #DEA1BF;
  background-image: url("/interactive-manual/sakura.png");
}

.lottery .panel {
  display: inline-block;

  width: 340px;
  height: 100%;

  margin: 0 0 0 20px;
  padding: 0;

  vertical-align: top;
}

.lottery ul.logo {
  display: inline-block;

  height: 100px;

  padding: 0;
  margin: 0 auto;
  margin-left: 6px;
  margin-top: 60px;

  list-style-type: none;
}

.lottery .logo li {
  display: inline-block;

  width: 50px;
  height: 50px;

  text-align: center;
  font-weight: bold;
  font-family: Verdana;
  line-height: 50px;

  border-radius: 50%;
  border: 3px solid black;
}

.lottery .logo li:last-child {
  color: white;
  background-color: black;
}

.lottery .ticket .lead {
  color: #333;
  text-align: center;

  margin-top: -20px;
  padding: 0 30px;
  padding-bottom: 10px;

  border-bottom: 2px dashed black;
}

.lottery .ticket-numbers {
  text-align: center;

  width: 100%;
  padding: 20px 0;
  
  font-family: "Courier New", Courier, monospace;
}

.lottery .ticket-numbers ul {
  list-style-type: none; 
  margin: 0;
  padding: 0;
}

.lottery .ticket-numbers {
  font-size: 24px;
  font-weight: bold;
}

.lottery .ticket-numbers li span:last-child {
  margin-left: 14px;
}

.lottery .barcode {
  width: 200px;
  height: 40px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
}

.lottery .barcode i {
  display: inline-block;
  height: 40px;
  margin-right: 2px;
  background-color: black;
}

.lottery .barcode i:nth-child(odd) {
  width: 2px;
}

.lottery .barcode i:nth-child(even) {
  width: 4px;
}

.lottery .barcode i:nth-child(3n+0) {
  margin-right: 3px;
  width: 2px;
}

.lottery .panel .lead {
  display: block;
  font-size: 24px;
  padding: 8px 0;
  text-align: center;
}

.lottery .panel button {
  float: right;
  font-size: 18px;
}

.winning-numbers {
  text-align: center;

  height: 60px;
  margin: 8px 0;
  padding: 8px 0 0 0;

  border: 4px solid #f8f8f8;
}

.ball {
  display: inline-block;

  width: 50px;
  height: 50px;
  margin: 2px;

  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
}

.ball .number {
  text-align: center;
  font-size: 18px;
  line-height: 50px;
}

.crack {
  padding: 20px 0 0 0;
}

.crack label {
  font-size: 18px;
}

.crack label span {
  float: right;
}

.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
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
    width: 25px;
    height: 25px;
    background: #313D35;
    cursor: pointer;
    border-radius: 50%;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #313D35;
    cursor: pointer;
    border-radius: 50%;
}

input[type='range']::-moz-focus-outer {
  border: 0;
}

.estimate {
  text-align: center;
  margin-top: 80px;
  font-size: 20px;
}

.estimate span {
  width: 80%;
  font-size: 30px;
  padding-left: 10px;
}

.estimate i {
  text-align: center;
  width: 20%;
  color: #DDD;
  font-size: 50px;
  vertical-align: middle;
}

</style>
