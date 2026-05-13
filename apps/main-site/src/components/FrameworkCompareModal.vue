<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-overlay" @click.self="$emit('close')">
        <div class="modal-content glass-panel">
          <div class="modal-header">
            <div class="header-title">
              <span class="modal-icon">{{ skill.icon || '⚖️' }}</span>
              <div>
                <h2>{{ skill.name }}</h2>
                <p class="subtitle">技术对比详情</p>
              </div>
            </div>
            <button class="close-btn" @click="$emit('close')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="modal-body-wrapper">
            <aside v-if="tocItems.length > 1" class="modal-toc">
              <div class="toc-title">{{ tocTitle }}</div>
              <nav class="toc-nav">
                <button
                  v-for="item in tocItems"
                  :key="item.id"
                  class="toc-item"
                  :class="{ active: activeTocId === item.id }"
                  @click="scrollToTocItem(item)"
                >
                  <span class="toc-item-icon">{{ item.icon }}</span>
                  <span class="toc-item-name">{{ item.name }}</span>
                </button>
              </nav>
            </aside>

            <div ref="modalBodyRef" class="modal-body custom-scrollbar">
              <div
                v-for="card in comparisonCards"
                :key="card.id"
                :id="`section-${card.id}`"
                class="comparison-section"
                :data-section-id="card.id"
              >
                <div class="card-header" :style="{ borderLeftColor: card.cardColor }">
                  <span class="card-icon">{{ card.icon }}</span>
                  <div class="card-title-area">
                    <h3 class="card-title">{{ card.name }}</h3>
                    <p v-if="card.description" class="card-desc">{{ card.description }}</p>
                  </div>
                </div>

                <div class="comparison-items">
                  <div
                    v-for="item in card.items"
                    :key="item.id"
                    :id="`item-${item.id}`"
                    class="comparison-item"
                    :data-item-id="item.id"
                  >

                    <div v-if="isBuildToolCard(card)" class="build-tool-detail">
                      <div class="tool-badge" :style="{ backgroundColor: item.color + '20', borderColor: item.color }">
                        <span class="tool-color-dot" :style="{ backgroundColor: item.color }"></span>
                        <span class="tool-label">{{ item.name }}</span>
                      </div>

                      <div class="detail-section" v-if="item.advantages?.length">
                        <h4 class="section-title advantage">
                          <span class="section-title-icon">✅</span>
                          优势
                        </h4>
                        <ul class="detail-list">
                          <li v-for="(adv, idx) in item.advantages" :key="idx" class="adv-item">{{ adv }}</li>
                        </ul>
                      </div>

                      <div class="detail-section" v-if="item.disadvantages?.length">
                        <h4 class="section-title disadvantage-title">
                          <span class="section-title-icon">⚠️</span>
                          劣势
                        </h4>
                        <ul class="detail-list disadvantage-list">
                          <li v-for="(dis, idx) in item.disadvantages" :key="idx" class="dis-item">{{ dis }}</li>
                        </ul>
                      </div>
                    </div>

                    <div v-else class="framework-detail">
                      <div class="item-title-row">
                        <span class="item-icon">{{ item.icon || '📊' }}</span>
                        <span class="item-name">{{ item.name }}</span>
                      </div>

                      <div class="framework-compare-grid">
                        <div class="framework-col vue-col" v-if="item.vueItems?.length">
                          <div class="framework-badge vue">
                            <span class="badge-icon">💚</span>
                            <span class="badge-name">Vue</span>
                          </div>
                          <ul class="detail-list">
                            <li v-for="(vueItem, idx) in item.vueItems" :key="idx" class="vue-item">{{ vueItem }}</li>
                          </ul>
                        </div>

                        <div class="framework-col react-col" v-if="item.reactItems?.length">
                          <div class="framework-badge react">
                            <span class="badge-icon">⚛️</span>
                            <span class="badge-name">React</span>
                          </div>
                          <ul class="detail-list">
                            <li v-for="(reactItem, idx) in item.reactItems" :key="idx" class="react-item">{{ reactItem }}</li>
                          </ul>
                        </div>
                      </div>

                      <div class="detail-section" v-if="item.commonItems?.length">
                        <h4 class="section-title common">
                          <span class="section-title-icon">🔗</span>
                          共同优势
                        </h4>
                        <ul class="detail-list common-list">
                          <li v-for="(common, idx) in item.commonItems" :key="idx" class="common-item">{{ common }}</li>
                        </ul>
                      </div>

                      <div class="detail-section" v-if="item.disadvantages?.length">
                        <h4 class="section-title disadvantage-title">
                          <span class="section-title-icon">⚠️</span>
                          各自劣势
                        </h4>
                        <ul class="detail-list disadvantage-list">
                          <li v-for="(dis, idx) in item.disadvantages" :key="idx" class="dis-item">{{ dis }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onUnmounted } from 'vue'
