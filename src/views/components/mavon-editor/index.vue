<template>
  <div class="editor">
    <mavonEditor
      v-model="editorValue"
      ref="mavonEditor"
      :ishljs="true"
      @imgAdd="onImageUpload"
    ></mavonEditor>
  </div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      editorValue: "",
    };
  },
  methods: {
    /**
     * 图片上传
     */
    onImageUpload(position, file) {
      console.log(position, file);
    },
  },
};
</script>
<style lang="less" scoped></style>
