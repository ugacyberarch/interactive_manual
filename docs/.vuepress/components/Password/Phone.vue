<template>
  <div class="phone">

    <div id="google-pixel-2-xl" class="container grid-xl text-center">
      <div class="columns">
        <div class="column col-12">
          <div class="device device-google-pixel-2-xl">
            <div class="device-frame">

              <div v-if="noPin" class="prompt">
                Choose your PIN
              </div>

              <div v-bind:class="pinClass">
                <input v-for="i in 4" :value="guess[i-1]" disabled />
              </div>

              <div class="numberpad">
                <ul>
                  <li v-for="x in 9">
                    <button v-on:click="pressed(x)" :disabled="disabled">
                      {{ x }}
                    </button>
                  </li>
                  <li></li>
                  <li>
                    <button v-on:click="pressed(0)">0</button>
                  </li>
                  <li></li>
                </ul>
              </div>

            </div>
            <div class="device-stripe"></div>
            <div class="device-header"></div>
            <div class="device-sensors"></div>
            <div class="device-btns"></div>
            <div class="device-power"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="timer">
        <i class="fas fa-stopwatch"></i>
        <input class="timer" :value="timer" disabled />
      </div>

      <div class="buttons">
        <button v-on:click="crack" class="crack" :disabled="noPin">
          Crack
        </button>

        <button v-on:click="reset" class="reset" :disabled="noPin">
          Reset
        </button>
      </div>
    </div>

  </div>

</template>

<script>
import * as _ from 'lodash'
import anime from 'animejs'

require('animate.css')

export default {
  data() {
    return {
      i: 0,
      size: 4,
      pin: [],
      guess: [],
      locked: false,
      timer: '0ms',
    }
  },
  computed: {
    noPin() {
      return this.pin.length < this.size
    },
    disabled() {
      return this.guess.length == this.size
    },
    pinClass() {
      let valid = this.validate()
      return {
        'pin': true,
        'error animated infinite headShake':
          (valid == undefined) ? false : !valid,
        'success': valid,
      }
    },
  },
  methods: {
    reset() {
      Object.assign(this.$data, this.$options.data())
    },
    clear() {
      this.i = 0
      this.guess = []
    },
    pressed(n) {
      if (this.pin.length < this.size) {
        this.pin.push(n)
      }
      this.guess.push(n)
    },
    validate() {
      let valid = undefined
      if (this.guess.length == this.size) {
        valid = _.isEqual(this.pin, this.guess)
        setTimeout(this.clear, 700)
      }
      return valid
    },
    crack() {
      // Silly animations

      let t1 = performance.now()
      for (var i = 0; i < 10000; i++) {
        if (i == parseInt(this.pin.join(''), 10)) {
          break
        }
      }
      let t2 = performance.now()

      anime({
        targets: this,
        timer: (t2 - t1) + 'ms',
        round: 1,
        easing: 'linear',
        update: () => {
          document.querySelector('.timer input').value = this.timer
        },
      })

      var guess = { pin: 0 };
      anime({
        targets: guess,
        pin: parseInt(this.pin.join('')),
        round: 1,
        update: () => {
          let inputs = document.querySelectorAll(".pin input")
          let pin =_.map(_.chunk(_.padStart(guess.pin, 4, '0'), 1), _.toInteger)
          _.map(_.zip(inputs, pin), (t) => { t[0].value = t[1] })
        }
      })
      .finished.then(() => { this.guess = this.pin })

    },
  },
}
</script>

<style scoped>

.panel {
  position: relative;
  top: 100px;
  left: 300px;
  width: 300px;
}

.panel .timer {
  position: relative;
  height: 68px;
  width: 260px;
  margin-bottom: 20px;
}

.panel i.fas {
  color: #DDD;
  font-size: 60px;
  vertical-align: middle;
  position: absolute;
  top: 8px;
  left: 18px;
}

