import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthLayout from '@/pages/auth/_layouts/auth'
import SignIn from '@/pages/auth/sign-in'
import Login from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
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
