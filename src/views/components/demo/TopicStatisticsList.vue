<template>
  <div class="topic-statistics">
    <TopicCollapse :expand="asystisticsExpand || reportExpand">
      <!-- 头部 -->
      <template slot="hd">
        <div class="topic-statistics-index">{{ index + 1 }}.</div>
      </template>
      <!-- 题目内容 -->
      <template slot="ct">
        111111111111111111111111
      </template>
      <!-- 底部按钮 -->
      <template slot="ft">
        <div class="flex-row-justify-center topic-statistics-footer">
          <div class="data">1111</div>
          <div class="btn">
            <span
              :class="{ 'btn-active': asystisticsExpand }"
              @click="handleAsystisticsExpand()"
              >解析</span
            >
            <span
              :class="{ 'btn-active': reportExpand }"
              @click="handleExportExpand()"
              >报告</span
            >
          </div>
        </div>
      </template>
      <!-- 展开的内容 -->
      <template slot="expand">
        <div class="topic-statistics-expand">
          <div
            :class="{ 'expand-active': asystisticsExpand }"
            v-show="asystisticsExpand"
          >
            111
          </div>
          <div :class="{ 'expand-active': reportExpand }" v-show="reportExpand">
            222
          </div>
        </div>
      </template>
    </TopicCollapse>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TopicCollapse from "./TopicCollapse.vue";

@Component({
  name: "TopicStatisticsList",
  components: {
    TopicCollapse,
  },
})
export default class TopicStatisticsList extends Vue {
  @Prop({ default: [] })
  private info!: any[];
  @Prop({ default: 0 })
  private index!: number;
  private asystisticsExpand = false;
  private reportExpand = false;
  // 打开关闭解析
  handleAsystisticsExpand() {
    this.reportExpand = false;
    this.asystisticsExpand = !this.asystisticsExpand;
  }
  // 报告关闭打开
  handleExportExpand() {
    this.asystisticsExpand = false;
    this.reportExpand = !this.reportExpand;
  }
}
</script>

<style lang="less" scoped>
.topic-statistics {
  height: 100%;
  overflow: hidden;
  &-index {
    font-weight: bold;
    padding: 10px;
    position: relative;
  }
  &-index::before {
    content: "";
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #edf5ff;
    position: absolute;
    top: -26px;
    left: -26px;
    z-index: -1;
  }
  &-footer {
    padding: 0 24px;
    .data {
      font-size: 20px;
      color: #000;
    }
    .btn {
      font-size: 20px;
      color: rgba(54, 143, 255, 1);
      line-height: 26px;
      span {
        cursor: pointer;
        display: inline-block;
        padding: 24px 18px;
      }
      .btn-active {
        color: #05c1ae;
        background-color: #fff;
        border: 1px solid;
        border-color: #05c1ae;
        border-bottom-color: #fff;
        border-radius: 3px 3px 0 0;
        transition: all 500ms;
      }
    }
  }
  &-expand {
    .expand-active {
      padding: 24px;
      box-shadow: 0 0 0 1px #05c1ae;
      transition: all 500ms;
    }
  }
}
</style>
