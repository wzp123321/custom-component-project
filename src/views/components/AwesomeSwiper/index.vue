<template>
  <div class="awesome-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        :class="{ active: activeIndex === index }"
        v-for="(item, index) in schoolList"
        :key="index"
      >
        <span @click="swiperTo(index)">
          {{ item.className }}
        </span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "AwesomeSwiperComp",
  components: {},
})
export default class AwesomeSwiperComp extends Vue {
  @Prop({ default: [] })
  private list!: { [key: string]: string };

  @Prop({ default: 0 })
  private activeIndex!: number;

  private schoolList: { clazzId: string; className: string }[] = [
    {
      clazzId: "111",
      className: "测试班级1",
    },
    {
      clazzId: "222",
      className: "测试班级2",
    },
    {
      clazzId: "333",
      className: "测试班级3",
    },
    {
      clazzId: "444",
      className: "测试班级4",
    },
    {
      clazzId: "555",
      className: "测试班级5",
    },
    {
      clazzId: "666",
      className: "测试班级6",
    },
    {
      clazzId: "777",
      className: "测试班级77777777",
    },
    {
      clazzId: "888",
      className: "测试班级888888",
    },
    {
      clazzId: "999",
      className: "测试班级6",
    },
    {
      clazzId: "101010",
      className: "测试班级77777777",
    },
    {
      clazzId: "111111",
      className: "测试班级888888",
    },
    {
      clazzId: "10102342310",
      className: "测试班级717777",
    },
    {
      clazzId: "11111324321",
      className: "测试班级3888",
    },
  ];
  swiperOptions = {
    slidesPerView: "auto",
    // 不填为默认选项
    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, //修改swiper的父元素时，自动初始化swiper
    isUpdate: false, // 自定义参数：页面数据更新时，不主动执行swiper的update事件
  };

  /**
   * 点击事件
   */
  swiperTo(index: number) {
    this.activeIndex = index;
    this.swiper.slideTo(index);
  }

  get swiper() {
    return (this.$refs.mySwiper as any).$swiper;
  }
}
</script>

<style lang="less" scoped>
.awesome-swiper {
  width: 600px;
  overflow-x: auto;
  height: 100%;
  .active {
    color: #06a5ff;
  }
  ::v-deep .swiper-container {
    .swiper-slide {
      text-align: center;
      padding: 12px 0;
      cursor: pointer;
      width: 100px;
      border: 1px solid #ededed;
      width: 120px !important;
    }
  }
}
</style>
