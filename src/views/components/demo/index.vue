<template>
  <div class="demo">
    <OnlineTimeStampLine></OnlineTimeStampLine>
    <div v-custom2:[direction]="true"></div>
    <!-- <CustomDirectives></CustomDirectives> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import OnlineTimeStampLine from "./components/onlineTimeStampLine.vue";
import CustomDirectives from "../custom-directives/index.vue";
interface SideEventInfo {
  status: number;
  startTime: number;
  endTime: number;
  rate?: number;
}

@Component({
  name: "VideoJsPlayerComp",
  components: {
    OnlineTimeStampLine,
    CustomDirectives,
  },
})
export default class VideoJsPlayerComp extends Vue {
  private direction = "left";

  private msg = "121212";

  private test = [1, 2, 3, 4, 5, 6];

  private getSuccessionIndexList(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const middleNum = array[j];
          array[j] = array[j + 1];
          array[j + 1] = middleNum;
        }
      }
    }
    console.log(array);
  }
  /**
   * 删除多余的元素
   */
  private removeSurplusElement() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const list = [
      [0],
      [1],
      [2, 3, 4],
      [5, 6],
      [7, 8, 9, 10],
      [11, 12],
      [13, 14],
      [15],
    ];
    let removeCount = 0;
    list.forEach((item) => {
      if (item.length > 1) {
        arr.splice(item[1] - removeCount, item.length - 1);
        removeCount += item.length - 1;
      }
    });
    console.log("arr", arr);
  }
  @Watch("msg")
  handleMsgChange() {
    console.log("this.msg", this.msg);
  }
  created () {
    this.msg = '3333222222';
  }
  mounted() {
    console.log(this.test);
    delete this.test[1];
    console.log(this.test);
    this.$delete(this.test, 2);
    console.log(this.test);
    // const list = [2, 43, 34, 26, 47, 78, 52, 3, 6];
    // this.getSuccessionIndexList(list);
    this.removeSurplusElement();
    this.msg = '121212121';
    this.msg = '222222222222';
    this.msg = '3333333333333';
  }
}
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
