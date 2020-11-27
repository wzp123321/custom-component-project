<template>
  <div class="c-ExcelUtil">
    <div class="c-ExcelUtil-header">
      <cust-popover>
        <i slot="reference" class="el-icon-warning-outline"> </i>
        <span>1123123</span>
      </cust-popover>
    </div>
    <el-divider content-position="left">示例</el-divider>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "ExcelUtil",
  components: {},
})
export default class ExcelUtil extends Vue {}
</script>

<style lang="less" scoped>
.c-ExcelUtil {
  height: 100%;
  &-header {
    padding: 24px 0;
    text-align: left;
    border-bottom: 1px solid #ededed;
    i {
      cursor: pointer;
      font-size: 28px;
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
