<template>
  <div class="guaxiang">
    <title-wrapper titleText="卦象"></title-wrapper>
    <ResultCard :keyword="keyword"></ResultCard>
    <div class="gx_content">
      <div class="fortune">
        <div class="fortune_bg"></div>
        <div class="title"></div>
        <div class="fortune_list">
          <ul>
            <li></li>
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
</style>


