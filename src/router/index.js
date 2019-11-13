import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'menu',
    component: () => import('@/views/Menu')
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('@/views/Game')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/Result')
  }
]

const router = new VueRouter({
  routes
})

export default router
