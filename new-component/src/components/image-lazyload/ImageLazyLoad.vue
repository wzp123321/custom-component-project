<template>
  <div :style="`width:${width}px;height:${height}px`" class="imagebox">
    <img src="@/assets/loading_green.gif" style="width:36px;height:36px;" alt v-if="!hasUrl" />
    <img :src="imgnewUrl" style="width:100%;height:100%" alt="111" v-else />
  </div>
</template>
<script>
export default {
  name: "LazyLoad",
  props: {
    width: {
      type: Number,
      default: 180
    },
    height: {
      type: Number,
      default: 210
    },
    imgUrl: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hasUrl: false,
      imgnewUrl: ""
    };
  },
  created() {
    this.imgnewUrl = this.imgUrl;
  },
  watch: {
    imgnewUrl: function(newVal, oldVal) {
      if (newVal) {
        setTimeout(() => {
          this.hasUrl = true;
        }, 500);
      }
    }
  }
};
</script>
<style scoped>
.imagebox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.imagebox img {
  margin: 0 auto;
}
</style>