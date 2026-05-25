<template>
  <BaseDrawer :visible="visible" @close="$emit('close')">
    <div class="drawer-header">
      <div class="header-info">
        <span class="step-number">{{ approachData.step }}</span>
        <div>
          <h2 class="approach-title">{{ approachData.title }}</h2>
          <p class="module-name">{{ approachData.moduleName }}</p>
        </div>
      </div>
      <button class="close-btn" @click="$emit('close')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div ref="drawerBodyRef" class="drawer-body custom-scrollbar">
      <!-- 需求背景 -->
      <div class="detail-section">
        <h3 class="section-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          需求背景
        </h3>
        <p class="section-content">{{ approachData.requirement }}</p>
      </div>

      <!-- 实现逻辑 -->
      <div class="detail-section">
        <h3 class="section-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
          </svg>
          实现逻辑
        </h3>
        <p class="section-content">{{ approachData.implementation }}</p>
      </div>

      <!-- 技术选型 -->
      <div class="detail-section">
        <h3 class="section-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          技术选型
        </h3>
        <div class="tech-tags">
          <span v-for="tech in approachData.tech" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
        <p class="section-content mt-4">{{ approachData.selectionReason }}</p>
      </div>

      <!-- 方案对比 -->
      <div class="detail-section">
        <h3 class="section-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          方案对比
        </h3>
        <div class="comparison-table">
          <div v-for="(option, idx) in approachData.alternatives" :key="idx" class="comparison-row">
            <div class="option-header">
              <span class="option-name">{{ option.name }}</span>
              <span v-if="option.selected" class="selected-badge">选中方案</span>
            </div>
            <div class="option-pros">
              <span class="pros-label">优势：</span>
              <span>{{ option.pros }}</span>
            </div>
            <div class="option-cons">
              <span class="cons-label">劣势：</span>
              <span>{{ option.cons }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 关键难点 -->
      <div class="detail-section">
        <h3 class="section-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          关键难点与解决方案
        </h3>
        <div class="challenges-list">
          <div v-for="(challenge, idx) in approachData.challenges" :key="idx" class="challenge-item">
            <div class="challenge-title">{{ challenge.problem }}</div>
            <div class="challenge-solution">{{ challenge.solution }}</div>
          </div>
        </div>
      </div>
    </div>
  </BaseDrawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseDrawer from './BaseDrawer.vue'
import { useDrawer } from '@/composables/useDrawer'

interface Challenge {
  problem: string
  solution: string
}

interface AlternativeOption {
  name: string
  pros: string
  cons: string
  selected?: boolean
}

interface ApproachDetail {
  step: number
  title: string
  moduleName: string
  requirement: string
  implementation: string
  tech: string[]
  selectionReason: string
  alternatives: AlternativeOption[]
  challenges: Challenge[]
}

const props = defineProps<{
  visible: boolean
  approachData: ApproachDetail
}>()

defineEmits<{
  close: []
}>()

const drawerBodyRef = ref<HTMLElement | null>(null)
const visibleComputed = computed(() => props.visible)

// 使用抽屉滚动管理 Hook
useDrawer(drawerBodyRef, visibleComputed, {
  step: () => props.approachData.step,
  moduleName: () => props.approachData.moduleName
})
</script>

<style scoped>
.drawer-header {
  @apply p-8 pb-6 flex items-center justify-between border-b border-white/5;
  background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
}

.header-info {
  @apply flex items-center gap-4;
}

.step-number {
  @apply w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-lg;
}

.approach-title {
  @apply text-xl font-bold text-white mb-1;
}

.module-name {
  @apply text-xs text-slate-500 uppercase tracking-wider;
}

.close-btn {
  @apply w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white;
}

.drawer-body {
  @apply flex-1 overflow-y-auto px-8 py-6;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full;
}

.detail-section {
  @apply mb-8;
}

.section-label {
  @apply flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4;
}

.section-content {
  @apply text-sm text-slate-400 leading-relaxed p-4 rounded-xl bg-white/[0.02] border border-white/5;
}

.tech-tags {
  @apply flex flex-wrap gap-2;
}

.tech-tag {
  @apply px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20;
}

.comparison-table {
  @apply space-y-4;
}

.comparison-row {
  @apply p-4 rounded-xl bg-white/[0.02] border border-white/5;
}

.option-header {
  @apply flex items-center justify-between mb-2;
}

.option-name {
  @apply text-sm font-semibold text-white;
}

.selected-badge {
  @apply px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold;
}

.option-pros, .option-cons {
  @apply text-xs text-slate-400 mb-1;
}

.pros-label {
  @apply text-emerald-400 font-medium;
}

.cons-label {
  @apply text-rose-400 font-medium;
}

.challenges-list {
  @apply space-y-3;
}

.challenge-item {
  @apply p-4 rounded-xl bg-white/[0.02] border border-white/5;
}

.challenge-title {
  @apply text-sm font-semibold text-white mb-2;
}

.challenge-solution {
  @apply text-xs text-slate-400 leading-relaxed;
}
</style>