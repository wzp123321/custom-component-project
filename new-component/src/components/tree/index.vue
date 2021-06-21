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
    <a-button type="primary" @click="submitMulitArray"> 提交</a-button>
  </div>
</template>
<script>
/*eslint-disable*/
import { Tree, Icon, Button } from "ant-design-vue";
// import { treeData } from "./mock";
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
      checkedKeys: ["0-0-0","0-1-0","0-4-0","0-5-0"],
      hasloaded: false,
      selectDataList: [] // 选中的数组
    };
  },
  async created() {
    // await this.initSingleArrayData();
    let proArr = [];
    for (let i = 0; i < 10; i++) {
      let cityArr = [];
      for (let j = 0; j < 10; j++) {
        let areaArr = [];
        for (let k = 0; k < 10; k++) {
          // if (j == 1 || j == 4 || j == 12) {
            let schoolArr = [];
            // for (let l = 0; l < 102; l++) {
            //   schoolArr.push({
            //     title: `school-${i}-${j}-${k}-${l}`,
            //     key: `${i}-${j}-${k}-${l}`,
            //     type: "school",
            //     checkable: true,
            //     disableCheckbox: false
            //   });
            // }
            areaArr.push({
              title: `area-${i}-${j}-${k}`,
              key: `${i}-${j}-${k}`,
              type: "area",
              checkable: true,
              disableCheckbox: false,
              children: schoolArr
            });
          // }
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
     * 扁平化数组下回显
     */
    initSingleArrayData() {
      const { treeData } = this;
      // const data = [
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0101",
      //     cityName: "省1市1",
      //     areaId: "010101",
      //     areaName: "省1市1区1",
      //     schoolId: "111111",
      //     schoolName: "111111"
      //   },
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0101",
      //     cityName: "省1市1",
      //     areaId: "010101",
      //     areaName: "省1市1区1",
      //     schoolId: "222222",
      //     schoolName: "222222"
      //   },
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0101",
      //     cityName: "省1市1",
      //     areaId: "010101",
      //     areaName: "省1市1区1",
      //     schoolId: "333333",
      //     schoolName: "333333"
      //   },
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0101",
      //     cityName: "省1市1",
      //     areaId: "010102",
      //     areaName: "省1市1区2",
      //     schoolId: "444444",
      //     schoolName: "444444"
      //   },
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0101",
      //     cityName: "省1市1",
      //     areaId: "010102",
      //     areaName: "省1市1区2",
      //     schoolId: "555555",
      //     schoolName: "555555"
      //   },
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0102",
      //     cityName: "省1市2",
      //     areaId: "010201",
      //     areaName: "省1市2区1",
      //     schoolId: "888888",
      //     schoolName: "888888"
      //   },
      //   {
      //     provinceId: "01",
      //     provinceName: "省-1",
      //     cityId: "0102",
      //     cityName: "省1市2",
      //     areaId: "010201",
      //     areaName: "省1市2区1",
      //     schoolId: "999999",
      //     schoolName: "999999"
      //   },
      //   {
      //     provinceId: "02",
      //     provinceName: "省-2",
      //     cityId: "0202",
      //     cityName: "省2市2",
      //     areaId: "020202",
      //     areaName: "省2市2区2",
      //     schoolId: "2121212121",
      //     schoolName: "2121212121"
      //   },
      //   {
      //     provinceId: "02",
      //     provinceName: "省-2",
      //     cityId: "0202",
      //     cityName: "省2市2",
      //     areaId: "020202",
      //     areaName: "省2市2区2",
      //     schoolId: "2222222222",
      //     schoolName: "2222222222"
      //   }
      // ];
      const data = [];
      // checkedKeys
      this.checkedKeys = data.map(item => {
        return item.schoolId;
      });
      let areaIds = data.map(item => {
        return item.areaId;
      });
      areaIds = Array.from(new Set(areaIds));
      treeData.forEach(provinceItem => {
        provinceItem.children.forEach(cityItem => {
          cityItem.children.forEach(areaItem => {
            if (areaIds.includes(areaItem.key) && !areaItem.children) {
              areaItem.children = [
                {
                  isLeaf: true,
                  key: `${areaItem.key}01`,
                  title: "111111"
                }
              ];
            }
          });
        });
      });
    },
    /**
     * 多层级数组下回显
     */
    initMulitArrayData() {
      const { selectDataList } = this;
      selectDataList.forEach(provinceItem => {
        provinceItem.children.forEach(cityItem => {
          cityItem.children.forEach(areaItem => {
            areaItem.children.forEach(schoolItem => {
              this.checkedKeys.push(schoolItem.key);
            });
            /**
             * 根据areaItem.key调用接口拼接数据
             */
          });
        });
      });
    },
    treeCheck(checkkeys, e) {
      this.checkkeys = checkkeys;
    },
    /**
     * tree 加载数据
     */
    async onLoadData(node) {
      const { treeData } = this;
      if (node.dataRef.type === "area") {
        treeData.forEach((provinceItem, provinceIndex) => {
          provinceItem.children.forEach((cityItem, cityIndex) => {
            cityItem.children.forEach(async (areaItem, areaIndex) => {
              if (node.dataRef.key === areaItem.key) {
                try {
                  const res = await this.loadData(
                    node.dataRef.key,
                    `${provinceItem.title}_${cityItem.title}_${areaItem.title}`
                  );
                  this.$set(
                    this.treeData[provinceIndex].children[cityIndex].children[
                      areaIndex
                    ],
                    "children",
                    res
                  );
                } catch (error) {
                  console.log(error);
                }
              }
            });
          });
        });
      }
    },
    /**
     * 模拟请求数据
     */
    loadData(parentKey, title) {
      return new Promise((resolve, reject) => {
        resolve([
          {
            title: `${title}测试学校1`,
            key: `${parentKey}01`,
            children: [],
            checkable: false,
            isLeaf: true,
            disableCheckbox: false
          },
          {
            title: `${title}测试学校1`,
            key: `${parentKey}02`,
            children: [],
            checkable: false,
            isLeaf: true,
            disableCheckbox: false
          }
        ]);
      });
    },
    getAllProvinceIds(provinceId) {
      let ids = [];
      const { treeData } = this;
      treeData.forEach(provinceItem => {
        if (provinceItem.key == provinceId) {
          ids.push(provinceItem.key);
          // 市
          provinceItem.children.forEach(cityItem => {
            ids.push(cityItem.key);
            cityItem.children.forEach(areaItem => {
              ids.push(areaItem.key);
              areaItem.children &&
                areaItem.children.forEach(schoolItem => {
                  ids.push(schoolItem.key);
                });
            });
          });
        }
      });
      return ids;
    },
    getAllCityIds(provinceId, cityId) {
      let ids = [];
      const { treeData } = this;
      treeData.forEach(provinceItem => {
        if (provinceItem.key == provinceId) {
          // 市
          provinceItem.children.forEach(cityItem => {
            if (cityItem.key === cityId) {
              ids.push(cityItem.key);
              cityItem.children.forEach(areaItem => {
                ids.push(areaItem.key);
                areaItem.children.forEach(schoolItem => {
                  ids.push(schoolItem.key);
                });
              });
            }
          });
        }
      });
      return ids;
    },
    getAllAeaIds(provinceId, cityId, areaId) {
      let ids = [];
      const { treeData } = this;
      treeData.forEach(provinceItem => {
        if (provinceItem.key == provinceId) {
          provinceItem.children.forEach(cityItem => {
            if (cityId == cityItem.key) {
              cityItem.children.forEach(areaItem => {
                if (areaItem.key == areaId) {
                  ids.push(areaId);
                  areaItem.children.forEach(schoolItem => {
                    ids.push(schoolItem.key);
                  });
                }
              });
            }
          });
        }
      });
      return ids;
    },
    submitSingleArray() {
      this.selectDataList = [];
      const { checkedKeys, treeData } = this;
      treeData.forEach((provinceItem, provinceIndex) => {
        provinceItem.children.forEach((cityItem, cityIndex) => {
          cityItem.children.forEach(async (areaItem, areaIndex) => {
            if (!areaItem.children) {
              try {
                const res = await this.loadData(
                  areaItem.key,
                  `${provinceItem.title}_${cityItem.title}_${areaItem.title}`
                );
                this.$set(
                  this.treeData[provinceIndex].children[cityIndex].children[
                    areaIndex
                  ],
                  "children",
                  res
                );
                res.forEach(schoolItem => {
                  this.selectDataList.push({
                    provinceId: provinceItem.key,
                    provinceName: provinceItem.title,
                    cityId: cityItem.key,
                    cityName: cityItem.title,
                    areaId: areaItem.key,
                    areaName: areaItem.title,
                    schoolId: schoolItem.key,
                    schoolName: schoolItem.title
                  });
                });
              } catch (error) {
                console.log(error);
              }
            } else {
              areaItem.children.forEach(schoolItem => {
                if (checkedKeys.includes(schoolItem.key)) {
                  this.selectDataList.push({
                    provinceId: provinceItem.key,
                    provinceName: provinceItem.title,
                    cityId: cityItem.key,
                    cityName: cityItem.title,
                    areaId: areaItem.key,
                    areaName: areaItem.title,
                    schoolId: schoolItem.key,
                    schoolName: schoolItem.title
                  });
                }
              });
            }
          });
        });
      });
      console.log(JSON.stringify(this.selectDataList));
    },

    /**
     * 提交---------------------------数据结构为多级数组
     */
    submitMulitArray() {
      const { checkedKeys, treeData } = this;
      let checkId = JSON.parse(JSON.stringify(checkedKeys));
      this.selectDataList = JSON.parse(JSON.stringify(treeData));
      this.selectDataList.forEach(provinceItem => {
        /**
         * 如果当前省被选中
         */
        if (checkId.includes(provinceItem.key)) {
          // 过滤掉当前省下所有id
          const ids = this.getAllProvinceIds(provinceItem.key);
          checkId = checkId.filter(idItem => {
            return !ids.includes(idItem);
          });
        } else {
          this.$set(provinceItem, "allSelected", false);
          // 省下面的市遍历
          provinceItem.children.forEach(cityItem => {
            /**
             * 省下面的市被选中
             */
            if (checkId.includes(cityItem.key)) {
              const ids = this.getAllCityIds(provinceItem.key, cityItem.key);
              console.log(ids);
              checkId = checkId.filter(idItem => {
                return !ids.includes(idItem);
              });
              console.log("checkId--------------", checkId);
            } else {
              /**
               * 省下面的市没有被选中
               */
              this.$set(cityItem, "allSelected", false);
              // 省下面的市没有被选中  -判断市下面的区
              cityItem.children.forEach(areaItem => {
                if (checkId.includes(areaItem.key)) {
                  const ids = this.getAllCityIds(
                    provinceItem.key,
                    cityItem.key,
                    areaItem.key
                  );
                  console.log(ids);
                  checkId = checkId.filter(idItem => {
                    return !ids.includes(idItem);
                  });
                } else {
                  this.$set(areaItem, "allSelected", false);
                  // 过滤掉没有被选中的学校
                  areaItem.children =
                    areaItem.children && areaItem.children.length > 0
                      ? areaItem.children.filter(schoolItem => {
                          return checkId.includes(schoolItem.key);
                        })
                      : [];
                  /**
                   * 如果当前区下面学校都没有被选中  删掉当前区
                   */
                  if (areaItem.children && areaItem.children.length === 0) {
                    cityItem.children = cityItem.children.filter(reduceItem => {
                      return reduceItem.key !== areaItem.key;
                    });
                    if (cityItem.children.length === 0) {
                      provinceItem.children = provinceItem.children.filter(
                        reduceItem => {
                          return reduceItem.key !== cityItem.key;
                        }
                      );
                      if (provinceItem.children.length === 0) {
                        this.selectDataList = this.selectDataList.filter(
                          reduceItem => {
                            return reduceItem.key !== provinceItem.key;
                          }
                        );
                      }
                    }
                  }
                }
              });
            }
          });
        }
      });
    }
  }
};
</script>
