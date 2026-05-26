<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="visible" class="modal-overlay" @click.self="$emit('close')">
        <div
          ref="modalContentRef"
          class="modal-content"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
        >
          <!-- ============================================================
           * Header
           * ============================================================ -->
          <header class="modal-head">
            <div class="head-left">
              <span class="head-glyph" aria-hidden="true">{{ skill.icon || '◇' }}</span>
              <div class="head-titles">
                <h2 class="head-title font-display">{{ skill.name }}</h2>
                <p class="head-sub font-mono">{{ subtitle }}</p>
              </div>
            </div>
            <button class="close-btn" aria-label="关闭" @click="$emit('close')">
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div class="modal-body-wrap">
            <!-- ============================================================
             * Side TOC
             * ============================================================ -->
            <aside v-if="tocItems.length > 1" class="modal-toc">
              <div class="toc-label font-mono">{{ tocTitle }}</div>
              <nav class="toc-nav scrollbar-hide">
                <template v-for="item in tocItems" :key="item.id">
                  <div v-if="item.type === 'group'" class="toc-group font-mono">
                    <span class="toc-group-icon" aria-hidden="true">{{ item.icon }}</span>
                    <span class="toc-group-name">{{ item.name }}</span>
                  </div>
                  <button
                    v-else
                    type="button"
                    class="toc-item"
                    :class="{
                      'is-active': activeTocId === item.id,
                      'is-subitem': item.type === 'subitem',
                    }"
                    @click="scrollToTocItem(item)"
                  >
                    <span class="toc-item-icon" aria-hidden="true">{{ item.icon }}</span>
                    <span class="toc-item-name">{{ item.name }}</span>
                  </button>
                </template>
              </nav>
            </aside>

            <!-- ============================================================
             * Scrollable content
             * ============================================================ -->
            <div ref="modalBodyRef" class="modal-body">
              <article
                v-for="card in comparisonCards"
                :id="`section-${card.id}`"
                :key="card.id"
                class="card-block"
                :data-section-id="card.id"
              >
                <header class="card-head" :style="card.cardColor ? { '--card-color': card.cardColor } : {}">
                  <span class="card-glyph" aria-hidden="true">{{ card.icon || '◆' }}</span>
                  <div class="card-titles">
                    <h3 class="card-title font-display">{{ card.name }}</h3>
                    <p v-if="card.description" class="card-desc">{{ card.description }}</p>
                  </div>
                </header>

                <!-- Skill detail (no comparison data) -->
                <div v-if="isSkillDetailCard(card)" class="detail-stack">
                  <div v-if="card.reason" class="reason-panel">
                    <p class="reason-text">{{ card.reason }}</p>
                    <div v-if="card.officialLink" class="reason-links">
                      <a :href="card.officialLink" target="_blank" rel="noopener noreferrer" class="reason-link font-mono">
                        <span class="link-glyph" aria-hidden="true">↗</span>
                        官网
                      </a>
                    </div>
                  </div>

                  <div v-if="card.advantages?.length || card.disadvantages?.length" class="pro-con-grid">
                    <div v-if="card.advantages?.length" class="pro-con-panel pro-panel">
                      <header class="pc-head font-mono">
                        <span class="pc-icon" aria-hidden="true">+</span>
                        <span>优势</span>
                      </header>
                      <ul class="pc-list">
                        <li v-for="(adv, idx) in card.advantages" :key="idx" class="pc-item">{{ adv }}</li>
                      </ul>
                    </div>

                    <div v-if="card.disadvantages?.length" class="pro-con-panel con-panel">
                      <header class="pc-head font-mono">
                        <span class="pc-icon" aria-hidden="true">−</span>
                        <span>劣势</span>
                      </header>
                      <ul class="pc-list">
                        <li v-for="(dis, idx) in card.disadvantages" :key="idx" class="pc-item">{{ dis }}</li>
                      </ul>
                    </div>
                  </div>

                  <div v-if="card.children?.length" class="children-block">
                    <h4 class="children-title font-mono">
                      <span aria-hidden="true">▸</span>
                      子技术
                    </h4>
                    <div class="children-grid">
                      <button
                        v-for="child in card.children"
                        :key="child.id"
                        type="button"
                        class="child-card"
                        @click="handleCardSelect(child)"
                      >
                        <span class="child-glyph" aria-hidden="true">{{ child.icon || '◇' }}</span>
                        <div class="child-meta">
                          <span class="child-name">{{ child.name }}</span>
                          <div class="child-tags">
                            <span v-if="child.version" class="child-version font-mono">{{ child.version }}</span>
                            <span v-if="child.level" class="child-level font-mono">Lv.{{ child.level }}</span>
                          </div>
                        </div>
                        <span class="child-arrow" aria-hidden="true">→</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Comparison cards -->
                <div v-else class="compare-stack">
                  <!-- Build tool 3-col table -->
                  <div
                    v-if="isBuildToolCard(card)"
                    class="bt-table"
                    :data-section-id="card.id"
                    :style="{ '--bt-cols': card.items?.length || 3 }"
                  >
                    <div class="bt-header-row">
                      <div class="bt-dimension-col"></div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-tool-header"
                        :style="{ '--tool-color': item.color }"
                      >
                        <div class="bt-tool-card">
                          <span class="bt-dot" aria-hidden="true"></span>
                          <span class="bt-name font-mono">{{ item.name }}</span>
                          <span class="bt-level font-mono">Lv.{{ item.level }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="bt-row bt-advantages-row">
                      <div class="bt-dimension-col bt-dim-pro font-mono">
                        <span class="bt-dim-icon" aria-hidden="true">+</span>
                        <span>优势</span>
                      </div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-col-adv"
                        :style="{ '--tool-color': item.color }"
                      >
                        <ul class="bt-item-list">
                          <li v-for="(adv, idx) in item.advantages" :key="idx">{{ adv }}</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bt-row bt-disadvantages-row">
                      <div class="bt-dimension-col bt-dim-con font-mono">
                        <span class="bt-dim-icon" aria-hidden="true">−</span>
                        <span>劣势</span>
                      </div>
                      <div
                        v-for="item in card.items"
                        :key="item.id"
                        class="bt-tool-col bt-col-dis"
                        :style="{ '--tool-color': item.color }"
                      >
                        <ul class="bt-item-list">
                          <li v-for="(dis, idx) in item.disadvantages" :key="idx">{{ dis }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Framework comparison (per-item layout) -->
                  <div v-else class="cmp-items">
                    <article
                      v-for="item in card.items"
                      :id="`item-${item.id}`"
                      :key="item.id"
                      class="cmp-item"
                      :data-item-id="item.id"
                    >
                      <header class="cmp-item-head">
                        <span class="cmp-item-glyph" aria-hidden="true">{{ item.icon || '◆' }}</span>
                        <span class="cmp-item-name font-display">{{ item.name }}</span>
                      </header>

                      <div class="cmp-grid">
                        <div v-if="item.vueItems?.length" class="cmp-side cmp-vue">
                          <header class="cmp-side-head font-mono">
                            <span class="cmp-side-glyph" aria-hidden="true">▸</span>
                            <span>Vue</span>
                          </header>
                          <ul class="cmp-list">
                            <li v-for="(v, idx) in item.vueItems" :key="idx">{{ v }}</li>
                          </ul>
                        </div>

                        <div v-if="item.reactItems?.length" class="cmp-side cmp-react">
                          <header class="cmp-side-head font-mono">
                            <span class="cmp-side-glyph" aria-hidden="true">▸</span>
                            <span>React</span>
                          </header>
                          <ul class="cmp-list">
                            <li v-for="(r, idx) in item.reactItems" :key="idx">{{ r }}</li>
                          </ul>
                        </div>
                      </div>

                      <div v-if="item.commonItems?.length" class="cmp-subblock">
                        <h5 class="cmp-subhead font-mono">
                          <span aria-hidden="true">◇</span>
                          共同优势
                        </h5>
                        <ul class="cmp-list cmp-list-common">
                          <li v-for="(c, idx) in item.commonItems" :key="idx">{{ c }}</li>
                        </ul>
                      </div>

                      <div v-if="item.disadvantages?.length" class="cmp-subblock">
                        <h5 class="cmp-subhead cmp-subhead-con font-mono">
                          <span aria-hidden="true">−</span>
                          各自劣势
                        </h5>
                        <ul class="cmp-list">
                          <li v-for="(d, idx) in item.disadvantages" :key="idx">{{ d }}</li>
                        </ul>
                      </div>
                    </article>
                  </div>
                </div>
              </article>
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
/* ============================================================
 * Overlay + container
 * ============================================================ */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: color-mix(in srgb, var(--ink) 70%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.modal-content {
  width: 100%;
  max-width: 64rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: 0 32px 64px -16px color-mix(in srgb, var(--ink) 40%, transparent);
  color: var(--ink);
  overflow: hidden;
}

/* ============================================================
 * Modal header
 * ============================================================ */
.modal-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  border-bottom: 1px solid var(--border-soft);
  flex-shrink: 0;
}

.head-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.head-glyph {
  font-size: 1.75rem;
  line-height: 1;
  color: var(--accent);
  flex-shrink: 0;
}

.head-title {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.2;
}

.head-sub {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
  margin-top: 0.3rem;
}

.close-btn {
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
}

.close-btn:hover {
  color: var(--ink);
  border-color: var(--ink);
  background: var(--surface-elev);
}

/* ============================================================
 * Layout: TOC + body
 * ============================================================ */
.modal-body-wrap {
  display: flex;
  flex: 1;
  min-height: 0;
}

.modal-toc {
  width: 3rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0.25rem;
  border-right: 1px solid var(--border-soft);
}

@media (min-width: 640px) {
  .modal-toc {
    width: 13rem;
    padding: 1.25rem 0.75rem;
  }
}

.toc-label {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--muted);
  padding: 0 0.5rem;
  margin-bottom: 0.75rem;
  text-align: center;
  display: none;
}

@media (min-width: 640px) {
  .toc-label {
    display: block;
    text-align: left;
  }
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  overflow-y: auto;
  flex: 1;
}

.toc-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.5rem 0.4rem;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--muted);
  border-bottom: 1px dashed var(--border-soft);
  margin-top: 0.5rem;
}

