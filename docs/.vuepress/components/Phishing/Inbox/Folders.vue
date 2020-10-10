<template>
  <div class="folders">
    <ul>
      <li
        v-for="(unread, folder) in folders"
        @click="$emit('select', folder)"
        v-bind:class="[ selected == folder ? 'active' : '' ]"
        >
        <span class="folder-icon">
          <font-awesome-icon v-if="icon(folder)" :icon="icon(folder)" />
        </span>
        <span class="folder-name">
          {{ folder }}
        </span>
        <span class="folder-unread" v-if="unread > 0">
          {{ unread }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInbox, faBan, faEdit, faPaperPlane, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faInbox)
library.add(faBan)
library.add(faEdit)
library.add(faPaperPlane)
library.add(faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

export default {
  props: ['folders', 'selected'],

  data() {
    return {

    }
  },

  methods: {
    icon(folder) {
      return {
        'Inbox': 'inbox',
        'Junk E-Mail': 'ban',
        'Drafts': 'edit',
        'Sent Items': 'paper-plane',
        'Deleted Items': 'trash',
      }[folder]
    }
  }

}
</script>

<style scoped>
.folders {
  color: rgb(50, 49, 48);
  height: 100%;
  background-color: #FFF;
  border-right: 1px solid #ccc;
}

.folders ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.folders li {
  padding: 10px;
  cursor: pointer;
}

.folders li:hover {
  background-color: #e1dfdd;
}
.folders li.active {
  color: rgb(0, 98, 175);
  background-color: rgb(220, 236, 249);
}

.folders .folder-icon {
  padding: 0 14px;
}

.folders .folder-name {
  width: 140px;
}

span.folder-unread {
  float: right;
  padding: 0px 6px;
  margin: 6px 10px 0 0;

  font-size: 12px;
  line-height: 110%;
  font-weight: bold;
}
</style>
