<template>
  <div class="my">
      <div class="my-header">
          <div class="usermsg">
              <div class="userimg"><img src="../assets/images/userimg.png"></div>
              <div class="username">李半仙儿</div>
          </div>
          <div class="my-bottom">
              <router-link to="/" class="mb-item">
                  <div class="icontext">
                        <div class="icon"></div>
                        <div class="text">个人资料</div>
                    </div>
              </router-link>
              <router-link to="/" class="mb-item">
                  <div class="icontext">
                        <div class="icon my-icon2"></div>
                        <div class="text">我的订单</div>
                    </div>
              </router-link>
          </div>
      </div>
      <div class="my-lists">
          <router-link to="/" class="my-list">
            <div class="icontext">
                <div class="icon my-icon3"></div>
                <div class="text">联系客服</div>
            </div>
            <div class="go_icon"></div>
          </router-link>
          <router-link to="/" class="my-list">
            <div class="icontext">
                <div class="icon my-icon4"></div>
                <div class="text">意见反馈</div>
            </div>
            <div class="go_icon"></div>
          </router-link>
          <router-link to="/" class="my-list">
            <div class="icontext">
                <div class="icon my-icon5"></div>
                <div class="text">关于我们</div>
            </div>
            <div class="go_icon"></div>
          </router-link>
      </div>
    <tabbar barindex="1"></tabbar>
  </div>
</template>

<script>
  import tabbar from "../components/tabbar";
  export default {
      components: {
          tabbar
      },
      data() {
          return {

          }
      }
  }
</script>

<style>
    body, html, .my {
        width: 100%;
        height: 100%;
    }
    #app {
        height: 100%;
    }
    .my {
        box-sizing: border-box;
        padding-bottom: 1rem;
        background: url('../assets/images/bg@2x.png') no-repeat 0 0;
        background-size: 7.5rem 3rem;
        background-color: #FEFCF4;
        padding: 0.3rem;
    }
    .my-header {
        height:3rem;
        background:rgba(255,255,255,0.95);
        box-shadow:0px 0.05rem 0.3rem 0px rgba(0, 0, 0, 0.1);
        border-radius:0.1rem;
        margin-top: 0.78rem;
        
    }
    .usermsg {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.6rem 0.42rem;
    }
    .usermsg>.userimg {
        width: 1rem;
        height: 1rem;
        font-size: 0;
        margin-right: 0.3rem;
    }
    .usermsg>.userimg>img {
        width: 100%;
        height: 100%;
    }
    .usermsg>.username {
        font-size:0.34rem;
        color:rgba(0,0,0,1);
    } 
    .my-bottom {
        display: flex;
        padding: 0.34rem 0;
    }
    .my-bottom>.mb-item {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 0.4rem;
        width: 50%;
        box-sizing: border-box;
    }
    .my-bottom>.mb-item:nth-child(1) {
        border-right: 1px solid #C4A269;
    }
    .icontext {
        display: flex;
        align-items: center;
    }
    .icontext>.icon {
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.15rem;
        background: url('../assets/images/my-icon1.png') no-repeat;
        background-size: contain;
    }
    .icontext>.text {
        font-size:0.28rem;
        color:rgba(164,136,115,1);
    }
    .icontext>.my-icon2 {
        background: url('../assets/images/my-icon2.png') no-repeat;
        background-size: contain;
    }
    .icontext>.my-icon3 {
        background: url('../assets/images/my-icon3.png') no-repeat;
        background-size: contain;
    }
    .icontext>.my-icon4 {
        background: url('../assets/images/my-icon4.png') no-repeat;
        background-size: contain;
    }
    .icontext>.my-icon5 {
        background: url('../assets/images/my-icon5.png') no-repeat;
        background-size: contain;
    }
    .my-lists {
        background:rgba(255,255,255,0.95);
        box-shadow:0px 0.05rem 0.3rem 0px rgba(0, 0, 0, 0.1);
        border-radius:0.1rem;
        margin-top: 0.2rem;
        padding: 0 0.3rem;
    }
    .my-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0;
        border-bottom: 1px solid #ECE6E1;
    }
    .my-lists>.my-list:last-child {
        border-bottom: none;
    }
    .my-list>.go_icon {
        width:0.14rem;
        height:0.24rem;
        background: url('../assets/images/go.png') no-repeat;
        background-size: contain;
    }
</style>