.toc-group:first-child {
  margin-top: 0;
}

.toc-group-icon {
  flex-shrink: 0;
  width: 1rem;
  text-align: center;
}

.toc-group-name {
  display: none;
}

@media (min-width: 640px) {
  .toc-group-name {
    display: inline;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.toc-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-family: inherit;
  font-size: 0.78rem;
  color: var(--muted);
  background: transparent;
  border: 0;
  border-radius: var(--radius);
  cursor: pointer;
  text-align: center;
  transition: color 0.15s ease, background-color 0.15s ease, padding-left 0.2s ease;
  justify-content: center;
}

@media (min-width: 640px) {
  .toc-item {
    text-align: left;
    justify-content: flex-start;
    padding: 0.55rem 0.65rem;
  }
}

.toc-item:hover {
  color: var(--ink);
  background: var(--surface-elev);
}

.toc-item.is-active {
  color: var(--ink);
  background: var(--surface-elev);
  box-shadow: inset 2px 0 0 var(--accent);
  font-weight: 600;
}

.toc-item.is-subitem {
  padding-left: 1.25rem;
  font-size: 0.72rem;
}

.toc-item-icon {
  flex-shrink: 0;
  width: 1rem;
  text-align: center;
}

.toc-item-name {
  display: none;
}

@media (min-width: 640px) {
  .toc-item-name {
    display: inline;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

/* ============================================================
 * Scrollable body
 * ============================================================ */
.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1.25rem 2rem;
}

@media (min-width: 1024px) {
  .modal-body {
    padding: 1.75rem 1.5rem 2.5rem;
  }
}

/* ============================================================
 * Card block (each comparison or detail card)
 * ============================================================ */
.card-block {
  margin-bottom: 2rem;
  scroll-margin-top: 1rem;
}

.card-block:last-child {
  margin-bottom: 0;
}

.card-head {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding-left: 1rem;
  margin-bottom: 1.25rem;
  border-left: 3px solid var(--card-color, var(--accent));
  min-height: 2.25rem;
}

.card-glyph {
  font-size: 1.4rem;
  line-height: 1;
  flex-shrink: 0;
  color: var(--card-color, var(--accent));
}

.card-titles {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.card-desc {
  font-size: 0.74rem;
  color: var(--muted);
  margin-top: 0.25rem;
  line-height: 1.5;
}

/* ============================================================
 * Detail stack (skill detail cards)
 * ============================================================ */
.detail-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.reason-panel {
  padding: 1rem 1.15rem;
  background: var(--surface-elev);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
}

.reason-text {
  font-size: 0.84rem;
  line-height: 1.75;
  color: var(--ink);
}

.reason-links {
  margin-top: 0.75rem;
  padding-top: 0.7rem;
  border-top: 1px dashed var(--border-soft);
  display: flex;
  gap: 1rem;
}

.reason-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.7rem;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.15s ease, gap 0.15s ease;
}

.reason-link:hover {
  gap: 0.55rem;
  color: color-mix(in srgb, var(--accent) 70%, var(--ink));
}

.link-glyph {
  font-size: 0.78rem;
}

/* ============================================================
 * Pro/Con grid
 * ============================================================ */
.pro-con-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .pro-con-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.pro-con-panel {
  padding: 1rem 1.15rem;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--surface);
}

.pro-panel {
  border-left: 2px solid var(--success);
}

.con-panel {
  border-left: 2px solid var(--danger);
}

.pc-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px dashed var(--border-soft);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.pro-panel .pc-head { color: var(--success); }
.con-panel .pc-head { color: var(--danger); }

.pc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  font-size: 0.95rem;
  font-weight: 700;
}

