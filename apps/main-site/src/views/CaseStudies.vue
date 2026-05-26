<template>
  <div class="case-page animate-fade-in" :data-co="currentCategory?.color">
    <!-- ============================================================
     * Category tabs (sticky)
     * ============================================================ -->
    <section class="cat-bar">
      <div class="container mx-auto px-6">
        <div class="cat-bar-inner scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category.id"
            type="button"
            class="cat-tab font-mono"
            :class="{ active: activeCategory === category.id }"
            :data-co="category.color"
            @click="selectCategory(category.id)"
          >
            <span class="cat-tab-icon" aria-hidden="true">{{ category.icon }}</span>
            <span class="cat-tab-name">{{ category.name }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- ============================================================
     * Main two-column layout
     * ============================================================ -->
    <section class="container mx-auto px-6 pt-8 pb-24">
      <div class="main-layout">
        <!-- ===== LEFT: Project nav ===== -->
        <aside v-if="currentCompany" class="left-panel">
          <div class="proj-nav">
            <header class="proj-nav-head">
              <span class="proj-nav-marker font-mono">Projects</span>
              <span class="proj-nav-count font-mono">{{ String(currentCompany.projects.length).padStart(2, '0') }}</span>
            </header>
            <button
              v-for="(project, pIdx) in currentCompany.projects"
              :key="project.title"
              type="button"
              class="proj-nav-item"
              :class="{ active: activeProject === pIdx }"
              @click="selectProject(pIdx)"
            >
              <span class="proj-nav-idx font-mono">{{ String(pIdx + 1).padStart(2, '0') }}</span>
              <span class="proj-nav-icon" aria-hidden="true">{{ project.icon }}</span>
              <div class="proj-nav-body">
                <div class="proj-nav-title">{{ project.title }}</div>
                <div class="proj-nav-meta font-mono">{{ project.role }} · {{ project.period }}</div>
              </div>
              <span class="proj-nav-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </aside>

        <!-- ===== RIGHT: Detail content ===== -->
        <main v-if="currentCompany" class="right-panel">
          <transition name="detail-fade" mode="out-in">
            <!-- ----- Company overview ----- -->
            <div v-if="activeProject === null" :key="'company-' + activeCategory" class="detail-content">
              <header class="detail-header">
                <div class="detail-head-row">
                  <span class="detail-icon" aria-hidden="true">{{ currentCompany.icon }}</span>
                  <div class="detail-titles">
                    <h2 class="detail-title font-display">{{ currentCompany.name }}</h2>
                    <p class="detail-meta">
                      <span class="detail-role">{{ currentCompany.position }}</span>
                      <span class="detail-sep" aria-hidden="true">·</span>
                      <span class="font-mono">{{ currentCompany.period }}</span>
                    </p>
                  </div>
                </div>
                <p class="detail-summary">{{ currentCompany.summary }}</p>
              </header>

              <section class="detail-section">
                <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 整体成果数据</h3>
                <div class="metric-grid">
                  <div v-for="stat in currentCompany.totalStats" :key="stat.label" class="metric-card">
                    <div class="metric-value font-display">{{ stat.value }}</div>
                    <div class="metric-label">{{ stat.label }}</div>
                  </div>
                </div>
              </section>

              <section class="detail-section">
                <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 项目列表</h3>
                <div class="proj-grid">
                  <button
                    v-for="(project, pIdx) in currentCompany.projects"
                    :key="project.title"
                    type="button"
                    class="proj-card"
                    @click="selectProject(pIdx)"
                  >
                    <header class="proj-card-head">
                      <span class="proj-card-icon" aria-hidden="true">{{ project.icon }}</span>
                      <div class="proj-card-titles">
                        <h4 class="proj-card-title font-display">{{ project.title }}</h4>
                        <p class="proj-card-meta font-mono">{{ project.role }} · {{ project.period }}</p>
                      </div>
                      <span class="proj-card-arrow" aria-hidden="true">→</span>
                    </header>
                    <p class="proj-card-body">{{ project.description }}</p>
                    <div class="tag-list">
                      <span v-for="tag in project.tags" :key="tag" class="tag font-mono">{{ tag }}</span>
                    </div>
                  </button>
                </div>
              </section>
            </div>

            <!-- ----- Project detail ----- -->
            <div v-else-if="currentProject" :key="activeCategory + '-' + activeProject" class="detail-content">
              <header class="detail-header">
                <div class="detail-head-row">
                  <span class="detail-icon" aria-hidden="true">{{ currentProject.icon }}</span>
                  <div class="detail-titles">
                    <h2 class="detail-title font-display">{{ currentProject.title }}</h2>
                    <p class="detail-meta">
                      <span class="detail-role">{{ currentCompany.shortName }}</span>
                      <span class="detail-sep" aria-hidden="true">·</span>
                      <span>{{ currentProject.role }}</span>
                      <span class="detail-sep" aria-hidden="true">·</span>
                      <span class="font-mono">{{ currentProject.period }}</span>
                    </p>
                  </div>
                  <div class="tag-list detail-tags">
                    <span v-for="tag in currentProject.tags" :key="tag" class="tag font-mono">{{ tag }}</span>
                  </div>
                </div>
                <p class="detail-summary">{{ currentProject.description }}</p>
                <a
                  v-if="currentProject.link"
                  :href="currentProject.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-btn font-mono"
                >
                  <span>View project</span>
                  <span class="link-btn-arrow" aria-hidden="true">↗</span>
                </a>
              </header>

              <!-- Module tabs -->
              <div v-if="currentProject.modules && currentProject.modules.length > 0" class="module-tabs scrollbar-hide">
                <button
                  v-for="(module, mIdx) in currentProject.modules"
                  :key="module.title"
                  type="button"
                  class="module-tab font-mono"
                  :class="{ active: activeModule === mIdx }"
                  @click="selectModule(mIdx)"
                >
                  <span class="module-tab-icon" aria-hidden="true">{{ module.icon }}</span>
                  <span>{{ module.title }}</span>
                </button>
              </div>

              <!-- Module detail -->
              <template v-if="currentModule">
                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 业务需求</h3>
                  <div class="prose-box">
                    <p>{{ currentModule.business }}</p>
                  </div>
                </section>

                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 技术选型</h3>
                  <div class="tag-list tag-list-lg">
                    <span v-for="tech in currentModule.tech" :key="tech" class="tag tag-lg font-mono">{{ tech }}</span>
                  </div>
                </section>

                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 实现思路</h3>
                  <div class="approach-grid">
                    <button
                      v-for="(step, i) in currentModule.approach"
                      :key="i"
                      type="button"
                      class="approach-step"
                      @click="openApproachDrawer(step, i + 1, currentModule.title)"
                    >
                      <span class="step-number font-display">{{ String(i + 1).padStart(2, '0') }}</span>
                      <div class="step-body">
                        <h4 class="step-title font-display">{{ step.title }}</h4>
                        <p class="step-detail">{{ step.detail }}</p>
                      </div>
                      <span class="step-arrow" aria-hidden="true">→</span>
                    </button>
                  </div>
                </section>

                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 未来规划</h3>
                  <ul class="future-list">
                    <li v-for="(plan, i) in currentModule.futurePlans" :key="i">
                      <span class="future-glyph font-mono">→</span>
                      <span>{{ plan }}</span>
                    </li>
                  </ul>
                </section>
              </template>

              <!-- Project overview (no module selected) -->
              <template v-else>
                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 核心数据提升</h3>
                  <div class="metric-grid metric-grid-3">
                    <div v-for="metric in currentProject.metrics" :key="metric.label" class="metric-card">
                      <div class="metric-value font-display">{{ metric.value }}</div>
                      <div class="metric-label">{{ metric.label }}</div>
                      <div class="metric-detail">{{ metric.detail }}</div>
                    </div>
                  </div>
                </section>

                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 我是如何做到的</h3>
                  <div class="approach-grid">
                    <button
                      v-for="(step, i) in currentProject.approach"
                      :key="i"
                      type="button"
                      class="approach-step"
                      @click="openApproachDrawer(step, i + 1, currentProject.title)"
                    >
                      <span class="step-number font-display">{{ String(i + 1).padStart(2, '0') }}</span>
                      <div class="step-body">
                        <h4 class="step-title font-display">{{ step.title }}</h4>
                        <p class="step-detail">{{ step.detail }}</p>
                      </div>
                      <span class="step-arrow" aria-hidden="true">→</span>
                    </button>
                  </div>
                </section>

                <section class="detail-section">
                  <h3 class="section-title font-mono"><span class="section-title-mark">▸</span> 未来我会如何做</h3>
                  <ul class="future-list">
                    <li v-for="(plan, i) in currentProject.futurePlans" :key="i">
                      <span class="future-glyph font-mono">→</span>
                      <span>{{ plan }}</span>
                    </li>
                  </ul>
                </section>
              </template>
            </div>
          </transition>
        </main>
      </div>
    </section>
  </div>

  <ApproachDrawer
    v-if="currentApproach"
    :visible="drawerVisible"
    :approach-data="currentApproach"
    @close="closeDrawer"
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Company, Module, Project, Approach, ApproachDetail } from '@/data/types'
import ApproachDrawer from '@/components/ApproachDrawer.vue'
import { useScrollReset } from '@/composables/useScrollReset'
import { useCaseStudiesData } from '@/composables/useCaseStudiesData'

