// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/reset.css"
import "./assets/css/comm.css"
import 'element-ui/lib/theme-chalk/base.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 7.5 + 'px';
    }, false);
})();

Vue.use(VueAwesomeSwiper)
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
