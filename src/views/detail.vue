<template>
    <div class="detail">
        <title-wrapper titleText="什么是八字"></title-wrapper>
        <div class="bigtitle">什么是八字?</div>
        <div class="text">从综合整体看本年度事业、感情、财富、健康、性格等各方面的的运势情况，遇事做出正确的判断。众所周知，在周易预测学中，八字可谓是当之无愧的描述个人人生命运最大最系统最完整的信息库，其储存的信息囊括了人生命运的方方面面。现代生活中节奏越来越快，人们的生活压力越来越大，那么，如何进行八字排盘，如何来解读八字的四柱、干支、十神、神煞呢？快来测测吧。</div>
        <img src="../assets/images/detailimg.png">
        <div class="text">从综合整体看本年度事业、感情、财富、健康、性格等各方面的的运势情况，遇事做出正确的判断。众所周知，在周易预测学中，八字可谓是当之无愧的描述个人人生命运最大最系统最完整的信息库，其储存的信息囊括了人生命运的方方面面。现代生活中节奏越来越快，人们的生活压力越来越大，那么，如何进行八字排盘，如何来解读八字的四柱、干支、十神、神煞呢？快来测测吧</div>
    </div>
</template>

<script>
import titleWrapper from "../components/title.vue";
export default {
    components: {
        titleWrapper
    }
}
</script>

<style>
 body, html, #app {
     height: 100%;
 }
 .detail {
     min-height: 100%;
     box-sizing: border-box;
     padding: 0.3rem;
     padding-top: 1.18rem;
     background: #FEFCF4;
     font-size: 0;
 }
 .detail>img {
     width: 100%;
     margin: 0.3rem 0;
 }
 .bigtitle {
    font-size:0.34rem;
    font-weight:bold;
    color:rgba(34,34,34,1);
    padding-bottom: 0.4rem;
 }
 .detail>.text {
    font-size:0.28rem;
    color:rgba(164,136,115,1);
    line-height:0.56rem;
    text-align: justify;
 }
</style>


