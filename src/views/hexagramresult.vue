<template>
  <div class="hexagramresult">
    <title-wrapper titleText="辛汇智"></title-wrapper>
    <ResultCard></ResultCard>
    <div class="tips">
      <p>您已成功预约起卦</p>
      <p>稍后客服将会跟您取得联系</p>
      <p>请留意</p>
    </div>
    <button class="common-btn">联系客服</button>
    <Recommend :fleetArr="fleetArr"></Recommend>
  </div>
</template>

<script>
import titleWrapper from '../components/title';
import Recommend from '../components/recommend';
import ResultCard from '../components/resultcard';
export default {
    components: {
        titleWrapper,
        Recommend,
        ResultCard
    },
    data(){
        return {
            fleetArr: [
                {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
                {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
                {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
            ]
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
.hexagramresult {
    min-height: 100vh;
    box-sizing: border-box;
    background: #FEFCF4;
    padding-top: 0.88rem;
    padding-bottom: .5rem;
}
.hexagramresult .tips{
  font-size: .28rem;
  line-height: .56rem;
  color: #A48873;
  text-align: center;
  margin-bottom: .3rem;
}
</style>


