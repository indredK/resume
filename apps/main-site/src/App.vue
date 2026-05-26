<template>
  <div class="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
    <!-- 背景氛围光 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div class="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-emerald-600/10 rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
    </div>

    <header class="fixed top-0 left-0 right-0 z-[100] glass-panel border-b border-white/5">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-2 group">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span class="text-white font-bold text-sm">P</span>
            </div>
            <span class="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
              Portfolio Hub
            </span>
          </router-link>
          
          <div class="flex items-center gap-4 sm:gap-6">
            <div class="flex items-center gap-1 p-1 bg-white/5 rounded-xl border border-white/5 relative z-[101]">
              <router-link
                v-for="item in navItems"
                :key="item.name"
                :to="item.path"
                class="cursor-pointer px-4 py-2 rounded-lg text-sm font-medium text-slate-400 transition-all duration-300 hover:text-slate-100 hover:bg-white/5 [&.router-link-active]:text-blue-400 [&.router-link-active]:bg-blue-500/10 [&.router-link-active]:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
              >
                {{ item.name }}
              </router-link>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>

    <main class="main-content relative z-0">
      <router-view />
    </main>

    <footer class="relative z-10 border-t border-white/5 bg-black/20 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div class="text-slate-400">
            <p class="font-bold text-slate-200 text-lg mb-2">Portfolio Hub</p>
            <p class="text-sm leading-relaxed">
              Zhong 的个人技术能力展示中心。<br>
              专注 IoT 物联网与高性能 Web 架构设计。
            </p>
          </div>
          <div class="text-slate-400">
            <p class="font-bold text-slate-200 text-sm uppercase tracking-widest mb-4">联系方式</p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-blue-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                {{ CONTACT.phoneDisplay }}
              </li>
              <li class="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-emerald-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {{ CONTACT.email }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col md:items-end gap-4 text-sm text-slate-500">
            <div class="flex gap-4">
              <span>Vue 3</span>
              <span>Vite</span>
              <span>TailwindCSS</span>
            </div>
            <p class="text-xs">© 2026 Zhong Youshen. Built with Passion.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { CONTACT } from '@/data/contact'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const navItems = [
  { name: '简历', path: '/' },
  { name: '技能树', path: '/skills' },
  { name: '成果', path: '/case-studies' },
  { name: '关于我', path: '/about' }
]
</script>

<style>
/* Tailwind v4 兼容: 用 @layer base 包住全局 reset,避免覆盖 utility classes (px-*, py-*, m-* 等).
   v4 把所有 utility 放在 @layer utilities,而 layer 内 CSS 优先级低于 unlayered CSS,
   因此 unlayered 的 * { padding: 0 } 会反向胜过 px-4 py-2 — 必须显式放入 base layer. */
@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    min-height: 100%;
    width: 100%;
    background: #020617;
  }

  html {
    scrollbar-gutter: stable;
  }
}

/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
