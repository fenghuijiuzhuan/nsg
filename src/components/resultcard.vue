<template>
  <div class="resultcard">
    <div class="leftbox">
      <div class="key" v-for="(item,index) in keyword" :key="index"><img :src="item" alt="乾"></div>
    </div>
    <div class="rightbox">
      <p>姓名：<span class="name">aaaa</span>性别：<span>a</span></p>
      <p>公历：1984年10月23日未知时辰</p>
      <p>农历：甲子年九月廿九未知时辰</p>
      <p>四柱：甲子 甲子 甲子 甲子</p>
      <p style="padding-left: 2.4rem;"><span class="gFF1F1A">午</span><span class="gD49303">未</span>(空亡)</p>
      <p>时辰：<span class="gFF1F1A">午时</span>（12:00）</p>
    </div>
  </div>
</template>                  
<script>
export default {
  name: "ResultCard",
  props: ["keyword"],
  data(){
    return {

    }
  }
}
</script>

<style scoped>
  .resultcard,.resultcard *{box-sizing: border-box;}
  .resultcard{
    width: 6.9rem;
    height: 3.1rem;
    margin: .3rem auto;
    background: url(../assets/images/个人信息bg.png) no-repeat;
    background-size: cover;
    box-shadow: 0 0 .3rem 0 rgba(0,0,0,.1);
    padding: 0 .1rem;
    position: relative;
    z-index: 1;
  }
  .resultcard .leftbox{
    width: 2rem;
    margin-top: .56rem;
    margin-right: .3rem;
    display: inline-block;
    vertical-align: top;
  }
  .resultcard .leftbox .key{
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -.64rem;
  }
  .resultcard .leftbox .key img{
    width: 1rem;
    height: 1rem;
  }
  .resultcard .rightbox{
    margin-top: .36rem;
    display: inline-block;
    vertical-align: top;
    line-height: .4rem;
    color: #A48873;
    font-size: .24rem;
  }
  .resultcard .rightbox .name{
    display: inline-block;
    vertical-align: top;
    width: 1rem;
  }
</style>