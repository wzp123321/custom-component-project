<template>
  <el-popover
    :placement="placement"
    :title="title"
    :width="width"
    :trigger="trigger"
  >
    <slot></slot>
    <span slot="reference">
      <slot name="reference"></slot>
    </span>
  </el-popover>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "CustomPopover",
  components: {},
})
export default class CustomPopover extends Vue {
  // 标题
  @Prop({ default: "提示" })
  private title!: string;
  // 方向
  @Prop({ default: "top-start" })
  private placement!: string;
  // 宽度
  @Prop({ default: 480 })
  private width!: number;
  // 显示方式
  @Prop({ default: "hover" })
  private trigger!: string;
}
</script>

<style lang="less" scoped></style>
