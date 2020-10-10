<template>
  <div class="game">

    <div class="controls">
      <div class="left">
        <form @submit.prevent="submit">
          <input v-model="guess" type="password" placeholder="Password" />
          <input type="submit" value="Submit"/>
        </form>
      </div>
      <div class="right">
        <button v-on:click="reset">Reset</button>
        <!-- <button>High Scores</button> -->
      </div>
      <div style="clear:both;"></div>
    </div>

    <div class="gameboard">

      <div class="x" v-if="miss">X</div>

      <div class="left column">
        <div class="item" v-for="guess in leftColumn">
          <input :value="guess.value" disabled />
          <input :value="guess.score" disabled />
        </div>
      </div>
      <div class="right column">
        <div class="item" v-for="guess in rightColumn">
          <input :value="guess.value" disabled />
          <input :value="guess.score" disabled />
        </div>
        <div class="total">
          <input value="TOTAL" disabled />
          <input name="score" :value="score" disabled />
        </div>
      </div>
      <div style="clear:both;"></div>
    </div>

  </div>
</template>

<script>
import * as sha1 from 'js-sha1';

export default {
  props: ['size'],

  data() {
    let guesses = []
    for (var i = 0; i < this.size; i++) {
      guesses.push({ value: '', score: '' })
    }
    return {
      slot: 0,
      guess: '',
      guesses: guesses,
      miss: false,
    }
  },

  methods: {
    submit() {
      let hash = sha1(this.guess).toUpperCase()
      let prefix = hash.slice(0, 5)
      let suffix = hash.slice(5, 40)

      fetch('https://api.pwnedpasswords.com/range/' + prefix)
        .then(response => { return response.text() })
        .then(data => {
          let block = {}
          data.split('\n').forEach((line) => {
            let entry = line.split(':')
            block[entry[0]] = parseInt(entry[1])
          })
          return block
        })
        .then(block => {
          // Update scoreboard
          let guess = { value: this.guess, score: block[suffix] || 0 }
          this.$set(this.guesses, this.slot, guess)

          // Show X buzzer, if not found
          if (guess.score < 1) {
            this.miss = true
            setTimeout(() => this.miss = false, 1000);
          }

          // Reset input, move to next scoreboard entry
          this.guess = ''
          this.nextSlot()
        })
    },
    reset() {
      this.slot = 0
      this.guess = ''
      this.guesses = []
      for (var i = 0; i < this.size; i++) {
        this.guesses.push({ value: '', score: '' })
      }
    },
    nextSlot() {
      this.slot = (this.slot + 1) % this.size
    },
  },

  computed: {
    rows() {
      return this.size / 2
    },
    score() {
      let total = 0;
      for (var i = 0; i < this.guesses.length; i++) {
        total = total + (parseInt(this.guesses[i].score) || 0)
      }
      return total.toLocaleString()
    },
    leftColumn() {
      return this.guesses.slice(0, this.size / 2)
    },
    rightColumn() {
      return this.guesses.slice(this.size / 2, this.size)
    },
  },
}
</script>

<style scoped>

.controls {
  margin: 20px 0;
}

.controls input {
  font-size: 24px;
  padding: 2px 8px;
  margin-right: 10px;
}

.controls button,
.controls input[type="submit"] {
  font-size: 24px;
  background: none;
  padding: 2px 8px;
  margin-right: 10px;
}

.gameboard {
  position: relative;

  width: 680px;
  padding: 20px 20px;
  border: #111 solid;
  border-width: 14px 10px;
  background-color: #0642a3;
}

.controls .left {
  width: 60%;
  margin: 0;
}

.game .left {
  float: left;
}

.game .right {
  float: right;
}

.gameboard .column {
  width: 50%;
  height: 100%;
  text-align: center;
}

.item {
  margin: 8px 0;
}

.gameboard input {
  border: none;
  font-size: 24px;
  color: #f2f2f2;
  padding: 2px 8px;
  margin: 0x;
  background-color: #111;
  border-radius: 2px;
}

.gameboard .item input:nth-child(1) {
  width: 50%;
  margin-right: 2%;
}

.gameboard .item input:nth-child(2) {
  width: 30%;
}


.total {
  text-align: right;
  margin-right: 4%;
}

.total input:nth-child(1) {
  width: 30%;
  margin: 0;
}

.total input:nth-child(2) {
  width: 40%;
  text-align: right;
}

.gameboard .x {
  padding: 0;
  margin: 0;

  border: 30px solid red;
  
  position: absolute;
  top: 8%;
  left: 35%;
  z-index: 1;
  
  width: 20%;

  text-align: center;
  font-family: Verdana;
  font-size: 12em;
  font-weight: bold;
  color: red;
}

</style>
