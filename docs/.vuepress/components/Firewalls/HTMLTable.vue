<template>
  <div class="html-table">
    <div class="header">
      <div class="left">
        <h4>HTML:</h4>
        <span>What your computer receives.</span>
      </div>

      <div class="right">
        <h4>Webpage:</h4>
        <span>What you see.</span>
      </div>
    </div>

    <div class="left">
      <textarea wrap="off">{{ content }}</textarea>
    </div>

    <div class="right">
      <div class="content" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import { html } from 'common-tags';

export default {

  data() {
    return {
      content: html`
        <table>
          <tr>
            <td>Book</td>
            <td>Price</td>
          </tr>
          <tr>
            <td>Charlotte's Web</td>
            <td>$2.99</td>
          </tr>
          <tr>
            <td>Where The Wild Things Are</td>
            <td>$5.98</td>
          </tr>
        </table>
      `,
    }
  },

}
</script>

<style scoped>

.left, .right {
  display: inline-block;
  vertical-align: top;
  width: 50%;
}

.header {
  z-index: 100;
  padding: 8px 20px;
  margin-bottom: 2px;
  box-shadow: 0 1px 1px rgba(57, 70, 78, 0.2);
}

.html-table h4 {
  margin: 0; 
  padding: 0;
}

.html-table span {
  margin: 0 0;
  display: block;
}

.content {
  padding: 0;
}

textarea {
  box-sizing: border-box;

  font-size: 16px;

  padding: 10px;
  width: 90%;
  height: 280px;

  resize: none;
  outline: none;
  border: none;
  background-color: #f6f6f6;
  border-right: 1px solid #C0C0C0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  z-index: -1;
}
</style>
