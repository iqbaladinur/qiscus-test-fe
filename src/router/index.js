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
    name: 'Chats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
  },
  {
    path: '/new',
    name: 'New Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewChat.vue'),
  },
  {
    path: '/room',
    name: 'Chat Room',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatRoom.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'),
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => authGuard(to, from, next))

export default router