.pc-list {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.pc-item {
  position: relative;
  padding-left: 1rem;
  font-size: 0.78rem;
  line-height: 1.7;
  color: var(--ink);
}

.pc-item::before {
  content: '·';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--muted);
  font-weight: 700;
}

.pro-panel .pc-item::before { color: var(--success); content: '+'; }
.con-panel .pc-item::before { color: var(--danger); content: '−'; }

/* ============================================================
 * Children grid (sub-skill cards)
 * ============================================================ */
.children-block {
  margin-top: 0.5rem;
}

.children-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
  margin-bottom: 0.7rem;
}

.children-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .children-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.child-card {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.75rem 0.85rem;
  background: var(--surface-elev);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  font-family: inherit;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.15s ease, background-color 0.15s ease, padding-left 0.2s ease;
}

.child-card:hover {
  border-color: var(--ink);
  padding-left: 1rem;
}

.child-glyph {
  font-size: 1.1rem;
  flex-shrink: 0;
  color: var(--accent);
}

.child-meta {
  flex: 1;
  min-width: 0;
}

.child-name {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.child-tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.15rem;
}

.child-version {
  font-size: 0.66rem;
  color: var(--faint);
}

.child-level {
  font-size: 0.66rem;
  color: var(--success);
  font-weight: 600;
}

