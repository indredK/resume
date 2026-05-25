<template>
  <div class="case-studies-page animate-fade-in" style="padding-top: 61px;">
    <!-- Category Tabs -->
    <section class="category-tabs-section sticky top-16 z-40 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/50 flex items-center">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category.id"
            class="category-tab relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all shrink-0"
            :class="[
              activeCategory === category.id
                ? `active-tab text-white`
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            ]"
            @click="selectCategory(category.id)"
          >
            <!-- Active Background Gradient -->
            <div v-if="activeCategory === category.id" class="absolute inset-0 rounded-full opacity-100 transition-opacity" :class="`bg-linear-to-r ${COMPANY_THEME[category.color].tabGradient}`"></div>

            <!-- Content -->
            <span class="relative z-10 text-base">{{ category.icon }}</span>
            <span class="relative z-10">{{ category.name }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content: Left-Right Layout -->
    <section class="container mx-auto px-6 pt-8 pb-32">
      <div class="main-layout">
        <!-- LEFT: Project Navigation -->
        <aside v-if="currentCompany && currentTheme" class="left-panel">
          <div class="project-nav-block">
            <!-- Project List -->
            <div class="project-nav-list space-y-2">
              <div
                v-for="(project, pIdx) in currentCompany.projects"
                :key="project.title"
                class="project-nav-item rounded-xl px-4 py-3.5 cursor-pointer flex items-center gap-3"
                :class="[activeProject === pIdx ? `active-project ${currentTheme.borderActive}` : '']"
                @click="selectProject(pIdx)"
              >
                <span class="text-lg">{{ project.icon }}</span>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-bold text-white truncate mb-0.5">{{ project.title }}</div>
                  <div class="text-[11px] text-slate-600">{{ project.role }} · {{ project.period }}</div>
                </div>
                <svg v-if="activeProject === pIdx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4 shrink-0" :class="currentTheme.text">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </aside>

        <!-- RIGHT: Content Display -->
        <main v-if="currentCompany && currentTheme" class="right-panel">
          <transition name="detail-fade" mode="out-in">
            <!-- Company Overview (when no project selected) -->
            <div v-if="activeProject === null" :key="'company-' + activeCategory" class="detail-content">
              <!-- Company Header -->
              <div class="detail-header glass-panel rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-20" :class="currentTheme.headerGradient"></div>
                <div class="relative z-10">
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div class="flex items-center gap-5">
                      <div class="icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl" :class="currentTheme.iconBox">
                        {{ currentCompany.icon }}
                      </div>
                      <div>
                        <h2 class="text-3xl font-bold text-white mb-2">{{ currentCompany.name }}</h2>
                        <p class="text-sm text-slate-500">
                          <span class="font-semibold" :class="currentTheme.text">{{ currentCompany.position }}</span>
                          <span class="mx-2">·</span>
                          <span>{{ currentCompany.period }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p class="text-slate-400 text-base leading-relaxed">{{ currentCompany.summary }}</p>
                </div>
              </div>

              <!-- Company Total Stats -->
              <div class="mb-8">
                <h3 class="detail-section-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-emerald-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  整体成果数据
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
                  <div v-for="stat in currentCompany.totalStats" :key="stat.label" class="metric-card rounded-2xl p-6 group">
                    <div class="text-3xl font-black mb-2" :class="currentTheme.text">{{ stat.value }}</div>
                    <div class="text-sm text-slate-300 font-semibold">{{ stat.label }}</div>
                  </div>
                </div>
              </div>

              <!-- Projects List -->
              <div>
                <h3 class="detail-section-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-blue-400"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  项目列表
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div
                    v-for="(project, pIdx) in currentCompany.projects"
                    :key="project.title"
                    class="project-overview-card rounded-2xl p-6 cursor-pointer group"
                    @click="selectProject(pIdx)"
                  >
                    <div class="flex items-start gap-4 mb-4">
                      <div class="text-3xl">{{ project.icon }}</div>
                      <div class="flex-1">
                        <h4 class="text-lg font-bold text-white mb-1" :class="currentTheme.groupHoverText">{{ project.title }}</h4>
                        <p class="text-xs text-slate-500">{{ project.role }} · {{ project.period }}</p>
                      </div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 shrink-0 text-slate-600" :class="currentTheme.groupHoverText">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                    <p class="text-sm text-slate-500 leading-relaxed mb-4">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider" :class="currentTheme.tag">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Detail (when project selected) -->
            <div v-else-if="currentProject" :key="activeCategory + '-' + activeProject" class="detail-content">
              <!-- Project Header -->
              <div class="detail-header glass-panel rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-20" :class="currentTheme.headerGradient"></div>
                <div class="relative z-10">
                  <div class="flex flex-col md:grid md:grid-cols-[7fr_3fr] md:items-start gap-4 mb-6">
                    <div class="flex items-center gap-5 min-w-0">
                      <div class="icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl" :class="currentTheme.iconBox">
                        {{ currentProject.icon }}
                      </div>
                      <div class="min-w-0 flex-1">
                        <h2 class="text-3xl font-bold text-white mb-2">{{ currentProject.title }}</h2>
                        <p class="text-sm text-slate-500">
                          <span class="font-semibold" :class="currentTheme.text">{{ currentCompany.shortName }}</span>
                          <span class="mx-2">·</span>
                          <span>{{ currentProject.role }}</span>
                          <span class="mx-2">·</span>
                          <span>{{ currentProject.period }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-1.5 md:justify-end md:items-start">
                      <span v-for="tag in currentProject.tags" :key="tag" class="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider" :class="currentTheme.tag">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                  <p class="text-slate-400 text-base leading-relaxed mb-4">{{ currentProject.description }}</p>
                  <!-- Project Link -->
                  <a v-if="currentProject.link" :href="currentProject.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all" :class="currentTheme.linkButton">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    查看项目
                  </a>
                </div>
              </div>

              <!-- Module Tabs (if project has modules) -->
              <div v-if="currentProject.modules && currentProject.modules.length > 0" class="mb-8">
                <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                  <button
                    v-for="(module, mIdx) in currentProject.modules"
                    :key="module.title"
                    class="module-tab relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all shrink-0"
                    :class="[
                      activeModule === mIdx
                        ? currentTheme.moduleTabActive
                        : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-transparent'
                    ]"
                    @click="selectModule(mIdx)"
                  >
                    <span>{{ module.icon }}</span>
                    <span>{{ module.title }}</span>
                  </button>
                </div>
              </div>

              <!-- Module Detail View (if module selected) -->
              <template v-if="currentModule">
                <!-- Module Business -->
                <div class="mb-8">
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-emerald-400"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    业务需求
                  </h3>
                  <div class="rounded-2xl p-6" :class="currentTheme.moduleBox">
                    <p class="text-sm text-slate-400 leading-relaxed">{{ currentModule.business }}</p>
                  </div>
                </div>

                <!-- Module Tech Stack -->
                <div class="mb-8">
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-cyan-400"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    技术选型
                  </h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in currentModule.tech" :key="tech" class="px-4 py-2 rounded-xl text-sm font-bold" :class="currentTheme.tag">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Module Approach -->
                <div class="mb-8">
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-blue-400"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    实现思路
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div
                      v-for="(step, i) in currentModule.approach"
                      :key="i"
                      class="approach-step rounded-xl p-5 flex gap-4 cursor-pointer transition-all hover:bg-white/5 hover:-translate-y-0.5"
                      @click="openApproachDrawer(step, i + 1, currentModule.title)"
                    >
                      <div class="step-number w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-sm font-black" :class="currentTheme.stepNumber">
                        {{ i + 1 }}
                      </div>
                      <div class="flex-1">
                        <h4 class="text-sm font-bold text-white mb-2 flex items-center justify-between">
                          {{ step.title }}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-slate-600 transition-transform">→</svg>
                        </h4>
                        <p class="text-xs text-slate-500 leading-relaxed">{{ step.detail }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Module Future Plans -->
                <div>
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-purple-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    未来规划
                  </h3>
                  <div class="future-plans rounded-2xl p-6" :class="currentTheme.moduleBox">
                    <ul class="space-y-4">
                      <li v-for="(plan, i) in currentModule.futurePlans" :key="i" class="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                        <span class="mt-0.5 w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-xs font-bold" :class="currentTheme.stepNumber">→</span>
                        {{ plan }}
                      </li>
                    </ul>
                  </div>
                </div>
              </template>

              <!-- Project Overview (if no module selected) -->
              <template v-else>
                <!-- Metrics -->
                <div class="mb-8">
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-emerald-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    核心数据提升
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div v-for="metric in currentProject.metrics" :key="metric.label" class="metric-card rounded-2xl p-6 group">
                      <div class="text-3xl font-black mb-2" :class="currentTheme.text">{{ metric.value }}</div>
                      <div class="text-sm text-slate-300 font-semibold mb-2">{{ metric.label }}</div>
                      <div class="text-xs text-slate-600 leading-relaxed">{{ metric.detail }}</div>
                    </div>
                  </div>
                </div>

                <!-- Approach -->
                <div class="mb-8">
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-blue-400"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    我是如何做到的
                  </h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div
                      v-for="(step, i) in currentProject.approach"
                      :key="i"
                      class="approach-step rounded-xl p-5 flex gap-4 cursor-pointer transition-all hover:bg-white/5 hover:-translate-y-0.5"
                      @click="openApproachDrawer(step, i + 1, currentProject.title)"
                    >
                      <div class="step-number w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-sm font-black" :class="currentTheme.stepNumber">
                        {{ i + 1 }}
                      </div>
                      <div class="flex-1">
                        <h4 class="text-sm font-bold text-white mb-2 flex items-center justify-between">
                          {{ step.title }}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-slate-600 transition-transform">→</svg>
                        </h4>
                        <p class="text-xs text-slate-500 leading-relaxed">{{ step.detail }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Future Plans -->
                <div>
                  <h3 class="detail-section-title">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-purple-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    未来我会如何做
                  </h3>
                  <div class="future-plans rounded-2xl p-6" :class="currentTheme.moduleBox">
                    <ul class="space-y-4">
                      <li v-for="(plan, i) in currentProject.futurePlans" :key="i" class="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                        <span class="mt-0.5 w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-xs font-bold" :class="currentTheme.stepNumber">→</span>
                        {{ plan }}
                      </li>
                    </ul>
                  </div>
                </div>
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

interface CompanyTheme {
  text: string
  tabGradient: string
  borderActive: string
  headerGradient: string
  iconBox: string
  groupHoverText: string
  tag: string
  linkButton: string
  moduleTabActive: string
  moduleBox: string
  stepNumber: string
}

// Static lookup so Tailwind JIT can see every class literally
const COMPANY_THEME: Record<CompanyColor, CompanyTheme> = {
  emerald: {
    text: 'text-emerald-400',
    tabGradient: 'from-emerald-500 to-green-500',
    borderActive: 'border-emerald-500/30',
    headerGradient: 'bg-linear-to-br from-emerald-600/10 via-transparent to-transparent',
    iconBox: 'bg-emerald-500/10',
    groupHoverText: 'group-hover:text-emerald-400',
    tag: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    linkButton: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20',
    moduleTabActive: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    moduleBox: 'bg-emerald-500/5 border border-emerald-500/10',
    stepNumber: 'bg-emerald-500/10 text-emerald-400',
  },
  blue: {
    text: 'text-blue-400',
    tabGradient: 'from-blue-500 to-cyan-500',
    borderActive: 'border-blue-500/30',
    headerGradient: 'bg-linear-to-br from-blue-600/10 via-transparent to-transparent',
    iconBox: 'bg-blue-500/10',
    groupHoverText: 'group-hover:text-blue-400',
    tag: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    linkButton: 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20',
    moduleTabActive: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
    moduleBox: 'bg-blue-500/5 border border-blue-500/10',
    stepNumber: 'bg-blue-500/10 text-blue-400',
  },
  purple: {
    text: 'text-purple-400',
    tabGradient: 'from-purple-500 to-pink-500',
    borderActive: 'border-purple-500/30',
    headerGradient: 'bg-linear-to-br from-purple-600/10 via-transparent to-transparent',
    iconBox: 'bg-purple-500/10',
    groupHoverText: 'group-hover:text-purple-400',
    tag: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    linkButton: 'bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20',
    moduleTabActive: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    moduleBox: 'bg-purple-500/5 border border-purple-500/10',
    stepNumber: 'bg-purple-500/10 text-purple-400',
  },
}

const categories: Category[] = [
  { id: 'milesight', name: '星纵物联', icon: '🏢', color: 'emerald', companyIndex: 0 },
  { id: 'highway', name: '高速工程顾问', icon: '🏗️', color: 'blue', companyIndex: 1 },
  { id: 'personal', name: '个人项目', icon: '🚀', color: 'purple', companyIndex: 2 }
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
const currentTheme = computed<CompanyTheme | null>(() => {
  const cat = currentCategory.value
  return cat ? COMPANY_THEME[cat.color] : null
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
/* Category Tabs */
.category-tabs-section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.category-tab {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.category-tab:not(.active-tab) {
  background: rgba(30, 41, 59, 0.3);
}

.category-tab:not(.active-tab):hover {
  transform: translateY(-1px);
  background: rgba(30, 41, 59, 0.5);
}

.category-tab.active-tab {
  transform: scale(1.05);
}

/* Layout */
.main-layout {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 2.5rem;
  align-items: start;
}

@media (max-width: 1024px) {
  .main-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

/* Left Panel */
.left-panel {
  position: sticky;
  top: 140px;
}

@media (max-width: 1024px) {
  .left-panel {
    position: static;
  }
}

.company-nav-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.company-nav-card:hover,
.company-nav-card.active-company {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.stat-mini {
  transition: all 0.2s ease;
}

.stat-mini:hover {
  transform: translateY(-2px);
}

.project-nav-block {
  background: rgba(15, 23, 42, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1rem;
}

.project-nav-item {
  background: rgba(15, 23, 42, 0.3);
  border: 1px solid transparent;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-nav-item:hover {
  background: rgba(15, 23, 42, 0.6);
  border-color: rgba(255, 255, 255, 0.05);
  transform: translateX(4px);
}

.project-nav-item.active-project {
  background: rgba(15, 23, 42, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transform: translateX(4px);
}

/* Right Panel */
.detail-header {
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.detail-header:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.detail-section-title {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: rgb(100, 116, 139);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
}

.metric-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.metric-card:hover {
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.approach-step {
  background: rgba(15, 23, 42, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.approach-step:hover {
  background: rgba(15, 23, 42, 0.5);
  border-color: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.step-number {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.approach-step:hover .step-number {
  transform: scale(1.15) rotate(5deg);
}

.future-plans {
  border-radius: 16px;
  transition: all 0.3s ease;
}

.future-plans:hover {
  transform: translateY(-2px);
}

.icon-box {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.detail-header:hover .icon-box {
  transform: scale(1.1) rotate(5deg);
}

.philosophy-mini {
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(15, 23, 42, 0.4);
  transition: all 0.3s ease;
}

.philosophy-mini:hover {
  border-color: rgba(255, 255, 255, 0.08);
  background: rgba(15, 23, 42, 0.6);
}

/* Transition */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.detail-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.detail-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.project-overview-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-overview-card:hover {
  background: rgba(15, 23, 42, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

/* Responsive Typography */
@media (max-width: 768px) {
  .detail-header {
    padding: 1.5rem !important;
  }

  .metric-card {
    padding: 1.25rem !important;
  }

  .approach-step {
    padding: 1rem !important;
  }
}
</style>
