<template>
  <div class="c-Home flex-row-justify-end">
    <Slide></Slide>
    <keep-alive><Content> </Content></keep-alive>
  </div>
</template>

<script lang="ts">
import Slide from "@/layouts/Slide.vue";
import Content from "@/layouts/Content.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home",
  components: { Slide, Content },
})
export default class Home extends Vue {}
</script>
<style lang="less" scoped>
.c-Home {
  width: 100%;
  height: 100%;
}
</style>