.child-arrow {
  font-size: 0.95rem;
  color: var(--faint);
  flex-shrink: 0;
  transition: color 0.15s ease, transform 0.2s ease;
}

.child-card:hover .child-arrow {
  color: var(--accent);
  transform: translateX(3px);
}

/* ============================================================
 * Build tool table (3-col grid)
 * ============================================================ */
.bt-table {
  overflow: hidden;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--surface);
}

.bt-header-row,
.bt-row {
  display: grid;
  grid-template-columns: 5rem repeat(var(--bt-cols, 3), 1fr);
}

.bt-row {
  border-top: 1px solid var(--border-soft);
}

.bt-dimension-col {
  padding: 1rem 0.75rem;
  background: var(--surface-elev);
  border-right: 1px solid var(--border-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
}

.bt-dim-pro { color: var(--success); }
.bt-dim-con { color: var(--danger); }

.bt-dim-icon {
  font-size: 0.95rem;
}

.bt-tool-col {
  padding: 0.85rem;
  border-right: 1px solid var(--border-soft);
  min-width: 0;
}

.bt-tool-col:last-child {
  border-right: 0;
}

.bt-tool-header {
  padding: 0.85rem;
}

.bt-tool-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.65rem;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  background: var(--surface-elev);
}

.bt-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--accent);
}

.bt-name {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--ink);
  flex: 1;
}

.bt-level {
  font-size: 0.66rem;
  color: var(--muted);
}

.bt-col-adv { background: color-mix(in srgb, var(--success) 4%, transparent); }
.bt-col-dis { background: color-mix(in srgb, var(--danger) 4%, transparent); }

