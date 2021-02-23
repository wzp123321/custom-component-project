<template>
  <div class="demo">
    <OnlineTimeStampLine></OnlineTimeStampLine>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import OnlineTimeStampLine from "./components/onlineTimeStampLine.vue";

@Component({
  name: "VideoJsPlayerComp",
  components: {
    OnlineTimeStampLine,
  },
})
export default class VideoJsPlayerComp extends Vue {}
</script>

<style lang="less" scoped>
.demo {
  position: relative;
  width: 100%;
  height: 100%;
  .video-player {
    height: 5rem;
    ::v-deep .video-js {
      transform: rotate(0deg);
    }
    ::v-deep .full-screen {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(90deg);
      transition: all 500ms;
      z-index: 9999;
    }
  }
}
</style>
