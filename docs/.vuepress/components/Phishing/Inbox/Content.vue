<template>
  <div class="content">
    <div class="subject">
      {{ email.subject }}
    </div>

    <div class="details">
      <div class="from">{{ email.from }}</div>
      <div class="date">{{ email.date | date }}</div>
    </div>

    <div class="body">
      <iframe v-if="email.iframe" :src="$withBase(email.iframe)">
        <p>Oops something went wrong</p>
      </iframe>
      <div class="plaintext">
        {{ email.content }}
      </div>
    </div>
  </div>
</template>

<script>
import * as moment from 'moment';

export default {
  props: ["email"],
  filters: {
    date(s) {
      return moment(s).format("ddd M/D/YYYY H:mm A")
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0;
  padding: 0;
  height: 100%;
  border-left: 1px solid silver;
}

.subject {
  margin: 0 !important;
  padding: 10px;
  font-weight: bold;
}

.details {
  padding: 10px;
}

.body {
  height: 100%;
}

iframe {
  border: none;
  width: 800px;
  height: 98%;
}

.plaintext {
  padding: 20px;
}
</style>
