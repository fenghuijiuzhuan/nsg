<template>
    <router-link to="/my" class="fleet-item">
      <div class="fleet bgcfff">
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
    padding: .3rem .3rem .15rem;
    margin-bottom: .2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

