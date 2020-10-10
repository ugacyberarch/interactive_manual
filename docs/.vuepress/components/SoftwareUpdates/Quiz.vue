<template>
  <div class="number-modifier">
    <input type="radio"  @click="security()" name="updates" value="security"> Security
  <br>
   <input type="radio"  @click="features()" name="updates" value="features"> New Features
   <br><br>
  <strong> 
  <p v-if="correctAnswer"><img src = "https://pngimage.net/wp-content/uploads/2018/06/hooray-png-8.png" width ="50px" > Huray! You are right</p>
   <p v-else-if="wrongAnswer"><img src = "https://png.pngtree.com/element_pic/17/03/14/0d444c39d7ac1a78d999a0a56cd393c1.jpg" width ="50px">You are wrong. <b>Security Updates are the most important.Learn more below</b><br>
   </p>

</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correctAnswer: false,
      wrongAnswer : false
    }
  },

  methods: {
    security() {this.wrongAnswer = true;this.correctAnswer = false },
    features() {this.correctAnswer = true }
  }
}
</script>