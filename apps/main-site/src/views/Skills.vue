<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">
      <span class="text-green-400">技能</span>树
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <SkillCategory
        v-for="category in skillTree"
        :key="category.name"
        :category="category"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SkillCategory from '@/components/SkillCategory.vue'

const skillTree = ref([
  {
    name: '前端技术',
    icon: '⚡',
    color: 'green',
    skills: [
      { name: 'Vue 3', level: 90, link: 'https://github.com/kindred-resume-hub/vue-portfolio' },
      { name: 'React 18', level: 85, link: 'https://github.com/kindred-resume-hub/react-portfolio' },
      { name: 'Qiankun 微前端', level: 80, link: 'https://github.com/kindred-resume-hub/qiankun-main' },
      { name: 'TypeScript', level: 85, link: '' },
      { name: 'TailwindCSS', level: 90, link: '' },
      { name: 'Vite/Webpack', level: 85, link: '' }
    ]
  },
  {
    name: '后端技术',
    icon: '🔧',
    color: 'blue',
    skills: [
      { name: 'Node.js', level: 88, link: 'https://github.com/kindred-resume-hub/node-api' },
      { name: 'Python FastAPI', level: 82, link: 'https://github.com/kindred-resume-hub/python-api' },
      { name: 'Go', level: 75, link: '' },
      { name: 'PostgreSQL', level: 80, link: '' },
      { name: 'MongoDB', level: 78, link: '' },
      { name: 'Redis', level: 76, link: '' }
    ]
  },
  {
    name: '桌面端技术',
    icon: '🖥️',
    color: 'purple',
    skills: [
      { name: 'Electron', level: 85, link: 'https://github.com/kindred-resume-hub/electron-demo' },
      { name: 'Wails (Go)', level: 72, link: 'https://github.com/kindred-resume-hub/wails-demo' },
      { name: 'Tauri', level: 68, link: '' },
      { name: '桌面端开发', level: 85, link: '' }
    ]
  },
  {
    name: 'DevOps',
    icon: '🚀',
    color: 'orange',
    skills: [
      { name: 'Docker', level: 88, link: 'https://github.com/kindred-resume-hub/docker-demo' },
      { name: 'GitHub Actions', level: 85, link: '' },
      { name: 'Kubernetes', level: 72, link: '' },
      { name: 'AWS', level: 75, link: '' },
      { name: 'CI/CD', level: 88, link: '' }
    ]
  }
])
</script>
