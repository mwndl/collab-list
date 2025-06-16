import { createRouter, createWebHistory } from 'vue-router'
import MockList from '../views/MockList.vue'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/list/mock',
      name: 'mock-list',
      component: MockList
    }
  ]
})

export default router 