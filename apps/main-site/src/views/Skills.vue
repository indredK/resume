<template>
  <div class="skills-page">
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
  padding: 12px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.category-tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 12px;
  flex-shrink: 0;
}

.category-tab {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid transparent;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #94a3b8;
}

.category-tab:hover {
  background: rgba(51, 65, 85, 0.8);
}

.category-tab.active {
  border-color: var(--cat-color);
  background: rgba(30, 41, 59, 0.95);
  color: white;
}

.cat-icon {
  font-size: 12px;
}

.cat-name {
  font-size: 11px;
  font-weight: 500;
}

.tree-container {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.5);
}
</style>