.panel .timer input {
  background: none;
  font-size: 60px;
  border: none;
  color: #999;
  padding-left: 90px;
}

.panel button {
  color: #FFF;
  font-size: 30px;
  margin-right: 10px;
}

.panel button:disabled {
  opacity: 0.2;
}

button.reset {
  background: #5E82A7;
  border: 4px solid #B5C3DE;
}

button.crack {
  background: #c62933;
  border: 4px solid #d85058;
}

.phone {
  width: 500px;
  min-height: 500px;
  margin: 30px auto;
}

.prompt {
  color: #CCC;
  font-size: 40px;
  position: absolute;
  left: 58px;
  top: 120px;
}

.pin {
  text-align: center;
  margin-top: 140px;
}

.pin input {
  font-size: 60px;
  display: inline-block;
  width: 1.2em;

  background: none;
  color: #CCC;
  border: 2px solid #424242;

  margin: 4px;
  text-align: center;
}

.pin.success input {
  border: 2px solid #196F3D;
}

.pin.error input {
  border: 2px solid #C0392B;
}

.numberpad  {
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 140px;
  z-index: 3;
}

.numberpad ul {
  padding: 0;
  list-style-type: none;
}

.numberpad li {
  padding: 0;
  margin-top: 16px;
  display: inline-block;
}

.numberpad button {
  margin: 0;
  padding: 0;

  width: 100px;
  font-size: 48px;
  color: #CCC;
  background: none;
  border: none;
}

.numberpad button:focus {
  outline: 0;
}

.numberpad button:hover {
  color: #DDD;
  background-color: #3d3d3d;
  opacity: 0.7;
  border-radius: 8px;
}

/*! Devices.css v0.1.16 | MIT License | github.com/picturepan2/devices.css */
.device,
.device::before,
.device::after,
.device *,
.device *::before,
.device *::after {
  box-sizing: border-box;
  display: block;
}

.device {
  position: absolute;
  transform-origin: left top 0;
  transform: scale(0.6);
  z-index: 1;
}

.device .device-frame {
  z-index: 1;
}

.device .device-content {
  background-color: #fff;
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  position: relative;
}

.device-google-pixel-2-xl {
  height: 832px;
  width: 404px;
}

.device-google-pixel-2-xl .device-frame {
  background: #121212;
  border-radius: 36px;
  box-shadow: inset 0 0 0 2px #cfcfcf, inset 0 0 0 7px #9c9c9c;
  height: 832px;
  padding: 56px 22px;
  width: 404px;
}

.device-google-pixel-2-xl .device-content {
  border-radius: 27px;
  height: 720px;
  width: 360px;
}

.device-google-pixel-2-xl .device-header {
  height: 832px;
  left: 50%;
  margin-left: -150px;
  position: absolute;
  top: 0;
  width: 300px;
}

.device-google-pixel-2-xl .device-header::after,
.device-google-pixel-2-xl .device-header::before {
  background: #333;
  border-radius: 3px;
  content: "";
  height: 6px;
  left: 50%;
  margin-left: -73px;
  margin-top: -3px;
  position: absolute;
  width: 146px;
}

.device-google-pixel-2-xl .device-header::after {
  top: 24px;
}

.device-google-pixel-2-xl .device-header::before {
  bottom: 28px;
}

.device-google-pixel-2-xl .device-sensors {
  background: #333;
  border-radius: 7px;
  height: 14px;
  left: 54px;
  margin-top: -7px;
  position: absolute;
  top: 36px;
  width: 14px;
}

.device-google-pixel-2-xl .device-btns {
  background: #cfcfcf;
  height: 102px;
  position: absolute;
  right: -3px;
  top: 306px;
  width: 3px;
}

.device-google-pixel-2-xl .device-power {
  background: #cfcfcf;
  height: 58px;
  position: absolute;
  right: -3px;
  top: 194px;
  width: 3px;
}


</style>
