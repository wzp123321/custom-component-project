<script>
/*eslint-disable*/
import ChildComp from "./child";
import { Checkbox, Row, Col, Button } from "ant-design-vue";

export default {
  components: {
    ChildComp,
    "a-checkbox": Checkbox,
    "a-row": Row,
    "a-col": Col,
    "a-checkbox-group": Checkbox.Group,
    "a-button": Button
  },
  data() {
    return {
      a: 1,
      b: {
        name: "1333212"
      },
      checkKeys: [],
      key: "",
      schoolList: [
        {
          id: "11",
          name: "测试1"
        },
        {
          id: "22",
          name: "侧式2"
        },
        {
          id: "33",
          name: "测试3"
        }
      ]
    };
  },
  methods: {
    onChange(values) {
      this.checkKeys = values;
    },
    onSort() {
      this.key = "33";
      this.schoolList = this.schoolList.map(item => {
        item.sort = item.id == this.key ? 1 : 0;
        return item;
      });
      this.schoolList = this.schoolList.sort((a, b) => {
        return b.sort - a.sort;
      });
    }
  },
  render() {
    return (
      <div>
        <a-button type="primary" onClick={this.onSort}>
          测试排序
        </a-button>
        <a-checkbox-group value={this.checkKeys} onChange={this.onChange}>
          <a-row>
            {this.schoolList.map(item => {
              return (
                <a-col class={this.key== item.id ? "highlight" : ""}>
                  <a-checkbox value={item.id}>{item.name}</a-checkbox>
                </a-col>
              );
            })}
          </a-row>
        </a-checkbox-group>
      </div>
    );
  }
};
</script>
<style lang="less" scoped>
.highlight {
  /deep/ .ant-checkbox-wrapper {
    color: #06a5ff;
  }
}
</style>
