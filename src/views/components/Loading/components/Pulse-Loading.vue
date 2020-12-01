<template>
  <div class="c-Loading-components flex-column-center-center">
    <div class="sk-pulse"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "PluseLoading",
  components: {},
})
export default class PluseLoading extends Vue {}
</script>

<style lang="less" scoped>
.sk-pulse {
  width: var(--sk-size);
  height: var(--sk-size);
  background-color: var(--sk-color);
  border-radius: 100%;
  animation: sk-pulse 1.2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

@keyframes sk-pulse {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
