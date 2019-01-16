<template>
    <div class="calculate">
        <title-wrapper titleText="辛汇智"></title-wrapper>
        <div class="banner"><img src="../assets/images/banner.png"></div>
        <div class="padding30">
            <div class="topdownbg yx-desc">
                <div class="topbg"></div>
                <div class="tdb_container">
                    <div class="yx-text">从综合整体看本年度事业、感情、财富、健康、性格等各方面的的运势情况，遇事做出正确的判断。众所周知，在周易预测学中，八字可谓是当之无愧的描述个人人生命运最大最系统最完整的信息库，其储存的信息囊括了人生命运的方方面面。现代生活中节奏越来越快，人们的生活压力越来越大，那么，如何进行八字排盘，如何来解读八字的四柱、干支、十神、神煞呢？快来测测吧</div>
                </div>
                <div class="downbg"></div>
            </div>
        </div>
        <Info @poperPay="poper_pay" :hexagram="true" :btnText="btnText"></Info>
        <Comment></Comment>
        <Recommend :recommendTitle="recommendTitle" :fleetArr="fleetArr"></Recommend>
        <Popay v-if="poperShow" @closePay="close_poper_pay"></Popay>
    </div>
</template>

<script>
import titleWrapper from '../components/title';
import Info from '../components/info';
import Recommend from '../components/recommend';
import Popay from '../components/pay';
import Comment from '../components/comment';
export default {
    components: {
        titleWrapper,
        Info,
        Recommend,
        Popay,
        Comment
    },
    data(){
        return {
            recommendTitle: '精品推荐',
            fleetArr: [
                {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
                {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
                {title: "流年查太岁", tips: "已有6876位缘主测算", text: "岁者，年也。“岁”就是年的意思。就是掌管一年运程的太岁君，即流年。"},
            ],
            poperShow: false,
            btnText: "立即起卦"
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
.calculate {
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
.padding30 {
    padding: 0.3rem;
}
.yx-desc {
    background: #F8EAD8;
}
.yx-desc .yx-text {
    font-size:0.24rem;
    color:rgba(149,123,102,1);
    line-height:0.48rem;
    text-align: justify;
}

</style>


