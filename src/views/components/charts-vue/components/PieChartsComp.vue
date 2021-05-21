<template>
  <!-- 饼图 -->
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "PieChartsComp",
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        // 标题 以及标题位置
        title: {
          text: "测试VueEcharts饼图",
          left: "center",
        },
        // 鼠标悬浮提示
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        // 图例  orient方向  left位置  data数据
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "测试1",
            "测试2",
            "测试3",
            "测试4",
            "测试5",
          ],
        },
        series: [
          {
            name: "测试VueEcharts饼图",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            // 数据
            data: [
              { value: 335, name: "测试1" },
              { value: 310, name: "测试2" },
              { value: 234, name: "测试3" },
              { value: 135, name: "测试4" },
              { value: 1548, name: "测试5" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
