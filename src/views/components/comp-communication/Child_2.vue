<template>
  <div class="comp-child_2">store-child2======={{ child2 }}</div>
</template>
<script>
export default {
  name: "childComp2",
  computed: {
    child2: function() {
      return this.$store.state.child2;
    },
  },
  mounted() {
    this.bus.$on("child2", function() {
      console.log("child1 eventbus 通信child2");
    });
  },
};
</script>
<style lang="less" scoped>
.comp-child_2 {
  padding: 48px;
}
</style>
