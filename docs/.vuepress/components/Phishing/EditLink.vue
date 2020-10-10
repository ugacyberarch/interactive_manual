<template>
  <div class="phishing-link">

    <div class="row">
      <!-- <a href="[      ]" -->
      <span>&lt;a href="</span>
      <input
        v-model="href"
        title="Where you go."
        data-tippy
        data-tippy-arrow="true"
        data-tippy-placement="right"
        data-tippy-trigger="manual"
        data-tippy-hideonclick="persistent"
        data-tippy-distance="30"
        data-tippy-flip="false"
        class="href" />
      <span>"&gt;</span><br>

      <!-- [      ] -->
      <input
        v-model="content"
        title="What you see."
        data-tippy
        data-tippy-arrow="true"
        data-tippy-placement="right"
        data-tippy-trigger="manual"
        data-tippy-hideonclick="persistent"
        data-tippy-flip="false"
        class="content" /><br>

      <!-- </a> -->
      <span>&lt;/a&gt;</span>
    </div>

    <div class="row">
      <a v-bind:href="href">{{ content }}</a>
    </div>

  </div>
</template>

<script>
import * as _ from 'lodash';
import tippy from 'tippy.js';

export default {
  data() {
    return {
      href: 'https://en.wikipedia.org/wiki/Phishing',
      content: 'http://paypal.com/account',
    }
  },

  mounted() {
    this.tips = tippy('[data-tippy]');
    _.invokeMap(this.tips.tooltips, 'show');
  },

  destroyed() {
    _.invokeMap(this.tips.tooltips, 'destroy');
  },

}
</script>

<style scoped>
.phishing-link {
  margin: 20px 0;
  font-size: 20px;
}

h4 {
  margin: 0;
  padding: 4px 8px;
  margin-bottom: 30px;
  background: #505C8A;
  color: #FFF;
}

.row {
  display: block;
  width: 100%;
  padding: 20px 0;
}

.left, .right {
  display: inline-block;
  vertical-align: top;
  width: 50%;
}

.row:nth-child(2) {
  border: 1px solid #c0c0c0;
  padding: 20px;
}

textarea {
  box-sizing: border-box;

  font-size: 16px;

  width: 98%;
  padding: 10px;

  border: 1px solid #C0C0C0;
  resize: none;
  outline: none;
}

input {
  font-size: 20px;
  width: 400px;
  padding: 0 10px;
}

input.content {
  margin: 10px 30px;
  padding: 0 10px;
}

</style>
