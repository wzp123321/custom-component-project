<template>
  <div class="export-btn flex-row-center-center" @click="onExport">
    <img src="../images/export.png" alt="" />
    {{ progress === 0 || progress === 100 ? "导出数据" : "文件生成中" }}
    <!-- 导出进度 -->
    <div
      class="progress"
      v-if="progress !== 0 && progress !== 100"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "ExportBtn",
})
export default class ExportBtn extends Vue {
  @Prop({ default: 0 })
  private progress!: number;

  onExport() {
    if (this.progress !== 0 && this.progress !== 100) {
      return;
    }
    this.$emit("export");
  }
}
</script>

<style lang="less" scoped>
.export-btn {
  position: relative;
  cursor: pointer;
  font-size: 14px;
  padding: 5px 14px;
  border-radius: 4px;
  color: var(--blue);
  border: 1px solid var(--blue);
  margin-left: 16px;
  max-width: 120px;
  overflow: hidden;
  img {
    position: relative;
    width: 16px;
    height: 16px;
    top: 1px;
    margin-right: 4px;
  }
  .progress {
    position: absolute;
    height: 40px;
    top: 0;
    left: 0;
    background-color: var(--blue);
    opacity: 0.6;
  }
}
</style>
