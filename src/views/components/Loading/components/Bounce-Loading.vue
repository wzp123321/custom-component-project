<template>
  <div class="c-Loading-components flex-column-center-center">
    <div class="sk-bounce">
      <div class="sk-bounce-dot"></div>
      <div class="sk-bounce-dot"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "BounceLoading",
  components: {},
})
export default class BounceLoading extends Vue {}
</script>

<style lang="less" scoped>
.sk-bounce {
  width: var(--sk-size);
  height: var(--sk-size);
  position: relative;
}

.sk-bounce-dot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--sk-color);
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.sk-bounce-dot:nth-child(2) {
  animation-delay: -1s;
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
  }
  45%,
  55% {
    transform: scale(1);
  }
}
</style>
