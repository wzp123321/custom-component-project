<template>
  <div>
    <draggable v-model="myArray">
      <div v-for="element in myArray" :key="element" class="element">
        {{element}}
        <span>
          <Icon type="close-circle" />
        </span>
      </div>
    </draggable>
    <div>
      <span
        v-for="(item,index) in titles"
        :key="'span_'+index"
        style="padding:0 10px"
        @click="handleUpOrDown(index)"
      >{{item.title}}</span>
      <div
        v-for="(item,idx) in titles"
        :key="idx"
        style="height:300px;border:1px solid #eee"
        class="selector"
      >{{item.title}}</div>
    </div>
  </div>
</template>
<script>
import { Icon } from "ant-design-vue"
import draggable from 'vuedraggable'
export default {
  name: "DraggableHandler",
  components: {
    draggable,
    Icon
  },
  data() {
    return {
      myArray: ['121212', '1eeee', '423423'],
      titles: [
        {
          id: 1,
          title: "1111"
        },
        {
          id: 2,
          title: "22222"
        },
        {
          id: 3,
          title: "3333"
        },
        {
          id: 4,
          title: "44444"
        },
        {
          id: 5,
          title: "5555"
        },
      ]
    }
  },
  methods: {
    /**
     * 点击判断点击的id模块距离上端的高度跟他滚轮滚动的距离 判断上滚还是下滚 offSet   
     */
    handleUpOrDown(index) {
      const selectors = document.getElementsByClassName("selector");
      
      console.log(index)
    }
  }
}
</script>
<style scoped>
.element {
  padding: 5px 10px;
  border: 1px solid #eee;
}
</style>