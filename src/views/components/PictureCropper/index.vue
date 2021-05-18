<template>
  <div class="picture-copper flex flex-column">
    <div class="picture-copper-uploader">
      <input type="file" @change="onFileChange" />
      <label for="file">文件上传</label>
    </div>
    <div class="flex">
      <div class="cropper-wrapper">
        <VueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.outputSize"
          :outputType="option.outputType"
          :info="option.info"
          :canScale="option.canScale"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixed="option.fixed"
          :full="option.full"
          :fixedBox="option.fixedBox"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :centerBox="option.centerBox"
          :height="option.height"
          :infoTrue="option.infoTrue"
          :maxImgSize="option.maxImgSize"
          :enlarge="option.enlarge"
          :mode="option.mode"
          @realTime="realTime"
          @imgLoad="imgLoad"
        ></VueCropper>
      </div>
      <div class="preview-img flex-row-center-center ">
        <img :src="previewUrl" alt="" />
      </div>
    </div>
    <div class="button-wrapper flex">
      <el-button type="success" @click="leftRotate">左旋转</el-button>
      <el-button type="warning" @click="rightRotate">右旋转</el-button>
      <el-button type="primary" @click="onSubmit">确认</el-button>
    </div>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
export default {
  components: {
    VueCropper,
  },
  data() {
    return {
      previewUrl: "", // 预览地址
      option: {
        // 图片地址
        img:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1925942403,998935781&fm=26&gp=0.jpg",
        // 裁剪图片的地址 0.1-1
        outputSize: 1,
        // 裁剪生成的图片格式 （jpeg | png | webp）
        outputType: "png",
        // 图片大小信息
        info: true,
        // 图片是否允许滚轮缩放
        canScale: true,
        // 是否默认生成截图框
        autoCrop: true,
        //默认生成截图框宽度
        autoCropWidth: 230,
        //默认生成截图框高度
        autoCropHeight: 150,
        //是否开启截图框宽高固定比例
        fixed: true,
        //截图框的宽高比例
        // fixedNumber: [1.53, 1],
        //false按原比例裁切图片，不失真
        full: false,
        //固定截图框大小，不允许改变
        fixedBox: false,
        //上传图片是否可以移动
        canMove: false,
        //截图框能否拖动
        canMoveBox: true,
        //上传图片按照原始比例渲染
        original: false,
        //截图框是否被限制在图片里面
        centerBox: false,
        //是否按照设备的dpr 输出等比例图片
        height: true,
        //true为展示真实输出图片宽高，false展示看到的截图框宽高
        infoTrue: false,
        //限制图片最大宽度和高度
        maxImgSize: 3000,
        //图片根据截图框输出比例倍数
        enlarge: 1,
        //图片默认渲染方式
        mode: "60% 60%",
      },
    };
  },
  computed: {
    cropper() {
      return this.$refs.cropper;
    },
  },
  methods: {
    // 图片选择
    onFileChange(e) {
      const fileReader = new FileReader();
      console.log(e.target.files[0]);
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        this.option.img = fileReader.result;
      };
    },
    // 图片加载完成
    imgLoad(msg) {
      console.log("初始化成功" + msg);
    },
    // 实时预览
    realTime(data) {
      console.log(data);
      this.previewUrl = data.url;
    },
    // 左旋转
    leftRotate() {
      this.cropper.rotateLeft();
    },
    // 左旋转
    rightRotate() {
      this.cropper.rotateRight();
    },
    fileOrBlobToDataURL(obj, cb) {
      const a = new FileReader();
      a.readAsDataURL(obj);
      a.onload = function(e) {
        cb(e.target.result);
      };
    },
    // 左旋转
    onSubmit() {
      this.$refs.cropper.getCropBlob((data) => {
        this.fileOrBlobToDataURL(data, (url) => {
          const img = new Image();
          img.src = url;
          this.option.img = url;
          this.previewUrl = url;
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.picture-copper {
  padding: 60px;
  height: 100%;
  &-uploader {
    cursor: pointer;
    width: 140px;
    height: 48px;
    line-height: 48px;
    background-color: tomato;
    text-align: center;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    input {
      width: 140px;
      height: 48px;
      position: absolute;
      opacity: 0;
    }
    label {
      cursor: pointer;
    }
  }
  > div:nth-child(2) {
    flex: 1;
    margin-top: 23px;
    .cropper-wrapper {
      width: 100%;
    }
    .preview-img {
      flex: 1;
      min-width: 480px;
      padding: 0 48px;
      img {
        height: auto;
        min-width: 240px;
        min-height: 240px;
      }
    }
  }
  .button-wrapper {
    height: 64px;
    padding: 24px 0;
  }
}
</style>
