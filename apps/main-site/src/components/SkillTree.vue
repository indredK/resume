<template>
  <div class="skill-grid-page">
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
    <template v-else>
      <div class="category-section animate-fade-in" v-for="(cat, index) in displayData" :key="cat.id" :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="category-header" :style="{ '--cat-color': cat.color }">
          <div class="header-content glass-panel">
            <span class="cat-icon">{{ cat.icon }}</span>
            <span class="cat-name">{{ cat.name }}</span>
          </div>
        </div>

        <div class="category-tree">
          <div class="skills-row">
            <template v-if="cat.children">
              <div
                v-for="sub in cat.children"
                :key="sub.id"
                class="skill-group glass-card"
              >
                <div class="group-header" v-if="sub.name">
                  <span class="group-icon">{{ sub.icon || '📁' }}</span>
                  <span class="group-name">{{ sub.name }}</span>
                </div>

                <div class="group-skills">
                  <div
                    v-for="skill in (sub.children || [sub])"
                    :key="skill.id || skill.name"
                    class="skill-item"
                    :class="{ 'glass-card': skill.items?.length }"
                    :style="{ '--skill-color': skill.color || cat.color }"
                    @click="handleSkillClick(skill)"
                  >
                    <div class="skill-dot" :style="{ background: skill.color || cat.color }"></div>
                    <span class="skill-icon">{{ skill.icon || '📄' }}</span>
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="hover-arrow">→</span>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                class="skill-item single glass-card"
                :style="{ '--skill-color': cat.color }"
                @click="handleSkillClick(cat)"
              >
                <span class="skill-icon">{{ cat.icon || '📄' }}</span>
                <span class="skill-name">{{ cat.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>

    <SkillDrawer
      :visible="drawerVisible && !isFrameworkCompare"
      :skill="selectedSkill"
      @close="drawerVisible = false"
    />

    <FrameworkCompareModal
      :visible="modalVisible"
      :skill="selectedSkill"
      @close="modalVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SkillDrawer from '@/components/SkillDrawer.vue'
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

const drawerVisible = ref(false)
const modalVisible = ref(false)
const selectedSkill = ref<SkillNode | null>(null)

const isFrameworkCompare = computed(() => {
  return selectedSkill.value?.id === 'fe-comparison'
})

const displayData = computed(() => {
  if (!skillTreeData.value.length) return []
  if (props.category === 'all') {
    return skillTreeData.value
  }
  return skillTreeData.value.filter((c: SkillNode) => c.id === props.category)
})

const handleSkillClick = (skill: SkillNode) => {
  selectedSkill.value = skill
  if (skill.id === 'fe-comparison') {
    modalVisible.value = true
  } else if ((skill as any).items?.length) {
    modalVisible.value = true
  } else {
    drawerVisible.value = true
  }
}
</script>

<style scoped>
.skill-grid-page {
  @apply container mx-auto px-4 py-8 flex flex-col gap-10;
}

.category-section {
  @apply relative;
}

.category-header {
  @apply mb-5 flex;
}

.header-content {
  @apply flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%);
}

.cat-icon {
  @apply text-xl;
}

.cat-name {
  @apply text-base font-bold text-white tracking-tight;
}

.category-tree {
  @apply relative;
}

.skills-row {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
}

.skill-group {
  @apply flex flex-col p-4 rounded-xl;
}

.group-header {
  @apply flex items-center gap-2 mb-3 pb-2 border-b border-white/5;
}

.group-icon {
  @apply text-sm opacity-60;
}

.group-name {
  @apply text-[12px] font-bold text-slate-400 uppercase tracking-wider;
}

.group-skills {
  @apply flex flex-col gap-1.5;
}

.skill-item {
  @apply flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-all duration-300;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
}

.skill-item:hover {
  @apply bg-white/5 -translate-y-0.5;
  border-color: rgba(255, 255, 255, 0.1);
}

.skill-dot {
  @apply w-1 h-1 rounded-full shadow-[0_0_6px_var(--skill-color)];
}

.skill-icon {
  @apply text-sm;
}

.skill-name {
  @apply flex-1 text-[13px] text-slate-400 font-medium transition-colors duration-300;
}

.skill-item:hover .skill-name {
  @apply text-slate-100;
}

.hover-arrow {
  @apply text-slate-600 opacity-0 transition-all duration-300 -translate-x-1;
}

.skill-item:hover .hover-arrow {
  @apply opacity-100 translate-x-0;
}

.skill-item.single {
  @apply w-full flex-row p-4;
}

.skill-item.glass-card {
  @apply p-4;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.skill-item.glass-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.clickable-group {
  @apply cursor-pointer transition-all duration-300;
  border: 1px solid transparent;
}

.clickable-group:hover {
  @apply bg-white/5 -translate-y-0.5;
  border-color: rgba(245, 158, 11, 0.3);
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.1);
}

.group-compare-hint {
  @apply flex items-center justify-center gap-2 py-3 mt-2 rounded-lg;
  background: rgba(245, 158, 11, 0.08);
  border: 1px dashed rgba(245, 158, 11, 0.2);
}

.hint-text {
  @apply text-[12px] text-amber-400/80 font-medium;
}

.hint-arrow {
  @apply text-amber-400/60 text-sm transition-transform duration-300;
}

.clickable-group:hover .hint-arrow {
  @apply translate-x-1;
}
</style>
