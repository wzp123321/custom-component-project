<template>
  <div class="custom-directives" v-custom1></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "CustomDirectives",
  components: {},
  directives: {
    //   局部自定义指令
    custom1: {
      inserted(el) {
        console.log("el", el);
        el.style.position = "absolute";
        el.style.top = " 50%";
        el.style.left = "50%";
        el.style.transform = "translate(-50%,-50%)";
        el.innerText = "加载中...";
        el.style.padding = "10px";
        el.style.color = "#333";
      },
    },
  },
})
export default class CustomDirectives extends Vue {}
</script>

<style lang="less" scoped>
</style>
