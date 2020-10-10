<template>
  <body class="sans-serif white bg-dark-gray">
    <div id="app">
      <header class="bt bw3 b--dark-green mb4">
        <div class="mw6 center tc">
          <h1 class="mb3 pb2 pt1 ph3 br3 br--bottom bg-dark-green white dib mt0 mb1 f3-l f4 ttu">Encrypt HTML</h1>
          <details class="tc mb3">
            <summary class="center outline-0 bg-dark-green hover-bg-dark-blue pv2 ph3 br2 shadow-4 pointer dib">Ini buat apa ya?</summary>
            <p class="tl lh-copy f6">Tools ini berguna untuk mengenkrip raw text. Salah satu raw text yang bakal sering digunakan nanti adalah HTML itu sendiri. Nah, nantinya text yang sudah terenkrip tersebut dapat digunakan sebagai “Konten Asli” untuk HTML yang sudah terprotek password.</p>
          </details>
        </div>
      </header>
      <main>
        <section class="tc mb4">
          <div class="bg-white br2 pa2 inline-flex">
            <input class="bn pa2 outline-0 w5 code lh-copy" :type="isVisible ? 'text' : 'password'" v-model="passphrase" placeholder="Enter Passphrase"/>
            <button class="outline-0 ml2 white pointer bn br2 pv1 ph2 shadow-4 flex" @click="toggleVisibility" :class="isVisible ? 'bg-dark-red' : 'bg-dark-green'"><img :src="'https://png.icons8.com/win10/' + (isVisible ? 'invisible' : 'eye') + '/48/ffffff'" width="24" height="24"/></button>
          </div>
        </section>
        <section class="flex lh-copy mw8 center mb5">
          <div class="w-50 pa2">
            <label class="db b mb1">Raw Text</label>
            <textarea class="pa2 input-reset b--moon-gray w-100 code h-100 outline-0 br2 lh-copy" v-model="html" rows="0" style="resize: vertical;"></textarea>
          </div>
          <div class="w-50 pa2" id="asd">
            <div class="b mb1">Encrypted Text</div>
            <div class="code" v-text="encryptedHTML"></div>
          </div>
        </section>
      </main>
      <aside class="fixed bottom-2 right-2">
        <div class="flex items-center f6"><img class="br-pill ba b--white" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/39614/profile/profile-80.jpg?1" width="36" height="36"/>
          <div class="ml2">made by <a class="white" href="https://www.imamsusanto.com" target="_blank" rel="nofollow noopener">imsus</a></div>
        </div>
      </aside>
    </div>
  </body>
</template>

<style>
#asd {
  word-break: break-all;
}
</style>

<script>
export default {
  el: '#app',
  data: {
    html: '',
    passphrase: '',
    isVisible: false
  },
  computed: {
    encryptedHTML() {
      let _encrypted = CryptoJS.AES.encrypt(this.html, this.passphrase)
      let _hmac = CryptoJS.HmacSHA256(_encrypted.toString(), CryptoJS.SHA256(this.passphrase)).toString();
      return _hmac + _encrypted
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>