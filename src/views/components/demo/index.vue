<template>
  <div class="demo">
    <OnlineTimeStampLine></OnlineTimeStampLine>
    <div v-custom2:[direction]="loading"></div>
    <div @click="handleCountAdd">
      {{ count }}------------{{ isDouble ? "是双数" : "是单数" }}
    </div>
    <!-- <CustomDirectives></CustomDirectives> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import OnlineTimeStampLine from "./components/onlineTimeStampLine.vue";
import CustomDirectives from "../custom-directives/index.vue";
interface SideEventInfo {
  status: number;
  startTime: number;
  endTime: number;
  rate?: number;
}

interface AreaInfo {
  key: number;
  title: string;
  children: AreaInfo[];
}

@Component({
  name: "VideoJsPlayerComp",
  components: {
    OnlineTimeStampLine,
    CustomDirectives,
  },
})
export default class VideoJsPlayerComp extends Vue {
  private loading = true;
  private direction = "left";

  private count = 0;

  private msg = "121212";

  private test = [1, 2, 3, 4, 5, 6];

  private dataList: AreaInfo[] = [
    {
      key: 1,
      title: "测试1",
      children: [
        {
          key: 2,
          title: "测试11",
          children: [
            {
              key: 3,
              title: "测试111",
              children: [
                {
                  key: 4,
                  title: "测试1111",
                  children: [],
                },
                {
                  key: 5,
                  title: "测试1112",
                  children: [],
                },
                {
                  key: 6,
                  title: "测试1113",
                  children: [],
                },
                {
                  key: 7,
                  title: "测试1114",
                  children: [],
                },
              ],
            },
            {
              key: 8,
              title: "测试112",
              children: [
                {
                  key: 9,
                  title: "测试1121",
                  children: [],
                },
                {
                  key: 10,
                  title: "测试1122",
                  children: [],
                },
                {
                  key: 11,
                  title: "测试1123",
                  children: [],
                },
                {
                  key: 12,
                  title: "测试1124",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          key: 24,
          title: "测试12",
          children: [
            {
              key: 25,
              title: "测试121",
              children: [
                {
                  key: 26,
                  title: "测试1211",
                  children: [],
                },
                {
                  key: 16,
                  title: "测试1212",
                  children: [],
                },
                {
                  key: 17,
                  title: "测试1213",
                  children: [],
                },
                {
                  key: 18,
                  title: "测试1214",
                  children: [],
                },
              ],
            },
            {
              key: 19,
              title: "测试122",
              children: [
                {
                  key: 20,
                  title: "测试1221",
                  children: [],
                },
                {
                  key: 21,
                  title: "测试1222",
                  children: [],
                },
                {
                  key: 22,
                  title: "测试1223",
                  children: [],
                },
                {
                  key: 23,
                  title: "测试1224",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 1,
      title: "测试1",
      children: [
        {
          key: 2,
          title: "测试11",
          children: [
            {
              key: 3,
              title: "测试111",
              children: [
                {
                  key: 4,
                  title: "测试1111",
                  children: [],
                },
                {
                  key: 5,
                  title: "测试1112",
                  children: [],
                },
                {
                  key: 6,
                  title: "测试1113",
                  children: [],
                },
                {
                  key: 7,
                  title: "测试1114",
                  children: [],
                },
              ],
            },
            {
              key: 8,
              title: "测试112",
              children: [
                {
                  key: 9,
                  title: "测试1121",
                  children: [],
                },
                {
                  key: 10,
                  title: "测试1122",
                  children: [],
                },
                {
                  key: 11,
                  title: "测试1123",
                  children: [],
                },
                {
                  key: 12,
                  title: "测试1124",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          key: 13,
          title: "测试12",
          children: [
            {
              key: 14,
              title: "测试121",
              children: [
                {
                  key: 15,
                  title: "测试1211",
                  children: [],
                },
                {
                  key: 16,
                  title: "测试1212",
                  children: [],
                },
                {
                  key: 17,
                  title: "测试1213",
                  children: [],
                },
                {
                  key: 18,
                  title: "测试1214",
                  children: [],
                },
              ],
            },
            {
              key: 19,
              title: "测试122",
              children: [
                {
                  key: 20,
                  title: "测试1221",
                  children: [],
                },
                {
                  key: 21,
                  title: "测试1222",
                  children: [],
                },
                {
                  key: 22,
                  title: "测试1223",
                  children: [],
                },
                {
                  key: 23,
                  title: "测试1224",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 1,
      title: "测试1",
      children: [
        {
          key: 2,
          title: "测试11",
          children: [
            {
              key: 3,
              title: "测试111",
              children: [
                {
                  key: 4,
                  title: "测试1111",
                  children: [],
                },
                {
                  key: 5,
                  title: "测试1112",
                  children: [],
                },
                {
                  key: 6,
                  title: "测试1113",
                  children: [],
                },
                {
                  key: 7,
                  title: "测试1114",
                  children: [],
                },
              ],
            },
            {
              key: 8,
              title: "测试112",
              children: [
                {
                  key: 9,
                  title: "测试1121",
                  children: [],
                },
                {
                  key: 10,
                  title: "测试1122",
                  children: [],
                },
                {
                  key: 11,
                  title: "测试1123",
                  children: [],
                },
                {
                  key: 12,
                  title: "测试1124",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          key: 13,
          title: "测试12",
          children: [
            {
              key: 14,
              title: "测试121",
              children: [
                {
                  key: 15,
                  title: "测试1211",
                  children: [],
                },
                {
                  key: 16,
                  title: "测试1212",
                  children: [],
                },
                {
                  key: 17,
                  title: "测试1213",
                  children: [],
                },
                {
                  key: 18,
                  title: "测试1214",
                  children: [],
                },
              ],
            },
            {
              key: 19,
              title: "测试122",
              children: [
                {
                  key: 20,
                  title: "测试1221",
                  children: [],
                },
                {
                  key: 21,
                  title: "测试1222",
                  children: [],
                },
                {
                  key: 22,
                  title: "测试1223",
                  children: [],
                },
                {
                  key: 23,
                  title: "测试1224",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 1,
      title: "测试1",
      children: [
        {
          key: 2,
          title: "测试11",
          children: [
            {
              key: 3,
              title: "测试111",
              children: [
                {
                  key: 4,
                  title: "测试1111",
                  children: [],
                },
                {
                  key: 5,
                  title: "测试1112",
                  children: [],
                },
                {
                  key: 6,
                  title: "测试1113",
                  children: [],
                },
                {
                  key: 7,
                  title: "测试1114",
                  children: [],
                },
              ],
            },
            {
              key: 8,
              title: "测试112",
              children: [
                {
                  key: 9,
                  title: "测试1121",
                  children: [],
                },
                {
                  key: 10,
                  title: "测试1122",
                  children: [],
                },
                {
                  key: 11,
                  title: "测试1123",
                  children: [],
                },
                {
                  key: 12,
                  title: "测试1124",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          key: 13,
          title: "测试12",
          children: [
            {
              key: 14,
              title: "测试121",
              children: [
                {
                  key: 15,
                  title: "测试1211",
                  children: [],
                },
                {
                  key: 16,
                  title: "测试1212",
                  children: [],
                },
                {
                  key: 17,
                  title: "测试1213",
                  children: [],
                },
                {
                  key: 18,
                  title: "测试1214",
                  children: [],
                },
              ],
            },
            {
              key: 19,
              title: "测试122",
              children: [
                {
                  key: 20,
                  title: "测试1221",
                  children: [],
                },
                {
                  key: 21,
                  title: "测试1222",
                  children: [],
                },
                {
                  key: 22,
                  title: "测试1223",
                  children: [],
                },
                {
                  key: 23,
                  title: "测试1224",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  private handleCountAdd() {
    this.count++;
    this.loading = !this.loading
  }

  private getSuccessionIndexList(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const middleNum = array[j];
          array[j] = array[j + 1];
          array[j + 1] = middleNum;
        }
      }
    }
    console.log(array);
  }
  /**
   * 删除多余的元素
   */
  private removeSurplusElement() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const list = [
      [0],
      [1],
      [2, 3, 4],
      [5, 6],
      [7, 8, 9, 10],
      [11, 12],
      [13, 14],
      [15],
    ];
    let removeCount = 0;
    list.forEach((item) => {
      if (item.length > 1) {
        arr.splice(item[1] - removeCount, item.length - 1);
        removeCount += item.length - 1;
      }
    });
    console.log("arr", arr);
  }
  get isDouble() {
    return this.count % 2 === 0;
  }
  /**
   * 优化选中数据
   */
  private onFilterCheckList(checks: number[]) {
    const { dataList } = this;
    const newChecks: { title: string; value: number; version: string }[] = [];
    dataList.forEach((item) => {
      if (checks.includes(item.key)) {
        newChecks.push({
          title: item.title,
          value: item.key,
          version: "",
        });
      } else {
        item.children.forEach((childItem) => {
          if (checks.includes(childItem.key)) {
            newChecks.push({
              title: childItem.title,
              value: childItem.key,
              version: "",
            });
          } else {
            childItem.children.forEach((gradeChildItem) => {
              if (checks.includes(gradeChildItem.key)) {
                newChecks.push({
                  title: gradeChildItem.title,
                  value: gradeChildItem.key,
                  version: "",
                });
              }
            });
          }
        });
      }
    });
    return newChecks;
  }

  @Watch("msg")
  handleMsgChange() {
    console.log("this.msg", this.msg);
  }
  created() {
    this.msg = "3333222222";
    this.loading = true;
  }
  mounted() {
    // console.log(this.test);
    // delete this.test[1];
    // console.log(this.test);
    // this.$delete(this.test, 2);
    // console.log(this.test);
    // // const list = [2, 43, 34, 26, 47, 78, 52, 3, 6];
    // // this.getSuccessionIndexList(list);
    // this.removeSurplusElement();
    // this.msg = "121212121";
    // this.msg = "222222222222";
    // this.msg = "3333333333333";
    console.log("mounted");
  }

  activated() {
    console.log("activated");
  }
}
</script>

<style lang="less" scoped>
.demo {
  position: relative;
  width: 100%;
  height: 100%;
  .video-player {
    height: 5rem;
    ::v-deep .video-js {
      transform: rotate(0deg);
    }
    ::v-deep .full-screen {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(90deg);
      transition: all 500ms;
      z-index: 9999;
    }
  }
}
</style>
