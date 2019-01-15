<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../assets/images/banner.png"></swiper-slide>
        <swiper-slide><img src="../assets/images/banner.png"></swiper-slide>
        <swiper-slide><img src="../assets/images/banner.png"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="navitems">
      <router-link to="/calculate" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">2019年运势</div>
      </router-link>
      <router-link to="/" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">八字合婚</div>
      </router-link>
      <router-link to="/" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">手机号预测</div>
      </router-link>
      <router-link to="/" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">四柱运势</div>
      </router-link>
      <router-link to="/" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">查太岁</div>
      </router-link>
      <router-link to="/" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">四季运势</div>
      </router-link>
      <router-link to="/" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">八字桃花</div>
      </router-link>
      <router-link to="/more" class="n-item">
        <div class="ni_icon"></div>
        <div class="ni_title">更多</div>
      </router-link>
    </div>
    <div class="container-wrapper">
      <div class="cw-title"></div>
      <div class="cw-lists">
        <router-link to="/detail" class="cw-list">
          <div class="cwl-icon"></div>
          <div class="cwl-text">
            <div class="cwl-title">什么是八字？</div>
            <div class="cwl-desc">八字即生辰八字</div>
          </div>
        </router-link>
        <router-link to="/" class="cw-list">
          <div class="cwl-text">
            <div class="cwl-title">什么是喜用神？</div>
            <div class="cwl-desc">喜用神是喜神与用神的合称</div>
          </div>
          <div class="cwl-icon"></div>
        </router-link>
        <router-link to="/" class="cw-list">
          <div class="cwl-text">
            <div class="cwl-title">什么是喜用神？</div>
            <div class="cwl-desc">喜用神是喜神与用神的合称</div>
          </div>
          <div class="cwl-icon"></div>
        </router-link>
        <router-link to="/" class="cw-list">
          <div class="cwl-text">
            <div class="cwl-title">什么是喜用神？</div>
            <div class="cwl-desc">喜用神是喜神与用神的合称</div>
          </div>
          <div class="cwl-icon"></div>
        </router-link>
        <router-link to="/" class="cw-list">
          <div class="cwl-text">
            <div class="cwl-title">什么是喜用神？</div>
            <div class="cwl-desc">喜用神是喜神与用神的合称</div>
          </div>
          <div class="cwl-icon"></div>
        </router-link>
      </div>
      
    </div>
    <div class="container-wrapper">
      <div class="cw-title cw-title2"></div>
      <div class="cw-lists">
        <router-link to="/explain" class="cw-list">
          <div class="cwl-icon cwl-icon2"></div>
          <div class="cwl-text">
            <div class="cwl-title">卦象解说</div>
            <div class="cwl-desc">八卦成列，象在其中矣！</div>
          </div>
        </router-link>
        <router-link to="/" class="cw-list">
          <div class="cwl-text">
            <div class="cwl-title">热门解说</div>
            <div class="cwl-desc">认识周易之卦象</div>
          </div>
          <div class="cwl-icon cwl-icon3"></div>
        </router-link>
        <router-link to="/" class="cw-list">
          <div class="cwl-text">
            <div class="cwl-title">风水解说</div>
            <div class="cwl-desc">你自己才是最好的风水!</div>
          </div>
          <div class="cwl-icon cwl-icon4"></div>
        </router-link>
        
      </div>
    </div>
    <tabbar barindex="0"></tabbar>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  require('swiper/dist/css/swiper.css');
  import tabbar from "../components/tabbar";
  export default {
      components: {
          swiper,
          swiperSlide,
          tabbar
      },
      data() {
          return {
            swiperOption: {
                notNextTick: true,
                //循环
                loop:true,
                //自动播放
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                //滑动速度
                speed:800,
                //滑动方向
                direction : 'horizontal',
                //分页器设置         
                pagination: {
                  el: '.swiper-pagination'
                }
            }
          }
      },
      mounted() {
      }
  }
</script>

