<template>
  <div class="image-bigger-wrap" v-show="show">
    <div class="close-icon">
      <img src="../assets/closeimg.png" alt style="width:80px;height:80px"/>
      <i class="el-icon-close close" @click="getImageBiggerClose"></i>
    </div>
    <img :src="imgUrl" alt />
  </div>
</template>
<script>
export default {
  name: "ImageBigger",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      default: ""
    }
  },
  methods: {
    getImageBiggerClose() {
      this.$emit("img_close");
    }
  }
};
</script>
<style  scoped>
.image-bigger-wrap {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all ease-in-out 500ms;
}


.close-icon {
  position: absolute;
  top: 0;
  right: 0;
}
.close {
  position: absolute;
  top: 22px;
  left: 41px;
  font-size: 22px;
  color: #cccbcb;
  font-weight: bold;
}
.close:hover {
  color: #fff;
}
img {
  margin: 0 auto;
  width: 900px;
  height: 400px;
  border-radius: 2px;
}
</style>