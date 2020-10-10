<template>
  <div class="guessing-game">
    <component
      v-bind:domain="domain"
      v-bind:score="score"
      v-bind:is="currentView"
      v-on:goto="goto"
      v-on:guess="guessed"
      />
  </div>
</template>

<script>
import * as _ from 'lodash';

const domains = require('./GuessingGame/domains.js');

export default {
  data() {
    var [domain, phish] = this.pickDomain();

    return {
      view: 'menu',
      domain: domain,
      phish: phish,
      correct: 0,
      incorrect: 0,
    }
  },

  computed: {
    currentView() {
      return 'Phishing-GuessingGame-' + _.capitalize(this.view);
    },

    score() {
      return {
        correct: this.correct,
        total: this.correct + this.incorrect
      }
    },
  },

  methods: {
    goto(view) {
      this.view = view;
    },

    guessed(answer) {
      // Check answer
      let phish = (answer === 'bad');  
      if (phish == this.phish) {
        this.correct++;
      } else {
        this.incorrect++;
      }
      // Set new question
      [this.domain, this.phish] = this.pickDomain();
    },

    pickDomain() {
      let set = _.sample(['phish', 'valid']);
      return [_.sample(domains[set]), set === 'phish'];
    },
  },
}
</script>

<style scoped>

.guessing-game {
  position: relative;
  height: 300px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(57, 70, 78, 0.2);
}

.play {
  margin: 0 auto;
  width: 480px;
  text-align: center;
}

.logo {
  font-size: 50px;
  margin: 80px 0 30px 0;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.8);
}

.logo span {
  padding: 0 8px;
}

.fishing {
  position: absolute;
  top: 0;
  z-index: -1;
}

.tail {
  animation: fishtail 2s infinite;
  transform-origin: 50% 80% 0;
}

@keyframes fishtail {
  from { transform: rotateY(30deg) skewX(7deg); }
  to { transform: rotateY(-30deg) skewX(7deg); }
}

.play button {
  width: 100px;
  margin: 0 auto;
  padding: 4px 0;

  color: #fff;
  font-size: 30px;
  border: none;
  background: #EFA32C;
}

.play button:hover {
  outline: none;
  background: #FCAB0D;
}

</style>
