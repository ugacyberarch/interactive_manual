<template>
  <div>
    <div class="timer"></div>

    <div class="controls">
      <i v-if="paused" v-on:click="play" class="fas fa-play"></i>
      <i v-if="!paused" v-on:click="pause" class="fas fa-pause"></i>
      <i v-on:click="$emit('goto', 'menu')" class="fas fa-stop"></i>
    </div>

    <div class="question">
      <div class="nav">
        <i class="back fas fa-arrow-left"></i>
        <i class="forward fas fa-arrow-right"></i>
        <i class="reload fas fa-redo"></i>
      </div>
      <div v-bind:class="{ blurred: paused }">
        <input v-bind:value="domain" disabled />
      </div>
    </div>

    <div class="answer">
      <button v-on:click="$emit('guess', 'bad')"
        class="bad hvr-glow hvr-icon-bounce">
        <i class="fas fa-times hvr-icon"></i> BAD
      </button>
      <button v-on:click="$emit('guess', 'good')"
        class="good hvr-glow hvr-icon-bounce">
        <i class="fas fa-check hvr-icon"></i> OK
      </button>
    </div>

  </div>
</template>

<script>
import anime from 'animejs';

require('hover.css');

export default{
  props: ['domain'],

  data() {
    return {
      time: 1 * 60 * 1000,
      paused: false,
    }
  },

  mounted() {
    this.timer = anime.timeline()
    .add({
      targets: '.timer',
      duration: 2000,
      height: ['0%', '90%'],
     })
    .add({
      targets: '.timer',
      delay: 0,
      duration: this.time,
      easing: 'linear',
      height: ['90%','0%'],
      complete: () => {
        this.$emit('goto', 'score');
      },
    })
  },

  methods: {
    play() {
      if (this.timer) {
        this.paused = false;
        this.timer.play();
      }
    },
    pause() {
      if (this.timer) {
        this.paused = true;
        this.timer.pause();
      }
    },
  },
}
</script>

<style scoped>

.timer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #5DABE5;
  opacity: 0.7;
}

.controls {
  text-align: right;
  color: #EFA32C;
  font-weight: bold;
  font-size: 24px;
}

.controls i {
  padding: 4px;
}

.controls i:hover {
  color: #FCAB0D;
}

.question {
  margin: 0 auto;

  padding: 10px 0;
  margin-top: 40px;

  vertical-align: middle;
  background-color: #E7EAED;
}

.question div {
  display: inline-block;
}

.question .nav {
  padding-left: 10px;
  font-size: 24px;
  color: #777;

}

.question .nav i {
  padding: 0 6px;
}

.question input {
  width: 530px;
  margin-left: 20px;
  padding-left: 20px;
  font-size: 32px;
  font-family: Helvetica;
  font-weight: bold;
}

.blurred {
  filter: blur(7px);
}

.answer {
  margin: 0 auto;
  padding: 20px 0 0 0;
  width: 400px;
  text-align: center;
}

.answer button {
  color: #FFF;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  outline: none;
}

.answer button i {
  padding: 0 8px 0 0;
}

.answer button.good {
  color: #AECCA6;
  background: #406056;
}

.answer button.bad {
  color: #F5F3E2;
  background: #D64436;
}
</style>
