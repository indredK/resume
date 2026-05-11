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
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  // GitHub Pages 部署时需要设置正确的 base 路径
  history: createWebHistory('/resume/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），恢复到该位置
    if (savedPosition) {
      return savedPosition
    }
    // 如果有锚点，滚动到锚点位置
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // 导航栏高度偏移
      }
    }
    // 否则滚动到页面顶部
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
