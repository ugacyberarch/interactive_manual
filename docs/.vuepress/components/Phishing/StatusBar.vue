<template>
  <div class="hover-link">

    <div class="link">
      <a
        v-on:click.prevent="click"
        v-on:mouseenter="active = true"
        v-on:mouseleave="active = false"
        v-bind:href="href">
        {{ content }}
      </a>
    </div>

    <div v-if="active" class="statusbar">
      {{ href }}
    </div>

    <div v-if="active" class="arrow animated infinite bounce">
      <i class="fas fa-arrow-down"></i>
    </div>
  </div>
</template>

<script>
require('animate.css');

export default {
  props: ['href', 'content'],

  data() {
    return {
      active: false,
    }
  },

  methods: {
    click(event) {
      if (event) {


      }
    },
  },
}
</script>

<style scoped>

.hover-link {
  min-height: 140px;
}

.link {
  text-align: center;
  font-size: 32px;
}

.statusbar {
  position: absolute;
  left: 0;
  bottom: 0;

  font-size: 14px;

  width: 40%;
  padding: 4px;

  border-radius: 4px;
  background-color: #f1f1f1;
}

.arrow {
  position: relative;
  bottom: 20px;
  left: 20px;
  font-size: 100px;
  color: #f1f1f1;
}


</style>
