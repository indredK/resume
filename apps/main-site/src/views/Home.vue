<template>
  <div class="container mx-auto px-4 py-12">
    <section class="text-center mb-16">
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-green-400">你好</span>，我是
        <span class="text-blue-400">开发者</span>
      </h1>
      <p class="text-xl text-slate-400 mb-8">
        全栈工程师 | 技术探索者 | 问题解决者
      </p>
      <div class="flex justify-center gap-4">
        <a
          href="https://github.com/kindred-resume-hub"
          target="_blank"
          class="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
        >
          GitHub 主页
        </a>
        <router-link
          to="/skills"
          class="px-6 py-3 border border-slate-600 hover:border-green-400 rounded-lg transition-colors"
        >
          查看技能树
        </router-link>
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-bold mb-6 text-center">技术栈概览</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TechCard
          v-for="category in techCategories"
          :key="category.title"
          :category="category"
        />
      </div>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-6 text-center">最近活动</h2>
      <div class="bg-slate-800 rounded-lg p-6">
        <p class="text-slate-400 text-center">
          准备开始构建精彩的技术展示...
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TechCard from '@/components/TechCard.vue'

const techCategories = ref([
  {
    title: '前端技术',
    icon: '⚡',
    color: 'green',
    items: ['Vue 3', 'React 18', 'Qiankun 微前端', 'TailwindCSS'],
    link: 'https://github.com/kindred-resume-hub/vue-portfolio'
  },
  {
    title: '后端技术',
    icon: '🔧',
    color: 'blue',
    items: ['Node.js', 'Python FastAPI', 'RESTful API', 'GraphQL'],
    link: 'https://github.com/kindred-resume-hub/node-api'
  },
  {
    title: '桌面端 & DevOps',
    icon: '🖥️',
    color: 'purple',
    items: ['Electron', 'Wails (Go)', 'Docker', 'CI/CD'],
    link: 'https://github.com/kindred-resume-hub/electron-demo'
  }
])
</script>
