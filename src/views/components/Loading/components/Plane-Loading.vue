<template>
  <div class="c-Loading-components flex-column-center-center">
    <div class="sk-plane"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "PlaneLoading",
  components: {},
})
export default class PlaneLoading extends Vue {}
</script>

<style lang="less" scoped>
.sk-plane {
  width: var(--sk-size);
  height: var(--sk-size);
  background-color: var(--sk-color);
  animation: sk-plane 1.2s infinite ease-in-out;
}

@keyframes sk-plane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
