<template>
    <div class="taisui">
        <title-wrapper titleText="辛汇智"></title-wrapper>
        <div class="banner"><img src="../assets/images/化太岁.png"></div>
        <ResultCard style="margin-bottom: 0;" :keyword="keyword"></ResultCard>
        <PanelCard :panel="panel1" class="nobtmbg"></PanelCard>
        <PanelCard :panel="panel2" class="nobtmbg"></PanelCard>
        <PanelCard :panel="panel3" class="nobtmbg"></PanelCard>
        <PanelCard :panel="panel4"></PanelCard>
        <PanelCard :panel="panel5">
            <Comment :slot="panel5.slotName"></Comment>
        </PanelCard>
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
                title: "/static/images/太岁解析.png",
                text: "太岁解析：<br/>值刑太岁——生肖猪值太岁进入之后，生肖猪有「天危」「血刃」等凶煞，凶星临身，一整年运势都处于险恶动荡，起伏不定的糟糕状态<br/>值刑太岁——生肖猪值太岁进入之后，生肖猪有「天危」「血刃」等凶煞，凶星临身，一整年运势都处于险恶动荡，起伏不定的糟糕状态"
            },
            panel2: {
                title: "/static/images/为什么要压太岁.png",
                text: "压太岁是我国民间一种化煞消灾、祈福纳吉的传统，至今已有2000多年的历史了，因太岁掌管一年的吉凶祸福，通过压太岁"
            },
            panel3: {
                title: "/static/images/哪些人需要压太岁.png",
                text: "生肖猪、蛇、猴、虎以及......."
            },
            panel4: {
                title: "/static/images/如何压太岁.png",
                child: [
                    {
                        title: '/static/images/神坛压太岁.png',
                        img: ['/static/images/图层 889.png','/static/images/图层 890.png'],
                        text1: '神坛压太岁，通过八字祭拜神台神坛压太岁太岁，通过八字祭拜神台',
                        text2: '我们的工作人员会将照片发送给您'
                    },
                    {
                        title: '/static/images/道观压太岁.png',
                        img: ['/static/images/图层 889.png','/static/images/图层 890.png'],
                        text1: '神坛压太岁，通过八字祭拜神台神坛压太岁太岁，通过八字祭拜神台',
                        text2: '我们的工作人员会将照片发送给您'
                    }
                ]
            },
            panel5: {
                title: '/static/images/评论反馈.png',
                child: "component",
                slotName: "comment"
            }
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

</style>


