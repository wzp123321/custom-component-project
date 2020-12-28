<template>
  <div class="wrapper">
    <TopicStatisticsList
      v-for="(item, index) in list"
      :key="index"
      :index="index"
      :info="item"
    ></TopicStatisticsList>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TopicStatisticsList from "./TopicStatisticsList.vue";

@Component({
  name: "Demo",
  components: {
    TopicStatisticsList,
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
