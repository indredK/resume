<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="visible" class="drawer-overlay" @click.self="$emit('close')">
        <div class="drawer-content glass-panel" :style="{ '--theme-color': getColor() }">
        <!-- Toast 通知 -->
        <Transition name="toast">
          <div v-if="notification" class="toast-container" :class="notification.type">
            <span class="toast-icon">
              <svg v-if="notification.type === 'success'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-3 h-3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <svg v-else-if="notification.type === 'error'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-3 h-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="w-3 h-3"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </span>
            {{ notification.message }}
          </div>
        </Transition>

        <div class="drawer-header">
            <div class="header-main">
              <div class="skill-icon-wrapper" :style="{ background: `color-mix(in srgb, ${getColor()} 20%, transparent)` }">
                <span class="skill-icon">{{ getIcon() }}</span>
              </div>
              <div class="skill-info-main">
                <h2 class="skill-name">
                  {{ skill.name || '未命名' }}
                </h2>
                <p v-if="skill.children?.length" class="skill-count">
                  {{ skill.children.length }} Sub-technologies
                </p>
              </div>
              <div class="header-actions">
                <button
                  v-if="skill.repo"
                  class="action-btn refresh"
                  :class="{ 'is-loading': loading }"
                  @click="refreshVersion"
                  title="获取最新版本"
                >
                  <svg class="refresh-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 4v6h-6"></path>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                  </svg>
                </button>
                <a
                  v-if="skill.officialLink"
                  :href="skill.officialLink"
                  target="_blank"
                  class="action-btn official"
                  title="官网"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </a>
                <button class="action-btn close" @click="$emit('close')">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div v-if="skill.version" class="version-banner">
              <span class="version-tag">{{ skill.version }}</span>
              <span v-if="skill.releaseDate" class="release-date">Released on {{ skill.releaseDate }}</span>
            </div>

            <div v-if="skill.reason" class="reason-box">
              {{ skill.reason }}
            </div>
          </div>

          <div class="drawer-body custom-scrollbar">
            <div class="skill-detail-grid">
              <!-- 子技术/生态列表 -->
              <div v-if="skill.children?.length" class="detail-section">
                <h3 class="section-label">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                  Ecosystem
                </h3>
                <div class="eco-list">
                  <div
                    v-for="child in skill.children"
                    :key="child.id || child.name"
                    class="eco-item glass-card"
                    @click="handleChildClick(child)"
                  >
                    <span class="eco-icon">{{ child.icon || '📁' }}</span>
                    <div class="eco-info">
                      <span class="eco-name">{{ child.name }}</span>
                      <div class="eco-meta">
                        <span v-if="child.version" class="eco-ver">{{ child.version }}</span>
                        <span v-if="child.releaseDate" class="eco-date">{{ child.releaseDate }}</span>
                      </div>
                    </div>
                    <span class="eco-arrow">↗</span>
                  </div>
                </div>
              </div>

              <!-- 优势 -->
              <div v-if="skill.advantages?.length" class="detail-section">
                <h3 class="section-label success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Key Advantages
                </h3>
                <div class="pros-cons-grid">
                  <div v-for="(adv, idx) in skill.advantages" :key="idx" class="pro-item">
                    <span class="bullet"></span>
                    {{ adv }}
                  </div>
                </div>
              </div>

              <!-- 劣势 -->
              <div v-if="skill.disadvantages?.length" class="detail-section">
                <h3 class="section-label danger">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  Considerations
                </h3>
                <div class="pros-cons-grid">
                  <div v-for="(dis, idx) in skill.disadvantages" :key="idx" class="con-item">
                    <span class="bullet"></span>
                    {{ dis }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted } from 'vue'

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

const props = defineProps<{
  visible: boolean
  skill: SkillData
}>()

const loading = ref(false)
const notification = ref<{ message: string; type: 'success' | 'error' | 'info' } | null>(null)
let notificationTimer: any = null

const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
  if (notificationTimer) clearTimeout(notificationTimer)
  notification.value = { message, type }
  notificationTimer = setTimeout(() => {
    notification.value = null
  }, 3000)
}

const emit = defineEmits<{
  close: []
  select: [skill: SkillData]
}>()

// 锁定背景滚动逻辑
watch(() => props.visible, (isVisible) => {
  if (isVisible) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    notification.value = null // 关闭抽屉时清除通知
  }
}, { immediate: true })

onUnmounted(() => {
  document.body.style.overflow = ''
  if (notificationTimer) clearTimeout(notificationTimer)
})

const getIcon = (): string => {
  if (!props.skill) return '📁'
  return props.skill.icon || '📁'
}

const getColor = (): string => {
  if (!props.skill) return '#3b82f6'
  return props.skill.color || '#3b82f6'
}

const handleChildClick = (child: SkillData) => {
  if (child.officialLink) {
    window.open(child.officialLink, '_blank')
  } else {
    emit('select', child)
  }
}

