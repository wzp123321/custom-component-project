import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";
//引入公共样式
import "@/assets/less/flex.less";
import "@/assets/less/common.less";
import "swiper/swiper-bundle.css";
// swiper---组件
// import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);
// vue-video-player---组件
import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
import "videojs-contrib-hls"; //单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。
Vue.use(VideoPlayer);
// 弹幕组件
import { vueBaberrage } from 'vue-baberrage'
Vue.use(vueBaberrage);

// 引入依赖
import "lib-flexible/flexible";
// 注入器
import elementUIRegister from "@/plugins/elementUIRegister";
Vue.use(elementUIRegister);
// 自定义组件
import { customRegister } from "@/plugins/customComponent";
customRegister();

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  document.title = to.meta.name || "自定义组件合集";
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
