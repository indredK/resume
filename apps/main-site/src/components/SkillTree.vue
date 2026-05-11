<template>
  <div class="skill-grid-page">
    <div class="category-section" v-for="cat in displayData" :key="cat.id">
      <div class="category-header" :style="{ '--cat-color': cat.color }">
        <span class="cat-icon">{{ cat.icon }}</span>
        <span class="cat-name">{{ cat.name }}</span>
      </div>

      <div class="category-tree">
        <div class="tree-line" v-if="cat.children"></div>
        <div class="skills-row">
          <template v-if="cat.children">
            <div
              v-for="sub in cat.children"
              :key="sub.id"
              class="skill-group"
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
                  :style="{ '--skill-color': skill.color || cat.color }"
                  @click="handleSkillClick(skill)"
                >
                  <span class="skill-icon">{{ skill.icon || '📄' }}</span>
                  <span class="skill-name">{{ skill.name }}</span>
                  <span v-if="skill.level" class="skill-level">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div
              class="skill-item single"
              :style="{ '--skill-color': cat.color }"
              @click="handleSkillClick(cat)"
            >
              <span class="skill-icon">{{ cat.icon || '📄' }}</span>
              <span class="skill-name">{{ cat.name }}</span>
              <span v-if="cat.level" class="skill-level">{{ cat.level }}%</span>
            </div>
          </template>
        </div>
      </div>
    </div>

    <SkillDrawer
      :visible="drawerVisible"
      :skill="selectedSkill"
      @close="drawerVisible = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { skillTreeData } from '@/data/index'
import SkillDrawer from '@/components/SkillDrawer.vue'

interface SkillData {
  id?: string
  name: string
  icon?: string
  color?: string
  level?: number
  link?: string
  children?: SkillData[]
}

const props = defineProps<{
  category: string
}>()

const drawerVisible = ref(false)
const selectedSkill = ref<SkillData | null>(null)

const displayData = computed(() => {
  if (props.category === 'all') {
    return skillTreeData
  }
  return skillTreeData.filter((c: SkillData) => c.id === props.category)
})

const handleSkillClick = (skill: SkillData) => {
  selectedSkill.value = skill
  drawerVisible.value = true
}
</script>

<style scoped>
.skill-grid-page {
  padding: 16px 20px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.category-section {
  background: rgba(30, 41, 59, 0.4);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex-shrink: 0;
}

.category-header {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: linear-gradient(135deg, var(--cat-color) 0%, transparent 100%);
  border-radius: 8px;
  margin-bottom: 16px;
}

.cat-icon {
  font-size: 20px;
}

.cat-name {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.category-tree {
  position: relative;
  padding-left: 20px;
}

.tree-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--cat-color, #4ade80) 0%, transparent 100%);
  border-radius: 1px;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.skill-group {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 8px;
  padding: 12px;
  min-width: 180px;
  flex: 1;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.group-icon {
  font-size: 14px;
}

.group-name {
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
}

.group-skills {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid var(--skill-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.skill-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2),
              0 0 8px color-mix(in srgb, var(--skill-color) 30%, transparent);
  background: rgba(51, 65, 85, 0.9);
}

.skill-icon {
  font-size: 14px;
}

.skill-name {
  flex: 1;
  font-size: 13px;
  color: #f1f5f9;
  font-weight: 500;
}

.skill-level {
  font-size: 11px;
  color: var(--skill-color);
  font-weight: bold;
}

.skill-item.single {
  width: 100%;
}
</style>
