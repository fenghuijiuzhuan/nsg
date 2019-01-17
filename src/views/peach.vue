<template>
  <div class="peach">
    <title-wrapper titleText="桃花"></title-wrapper>
    <div class="banner"><img src="../assets/images/peachbg.png"></div>
    <ResultCard :keyword="keyword"></ResultCard>
    <PanelCard :panel="panel1" class="nobtmbg">
      <div :slot="panel1.slotName" class="peachlist">
        <div class="row" v-for="(item,index) in panel1.peachlist" :key="index">
          <span>{{item.t1}}</span>
          <span>{{item.t2}}</span>
          <span class="num">{{item.t3}}</span>
          <span>{{item.t4}}</span>
        </div>
      </div>
    </PanelCard>
    <PanelCard :panel="panel2" class="nobtmbg"></PanelCard>
    <div style="margin-top: .52rem">
      <div class="toggle-card">
        <div class="toggle-card-header" style="background-image: url(/static/images/桃花详情解读.png);"></div>
        <div class="toggle-card-body"></div>
      </div>
      <div class="toggle-card">
        <div class="toggle-card-header" style="background-image: url(/static/images/哪些年份会有桃花.png);"></div>
        <div class="toggle-card-body"></div>
      </div>
      <div class="toggle-card">
        <div class="toggle-card-header" style="background-image: url(/static/images/未来6个月的桃花情况.png);"></div>
        <div class="toggle-card-body"></div>
      </div>
      <div class="toggle-card">
        <div class="toggle-card-header" style="background-image: url(/static/images/哪年会结婚.png);"></div>
        <div class="toggle-card-body"></div>
      </div>
    </div>

    <Recommend :fleetArr="fleetArr"></Recommend>
  </div>
</template>

<script>
import titleWrapper from '../components/title';
import ResultCard from '../components/resultcard';
import PanelCard from '../components/panelcard';
import Recommend from '../components/recommend';
export default {
    components: {
        titleWrapper,
        ResultCard,
        PanelCard,
        Recommend
    },
    data(){
        return {
          keyword: ["/static/images/乾.png"],
          fleetArr: [
            {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
            {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
            {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
          ],
          panel1: {
            title: "/static/images/桃花朵朵开.png",
            child: "component",
            slotName: "peachlist",
            peachlist: [
              {
                t1: "红鸾桃花",
                t2: "甲",
                t3: "3朵",
                t4: "天赐良缘，长相厮守",
              },{
                t1: "天喜桃花",
                t2: "甲",
                t3: "3朵",
                t4: "天赐良缘，长相厮守",
              },{
                t1: "正缘桃花",
                t2: "甲",
                t3: "3朵",
                t4: "爱情至上，为情所困",
              },{
                t1: "墙内桃花",
                t2: "无",
                t3: "无",
                t4: "花开吉祥，任君选择",
              },{
                t1: "墙外桃花",
                t2: "无",
                t3: "无",
                t4: "忠贞无二，幸福美满",
              },{
                t1: "咸池桃花",
                t2: "子",
                t3: "3朵",
                t4: "忠贞无二，幸福美满",
              },{
                t1: "沐浴桃花",
                t2: "无",
                t3: "无",
                t4: "放任不羁，欲望无穷",
              },{
                t1: "玉门桃花",
                t2: "无",
                t3: "无",
                t4: "情欲难控，享受闺房",
              },{
                t1: "红艳桃花",
                t2: "无",
                t3: "无",
                t4: "温良多情，万人着迷",
              }
            ]
          },
          panel2: {
            title: "/static/images/测桃花前言.png",
            text: "大家经常会听到说谁谁走了桃花运，殊不知桃花也有正桃花与烂桃花之分，正桃花可以是人缘佳，或是遇到心仪的对象，而烂桃花则会碰上小人或是感情不顺，严重的甚至会发展成为桃花劫，桃花运是命理术数名词，又叫桃花煞。"
          }
        }
    },
    created(){

    },
    methods: {

    }
}
</script>

<style scoped>
  .peach *{
      box-sizing: border-box;
  }
  .peach{
    box-sizing: border-box;
    padding-top: 0.88rem;
    padding-bottom: 0.3rem;
    background-color: #FEFCF4;
    min-height: 100vh;
  }
  .banner {
    height: 3.6rem;
    width: 100%;
    font-size: 0
  }
  .banner>img {
      width: 100%;
      height: 100%;
  }
  .peachlist{
    color: #E14575;
    font-size: .24rem;
  }
  .peachlist .row{
    height: 0.84rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ECE6E1;
  }
  .peachlist .row .num{
    width: 0.5rem;
  }
  .toggle-card{
    width: 6.9rem;
    margin: .28rem auto 0;
    background-color: #FFF;
    box-shadow: 0 .02rem .2rem 0 rgba(0, 0, 0, .1)
  }
  .toggle-card-header{
    height: .8rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto .36rem;
    position: relative;
  }
  .toggle-card-header::after{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: .2rem;
    margin: auto 0;
    background: url(../assets/images/下拉.png) no-repeat center/cover;
    width: 0.24rem;
    height: 0.16rem;
  }
</style>