import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/form-list',
      name: 'form-list',
      component: () => import('../views/FormListView.vue')
    }
  ]
})

export default router
