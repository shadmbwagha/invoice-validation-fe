import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    component: () => import('../views/Login.vue'), 
    name:'login'
  },
  {
    path: '/body',
    component: Main,
    children: [
      { path: '/dashboard', component: () => import('../views/Dashboard.vue'), name: 'dashboard', props: true},
      { path: '/devp', component: () => import('../views/Maintainance.vue') },
      { path: '/upload', component: () => import('../views/Uploading.vue') },
      { path: '/invoices', component: () => import('../views/Invoices.vue') },
      { path: '/extraction', component: () => import('../views/extraction.vue') },
      { path: '/extractionform', component: () => import('../views/ExtractionForm.vue') },
    ],
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
    name: 'register'
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
