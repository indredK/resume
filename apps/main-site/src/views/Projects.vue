<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">
      <span class="text-blue-400">项目</span>展示
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

const projects = ref([
  {
    name: 'Vue Portfolio',
    description: 'Vue 3 技术栈完整演示，包含组件化、状态管理、路由等',
    tech: ['Vue 3', 'Vite', 'Pinia', 'Vue Router'],
    url: 'https://kindred-resume-hub.github.io/vue-portfolio',
    repo: 'https://github.com/kindred-resume-hub/vue-portfolio',
    color: 'green'
  },
  {
    name: 'React Portfolio',
    description: 'React 18 技术栈完整演示，包含 Hooks、状态管理、Next.js 等',
    tech: ['React 18', 'Next.js', 'Zustand', 'TypeScript'],
    url: 'https://kindred-resume-hub.github.io/react-portfolio',
    repo: 'https://github.com/kindred-resume-hub/react-portfolio',
    color: 'blue'
  },
  {
    name: 'Qiankun 微前端',
    description: '基于 Qiankun 的微前端架构，Vue 和 React 子应用共存',
    tech: ['Qiankun', 'Vue 3', 'React 18', '微前端'],
    url: 'https://kindred-resume-hub.github.io/qiankun-main',
    repo: 'https://github.com/kindred-resume-hub/qiankun-main',
    color: 'purple'
  },
  {
    name: 'Electron 桌面端',
    description: 'Electron 跨平台桌面应用演示',
    tech: ['Electron', 'Node.js', 'Vue 3'],
    url: '',
    repo: 'https://github.com/kindred-resume-hub/electron-demo',
    color: 'cyan'
  },
  {
    name: 'Node.js API',
    description: 'Node.js RESTful API 演示，包含认证、数据库等',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    url: '',
    repo: 'https://github.com/kindred-resume-hub/node-api',
    color: 'yellow'
  },
  {
    name: 'Python FastAPI',
    description: 'Python FastAPI 后端 API 演示',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic'],
    url: '',
    repo: 'https://github.com/kindred-resume-hub/python-api',
    color: 'orange'
  },
  {
    name: 'Docker DevOps',
    description: 'Docker 容器化演示，包含多阶段构建、Docker Compose 等',
    tech: ['Docker', 'Docker Compose', 'CI/CD'],
    url: '',
    repo: 'https://github.com/kindred-resume-hub/docker-demo',
    color: 'blue'
  }
])
</script>
