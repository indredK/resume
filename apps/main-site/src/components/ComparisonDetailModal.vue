<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="fixed inset-0 z-[2100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" @click.self="$emit('close')">
        <div class="detail-modal-content glass-panel w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl shadow-2xl border border-white/[0.15]">
          <div class="flex items-center justify-between p-5 border-b border-white/10">
            <div class="flex items-center gap-3">
              <span class="text-3xl">{{ item?.icon || '📊' }}</span>
              <div>
                <h2 class="text-xl font-bold text-white">{{ item?.name }}</h2>
                <p class="text-xs text-slate-400 mt-0.5">{{ card?.name }}</p>
              </div>
            </div>
            <button class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors" @click="$emit('close')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div ref="modalBodyRef" class="custom-scrollbar flex-1 overflow-y-auto p-5">
            <div v-if="isBuildTool" class="space-y-4">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border" :style="{ backgroundColor: item?.color + '20', borderColor: item?.color }">
                <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: item?.color }"></span>
                <span class="text-white font-bold">{{ item?.name }}</span>
              </div>

              <div class="mb-6">
                <h3 class="text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <span class="text-lg">✅</span>
                  优势
                </h3>
                <ul class="space-y-2">
                  <li v-for="(adv, idx) in item?.advantages" :key="idx" class="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                    {{ adv }}
                  </li>
                </ul>
              </div>

              <div v-if="item?.disadvantages?.length" class="mb-6">
                <h3 class="text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                  <span class="text-lg">⚠️</span>
                  劣势
                </h3>
                <ul class="space-y-2">
                  <li v-for="(dis, idx) in item?.disadvantages" :key="idx" class="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-['−'] before:absolute before:left-0 before:text-red-400 before:font-bold">
                    {{ dis }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-else>
              <div class="mb-6">
                <div class="grid grid-cols-2 gap-4">
                  <div class="rounded-lg p-4 bg-[#42b883]/5 border border-[#42b883]/20">
                    <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-[#42b883]">
                      <span class="text-xl">💚</span>
                      <span class="font-bold text-lg">Vue</span>
                    </div>
                    <ul class="space-y-2">
                      <li v-for="(vueItem, idx) in item?.vueItems" :key="idx" class="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                        {{ vueItem }}
                      </li>
                    </ul>
                  </div>

                  <div class="rounded-lg p-4 bg-[#61dafb]/5 border border-[#61dafb]/20">
                    <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/10 text-[#61dafb]">
                      <span class="text-xl">⚛️</span>
                      <span class="font-bold text-lg">React</span>
                    </div>
                    <ul class="space-y-2">
                      <li v-for="(reactItem, idx) in item?.reactItems" :key="idx" class="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                        {{ reactItem }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div v-if="item?.commonItems?.length" class="mb-6">
                <h3 class="text-base font-bold text-amber-400 mb-3 flex items-center gap-2">
                  <span class="text-lg">🔗</span>
                  共同优势
                </h3>
                <ul class="space-y-2">
                  <li v-for="(common, idx) in item?.commonItems" :key="idx" class="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-['◈'] before:absolute before:left-0 before:text-amber-500 before:font-bold">
                    {{ common }}
                  </li>
                </ul>
              </div>

              <div v-if="item?.disadvantages?.length" class="mb-6">
                <h3 class="text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                  <span class="text-lg">⚠️</span>
                  各自劣势
                </h3>
                <ul class="space-y-2">
                  <li v-for="(dis, idx) in item?.disadvantages" :key="idx" class="text-sm text-slate-300 leading-relaxed pl-4 relative before:content-['−'] before:absolute before:left-0 before:text-red-400 before:font-bold">
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
</style>