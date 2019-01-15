<template>
    <div class="explain">
        <title-wrapper titleText="辛泉说易"></title-wrapper>
        <div class="video-wrapper">
            <video class="video" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls">
                your browser does not support the video tag
            </video>
            <div class="video-data">
                <div class="v-title">如何在处世之中提升自己的财运、官运、贵人运</div>
                <div class="v-msg">
                    <div class="vm-data">
                        <div class="vm-icon"></div>
                        <div class="vm-text">65412次播放</div>
                    </div>
                    <div class="vm-data">
                        <div class="vm-icon sahre"></div>
                        <div class="vm-text">分享</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="more-video">
            <div class="mv-title">更多精彩</div>
            <div class="othervideo-wrapper">
                <div class="other-video">
                    <div class="ov_img">
                        <img src="../assets/images/viedo2.png">
                        <div class="time">30:00</div>
                    </div>
                    <div class="ov-data">
                        <div class="ov-title">辛泉说易</div>
                        <div class="ov-desc">岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君,即流。</div>
                    </div>
                </div>
                <div class="other-video">
                    <div class="ov_img">
                        <img src="../assets/images/viedo2.png">
                        <div class="time">30:00</div>
                    </div>
                    <div class="ov-data">
                        <div class="ov-title">辛泉说易</div>
                        <div class="ov-desc">岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君,即流。</div>
                    </div>
                </div>
                <div class="other-video">
                    <div class="ov_img">
                        <img src="../assets/images/viedo2.png">
                        <div class="time">30:00</div>
                    </div>
                    <div class="ov-data">
                        <div class="ov-title">辛泉说易</div>
                        <div class="ov-desc">岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君,即流。</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import titleWrapper from "../components/title.vue";
export default {
    components: {
        titleWrapper
    }
}
</script>

<style>
 body, html, #app {
     height: 100%;
 }
 .line {
     height: 0.2rem;
     background: #eee;
 }
 .explain {
     min-height: 100%;
     box-sizing: border-box;
     padding-top: 0.88rem;
     font-size: 0;
 }
 .video-wrapper {
     background: #fff;
 }
 .video {
     width: 100%;
     height: 4rem;
 }
 .video-data {
     padding: 0.3rem;
 }
 .v-title {
     font-size:0.34rem;
    font-weight:bold;
    color:rgba(34,34,34,1);
    line-height:0.68rem;
    margin-bottom: 0.1rem;
 }
 .v-msg {
     justify-content: space-between;
 }
 .v-msg, .vm-data {
     display: flex;
     align-items: center;
 }
 .vm-data>.vm-icon {
     width: 0.3rem;
     height: 0.3rem;
     background: url('../assets/images/play.png') no-repeat;
     background-size: contain;
     margin-right: 0.2rem;
 }
 .vm-data>.sahre {
     background: url('../assets/images/share.png') no-repeat;
     background-size: contain;
 }
  .vm-data>.vm-text {
    font-size:0.24rem;
    color:rgba(102,102,102,1);
  }
  .more-video {
      padding: 0.3rem;
      background: #fff;
  }
  .mv-title {
    font-size:0.34rem;
    font-weight:bold;
    color:rgba(34,34,34,1);
    margin-bottom: 0.3rem;
  }
    .other-video {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.3rem;

    }
    .othervideo-wrapper>.other-video:last-child {
      margin-bottom: 0;
    }
    .ov_img {
        width: 2.25rem;
        height: 1.2rem;
        position: relative;
        margin-right: 0.2rem;
    }
    .ov_img>img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .time {
        font-size:0.18rem;
        color:rgba(255,255,255,1);
        position: absolute;
        bottom: 0.1rem;
        right: 0.1rem;
        z-index: 2;
    }
    .ov-data {
        flex: 1;
    }
    .ov-title {
        font-size:0.28rem;
        font-weight:bold;
        color:rgba(34,34,34,1);
        line-height:0.28rem;
        padding: 0.08rem 0;
    }
    .ov-desc {
        font-size:0.22rem;
        color:rgba(153,153,153,1);
        line-height:0.36rem;
    }
</style>


