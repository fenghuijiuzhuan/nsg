<template>
  <div class="panel-card">
    <div class="title" :style="{'background-image': 'url('+panel.title+')'}"></div>
    <div v-if="panel.child=='component'" class="body">
      <div class="downbd"></div>
      <slot name="comment"></slot>
    </div>
    <div v-else-if="panel.child">
      <div v-for="(item,index) in panel.child" :key="index" class="body" :style="{'margin-top': index==0?0:'.2rem'}">
        <div class="downbd"></div>
        <div class="ctitle" :style="{'background-image': 'url('+item.title+')'}"></div>
        <div class="text" v-html="item.text1"></div>
        <div class="ibox">
          <img v-for="(_item) in item.img" :key="_item" :src="_item" alt="">
        </div>
        <div class="text" v-html="item.text2||'我们的工作人员会将照片发送给您'"></div>
        <button class="common-btn" style="margin-top: .12rem;">立即压太岁</button>
        <p class="common-btn-tips">已有6574616位缘主测算</p>
      </div>
    </div>
    <div v-else class="body">
      <div class="downbd"></div>
      <div class="text" v-html="panel.text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["panel"]
}
</script>

<style>
  .panel-card, .panel-card *{
    box-sizing: border-box;
  }
  .panel-card{
    width: 6.9rem;
    margin: 0 auto;
  }
  .panel-card .title{
    height: .36rem;
    margin-top: .54rem;
    margin-bottom: .16rem;
    background-size: contain;
    background: no-repeat center;
  }
  .panel-card .text{
    line-height: .48rem;
    font-size: .24rem;
    color: #A48873;
  }
  .panel-card .ctitle{
    height: .6rem;
    background-size: contain;
    background: no-repeat center;
    margin: .12rem 0;
  }
  .panel-card .ibox{
    display: flex;
    justify-content: space-between;
  }
  .panel-card .ibox img{
    width: 3rem;
    height: 3rem;
    margin: .2rem 0;
  }
  .panel-card .body{
    min-height: 2rem;
    background: url(../assets/images/顶部背景.png) no-repeat  0 0,
                url(../assets/images/顶部边框.png) no-repeat .1rem .1rem,
                url(../assets/images/底部背景.png) no-repeat left bottom;
    background-size: 4.54rem 3.06rem, 6.7rem .76rem,6.9rem 1.92rem;
    background-color: #FFFFFF;
    padding: .28rem .36rem .32rem;
    position: relative;
    box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);    
  }
  .panel-card.nobtmbg .body{
    background: url(../assets/images/顶部背景.png) no-repeat  0 0,
                url(../assets/images/顶部边框.png) no-repeat .1rem .1rem;
    background-color: #FFFFFF;
    background-size: 4.54rem 3.06rem, 6.7rem .76rem;
  }
  .panel-card .body .downbd{
    position: absolute;
    width: 100%;
    height: .76rem;
    bottom: .1rem;
    left: 0;
    background: url(../assets/images/底部边框.png) no-repeat .1rem 0;
    background-size: 6.7rem .76rem;
  }
</style>