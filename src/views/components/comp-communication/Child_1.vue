<template>
  <div class="comp-child_1">
    <p>props---child1Props----{{ child1Props }}</p>
    <p>propssync----child1Sync----{{ child1Sync }}</p>
    <p>store----child1============={{ child1 }}</p>
    <el-button type="primary" @click="onChildEmit"
      >子组件emit调用父组件方法</el-button
    >
    <grandSon v-bind="$attrs"></grandSon>
  </div>
</template>
<script>
import grandSon from "./GrandSon";
export default {
  name: "childComp1",
  components: {
    grandSon,
  },
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性
  props: {
    child1Props: {
      type: String,
      default: "",
    },
    child1Sync: {
      type: String,
      default: "",
    },
  },
  computed: {
    child1: function() {
      return this.$store.state.child1;
    },
  },
  methods: {
    onChildEmit() {
      this.$emit("child_1emit", "我是子组件emit");
      this.$emit("update:child1Sync", "child1Sync----update");
      this.bus.$emit("eventBusFn");
      this.bus.$emit("child2");
      this.$store.dispatch("setChild2", "child1修改child2");
    },
  },
};
</script>
<style lang="less" scoped>
.comp-child_1 {
  padding: 48px;
  p {
    line-height: 48px;
  }
}
</style>
