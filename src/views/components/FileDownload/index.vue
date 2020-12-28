<template>
  <div class="file-download">
    <h1>获取文件流地址 读取文件进行下载</h1>
    <el-input
      placeholder="请输入文件下载地址"
      v-model="fileUrl"
      style="width:240px;margin:12px 0"
    >
    </el-input>
    <ExportBtn :progress="progress" @export="handleFileExport"></ExportBtn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ExportBtn from "./components/ExportBtn.vue";
import { downloadApi } from "./utils/index";

@Component({
  name: "FileDownload",
  components: {
    ExportBtn,
  },
})
export default class FileDownload extends Vue {
  private progress = 0;

  private fileUrl = "";

  handleFileExport() {
    const { fileUrl } = this;
    // "https://test.download.cycore.cn/omo-server/2020/11/10/4/3/89cc1cf0-97c7-451d-ad6a-203d18fd81b8.pptx"
    if (!fileUrl) {
      this.$message.error("文件下载地址不能为空!");
      return;
    }
    const filename = "文件下载";
    const ext = "xlsx";
    downloadApi({
      source: fileUrl,
      filename,
      ext,
      onSuccess(result: boolean) {
        console.log(result);
      },
      onProgress: (params) => {
        this.progress = params.percent;
      },
      onError: () => {
        console.log(1);
      },
    });
  }
}
</script>

<style lang="less" scoped></style>
