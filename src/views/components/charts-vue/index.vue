<template>
  <!-- option中用到了哪个就要引用哪个component -->
  <!-- https://v-charts.js.org/-->
  <!-- https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md-->
  <!-- vue-ehcarts  所有组件https://github.com/apache/echarts/blob/master/src/echarts.all.ts -->
  <div class="echarts-wrapper flex-wrap">
    <PieChartsComp></PieChartsComp>
    <LinesChartsComp></LinesChartsComp>
  </div>
</template>
<script>
import PieChartsComp from "./components/PieChartsComp";
import LinesChartsComp from "./components/LineChartsComp";
export default {
  components: {
    PieChartsComp,
    LinesChartsComp,
  },
};
</script>
<style lang="less" scoped>
.echarts {
  width: 48%;
  margin-right: 4%;
}
.echarts:nth-child(2n) {
  margin-right: 0;
}
</style>