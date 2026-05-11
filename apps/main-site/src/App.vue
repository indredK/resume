<template>
  <div class="min-h-screen bg-slate-900">
    <header class="border-b border-slate-700">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-2xl font-bold text-green-400">
            Portfolio Hub
          </router-link>
          <div class="flex gap-6">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-slate-300 hover:text-green-400 transition-colors"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="border-t border-slate-700 mt-16">
      <div class="container mx-auto px-4 py-8 text-center text-slate-500">
        <p>Portfolio Hub - 个人技术能力展示中心</p>
        <p class="mt-2 text-sm">
          Built with Vue 3 + Vite + TailwindCSS
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ref([
  { name: '首页', path: '/' },
  { name: '技能树', path: '/skills' },
  { name: '项目展示', path: '/projects' },
  { name: '关于我', path: '/about' }
])
</script>
