import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/CategoriesView.vue')
    },
    {
      path: '/categories/:id',
      name: 'categories-item',
      component: () => import('@/views/CategoriesItem.vue')
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/views/PricingView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/Detail.vue')
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/SuccessView.vue')
    }
    
  ],
  linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
})

export default router
