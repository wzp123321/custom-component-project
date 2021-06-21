<template>
  <div>{{a}}-------------{{b}}</div>
</template>
<script>
export default {
  name: 'ChildComp',
  props: {
    a: {
      type: Number,
      default: 0
    },
    b: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    // this.a = 12
    this.b.name = '11111111'
  }
}
</script>
<style lang="less" scoped></style>
