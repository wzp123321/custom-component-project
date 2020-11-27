<template>
  <div class="c-Content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "Content",
  components: {},
})
export default class Content extends Vue {}
</script>

<style lang="less" scoped>
.c-Content {
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 0 16px;
}
</style>
