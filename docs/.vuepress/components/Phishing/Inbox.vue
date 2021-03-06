<template>
  <div>
    <div class="desktop">
      <div class="taskbar">
        <div class="apps">
          <i class="fab fa-windows"></i>
          <i class="search-icon"></i>
          <i class="tabs-icon"></i>
          <i @click="showModal = true" class="far fa-envelope"></i>
        </div>

        <div class="tray">
          <i class="wifi-icon"></i>
          <i class="audio-icon"></i>
          <i class="far fa-bell"></i>
        </div>
      </div>
    </div>

    <Phishing-Modal v-if="showModal" @close="showModal = false">
      <div class="window-wrapper">
        <div class="toolbar">
          <i @click="showModal = false" class="close fas fa-minus"></i>
          <i class="far fa-stop"></i>
          <i @click="showModal = false" class="close fas fa-times"></i>
        </div>
        <div class="window">
          <div class="col one">
            <Phishing-Inbox-Folders
              :folders="folders"
              :selected="selected.folder"
              v-on:select="selectFolder"
              />
          </div>
          <div class="col two">
            <Phishing-Inbox-List
              :emails="emails[selected.folder]"
              v-on:select="selectMessage" />
          </div>
          <div class="col three">
            <Phishing-Inbox-Content
              :email="emails[selected.folder][selected.message]" />
          </div>
        </div>
      </div>
    </Phishing-Modal>
  </div>
</template>

<script>
require("animate.css");
import * as _ from "lodash";
import { phish } from "./emails";

export default {
  data() {
    return {
      showModal: false,
      selected: {
        folder: "Inbox",
        message: 0
      },
      emails: {
        "Inbox": phish,
        "Junk E-Mail": [],
        "Drafts": [],
        "Sent Items": [],
        "Deleted Items": [],
      }
    };
  },

  computed: {
    folders() {
      return _.mapValues(this.emails, emails =>
        _.size(_.filter(emails, ["read", false]))
      );
    }
  },

  methods: {
    selectFolder(folder) {
      this.selected.folder = folder;
    },
    selectMessage(message) {
      this.selected.message = message;
    }
  }
};
</script>

<style scoped>
.desktop {
  padding-top: 100px;
  background: no-repeat url("/interactive-manual/wallpaper.jpg") 0 18px;
  position: relative;
}

.taskbar {
  width: 100%;
  height: 43px;
  box-sizing: border-box;
  background: #004172;
}

.taskbar i {
  height: 43px;
  color: white;
  display: table-cell;
  vertical-align: middle;
}

.taskbar i:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.taskbar .apps {
  display: inline-block;
}

.taskbar .tray {
  display: block;
  float: right;
}

.wifi-icon,
.audio-icon {
  width: 26px;
  height: 43px;
  display: inline-block;
  vertical-align: middle;
}

.taskbar .tray i.fa-bell {
  width: 40px;
  text-align: center;
}

.taskbar .apps i {
  width: 40px;
  text-align: center;
}
.taskbar .apps i {
  font-size: 24px;
}

