import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/views/Menu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'menu',
      component: Menu,
    },
  ],
})

export default router
