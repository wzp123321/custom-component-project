<template>
  <div>
      <!-- 父亲组件会通过$attrs获取到不在父亲props里面的所有属性，
      父亲组件通过在孙子组件上绑定$attrs 和 $listeners 使孙组件获取爷爷传递的值并且可以调用在爷爷那里定义的方法 -->
    <div class="comp-grandson">grandSon----------------{{ grandSon }}</div>
    <el-button>孙传爷</el-button>
  </div>
</template>
<script>
export default {
  name: "GrandSon",
  computed: {
    grandSon: function() {
      return this.$attrs.grandSon;
    },
  },
  mounted() {
    console.log(this.$attrs);
  },
};
</script>
<style lang="less" scoped>
.comp-grandson {
  padding: 48px;
}
</style>
