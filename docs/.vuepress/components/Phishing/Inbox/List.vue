<template>
  <div class="list">
    <ul>
      <li v-for="(email, i) in emails" @click="$emit('select', i)">
        <div class="avatar">
          <span class="initials">{{ initials(email.from) }}</span>
        </div>
        <div class="details">
          <div class="from">{{ email.from.split('<')[0] }}</div>
          <div>
            <span class="subject">{{ email.subject }}</span>
            <span class="date">{{ email.date | date }}</span>
          </div>
          <div>
            {{ email.lead }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as _ from "lodash";
import * as moment from "moment";

export default {
  props: ['emails'],
  methods: {
    initials(sender) {
      let parts = _.trim(sender.toUpperCase().split('<')[0]).split(' ');
      return parts.length > 1
        ? parts[0][0] + parts[parts.length - 1][0]
        : parts[0][0]
    }
  },
  filters: {
    date(s) {
      return moment(s).format("ddd M/D")
    }
  }
}
</script>

<style scoped>
.list {
  height: 100%;
  font-size: 14px;
}

.list ul {
  margin: 0;
  padding: 0;
  height: 100%;
  list-style-type: none;
}

.list li {
  height: 80px;
  border-bottom: 1px solid silver;
  cursor: pointer;
}

.list li:hover {
  background-color: #DDD;
}

.avatar {
  margin: 4px 10px;
  height: 40px;
  width: 40px;
  background-color: #bbb;
  border-radius: 50%;
  text-align: center;
  display: inline-block;
  vertical-align: top;
}

.initials {
  position: relative;
  top: 8px;
  line-height: 20px;
  color: white;
}

.details {
  color: rgb(96, 94, 92);
  margin: 0 10px;
  display: inline-block;
  width: 400px;
}

.details .date {
  float: right;
}

.details .from {
  color: black;
  display: block;
}

</style>
