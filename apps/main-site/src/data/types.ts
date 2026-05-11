export interface SkillNode {
  id: string
  name: string
  icon?: string
  color?: string
  level?: number
  link?: string
  children?: SkillNode[]
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export const categories: Category[] = [
  { id: 'all', name: '全部', icon: '🌐', color: '#4ade80' },
  { id: 'frontend', name: '前端技术', icon: '⚡', color: '#4ade80' },
  { id: 'desktop', name: '桌面端', icon: '🖥️', color: '#60a5fa' },
  { id: 'mobile', name: '移动端', icon: '📱', color: '#f472b6' },
  { id: 'backend', name: '后端技术', icon: '🔧', color: '#38bdf8' },
  { id: 'database', name: '数据库', icon: '🗄️', color: '#fbbf24' },
  { id: 'devops', name: 'DevOps', icon: '🚀', color: '#a78bfa' },
  { id: 'industrial', name: '工业控制', icon: '🏭', color: '#fb923c' },
  { id: 'language', name: '编程语言', icon: '⌨️', color: '#2dd4bf' },
  { id: 'toolchain', name: '工具链', icon: '🔧', color: '#94a3b8' },
  { id: 'embedded', name: '嵌入式', icon: '🔌', color: '#22d3ee' },
  { id: 'emerging', name: '新兴技术', icon: '✨', color: '#e879f9' },
  { id: 'industry', name: '行业方案', icon: '🏢', color: '#64748b' },
  { id: 'solutions', name: '解决方案', icon: '💡', color: '#f59e0b' }
]
