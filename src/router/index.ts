import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '@/pages/auth/_layouts/auth'
import SignIn from '@/pages/auth/sign-in'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      component: AuthLayout,
      children: [
        {
          path: '/sign-in',
          name: 'SignIn',
          component: SignIn
        },
      ]
    }
  ]
})

export default router
