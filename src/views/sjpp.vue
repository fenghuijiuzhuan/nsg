<template>
  <div class="taisui sjpp">
    <title-wrapper titleText="手机号排盘"></title-wrapper>
    <ResultCard :keyword="keyword"></ResultCard>
    <div class="panel-card nobtmbg panel1">
      <div class="title" style="background-image: url(&quot;/static/images/太岁解析.png&quot;);"></div>
      <div class="body">
        <div class="downbd"></div>
        <div class="text">
          <ul><li>先天<p>19860420</p></li><li>后天<p>1767314931</p></li></ul>
        </div>
      </div>
    </div>
    <div class="panel-card nobtmbg panel2">
      <div class="title" style="background-image: url(&quot;/static/images/太岁解析.png&quot;);"></div>
      <div class="body">
        <div class="downbd"></div>
        <div class="text">
          <div class="item">
            <ul>
              <li><span>19</span><span>绝命</span></li>
              <li><span>98</span><span>延年</span></li>
              <li  class="s09"><span>86</span><span>绝命</span></li>
              <li  class="s08"><span>604</span><span>绝命</span></li>
              <li  class="sD49303"><span>42</span><span>祸害</span></li>
              <li  class="sFF1F1A"><span>420</span><span>五鬼</span></li>
              <li><span></span><span></span></li>
            </ul>
            <p>3个绝命</p>
          </div>
          <div class="item">
            <ul>
              <li class="s13C255"><span>76</span><span>生气重叠</span></li>
              <li class="s07"><span>73</span><span>绝命</span></li>
              <li><span>31</span><span>天医</span></li>
              <li class="s13C255 s08"><span>14</span><span>生气</span></li>
              <li class="s09"><span>49</span><span>天医</span></li>
              <li class="s13C255"><span>93</span><span>生气</span></li>
              <li class="s08"><span>31</span><span>天医</span></li>
            </ul>
            <p>3个天医 3个生气</p>
          </div>
          <div class="item_bottom">五行：9319 &nbsp;&nbsp;&nbsp;<span class="sD49303">土土<span class="i1D8DFF">水</span>土</span></div>
        </div>
      </div>
    </div>
    <PanelCard :panel="panel3" class="nobtmbg"></PanelCard>
    <PanelCard :panel="panel4" class="nobtmbg"></PanelCard>
    <PanelCard :panel="panel5" class="nobtmbg"></PanelCard>


  </div>
</template>

<script>
  import titleWrapper from '../components/title';
  import ResultCard from '../components/resultcard';
  import PanelCard from '../components/panelcard';
  import Comment from '../components/comment2';
  export default {
    components: {
      titleWrapper,
      ResultCard,
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
        panel3: {
          title: "/static/images/性格解析.png",
          text: "性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好"
        },
        panel4: {
          title: "/static/images/详细解读.png",
          text: "性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好性格好"
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
  .panel1 .text ul{
    font-size: 0;
  }
  .panel-card.nobtmbg.panel1 .body{
    min-height: 1rem;
  }
  .panel1 .text ul li{
    display: inline-block;
    width: 50%;
    text-align: center;
    font-size: 0.24rem;
    color: #BFB0A4;
    letter-spacing: 2px;
  }
  .panel1 .text ul li p{
    font-size: 0.34rem;
    color: #A48873;
    letter-spacing: 0;
  }
  .panel-card.panel2 .text {
    font-size: 0;
  }
  .panel2 .text .item{
    display: inline-block;
    width: 50%;
    text-align: center;
    vertical-align: top;
  }
  .panel2 .text .item:first-child{
    padding-right: 0.2rem;
  }
  .panel2 .text .item:last-child{
    padding-left: 0.2rem;
  }
  .panel2 .text ul li{
    display: block;
    border-bottom: 1px solid #ECE6E1;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #ECD475;
  }
  .panel2 .text ul li span{
    display: inline-block;
    width: 50%;
    font-size: 0.28rem;
  }
  .panel2 .text .item>p{
    font-size: 0.28rem;
    color: #BFB0A4;
    padding: 0.1rem 0;
  }
 /* .panel2 .text ul li span:last-child{
    font-weight: bold;
  }*/

  .s13C255{
    color: #13C255;
  }
  .panel2 .text ul li.s09{
    opacity:0.9;
  }
  .panel2 .text ul li.s08{
    opacity:0.8;
  }
  .panel2 .text ul li.s07{
    opacity:0.7;
  }
  .panel2 .text ul li.s13C255{
    color:#13C255;
  }
  .panel2 .text ul li.sD49303{
    color:#D49303;
  }
  .panel2 .text ul li.sD49303{
    color: #D49303;
  }
  .panel2 .text ul li.sFF1F1A{
    color:#FF1F1A;
  }
  .item_bottom{
    font-size: 0.28rem;
    color:#BFB0A4;
    text-align: center;
    padding: 0.3rem 0;
  }
  .i1D8DFF{
    color: #1D8DFF;
  }
  .sD49303{
    color: #D49303;
  }
</style>


