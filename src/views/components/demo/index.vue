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
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
