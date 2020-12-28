<template>
  <div class="c-TopicCollapse">
    <div v-if="$slots.hd" class="c-TopicCollapse-hd">
      <slot name="hd" />
    </div>

    <div class="c-TopicCollapse-bd">
      <slot name="ct" />
    </div>

    <div v-if="$slots.ft" class="c-TopicCollapse-ft">
      <slot name="ft" />
    </div>

    <div v-if="$slots.expand && expand" class="c-TopicCollapse-expand">
      <slot name="expand" />
    </div>
  </div>
</template>

<script lang="ts">
/**
 * * TopicCollapse
 * * 题目展示折叠面板
 */
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "TopicCollapse",
})
export default class TopicCollapse extends Vue {
  @Prop({ default: false })
  private expand!: boolean;
}
</script>

<style lang="less" scoped>
.c-TopicCollapse {
  border: 1px solid #ededed;
  &-bd {
    position: relative;
    padding: 24px;
    font-size: 16px;
  }
  &-ft {
    padding: 24px 36px;
    background-color: #f6faff;
  }
}
</style>
