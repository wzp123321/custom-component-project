<template>
  <div class="editor">
    <mavonEditor v-model="editorValue"></mavonEditor>
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
};
</script>
<style lang="less" scoped></style>
