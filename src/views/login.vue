<template>
    <div class="login">
      <!--title-->
      <div class="title">
        <div class="title-text">登录</div>
        <div class="t_top">
          <a href="javascript:history.go(-1);" class="icon_back"></a>
          <a href="#" class="register_btn">注册</a>
        </div>
      </div>
      <!--title-->
      <div class="login_banner">
        <img src="../assets/images/registerbanner.png" alt="">
      </div>
      <div class="login_form">
        <div class="login_tab">
          <div class="form_title">
            <a @click="tabForm(i)" v-for="(item,i) in tab" :key="i" v-bind:class="{ active: i==formShow }"><span>{{item}}</span></a>
          </div>
          <div class="form_content">
            <form action="" v-if="formShow==0">
              <div class="phone_icon">
                <input type="text" class="phone"  v-model="phone" placeholder="请输入手机号码">
                <i class="qc_icon" @click="qcPhone"></i>
              </div>
              <input type="text" class="yzm" placeholder="请输入验证码">
              <a href="javascript:;">获取验证码</a>
              <input type="submit" class="login_btn" value="登录"/>>
            </form>
            <form action="" v-if="formShow==1">
              <div class="phone_icon">
                <input type="text" class="phone" v-model="phone" placeholder="请输入手机号码">
                <i class="qc_icon" @click="qcPhone"></i>
              </div>
              <input type="password" class="password" placeholder="请输入密码">
              <input type="submit" class="login_btn" value="登录" />
            </form>
          </div>
        </div>
        <div class="form_bottom">
          <a href="#" class="forget">忘记密码？</a>
        </div>
      </div>
      <div class="login_other">
        <h4><span>其他登录方式</span></h4>
        <ul>
          <li><a href="#"><img src="../assets/images/QQ.png" alt="QQ"><span>QQ</span></a></li>
          <li><a href="#"><img src="../assets/images/微信.png" alt="微信"><span>微信</span></a></li>
          <li><a href="#"><img src="../assets/images/微博.png" alt="微博"><span>微博</span></a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    import titleWrapper from '../components/title';
    export default {
      components: {
        titleWrapper
      },
      data(){
        return{
          tab:['快捷登录','账号登录'],
          formShow:0,
          phone:''
        }
      },
      methods:{
        tabForm(index){
          this.$data.formShow=index;
        },
        qcPhone(){
          this.$data.phone='';
        }
      }

    }
</script>

<style scoped>
  /*title*/
  .title {
    width: 100%;
    height:0.88rem;
    background:rgba(255,255,255,1);
    padding: 0 0.2rem;
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #EAE7DB;
    z-index: 1001;
  }
  .title-text {
    font-size:0.34rem;
    color:rgba(0,0,0,1);
    text-align: center;
    line-height: 0.88rem
  }
  .t_top {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;

  }
  .icon_back {
    width: 0.4rem;
    height: 0.4rem;
    background: url('../assets/images/back.png') no-repeat;
    background-size: contain;
  }
  .register_btn{
    color: #957B66;
    position: absolute;
    top: 0;
    right: 0.2rem;
    padding: 0.3rem 0;
  }
  /*title*/
  .login {
    width: 100%;
    padding-top: 0.88rem;
    padding-bottom: 1.4rem;
    font-size: 0.28rem;
    background-color: #FEFCF4;
  }
  .login *{
    box-sizing: border-box;
  }
  .login_banner img{
    width: 100%;
  }
  .login_form{
    position: absolute;
    top: 2.88rem;
    left: 0;
    width: 100%;
    padding: 0 0.3rem;
  }
  .login_tab{
    box-shadow: 0 0 0.3rem 0 rgba(0,0,0,.1);
  }
  .form_title{
    background: rgba(255,255,255,0.95) url(/static/images/顶部边框.png) no-repeat 0.1rem 0.1rem ;
    background-size: calc(100% - 0.2rem) auto;
    font-size: 0;
  }
  .form_title a{
    font-size: 0.28rem;
    display: inline-block;
    width: 50%;
    text-align: center;
    position: relative;
  }
  .form_title a:first-child:after{
    content: '';
    height: 0.4rem;
    width:0.02rem;
    background: #C4A269;
    position: absolute;
    top: 0.42rem;
    right: 0;
  }
  .form_title a span{
    display: inline-block;
    padding: 0.5rem 0 0.26rem;
    color: #BFB0A4;
  }
  .form_title a.active span{
    color: #957B66;
    border-bottom: 0.06rem solid #957B66;
  }
  .form_content{
    background: rgba(255,255,255,0.95) url(/static/images/底部边框.png) no-repeat left 0.1rem bottom 0.1rem;
    background-size: calc(100% - 0.2rem) auto;
    padding: 0.26rem 0.46rem 0.56rem;
  }
  .form_content input{
    display: inline-block;
    width: 100%;
    height: 0.8rem;
    padding: 0 0.81rem;
    border: 1px solid #EAE3DF;
    vertical-align: top;
  }
  .form_content .phone{
    margin-bottom: 0.2rem;
    background: url("../assets/images/手机.png") no-repeat 0.4rem 0.26rem;
  }
  .form_content .phone_icon{
    position: relative;
  }
  .form_content .qc_icon{
    content: '';
    position: absolute;
    right: 0.26rem;
    top: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: url("../assets/images/清除.png") no-repeat;
  }
  .form_content .phone:after{
    content: '';
    position: absolute;
    right: 0.26rem;
    top: 0.3rem;
    width: 0.3rem;
    height: 0.3rem;
    background: url("../assets/images/清除.png") no-repeat;
  }
  .form_content .yzm{
    width: 66%;
    background: url("../assets/images/验证码.png") no-repeat 0.36rem 0.26rem;
  }
  .form_content .password{
    background: url("../assets/images/密码.png") no-repeat 0.36rem 0.28rem;
  }
  .form_content a{
    float: right;
    vertical-align: top;
    display: inline-block;
    width: 30%;
    height: 0.8rem;
    background-color: #F7DCAD;
    color: #ffffff;
    line-height: 0.8rem;
    text-align: center;
  }
  .form_bottom{
    padding-top: 0.3rem;
    text-align: right;
  }
  .form_bottom .forget{
    font-size: 0.24rem;
    color: #957B66;
  }
  .form_content .login_btn{
    border: none;
    letter-spacing: 3px;
    width: 6.02rem;
    height: 0.84rem;
    border: none;
    outline: none;
    display: block;
    margin: 0.32rem auto 0;
    color: #fff;
    font-weight: bold;
    font-size: .28rem;
    background: url(/static/images/按钮背景.png) no-repeat;
    background-size: cover;
  }
  .login_other{
    margin-top: 5.86rem;
    text-align: center;
    padding: 0 0.84rem;
  }
  .login_other h4{
    font-size: 0.24rem;
    border-top: 1px solid #EAE3DF;
    width: 100%;
    position: relative;
    color: #BFB0A4;
  }
  .login_other h4 span{
    position: absolute;
    top: -0.12rem;
    left: 50%;
    width: 1.82rem;
    margin-left: -0.91rem;
    background-color: #ffffff;
  }
  .login_other ul{
    margin-top: 0.76rem;
  }
  .login_other ul li{
    display: inline-block;
    margin-right: 1.01rem;
  }
  .login_other ul li:last-child{
    margin-right:0;
  }
  .login_other ul li a,
  .login_other ul li img,
  .login_other ul li span{
    display: block;
    font-size: 0.24rem;
  }
  .login_other ul li span{
    padding-top: 0.12rem;
  }

</style>
