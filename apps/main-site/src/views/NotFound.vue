<template>
  <main class="min-h-[calc(100vh-61px)] flex flex-col items-center justify-center text-center px-6" style="padding-top: 61px;">
    <div class="text-6xl font-black text-white mb-4">404</div>
    <p class="text-slate-400 mb-6">页面找不到了。</p>
    <RouterLink to="/" class="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold hover:bg-emerald-500/30 transition-colors">
      返回首页
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
