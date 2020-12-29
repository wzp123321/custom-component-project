<template>
  <div class="wrapper">
    <!-- 题目 -->
    <TopicStatisticsList
      v-for="(item, index) in list"
      :key="index"
      :index="index"
      :info="item"
    ></TopicStatisticsList>

    <!-- 直播流 -->
    <VideoPlayerComp></VideoPlayerComp>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopicStatisticsList from "./components/TopicStatisticsList.vue";
import VideoPlayerComp from "./components/VideoPlayer.vue";

@Component({
  name: "Demo",
  components: {
    TopicStatisticsList,
    VideoPlayerComp,
  },
})
export default class Demo extends Vue {
  private list = [
    {
      title: "12121",
    },
  ];

  /**
   * 找出数组中连续出现两次的数字
   */
  test(list: number[]) {
    let arr: number[] = [];
    list.forEach((item) => {
      if (!arr.includes(item)) {
        arr.push(item);
      } else {
        arr = arr.filter((childItem) => {
          return childItem !== item;
        });
      }
    });
    return arr;
  }
  /**
   * 红绿灯
   * 红-3
   * 绿-2
   * 黄-1
   */
  trafficLight() {
    let count = -1;
    setInterval(() => {
      count++;
      const remainder = count % 6;
      if (remainder >= 0 && remainder <= 2) {
        console.log("红灯", 3 - remainder);
      } else if (remainder >= 3 && remainder <= 4) {
        console.log("绿灯", 5 - remainder);
      } else {
        console.log("黄灯", 6 - remainder);
      }
    }, 1000);
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
