import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/views/Cart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cart',
      component: Cart,
    },
  ],
})

export default router
