<template>
  <div class="password-hover">
    <input
      v-bind:type="input"
      v-model="password"
      @mouseover="show"
      @mouseleave="hide"
      title="Hover over this field"
      />
  </div>
</template>

<script>
import * as _ from 'lodash';
import tippy from 'tippy.js'

export default {
  data() {
    return {
      input: 'password',
      password: 'notreallysecret',
    }
  },

  mounted() {
    let tips = tippy('input', {
      theme: 'light',
      arrow: true,
      placement: 'right',
      trigger: 'manual',
    });
    _.invokeMap(tips.tooltips, 'show');
  },

  methods: {
    show() {
      this.input = 'text'
    },
    hide() {
      this.input = 'password'
    },
  },
}
</script>

<style>

.password-hover {
  width: 400px;
  margin: 0 auto;
}

.password-hover input {
  font-size: 24px;
  text-align: center;
}

.tippy-popper[x-placement^=top] .tippy-tooltip.light-theme .tippy-arrow{
  border-top:7px solid #fff;
  border-right:7px solid transparent;
  border-left:7px solid transparent
}
.tippy-popper[x-placement^=bottom] .tippy-tooltip.light-theme .tippy-arrow{
  border-bottom:7px solid #fff;
  border-right:7px solid transparent;
  border-left:7px solid transparent
}
.tippy-popper[x-placement^=left] .tippy-tooltip.light-theme .tippy-arrow{
  border-left:7px solid #fff;
  border-top:7px solid transparent;
  border-bottom:7px solid transparent
}
.tippy-popper[x-placement^=right] .tippy-tooltip.light-theme .tippy-arrow{
  border-right:7px solid #fff;
  border-top:7px solid transparent;
  border-bottom:7px solid transparent
}
.tippy-tooltip.light-theme{
  color:#26323d;
  box-shadow:0 0 20px 4px rgba(154,161,177,.15),0 4px 80px -8px rgba(36,40,47,.25),0 4px 4px -2px rgba(91,94,105,.15);
  background-color:#fff
}
.tippy-tooltip.light-theme .tippy-backdrop{
  background-color:#fff
}
.tippy-tooltip.light-theme .tippy-roundarrow{
  fill:#fff
}
.tippy-tooltip.light-theme[data-animatefill]{
  background-color:transparent
}

</style>
