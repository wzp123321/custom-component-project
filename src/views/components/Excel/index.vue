<template>
  <div class="c-ExcelUtil">
    <div class="c-ExcelUtil-header">
      <cust-popover>
        <i slot="reference" class="el-icon-warning-outline"> </i>
        <span>1123123</span>
      </cust-popover>
    </div>
    <el-divider content-position="left">示例</el-divider>
    <div class="c-ExcelUtil-btn flex">
      <el-upload
        :auto-upload="false"
        action=""
        accept=".xlsx"
        :on-change="handleFileChange"
      >
        <el-button size="small" type="primary">导入excel</el-button>
      </el-upload>
      <el-button type="primary" @click="handleExportExcel">导出excel</el-button>
    </div>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="sort" label="序号"> </el-table-column>
      <el-table-column prop="schoolName" label="学校名"> </el-table-column>
      <el-table-column prop="studentCount" label="学生数量"> </el-table-column>
      <el-table-column prop="studentPrecent" label="学生占比">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { export2Excel, import2Excel } from "@/utils/excel";

interface StudentInfo {
  sort: number;
  schoolName: string;
  studentCount: number;
  studentPrecent: number;
}

@Component({
  name: "ExcelUtil",
  components: {},
})
export default class ExcelUtil extends Vue {
  // 数组数据
  private dataList: StudentInfo[] = [];
  // 选择文件
  async handleFileChange(file: any) {
    console.log(file.raw)
    const res: any = await import2Excel(file.raw);
    this.dataList = res;
  }
  // 导出excel
  handleExportExcel() {
    if (this.dataList.length === 0) {
      return;
    }
    //要导出历史数据标题
    const columnArr = ["序号", "学校名称", "出勤学生数量", "人数占比"];

    const excelInfo: { [key: string]: string[][] } = {};
    const dataList = this.getExcelDataList();
    if (dataList.length > 0) {
      excelInfo["公开课学生分布详情"] = [columnArr, ...dataList];
    }
    export2Excel(excelInfo, "学生分布详情数据");
  }
  // 拼接excel数据
  getExcelDataList() {
    const { dataList } = this;
    return dataList.map((item: StudentInfo) => {
      return [
        item.sort + "",
        item.schoolName,
        String(item.studentCount),
        Math.round(item.studentPrecent * 100) + "%",
      ];
    });
  }
}
</script>

<style lang="less" scoped>
.c-ExcelUtil {
  height: 100%;
  text-align: left;
  &-header {
    padding: 24px 0;
    border-bottom: 1px solid #ededed;
    i {
      cursor: pointer;
      font-size: 28px;
      color: #333;
      font-weight: bold;
    }
  }
  &-btn {
    ::v-deep .el-button {
      font-size: 16px;
      line-height: 54px;
      height: 54px;
      margin-right: 24px;
      padding: 0 32px;
    }
  }
}
</style>
