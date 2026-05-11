<template>
  <div class="case-studies-page animate-fade-in">
    <!-- Category Tabs -->
    <section class="category-tabs-section sticky top-16 z-40 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/50 flex items-center">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-center gap-2 py-3 overflow-x-auto scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectCategory(category.id)"
            class="category-tab relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs whitespace-nowrap transition-all flex-shrink-0"
            :class="[
              activeCategory === category.id 
                ? `active-tab text-white` 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            ]"
          >
            <!-- Active Background Gradient -->
            <div v-if="activeCategory === category.id" class="absolute inset-0 rounded-full opacity-100 transition-opacity" :class="`bg-gradient-to-r ${category.color === 'emerald' ? 'from-emerald-500 to-green-500' : category.color === 'blue' ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'}`"></div>
            
            <!-- Content -->
            <span class="relative z-10 text-base">{{ category.icon }}</span>
            <span class="relative z-10">{{ category.name }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Main Content: Left-Right Layout -->
    <section class="container mx-auto px-6 pt-24 pb-32">
      <div class="main-layout">
        <!-- LEFT: Project Navigation -->
        <aside class="left-panel" v-if="currentCompany">
          <div class="project-nav-block">
            <!-- Project List -->
            <div class="project-nav-list space-y-2">
              <div
                v-for="(project, pIdx) in currentCompany.projects"
                :key="project.title"
                class="project-nav-item rounded-xl px-4 py-3.5 cursor-pointer flex items-center gap-3"
                :class="[
                  activeProject === pIdx ? 'active-project border-' + currentCompany.color + '-500/30' : ''
                ]"
                @click="selectProject(pIdx)"
              >
                <span class="text-lg">{{ project.icon }}</span>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-bold text-white truncate mb-0.5">{{ project.title }}</div>
                  <div class="text-[11px] text-slate-600">{{ project.role }} · {{ project.period }}</div>
                </div>
                <svg v-if="activeProject === pIdx" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4 flex-shrink-0" :class="'text-' + currentCompany.color + '-400'">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </aside>

        <!-- RIGHT: Content Display -->
        <main class="right-panel" v-if="currentCompany">
          <transition name="detail-fade" mode="out-in">
            <!-- Company Overview (when no project selected) -->
            <div v-if="activeProject === null" :key="'company-' + activeCategory" class="detail-content">
              <!-- Company Header -->
              <div class="detail-header glass-panel rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-20" :class="'bg-gradient-to-br from-' + currentCompany.color + '-600/10 via-transparent to-transparent'"></div>
                <div class="relative z-10">
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div class="flex items-center gap-5">
                      <div class="icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl" :class="'bg-' + currentCompany.color + '-500/10'">
                        {{ currentCompany.icon }}
                      </div>
                      <div>
                        <h2 class="text-3xl font-bold text-white mb-2">{{ currentCompany.name }}</h2>
                        <p class="text-sm text-slate-500">
                          <span :class="'text-' + currentCompany.color + '-400 font-semibold'">{{ currentCompany.position }}</span>
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
                    <div class="text-3xl font-black mb-2" :class="'text-' + currentCompany.color + '-400'">{{ stat.value }}</div>
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
                        <h4 class="text-lg font-bold text-white mb-1 group-hover:text-" :class="currentCompany.color + '-400'">{{ project.title }}</h4>
                        <p class="text-xs text-slate-500">{{ project.role }} · {{ project.period }}</p>
                      </div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 flex-shrink-0 text-slate-600 group-hover:text-" :class="currentCompany.color + '-400'">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                    <p class="text-sm text-slate-500 leading-relaxed mb-4">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider" :class="'bg-' + currentCompany.color + '-500/10 text-' + currentCompany.color + '-400 border border-' + currentCompany.color + '-500/20'">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Project Detail (when project selected) -->
            <div v-else :key="activeCategory + '-' + activeProject" class="detail-content">
              <!-- Project Header -->
              <div class="detail-header glass-panel rounded-3xl p-8 md:p-10 mb-8 relative overflow-hidden">
                <div class="absolute inset-0 opacity-20" :class="'bg-gradient-to-br from-' + currentCompany.color + '-600/10 via-transparent to-transparent'"></div>
                <div class="relative z-10">
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div class="flex items-center gap-5">
                      <div class="icon-box w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl" :class="'bg-' + currentCompany.color + '-500/10'">
                        {{ currentProject.icon }}
                      </div>
                      <div>
                        <h2 class="text-3xl font-bold text-white mb-2">{{ currentProject.title }}</h2>
                        <p class="text-sm text-slate-500">
                          <span :class="'text-' + currentCompany.color + '-400 font-semibold'">{{ currentCompany.shortName }}</span>
                          <span class="mx-2">·</span>
                          <span>{{ currentProject.role }}</span>
                          <span class="mx-2">·</span>
                          <span>{{ currentProject.period }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in currentProject.tags" :key="tag" class="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider" :class="'bg-' + currentCompany.color + '-500/10 text-' + currentCompany.color + '-400 border border-' + currentCompany.color + '-500/20'">
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                  <p class="text-slate-400 text-base leading-relaxed mb-4">{{ currentProject.description }}</p>
                  <!-- Project Link -->
                  <a v-if="currentProject.link" :href="currentProject.link" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all" :class="'bg-' + currentCompany.color + '-500/10 text-' + currentCompany.color + '-400 border border-' + currentCompany.color + '-500/20 hover:bg-' + currentCompany.color + '-500/20'">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    查看项目
                  </a>
                </div>
              </div>

              <!-- Metrics -->
              <div class="mb-8">
                <h3 class="detail-section-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4 text-emerald-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  核心数据提升
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div v-for="metric in currentProject.metrics" :key="metric.label" class="metric-card rounded-2xl p-6 group">
                    <div class="text-3xl font-black mb-2" :class="'text-' + currentCompany.color + '-400'">{{ metric.value }}</div>
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
                  <div v-for="(step, i) in currentProject.approach" :key="i" class="approach-step rounded-xl p-5 flex gap-4">
                    <div class="step-number w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-black" :class="'bg-' + currentCompany.color + '-500/10 text-' + currentCompany.color + '-400'">
                      {{ i + 1 }}
                    </div>
                    <div>
                      <h4 class="text-sm font-bold text-white mb-2">{{ step.title }}</h4>
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
                <div class="future-plans rounded-2xl p-6" :class="'bg-' + currentCompany.color + '-500/5 border border-' + currentCompany.color + '-500/10'">
                  <ul class="space-y-4">
                    <li v-for="(plan, i) in currentProject.futurePlans" :key="i" class="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                      <span class="mt-0.5 w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center text-xs font-bold" :class="'bg-' + currentCompany.color + '-500/10 text-' + currentCompany.color + '-400'">→</span>
                      {{ plan }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </main>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { companies, principles } from '@/data/caseStudies'
import type { Company } from '@/data/types'

// 定义类别标签
interface Category {
  id: string
  name: string
  icon: string
  color: string
  companyIndex: number
}

const categories: Category[] = [
  { id: 'milesight', name: '星纵物联', icon: '🏢', color: 'emerald', companyIndex: 0 },
  { id: 'highway', name: '高速工程顾问', icon: '🏗️', color: 'blue', companyIndex: 1 },
  { id: 'personal', name: '个人项目', icon: '🚀', color: 'purple', companyIndex: 2 }
]

const activeCategory = ref<string>('milesight') // 当前激活的类别
const activeProject = ref<number | null>(null) // null 表示只选中公司，未选中具体项目

const currentCategory = computed<Category | undefined>(() => categories.find(cat => cat.id === activeCategory.value))
const currentCompany = computed<Company | null>(() => {
  const cat = currentCategory.value
  return cat ? companies[cat.companyIndex] : null
})
const currentProject = computed(() => {
  if (activeProject.value === null || !currentCompany.value) return null
  return currentCompany.value.projects[activeProject.value]
})

function selectCategory(categoryId: string): void {
  activeCategory.value = categoryId
  activeProject.value = null // 切换类别时，清除项目选择
}

function selectProject(pIdx: number): void {
  activeProject.value = pIdx
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
