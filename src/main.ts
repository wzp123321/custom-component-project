import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAwesomeSwiper from "vue-awesome-swiper";
//引入公共样式
import "@/assets/less/flex.less";
import "@/assets/less/common.less";
import "swiper/swiper-bundle.css";
// import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);
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
