<template>
  <div class="wrapper">
    <h1>实现图片懒加载</h1>
    <LazyLoad :imgUrl="imgUrl"></LazyLoad>
  </div>
</template>
<script>
import LazyLoad from "./ImageLazyLoad";
export default {
  name: "ImageLazyLoad",
  components: {
    LazyLoad
  },
  data() {
    return {
      imgUrl: "https://upload-images.jianshu.io/upload_images/19383585-4aad317d2d2dd99e.png?imageMogr2/auto-orient/strip|imageView2/2/w/409/format/webp",
      imgList: []
    };
  },
  methods: {
    // 防抖函数
    debounce(fn, delay) {
      let timer = null;
      return function() {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, delay);
      };
    },
    handlerScrollListener() {
      let imgs = this.imgList;
      for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].getBoundingClientRect().top <= window.innerHeight) {
          this.loadImage(imgs[i], i);
        }
      }
    },
    /**
     * 加载图片
     */
    loadImage(el, index) {
      let src = el.getAttribute("data-src");
      el.src = src;
      this.imgList.splice(index, 1);
    }
  },
  created() {
    this.imgList = [...document.querySelectorAll("lazy")];
    window.addEventListener("scroll", this.handlerScrollListener());
  }
};
</script>
<style scoped>
.wrapper {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper img {
  margin: 0 auto;
}
</style>