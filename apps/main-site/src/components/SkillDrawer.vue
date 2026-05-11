<template>
  <Transition name="drawer">
    <div v-if="visible" class="drawer-overlay" @click.self="$emit('close')">
      <div class="drawer-panel" :style="{ '--theme-color': getColor() }">
        <div class="drawer-header">
          <span class="skill-icon">{{ getIcon() }}</span>
          <h2 class="skill-name">{{ skill.name || '未命名' }}</h2>
          <p v-if="skill.children?.length" class="skill-count">
            包含 {{ skill.children.length }} 项技术
          </p>
          <p v-else-if="skill.level !== undefined" class="skill-type">
            单项技术 · 掌握度 {{ skill.level }}%
          </p>
          <button class="close-btn" @click="$emit('close')">×</button>
        </div>

        <div class="drawer-body">
          <div v-if="skill.children?.length" class="children-list">
            <div
              v-for="child in skill.children"
              :key="child.id || child.name"
              class="child-item"
              @click="handleChildClick(child)"
            >
              <span class="child-icon">{{ child.icon || '📁' }}</span>
              <span class="child-name">{{ child.name }}</span>
              <span v-if="child.level !== undefined" class="child-level">
                {{ child.level }}%
              </span>
              <span v-if="child.link" class="child-link-icon">↗</span>
            </div>
          </div>

          <div v-else class="skill-detail">
            <div v-if="skill.level !== undefined" class="level-section">
              <div class="level-header">
                <span>掌握度</span>
                <span class="level-value">{{ skill.level }}%</span>
              </div>
              <div class="level-progress">
                <div class="level-fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>

            <div v-if="skill.link" class="link-section">
              <a :href="skill.link" target="_blank" class="external-link">
                <span>查看项目</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
interface SkillData {
  id?: string
  name: string
  icon?: string
  color?: string
  level?: number
  link?: string
  children?: SkillData[]
}

interface Props {
  visible: boolean
  skill: SkillData
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  select: [skill: SkillData]
}>()

const getIcon = (): string => {
  if (!props.skill) return '📁'
  return props.skill.icon || '📁'
}

const getColor = (): string => {
  if (!props.skill) return '#4ade80'
  return props.skill.color || '#4ade80'
}

const handleChildClick = (child: SkillData) => {
  emit('select', child)
  if (child.link) {
    window.open(child.link, '_blank')
  }
}
</script>

<style scoped>
.drawer-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.drawer-panel {
  width: 360px;
  max-width: 90vw;
  height: 100%;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-from .drawer-panel,
.drawer-leave-to .drawer-panel {
  transform: translateX(100%);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-header {
  padding: 24px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  background: linear-gradient(135deg, var(--theme-color) 0%, transparent 60%);
}

.skill-icon {
  font-size: 48px;
  display: block;
  margin-bottom: 12px;
}

.skill-name {
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 8px;
}

.skill-count,
.skill-type {
  color: #94a3b8;
  font-size: 14px;
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 20px;
}

.children-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.child-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.child-item:hover {
  background: rgba(51, 65, 85, 0.6);
  border-color: var(--theme-color);
}

.child-icon {
  font-size: 18px;
}

.child-name {
  flex: 1;
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 500;
}

.child-level {
  color: var(--theme-color);
  font-size: 12px;
  font-weight: bold;
}

.child-link-icon {
  color: #64748b;
  font-size: 12px;
}

.skill-detail {
  padding-top: 16px;
}

.level-section {
  margin-bottom: 24px;
}

.level-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #94a3b8;
  font-size: 13px;
}

.level-value {
  color: var(--theme-color);
  font-weight: bold;
}

.level-progress {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: var(--theme-color);
  border-radius: 4px;
}

.link-section {
  margin-top: 24px;
}

.external-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  background: var(--theme-color);
  color: #0f172a;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}

.external-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--theme-color) 30%, transparent);
}
</style>
