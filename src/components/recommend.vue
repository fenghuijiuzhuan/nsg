<template>
  <div class="recommend">
    <div class="title">{{recommendTitle}}</div>
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
    color: #A48873;
    font-size: .32rem;
    font-weight: bold;
    text-align: center;
    padding: .54rem 0;
  }
</style>
