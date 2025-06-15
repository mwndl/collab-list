import { createRouter, createWebHistory } from 'vue-router'
import MockList from '../views/MockList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/list/mock',
      name: 'mock-list',
      component: MockList
    }
  ]
})

export default router 