const fetchWithTimeout = async (url: string, options: any = {}, timeout = 8000) => {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)
  try {
    const response = await fetch(url, { ...options, signal: controller.signal })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

const refreshVersion = async () => {
  if (!props.skill.repo || loading.value) return
  
  loading.value = true
  let retryCount = 0
  const maxRetries = 3

  const attemptFetch = async (): Promise<boolean> => {
    try {
      // 优先获取最新 Release
      const response = await fetchWithTimeout(`https://api.github.com/repos/${props.skill.repo}/releases/latest`)
      
      if (response.status === 403) {
        showNotification('GitHub API 频率限制，请稍后再试', 'error')
        return true
      }

      if (response.ok) {
        const data = await response.json()
        props.skill.version = data.tag_name
        props.skill.releaseDate = new Date(data.published_at).toLocaleDateString('zh-CN')
        showNotification('版本更新成功', 'success')
        return true
      } else {
        // 如果没有 Release，获取最新 Tag
        const tagResponse = await fetchWithTimeout(`https://api.github.com/repos/${props.skill.repo}/tags`)
        if (tagResponse.ok) {
          const tags = await tagResponse.json()
          if (tags.length > 0) {
            props.skill.version = tags[0].name
            const commitResponse = await fetchWithTimeout(tags[0].commit.url)
            if (commitResponse.ok) {
              const commitData = await commitResponse.json()
              props.skill.releaseDate = new Date(commitData.commit.committer.date).toLocaleDateString('zh-CN')
              showNotification('版本更新成功 (Tag)', 'success')
              return true
            }
          }
        }
      }
      throw new Error('API 响应异常')
    } catch (error: any) {
      if (error.name === 'AbortError') {
        if (retryCount < maxRetries) {
          retryCount++
          showNotification(`请求超时，正在进行第 ${retryCount} 次重试...`, 'info')
          return await attemptFetch()
        }
        showNotification('请求超时，请检查网络连接', 'error')
      } else {
        showNotification('获取版本失败，请检查仓库配置或网络', 'error')
      }
      return true
    }
  }

  await attemptFetch()
  loading.value = false
}
</script>

<style scoped>
.drawer-overlay {
  @apply fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex justify-end;
}

.drawer-content {
  @apply w-full max-w-lg h-full shadow-2xl flex flex-col relative;
  border-left: 1px solid rgba(255, 255, 255, 0.05);
}

.toast-container {
  @apply absolute top-4 left-1/2 -translate-x-1/2 z-[110] px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2 border whitespace-nowrap;
  backdrop-filter: blur(8px);
}

.toast-container.success {
  @apply bg-emerald-500/20 text-emerald-400 border-emerald-500/30;
}

.toast-container.error {
  @apply bg-rose-500/20 text-rose-400 border-rose-500/30;
}

.toast-container.info {
  @apply bg-blue-500/20 text-blue-400 border-blue-500/30;
}

.toast-icon {
  @apply w-4 h-4 flex items-center justify-center rounded-full bg-white/10;
}

/* Toast 动画 */
.toast-enter-active, .toast-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translate(-50%, -10px) scale(0.9);
}

.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -10px) scale(0.9);
}

.drawer-header {
  @apply p-8 pb-6 flex flex-col gap-6;
  background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
}

.header-main {
  @apply flex items-center gap-4;
}

.skill-icon-wrapper {
  @apply w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner;
}

.skill-info-main {
  @apply flex-1 flex flex-col gap-1;
}

.skill-name {
  @apply text-2xl font-bold text-white tracking-tight;
}

.skill-count {
  @apply text-xs font-medium text-slate-500 uppercase tracking-wider;
}

.header-actions {
  @apply flex items-center gap-2;
}

.action-btn {
  @apply w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-slate-400 transition-all duration-300;
}

.action-btn:hover {
  @apply bg-white/10 text-white border-white/10 -translate-y-0.5;
}

.action-btn.refresh:hover {
  @apply text-blue-400 bg-blue-500/10;
}

.action-btn.close:hover {
  @apply text-rose-400 bg-rose-500/10;
}

.refresh-svg {
  @apply w-4 h-4;
}

.is-loading .refresh-svg {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.version-banner {
  @apply flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5;
}

.version-tag {
  @apply px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 text-[10px] font-bold border border-blue-500/20;
}

.release-date {
  @apply text-[11px] text-slate-500 font-medium;
}

.reason-box {
  @apply text-sm leading-relaxed text-slate-400 p-4 rounded-xl bg-white/[0.02] border-l-2 border-[--theme-color];
}

.drawer-body {
  @apply flex-1 overflow-y-auto px-8 pb-12;
}

.skill-detail-grid {
  @apply flex flex-col gap-10;
}

.section-label {
  @apply flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-4;
}

.section-label.success { @apply text-emerald-500/70; }
.section-label.danger { @apply text-rose-500/70; }

.eco-list {
  @apply flex flex-col gap-3;
}

.eco-item {
  @apply flex items-center gap-4 p-4 rounded-xl cursor-pointer;
}

.eco-icon {
  @apply text-xl;
}

.eco-info {
  @apply flex-1 flex flex-col gap-0.5;
}

.eco-name {
  @apply text-sm font-semibold text-slate-200;
}

.eco-meta {
  @apply flex items-center gap-3;
}

.eco-ver {
  @apply text-[10px] font-bold text-blue-400/80;
}

.eco-date {
  @apply text-[10px] text-slate-500;
}

.eco-arrow {
  @apply text-slate-600 text-xs transition-transform duration-300;
}

.eco-item:hover .eco-arrow {
  @apply text-white translate-x-1 -translate-y-1;
}

.pros-cons-grid {
  @apply flex flex-col gap-3;
}

.pro-item, .con-item {
  @apply flex items-start gap-3 text-sm text-slate-400 leading-relaxed;
}

.bullet {
  @apply w-1 h-1 rounded-full mt-2 flex-shrink-0;
}

.pro-item .bullet { @apply bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]; }
.con-item .bullet { @apply bg-rose-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]; }

/* 过渡动画 */
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-active .drawer-content, .drawer-leave-active .drawer-content {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from { opacity: 0; }
.drawer-enter-from .drawer-content { transform: translateX(100%); }

.drawer-leave-to { opacity: 0; }
.drawer-leave-to .drawer-content { transform: translateX(100%); }

/* 自定义滚动条 */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-white/10 rounded-full;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-white/20;
}
</style>
