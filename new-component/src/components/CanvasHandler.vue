<template>
  <div class="canvas-wrapper">
    <canvas id="mycanvas"></canvas>
  </div>
</template>
<script>
export default {
  name: "CanvasHandler",
  props: {
    startX: {
      type: Number,
      default: 0,
    },
    endX: {
      type: Number,
      default: 0,
    },
    startY: {
      type: Number,
      default: 0,
    },
    endY: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      width: 0,
      height: 105
    }
  },
  methods: {
    handleCanvasDraw() {
      let canvas = document.getElementById("mycanvas");
      let ctx = canvas.getContext('2d');
      this.drawDashLine(ctx,Number(this.startX), Number(this.startY), Number(this.endX), Number(this.endY), 4);
    },
    drawDashLine(ctx, x1, y1, x2, y2, dashLength) {
      //ctx 声明的canvas对象
      //x1,y1,x2,y2 起终点坐标
      //dashLength设置虚线中每一段的长度
      var dashLen = dashLength === undefined ? 5 : dashLength;
      let xpos = x2 - x1;//得到横向的宽度;
      let ypos = y2 - y1; //得到纵向的高度;
      let numDashes = Math.floor(Math.sqrt(xpos * xpos + ypos * ypos) / dashLen);
      //利用正切获取斜边的长度除以虚线长度，得到要分为多少段;
      console.log(ctx)
      for (var i = 0; i < numDashes; i++) {
        if (i % 2 === 0) {
          ctx.moveTo(x1 + (xpos / numDashes) * i, y1 + (ypos / numDashes) * i);
          //有了横向宽度和多少段，得出每一段是多长，起点 + 每段长度 * i = 要绘制的起点；
        } else {
          ctx.lineTo(x1 + (xpos / numDashes) * i, y1 + (ypos / numDashes) * i);
        }
      }
      ctx.stroke();
    }
  },
  mounted() {
    this.handleCanvasDraw();
    document.getElementById("mycanvas").style.cssText="width:"+ Number(this.endX - this.startX)+"px;"+"height:"+ Number(this.endY - this.startY)+"px;"
  }
}
</script>
<style scoped>
.canvas-wrapper {
}
</style>