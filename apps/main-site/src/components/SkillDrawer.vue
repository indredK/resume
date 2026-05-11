<template>
  <Transition name="drawer">
    <div v-if="visible" class="drawer-overlay" @click.self="$emit('close')">
      <div class="drawer-panel" :style="{ '--theme-color': getColor() }">
        <div class="drawer-header">
          <span class="skill-icon">{{ getIcon() }}</span>
          <h2 class="skill-name">
            {{ skill.name || '未命名' }}
          </h2>
          <div class="header-actions">
            <button
              v-if="skill.repo"
              class="header-link refresh"
              :class="{ 'is-loading': loading }"
              @click="refreshVersion"
              title="获取最新版本"
            >
              <svg class="refresh-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M23 4v6h-6"></path>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
            </button>
            <a
              v-if="skill.officialLink"
              :href="skill.officialLink"
              target="_blank"
              class="header-link official"
              title="官网"
            >🌐</a>
            <button class="close-btn" @click="$emit('close')">×</button>
          </div>
          <p v-if="skill.children?.length" class="skill-count">
            包含 {{ skill.children.length }} 项技术
          </p>
          <div v-if="skill.version" class="version-info-header">
            <span class="version-tag">{{ skill.version }}</span>
            <span v-if="skill.releaseDate" class="release-date">发布于 {{ skill.releaseDate }}</span>
          </div>
          <p v-if="skill.reason" class="skill-reason-header">
            {{ skill.reason }}
          </p>
        </div>

        <div class="drawer-body">
          <div class="skill-detail">
            <!-- 子技术/生态列表 -->
            <div v-if="skill.children?.length" class="children-section">
              <h3 class="section-title">
                <span class="title-icon">📦</span>
                技术生态
              </h3>
              <div class="children-list">
                <div
                  v-for="child in skill.children"
                  :key="child.id || child.name"
                  class="child-item"
                  @click="handleChildClick(child)"
                >
                  <span class="child-icon">{{ child.icon || '📁' }}</span>
                  <div class="child-info">
                    <span class="child-name">{{ child.name }}</span>
                    <div class="child-meta">
                      <span v-if="child.version" class="child-version">{{ child.version }}</span>
                      <span v-if="child.releaseDate" class="child-date">{{ child.releaseDate }}</span>
                    </div>
                  </div>
                  <span v-if="child.officialLink" class="child-link-icon">↗</span>
                </div>
              </div>
            </div>

            <!-- 优势 -->
            <div v-if="skill.advantages?.length" class="advantages-section">
              <h3 class="section-title advantages">
                <span class="title-icon">✓</span>
                优势
              </h3>
              <ul class="advantage-list">
                <li v-for="(adv, idx) in skill.advantages" :key="idx" class="advantage-item">
                  {{ adv }}
                </li>
              </ul>
            </div>

            <!-- 劣势 -->
            <div v-if="skill.disadvantages?.length" class="disadvantages-section">
              <h3 class="section-title disadvantages">
                <span class="title-icon">✗</span>
                劣势
              </h3>
              <ul class="disadvantage-list">
                <li v-for="(dis, idx) in skill.disadvantages" :key="idx" class="disadvantage-item">
                  {{ dis }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface SkillData {
  id?: string
  name: string
  icon?: string
  color?: string
  level?: number
  link?: string
  officialLink?: string
  version?: string
  releaseDate?: string
  repo?: string
  projectLink?: string
  reason?: string
  advantages?: string[]
  disadvantages?: string[]
  children?: SkillData[]
}

interface Props {
  visible: boolean
  skill: SkillData
}

const props = defineProps<Props>()
const loading = ref(false)

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
  if (child.officialLink) {
    window.open(child.officialLink, '_blank')
  } else {
    emit('select', child)
  }
}

const refreshVersion = async () => {
  if (!props.skill.repo || loading.value) return
  
  loading.value = true
  try {
    // 优先获取最新 Release
    const response = await fetch(`https://api.github.com/repos/${props.skill.repo}/releases/latest`)
    if (response.ok) {
      const data = await response.json()
      props.skill.version = data.tag_name
      props.skill.releaseDate = new Date(data.published_at).toLocaleDateString('zh-CN')
    } else {
      // 如果没有 Release，获取最新 Tag
      const tagResponse = await fetch(`https://api.github.com/repos/${props.skill.repo}/tags`)
      if (tagResponse.ok) {
        const tags = await tagResponse.json()
        if (tags.length > 0) {
          props.skill.version = tags[0].name
          // 获取该 Tag 的提交日期
          const commitResponse = await fetch(tags[0].commit.url)
          if (commitResponse.ok) {
            const commitData = await commitResponse.json()
            props.skill.releaseDate = new Date(commitData.commit.committer.date).toLocaleDateString('zh-CN')
          }
        }
      }
    }
  } catch (error) {
    console.error('Failed to fetch version:', error)
  } finally {
    loading.value = false
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
  width: 380px;
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
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  background: linear-gradient(135deg, var(--theme-color) 0%, transparent 60%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.skill-icon {
  font-size: 32px;
}

.skill-name {
  font-size: 18px;
  font-weight: bold;
  color: white;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.skill-version-tag {
  font-size: 12px;
  font-weight: normal;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-count {
  color: #94a3b8;
  font-size: 12px;
  width: 100%;
  order: 1;
  margin-bottom: 2px;
}

.version-info-header {
  width: 100%;
  order: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
}

.version-tag {
  font-size: 11px;
  color: var(--theme-color);
  background: color-mix(in srgb, var(--theme-color) 15%, transparent);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--theme-color) 30%, transparent);
}

.release-date {
  font-size: 10px;
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.05);
  padding: 1px 6px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skill-reason-header {
  color: #cbd5e1;
  font-size: 13px;
  line-height: 1.6;
  width: 100%;
  order: 2;
  margin: 12px 0 4px 0;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border-left: 3px solid var(--theme-color);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-link {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  color: inherit;
}

.header-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.header-link.refresh:hover {
  background: rgba(56, 189, 248, 0.2);
  color: #38bdf8;
}

.refresh-svg {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
}

.is-loading .refresh-svg {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.header-link.official:hover {
  background: rgba(74, 222, 128, 0.3);
}

.close-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  border-radius: 50%;
  font-size: 18px;
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

.child-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.child-name {
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 500;
}

.child-meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.child-version {
  font-size: 11px;
  color: var(--theme-color);
  opacity: 0.8;
}

.child-date {
  font-size: 10px;
  color: #94a3b8;
  opacity: 0.8;
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

.children-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-detail {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.info-link:hover {
  background: rgba(51, 65, 85, 0.6);
  border-color: var(--theme-color);
  transform: translateX(4px);
}

.info-link.official {
  border-left: 3px solid var(--theme-color);
}

.info-link.project {
  border-left: 3px solid #fbbf24;
}

.link-icon {
  font-size: 18px;
}

.link-text {
  flex: 1;
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 500;
}

.link-arrow {
  color: #64748b;
  font-size: 14px;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.info-label {
  color: #94a3b8;
  font-size: 13px;
}

.info-value {
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 500;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 12px;
}

.title-icon {
  font-size: 14px;
}

.section-title.advantages {
  color: #4ade80;
}

.section-title.disadvantages {
  color: #f87171;
}

.advantages-section,
.disadvantages-section {
  padding: 16px;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.advantages-section {
  border-left: 3px solid #4ade80;
}

.disadvantages-section {
  border-left: 3px solid #f87171;
}

.advantage-list,
.disadvantage-list {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.advantage-item,
.disadvantage-item {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.5;
}
</style>
