import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlansView from '@/views/PlansView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import BookView from '@/views/BookView.vue'
import GenresView from '@/views/GenresView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookView
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: RegisterView
    },
    {
      path: '/genres',
      name: 'genres',
      component: GenresView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
