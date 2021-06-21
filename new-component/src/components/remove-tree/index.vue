<template>
  <div style="padding:48px">
    <a-tree
      v-if="hasloaded"
      :tree-data="treeData"
      :checkable="true"
      showIcon
      showLine
      @check="treeCheck"
      v-model="checkedKeys"
    >
      <a-icon
        slot="switcherIcon"
        type="plus-circle"
        :style="{ fontSize: '16px' }"
      />
    </a-tree>
    <a-button type="primary" @click="submit"> 提交</a-button>
  </div>
</template>
<script>
/*eslint-disable*/
import { Tree, Icon, Button } from "ant-design-vue";

class Deffer {
  resolve = null;
  reject = null;
  promise = null;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

export default {
  components: {
    "a-tree": Tree,
    "a-icon": Icon,
    "a-button": Button
  },
  data() {
    return {
      replaceFields: {
        children: "child",
        title: "name"
      },
      treeData: [],
      checkedKeys: [],
      hasloaded: false,
      keyArr: []
    };
  },
  async created() {
    // await this.initSingleArrayData();
    let proArr = [];
    for (let i = 0; i < 5; i++) {
      let cityArr = [];
      for (let j = 0; j < 5; j++) {
        let areaArr = [];
        for (let k = 0; k < 5; k++) {
          areaArr.push({
            title: `area-${i}-${j}-${k}`,
            key: `${i}-${j}-${k}`,
            type: "area",
            checkable: true,
            disableCheckbox: false,
            children: []
          });
        }
        cityArr.push({
          title: `city-${i}-${j}`,
          key: `${i}-${j}`,
          type: "city",
          checkable: true,
          disableCheckbox: false,
          children: areaArr
        });
      }
      proArr.push({
        title: `pro-${i}`,
        key: `${i}`,
        type: "pro",
        checkable: true,
        disableCheckbox: false,
        children: cityArr
      });
    }
    this.treeData = proArr;
    this.hasloaded = true;
  },
  methods: {
    /**
     * 去除多余key
     */
    removeUnnecessaryKeys(list) {
      list.forEach(async item => {
        /**
         * 如果当前节点被选中
         *  且所有子节点不全在checkKeys中
         *  判断是否有子节点
         */
        if (item.children) {
          const keys = await this.getAllKeys(item.children);
          console.log("keys-----------------", keys);
          // 判断keys是否全在checkKeys数组中 如果是则代表当前节点下全被选择
          const flag = this.checkSame(this.checkedKeys, keys);
          console.log("flag------------------------", flag, item.key);
          if (this.checkedKeys.includes(item.key) && flag !== "all") {
            // 过滤掉这个节点的key
            this.checkedKeys = this.checkedKeys.filter(checkItem => {
              return checkItem !== item.key;
            });
            this.removeUnnecessaryKeys(item.children);
          }
        }
      });
    },
    /**
     * 获取一个数组 所有key
     */
    getAllKeys(list) {
      let deffer = new Deffer();
      let arr = list;
      const getKey = d => {
        d.forEach(item => {
          if (item.children) {
            arr = [...arr, ...item.children];
            getKey(item.children);
          }
        });
      };
      getKey(list);
      deffer.resolve(
        arr.map(item => {
          return item.key;
        })
      );
      return deffer.promise;
    },
    /**
     * 判断a是否包含b数组
     * @param type all-全包含  half-半包含
     */
    checkSame(a, b) {
      let type = "none";
      if (!a || !b) {
        return false;
      }
      const arr = b.filter(item => {
        return !a.includes(item);
      });
      type =
        arr.length == 0
          ? "all"
          : arr.length !== 0 && arr.length < b.length
          ? "half"
          : "none";
      return type;
    },
    /**
     * 数组选中事件
     */
    treeCheck(checkkeys, e) {
      this.checkkeys = checkkeys;
      this.keyArr = JSON.parse(JSON.stringify(checkkeys));
    },
    /**
     * 计算checkkeys
     */
    calculateCheckKeys() {
      let deffer = new Deffer();
      const { treeData } = this;
      const { checkedKeys } = this;
      // 深拷贝
      let dataArr = JSON.parse(JSON.stringify(checkedKeys));
      const addKeys = list => {
        list.forEach(async item => {
          if (item.children) {
            const keys = await this.getAllKeys(item.children);
            const type = this.checkSame(dataArr, keys);
            console.log("keys-------------------", keys, type);
            if (type === "half") {
              dataArr.push(item.key);
              console.log(dataArr);
              addKeys(item.children);
            }
          } else {
            deffer.resolve(dataArr);
          }
        });
      };
      addKeys(treeData);

      return deffer.promise;
    },
    /**
     * 提交
     * 如果子节点被选中
     *  父节点也要放到checkKeys中
     */
    async submit() {
      const list = await this.calculateCheckKeys();
      console.log("list", list);
      this.keyArr = list;
    }
  }
};
</script>
