import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path: 'classify',
        name: 'classify',
        component: () => import(/* webpackChunkName: "about" */ '../views/two/classify.vue')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import(/* webpackChunkName: "my" */ '../views/two/my.vue')
      },{
        path: 'default',
        name: 'default',
        component: () => import(/* webpackChunkName: "about" */ '../views/two/default.vue')
      },{
        path: 'shopcar',
        name: 'shopcar',
        component: () => import(/* webpackChunkName: "about" */ '../views/two/shopcar.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
