<template>
  <div class="recommend">
    <div class="title"></div>
    <Fleet v-for="(item, index) in fleetArr" :key="index" :fleet-title="item.title" :fleet-tips="item.tips" :fleet-text="item.text"></Fleet>
  </div>
</template>

<script>
import Fleet from '../components/fleetingcard';
export default {
  name: "recommend",
  props:['recommendTitle', 'fleetArr'],
  components: {
    Fleet
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .recommend{
    width: 6.9rem;
    margin: 0 auto;
  }
  .recommend .title{
    background: url(../assets/images/精品推荐.png) no-repeat center .5rem;
    background-size: 3.4rem .36rem;
    height: 1.12rem;
  }
</style>
