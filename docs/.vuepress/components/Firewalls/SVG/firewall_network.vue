<template>
  <div class="firewall">
    <div class="toggle">
      <span>Firewall:</span>
      <label class="switch">
        <input v-on:change="firewall = !firewall" type="checkbox">
        <span class="slider"></span>
      </label>
    </div>

  <p v-if="firewall"><img :src="$withBase('/Final-With-Firewall.svg')" width ="80%" ></p>
   <p v-else><img :src="$withBase('/Final-Without-Firewall.svg')" width ="80%" ></p>

</strong>
  </div>
</template>

<script>
export default{
  data() {
    return {
      firewall: false,
    }
  },
}
</script>

<style scoped>
.firewall {
  position: relative;
}

svg {
  margin: 20px 0;
}

.toggle {
  position: absolute;
  right: 50px;
}

.toggle span {
  display: block;
  vertical-align: top;
  text-align: left;
  padding: 4px 0;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: red;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

</style>
