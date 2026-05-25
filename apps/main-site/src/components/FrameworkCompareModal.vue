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
                <p class="subtitle">{{ subtitle }}</p>
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
                <template v-for="item in tocItems" :key="item.id">
                  <div v-if="item.type === 'group'" class="toc-group-header">
                    <span class="toc-item-icon">{{ item.icon }}</span>
                    <span class="toc-item-name">{{ item.name }}</span>
                  </div>
                  <button
                    v-else
                    class="toc-item"
                    :class="{ active: activeTocId === item.id, 'toc-subitem': item.type === 'subitem' }"
                    @click="scrollToTocItem(item)"
                  >
                    <span class="toc-item-icon">{{ item.icon }}</span>
                    <span class="toc-item-name">{{ item.name }}</span>
                  </button>
                </template>
              </nav>
            </aside>

            <div ref="modalBodyRef" class="modal-body custom-scrollbar">
              <div
                v-for="card in comparisonCards"
                :id="`section-${card.id}`"
                :key="card.id"
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

                <!-- 技能详情卡片（无对比数据，直接展示 reason/advantages/disadvantages） -->
                <div v-if="isSkillDetailCard(card)" class="skill-detail-card">
                  <div v-if="card.reason" class="reason-box">
                    <p class="reason-text">{{ card.reason }}</p>
                    <div class="reason-meta">
                      <a v-if="card.officialLink" :href="card.officialLink" target="_blank" class="inline-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                          <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        官网
                      </a>
                    </div>
                  </div>

                  <div v-if="card.advantages?.length || card.disadvantages?.length" class="skill-pros-cons-grid">
                    <div v-if="card.advantages?.length" class="skill-col adv-col">
                      <div class="skill-col-badge adv">
                        <span class="badge-icon">✅</span>
                        <span class="badge-name">优势</span>
                      </div>
                      <ul class="detail-list">
                        <li v-for="(adv, idx) in card.advantages" :key="idx" class="adv-item">{{ adv }}</li>
                      </ul>
                    </div>

                    <div v-if="card.disadvantages?.length" class="skill-col dis-col">
                      <div class="skill-col-badge dis">
                        <span class="badge-icon">⚠️</span>
                        <span class="badge-name">劣势</span>
                      </div>
                      <ul class="detail-list disadvantage-list">
                        <li v-for="(dis, idx) in card.disadvantages" :key="idx" class="dis-item">{{ dis }}</li>
                      </ul>
                    </div>
                  </div>

                  <div v-if="card.children?.length" class="detail-section">
                    <h4 class="section-title common">
                      <span class="section-title-icon">📦</span>
                      子技术
                    </h4>
                    <div class="eco-list">
                      <div
                        v-for="child in card.children"
                        :key="child.id"
                        class="eco-item glass-card"
                        @click="handleCardSelect(child)"
                      >
                        <span class="eco-icon">{{ child.icon || '📁' }}</span>
                        <div class="eco-info">
                          <span class="eco-name">{{ child.name }}</span>
                          <div class="eco-meta">
                            <span v-if="child.version" class="eco-ver">{{ child.version }}</span>
                            <span v-if="child.level" class="eco-level">Lv.{{ child.level }}</span>
                          </div>
                        </div>
                        <span class="eco-arrow">↗</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 对比数据卡片 -->
                <div v-else class="comparison-items">
                  <!-- 构建工具：三栏对比表格 -->
                  <div v-if="isBuildToolCard(card)" class="build-tool-compare-table" :data-section-id="card.id">
                    <div class="bt-header-row">
                      <div class="bt-dimension-col"></div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col"
                      >
                        <div class="bt-tool-badge" :style="{ backgroundColor: item.color + '20', borderColor: item.color }">
                          <span class="tool-color-dot" :style="{ backgroundColor: item.color }"></span>
                          <span class="bt-tool-name" :style="{ color: item.color }">{{ item.name }}</span>
                          <span class="bt-tool-level">Lv.{{ item.level }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="bt-row bt-advantages-row">
                      <div class="bt-dimension-col bt-dim-label adv">
                        <span class="bt-dim-icon">✅</span>
                        <span>优势</span>
                      </div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-col-adv"
                        :style="{ borderColor: item.color + '30' }"
                      >
                        <ul class="bt-item-list">
                          <li v-for="(adv, idx) in item.advantages" :key="idx">{{ adv }}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bt-row bt-disadvantages-row">
                      <div class="bt-dimension-col bt-dim-label dis">
                        <span class="bt-dim-icon">⚠️</span>
                        <span>劣势</span>
                      </div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-col-dis"
                        :style="{ borderColor: item.color + '30' }"
                      >
                        <ul class="bt-item-list">
                          <li v-for="(dis, idx) in item.disadvantages" :key="idx">{{ dis }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 框架对比：原有逐项布局 -->
                  <div v-else class="framework-items-wrap">
                    <div
                      v-for="item in card.items"
                      :id="`item-${item.id}`"
                      :key="item.id"
                      class="comparison-item"
                      :data-item-id="item.id"
                    >
                      <div class="framework-detail">
                      <div class="item-title-row">
                        <span class="item-icon">{{ item.icon || '📊' }}</span>
                        <span class="item-name">{{ item.name }}</span>
                      </div>

                      <div class="framework-compare-grid">
                        <div v-if="item.vueItems?.length" class="framework-col vue-col">
                          <div class="framework-badge vue">
                            <span class="badge-icon">💚</span>
                            <span class="badge-name">Vue</span>
                          </div>
                          <ul class="detail-list">
                            <li v-for="(vueItem, idx) in item.vueItems" :key="idx" class="vue-item">{{ vueItem }}</li>
                          </ul>
                        </div>

                        <div v-if="item.reactItems?.length" class="framework-col react-col">
                          <div class="framework-badge react">
                            <span class="badge-icon">⚛️</span>
                            <span class="badge-name">React</span>
                          </div>
                          <ul class="detail-list">
                            <li v-for="(reactItem, idx) in item.reactItems" :key="idx" class="react-item">{{ reactItem }}</li>
                          </ul>
                        </div>
                      </div>

                      <div v-if="item.commonItems?.length" class="detail-section">
                        <h4 class="section-title common">
                          <span class="section-title-icon">🔗</span>
                          共同优势
                        </h4>
                        <ul class="detail-list common-list">
                          <li v-for="(common, idx) in item.commonItems" :key="idx" class="common-item">{{ common }}</li>
                        </ul>
                      </div>

                      <div v-if="item.disadvantages?.length" class="detail-section">
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
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onUnmounted } from 'vue'
import type { SkillNode, ComparisonItem } from '../data/types'
import { useEscClose } from '@/composables/useEscClose'
import { lockBodyScroll, unlockBodyScroll } from '@/composables/useScrollLock'

interface TocItem {
  id: string
  name: string
  icon?: string
  type: 'section' | 'item' | 'group' | 'subitem'
}

const props = defineProps<{
  visible: boolean
  skill: SkillNode
}>()

const emit = defineEmits<{
  close: []
  select: [skill: SkillNode]
}>()

useEscClose(() => props.visible, () => emit('close'))

const modalBodyRef = ref<HTMLElement | null>(null)
const activeTocId = ref<string | null>(null)
let tocObserver: IntersectionObserver | null = null

function collectLeaves(node: SkillNode): SkillNode[] {
  const leaves: SkillNode[] = []
  if (node.children?.length) {
    for (const child of node.children) {
      if (child.children?.length) {
        leaves.push(...collectLeaves(child))
      } else if (child.reason || child.advantages?.length || child.disadvantages?.length) {
        leaves.push(child)
      }
    }
  } else if (node.reason || node.advantages?.length || node.disadvantages?.length) {
    leaves.push(node)
  }
  return leaves
}

const comparisonCards = computed(() => {
  if (!props.skill) return []
  if (props.skill.children?.length && props.skill.children[0]?.items?.length) {
    return props.skill.children
  }
  if (props.skill.items?.length) {
    return [props.skill]
  }
  if (props.skill.children?.length) {
    return collectLeaves(props.skill)
  }
  if (props.skill.reason || props.skill.advantages?.length || props.skill.disadvantages?.length) {
    return [props.skill]
  }
  return []
})

const isSingleCard = computed(() => comparisonCards.value.length === 1)

const isComparisonMode = computed(() => {
  return !!(props.skill.items?.length || (props.skill.children?.length && props.skill.children[0]?.items?.length))
})

const subtitle = computed(() => {
  if (isComparisonMode.value) return '技术对比详情'
  if (props.skill.children?.length && !isSingleCard.value) return '分类技术详情'
  if (props.skill.reason || props.skill.advantages?.length) return '技能详情'
  return '子技术详情'
})

const tocTitle = computed(() => {
  if (isComparisonMode.value && !isSingleCard.value) return '模块导航'
  if (isComparisonMode.value) return '对比维度'
  if (!isSingleCard.value) return '分类导航'
  return '目录'
})

const tocItems = computed<TocItem[]>(() => {
  if (isComparisonMode.value) {
    const singleCard = comparisonCards.value[0]
    if (singleCard && isBuildToolCard(singleCard)) return []
    if (comparisonCards.value.length > 1) {
      return comparisonCards.value.map((card) => ({
        id: card.id,
        name: card.name,
        icon: card.icon,
        type: 'section' as const,
      }))
    }
    const card = comparisonCards.value[0]
    return (card.items || []).map((item: ComparisonItem) => ({
      id: item.id,
      name: item.name,
      icon: item.icon,
      type: 'item' as const,
    }))
  }

  if (props.skill.children?.length && comparisonCards.value.length > 0) {
    const items: TocItem[] = []
    const hasNested = props.skill.children.some(
      (child) => !child.items?.length && child.children?.length,
    )
    for (const child of props.skill.children) {
      if (child.items?.length) continue
      const leaves = collectLeaves(child)
      if (leaves.length === 0) continue
      if (hasNested) {
        items.push({
          id: child.id,
          name: child.name,
          icon: child.icon,
          type: 'group',
        })
        for (const leaf of leaves) {
          items.push({
            id: leaf.id,
            name: leaf.name,
            icon: leaf.icon,
            type: 'subitem',
          })
        }
      } else {
        for (const leaf of leaves) {
          items.push({
            id: leaf.id,
            name: leaf.name,
            icon: leaf.icon,
            type: 'section',
          })
        }
      }
    }
    return items
  }

  return []
})

const isBuildToolCard = (card: SkillNode) => {
  return card.id === 'fe-build-eco'
}

const isSkillDetailCard = (card: SkillNode) => {
  return !card.items?.length && (card.reason || card.advantages?.length || card.disadvantages?.length)
}

const handleCardSelect = (skill: SkillNode) => {
  emit('select', skill)
}

const scrollToTocItem = (toc: TocItem) => {
  if (toc.type === 'group') return
  const prefix = toc.type === 'section' || toc.type === 'subitem' ? 'section' : 'item'
  const el = document.getElementById(`${prefix}-${toc.id}`)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const setupScrollSpy = () => {
  const root = modalBodyRef.value
  if (!root) return

  cleanupScrollSpy()

  const observeSelector = (isSingleCard.value && isComparisonMode.value) ? '[data-item-id]' : '[data-section-id]'
  const idAttribute = (isSingleCard.value && isComparisonMode.value) ? 'data-item-id' : 'data-section-id'

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

.toc-group-header {
  @apply flex items-center gap-2 px-2 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-3 first:mt-0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.toc-subitem {
  @apply pl-6;
  font-size: 11px;
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

/* Skill detail pros/cons grid - 统一样式 */
.skill-pros-cons-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
}

.skill-col {
  @apply rounded-lg p-4;
}

.adv-col {
  background: rgba(52, 211, 153, 0.05);
  border: 1px solid rgba(52, 211, 153, 0.2);
}

.dis-col {
  background: rgba(248, 113, 113, 0.05);
  border: 1px solid rgba(248, 113, 113, 0.2);
}

.skill-col-badge {
  @apply flex items-center gap-2 mb-3 pb-2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.skill-col-badge.adv {
  @apply text-emerald-400;
}

.skill-col-badge.dis {
  @apply text-red-400;
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

/* Build tool comparison table */
.build-tool-compare-table {
  @apply overflow-hidden rounded-xl;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.bt-header-row {
  @apply grid gap-0;
  grid-template-columns: 80px repeat(var(--bt-cols, 3), 1fr);
}

.bt-row {
  @apply grid gap-0 border-t border-white/5;
  grid-template-columns: 80px repeat(var(--bt-cols, 3), 1fr);
}

.bt-dimension-col {
  @apply flex items-center gap-1.5 px-3 py-4 text-sm font-semibold text-slate-400;
  background: rgba(255, 255, 255, 0.03);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}

.bt-dim-label {
  @apply justify-center text-xs uppercase tracking-wider;
}

.bt-dim-label.adv {
  @apply text-emerald-400;
}

.bt-dim-label.dis {
  @apply text-red-400;
}

.bt-dim-icon {
  @apply text-base;
}

.bt-tool-col {
  @apply px-4 py-3 min-w-0;
  border-right: 1px solid rgba(255, 255, 255, 0.04);
}

.bt-tool-col:last-child {
  border-right: none;
}

.bt-tool-badge {
  @apply flex items-center gap-2 px-3 py-2.5 rounded-lg border;
}

.tool-color-dot {
  @apply w-3 h-3 rounded-full flex-shrink-0;
}

.bt-tool-name {
  @apply font-bold text-sm;
}

.bt-tool-level {
  @apply text-[11px] text-slate-500 font-mono ml-auto;
}

.bt-col-adv {
  background: rgba(52, 211, 153, 0.03);
}

.bt-col-dis {
  background: rgba(248, 113, 113, 0.03);
}

.bt-item-list {
  @apply space-y-2;
}

.bt-item-list li {
  @apply text-[12px] text-slate-300 leading-relaxed;
  position: relative;
  padding-left: 14px;
}

.bt-item-list li::before {
  content: '';
  @apply absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full;
  background: currentColor;
  opacity: 0.5;
}

.bt-col-adv .bt-item-list li {
  color: #a7f3d0;
}

.bt-col-adv .bt-item-list li::before {
  background: #34d399;
}

.bt-col-dis .bt-item-list li {
  color: #fca5a5;
}

.bt-col-dis .bt-item-list li::before {
  background: #f87171;
}

@media (max-width: 639px) {
  .build-tool-compare-table {
    --bt-cols: 1;
  }

  .bt-header-row,
  .bt-row {
    grid-template-columns: 80px 1fr;
  }

  .bt-header-row .bt-dimension-col {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .bt-row .bt-dimension-col {
    display: none;
  }

  .bt-row.bt-advantages-row .bt-tool-col {
    border-top: 2px solid rgba(52, 211, 153, 0.3);
  }

  .bt-row.bt-disadvantages-row .bt-tool-col {
    border-top: 2px solid rgba(248, 113, 113, 0.3);
  }

  .bt-col-adv .bt-item-list li::before {
    content: '+';
    @apply rounded-none w-auto h-auto top-[1px];
  }

  .bt-col-dis .bt-item-list li::before {
    content: '−';
    @apply rounded-none w-auto h-auto top-[1px];
  }
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

/* Skill detail card */
.skill-detail-card {
  @apply space-y-4;
}

.skill-detail-card .reason-box {
  @apply p-4 rounded-xl mb-1;
  background: rgba(100, 149, 237, 0.08);
  border: 1px solid rgba(100, 149, 237, 0.15);
}

.reason-text {
  @apply text-[13px] text-slate-300 leading-relaxed;
}

.reason-meta {
  @apply mt-2 pt-2 flex gap-3;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.inline-link {
  @apply inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors;
}

.eco-list {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-2;
}

.eco-item {
  @apply flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.eco-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

.eco-icon {
  @apply text-xl flex-shrink-0;
}

.eco-info {
  @apply flex-1 min-w-0;
}

.eco-name {
  @apply block text-sm font-medium text-white truncate;
}

.eco-meta {
  @apply flex gap-2 mt-0.5;
}

.eco-ver {
  @apply text-[11px] text-slate-500;
}

.eco-level {
  @apply text-[11px] text-emerald-500 font-mono;
}

.eco-arrow {
  @apply text-slate-500 text-lg flex-shrink-0 transition-transform duration-200;
}

.eco-item:hover .eco-arrow {
  @apply text-white;
  transform: translateX(2px);
}

/* Override section-title.common for 子技术 heading */
.section-title.common {
  @apply text-amber-400;
}
</style>