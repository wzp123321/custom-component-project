<template>
  <div class="c-Slide">
    <span
      v-for="(menuItem, menuIndex) in menus"
      :key="`menu_${menuIndex}`"
      :class="{
        'menu-item': true,
        'menu-active': menuItem.path === $route.path,
      }"
      @click="handleRoutelink(menuItem.path)"
    >
      {{ menuItem.meta.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import routes from "@/router/index";
@Component({
  name: "Slide",
  components: {},
})
export default class Slide extends Vue {
  // 菜单
  private menus: RouteConfig[] = [];
  // 根据路由配置文件获取menu列表
  getMenuList() {
    const menus: RouteConfig[] = (routes.options
      .routes as any)[0].children.filter((item: RouteConfig) => {
      return item.meta && item.meta.name;
    });
    this.menus = menus;
  }
  // 路由跳转
  handleRoutelink(path: string) {
    this.$router.push(path);
  }
  // 初始化
  mounted() {
    this.getMenuList();
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/less/common.less");

.c-Slide {
  height: 100%;
  width: 320px;
  overflow-y: auto;
  border-right: 1px solid #ededed;
  .menu-item {
    cursor: pointer;
    width: 100%;
    text-align: center;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    color: #333;
    border-bottom: 1px solid #ededed;
  }
  .menu-active {
    color: @common-color;
    background-color: #ededed;
  }
}
</style>
