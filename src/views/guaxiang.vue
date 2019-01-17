<template>
  <div class="guaxiang">
    <title-wrapper titleText="卦象"></title-wrapper>
    <ResultCard :keyword="keyword"></ResultCard>
    <div class="gx_content">
      <div class="fortune">
        <div class="fortune_bg"></div>
        <div class="title"></div>
        <div class="fortune_list gx-front">
          <ul class="gx-list">
            <li class="gx-item">
              <div class="gx-t">
                <p class="sname"></p>
                <div class="bname">主卦<img src="../assets/images/front_img/下.png" alt=""></div>
              </div>
              <div class="gx-m">
                <div class="front">
                  <div class="ib">
                    <div class="lt">
                      <p class="gD49303">体</p>
                    </div>
                    <img class="cg" src="../assets/images/front_img/坤.png" alt="">
                    <div class="rt">
                      <p class="g00E19C">乙癸</p>
                      <p class="g00E19C">甲未</p>
                      <p class="gA48873">空</p>
                    </div>
                  </div>
                  <div class="ib">
                    <div class="lt">
                      <p class="gD49303"></p>
                    </div>
                    <img class="cg" src="../assets/images/front_img/乾.png" alt="">
                    <div class="rt">
                      <p class="g00E19C">甲壬</p>
                      <p class="gD49303">戌亥</p>
                      <p class="gA48873"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gx-b">
                <p>地天泰</p>
                <p>伤官</p>
              </div>
            </li>
            <li class="gx-item">
              <div class="gx-t">
                <p class="sname">正宫</p>
                <div class="bname">互卦<img src="../assets/images/front_img/上.png" alt=""></div>
              </div>
              <div class="gx-m">
                <div class="front">
                  <div class="ib">
                    <div class="lt">
                      <p class="gD49303"></p>
                    </div>
                    <img class="cg" src="../assets/images/front_img/震.png" alt="">
                    <div class="rt">
                      <p class="gECD475">庚</p>
                      <p class="g00E19C">卯</p>
                      <p class="gA48873">生</p>
                    </div>
                  </div>
                  <div class="ib">
                    <div class="lt">
                      <p class="gD49303"></p>
                    </div>
                    <img class="cg" src="../assets/images/front_img/兑.png" alt="">
                    <div class="rt">
                      <p class="gFF213B">丁</p>
                      <p class="gECD475">酉</p>
                      <p class="gA48873"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gx-b">
                <p>雷泽归妹</p>
                <p>食神</p>
              </div>
            </li>
            <li class="gx-item">
              <div class="gx-t">
                <p class="sname">比肩</p>
                <div class="bname">变卦<img src="../assets/images/front_img/上.png" alt=""></div>
              </div>
              <div class="gx-m">
                <div class="front">
                  <div class="ib">
                    <div class="lt">
                      <p class="gD49303"></p>
                    </div>
                    <img class="cg" src="../assets/images/front_img/坤.png" alt="">
                    <div class="rt">
                      <p class="g00E19C">乙癸</p>
                      <p class="g00E19C">甲未</p>
                      <p class="gA48873">空</p>
                    </div>
                  </div>
                  <div class="ib">
                    <div class="lt">
                      <p class="gD49303"></p>
                    </div>
                    <img class="cg" src="../assets/images/front_img/巽.png" alt="">
                    <div class="rt">
                      <p class="gECD475">辛</p>
                      <p class="gD49303">辰巳</p>
                      <p class="gA48873">生</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gx-b">
                <p>地风升</p>
                <p>七杀</p>
              </div>
            </li>
          </ul>
          <ul class="gx-list gx-ft">
            <li class="gx-item">
              <div class="gx-fti">
                <div class="name">主卦<img src="../assets/images/front_img/上1.png" alt=""></div>
                <div class="front">
                  <img src="../assets/images/front_img/乾1.png" alt="">
                  <img src="../assets/images/front_img/坤1.png" alt="">
                </div>
                <div class="text">
                  <p>天地否</p>
                </div>
              </div>
              <div class="gx-fti">
                <div class="name">主卦<img src="../assets/images/front_img/上1.png" alt=""></div>
                <div class="front">
                  <img src="../assets/images/front_img/乾1.png" alt="">
                  <img src="../assets/images/front_img/坤1.png" alt="">
                </div>
                <div class="text">
                  <p>天地否</p>
                </div>
              </div>
            </li>
            <li class="gx-item">
              <div class="gx-fti">
                <div class="name">互错卦<img src="../assets/images/front_img/下1.png" alt=""></div>
                <div class="front">
                  <img src="../assets/images/front_img/巽1.png" alt="">
                  <img src="../assets/images/front_img/艮1.png" alt="">
                </div>
                <div class="text">
                  <p>风山渐</p>
                </div>
              </div>
              <div class="gx-fti">
                <div class="name">互综卦<img src="../assets/images/front_img/下1.png" alt=""></div>
                <div class="front">
                  <img src="../assets/images/front_img/巽1.png" alt="">
                  <img src="../assets/images/front_img/艮1.png" alt="">
                </div>
                <div class="text">
                  <p>风山渐</p>
                </div>
              </div>
            </li>
            <li class="gx-item">
              <div class="gx-fti">
                <div class="name">变错卦<img src="../assets/images/front_img/下1.png" alt=""></div>
                <div class="front">
                  <img src="../assets/images/front_img/乾1.png" alt="">
                  <img src="../assets/images/front_img/震1.png" alt="">
                </div>
                <div class="text">
                  <p>天地否</p>
                </div>
              </div>
              <div class="gx-fti">
                <div class="name">变综卦<img src="../assets/images/front_img/上1.png" alt=""></div>
                <div class="front">
                  <img src="../assets/images/front_img/兑1.png" alt="">
                  <img src="../assets/images/front_img/坤1.png" alt="">
                </div>
                <div class="text">
                  <p>天地否</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titleWrapper from '../components/title';
