<template>
  <div class="skills-page">
    <section class="skills-intro container mx-auto px-6" aria-labelledby="skills-heading">
      <h1 id="skills-heading" class="skills-heading font-display">技术选型图谱</h1>
      <p class="skills-description">整理前端、跨端及其他技术方向的选型资料。个人项目经历与实际交付见<router-link to="/">简历</router-link>和<router-link to="/case-studies">成果案例</router-link>；此页不按个人熟练度评级。</p>
    </section>
    <div class="skills-tabs-wrap">
      <div class="container mx-auto px-6">
        <div class="skills-tabs">
          <button
            v-for="cat in categoriesRef"
            :key="cat.id"
            type="button"
            class="cat-tab font-mono"
            :class="{ active: selectedCategory === cat.id }"
            :style="cat.id === 'all' ? {} : { '--cat-color': cat.color }"
            @click="selectCategory(cat.id)"
          >
            <span class="cat-glyph" aria-hidden="true">{{ cat.icon }}</span>
            <span class="cat-name">{{ cat.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="skills-body">
      <SkillTree :category="selectedCategory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SkillTree from '@/components/SkillTree.vue'
import { useSkillsData } from '@/composables/useSkillsData'

const selectedCategory = ref('all')
const categoriesRef = ref<Array<{id: string, name: string, icon: string, color: string}>>([])

const { loadCategories } = useSkillsData()

onMounted(async () => {
  categoriesRef.value = await loadCategories()
})

const selectCategory = (id: string) => {
  selectedCategory.value = id
}
</script>

<style scoped>
.skills-page {
  color: var(--ink);
  display: flex;
  flex-direction: column;
  min-height: calc(100dvh - var(--header-height));
}

.skills-intro {
  padding-top: 2.5rem;
  padding-bottom: 1.6rem;
}

.skills-heading {
  margin-bottom: 0.7rem;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 600;
}

.skills-description {
  max-width: 52rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.7;
}

.skills-description a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}

/* ============================================================
 * Sticky tab bar
 * ============================================================ */
.skills-tabs-wrap {
  position: sticky;
  top: var(--header-height);
  z-index: 40;
  padding: 0.75rem 0;
  background-color: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-soft);
}

.skills-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

.cat-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.7rem;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
}

.cat-tab:hover {
  color: var(--ink);
  border-color: var(--border);
}

.cat-tab.active {
  color: var(--bg);
  background: var(--ink);
  border-color: var(--ink);
}

.cat-glyph {
  font-size: 0.85rem;
  line-height: 1;
}

.cat-name {
  font-weight: 600;
}

/* ============================================================
 * Skill tree body
 * ============================================================ */
.skills-body {
  flex: 1;
  padding-top: 1rem;
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides
 * ============================================================ */

/* ---- Brutal: no blur, dashed inactive, solid active ---- */
:root[data-theme="brutal"] .skills-page .skills-tabs-wrap {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

:root[data-theme="brutal"] .skills-page .cat-tab {
  border-style: dashed;
  border-color: var(--border);
}

:root[data-theme="brutal"] .skills-page .cat-tab.active {
  border-style: solid;
}

/* ---- Mag: italic names, accent-blended active using cat-color ---- */
:root[data-theme="mag"] .skills-page .cat-tab {
  background: var(--surface);
}

:root[data-theme="mag"] .skills-page .cat-tab.active {
  background: var(--cat-color, var(--accent));
  border-color: var(--cat-color, var(--accent));
  color: var(--bg);
}

:root[data-theme="mag"] .skills-page .cat-name {
  font-style: italic;
  font-family: var(--font-display);
  font-weight: 500;
  text-transform: none;
  font-size: 0.8rem;
  letter-spacing: 0;
}

/* ---- Indust: cat-color glow on active, surface-elev base ---- */
:root[data-theme="indust"] .skills-page .cat-tab {
  background: var(--surface);
}

:root[data-theme="indust"] .skills-page .cat-tab.active {
  background: color-mix(in srgb, var(--cat-color, var(--accent)) 18%, var(--surface-elev));
  border-color: var(--cat-color, var(--accent));
  color: var(--ink);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--cat-color, var(--accent)) 30%, transparent);
}

:root[data-theme="indust"] .skills-page .cat-glyph {
  color: var(--cat-color, var(--accent));
}
</style>
