<template>
  <div class="browser-window">
    <div class="row">
      <div class="column left">
        <span class="dot" style="background:#ed594a;"></span>
        <span class="dot" style="background:#fdd800;"></span>
        <span class="dot" style="background:#5ac05a;"></span>
      </div>
      <div class="column middle">
        <input type="text" :value="uri" disabled />
      </div>
      <div class="column right">
        <div style="float:right">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="login">
        <div class="brand">
          <i>MB</i><span>MyBank</span>
        </div>
        <form @submit.prevent="submit">
          <input type="text" placeholder="username" v-model="username" />
          <input :type="fieldType" placeholder="password" v-model="password" />
          <input type="submit" value="Login" :disabled="disabled"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import * as _ from 'lodash';

export default {
  props: ['screen', 'username', 'password'],

  data() {
    return {
      uri: 'http://mybank.example.com',
      hidePassword: true,
    }
  },

  computed: {
    fieldType() {
      return (this.hidePassword ? 'password' : 'text');
    },
    disabled() {
      if (this.screen && this.screen.scale < 1) {
        return true
      }
      return false
    },
  },

  methods:  {
    submit() {
      this.hidePassword = false;
      this.$emit('change', {username: this.username, password: this.password});
      this.$emit('start');
    },
  },

  watch: {
    screen(newScreen, oldScreen) {
      anime({
        targets: this.$el,
        duration: 400,
        scale: newScreen.scale,
        top: newScreen.top + 10,
        left: newScreen.left + 16,
      })
    }
  },
}

</script>

<style scoped>
/* Browser window */
.browser-window {
  z-index: 1;
  width: 100%;
  position: absolute;
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
.column {
  float: left;
}

.left {
  width: 15%;
}

.right {
  width: 10%;
}

.middle {
  width: 75%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Three dots */
.dot {
  margin-top: 4px;
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
  background-color: #242F42;
}

/* Fake Website Branding */
.content .brand {
  width: 222px;
  border: 2px #A38952 solid;
  padding: 0 10px 0 0;
  margin: 0;
}

.content .login {
  width: 240px;
  margin: 0 auto;
  padding: 0;
}

.content .login span {
 font-size: 34px; 
 color: #FFF;
 font-family: Helvetica;
 font-weight: 900;
}

.content .login i {
  font-size: 30px;
  padding: 3px 10px 2px 4px;
  margin: 0 10px 0 0;
  color: #FFF;
  background-color: #A38952;
  font-family: Helvetica;
  font-weight: bold;
  border-right: 16px #FDC306 solid;
}

/* Login form */
.content .login input {
  display: block;
  font-size: 24px;
  margin: 10px 0;
  padding: 10px 8px;
  width: 220px;

}

.content .login input[type="submit"] {
  width: 240px;
  font-size: 30px;
  background: #CCC;
}
</style>
