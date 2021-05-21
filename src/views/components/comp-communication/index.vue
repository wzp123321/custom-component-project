<template>
  <div class="comp-communication">
    <el-button @click="onChild1Store">改变child1 store</el-button>
    child1Emit-----------{{ child1Props }}
    <!-- 子组件1 -->
    <childComp1
      :grandSon="grandSon"
      :child1Props="child1Props"
      :child1Sync.sync="child1Sync"
      @child_1emit="onChild1EmitHandler"
    ></childComp1>
    <!-- 子组件2 -->
    <childComp2></childComp2>
  </div>
</template>
<script>
import childComp1 from "./Child_1";
import childComp2 from "./Child_2";
export default {
  name: "CompCommunication",
  components: {
    childComp1,
    childComp2,
  },
  data() {
    return {
      child1Props: "我是child1的props通信",
      child1Sync: "child1Sync",
      grandSon: "我是传给孙子的参数",
    };
  },
  methods: {
    onChild1EmitHandler(value) {
      this.child1Props = value;
    },
    onChild1Store() {
      console.log(this.$store);
      this.$store.dispatch("setChild1", "parent修改child1");
    },
  },
  created() {
    this.bus.$on("eventBusFn", () => {
      console.log("eventbus emit on");
    });
  },
};
</script>
<style lang="less" scoped></style>
