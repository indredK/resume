<template>
  <div class="skill-tree container mx-auto px-6 py-8">
    <div v-if="loading" class="loading-wrap">
      <div class="loading-dot" aria-hidden="true"></div>
      <div class="loading-dot" aria-hidden="true"></div>
      <div class="loading-dot" aria-hidden="true"></div>
    </div>

    <template v-else>
      <section
        v-for="(cat, index) in displayData"
        :key="cat.id"
        class="cat-section animate-fade-in"
        :style="{ animationDelay: `${index * 0.08}s`, '--cat-color': cat.color }"
      >
        <header class="cat-header">
          <span class="cat-marker font-mono">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="cat-icon" aria-hidden="true">{{ cat.icon }}</span>
          <h2 class="cat-title font-display">{{ cat.name }}</h2>
          <span class="cat-rule" aria-hidden="true"></span>
        </header>

        <div class="sub-grid">
          <template v-if="cat.children">
            <div v-for="sub in cat.children" :key="sub.id" class="sub-card">
              <div v-if="sub.name" class="sub-head">
                <span class="sub-icon" aria-hidden="true">{{ sub.icon || '◦' }}</span>
                <span class="sub-name font-mono">{{ sub.name }}</span>
              </div>

              <div class="skill-list">
                <button
                  v-for="skill in (sub.children || [sub])"
                  :key="skill.id || skill.name"
                  type="button"
                  class="skill-row"
                  :style="{ '--skill-color': skill.color || cat.color }"
                  @click="handleSkillClick(skill)"
                >
                  <span class="skill-dot" aria-hidden="true"></span>
                  <span class="skill-glyph" aria-hidden="true">{{ skill.icon || '·' }}</span>
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <button
              type="button"
              class="skill-row solo"
              :style="{ '--skill-color': cat.color }"
              @click="handleSkillClick(cat)"
            >
              <span class="skill-dot" aria-hidden="true"></span>
              <span class="skill-glyph" aria-hidden="true">{{ cat.icon || '·' }}</span>
              <span class="skill-name">{{ cat.name }}</span>
              <span class="skill-arrow" aria-hidden="true">→</span>
            </button>
          </template>
        </div>
      </section>
    </template>

    <FrameworkCompareModal
      v-if="selectedSkill"
      :visible="modalVisible"
      :skill="selectedSkill"
      @close="modalVisible = false"
      @select="handleModalSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import FrameworkCompareModal from '@/components/FrameworkCompareModal.vue'
import { useSkillsData } from '@/composables/useSkillsData'
import type { SkillNode } from '@/data/types'

const props = defineProps<{
  category: string
}>()

const { loading, loadSkillTreeData } = useSkillsData()
const skillTreeData = ref<SkillNode[]>([])

onMounted(async () => {
  skillTreeData.value = await loadSkillTreeData()
})

const modalVisible = ref(false)
const selectedSkill = ref<SkillNode | null>(null)

const displayData = computed(() => {
  if (!skillTreeData.value.length) return []
  if (props.category === 'all') {
    return skillTreeData.value
  }
  return skillTreeData.value.filter((c: SkillNode) => c.id === props.category)
})

const handleSkillClick = (skill: SkillNode) => {
  selectedSkill.value = skill
  modalVisible.value = true
}

const handleModalSelect = (skill: SkillNode) => {
  selectedSkill.value = skill
}
</script>

<style scoped>
.skill-tree {
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

/* ============================================================
 * Loading state
 * ============================================================ */
.loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 5rem 0;
}

.loading-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse-dot 1.4s ease-in-out infinite;
}

.loading-dot:nth-child(2) { animation-delay: 0.15s; }
.loading-dot:nth-child(3) { animation-delay: 0.3s; }

@keyframes pulse-dot {
  0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
}

/* ============================================================
 * Category section header
 * ============================================================ */
.cat-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.cat-header {
  display: flex;
  align-items: baseline;
  gap: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-soft);
}

.cat-marker {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--accent);
}

.cat-icon {
  font-size: 1.1rem;
  line-height: 1;
  color: var(--ink);
}

.cat-title {
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.cat-rule {
  flex: 1;
  height: 1px;
  background: var(--border-soft);
  margin-left: 0.5rem;
  align-self: center;
}

/* ============================================================
 * Sub-card grid
 * ============================================================ */
.sub-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .sub-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .sub-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .sub-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.sub-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  transition: border-color 0.15s ease;
}

.sub-card:hover {
  border-color: var(--border);
}

