import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/index')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('../views/my')
    },
    {
      path: '/more',
      name: 'More',
      component: () => import('../views/more')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../views/detail')
    },
    {
      path: '/explain',
      name: 'Explain',
      component: () => import('../views/explain')
    },
    {
      path: '/calculate',
      name: 'Calculate',
      component: () => import('../views/calculate')
    },
    {
      path: '/pay',
      name: 'Pay',
      component: () => import('../views/pay')
    }
  ]
})