.bt-item-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.bt-item-list li {
  position: relative;
  padding-left: 0.85rem;
  font-size: 0.74rem;
  line-height: 1.65;
  color: var(--ink);
}

.bt-item-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
}

.bt-col-adv .bt-item-list li::before { background: var(--success); }
.bt-col-dis .bt-item-list li::before { background: var(--danger); }

@media (max-width: 639px) {
  /* Comparison table can't usefully reflow 3+ tool columns into a phone
     width without losing the row alignment that makes it readable, so we
     keep the full grid and let it scroll horizontally instead. */
  .bt-table {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .bt-header-row,
  .bt-row {
    grid-template-columns: 4.5rem repeat(var(--bt-cols, 3), minmax(10rem, 1fr));
    min-width: 38rem;
  }
}

/* ============================================================
 * Framework comparison (Vue vs React etc.)
 * ============================================================ */
.cmp-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cmp-item {
  padding: 1.25rem;
  background: var(--surface-elev);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  scroll-margin-top: 1rem;
}

.cmp-item-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  padding-bottom: 0.7rem;
  border-bottom: 1px solid var(--border-soft);
}

.cmp-item-glyph {
  font-size: 1.2rem;
  color: var(--accent);
}

.cmp-item-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
}

.cmp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .cmp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.cmp-side {
  padding: 0.85rem 1rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
}

.cmp-vue { border-left: 2px solid var(--success); }
.cmp-react { border-left: 2px solid var(--accent); }

.cmp-side-head {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.45rem;
  border-bottom: 1px dashed var(--border-soft);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.cmp-vue .cmp-side-head { color: var(--success); }
.cmp-react .cmp-side-head { color: var(--accent); }

.cmp-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.cmp-list li {
  position: relative;
  padding-left: 1rem;
  font-size: 0.78rem;
  line-height: 1.65;
  color: var(--ink);
}

.cmp-list li::before {
  content: '·';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--muted);
}

.cmp-vue .cmp-list li::before { color: var(--success); content: '+'; }
.cmp-react .cmp-list li::before { color: var(--accent); content: '+'; }

.cmp-list-common li::before {
  color: var(--warning, var(--accent));
  content: '◇';
}

.cmp-subblock {
  margin-top: 1rem;
}

.cmp-subhead {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--warning, var(--accent));
  margin-bottom: 0.5rem;
}

.cmp-subhead-con {
  color: var(--danger);
}

.cmp-subhead-con + .cmp-list li::before {
  color: var(--danger);
  content: '−';
}

/* ============================================================
 * Modal transitions
 * ============================================================ */
.modal-enter-active { transition: opacity 0.3s ease; }
.modal-enter-active .modal-content {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s ease;
}

.modal-leave-active { transition: opacity 0.25s ease; }
.modal-leave-active .modal-content {
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.6, 1),
    opacity 0.25s ease;
}