<style>
  body, html {
    width: 100%;
    height: 100%;
  }
  .home {
    padding-bottom: 1rem;
    overflow: auto;
  }
  .swiper-container {
    width: 100%;
    height: 3.6rem;
  }
  .swiper-slide {
    font-size: 0;
  }
  .swiper-slide>img {
    width: 100%;
    height: 100%;
  }
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  .navitems {
    overflow: hidden;
    padding: 0.3rem 0.3rem 0;
  }
  .n-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    float: left;
    margin-bottom: 0.4rem;
  }
  .n-item>.ni_icon {
    width: 1rem;
    height: 1rem;
    background: url("../assets/images/n_icon1.png") no-repeat;
    background-size: contain;
    margin-bottom: 0.2rem;
  }
  .navitems>.n-item:nth-child(2)>.ni_icon {
    background: url("../assets/images/n_icon2.png") no-repeat;
    background-size: contain;
  }
  .navitems>.n-item:nth-child(3)>.ni_icon {
    background: url("../assets/images/n_icon3.png") no-repeat;
    background-size: contain;
  }
  .navitems>.n-item:nth-child(4)>.ni_icon {
    background: url("../assets/images/n_icon4.png") no-repeat;
    background-size: contain;
  }
  .navitems>.n-item:nth-child(5)>.ni_icon {
    background: url("../assets/images/n_icon5.png") no-repeat;
    background-size: contain;
  }
  .navitems>.n-item:nth-child(6)>.ni_icon {
    background: url("../assets/images/n_icon6.png") no-repeat;
    background-size: contain;
  }
  .navitems>.n-item:nth-child(7)>.ni_icon {
    background: url("../assets/images/n_icon7.png") no-repeat;
    background-size: contain;
  }
  .navitems>.n-item:nth-child(8)>.ni_icon {
    background: url("../assets/images/n_icon8.png") no-repeat;
    background-size: contain;
  }
  .n-item>.ni_title {
    font-size:0.24rem;
    font-weight:bold;
    color:rgba(34,34,34,1);
  }
  .container-wrapper {
    padding: 0 0.3rem;
  }
  .container-wrapper>.cw-title {
    width: 100%;
    height: 1.6rem;
    background: url('../assets/images/title.png') no-repeat;
    background-size: contain;
  }
  .container-wrapper>.cw-title2 {
    background: url('../assets/images/title2.png') no-repeat;
    background-size: contain;
  }
  .cw-lists {
    padding: 0.1rem 0.1rem 0.2rem;
    background: url("../assets/images/bg1.png") no-repeat 0 bottom;
    background-size: contain;
    background-color: #FEFCF4;
    border:1px solid rgba(221,221,221,1);
    border-radius:0.1;
    border-top: none;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 0.3rem;
  }
  .cw-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 1.04rem;
    background: url("../assets/images/border2.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-left: 0.4rem;
    padding-right: 0.2rem;
    float: left;
    margin-bottom: 0.1rem;
  }
  .cw-lists>.cw-list:nth-child(1) {
    width: 2.55rem;
    height: 2.2rem;
    background:url("../assets/images/border3.png") no-repeat;
    background-size: contain;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin-right: 0.08rem;
  }
  .cw-lists>.cw-list:nth-child(1)>.cwl-text {
    text-align: center;
  }
  .cw-lists>.cw-list:nth-child(1)>.cwl-icon {
    background: url("../assets/images/cwl-icon4.png") no-repeat;
    background-size: contain;
  }
  .cw-lists>.cw-list:nth-child(2), .cw-lists>.cw-list:nth-child(3) {
    width: 4.03rem;
    background:url("../assets/images/border.png") no-repeat;
    background-size: contain;
  }
  .cw-lists>.cw-list:nth-child(2)>.cwl-icon {
    background: url("../assets/images/cwl-icon3.png") no-repeat;
    background-size: contain;
  }
  .cw-list>.cwl-text {
    font-size:0.18rem;
    color:rgba(153,153,153,1);
    
  }
  .cw-list>.cwl-text>.cwl-title {
    font-size: 0.28rem;
    color:rgba(34,34,34,1);
    margin-bottom: 0.16rem;
  }
  .cw-list>.cwl-icon {
    width: 1rem;
    height: 1rem;
    background: url("../assets/images/cwl-icon.png") no-repeat;
    background-size: contain;
  }
  .cw-list>.cwl-icon2 {
    background: url("../assets/images/cwl-icon2.png") no-repeat;
    background-size: contain;
  }
  .cw-lists>.cw-list:nth-child(2)>.cwl-icon3 {
    background: url("../assets/images/cwl-icon5.png") no-repeat;
    background-size: contain;
  }
  .cw-list>.cwl-icon4 {
    background: url("../assets/images/cwl-icon6.png") no-repeat;
    background-size: contain;
  }
</style>
