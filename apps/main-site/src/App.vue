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
              class="nav-link"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </nav>
    </header>

    <main class="main-content">
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.main-content {
  height: calc(100vh - 64px);
  overflow-y: auto;
}

.nav-link {
  color: #94a3b8;
  transition: all 0.2s ease;
  padding: 6px 12px;
  border-radius: 6px;
}

.nav-link:hover {
  color: #4ade80;
  background: rgba(74, 222, 128, 0.1);
}

.nav-link.router-link-active {
  color: #4ade80;
  background: rgba(74, 222, 128, 0.15);
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 116, 139, 0.9);
}
</style>
