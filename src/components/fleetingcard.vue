<template>
    <router-link to="/my" class="fleet-item">
      <div class="fleet">
        <div class="downbg"></div>
        <div class="fleet-left">
          <p class="tit">{{fleetTitle}}</p>
          <p class="ts">{{fleetTips}}</p>
          <p class="txt">{{fleetText}}</p>
        </div>
        <div class="fleet-right">
          <img src="../assets/images/查太岁.png" alt="">
        </div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: "fleet",
  props:['fleetTitle', 'fleetTips', 'fleetText'],
}
</script>

<style scoped>
  .fleet{
    position: relative;
    padding: .3rem .3rem .15rem;
    margin-bottom: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff url(/static/images/顶部边框.png) no-repeat .1rem .1rem;
    background-size: 6.7rem .76rem;
  }
  .fleet .downbg{
    position: absolute;
    width: 100%;
    height: .76rem;
    bottom: .1rem;
    left: 0;
    background: url(/static/images/底部边框.png) no-repeat .1rem 0;
    background-size: 6.7rem .76rem;
  }
  .fleet-item:last-child .fleet{
    margin-bottom: 0;
  }
  .fleet-left{
    width: 4.6rem;
    flex-shrink: 1;
  }
  .fleet-left .tit{
    font-size: .32rem;
    color: #957B66;
    font-weight: bold;
  }
  .fleet-left .ts{
    font-size: .18rem;
    color: #999999;
    margin: .1rem 0;
  }
  .fleet-left .txt{
    font-size: .24rem;
    color: #BFB0A4;
    line-height: .48rem;
  }
  .fleet-right{
    display: flex;
    align-content: center;
    align-items: center;
  }
  .fleet-right img{
    width: 1rem;
    height: 1rem;
  }
</style>

