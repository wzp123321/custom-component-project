<template>
  <div class="c-Loading">
    <PlaneLoading></PlaneLoading>
    <ChaseLoading></ChaseLoading>
    <BounceLoading></BounceLoading>
    <WaveLoading></WaveLoading>
    <PluseLoading></PluseLoading>
    <FlowLoading></FlowLoading>
    <SwingLoading></SwingLoading>
    <CircleLoading></CircleLoading>
    <CircleFadeLoading></CircleFadeLoading>
    <GridLoading></GridLoading>
    <FoldLoading></FoldLoading>
    <WanderLoading></WanderLoading>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PlaneLoading from "./components/Plane-Loading.vue";
import ChaseLoading from "./components/Chase-Loading.vue";
import BounceLoading from "./components/Bounce-Loading.vue";
import WaveLoading from "./components/Wave-Loading.vue";
import PluseLoading from "./components/Pulse-Loading.vue";
import FlowLoading from "./components/Flow-Loading.vue";
import SwingLoading from "./components/Swing-Loading.vue";
import CircleLoading from "./components/Circle-Loading.vue";
import CircleFadeLoading from "./components/Circle-Fade-Loading.vue";
import GridLoading from "./components/Grid-Loading.vue";
import FoldLoading from "./components/Fold-Loading.vue";
import WanderLoading from "./components/Wander-Loading.vue";

@Component({
  name: "Loading",
  components: {
    PlaneLoading,
    ChaseLoading,
    BounceLoading,
    WaveLoading,
    PluseLoading,
    FlowLoading,
    SwingLoading,
    CircleLoading,
    CircleFadeLoading,
    GridLoading,
    FoldLoading,
    WanderLoading,
  },
})
export default class Loading extends Vue {}
</script>

<style lang="less" scoped>
.c-Loading {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  &-components {
    width: calc(50% - 2px);
    height: 480px;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
  }
}
</style>
