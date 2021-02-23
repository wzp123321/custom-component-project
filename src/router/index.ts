import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/excel",
    children: [
      {
        path: "/excel",
        name: "ExcelUtil",
        meta: {
          name: "excel导入导出",
        },
        component: () =>
          import(
            /* webpackChunkName: "custom-component-excel" */ "@/views/components/Excel/index.vue"
          ),
      },
      {
        path: "/loading",
        name: "Loading",
        meta: {
          name: "loading模板",
        },
        component: () =>
          import(
            /* webpackChunkName: "custom-component-loading" */ "@/views/components/Loading/index.vue"
          ),
      },
      {
        path: "/fileDownload",
        name: "FileDownload",
        meta: {
          name: "文件读取下载",
        },
        component: () =>
          import(
            /* webpackChunkName: "custom-component-filedownload" */ "@/views/components/FileDownload/index.vue"
          ),
      },
      {
        path: "/awesomeSwiper",
        name: "AwesomeSwiper",
        meta: { name: "awesomeSwiper使用" },
        component: () =>
          import(
            /* webpackChunkName: "custom-component-awesomeSwiper" */ "@/views/components/AwesomeSwiper/index.vue"
          ),
      },
    ],
  },
  {
    path: "/demo",
    name: "Demo",
    meta: { name: "demo" },
    component: () =>
      import(
        /* webpackChunkName: "custom-component-demo" */ "@/views/components/demo/index.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
