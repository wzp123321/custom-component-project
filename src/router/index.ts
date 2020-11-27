import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
