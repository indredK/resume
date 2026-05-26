<template>
  <BaseDrawer :visible="visible" @close="$emit('close')">
    <!-- ============================================================
     * Header — eyebrow + step badge + title pattern
     * ============================================================ -->
    <header class="drawer-head">
      <div class="head-left">
        <span class="step-badge font-mono">{{ approachData.step }}</span>
        <div class="head-titles">
          <p class="head-eyebrow font-mono">{{ approachData.moduleName }}</p>
          <h2 class="head-title font-display">{{ approachData.title }}</h2>
        </div>
      </div>
      <button class="close-btn" aria-label="关闭" @click="$emit('close')">
        <span aria-hidden="true">×</span>
      </button>
    </header>

    <!-- ============================================================
     * Scrollable body
     * ============================================================ -->
    <div ref="drawerBodyRef" class="drawer-body">
      <!-- 需求背景 -->
      <section class="block">
        <h3 class="block-title font-mono">
          <span class="block-marker">01</span>
          需求背景
        </h3>
        <p class="prose-card">{{ approachData.requirement }}</p>
      </section>

      <!-- 实现逻辑 -->
      <section class="block">
        <h3 class="block-title font-mono">
          <span class="block-marker">02</span>
          实现逻辑
        </h3>
        <p class="prose-card">{{ approachData.implementation }}</p>
      </section>

      <!-- 技术选型 -->
      <section class="block">
        <h3 class="block-title font-mono">
          <span class="block-marker">03</span>
          技术选型
        </h3>
        <div class="tech-tags">
          <span v-for="tech in approachData.tech" :key="tech" class="tech-tag font-mono">{{ tech }}</span>
        </div>
        <p class="prose-card">{{ approachData.selectionReason }}</p>
      </section>

      <!-- 方案对比 -->
      <section class="block">
        <h3 class="block-title font-mono">
          <span class="block-marker">04</span>
          方案对比
        </h3>
        <div class="alt-list">
          <article
            v-for="(option, idx) in approachData.alternatives"
            :key="idx"
            class="alt-card"
            :class="{ 'is-selected': option.selected }"
          >
            <header class="alt-head">
              <span class="alt-name font-display">{{ option.name }}</span>
              <span v-if="option.selected" class="alt-flag font-mono">选中</span>
            </header>
            <dl class="alt-meta">
              <div class="meta-row">
                <dt class="meta-key meta-pro font-mono">+</dt>
                <dd class="meta-val">{{ option.pros }}</dd>
              </div>
              <div class="meta-row">
                <dt class="meta-key meta-con font-mono">−</dt>
                <dd class="meta-val">{{ option.cons }}</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <!-- 关键难点 -->
      <section class="block">
        <h3 class="block-title font-mono">
          <span class="block-marker">05</span>
          关键难点与解决方案
        </h3>
        <div class="challenge-list">
          <article v-for="(challenge, idx) in approachData.challenges" :key="idx" class="challenge-card">
            <h4 class="challenge-problem font-display">{{ challenge.problem }}</h4>
            <p class="challenge-solution">{{ challenge.solution }}</p>
          </article>
        </div>
      </section>
    </div>
  </BaseDrawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseDrawer from './BaseDrawer.vue'
import { useDrawer } from '@/composables/useDrawer'
import type { ApproachDetail } from '@/data/types'

const props = defineProps<{
  visible: boolean
  approachData: ApproachDetail
}>()

defineEmits<{
  close: []
}>()

const drawerBodyRef = ref<HTMLElement | null>(null)
const visibleComputed = computed(() => props.visible)

useDrawer(drawerBodyRef, visibleComputed, {
  step: () => props.approachData.step,
  moduleName: () => props.approachData.moduleName
})
</script>

<style scoped>
/* ============================================================
 * Header
 * ============================================================ */
.drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.75rem 1.75rem 1.25rem;
  border-bottom: 1px solid var(--border-soft);
}

.head-left {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
}

.step-badge {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface-elev);
}

.head-titles {
  min-width: 0;
}

.head-eyebrow {
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--muted);
  margin-bottom: 0.3rem;
}

