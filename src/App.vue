<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.bgcfff{
  background-color: #FFF;
}
.gfff{
  color: #FFF;
}
.text-center{
  text-align: center;
}
.text-left{
  text-align: left;
}
.text-right{
  text-align: right;
}
.topdownbg {
  min-height: 4rem;
  position: relative;
  background: #fff;
  box-sizing: border-box;
  padding: 0.4rem;
  box-shadow:0px 0.05rem 0.3rem 0px rgba(0, 0, 0, 0.1);
  z-index: 0;
}
.topdownbg>.topbg {
  width: 100%;
  height: 2rem;
  background: url('./assets/images/bgtop.png') no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
}
.topdownbg>.downbg {
  width: 100%;
  height: 2rem;
  background: url('./assets/images/bgdown.png') no-repeat;
  background-size: contain;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 0;
}
.tdb_container {
  position: relative;
  z-index: 1;
}
</style>
