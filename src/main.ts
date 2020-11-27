import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入公共样式
import "@/assets/less/flex.less";
import "@/assets/less/common.less";
// 引入依赖
import "lib-flexible/flexible";

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
