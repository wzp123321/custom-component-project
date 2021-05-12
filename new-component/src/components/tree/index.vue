<template>
  <div style="padding:48px">
    <a-tree
      v-if="hasloaded"
      :tree-data="treeData"
      checkable
      showIcon
      showLine
      @check="treeCheck"
      v-model="checkedKeys"
      :load-data="onLoadData"
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
import { Tree, Icon } from "ant-design-vue";
import { treeData } from "./mock";
export default {
  components: {
    "a-tree": Tree,
    "a-icon": Icon
  },
  data() {
    return {
      replaceFields: {
        children: "child",
        title: "name"
      },
      treeData,
      checkedKeys: ["01010201", "01010101", "01010102", "010101"],
      areaSchoolMap: new Map(),
      hasloaded: false
    };
  },
  async created() {
    await this.initData();
    this.hasloaded = true;
    console.log(this.treeData);
  },
  methods: {
    initData() {
      const { checkedKeys, treeData } = this;
      treeData.forEach((item, idx) => {
        item.children.forEach((childItem, idx1) => {
          childItem.children.forEach(async (sonItem, idx2) => {
            // 如果有区
            if (checkedKeys.includes(sonItem.key)) {
              console.log(sonItem.key);
              const res = await this.loadData(sonItem.key);
              console.log(res);
              this.$set(
                this.treeData[idx].children[idx1].children[idx2],
                "children",
                res
              );
            }
          });
        });
      });
    },
    treeCheck(checkkeys, e) {
      console.log(checkkeys);
      this.checkkeys = checkkeys;
    },
    async onLoadData(node) {
      console.log(node, node.dataRef);

      if (
        node.dataRef.hasOwnProperty("first") &&
        node.dataRef.hasOwnProperty("second") &&
        node.dataRef.hasOwnProperty("third") &&
        !this.treeData[node.dataRef.first].children[
          node.dataRef.second
        ].children[node.dataRef.third].hasOwnProperty("children")
      ) {
        const res = await this.loadData(node.dataRef.key);
        this.$set(
          this.treeData[node.dataRef.first].children[node.dataRef.second]
            .children[node.dataRef.third],
          "children",
          res
        );
        res.forEach(item => {
          this.areaSchoolMap.set(item.key, node.dataRef.key);
        });
        console.log(this.treeData);
      }
    },
    loadData(parentKey) {
      return new Promise((resolve, reject) => {
        resolve([
          {
            title: "测试学校1",
            key: `${parentKey}01`,
            children: [],
            checkable: false,
            isLeaf: true,
            disableCheckbox: false
          },
          {
            title: "测试学校2",
            key: `${parentKey}02`,
            children: [],
            checkable: false,
            isLeaf: true,
            disableCheckbox: false
          }
        ]);
      });
    },
    /**
     * 提交
     */
    submit() {
      const { checkkeys, treeData } = this;
    }
  }
};
</script>