type CompanyColor = 'emerald' | 'blue' | 'purple'

interface Category {
  id: string
  name: string
  icon: string
  color: CompanyColor
  companyIndex: number
}

const categories: Category[] = [
  { id: 'milesight', name: '星纵物联', icon: '◆', color: 'emerald', companyIndex: 0 },
  { id: 'highway', name: '高速工程顾问', icon: '◇', color: 'blue', companyIndex: 1 },
  { id: 'personal', name: '个人项目', icon: '◈', color: 'purple', companyIndex: 2 }
]

const activeCategory = ref<string>('milesight')
const activeProject = ref<number | null>(null)
const activeModule = ref<number | null>(null)
const drawerVisible = ref(false)
const currentApproach = ref<ApproachDetail | null>(null)
const { scrollToTop } = useScrollReset()
const { loadCompanies } = useCaseStudiesData()

const companies = ref<Company[]>([])

onMounted(async () => {
  companies.value = await loadCompanies()
})

const currentCategory = computed<Category | undefined>(() => categories.find(cat => cat.id === activeCategory.value))
const currentCompany = computed<Company | null>(() => {
  const cat = currentCategory.value
  return cat && companies.value.length > 0 ? companies.value[cat.companyIndex] : null
})
const currentProject = computed<Project | null>(() => {
  if (activeProject.value === null || !currentCompany.value) return null
  return currentCompany.value.projects[activeProject.value] ?? null
})
const currentModule = computed<Module | null>(() => {
  if (activeModule.value === null || !currentProject.value || !currentProject.value.modules) return null
  return currentProject.value.modules[activeModule.value] || null
})

