import Vue from 'vue'
import VueRouter from 'vue-router'
import GetStarted from '../views/GetStarted.vue'
import { authGuard } from '../services/authGuards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: GetStarted,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => authGuard(to, from, next))

export default router