.head-title {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.25;
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
 * Body
 * ============================================================ */
.drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1.75rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* ============================================================
 * Section block
 * ============================================================ */
.block {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.block-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
}

.block-marker {
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  color: var(--muted);
}

/* ============================================================
 * Prose card (single paragraph in subtle surface)
 * ============================================================ */
.prose-card {
  font-size: 0.86rem;
  line-height: 1.75;
  color: var(--ink);
  padding: 1rem 1.1rem;
  background: var(--surface-elev);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
}

/* ============================================================
 * Tech tags
 * ============================================================ */
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.6rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--accent);
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: var(--radius);
  letter-spacing: 0.02em;
}

/* ============================================================
 * Alternatives — pros/cons comparison list
 * ============================================================ */
.alt-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.alt-card {
  padding: 1rem 1.1rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  transition: border-color 0.15s ease;
}

.alt-card.is-selected {
  border-color: var(--accent);
  background: color-mix(in srgb, var(--accent) 6%, var(--surface));
}

.alt-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px dashed var(--border-soft);
}

.alt-name {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink);
}

.alt-flag {
  font-size: 0.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  padding: 0.15rem 0.45rem;
  border: 1px solid var(--accent);
}

.alt-meta {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin: 0;
}

.meta-row {
  display: grid;
  grid-template-columns: 1rem 1fr;
  gap: 0.6rem;
  align-items: baseline;
}

.meta-key {
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
}

.meta-pro { color: var(--success, var(--accent)); }
.meta-con { color: var(--danger, var(--muted)); }

.meta-val {
  font-size: 0.78rem;
  line-height: 1.65;
  color: var(--muted);
  margin: 0;
}

/* ============================================================
 * Challenges
 * ============================================================ */
.challenge-list {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.challenge-card {
  padding: 1rem 1.1rem;
  background: var(--surface);
  border-left: 2px solid var(--accent);
  border-radius: 0 var(--radius) var(--radius) 0;
}

.challenge-problem {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.challenge-solution {
  font-size: 0.78rem;
  line-height: 1.7;
  color: var(--muted);
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides
 * ============================================================ */

/* ---- Brutal: ASCII / hard ---- */
:root[data-theme="brutal"] .drawer-head {
  border-bottom: 2px solid var(--border);
}

:root[data-theme="brutal"] .step-badge {
  border-radius: 0;
  border: 2px solid var(--ink);
  color: var(--ink);
  background: transparent;
}

:root[data-theme="brutal"] .head-eyebrow,
:root[data-theme="brutal"] .block-title {
  color: var(--ink);
}

:root[data-theme="brutal"] .prose-card,
:root[data-theme="brutal"] .alt-card,
:root[data-theme="brutal"] .challenge-card {
  background: transparent;
  border-color: var(--border);
}

:root[data-theme="brutal"] .alt-card.is-selected {
  background: var(--surface-elev);
  border-color: var(--ink);
  border-style: solid;
  border-width: 2px;
}

:root[data-theme="brutal"] .alt-flag {
  color: var(--ink);
  border-color: var(--ink);
}

:root[data-theme="brutal"] .tech-tag {
  color: var(--ink);
  border-color: var(--ink);
}

:root[data-theme="brutal"] .challenge-card {
  border-left-color: var(--ink);
  border-left-width: 3px;
}

/* ---- Mag: italic display, jewel hover ---- */
:root[data-theme="mag"] .head-title,
:root[data-theme="mag"] .alt-name,
:root[data-theme="mag"] .challenge-problem {
  font-style: italic;
}

:root[data-theme="mag"] .step-badge {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

:root[data-theme="mag"] .alt-card.is-selected {
  border-color: var(--accent);
  border-width: 1px;
  background: color-mix(in srgb, var(--accent) 8%, var(--surface));
}

/* ---- Indust: condensed uppercase titles, neon accents ---- */
:root[data-theme="indust"] .head-title {
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
}

:root[data-theme="indust"] .step-badge {
  background: color-mix(in srgb, var(--accent) 20%, var(--surface-elev));
  border-color: var(--accent);
  box-shadow: 0 0 12px color-mix(in srgb, var(--accent) 40%, transparent);
}

:root[data-theme="indust"] .block-title {
  font-size: 0.66rem;
  letter-spacing: 0.22em;
}

:root[data-theme="indust"] .challenge-card {
  box-shadow: -3px 0 12px -6px color-mix(in srgb, var(--accent) 50%, transparent);
}
</style>