import type { SkillNode } from '../data/types'
import { useEscClose } from '@/composables/useEscClose'
import { lockBodyScroll, unlockBodyScroll } from '@/composables/useScrollLock'

interface SkillData {
  id?: string
  name: string
  icon?: string
  color?: string
  children?: SkillNode[]
  items?: ComparisonItem[]
  description?: string
  cardColor?: string
}

interface ComparisonItem {
  id: string
  name: string
  icon?: string
  level?: number
  color?: string
  vueItems?: string[]
  reactItems?: string[]
  commonItems?: string[]
  advantages?: string[]
  disadvantages?: string[]
}

interface TocEntry {
  id: string
  name: string
  icon?: string
  type: 'section' | 'item'
}

const props = defineProps<{
  visible: boolean
  skill: SkillData
}>()

const emit = defineEmits<{
  close: []
}>()

useEscClose(() => props.visible, () => emit('close'))

const modalBodyRef = ref<HTMLElement | null>(null)
const activeTocId = ref<string | null>(null)
let tocObserver: IntersectionObserver | null = null

const comparisonCards = computed(() => {
  if (!props.skill) return []
  if (props.skill.children?.length) {
    return props.skill.children
  }
  if (props.skill.items?.length) {
    return [props.skill]
  }
  return []
})

const isSingleCard = computed(() => comparisonCards.value.length === 1)

const tocTitle = computed(() => {
  return isSingleCard.value ? '对比维度' : '目录导航'
})

const tocItems = computed<TocEntry[]>(() => {
  if (comparisonCards.value.length > 1) {
    return comparisonCards.value.map((card) => ({
      id: card.id!,
      name: card.name,
      icon: card.icon,
      type: 'section' as const,
    }))
  }
  if (comparisonCards.value.length === 1) {
    const card = comparisonCards.value[0]
    return (card.items || []).map((item: ComparisonItem) => ({
      id: item.id,
      name: item.name,
      icon: item.icon,
      type: 'item' as const,
    }))
  }
  return []
})

const isBuildToolCard = (card: SkillData) => {
  return card.id === 'fe-build-eco'
}

