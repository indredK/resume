<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="fixed inset-0 z-[2000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" @click.self="$emit('close')">
        <div ref="modalContentRef" class="modal-content glass-panel w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border border-white/10" tabindex="-1" role="dialog" aria-modal="true">
          <div class="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
            <div class="flex items-center gap-4">
              <span class="text-4xl">{{ skill.icon || '⚖️' }}</span>
              <div>
                <h2 class="text-2xl font-bold text-white">{{ skill.name }}</h2>
                <p class="text-sm text-slate-400 mt-1">{{ subtitle }}</p>
              </div>
            </div>
            <button class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="关闭" @click="$emit('close')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div class="flex flex-1 min-h-0">
            <aside v-if="tocItems.length > 1" class="w-12 sm:w-40 md:w-52 lg:w-56 shrink-0 flex flex-col py-5 px-1 sm:pl-3 sm:pr-2 md:pl-4 md:pr-3 border-r border-white/[0.08]">
              <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3 px-1 sm:px-2 text-center sm:text-left hidden sm:block">{{ tocTitle }}</div>
              <nav class="flex flex-col gap-1 overflow-y-auto flex-1">
                <template v-for="item in tocItems" :key="item.id">
                  <div v-if="item.type === 'group'" class="flex items-center gap-2 px-2 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-3 first:mt-0 border-b border-white/[0.06]">
                    <span class="text-base shrink-0 w-5 text-center">{{ item.icon }}</span>
                    <span class="truncate hidden sm:inline">{{ item.name }}</span>
                  </div>
                  <button
                    v-else
                    class="w-full text-left flex items-center gap-2.5 px-2 sm:px-3 py-2.5 rounded-lg text-sm transition-all duration-200 text-slate-400 hover:text-white hover:bg-white/5 justify-center sm:justify-start border-none bg-transparent cursor-pointer leading-[1.4]"
                    :class="{
                      '!text-white !font-medium !bg-white/[0.08] shadow-[inset_3px_0_0_rgba(255,255,255,0.5)]': activeTocId === item.id,
                      'pl-6 text-[11px]': item.type === 'subitem',
                    }"
                    @click="scrollToTocItem(item)"
                  >
                    <span class="text-base shrink-0 w-5 text-center">{{ item.icon }}</span>
                    <span class="truncate hidden sm:inline">{{ item.name }}</span>
                  </button>
                </template>
              </nav>
            </aside>

            <div ref="modalBodyRef" class="custom-scrollbar flex-1 overflow-y-auto p-4 lg:p-6">
              <div
                v-for="card in comparisonCards"
                :id="`section-${card.id}`"
                :key="card.id"
                class="mb-8 last:mb-0 scroll-mt-4"
                :data-section-id="card.id"
              >
                <div class="flex items-start gap-3 mb-5 pb-3 border-l-[3px] border-solid pl-4" :style="{ borderLeftColor: card.cardColor }">
                  <span class="text-2xl shrink-0">{{ card.icon }}</span>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-white">{{ card.name }}</h3>
                    <p v-if="card.description" class="text-xs text-slate-400 mt-1">{{ card.description }}</p>
                  </div>
                </div>

                <!-- 技能详情卡片（无对比数据，直接展示 reason/advantages/disadvantages） -->
                <div v-if="isSkillDetailCard(card)" class="space-y-4">
                  <div v-if="card.reason" class="p-4 rounded-xl mb-1 bg-[rgba(100,149,237,0.08)] border border-[rgba(100,149,237,0.15)]">
                    <p class="text-[13px] text-slate-300 leading-relaxed">{{ card.reason }}</p>
                    <div class="mt-2 pt-2 flex gap-3 border-t border-white/[0.05]">
                      <a v-if="card.officialLink" :href="card.officialLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-3.5 h-3.5">
                          <circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        官网
                      </a>
                    </div>
                  </div>

                  <div v-if="card.advantages?.length || card.disadvantages?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div v-if="card.advantages?.length" class="rounded-lg p-4 bg-emerald-400/5 border border-emerald-400/20">
                      <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.08] text-emerald-400">
                        <span class="text-xl">✅</span>
                        <span class="font-bold text-base">优势</span>
                      </div>
                      <ul class="space-y-1.5">
                        <li v-for="(adv, idx) in card.advantages" :key="idx" class="text-[13px] text-slate-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">{{ adv }}</li>
                      </ul>
                    </div>

                    <div v-if="card.disadvantages?.length" class="rounded-lg p-4 bg-red-400/5 border border-red-400/20">
                      <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.08] text-red-400">
                        <span class="text-xl">⚠️</span>
                        <span class="font-bold text-base">劣势</span>
                      </div>
                      <ul class="space-y-1.5">
                        <li v-for="(dis, idx) in card.disadvantages" :key="idx" class="text-[13px] text-slate-300 leading-relaxed pl-4 relative before:content-['−'] before:absolute before:left-0 before:text-red-400 before:font-bold">{{ dis }}</li>
                      </ul>
                    </div>
                  </div>

                  <div v-if="card.children?.length" class="mt-4">
                    <h4 class="text-sm font-bold mb-2.5 flex items-center gap-1.5 text-amber-400">
                      <span class="text-base">📦</span>
                      子技术
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <button
                        v-for="child in card.children"
                        :key="child.id"
                        type="button"
                        class="glass-card group w-full text-left flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]"
                        @click="handleCardSelect(child)"
                      >
                        <span class="text-xl shrink-0">{{ child.icon || '📁' }}</span>
                        <div class="flex-1 min-w-0">
                          <span class="block text-sm font-medium text-white truncate">{{ child.name }}</span>
                          <div class="flex gap-2 mt-0.5">
                            <span v-if="child.version" class="text-[11px] text-slate-500">{{ child.version }}</span>
                            <span v-if="child.level" class="text-[11px] text-emerald-500 font-mono">Lv.{{ child.level }}</span>
                          </div>
                        </div>
                        <span class="text-slate-500 text-lg shrink-0 transition-transform duration-200 group-hover:text-white group-hover:translate-x-0.5">↗</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- 对比数据卡片 -->
                <div v-else class="flex flex-col gap-6">
                  <!-- 构建工具：三栏对比表格 -->
                  <div v-if="isBuildToolCard(card)" class="build-tool-compare-table overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02]" :data-section-id="card.id">
                    <div class="bt-header-row">
                      <div class="bt-dimension-col flex items-center gap-1.5 px-3 py-4 text-sm font-semibold text-slate-400 bg-white/[0.03] border-r border-white/[0.06]"></div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col px-4 py-3 min-w-0 border-r border-white/[0.04] last:border-r-0"
                      >
                        <div class="flex items-center gap-2 px-3 py-2.5 rounded-lg border" :style="{ backgroundColor: item.color + '20', borderColor: item.color }">
                          <span class="w-3 h-3 rounded-full shrink-0" :style="{ backgroundColor: item.color }"></span>
                          <span class="font-bold text-sm" :style="{ color: item.color }">{{ item.name }}</span>
                          <span class="text-[11px] text-slate-500 font-mono ml-auto">Lv.{{ item.level }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="bt-row bt-advantages-row">
                      <div class="bt-dimension-col flex items-center justify-center gap-1.5 px-3 py-4 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-white/[0.03] border-r border-white/[0.06]">
                        <span class="text-base">✅</span>
                        <span>优势</span>
                      </div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-col-adv px-4 py-3 min-w-0 border-r border-white/[0.04] last:border-r-0 bg-emerald-400/[0.03]"
                        :style="{ borderColor: item.color + '30' }"
                      >
                        <ul class="bt-item-list space-y-2">
                          <li v-for="(adv, idx) in item.advantages" :key="idx">{{ adv }}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bt-row bt-disadvantages-row">
                      <div class="bt-dimension-col flex items-center justify-center gap-1.5 px-3 py-4 text-xs font-semibold uppercase tracking-wider text-red-400 bg-white/[0.03] border-r border-white/[0.06]">
                        <span class="text-base">⚠️</span>
                        <span>劣势</span>
                      </div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-col-dis px-4 py-3 min-w-0 border-r border-white/[0.04] last:border-r-0 bg-red-400/[0.03]"
                        :style="{ borderColor: item.color + '30' }"
                      >
                        <ul class="bt-item-list space-y-2">
                          <li v-for="(dis, idx) in item.disadvantages" :key="idx">{{ dis }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- 框架对比：原有逐项布局 -->
                  <div v-else>
                    <div
                      v-for="item in card.items"
                      :id="`item-${item.id}`"
                      :key="item.id"
                      class="rounded-xl p-5 scroll-mt-4 bg-white/[0.03] border border-white/[0.06]"
                      :data-item-id="item.id"
                    >
                      <div class="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/[0.06]">
                        <span class="text-xl">{{ item.icon || '📊' }}</span>
                        <span class="text-base font-bold text-white">{{ item.name }}</span>
                      </div>

                      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div v-if="item.vueItems?.length" class="rounded-lg p-4 bg-[#42b883]/5 border border-[#42b883]/20">
                          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.08] text-[#42b883]">
                            <span class="text-xl">💚</span>
                            <span class="font-bold text-base">Vue</span>
                          </div>
                          <ul class="space-y-1.5">
                            <li v-for="(vueItem, idx) in item.vueItems" :key="idx" class="text-[13px] text-slate-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">{{ vueItem }}</li>
                          </ul>
                        </div>

                        <div v-if="item.reactItems?.length" class="rounded-lg p-4 bg-[#61dafb]/5 border border-[#61dafb]/20">
                          <div class="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.08] text-[#61dafb]">
                            <span class="text-xl">⚛️</span>
                            <span class="font-bold text-base">React</span>
                          </div>
                          <ul class="space-y-1.5">
                            <li v-for="(reactItem, idx) in item.reactItems" :key="idx" class="text-[13px] text-slate-300 leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">{{ reactItem }}</li>
                          </ul>
                        </div>
                      </div>

                      <div v-if="item.commonItems?.length" class="mt-4">
                        <h4 class="text-sm font-bold mb-2.5 flex items-center gap-1.5 text-amber-400">
                          <span class="text-base">🔗</span>
                          共同优势
                        </h4>
                        <ul class="space-y-1.5">
                          <li v-for="(common, idx) in item.commonItems" :key="idx" class="text-[13px] text-slate-300 leading-relaxed pl-4 relative before:content-['◈'] before:absolute before:left-0 before:text-xs before:text-amber-500 before:font-bold">{{ common }}</li>
                        </ul>
                      </div>

                      <div v-if="item.disadvantages?.length" class="mt-4">
                        <h4 class="text-sm font-bold mb-2.5 flex items-center gap-1.5 text-red-400">
                          <span class="text-base">⚠️</span>
                          各自劣势
                        </h4>
                        <ul class="space-y-1.5">
                          <li v-for="(dis, idx) in item.disadvantages" :key="idx" class="text-[13px] text-slate-300 leading-relaxed pl-4 relative before:content-['−'] before:absolute before:left-0 before:text-red-400 before:font-bold">{{ dis }}</li>
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
import type { SkillNode, ComparisonItem } from '../data/types'
import { isGroupNode, isComparisonNode, isLeafContent } from '../data/types'
import { useEscClose } from '@/composables/useEscClose'
import { useDrawer } from '@/composables/useDrawer'
import { useFocusTrap } from '@/composables/useFocusTrap'

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
const modalContentRef = ref<HTMLElement | null>(null)
const activeTocId = ref<string | null>(null)
let tocObserver: IntersectionObserver | null = null

function collectLeaves(node: SkillNode): SkillNode[] {
  const leaves: SkillNode[] = []
  if (node.children?.length) {
    for (const child of node.children) {
      if (child.children?.length) {
        leaves.push(...collectLeaves(child))
      } else if (isLeafContent(child)) {
        leaves.push(child)
      }
    }
  } else if (isLeafContent(node)) {
    leaves.push(node)
  }
  return leaves
}

const comparisonCards = computed(() => {
  if (!props.skill) return []
  if (props.skill.children?.length && isComparisonNode(props.skill.children[0])) {
    return props.skill.children
  }
  if (isComparisonNode(props.skill)) {
    return [props.skill]
  }
  if (isGroupNode(props.skill)) {
    return collectLeaves(props.skill)
  }
  if (isLeafContent(props.skill)) {
    return [props.skill]
  }
  return []
})

const isSingleCard = computed(() => comparisonCards.value.length === 1)

const isComparisonMode = computed(() => {
  return isComparisonNode(props.skill) || !!(props.skill.children?.length && isComparisonNode(props.skill.children[0]))
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
  return !isComparisonNode(card) && isLeafContent(card)
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

// 滚动锁 + wheel 防穿透 + 卸载清理 全部委托 useDrawer
useDrawer(modalBodyRef, computed(() => props.visible))
useFocusTrap(modalContentRef, computed(() => props.visible))

watch(
  () => props.visible,
  (isVisible) => {
    if (isVisible) {
      nextTick(() => setupScrollSpy())
    } else {
      cleanupScrollSpy()
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
  cleanupScrollSpy()
})
</script>

<style scoped>
/* Modal transitions */
.modal-enter-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .modal-content {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-leave-active .modal-content {
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.6, 1),
    opacity 0.25s ease;
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

/* Build tool compare table - uses CSS Grid with dynamic var(--bt-cols) and @media overrides */
.bt-header-row,
.bt-row {
  display: grid;
  gap: 0;
  grid-template-columns: 80px repeat(var(--bt-cols, 3), 1fr);
}

.bt-row {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* Build tool item list - cascading color from .bt-col-adv / .bt-col-dis parent */
.bt-item-list li {
  font-size: 12px;
  color: rgb(203 213 225);
  line-height: 1.625;
  position: relative;
  padding-left: 14px;
}

.bt-item-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
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
    border-radius: 0;
    width: auto;
    height: auto;
    top: 1px;
  }

  .bt-col-dis .bt-item-list li::before {
    content: '−';
    border-radius: 0;
    width: auto;
    height: auto;
    top: 1px;
  }
}
</style>
