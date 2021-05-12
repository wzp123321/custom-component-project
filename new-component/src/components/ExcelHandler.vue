<template>
  <div class="exportExcel">
    <div
      class="excel-header"
      style="display: flex;flex-direction: row;justify-content: start;margin:10px"
    >
      <!--导出文件名称-->
      <div class="filename">
        <label class="radio-label" style="padding-left:0;">Filename:</label>
        <el-input
          v-model="filename"
          placeholder="请输入导出文件名"
          style="width:340px;"
          prefix-icon="el-icon-document"
        />
      </div>
      <!--导出文件-->
      <div class="download">
        <el-button type="primary" icon="document" @click="handleDownload">导出Excel</el-button>
      </div>
    </div>
    <slot name="test"></slot>
    <el-table :data="list" border fit highlight-current-row height="390px">
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{ scope.$index+1 }}</template>
      </el-table-column>
      <el-table-column label="用户名">
        <template slot-scope="scope">{{ scope.row.username }}</template>
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">{{ scope.row.age }}</template>
      </el-table-column>
      <el-table-column label="司龄" align="center">
        <template slot-scope="scope">{{ scope.row.workTime }}</template>
      </el-table-column>
      <el-table-column label="地址" align="center">
        <template slot-scope="scope">{{ scope.row.address }}</template>
      </el-table-column>
      <el-table-column label="生日" align="center">
        <template slot-scope="scope">{{ scope.row.birthday }}</template>
      </el-table-column>
      <el-table-column label="描述" width="315" align="center">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>
    </el-table>
    <!-- 导入 -->
    <el-upload
      ref="upload"
      action="/"
      :show-file-list="false"
      :on-change="importExcel"
      :auto-upload="false"
    >
      <el-button slot="trigger" icon="el-icon-upload" size="small" type="primary">导入</el-button>
    </el-upload>
  </div>
</template>
<script>
// 引入xlsx
import XLSX from "xlsx";
import axios from "axios";
export default {
  name: "exportExcelDialog",
  data() {
    return {
      // 导出文件名称
      filename: "",
      // 导出文件格式
      bookType: "xlsx",
      // 模拟数据
      list: [],
      xlsxJson: []
    };
  },
  methods: {
    // 导出Excel表格
    handleDownload() {
      // 懒加载该用法
      import("@/excel/Export2Excel").then(excel => {
        // 设置导出表格的头部
        const tHeader = [
          "序号",
          "用户名",
          "密码",
          "描述",
          "生日",
          "头像",
          "地址",
          "host"
        ];
        // 设置要导出的属性
        const filterVal = [
          "id",
          "username",
          "password",
          "description",
          "birthday",
          "avatar",
          "address",
          "host"
        ];
        // 将要导出的数据进行一个过滤
        /**
         * 源数据导入到excel的数据每一条重新拼成一个数组,数组里的每个元素就是filterVal里的每个字段
         */
        const data = this.list.map((item, index) => {
          return [
            index + 1,
            item.username,
            item.password,
            item.description,
            item.birthday,
            item.avatar,
            item.address,
            item.host
          ];
        });
        // 调用我们封装好的方法进行导出Excel
        excel.export_json_to_excel({
          // 导出的头部
          header: tHeader,
          // 导出的内容
          data,
          // 导出的文件名称
          filename: this.filename,
          // 导出的表格宽度是否自动
          autoWidth: true,
          // 导出文件的后缀类型
          bookType: "xlsx"
        });
      });
    },
    // 过滤时间
    parseTime(date) {
      const dateTime = new Date(date);
      const YY = dateTime.getFullYear();
      const MM =
        dateTime.getMonth() + 1 < 10
          ? "0" + (dateTime.getMonth() + 1)
          : dateTime.getMonth() + 1;
      const D =
        dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
      const hh =
        dateTime.getHours() < 10
          ? "0" + dateTime.getHours()
          : dateTime.getHours();
      const mm =
        dateTime.getMinutes() < 10
          ? "0" + dateTime.getMinutes()
          : dateTime.getMinutes();
      const ss =
        dateTime.getSeconds() < 10
          ? "0" + dateTime.getSeconds()
          : dateTime.getSeconds();
      return `${YY}-${MM}-${D} ${hh}:${mm}`;
    },
    // 上传文件
    importExcel(file) {
      // let file = file.files[0] // 使用传统的input方法需要加上这一步
      const types = file.name.split(".")[1];
      const fileType = ["xlsx", "xlc", "xlm", "xls", "xlt", "xlw", "csv"].some(
        item => item === types
      );
      if (!fileType) {
        alert("格式错误！请重新选择");
        return;
      }
      this.file2Xce(file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          this.xlsxJson = tabJson;
        }
        console.log(this.xlsxJson);
      });
    },
    file2Xce(file) {
      return new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const data = e.target.result;
          this.wb = XLSX.read(data, {
            type: "binary"
          });
          const result = [];
          this.wb.SheetNames.forEach(sheetName => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            });
          });
          resolve(result);
        };
        reader.readAsBinaryString(file.raw);
        // reader.readAsBinaryString(file) // 传统input方法
      });
    },
    /**
     * 请求mock数据
     */
    getData() {
      axios.get("/mock/test").then(res => {
        const list = res.data.data;
        this.list = list;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>