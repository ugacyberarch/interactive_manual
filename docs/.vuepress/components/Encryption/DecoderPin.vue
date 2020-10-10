<template>
    <div class="decoder">
        <div
            class="keys"
            title="Grab and pull to change."
            data-tippy
            data-tippy-arrow="true"
            data-tippy-placement="top"
            data-tippy-trigger="manual"
            data-tippy-flip="false"
        >
            <Encryption-DecoderPin-Carousel
                :items="keys"
                v-on:rotated="rotated"
            />
        </div>
        <div class="values">
            <Encryption-DecoderPin-Carousel
                :items="values"
                v-on:rotated="rotated"
            />
        </div>
        <div class="inputs">
            <div class="ciphertext">
                <button v-on:click="decode">Decode Message</button>
                <textarea v-model="ciphertext">
                </textarea>
            </div>
            <div class="plaintext">
                <button v-on:click="encode">Encode Message</button>
                <textarea v-model="plaintext">
                </textarea>
            </div>
        </div>
    </div>
</template>

<script>
import * as _ from 'lodash';
import tippy from 'tippy.js';

export default {
    data() {
        let alphabet = _.toArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        let numbers = _.map(_.range(0, 26), _.toString);
        return {
            ciphertext: '11 14 2 4 1 14 3 24 13 1 18 23 20 8 24 4 1 24 5 10 21 3 18 23 14',
            plaintext: '',
            keys: alphabet,
            values: numbers,
        }
    },
    mounted() {
        this.tips = tippy('[data-tippy]');
        _.invokeMap(this.tips.tooltips, 'show');
    },
    destroyed() {
        _.invokeMap(this.tips.tooltips, 'destroy');
    },
    computed: {
        map() {
            return _.zipObject(this.keys, this.values);
        }
    },
    methods: {
        decode() {
            let map = _.invert(this.map);
            let values = this.ciphertext.replace(/\s+/g, ' ').split(/\s/);
            this.plaintext = _.join(_.at(map, values), '');
        },
        encode() {
            let map = this.map;
            this.ciphertext =
                _.join(_.at(map, _.toArray(this.plaintext)), ' ');
        },
        rotated() {
            this.tips.tooltips[0].hide()
        }
    }
}
</script>

<style scoped>
.decoder {
    position: relative;
    padding: 20px 0;
    height: 240px;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
}

.keys {
    background-color: #D2AC72;
    display: inline-block;
    border: 4px solid #E7C776;
    border-right: 3px solid #F9D889;
    text-shadow: 0px 1px 0px rgba(255,255,255,.3),
                 0px -1px 0px rgba(0,0,0,.7);
}

.values {
    background-color: #C9AB75;
    display: inline-block;
    border: 2px solid #E7C776;
    border-left: none;
    border-radius: 3px;
    text-shadow: 0px 1px 0px rgba(255,255,255,.3),
                 0px -1px 0px rgba(0,0,0,.7);
}

.inputs {
    position: relative;
    padding: 0 20px;
    vertical-align: top;
    display: inline-block;
}

.inputs button {
    position: absolute;
    margin-top: 4px;
    right: 24px;
    background: none;
    font-size: 16px;
    border: 1px solid #ccc;
}

.inputs textarea {
    padding: 25px;
    width: 500px;
    height: 70px;
    font-size: 20px;
    font-family: monospace;
    border: 1px solid #333;
}
</style>