const scrollToTocItem = (toc: TocEntry) => {
  const prefix = toc.type === 'section' ? 'section' : 'item'
  const el = document.getElementById(`${prefix}-${toc.id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const setupScrollSpy = () => {
  const root = modalBodyRef.value
  if (!root) return

  cleanupScrollSpy()

  const observeSelector = isSingleCard.value ? '[data-item-id]' : '[data-section-id]'
  const idAttribute = isSingleCard.value ? 'data-item-id' : 'data-section-id'

  tocObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((e) => e.isIntersecting)
      if (visibleEntries.length === 0) return

      visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      const id = visibleEntries[0].target.getAttribute(idAttribute)
      if (id) {
        activeTocId.value = id
      }
    },
    {
      root,
      rootMargin: '-10% 0px -40% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    },
  )

  const targets = root.querySelectorAll(observeSelector)
  targets.forEach((el) => tocObserver!.observe(el))
}

const cleanupScrollSpy = () => {
  if (tocObserver) {
    tocObserver.disconnect()
    tocObserver = null
  }
  activeTocId.value = null
}

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

watch(
  () => props.visible,
  (isVisible) => {
    if (isVisible) {
      lockBodyScroll()
      if (modalBodyRef.value) {
        modalBodyRef.value.addEventListener('wheel', handleWheel, { passive: false })
      }
      nextTick(() => setupScrollSpy())
    } else {
      unlockBodyScroll()
      cleanupScrollSpy()
      if (modalBodyRef.value) {
        modalBodyRef.value.removeEventListener('wheel', handleWheel)
      }
    }
  },
)

watch(
  comparisonCards,
  () => {
    if (props.visible) {
      nextTick(() => setupScrollSpy())
    }
  },
)

onUnmounted(() => {
  unlockBodyScroll()
  cleanupScrollSpy()
  if (modalBodyRef.value) {
    modalBodyRef.value.removeEventListener('wheel', handleWheel)
  }
})
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4;
}

.modal-content {
  @apply w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-leave-active .modal-content {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.25s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-header {
  @apply flex items-center justify-between p-6 border-b border-white/10;
  flex-shrink: 0;
}

.header-title {
  @apply flex items-center gap-4;
}

.modal-icon {
  @apply text-4xl;
}

.header-title h2 {
  @apply text-2xl font-bold text-white;
}

.subtitle {
  @apply text-sm text-slate-400 mt-1;
}

.close-btn {
  @apply p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors;
}

.modal-body-wrapper {
  @apply flex flex-1 min-h-0;
}

.modal-toc {
  @apply w-12 sm:w-40 md:w-52 lg:w-56 flex-shrink-0 flex flex-col;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  padding: 20px 4px 20px 4px;
}

@media (min-width: 640px) {
  .modal-toc {
    padding: 20px 8px 20px 12px;
  }
}

@media (min-width: 768px) {
  .modal-toc {
    padding: 20px 12px 20px 16px;
  }
}

.toc-title {
  @apply text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3 px-1 sm:px-2;
  @apply text-center sm:text-left;
  @apply hidden sm:block;
}

.toc-nav {
  @apply flex flex-col gap-1 overflow-y-auto flex-1;
}

.toc-item {
  @apply w-full text-left flex items-center gap-2.5 px-2 sm:px-3 py-2.5 rounded-lg text-sm transition-all duration-200;
  @apply text-slate-400 hover:text-white hover:bg-white/5 justify-center sm:justify-start;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  line-height: 1.4;
}

.toc-item.active {
  @apply text-white font-medium;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 3px 0 0 rgba(255, 255, 255, 0.5);
}

.toc-item-icon {
  @apply text-base flex-shrink-0;
  width: 20px;
  text-align: center;
}

.toc-item-name {
  @apply truncate hidden sm:inline;
}

.modal-body {
  @apply flex-1 overflow-y-auto p-4 lg:p-6;
}

.comparison-section {
  @apply mb-8 scroll-mt-4;
}

.comparison-section:last-child {
  @apply mb-0;
}

.card-header {
  @apply flex items-start gap-3 mb-5 pb-3;
  border-left: 3px solid;
  padding-left: 16px;
}

.card-icon {
  @apply text-2xl flex-shrink-0;
}

.card-title-area {
  @apply flex-1;
}

.card-title {
  @apply text-lg font-bold text-white;
}

.card-desc {
  @apply text-xs text-slate-400 mt-1;
}

.comparison-items {
  @apply flex flex-col gap-6;
}

.comparison-item {
  @apply rounded-xl p-5 scroll-mt-4;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

/* Framework comparison */
.item-title-row {
  @apply flex items-center gap-2.5 mb-4 pb-3;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.item-icon {
  @apply text-xl;
}

.item-name {
  @apply text-base font-bold text-white;
}

.framework-compare-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}

.framework-col {
  @apply rounded-lg p-4;
}

.vue-col {
  background: rgba(66, 184, 131, 0.05);
  border: 1px solid rgba(66, 184, 131, 0.2);
}

.react-col {
  background: rgba(97, 218, 251, 0.05);
  border: 1px solid rgba(97, 218, 251, 0.2);
}

.framework-badge {
  @apply flex items-center gap-2 mb-3 pb-2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
  @apply font-bold text-base;
}

/* Build tool detail */
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

/* Detail sections */
.detail-section {
  @apply mt-4;
}

.section-title {
  @apply text-sm font-bold mb-2.5 flex items-center gap-1.5;
}

.section-title.advantage {
  @apply text-emerald-400;
}

.section-title.disadvantage-title {
  @apply text-red-400;
}

.section-title.common {
  @apply text-amber-400;
}

.section-title-icon {
  @apply text-base;
}

.detail-list {
  @apply space-y-1.5;
}

.detail-list li {
  @apply text-[13px] text-slate-300 leading-relaxed pl-4 relative;
}

.detail-list li::before {
  content: '\2022';
  @apply absolute left-0 text-emerald-500 font-bold;
}

.detail-list.disadvantage-list li::before {
  content: '\2212';
  @apply text-red-400;
}

.detail-list.common-list li::before {
  content: '\25C8';
  @apply text-amber-500 text-xs;
}
</style>