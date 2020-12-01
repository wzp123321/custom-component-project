<template>
  <div class="c-Loading-components flex-column-center-center">
    <div class="sk-wave">
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
      <div class="sk-wave-rect"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "WaveLoading",
  components: {},
})
export default class WaveLoading extends Vue {}
</script>

<style lang="less" scoped>
.sk-wave {
  width: var(--sk-size);
  height: var(--sk-size);
  display: flex;
  justify-content: space-between;
}

.sk-wave-rect {
  background-color: var(--sk-color);
  height: 100%;
  width: 15%;
  animation: sk-wave 1.2s infinite ease-in-out;
}

.sk-wave-rect:nth-child(1) {
  animation-delay: -1.2s;
}
.sk-wave-rect:nth-child(2) {
  animation-delay: -1.1s;
}
.sk-wave-rect:nth-child(3) {
  animation-delay: -1s;
}
.sk-wave-rect:nth-child(4) {
  animation-delay: -0.9s;
}
.sk-wave-rect:nth-child(5) {
  animation-delay: -0.8s;
}

@keyframes sk-wave {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
