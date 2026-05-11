<template>
  <div class="skills-page">
    <div class="category-tabs-wrapper glass-panel">
      <div class="container mx-auto px-6">
        <div class="category-tabs">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="category-tab"
            :class="{ active: selectedCategory === cat.id }"
            :style="{ '--cat-color': cat.color }"
            @click="selectCategory(cat.id)"
          >
            <span class="cat-icon">{{ cat.icon }}</span>
            <span class="cat-name">{{ cat.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="tree-container">
      <SkillTree :category="selectedCategory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SkillTree from '@/components/SkillTree.vue'
import { categories } from '@/data/index'

const selectedCategory = ref('all')

const selectCategory = (id: string) => {
  selectedCategory.value = id
}
</script>

<style scoped>
.skills-page {
  @apply relative min-h-full flex flex-col;
  padding-top: 61px; /* 导航栏高度 */
}

.category-tabs-wrapper {
  @apply sticky top-[61px] z-40 py-4 border-b border-white/5;
  background: rgba(2, 6, 23, 0.95);
  backdrop-filter: blur(12px);
  min-height: fit-content;
}

.category-tabs {
  @apply flex gap-2 flex-wrap justify-center;
}

.category-tab {
  @apply flex items-center gap-2 px-4 py-1.5 rounded-xl border border-transparent cursor-pointer transition-all duration-300 text-slate-400;
  background: rgba(255, 255, 255, 0.03);
}

.category-tab:hover {
  @apply bg-white/5 text-slate-200;
}

.category-tab.active {
  @apply text-white border-white/10;
  background: color-mix(in srgb, var(--cat-color) 20%, rgba(255, 255, 255, 0.05));
  box-shadow: 0 0 20px -5px color-mix(in srgb, var(--cat-color) 30%, transparent);
  border-color: color-mix(in srgb, var(--cat-color) 40%, transparent);
}

.cat-icon {
  @apply text-sm;
}

.cat-name {
  @apply text-xs font-bold uppercase tracking-wide;
}

.tree-container {
  @apply flex-1 relative;
  padding-top: 1rem;
}
</style>