import ResultCard from '../components/resultcard';

export default {
    components: {
        titleWrapper,
        ResultCard
    },
    data(){
        return {
          keyword: ["/static/images/乾.png"],
        }
    },
    created(){

    },
    methods: {
    }
}
</script>

<style >
  .guaxiang *{
      box-sizing: border-box;
  }
  .guaxiang{
    box-sizing: border-box;
    padding-top: 0.88rem;
    padding-bottom: 0.3rem;
    background-color: #FEFCF4;
  }
  .gx_content{
    width: 6.9rem;
    margin: 0 auto;
  }
  .fortune{
    min-height: 2rem;
    padding: .1rem .12rem .32rem;
    position: relative;
    background: url(../assets/images/顶部背景.png) no-repeat  0 0,
    url(../assets/images/顶部边框.png) no-repeat .1rem .1rem;
    background-color: #FFFFFF;
    background-size: 4.54rem 3.06rem, 6.7rem .76rem;
    box-shadow: 0 0 0.3rem 0 rgba(0,0,0,.1);
  }
  .fortune .fortune_bg{
    position: absolute;
    width: 100%;
    height: .76rem;
    bottom: .1rem;
    left: 0;
    background: url(../assets/images/底部边框.png) no-repeat .1rem 0;
    background-size: 6.7rem .76rem;
  }
  .fortune .title{
    height: 0.76rem;
    text-align: center;
    background:url("../assets/images/运势.png") no-repeat center 0.2rem;
  }
  .gx-list{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25rem .34rem;
  }
  .gx-item{
    margin: 0 .05rem;
  }
  .gx-t{
    text-align: center;
  }
  .gx-t .sname{
    height: .48rem;
    line-height: .48rem;
    color: #BFB0A4;
    font-size: .22rem
  }
  .gx-t .bname{
    height: .48rem;
    line-height: .48rem;
    color: #A48873;
    font-size: .28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
  }
  .gx-t .bname img{
    width: 0.14rem;
    height: 0.26rem;
  }
  .gx-m .front{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .gx-m .front .ib{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .3rem;
  }
  .gx-m .front .ib:last-child{
    margin-bottom: 0;
  }
  .gx-m .front .ib .lt{
    text-align: right;
    margin-right: .12rem;
    font-size: .22rem;
    width: 0.48rem;
  }
  .gx-m .front .ib .lt p{
    height: .22rem;
    margin-bottom: .05rem;
  }
  .gx-m .front .ib .lt p:last-child{
    margin-bottom: 0;
  }
  .gx-m .front .ib .rt{
    text-align: left;
    margin-left: .12rem;
    font-size: .22rem;
    align-self:flex-start;
    width: 0.48rem;
  }
  .gx-m .front .ib .rt p{
    height: .22rem;
    margin-bottom: .05rem;
  }
  .gx-m .front .ib .rt p:last-child{
    margin-bottom: 0;
  }
  .gx-m .front .ib .cg{
    width: 1rem;
    height: 0.8rem;
    background-size: cover;
  }
  .gx-b{
    line-height: .48rem;
    text-align: center;
    color: #BFB0A4;
    font-size: .22rem;
  }
  .gx-ft{
    justify-content: space-between;
  }
  .gx-ft .gx-item{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gx-fti{
    text-align: center;
    font-size: .22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 .05rem;
  }
  .gx-fti .name{
    color: #A48873;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gx-fti .name img{
    width: 0.1rem;
    height: 0.2rem;
  }
  .gx-fti .front{
    width: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: .1rem 0;
  }
  .gx-fti .front img{
    width: 0.8rem;
    height: 0.64rem;
    margin-bottom: .1rem;
  }
  .gx-fti .front img:last-child{
    margin-bottom: 0;
  }
  .gx-fti .text{
    color: #BFB0A4;
  }
</style>


