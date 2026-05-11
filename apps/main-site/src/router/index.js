import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/views/Skills.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue')
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('@/views/CaseStudies.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  // 使用简单的 '/' 作为 base，提高本地开发兼容性
  history: createWebHistory('/'),
  routes
})

export default router
