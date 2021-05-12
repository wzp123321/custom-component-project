<template>
  <div class="hello" id="hello" ref="hello">
    <button @click="getImageShot">截屏</button>
    <img :src="imgUrl" alt style="height: 200px" />
    <exportExcelDialog>
      <template v-slot:test>
        <h1>3323232333232323332323233323232333232323</h1>
        <p>12222222222222222222222</p>
      </template>
    </exportExcelDialog>
    <h1>{{ userName }}</h1>
    <button @click="setUserName('2222222')">CLick me add</button>
    <Tinymce></Tinymce>
    <img
      style="width:100px;height:100px;cursor:pointer"
      src="http://test.download.cycore.cn/zhkt/2019/10/7/3/32/4c8b0300-f178-4d7a-9b6f-a78d432be4f5.jpg"
      alt
      @click="
        () => {
          show = true;
        }
      "
    />
    <ImageBigger
      :show="show"
      :imgUrl="imgUrl"
      @img_close="
        () => {
          show = false;
        }
      "
    ></ImageBigger>
    <CanvasHandler
      :startX="100"
      :endX="800"
      :startY="100"
      :endY="400"
    ></CanvasHandler>
  </div>
</template>

<script>
import store from "../store/index";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import Tinymce from "./tinymce/index";
import exportExcelDialog from "./ExcelHandler";
// 引入图片放大组件
import ImageBigger from "../components/ImageBigger.vue";
// 引入html2canvas
import html2canvas from "html2canvas";
// 引入domtoimage
import domtoimage from "dom-to-image";
import CanvasHandler from "./CanvasHandler";
//
import parallax from "vue-parallax";
import axios from "axios";
export default {
  name: "HelloWorld",
  store,
  components: {
    Tinymce,
    exportExcelDialog,
    ImageBigger,
    parallax,
    CanvasHandler
  },
  data() {
    return {
      show: false,
      imgUrl:
        "http://test.download.cycore.cn/zhkt/2019/10/7/3/32/4c8b0300-f178-4d7a-9b6f-a78d432be4f5.jpg"
    };
  },
  // 获取store中的count
  computed: mapGetters(["userName"]),
  // 获取store中操作count的函数
  methods: {
    ...mapActions(["setUserName"]),
    getImageShot() {
      var opts = {
        // scale: scale,
        // 添加的scale 参数
        // canvas: canvas,
        //自定义 canvas
        logging: false,
        //日志开关，便于查看html2canvas的内部执行流程
        // width: width,
        //dom 原始宽度
        // height: height,
        // useCORS: true // 【重要】开启跨域配置
      };

      html2canvas(document.getElementById("hello"), {
        logging: false,
        useCORS: true // 【重要】开启跨域配置
      }).then(canvas => {
        let img = new Image();
        const imgUrl = canvas.toDataURL("image/jpeg");
        // this.imgUrl = imgUrl;
        // this.show = true;
        // 图片下载
        img.src = imgUrl;
        let a = document.createElement("a");
        a.href = imgUrl;
        a.download = "testimg.png";
        a.click();
      });
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#testimg img {
  width: 800px;
  height: 200px;
}
</style>
