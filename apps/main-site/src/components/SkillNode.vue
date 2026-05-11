<template>
  <div
    class="skill-node"
    :class="{
      'has-children': data.children && data.children.length > 0,
      'is-collapsed': data.collapsed
    }"
    :style="{ '--node-color': data.color || '#4ade80' }"
  >
    <div class="node-content" @click="$emit('click', $event)">
      <span v-if="data.children && data.children.length > 0" class="collapse-btn">
        {{ data.collapsed ? '+' : '-' }}
      </span>

      <span class="node-icon">{{ data.icon || '📁' }}</span>
      <span class="node-name">{{ data.name }}</span>

      <span v-if="data.children && data.children.length > 0 && !data.collapsed" class="node-badge">
        {{ data.children.length }}
      </span>
    </div>

    <div v-if="data.level !== undefined" class="node-level">
      <div class="level-bar">
        <div class="level-fill" :style="{ width: data.level + '%' }"></div>
      </div>
      <span class="level-text">{{ data.level }}%</span>
    </div>

    <div v-if="data.link" class="node-link" @click.stop="openLink">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SkillData {
  id?: string
  name: string
  icon?: string
  color?: string
  level?: number
  link?: string
  collapsed?: boolean
  children?: SkillData[]
}

defineProps<{
  data: SkillData
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()

const openLink = () => {
  const link = location.protocol + '//' + location.host + '/#' + window.location.pathname
  window.open(link, '_blank')
}
</script>

<style scoped>
.skill-node {
  padding: 8px 12px;
  background: rgba(30, 41, 59, 0.95);
  border: 1.5px solid var(--node-color);
  border-radius: 8px;
  min-width: 120px;
  max-width: 150px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.skill-node:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3),
              0 0 10px color-mix(in srgb, var(--node-color) 25%, transparent);
  z-index: 10;
}

.skill-node.has-children {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(51, 65, 85, 0.9));
}

.skill-node.is-collapsed {
  border-style: dashed;
  opacity: 0.85;
}

.node-content {
  display: flex;
  align-items: center;
  gap: 4px;
}

.collapse-btn {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--node-color);
  color: #0f172a;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}

.collapse-btn:hover {
  transform: scale(1.1);
}

.node-icon {
  font-size: 14px;
  flex-shrink: 0;
}

.node-name {
  flex: 1;
  font-size: 11px;
  font-weight: 600;
  color: #f1f5f9;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.node-badge {
  background: var(--node-color);
  color: #0f172a;
  font-size: 8px;
  font-weight: bold;
  padding: 1px 4px;
  border-radius: 6px;
  flex-shrink: 0;
}

.node-level {
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.level-bar {
  flex: 1;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: var(--node-color);
  border-radius: 1px;
}

.level-text {
  font-size: 8px;
  color: var(--node-color);
  font-weight: bold;
  min-width: 24px;
  text-align: right;
}

.node-link {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  background: var(--node-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.2s ease;
  cursor: pointer;
}

.node-link svg {
  width: 9px;
  height: 9px;
  color: #0f172a;
}

.skill-node:hover .node-link {
  opacity: 1;
  transform: scale(1);
}
</style>