function selectCategory(categoryId: string): void {
  activeCategory.value = categoryId
  activeProject.value = null
  activeModule.value = null
  scrollToTop()
}

function selectProject(pIdx: number): void {
  activeProject.value = pIdx
  activeModule.value = null
  scrollToTop()
}

function selectModule(mIdx: number): void {
  activeModule.value = mIdx
  scrollToTop()
}

function openApproachDrawer(approach: Approach, step: number, moduleName: string): void {
  currentApproach.value = {
    step,
    title: approach.title,
    moduleName,
    requirement: approach.requirement || '暂无详细需求描述',
    implementation: approach.implementation || '暂无详细实现描述',
    tech: approach.tech || [],
    selectionReason: approach.selectionReason || '暂无技术选型说明',
    alternatives: approach.alternatives || [],
    challenges: approach.challenges || []
  }
  drawerVisible.value = true
}

function closeDrawer(): void {
  drawerVisible.value = false
  currentApproach.value = null
}
</script>

<style scoped>
/* ============================================================
 * Page root — defaults --co-color to accent.
 * Theme/company-specific overrides at the bottom remap it.
 * ============================================================ */
.case-page {
  color: var(--ink);
  --co-color: var(--accent);
}

/* ============================================================
 * Category tabs (sticky)
 * ============================================================ */
