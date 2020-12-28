<template>
  <div class="video-player flex-row-start-center">
    <div class="video-player-stream">
      <video-player
        class="player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
      ></video-player>
      <!-- 弹幕 -->
      <vue-baberrage
        :isShow="barrageIsShow"
        :barrageList="barrageList"
        :loop="barrageLoop"
      >
      </vue-baberrage>
    </div>
    <div class="chat-wrapper">
      <el-button @click="addToList">111</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { MESSAGE_TYPE } from "vue-baberrage";
interface ChatInfo {
  id: number;
  avatar: string;
  msg: string;
  time: number;
  type: number;
}
@Component({
  name: "VideoPlayerComp",
  components: {},
})
export default class VideoPlayerComp extends Vue {
  // 配置
  private playerOptions = {
    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
    autoplay: true, //如果true,浏览器准备好时开始回放。
    muted: false, // 默认情况下将会消除任何音频。
    loop: false, // 导致视频一结束就重新开始。
    preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
    language: "zh-CN",
    aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
    sources: [
      {
        withCredentials: false,
        type: "application/x-mpegURL", //播放类型，如果为rtmp配置为rtmp/mp4
        src: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8", //直播流地址
      },
    ],
    poster: "poster.jpg", //你的封面地址
    width: document.documentElement.clientWidth,
    notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: false,
      fullscreenToggle: true, //全屏按钮
    },
  };
  private barrageIsShow = false;
  private barrageList: ChatInfo[] = [];
  private barrageLoop = false;
  /**
   * 播放
   */
  onPlayerPlay(e: any) {
    console.log(e);
  }
  /**
   * 暂停
   */
  onPlayerPause(e: any) {
    console.log(e);
  }

  addToList() {
    const id = 0;
    this.barrageIsShow = true;
    this.barrageList.push({
      id,
      avatar: "",
      msg: "123123123",
      time: 5,
      type: MESSAGE_TYPE.NORMAL,
    });
  }
}
</script>

<style lang="less" scoped>
.video-player {
  height: auto;
  &-stream {
    width: 80%;
    position: relative;
    .player {
      width: 100%;
    }
    .baberrage-stage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
