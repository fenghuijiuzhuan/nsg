<template>
  <div class="hexagramresult">
    <title-wrapper titleText="辛汇智"></title-wrapper>
    <ResultCard :keyword="keyword"></ResultCard>
    <div class="panel-wrap">
      <div class="downbg"></div>
      <table class="eight-table">
        <!-- <colgroup>
        <col width="20%">
        <col width="20%">
        <col width="20%">
        <col width="20%">
        <col width="20%">
        </colgroup> -->
        <tbody>
          <tr>
            <td>四柱</td>
            <td>年柱</td>
            <td>月柱</td>
            <td>日柱</td>
            <td>时柱</td>
          </tr>
          <tr>
            <td>十神</td>
            <td class="gA48873">偏财</td>
            <td class="gA48873">偏财</td>
            <td class="gA48873">日元</td>
            <td class="gA48873">七杀</td>
          </tr>
          <tr>
            <td>坤造</td>
            <td><p class="g00E19C">甲</p><p class="g1D8DFF">子</p></td>
            <td><p class="g00E19C">甲</p><p class="gD49303">戌</p></td>
            <td><p class="gECD475">庚</p><p class="g00E19C">寅</p></td>
            <td><p class="gFF1F1A">丙</p><p class="g1D8DFF">子</p></td>
          </tr>
          <tr>
            <td>藏干</td>
            <td class="g1D8DFF">癸</td>
            <td><span class="gECD475">辛</span><span class="gD49303">戊</span><span class="g1D8DFF">丁</span></td>
            <td><span class="gFF1F1A">丙</span><span class="g00E19C">甲</span><span class="gD49303">戌</span></td>
            <td class="g1D8DFF">癸</td>
          </tr>
          <tr>
            <td>支神</td>
            <td>偏财</td>
            <td>偏财</td>
            <td>日元</td>
            <td>七杀</td>
          </tr>
        </tbody>
      </table>
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
          keyword: ["/static/images/乾.png","/static/images/坤.png"],
          table1: [
            {

            }
          ]
        }
    },
    created(){

    },
    methods: {
    }
}
</script>

<style >
.hexagramresult,.hexagramresult *{
  box-sizing: border-box;
}
.hexagramresult {
    min-height: 100vh;
    box-sizing: border-box;
    background: #FEFCF4;
    padding-top: 0.88rem;
    padding-bottom: .5rem;
}
.eight-table{
  font-size: .24rem;
  width: 100%;
  text-align: center;
  color: #222222;
  line-height: .36rem;
}
.eight-table td{
  height: .66rem;
}
.gA48873{
  color:#A48873;
}
.g00E19C{
  color:#00E19C;
}
.g1D8DFF{
  color:#1D8DFF;
}
.gFF1F1A{
  color:#FF1F1A;
}
.gECD475{
  color: #ECD475;
}
.gD49303{
  color: #D49303;
}
</style>


