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
            <td class="gA48873">伤官</td>
            <td class="gA48873"><p>劫偏正</p><p>财印官</p></td>
            <td class="gA48873"><p>七偏偏</p><p>杀财印</p></td>
            <td class="gA48873">伤官</td>
          </tr>
          <tr>
            <td>纳音</td>
            <td class="gA48873">海中金</td>
            <td class="gA48873">山头火</td>
            <td class="gA48873">松伯木</td>
            <td class="gA48873">涧下水</td>
          </tr>
          <tr>
            <td>地势</td>
            <td class="gA48873">死</td>
            <td class="gA48873">衰</td>
            <td class="gA48873">绝</td>
            <td class="gA48873">死</td>
          </tr>
        </tbody>
      </table>
      <div class="propress gECD475">
        <span>金</span>
        <div class="bar">
          <div class="block"></div>
        </div>
        <span class="percent">20.02%</span>
      </div>
      <div class="propress g39DC3D">
        <span>木</span>
        <div class="bar">
          <div class="block"></div>
        </div>
        <span class="percent">20.02%</span>
      </div>
      <div class="propress g1D8DFF">
        <span>水</span>
        <div class="bar">
          <div class="block"></div>
        </div>
        <span class="percent">20.02%</span>
      </div>
      <div class="propress gFF213B">
        <span>火</span>
        <div class="bar">
          <div class="block"></div>
        </div>
        <span class="percent">20.02%</span>
      </div>
      <div class="propress gD49303">
        <span>土</span>
        <div class="bar">
          <div class="block"></div>
        </div>
        <span class="percent">20.02%</span>
      </div>
      <div class="matrix">
        <div class="matrix-tr big">
          <div class="matrix-td">旺相休囚死</div>
          <div class="matrix-td">日主旺弱：<span class="g222222">日元身弱</span></div>
        </div>
        <div class="matrix-tr big">
          <div class="matrix-td g222222">土金火木水</div>
          <div class="matrix-td">喜用神：<span class="g222222">木</span></div>
        </div>
        <div class="matrix-tr big">
          <div class="matrix-td">胎元：<span class="g222222">己丑</span></div>
          <div class="matrix-td">命宫：<span class="g222222">乙木</span></div>
          <div class="matrix-td">日空：<span class="g222222">年未</span></div>
        </div>
        <div class="matrix-tr big">
          <div class="matrix-td">起大运：<span class="g222222">出生后7年5月起大运</span></div>
        </div>
        <div class="matrix-tr">
          <div class="matrix-td"></div>
          <div class="matrix-td">2004</div>
          <div class="matrix-td">2014</div>
          <div class="matrix-td">2024</div>
          <div class="matrix-td">2034</div>
          <div class="matrix-td">2044</div>
          <div class="matrix-td">2054</div>
          <div class="matrix-td">2064</div>
          <div class="matrix-td">2074</div>
        </div>
        <div class="matrix-tr timec">
          <div class="matrix-td">大运</div>
          <div class="matrix-td"><p class="gD49303">己</p><p class="g1D8DFF">亥</p></div>
          <div class="matrix-td"><p class="gECD475">庚</p><p class="g1D8DFF">子</p></div>
          <div class="matrix-td"><p class="gECD475">辛</p><p class="gD49303">丑</p></div>
          <div class="matrix-td"><p class="g1D8DFF">壬</p><p class="gECD475">庚</p></div>
          <div class="matrix-td"><p class="g1D8DFF">癸</p><p class="g00E19C">卯</p></div>
          <div class="matrix-td"><p class="g00E19C">甲</p><p class="gD49303">辰</p></div>
          <div class="matrix-td"><p class="g00E19C">乙</p><p class="gA48873">巳</p></div>
          <div class="matrix-td"><p class="gFF1F1A">丙</p><p class="gFF1F1A">午</p></div>
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
.panel-wrap{
  padding-left: .3rem;
  padding-right: .3rem;
}
.eight-table{
  font-size: .24rem;
  width: 100%;
  text-align: center;
  color: #222222;
}
.eight-table td{
  height: .66rem;
  vertical-align: middle;
}
.eight-table td p{
  line-height: .36rem;
}
.propress{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .28rem;
  height: .7rem;
  padding: 0 .18rem;
}
.propress .bar{
  width: 4.6rem;
  height: 0.2rem;
  border: 1px solid #EAE3DE;
  border-radius: .1rem;
  position: relative;
  overflow: hidden;
}
.propress .bar .block{
  width: 2rem;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.propress.gECD475 .bar .block{
  background-color: #ECD475
}
.propress.g39DC3D .bar .block{
  background-color: #39DC3D
}
.propress.gFF213B .bar .block{
  background-color: #FF213B
}
.propress.g1D8DFF .bar .block{
  background-color: #1D8DFF
}
.propress.gD49303 .bar .block{
  background-color: #D49303
}
.propress .percent{
  font-size: .22rem;
  color: #222222;
}

.gA48873{
  color:#A48873;
}
.g00E19C{
  color:#00E19C;
}
.g39DC3D{
  color: #39DC3D;
}
.g1D8DFF{
  color:#1D8DFF;
}
.gFF1F1A{
  color:#FF1F1A;
}
.gFF213B{
  color: #FF213B;
}
.gECD475{
  color: #ECD475;
}
.gD49303{
  color: #D49303;
}
.g222222{
  color: #222222;
}
.matrix{
  text-align: center;
  color: #A48873;
}
.matrix-tr{
  display: flex;
  text-align: center;
  border-bottom: 1px solid #ECE6E1;
}
.matrix-td{
  width: 100%;
  flex-shrink:1;
  border-right: 1px solid #ECE6E1;
  padding: .06rem 0;
  font-size: .24rem;
  line-height: .32rem;
}
.matrix-tr .matrix-td:first-child{
  width: .4rem;
  flex-shrink: 0;
}
.matrix-tr.timec .matrix-td{
  font-size: .28rem;
}
.matrix-tr.timec .matrix-td p{
  font-weight: bold;
}
.matrix-tr.timec .matrix-td:first-child{
  font-weight: normal;
}
.matrix .matrix-tr:last-child{
  border-bottom: none;
}
.matrix-tr .matrix-td:last-child{
  border-right: none;
}
.matrix-tr.big .matrix-td{
  width: 100%;
  height: .64rem;
  font-size: .28rem;
  line-height: .64rem;
  padding: 0;
  flex-shrink: 1;
}


</style>


