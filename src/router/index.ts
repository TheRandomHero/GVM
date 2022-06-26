import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Gallery from '../views/Gallery.vue'
import Faq  from '../views/Faq.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/gyik',
    name: 'gyik',
    component: Faq
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
