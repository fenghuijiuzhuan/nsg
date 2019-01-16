<template>
  <div class="title">
      <div class="title-text">{{titleText}}</div>
      <div class="t_top">
          <a href="javascript:history.go(-1);" class="icon_back"></a>
      </div>
  </div>
</template>

<script>
export default {
  name: "titleWrapper",
  props: ["titleText"],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.title {
    width: 100%;
    height:0.88rem;
    background:rgba(255,255,255,1);
    padding: 0 0.2rem;
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #EAE7DB;
    z-index: 1001;
}
.title-text {
    font-size:0.34rem;
    color:rgba(0,0,0,1);
    text-align: center;
    line-height: 0.88rem
}
.t_top {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    
}
.icon_back {
    width: 0.4rem;
    height: 0.4rem;
    background: url('../assets/images/back.png') no-repeat;
    background-size: contain;
}
</style>
