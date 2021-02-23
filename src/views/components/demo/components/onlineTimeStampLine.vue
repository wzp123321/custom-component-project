<template>
  <div class="online-timestamp">
    <div class="line flex">
      <span
        v-for="(item, index) in timeList"
        :key="index"
        :style="{ width: item.rate + '%', backgroundColor: colors[item.type] }"
      >
        <span class="start-time">{{ formatTimeStamp(item.startTime) }}</span>
        <span class="end-time">{{ formatTimeStamp(item.endTime) }}</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import dayjs from "dayjs";
// 或者 CommonJS
// var dayjs = require('dayjs');
dayjs().format();

@Component({
  name: "OnlineTimeStampLine",
  components: {},
})
export default class OnlineTimeStampLine extends Vue {
  private colors = ["yellow", "red", "green"];
  // 开始时间戳
  private startTime = 1611379980000;
  // 结束时间戳
  private endTime = 1611382680000;
  // 在线时间段
  private timeList: {
    type: number;
    startTime: number;
    endTime: number;
    rate: number;
  }[] = [
    {
      type: 0,
      startTime: 1611379980000,
      endTime: 1611380880000,
      rate: 0,
    },
    {
      type: 1,
      startTime: 1611380880000,
      endTime: 1611382080000,
      rate: 0,
    },
    {
      type: 2,
      startTime: 1611382080000,
      endTime: 1611382680000,
      rate: 0,
    },
  ];
  /**
   * 计算占比
   */
  getTimeStampRate() {
    const { totalTime } = this;
    this.timeList = this.timeList.map(
      (item: {
        type: number;
        startTime: number;
        endTime: number;
        rate: number;
      }) => {
        const { startTime, endTime } = item;
        const rate = ((100 * (endTime - startTime)) / totalTime).toFixed(2);
        console.log("rate-------", rate);
        return Object.assign(item, { rate });
      }
    );
  }
  /**
   * 格式化
   */
  formatTimeStamp(time: number) {
    return dayjs(time).format("HH:mm");
  }
  /**
   * 初始化
   */
  mounted() {
    this.getTimeStampRate();
  }
  // 总时长
  get totalTime() {
    return this.endTime - this.startTime;
  }
}
</script>

<style lang="less" scoped>
.online-timestamp {
  padding: 48px;
  .line {
    width: 360px;
    height: 20px;
    background-color: red;
    span {
      position: relative;
      cursor: pointer;
      display: inline-block;
      height: 100%;
      .start-time,
      .end-time {
        position: absolute;
        width: 100%;
        height: 16px;
        background-color: #eee;
        display: none;
      }
      .start-time {
        top: -16px;
        left: 0;
      }
      .end-time {
        top: 20px;
        right: 0;
        text-align: right;
      }
    }
    span:hover {
      .start-time,
      .end-time {
        display: inline-block;
        transition: all 300ms;
      }
    }
  }
}
</style>
