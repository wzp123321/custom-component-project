<template>
  <div class="file-download">
    <p>获取文件流地址 读取文件进行下载</p>
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

  handleFileExport() {
    const source =
      "https://test.download.cycore.cn/omo-server/2020/11/10/4/3/89cc1cf0-97c7-451d-ad6a-203d18fd81b8.pptx";
    const filename = "测试下载";
    const ext = "xlsx";
    downloadApi({
      source,
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

<style lang="less" scoped>
</style>
