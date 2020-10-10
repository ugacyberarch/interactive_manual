<template>
  <div class="browser-window">
    <div class="row">
      <div class="column left">
        <span class="dot" style="background:#ed594a;"></span>
        <span class="dot" style="background:#fdd800;"></span>
        <span class="dot" style="background:#5ac05a;"></span>
        <div class="nav">
          <i class="back fas fa-arrow-left"></i>
          <i class="forward fas fa-arrow-right"></i>
          <i class="forward fas fa-redo"></i>
        </div>
      </div>
      <div class="column middle">
        <input type="text" :value="location" disabled />
      </div>
      <div class="column right">
        <div style="float:right">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>

    <div v-if="!!$slots.default" class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: ['url'],

  data() {
    return {
      location: this.url,
    }
  },

  mounted () {
    this.$on('change-url', this.changeURL)
  },

  methods: {
    changeURL(url) {
      this.location = url
    },
  },
}

</script>

<style scoped>

/* Browser window */
.browser-window {
  z-index: 1;
  position: relative;
  border: 3px solid #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #f1f1f1;
  transform-origin: left top 0;
}

/* Container for columns and the top "toolbar" */
.row {
  padding: 10px;
  background: #f1f1f1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

/* Create three unequal columns that floats next to each other */
.column { float: left; }
.left { width: 20%; }
.right { width: 10%; }
.middle { width: 70%; }

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Three dots */
.dot {
  margin: 4px 2px 0 2px;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

/* Style the input field */
.row input[type=text] {
  width: 98%;
  border-radius: 3px;
  border: none;
  background-color: white;
  margin-top: -8px;
  height: 25px;
  color: #666;
  padding: 5px;
}

.nav {
  display: inline-block;
  padding: 2px 10px;
}

.nav i {
  padding: 0 4px;
  color: #aaa;
}

/* Three bars (hamburger menu) */
.bar {
  width: 17px;
  height: 3px;
  background-color: #aaa;
  margin: 3px 0;
  display: block;
}


/* Page content */
.content {
  padding: 10px;
  background-color: white;
}

</style>
