<template>
  <!-- 饼图 -->
  <v-chart ref="charts" class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
} from "echarts/components";
import VChart from "vue-echarts";
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
]);

export default {
  name: "BarChartsComp",
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        grid: { left: 30, top: 30, right: 30, bottom: 30 },
        xAxis: {
          type: "category",
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: "#999" },
          data: [
            "-10%以下",
            "-10%至-6%",
            "6%至-4%",
            "-4%至-2%",
            "-2%至0%",
            "0%至2%",
            "2%至4%",
            "4%至6%",
            "6%至10%",
            "10%以上",
          ],
        },
        yAxis: [
          {
            splitNumber: 5,
            scale: true,
            splitLine: {
              show: true,
              lineStyle: { color: ["#b6b6b6"], opacity: 0.1 },
            },
            axisLine: { show: false },
            axisTick: { show: false },
            type: "value",
            name: "",
            nameTextStyle: {
              fontFamily: "MicrosoftYaHei",
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              align: "left",
            },
            nameGap: 25,
            axisLabel: { formatter: "{value}", color: "#999" },
          },
        ],
        series: [
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top",
                color: "rgba(255,255,255,0.6)",
              },
            },
            itemStyle: {
              normal: {
                barBorderRadius: 4,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#E93D3D",
                    },
                    {
                      offset: 1,
                      color: "#EE7B53",
                    },
                  ],
                },
              },
            },
            barWidth: 18,
            data: [7, 2, 20, 8, 31, "-", "-", "-", "-", "-", "-"],
          },
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top",
                color: "rgba(255,255,255,0.6)",
              },
            },
            itemStyle: {
              normal: {
                barBorderRadius: 4,
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#4CC453",
                    },
                    {
                      offset: 1,
                      color: "#96D056",
                    },
                  ],
                },
              },
            },
            barWidth: 18,
            data: ["-", "-", "-", "-", "-", "-", 46, 40, 16, 8, 9],
          },
        ],
      },
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.$refs.charts.resize();
    });
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