.cat-bar {
  position: sticky;
  top: 61px;
  z-index: 40;
  background-color: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-soft);
}

.cat-bar-inner {
  display: flex;
  gap: 0.5rem;
  padding: 0.85rem 0;
  overflow-x: auto;
  justify-content: center;
}

.cat-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.95rem;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
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

.cat-tab-icon {
  font-size: 0.85rem;
  line-height: 1;
}

.cat-tab-name {
  font-weight: 600;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* ============================================================
 * Two-column layout
 * ============================================================ */
.main-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .main-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* ============================================================
 * Left: project nav
 * ============================================================ */
.left-panel {
  position: sticky;
  top: 140px;
}

@media (max-width: 1024px) {
  .left-panel {
    position: static;
  }
}

.proj-nav {
  display: flex;
  flex-direction: column;
}

.proj-nav-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 0.85rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-soft);
}

.proj-nav-marker {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
}

.proj-nav-count {
  font-size: 0.7rem;
  color: var(--faint);
  letter-spacing: 0.04em;
}

.proj-nav-item {
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 0.5rem;
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--border-soft);
  text-align: left;
  cursor: pointer;
  color: var(--muted);
  transition: color 0.15s ease, background-color 0.15s ease, padding-left 0.2s ease;
  font-family: inherit;
}

.proj-nav-item:hover {
  background: var(--surface);
  color: var(--ink);
  padding-left: 0.85rem;
}

.proj-nav-item.active {
  color: var(--ink);
  background: var(--surface);
}

.proj-nav-item.active .proj-nav-idx {
  color: var(--co-color);
}

.proj-nav-idx {
  font-size: 0.7rem;
  color: var(--faint);
  letter-spacing: 0.04em;
}

.proj-nav-icon {
  font-size: 1rem;
  color: var(--co-color);
  line-height: 1;
}

.proj-nav-body {
  min-width: 0;
}

.proj-nav-title {
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.proj-nav-meta {
  font-size: 0.65rem;
  color: var(--faint);
  letter-spacing: 0.02em;
}

.proj-nav-arrow {
  font-size: 0.85rem;
  color: var(--faint);
  opacity: 0;
  transform: translateX(-3px);
  transition: opacity 0.2s ease, transform 0.2s ease, color 0.15s ease;
}

.proj-nav-item.active .proj-nav-arrow,
.proj-nav-item:hover .proj-nav-arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--co-color);
}

/* ============================================================
 * Right: detail
 * ============================================================ */
.right-panel {
  min-width: 0;
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

/* ----- Detail header ----- */
.detail-header {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-soft);
  position: relative;
}

.detail-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 3px;
  background: var(--co-color);
}

.detail-head-row {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.detail-icon {
  font-size: 2rem;
  color: var(--co-color);
  line-height: 1;
}

.detail-titles {
  flex: 1;
  min-width: 0;
}

.detail-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.15;
}

.detail-meta {
  font-size: 0.82rem;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
}

.detail-role {
  color: var(--co-color);
  font-weight: 600;
}

.detail-sep {
  color: var(--faint);
}

.detail-summary {
  font-size: 0.95rem;
  line-height: 1.75;
  color: var(--muted);
  max-width: 50rem;
}

.detail-tags {
  margin-left: auto;
  align-self: flex-start;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.55rem 0.95rem;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ink);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.link-btn:hover {
  background: var(--ink);
  color: var(--bg);
}

.link-btn-arrow {
  transition: transform 0.2s ease;
}

