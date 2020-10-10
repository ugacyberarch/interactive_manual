<template>
  <div class="score">

    <a v-on:click="$emit('goto', 'menu')" class="close hvr-grow">
      <i class="far fa-times-circle"></i>
    </a>

    <h1>Results</h1>
    <p>{{ score.correct }} of {{ score.total }}</p>

    <button v-on:click="$emit('goto', 'play')" class="retry">
      Try Again
    </button>

  </div>
</template>

<script>
require('hover.css');

export default{
  props: ['score'],

}
</script>

<style scoped>

.score {
  position: relative;

  text-align: center;

  width: 300px;
  height: 200px;
  margin: 30px auto;

  border: 4px solid  #1A6FB0;
}

.close {
  position: absolute;

  top: 2px;
  right: 8px;

  color: white;
  font-size: 30px;
}

.score h1 {
  color: white;

  width: 100%;
  margin: 0;

  background: #1A6FB0;
}

.score p {
  padding: 20px 0;
}

button.retry {
  margin: 0 auto;
  padding: 10px;

  color: #fff;
  font-size: 24px;

  border: none;
  background: #EFA32C;
}

button.retry:hover {
  outline: none;
  background: #FCAB0D;
}

</style>