.sub-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px dashed var(--border-soft);
}

.sub-icon {
  font-size: 0.85rem;
  color: var(--accent);
  line-height: 1;
}

.sub-name {
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--muted);
  font-weight: 600;
}

/* ============================================================
 * Skill rows (clickable buttons)
 * ============================================================ */
.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.5rem;
  background: transparent;
  border: 0;
  border-radius: var(--radius);
  font-family: inherit;
  font-size: 0.78rem;
  color: var(--muted);
  text-align: left;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.15s ease, color 0.15s ease, padding-left 0.2s ease;
}

.skill-row:hover {
  background: var(--surface-elev);
  color: var(--ink);
  padding-left: 0.75rem;
}

.skill-row.solo {
  padding: 0.75rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
}

.skill-row.solo:hover {
  border-color: var(--ink);
}

.skill-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--ink);
  flex-shrink: 0;
}

.skill-glyph {
  font-size: 0.85rem;
  color: var(--faint);
  flex-shrink: 0;
}

.skill-name {
  flex: 1;
  font-weight: 500;
}

.skill-arrow {
  font-size: 0.85rem;
  color: var(--faint);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease, color 0.15s ease;
}

.skill-row:hover .skill-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--accent);
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides
 *
 * --cat-color / --skill-color are dynamic per-skill (defined in
 * skill data files). Swiss + Brutal ignore them for monochrome
 * coherence; Mag + Indust let them through as expressive accents.
 * ============================================================ */

/* ---- Swiss (default): monochrome — dots use --ink ---- */
/* nothing extra; defaults already use --ink */

/* ---- Brutal: ASCII feel ---- */
:root[data-theme="brutal"] .skill-tree .sub-card {
  background: transparent;
  border-color: var(--border);
}

:root[data-theme="brutal"] .skill-tree .sub-head {
  border-bottom-style: dashed;
}

:root[data-theme="brutal"] .skill-tree .cat-marker,
:root[data-theme="brutal"] .skill-tree .sub-icon {
  color: var(--ink);
}

:root[data-theme="brutal"] .skill-tree .skill-dot {
  width: 5px;
  height: 5px;
  border-radius: 0;
}

:root[data-theme="brutal"] .skill-tree .skill-row:hover .skill-arrow {
  color: var(--ink);
}

:root[data-theme="brutal"] .skill-tree .skill-row:hover {
  background: var(--surface-elev);
}

:root[data-theme="brutal"] .skill-tree .loading-dot {
  border-radius: 0;
  background: var(--ink);
}

/* ---- Mag: jewel-tone --cat/skill colors come through ---- */
:root[data-theme="mag"] .skill-tree .cat-title {
  font-style: italic;
  color: var(--cat-color, var(--ink));
}

:root[data-theme="mag"] .skill-tree .cat-icon {
  color: var(--cat-color, var(--ink));
}

:root[data-theme="mag"] .skill-tree .cat-marker {
  color: var(--cat-color, var(--accent));
}

:root[data-theme="mag"] .skill-tree .skill-dot {
  background: var(--skill-color, var(--ink));
}

:root[data-theme="mag"] .skill-tree .skill-row:hover {
  background: color-mix(in srgb, var(--skill-color, var(--accent)) 8%, var(--surface));
}

:root[data-theme="mag"] .skill-tree .skill-row:hover .skill-arrow {
  color: var(--skill-color, var(--accent));
}

/* ---- Indust: skill-color status indicator + soft glow ---- */
:root[data-theme="indust"] .skill-tree .cat-title {
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.05em;
}

:root[data-theme="indust"] .skill-tree .cat-marker {
  color: var(--cat-color, var(--accent));
}

:root[data-theme="indust"] .skill-tree .cat-icon {
  color: var(--cat-color, var(--accent));
}

:root[data-theme="indust"] .skill-tree .skill-dot {
  background: var(--skill-color, var(--accent));
  box-shadow: 0 0 6px color-mix(in srgb, var(--skill-color, var(--accent)) 50%, transparent);
}

:root[data-theme="indust"] .skill-tree .skill-row:hover {
  background: color-mix(in srgb, var(--skill-color, var(--accent)) 10%, var(--surface-elev));
}

:root[data-theme="indust"] .skill-tree .skill-row:hover .skill-arrow {
  color: var(--skill-color, var(--accent));
}

:root[data-theme="indust"] .skill-tree .sub-name {
  font-size: 0.62rem;
  letter-spacing: 0.18em;
}
</style>
