<template>
  <div class="widget">
    <div class="url">
      <span
        v-for="(value, name) in parts"
        v-bind:class="[name, { split : split, selected: selected === name }]"
        @click="select(name)">
        {{ value }}
      </span>
    </div>

    <div class="explanation" v-bind:class="selected">
      <p v-if="!split">
        Let's break this URL down.
      </p>

      <p v-if="split && !selected">
        Click on each piece for an explanation.
      </p>

      <p v-if="selected === 'scheme'">
        <b>Protocol</b>:<br />
        <i>You don't usually type this part.</i><br />
        <code>http://</code> is not secured from snooping, and<br />
        <code>https://</code> is secured from snooping with encryption.<br />
      </p>

      <p v-if="selected === 'hostname'">
        <b>Hostname</b>:<br />
        <i>This is all you usually need to type.</i><br />
        Hostnames are also called domains as we discussed previously.<br />
        Find the domain name between <code>://</code> and the first
        <code>/</code> to verify you are in the right place.
      </p>

      <p v-if="selected === 'path'">
        <b>Path</b>:<br />
        <i>You don't usually type this part, either.</i><br />
        This part of the URL says where you are on a website,<br />
        and it can be quite long. Focus on the hostname before it.
      </p>

      <div class="controls">
        <button v-if="!split" @click="splitURL">Split URL</button>
        <button v-if="false" @click="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      split: false,
      parts: {
        scheme: 'http://',
        hostname: 'www.example.com',
        path: '/index.html',
      },
      selected: undefined,
    }
  },

  computed: {
  },

  methods: {
    splitURL() {
      this.split = true
    },
    select(part) {
      this.selected = part
    },
    reset() {
      this.split = false
      this.selected = null
    },
  }

}
</script>

<style scoped>
.widget {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.url {
  width: 100%;
  height: 60px;
}

.controls {
  width: 100%;
  margin: 10px;
}

.explanation {
  width: 100%;
  min-height: 140px;
  padding: 0 40px;

  z-index: 100;
  padding: 8px 20px;
  margin-bottom: 2px;
  box-shadow: 0 1px 1px rgba(57, 70, 78, 0.2);
}

.explanation.scheme {
  box-shadow: 1px 0px 5px rgba(116, 66, 108, 0.8);
}

.explanation.hostname {
  box-shadow: 1px 0px 5px rgba(137, 143, 82, 0.8);
}

.explanation.path {
  box-shadow: 1px 0px 5px rgba(165, 136, 93, 0.8);
}

span.split.selected:after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 18px;
  border-width: 15px 15px 0;
  border-style: solid;
  border-color: silver transparent;
  opacity: 0.9;
}

span.split.selected.scheme:after {
  border-color: #74426C transparent;
}

span.split.selected.hostname:after {
  border-color: #898F52 transparent;
}

span.split.selected.path:after {
  border-color: #A5885D transparent;
}

.url span {
  font-size: 30px;
  padding: 8px 0;
  position: relative;
}

span.split {
  opacity: 0.8;
  margin: 0 4px;
  border-radius: 2px;
  padding: 4px 10px;
  color: #FFF;
  cursor: pointer;
}

span.split:hover {
  opacity: 1;
}

span.scheme.split {
  border-color: #74426C;
  background-color: #765270;
}

span.hostname.split {
  border-color: #898F52;
  background-color: #898F52;
}

span.path.split {
  border-color: #A5885D;
  background-color: #A79274;
}

.controls button {
  padding: 4px 24px;
  font-size: 24px;
  background: none;
  color: #AAA;
  border: 2px solid #DDD;
  border-radius: 2px;
}

.controls button:hover {
  border: 2px solid #BBB;
  color: #777;
  border-radius: 2px;
}

.controls button:focus {
  outline:0;
}
</style>