.link-btn:hover .link-btn-arrow {
  transform: translate(2px, -2px);
}

/* ----- Section title ----- */
.detail-section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink);
}

.section-title-mark {
  color: var(--co-color);
  font-size: 0.9em;
}

/* ----- Metrics ----- */
.metric-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .metric-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  .metric-grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

.metric-card {
  padding: 1.4rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  transition: border-color 0.15s ease, transform 0.2s ease;
}

.metric-card:hover {
  border-color: var(--co-color);
  transform: translateY(-2px);
}

.metric-value {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  color: var(--co-color);
  line-height: 1;
  margin-bottom: 0.65rem;
}

.metric-label {
  font-size: 0.82rem;
  color: var(--ink);
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.metric-detail {
  font-size: 0.72rem;
  color: var(--muted);
  line-height: 1.6;
}

/* ----- Project cards (overview list) ----- */
.proj-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .proj-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.proj-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 1.5rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  color: var(--ink);
  transition: border-color 0.15s ease, transform 0.2s ease;
}

.proj-card:hover {
  border-color: var(--co-color);
  transform: translateY(-2px);
}

.proj-card-head {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.proj-card-icon {
  font-size: 1.3rem;
  color: var(--co-color);
  line-height: 1;
  flex-shrink: 0;
}

.proj-card-titles {
  flex: 1;
  min-width: 0;
}

.proj-card-title {
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-bottom: 0.25rem;
  transition: color 0.15s ease;
}

.proj-card:hover .proj-card-title {
  color: var(--co-color);
}

.proj-card-meta {
  font-size: 0.7rem;
  color: var(--faint);
}

.proj-card-arrow {
  font-size: 1rem;
  color: var(--faint);
  flex-shrink: 0;
  transition: color 0.15s ease, transform 0.2s ease;
}

.proj-card:hover .proj-card-arrow {
  color: var(--co-color);
  transform: translateX(3px);
}

.proj-card-body {
  font-size: 0.85rem;
  color: var(--muted);
  line-height: 1.7;
}

/* ----- Module tabs ----- */
.module-tabs {
  display: flex;
  gap: 0.4rem;
  padding-bottom: 0.5rem;
  overflow-x: auto;
}

.module-tab {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
}

.module-tab:hover {
  color: var(--ink);
  border-color: var(--border);
}

.module-tab.active {
  color: var(--bg);
  background: var(--co-color);
  border-color: var(--co-color);
}

.module-tab-icon {
  font-size: 0.85rem;
  line-height: 1;
}

/* ----- Prose box ----- */
.prose-box {
  padding: 1.4rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--muted);
}

/* ----- Tags ----- */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag-list-lg {
  gap: 0.5rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.55rem;
  font-size: 0.68rem;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  letter-spacing: 0.02em;
}

.tag-lg {
  padding: 0.35rem 0.7rem;
  font-size: 0.72rem;
  color: var(--ink);
  font-weight: 600;
}

/* ----- Approach steps ----- */
.approach-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .approach-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.approach-step {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--surface);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  color: var(--ink);
  transition: border-color 0.15s ease, transform 0.2s ease;
}

.approach-step:hover {
  border-color: var(--co-color);
  transform: translateY(-2px);
}

.step-number {
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1;
  color: var(--co-color);
  letter-spacing: -0.05em;
}

.step-body {
  min-width: 0;
}

.step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  margin-bottom: 0.4rem;
}

.step-detail {
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.65;
}

.step-arrow {
  font-size: 0.95rem;
  color: var(--faint);
  align-self: center;
  transition: color 0.15s ease, transform 0.2s ease;
}

.approach-step:hover .step-arrow {
  color: var(--co-color);
  transform: translateX(3px);
}

/* ----- Future plans ----- */
.future-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.future-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.85rem;
  line-height: 1.7;
  color: var(--muted);
  padding-bottom: 0.75rem;
  border-bottom: 1px dashed var(--border-soft);
}

.future-list li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.future-glyph {
  color: var(--co-color);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1em;
}

