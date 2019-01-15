<template>
  <div class="tabbar">
      <router-link to="/" class="item">
          <div v-if="barindex == 0" class="item-icon item-icon2"></div>
          <div v-else class="item-icon"></div>
          <div :class="['item-text', barindex == 0 ? 'active' : '']">首页</div>
      </router-link>
      <router-link to="/my" class="item">
          <div v-if="barindex == 1" class="item-icon item-icon3"></div>
          <div v-else class="item-icon item-icon4"></div>
          <div :class='["item-text", barindex == 1 ? "active" : ""]'>我的</div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
   props:['barindex'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
    .tabbar {
        height:0.98rem;
        background:rgba(255,255,255,1);
        border-top: 0.02rem solid #ddd;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        font-size:0.18rem;
        color:rgba(153,153,153,1);
        height: 100%;
    }
    .item-icon {
        width: 0.4rem;
        height: 0.4rem;
        background: url('../assets/images/baricon2.png') no-repeat;
        background-size: contain;
        margin-bottom: 0.1rem;
    }
    .item-icon2 {
        background: url('../assets/images/baricon1.png') no-repeat;
        background-size: contain;
    }
    .item-icon3 {
        background: url('../assets/images/baricon4.png') no-repeat;
        background-size: contain;
    }
    .item-icon4 {
        background: url('../assets/images/baricon3.png') no-repeat;
        background-size: contain;
    }
    .active {
        color: #774927;
    }
</style>
