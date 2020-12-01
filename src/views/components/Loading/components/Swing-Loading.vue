<template>
  <div class="c-Loading-components flex-column-center-center">
    <div class="sk-swing">
      <div class="sk-swing-dot"></div>
      <div class="sk-swing-dot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "SwingLoading",
  components: {},
})
export default class SwingLoading extends Vue {}
</script>

<style lang="less" scoped>
.sk-swing {
  width: var(--sk-size);
  height: var(--sk-size);
  position: relative;
  animation: sk-swing 1.8s infinite linear;
}

.sk-swing-dot {
  width: 45%;
  height: 45%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: var(--sk-color);
  border-radius: 100%;
  animation: sk-swing-dot 2s infinite ease-in-out;
}

.sk-swing-dot:nth-child(2) {
  top: auto;
  bottom: 0;
  animation-delay: -1s;
}

@keyframes sk-swing {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-swing-dot {
  0%,
  100% {
    transform: scale(0.2);
  }
  50% {
    transform: scale(1);
  }
}
</style>
