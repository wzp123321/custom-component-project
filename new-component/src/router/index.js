/*eslint-disable*/

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ImageLazyLoad from "@/components/image-lazyload/index.vue"
import DraggableHandler from "@/components/DraggableHandler.vue"
Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [{
    path: '/',
    name: 'app',
    component: () => import("@/App.vue"),
    redirect: "hello",
    children: [{
        path: "hello",
        name: "hello",
        component: HelloWorld,
      },
      {
        path: "lazy",
        name: "lazy",
        component: ImageLazyLoad
      },
      {
        path: "/draggable",
        name: "draggable",
        component: DraggableHandler
      }, {
        path: '/tree',
        name: 'tree',
        component: () => import('../components/tree')
      }, {
        path: '/remove-tree',
        name: 'tree',
        component: () => import('../components/remove-tree')
      },
      {
        path: '/demo',
        name: 'demo',
        component: () => import('../components/demo')
      }
    ]
  }]
})
