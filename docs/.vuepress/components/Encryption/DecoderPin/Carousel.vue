<template>
    <div class="carousel">
        <div class="container" ref="container">
            <div class="boxes">
                <div v-for="item in items" class="box">
                {{ item }}
                </div>
            </div>
        </div>
        <div ref="proxy"></div>
    </div>
</template>

<script>
import Draggable from 'gsap/Draggable';

export default {
    props: ["items"],

    mounted() {
        const boxHeight = 30;
        const { container, proxy } = this.$refs;

        let lastY = 0;
        let component = this;
        let updateProgress = function () {
            if (this.y > lastY) {
                component.items.unshift(component.items.pop())
            } else {
                component.items.push(component.items.shift())
            }
            lastY = this.y
            component.$emit('rotated')
        };
        
        let snapY = function (y) {
            return Math.round(y / boxHeight) * boxHeight;
        };

        Draggable.create(proxy, {
            type: 'y',
            trigger: container,
            throwProps: true,
            onDrag: updateProgress,
            lockAxis:true,
            liveSnap:true,
            edgeResistance:0.65,
            snap: { 
                y: snapY 
            },
            cursor: 'grab'
        });
    },
};
</script>

<style scoped>
.carousel {
    position: relative;
    background: none;
}

.container {
    width: 30px;
    height: 240px;
    overflow: hidden;
}

.boxes {
    position: relative;
}

.box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    line-height: 20px;
    font-family: monospace;
    text-align: center;
}
</style>