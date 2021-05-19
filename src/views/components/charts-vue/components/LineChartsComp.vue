<template>
  <!-- 饼图 -->
  <v-chart ref="charts" class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
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
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
]);

export default {
  name: "LinesChartsComp",
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        title: {
          text: "折线图VueEcharts",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        /*工具栏*/
        toolbox: {
          show: true,
          feature: {
            magicType: {
              type: ["line", "bar"],
              show: true,
            },
            dataZoom: {
              show: true,
            },
            dataView: {
              show: true,
            },
            restore: {
              show: true,
            },
            saveAsImage: {
              show: true,
            },
            myTool2: {
              show: true,
              title: "自定义扩展方法",
              icon: "image://http://echarts.baidu.com/images/favicon.png",
              onclick: function () {
                alert("myToolHandler2");
              },
            },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "直接访问",
            type: "line",
            stack: "总量",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "搜索引擎",
            type: "line",
            stack: "总量",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
