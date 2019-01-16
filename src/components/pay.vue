<template>
  <div class="pay">
    <div class="pay-main">
      <div class="close" @click="closePoper"></div>
      <div class="price">
        <p class="now">
          <label class="label">RMB</label>
          <span class="num">9.90</span>
        </p>
        <p>
          <label class="label">原价：</label>
          <s>128.00</s>
        </p>
      </div>
      <div class="body">
        <div class="row img"></div>
        <div class="row text-center">
          <p>支付系统已获得国家信息三级等保认证</p>
          <p>请放心付款</p>
          <p style="color: #222222;">付款成功后自动跳转至测算结果页面</p>
        </div>
        <div class="row">
          <button class="btn">确认并支付</button>
        </div>
      </div>
    </div>
    <div class="pay-foot"></div>
  </div>
</template>

<script>
export default {
  name: 'popay',
  data(){
    return {}
  },
  methods: {
    closePoper: function(){
      this.$emit('closePay')
    }
  }
}
</script>

<style scoped>
  .pay{
    width: 7.1rem;
    height: calc( 100vh - 1.6rem );
    position: fixed;
    top: 1.2rem;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, .9);
    box-shadow: 0 0 .2rem 0 rgba(0,0,0,.1);
    z-index: 1000;
  }
  .pay-main{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 6.48rem;
    height: 7.08rem;
    background: url(../assets/images/支付弹窗.png) no-repeat;
    background-size: cover;
  }
  .pay-main .close{
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    top: .24rem;
    right: 0.24rem;
    background: url(../assets/images/关闭.png) no-repeat;
    background-size: cover;
  }
  .pay-main .price{
    line-height: .48rem;
    font-size: .24rem;
    color: #999;
    position: absolute;
    left: .74rem;
    top: 1rem;
  }
  .pay-main .lable{
    width: .74rem;
  }
  .pay-main .now{
    color: #D4B083;
    margin-bottom: -.1rem
  }
  .pay-main .now .num{
    font-size: .54rem;
  }
  .pay-main .body{
    width: 3.76rem;
    position: absolute;
    top: 3.02rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .pay-main .body .row{
    margin-bottom: .48rem;
    color: #666;
  }
  .pay-main .body .row p{
    margin-bottom: .22rem;
    font-size: .22rem;
  }
  .pay-main .body .img{
    height: 0.46rem;
    background: url(../assets/images/行业认证.png) no-repeat;
    background-size: cover;
  }
  .pay-main .body .row .btn{
    width: 3rem;
    height: .68rem;
    border-radius: .34rem;
    line-height: .68rem;
    font-size: .28rem;
    color: #fff;
    background-color: #EAC381;
    display: block;
    margin: 0 auto;
  }
  .pay-foot{
    width: 2.8rem;
    height: 0.46rem;
    background: url(../assets/images/页脚认证.png) no-repeat;
    background-size: cover;
    position: absolute;
    bottom: .2rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