.modal-enter-from { opacity: 0; }
.modal-enter-from .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-leave-to { opacity: 0; }
.modal-leave-to .modal-content {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides
 * ============================================================ */

/* ---- Brutal: monochrome ink, no blur, hard corners ---- */
:root[data-theme="brutal"] .modal-overlay {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: color-mix(in srgb, var(--ink) 85%, transparent);
}

:root[data-theme="brutal"] .modal-content {
  border: 2px solid var(--ink);
  box-shadow: 8px 8px 0 0 var(--accent);
}

:root[data-theme="brutal"] .modal-head {
  border-bottom: 2px solid var(--ink);
}

:root[data-theme="brutal"] .head-glyph,
:root[data-theme="brutal"] .card-glyph {
  color: var(--ink);
}

:root[data-theme="brutal"] .card-head {
  border-left-color: var(--ink);
  border-left-width: 4px;
}

:root[data-theme="brutal"] .pro-panel,
:root[data-theme="brutal"] .con-panel,
:root[data-theme="brutal"] .reason-panel,
:root[data-theme="brutal"] .cmp-item,
:root[data-theme="brutal"] .cmp-side,
:root[data-theme="brutal"] .bt-table,
:root[data-theme="brutal"] .bt-tool-card,
:root[data-theme="brutal"] .child-card {
  background: transparent;
  border-color: var(--border);
}

:root[data-theme="brutal"] .pro-panel,
:root[data-theme="brutal"] .cmp-vue { border-left-color: var(--ink); }
:root[data-theme="brutal"] .con-panel,
:root[data-theme="brutal"] .cmp-react { border-left-color: var(--ink); }

:root[data-theme="brutal"] .pro-panel .pc-head,
:root[data-theme="brutal"] .con-panel .pc-head,
:root[data-theme="brutal"] .cmp-vue .cmp-side-head,
:root[data-theme="brutal"] .cmp-react .cmp-side-head,
:root[data-theme="brutal"] .bt-dim-pro,
:root[data-theme="brutal"] .bt-dim-con,
:root[data-theme="brutal"] .children-title {
  color: var(--ink);
}

:root[data-theme="brutal"] .pro-panel .pc-item::before,
:root[data-theme="brutal"] .con-panel .pc-item::before,
:root[data-theme="brutal"] .bt-col-adv .bt-item-list li::before,
:root[data-theme="brutal"] .bt-col-dis .bt-item-list li::before {
  background: var(--ink);
  color: var(--ink);
}

:root[data-theme="brutal"] .toc-item.is-active {
  box-shadow: inset 3px 0 0 var(--ink);
}

/* ---- Mag + Indust: opt INTO per-tool brand color expression.
       Swiss + Brutal stay monochrome by default. ---- */
:root[data-theme="mag"] .bt-tool-card,
:root[data-theme="indust"] .bt-tool-card {
  border-color: color-mix(in srgb, var(--tool-color, var(--accent)) 45%, var(--border-soft));
  background: color-mix(in srgb, var(--tool-color, var(--accent)) 10%, var(--surface));
}

:root[data-theme="mag"] .bt-dot,
:root[data-theme="indust"] .bt-dot {
  background: var(--tool-color, var(--accent));
}

:root[data-theme="mag"] .bt-name,
:root[data-theme="indust"] .bt-name {
  color: var(--tool-color, var(--ink));
}

/* ---- Mag: italic display, jewel pop ---- */
:root[data-theme="mag"] .modal-content {
  border-color: color-mix(in srgb, var(--accent) 25%, var(--border));
}

:root[data-theme="mag"] .head-title,
:root[data-theme="mag"] .card-title,
:root[data-theme="mag"] .cmp-item-name {
  font-style: italic;
}

:root[data-theme="mag"] .head-glyph {
  color: var(--accent);
}

:root[data-theme="mag"] .pro-panel { border-left-color: var(--accent-mag-3, var(--success)); }
:root[data-theme="mag"] .pro-panel .pc-head { color: var(--accent-mag-3, var(--success)); }
:root[data-theme="mag"] .pro-panel .pc-item::before { color: var(--accent-mag-3, var(--success)); }

:root[data-theme="mag"] .cmp-vue { border-left-color: var(--accent-mag-3, var(--success)); }
:root[data-theme="mag"] .cmp-vue .cmp-side-head { color: var(--accent-mag-3, var(--success)); }
:root[data-theme="mag"] .cmp-vue .cmp-list li::before { color: var(--accent-mag-3, var(--success)); }

/* ---- Indust: neon accents, glow, uppercase ---- */
:root[data-theme="indust"] .modal-content {
  border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
  box-shadow:
    0 0 0 1px color-mix(in srgb, var(--accent) 20%, transparent),
    0 32px 64px -16px color-mix(in srgb, var(--ink) 60%, transparent);
}

:root[data-theme="indust"] .head-title {
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-size: 1.3rem;
}

:root[data-theme="indust"] .card-title {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

:root[data-theme="indust"] .head-glyph {
  text-shadow: 0 0 12px color-mix(in srgb, var(--accent) 60%, transparent);
}

:root[data-theme="indust"] .bt-dot {
  box-shadow: 0 0 8px color-mix(in srgb, var(--tool-color, var(--accent)) 60%, transparent);
}

:root[data-theme="indust"] .toc-item.is-active {
  background: color-mix(in srgb, var(--accent) 10%, var(--surface-elev));
  box-shadow: inset 2px 0 0 var(--accent), 0 0 8px color-mix(in srgb, var(--accent) 25%, transparent);
}
</style>
