<template>
  <div class="info">
    <div class="info-wrap text-center">
      <div style="position: relative;z-index: 1;">
        <div class="info-title"></div>
        <div class="info-container text-left">
          <div class="info-row">
            <label>姓名</label>
            <input type="text" placeholder="请输入您的姓名">
          </div>
          <div class="info-row">
            <label>性别</label>
            <div class="radio-box" style="padding-left: 1.52rem;">
              <input type="radio" name="sex" value="男">男
              <input type="radio" name="sex" value="女">女
            </div>
          </div>
          <div class="info-row">
            <label>出生日期</label>
            <input type="text" placeholder="2019-1-4（阳历）">
            <i class="icon"></i>
          </div>
          <div v-if="!hexagram" class="info-row">
            <label>出生地点</label>
            <input type="text" placeholder="北京市 朝阳区">
            <i class="icon"></i>
          </div>
          <div v-if="!hexagram" class="info-row">
            <label>手机号</label>
            <input type="text" placeholder="请输入您的手机号">
          </div>
          <div v-if="hexagram" class="info-row">
            <label>求测何事</label>
            <input type="text" placeholder="" value="年度运势">
            <i class="icon"></i>
          </div>
          <div v-if="hexagram" class="info-row">
            <label>备注</label>
            <input type="text" placeholder="例如：感情 什么时候可以结婚">
          </div>
        </div>
        <button class="info-btn" @click="poper">{{btnText||"立即测算"}}</button>
        <p class="info-tips">已有6574616位缘主测算</p>
      </div>
      <div class="downbg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  props:['hexagram', 'btnText'],
  data () {
    return {}
  },
  methods: {
    poper: function(){
      this.$emit('poperPay')
    }
  }
}
</script>

<style scoped>
  .info{
    
  }
  .info-wrap{
    width: 6.9rem;
    margin: 0 auto;
    background: url(../assets/images/顶部背景.png) no-repeat  0 0,
                url(../assets/images/顶部边框.png) no-repeat .1rem .1rem,
                url(../assets/images/底部背景.png) no-repeat left bottom;
    padding-top: .4rem;
    padding-bottom: .4rem;
    background-size: 4.54rem 3.06rem, 6.7rem .76rem,6.9rem 1.92rem;
    background-color: #FFF;
    min-height: 3.06rem;
    position: relative;
    box-shadow: 0 0  .1rem 0 rgba(0,0,0,.3);
  }
  .info .downbg{
    position: absolute;
    width: 100%;
    height: .76rem;
    bottom: .1rem;
    background: url(../assets/images/底部边框.png) no-repeat .1rem 0;
    background-size: 6.7rem .76rem;
  }
  .info-title{
    width: 3.54rem;
    height: .36rem;
    margin: 0 auto;
    background: url(../assets/images/测算信息.png) no-repeat;
    background-size: contain;
  }
  .info-container{
    padding: 0 .6rem;
    margin-top: .04rem;
  }
  .info-row{
    position: relative;
    font-size: .28rem;
    color: #957B66;
    line-height: .86rem;
  }
  .info-row input[type="text"]{
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #EAE7DB;
    padding: .3rem 0;
    padding-left: 1.52rem;
    color: #957B66;
    display: block;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    font-weight: bold;
  }
  .radio-box{
    font-size: .28rem;
    color: #E2D6C8;
    border-bottom: 1px solid #EAE7DB;
    display: flex;
    align-items: center;
  }
  .radio-box input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    margin: 0;
    margin-right: .12rem;
  }
  .radio-box input[type="radio"]{
    margin-left: 0.7rem;
  }
  .radio-box input[type="radio"]:first-child{
    margin-left: 0;
  }
  input[type="radio"]:after {
    display: block;
    content: "";
    width: .3rem;
    height: .3rem;
    background: url(../assets/images/默认.png) no-repeat;
    background-size: cover;
  }

  input[type="radio"]:checked:after {
    background: url(../assets/images/选中.png) no-repeat;
    background-size: cover;
  }
  .info-row:last-child input{
    border-bottom: 0;
  }
  .info-row input::-webkit-input-placeholder{
    font-size: .28rem;
    color: #E2D6C8;
    font-weight: normal;
  }
  .info-row label{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    line-height: .26rem;
    height: .26rem;
  }
  .info-row .icon{
    width: .14rem;
    height: .24rem;
    background: url(../assets/images/前进.png) no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto 0;
  }
  .info-btn{
    width: 6.02rem;
    height: 0.84rem;
    border: none;
    outline: none;
    display: block;
    margin: 0 auto;
    color: #fff;
    font-weight: bold;
    font-size: .28rem;
    background: url(../assets/images/按钮背景.png) no-repeat;
    background-size: cover;
  }
  .info-tips{
    font-size: .24rem;
    padding: .14rem 0;
    color: #957B66;
    -text-align: center;
  }
</style>
