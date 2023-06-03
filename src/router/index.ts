import { createRouter, createWebHistory } from 'vue-router'
import MyHome from '../views/MyHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MyHome
    },
  ]
})

export default router