/* ============================================================
 * Per-company color mapping (default = Swiss palette analogues)
 * ============================================================ */
.case-page[data-co="emerald"] { --co-color: var(--success); }
.case-page[data-co="blue"]    { --co-color: var(--accent); }
.case-page[data-co="purple"]  { --co-color: var(--warning); }

/* ============================================================
 * Detail-fade transition
 * ============================================================ */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.detail-fade-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

.detail-fade-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides
 * ============================================================ */

/* ---- Swiss (default): monochrome co-color = ink ---- */
:root[data-theme="swiss"] .case-page[data-co="emerald"],
:root[data-theme="swiss"] .case-page[data-co="blue"],
:root[data-theme="swiss"] .case-page[data-co="purple"] {
  --co-color: var(--ink);
}

:root[data-theme="swiss"] .case-page .detail-header::before {
  background: var(--accent);
}

:root[data-theme="swiss"] .case-page .section-title-mark,
:root[data-theme="swiss"] .case-page .proj-nav-marker {
  color: var(--accent);
}

/* ---- Brutal: ASCII monochrome, dashed dividers ---- */
:root[data-theme="brutal"] .case-page[data-co="emerald"],
:root[data-theme="brutal"] .case-page[data-co="blue"],
:root[data-theme="brutal"] .case-page[data-co="purple"] {
  --co-color: var(--ink);
}

:root[data-theme="brutal"] .case-page .cat-bar {
  background: var(--bg);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

:root[data-theme="brutal"] .case-page .cat-tab {
  border-style: dashed;
}

:root[data-theme="brutal"] .case-page .cat-tab.active {
  border-style: solid;
}

:root[data-theme="brutal"] .case-page .metric-card,
:root[data-theme="brutal"] .case-page .proj-card,
:root[data-theme="brutal"] .case-page .approach-step,
:root[data-theme="brutal"] .case-page .prose-box {
  background: transparent;
  border-color: var(--border);
}

:root[data-theme="brutal"] .case-page .module-tab {
  border-style: dashed;
}

:root[data-theme="brutal"] .case-page .module-tab.active {
  background: var(--ink);
  color: var(--bg);
  border-style: solid;
  border-color: var(--ink);
}

:root[data-theme="brutal"] .case-page .section-title-mark {
  content: '>';
}

/* ---- Mag: jewel-tone company palette + italic titles ---- */
:root[data-theme="mag"] .case-page[data-co="emerald"] { --co-color: #2D4A3E; }
:root[data-theme="mag"] .case-page[data-co="blue"]    { --co-color: #244157; }
:root[data-theme="mag"] .case-page[data-co="purple"]  { --co-color: #8A1538; }

:root[data-theme="mag"] .case-page .detail-title,
:root[data-theme="mag"] .case-page .step-title,
:root[data-theme="mag"] .case-page .proj-card-title {
  font-style: italic;
}

/* ---- Indust: status-indicator company palette + uppercase ---- */
:root[data-theme="indust"] .case-page[data-co="emerald"] { --co-color: var(--success); }
:root[data-theme="indust"] .case-page[data-co="blue"]    { --co-color: #3FA9CC; }
:root[data-theme="indust"] .case-page[data-co="purple"]  { --co-color: var(--accent); }

:root[data-theme="indust"] .case-page .cat-tab {
  background: var(--surface);
}

:root[data-theme="indust"] .case-page .cat-tab.active {
  background: color-mix(in srgb, var(--co-color) 18%, var(--surface-elev));
  border-color: var(--co-color);
  color: var(--ink);
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--co-color) 30%, transparent);
}

:root[data-theme="indust"] .case-page .detail-title {
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

:root[data-theme="indust"] .case-page .module-tab {
  background: var(--surface);
}

:root[data-theme="indust"] .case-page .module-tab.active {
  background: color-mix(in srgb, var(--co-color) 25%, var(--surface-elev));
  color: var(--co-color);
  border-color: var(--co-color);
}
</style>
