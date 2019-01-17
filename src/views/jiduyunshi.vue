<template>
  <div class="taisui jdys">
    <title-wrapper titleText="辛汇智"></title-wrapper>
    <div class="banner"><img src="../assets/images/jdys_bg.png"></div>
    <ResultCard :keyword="keyword"></ResultCard>
    <PanelCard :panel="panel1" class="nobtmbg"></PanelCard>
    <PanelCard :panel="panel2" class="nobtmbg"></PanelCard>
    <PanelCard :panel="panel3" class="nobtmbg"></PanelCard>
    <PanelCard :panel="panel4" class="nobtmbg"></PanelCard>
    <PanelCard :panel="panel5" class="nobtmbg"></PanelCard>

    <Recommend :fleetArr="fleetArr"></Recommend>
  </div>
</template>

<script>
  import titleWrapper from '../components/title';
  import Recommend from '../components/recommend';
  import ResultCard from '../components/resultcard';
  import PanelCard from '../components/panelcard';
  import Comment from '../components/comment2';
  export default {
    components: {
      titleWrapper,
      ResultCard,
      Recommend,
      PanelCard,
      Comment
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
          title: "/static/images/春.png",
          text: "季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势"
        },
        panel2: {
          title: "/static/images/夏.png",
          text: "季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势"
        },
        panel3: {
          title: "/static/images/秋.png",
          text: "季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势"
        },
        panel4: {
          title: "/static/images/冬季.png",
          text: "季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势季度运势"
        },


      }
    },
    created(){

    },
    methods: {
      poper_pay(){
        this.poperShow = true;
        var body = document.querySelector('body');
        body.style.position = 'fixed';
      },
      close_poper_pay(){
        this.poperShow = false;
        var body = document.querySelector('body');
        body.style.position = 'unset';
      }
    }
  }
</script>

<style >
  body, html, #app {
    height: 100%;
  }
  .taisui {
    min-height: 100%;
    box-sizing: border-box;
    background: #FEFCF4;
    padding-top: 0.88rem;
    padding-bottom: .5rem;
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

  .jdys .panel-card .title{
    background-size: 80% auto;
  }
</style>


