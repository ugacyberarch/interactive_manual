<template>
  <div class="hsimp-wrapper">

    <div class="hsimp" v-bind:class="security">

      <input type="password" v-model="password" placeholder="ENTER PASSWORD" />

      <Password-Cracker
        v-bind:password="password"
        v-bind:speed="speed"
        v-on:change-speed="changeSpeed"
        v-on:reset="reset"
        />

      <div class="content">

        <div class="time" v-if="password.length > 0">
          <span v-if="security == 'insecure'">
            Your password would be cracked
          </span>
          <span v-else>
            It will take a computer about
          </span>
          {{ time }}
          <span v-if="security != 'insecure'">
            to crack your password.
          </span>
        </div>

        <dl v-if="checks">
          <template v-for="check in checks">
            <dt v-bind:class="check.level">{{ check.name }}</dt>
            <dd>{{ check.message }}</dd>
          </template>
        </dl>

      </div>

    </div>
  </div>
</template>

<script>
import * as _ from 'lodash';
const hsimp = require('./hsimp')

export default {
  data() {
    return {
      password: '',
      speed: 10,
      ok: 31557600, // 1 year
      good: 31557600e3, // 1,000 years
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
    possibleCombinations() {
      return Math.pow(this.alpha.size, this.password.length)
    },
    calculationsPerSecond() {
      return Math.pow(10, this.speed) * 4
    },
    timeInSeconds() {
      return this.possibleCombinations / this.calculationsPerSecond;
    },
    time() {
      let checker = hsimp.checker(this.password)
      if (checker.isInsecure()) {
        return 'Instantly'
      }

      let period = hsimp.period(this.timeInSeconds)
      let periodLength = period.getLength()

      let formattedPeriodLength = hsimp.namedNumber(periodLength).getName();
      let periodName = formattedPeriodLength === "1"
          ? period.getSingular()
          : period.getPlural();

      let periodString = formattedPeriodLength + " " + periodName;


      return periodString
    },
    security() {
      let level, checker

      if (this.password.length > 0) {
        level = "bad"
        checker = hsimp.checker(this.password)

        if (checker.isInsecure()) {
          level = "insecure"
        }
        else if (this.timeInSeconds >= this.good) {
          level = checker.hasWarnings() ? "ok" : "good"
        }
        else if (this.timeInSeconds >= this.ok) {
          level = "ok"
        }
      }

      return level
    },
    checks() {
      return hsimp.checker(this.password).getChecks()
    },
  },
  methods: {
    changeSpeed(speed) {
      this.speed = parseInt(speed);
    },
    reset() {
      this.password = '';
      this.speed = 10;
    },
  }

}
</script>

<style scoped>
.hsimp-wrapper {
}

.hsimp {
  padding-top: 30px;
  background: #376a82;
  transition: background 1s linear;
  min-height: 200px;
}
.hsimp.bad,
.hsimp.insecure {
  background: #c23333;
}
.hsimp.ok {
  background: #db7d3a;
}
.hsimp.good {
  background: #378241;
}

.hsimp input {
  font-family: "Helvetica Neue", sans-serif;
  font-weight: 800;
  line-height: 1.5em;
  text-align: center;
  font-size: 32px;
  border: 1px solid #fff;
  background: #fff;
  background: rgba(255,255,255,0.6);
  border-left: 0;
  border-right: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
}

.hsimp input::placeholder {
  color: #376a82;
}

.hsimp input:focus {
  outline: 0;
}

.hsimp .content {
  padding: 10px 30px;
  margin-top: 0;
}

.hsimp .time {
  margin-top: 0 !important;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  font-variant: small-caps;
  color: #fff;
}

.hsimp .time span {
  font-size: 0.4em;
  display: block;
  font-weight: bold;
  font-variant: none;
}

.hsimp dl {
  background: #fff;
  background: rgba(255,255,255,0.8);
}

.hsimp dt {
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  background: #000;
  padding: 4px 14px;
}

.hsimp dt.warning {
  color: #db7d3a;
}

.hsimp dt.achievement {
  color: #378241;
}

.hsimp dt.notice {
  color: #376a82;
}

.hsimp dt.insecure {
  color: #c23333;
}

.hsimp dd {
  padding: 10px 0;
}

</style>
