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
      path: '/hexagram',
      name: 'Hexagram',
      component: () => import('../views/hexagram')
    },
    {
      path: '/hexagramresult',
      name: 'Hexagramresult',
      component: () => import('../views/hexagramresult')
    },
    {
      path: '/taisui',
      name: 'Taisui',
      component: () => import('../views/taisui')
    },
    {
      path: '/eight',
      name: 'Eight',
      component: () => import('../views/eight')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login')
    },
    {
      path: '/guaxiang',
      name: 'Guaxiang',
      component: () => import('../views/guaxiang')
    },
    {
      path: '/jiduyunshi',
      name: 'Jiduyunshi',
      component: () => import('../views/jiduyunshi')
    },
    {
      path: '/sjpp',
      name: 'Sjpp',
      component: () => import('../views/sjpp')
    },
    {
      path: '/peach',
      name: 'peach',
      component: () => import('../views/peach')
    }
  ]
})