.window-wrapper {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.toolbar {
  height: 28px;
  background: #004172;
  text-align: right;
}

.toolbar i {
  color: white;
  width: 30px;
  height: 28px;
  text-align: center;
  padding-top: 6px;
}

.toolbar i.close:hover {
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  transform: scale(1.2);
}

.window {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

.col {
  float: left;
  height: 100%;
  vertical-align: top;
}

.window:after {
  content: "";
  display: table;
  clear: both;
}

.col.one {
  width: 200px;
}

.col.two {
  width: 500px;
  overflow-y: scroll;
}

.col.three {
  width: 800px;
}

.wifi-icon {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAAK/INwWK6QAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiBQMVKx+smKGwAAAB90lEQVRo3u2ZS27DMAxE5SL3qm4W5mRyT8Yu6o8kayiSIZBFzWyC2OE8fjwOnIXTZ+Prw/o3wA1wA9wAN0B6oANLqAzT9ubZCzzMuezCT/kU8HpTODOxHLtOPAATF57HphM8AibY8FdKKaV1WffOh48ANJ2OBWzPjh3BUJw4C9+IA+B8mXmRpIMBLrUrxAMButqV4kEAnLva1eIhAJ08WcQDALrJK2rnzNRY1DsAzeSLQnjkjH4Avbx4P/ACNLMnp7gfoJHPRvHCdLqjC0Ajf7k4gSn7AKbNv6wbvB84AKrkw9W71C5siAOgmqtGfnJxmgHq9IrW55m8HaBIyS3G5AKo2k8x8lYAof06ZzgKOW1ZD1DVn73yA2syAAjtVRlT4VFoAcT6J84wMCYHAJSo2q8zpj9nJNMSivXLztBPnbrjSoAC6xfQLq2nwRkagKqJuP4ykQe/lHUAR5WW+pvmUwKhA4BphCNaZzABdIlwZzTOoAYQBoDrL/iYH6BLhVcTOUPjhttSagDQFYw7U0ZoA0PKJgAocx3AAHnoh8x5CnB+EcqoVhPcDcocYLoButVkFJuO/UnpXveKTlhIk2YP/6Pan34AvjQYYH/c1lf6Pcn4igLYYn+ud0Q2gq2TT+ESTlZN/bn7MgwCcBtRHIBsxcv93/G/B/gFUFwXPZmd8PsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMDNUMjM6NDM6MzErMDI6MDBRw+S5AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTAzVDIzOjQzOjMxKzAyOjAwIJ5cBQAAAEp0RVh0c2lnbmF0dXJlADI4Y2E1Y2U1Y2Q3ZGZhMTU2NWQ2NDdmNGRjNzM3ZTViZTdlODAwYjc3YWQ0ZDFiZjFlNWYxZWUzMWNmYTBjNjbjOPFcAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px 16px;
}
.audio-icon {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAQAAAC0jZKKAAAABGdBTUEAAK/INwWK6QAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH4gUDFSo7iYB0IAAAAVxJREFUSMftl911gzAMRj+6QD0CG5QNwgbNCIyQETpCRmCEdgO6AdmAEegEtw82wVDzF+qenNNYLwLZ10JIMiQozniKxH2A/zc4jQMuVcsELeyRHIAa89O2tDSjhRl7AcB5K9himZ1TApBvAXdYgrjOS0MDVOvBFhv2+A2A4yAc+Tpwh82CYEMNtNeX1gDva8A9VhOhsBuWA5/NNNgfFjsGn0kH4TDuCQCKNeAOOwSXQH0NB8DJXVWe/0IEKi9RokRGdaCaKkkvKiRJrT4k5Z4lm668UDyH9yovtU5A6/TjeO3WXlFKOji9lvTs9HZvE2rWTrybfpzGAheSPp2eSfpyutkHLnSQfYGSTbXK2+QyD7bZ0o6yskddHNjo1QPn0ijz/6akozWh6G0zYqPv0b9+NPnouTk3HKY9etp+4/G/JDs+WJak9HJjIMnuf5A03Er3gyfG3fTjB/iOwN+cIAI6WsO8mwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0wM1QyMzo0Mjo1OSswMjowMEuByGcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMDNUMjM6NDI6NTkrMDI6MDA63HDbAAAASnRFWHRzaWduYXR1cmUAOThhMjM2ODI2NzU1ZDljOGRjMjZkNWYyYzhiNmYyYTQzMTJmYmFjYTBiNGJkNmI0YTg5YTZmMmRkZjIyZjg5YfMZSAsAAAAASUVORK5CYII=");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 22px 22px;
}

.tabs-icon {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACUCAQAAAB8Ha6ZAAAABGdBTUEAAK/INwWK6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiBQQVAymjqKI6AAAChElEQVR42u3YsU4UURhH8T9kCgRDBYWBxoLCGB+AkprWhooX0GxlR+sDWNhQ8BTG2PgCJFBAQ0EoDA0NarCxcS2syE6ikzsz97icXznZ/SbfPclsZhemEUnT67T9vKm9UAV7Oe9vWL9B1vJ85MMgWO5z2GLtbXSfQWAMAmMQGIPAGATGIDAGgen3xXDWz3yuvWKvHmVn2BsMHeQ2uwPfYVxPczXsDXxkwTRJjvOsaMaXB/kP1qyNXBROOMqkSbKSx0Vjyr49PxaLT2LJRxaOQWAMAmMQGIPAGATGIDDtf518yocOM+5qLwHxNa86fX6SrdmL7UFO8r72dv+hHx1P7WVbEB9ZMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQhM03r1dfY7zLjOdu01EJ7kuNPn19sutgdZzWqHwb9qnwREk83yIT6yYAwCYxAYg8AYBMYgMAaBaZK8a39F+Wffay8B8S0HhRNO/wQ5rL3JnLjL2/IhTfmIv8x/McphjGVj6BsMHWQ9Z0OvMF/8UYcxCIxBYAwCYxAYg8AYBMYgMAaB6fdN/WNuai9UwWWfwxamtdfRPb8BE7EjW7nHeegAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMDRUMjM6MDM6NDErMDI6MDAWJmZXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTA0VDIzOjAzOjQxKzAyOjAwZ3ve6wAAAEp0RVh0c2lnbmF0dXJlADNlMDY2MWVkNDE3MmQ5NTA3NDcyODE5ODg4YjQ0MDg5MjY1OGI4NWNjMzljNGY5MTc2NjdlYWFkNmZmNmEyZjXUEOhlAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 23px 15px;
}

.search-icon {
  background-image: url("data:image/png;base64,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");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 26px 26px;
}
</style>
