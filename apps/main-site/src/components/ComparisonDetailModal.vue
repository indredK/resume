<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="detail-modal-overlay" @click.self="$emit('close')">
        <div class="detail-modal-content glass-panel">
          <div class="detail-modal-header">
            <div class="header-title">
              <span class="detail-icon">{{ item?.icon || '📊' }}</span>
              <div>
                <h2>{{ item?.name }}</h2>
                <p class="detail-subtitle">{{ card?.name }}</p>
              </div>
            </div>
            <button class="close-btn" @click="$emit('close')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div ref="modalBodyRef" class="detail-modal-body custom-scrollbar">
            <div v-if="isBuildTool" class="build-tool-detail">
              <div class="tool-badge" :style="{ backgroundColor: item?.color + '20', borderColor: item?.color }">
                <span class="tool-color-dot" :style="{ backgroundColor: item?.color }"></span>
                <span class="tool-label">{{ item?.name }}</span>
              </div>

              <div class="detail-section">
                <h3 class="section-title">
                  <span class="section-icon">✅</span>
                  优势
                </h3>
                <ul class="detail-list">
                  <li v-for="(adv, idx) in item?.advantages" :key="idx" class="adv-item">
                    {{ adv }}
                  </li>
                </ul>
              </div>

              <div v-if="item?.disadvantages?.length" class="detail-section">
                <h3 class="section-title disadvantage">
                  <span class="section-icon">⚠️</span>
                  劣势
                </h3>
                <ul class="detail-list disadvantage">
                  <li v-for="(dis, idx) in item?.disadvantages" :key="idx" class="dis-item">
                    {{ dis }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-else class="framework-detail">
              <div class="detail-section">
                <div class="framework-compare-grid">
                  <div class="framework-col vue-col">
                    <div class="framework-badge vue">
                      <span class="badge-icon">💚</span>
                      <span class="badge-name">Vue</span>
                    </div>
                    <ul class="detail-list">
                      <li v-for="(vueItem, idx) in item?.vueItems" :key="idx" class="vue-item">
                        {{ vueItem }}
                      </li>
                    </ul>
                  </div>

                  <div class="framework-col react-col">
                    <div class="framework-badge react">
                      <span class="badge-icon">⚛️</span>
                      <span class="badge-name">React</span>
                    </div>
                    <ul class="detail-list">
                      <li v-for="(reactItem, idx) in item?.reactItems" :key="idx" class="react-item">
                        {{ reactItem }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div v-if="item?.commonItems?.length" class="detail-section">
                <h3 class="section-title common">
                  <span class="section-icon">🔗</span>
                  共同优势
                </h3>
                <ul class="detail-list common">
                  <li v-for="(common, idx) in item?.commonItems" :key="idx" class="common-item">
                    {{ common }}
                  </li>
                </ul>
              </div>

              <div v-if="item?.disadvantages?.length" class="detail-section">
                <h3 class="section-title disadvantage">
                  <span class="section-icon">⚠️</span>
                  各自劣势
                </h3>
                <ul class="detail-list disadvantage">
                  <li v-for="(dis, idx) in item?.disadvantages" :key="idx" class="dis-item">
                    {{ dis }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue'
import type { SkillNode, ComparisonItem } from '../data/types'
import { useEscClose } from '@/composables/useEscClose'
import { lockBodyScroll, unlockBodyScroll } from '@/composables/useScrollLock'

const props = defineProps<{
  visible: boolean
  card: SkillNode | null
  item: ComparisonItem | null
}>()

const emit = defineEmits<{
  close: []
}>()

useEscClose(() => props.visible, () => emit('close'))

const modalBodyRef = ref<HTMLElement | null>(null)

const isBuildTool = computed(() => {
  return props.card?.id === 'fe-build-eco'
})

const handleWheel = (e: WheelEvent) => {
  const el = modalBodyRef.value
  if (!el) return

  const { scrollTop, scrollHeight, clientHeight } = el
  const isScrollingDown = e.deltaY > 0
  const isScrollingUp = e.deltaY < 0

  if (isScrollingDown && scrollTop + clientHeight >= scrollHeight - 1) {
    e.preventDefault()
    el.scrollTop = scrollHeight - clientHeight
  } else if (isScrollingUp && scrollTop <= 0) {
    e.preventDefault()
    el.scrollTop = 0
  }
}

watch(() => props.visible, (isVisible) => {
  if (isVisible) {
    lockBodyScroll()
    if (modalBodyRef.value) {
      modalBodyRef.value.addEventListener('wheel', handleWheel, { passive: false })
    }
  } else {
    unlockBodyScroll()
    if (modalBodyRef.value) {
      modalBodyRef.value.removeEventListener('wheel', handleWheel)
    }
  }
})

onUnmounted(() => {
  unlockBodyScroll()
  if (modalBodyRef.value) {
    modalBodyRef.value.removeEventListener('wheel', handleWheel)
  }
})
</script>

<style scoped>
.detail-modal-overlay {
  @apply fixed inset-0 z-[2100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4;
}

.detail-modal-content {
  @apply w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl shadow-2xl;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.modal-enter-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .detail-modal-content {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.25s ease;
}

.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-leave-active .detail-modal-content {
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.2s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .detail-modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .detail-modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.detail-modal-header {
  @apply flex items-center justify-between p-5 border-b border-white/10;
}

.header-title {
  @apply flex items-center gap-3;
}

.detail-icon {
  @apply text-3xl;
}

.header-title h2 {
  @apply text-xl font-bold text-white;
}

.detail-subtitle {
  @apply text-xs text-slate-400 mt-0.5;
}

.close-btn {
  @apply p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors;
}

.detail-modal-body {
  @apply flex-1 overflow-y-auto p-5;
}

.detail-section {
  @apply mb-6;
}

.section-title {
  @apply text-base font-bold text-emerald-400 mb-3 flex items-center gap-2;
}

.section-title.disadvantage {
  @apply text-red-400;
}

.section-title.common {
  @apply text-amber-400;
}

.section-icon {
  @apply text-lg;
}

.detail-list {
  @apply space-y-2;
}

.detail-list li {
  @apply text-sm text-slate-300 leading-relaxed pl-4 relative;
}

.detail-list li::before {
  content: '•';
  @apply absolute left-0 text-emerald-500 font-bold;
}

.detail-list.disadvantage li::before {
  content: '−';
  @apply text-red-400;
}

.detail-list.common li::before {
  content: '◈';
  @apply text-amber-500;
}

.framework-compare-grid {
  @apply grid grid-cols-2 gap-4;
}

.framework-col {
  @apply rounded-lg p-4;
}

.vue-col {
  @apply bg-[#42b883]/5 border border-[#42b883]/20;
}

.react-col {
  @apply bg-[#61dafb]/5 border border-[#61dafb]/20;
}

.framework-badge {
  @apply flex items-center gap-2 mb-3 pb-2 border-b border-white/10;
}

.framework-badge.vue {
  @apply text-[#42b883];
}

.framework-badge.react {
  @apply text-[#61dafb];
}

.badge-icon {
  @apply text-xl;
}

.badge-name {
  @apply font-bold text-lg;
}

.build-tool-detail {
  @apply space-y-4;
}

.tool-badge {
  @apply inline-flex items-center gap-2 px-4 py-2 rounded-full border;
}

.tool-color-dot {
  @apply w-3 h-3 rounded-full;
}

.tool-label {
  @apply text-white font-bold;
}
</style>