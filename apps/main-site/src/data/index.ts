import type { SkillNode } from './types'
import { frontendSkills } from './frontend'
import { desktopSkills } from './desktop'
import { solutionSkills } from './solutions'
import { backendSkills } from './backend'
import { databaseSkills } from './database'
import { devopsSkills } from './devops'
import { industrialSkills } from './industrial'
import { toolchainSkills } from './toolchain'
import { mobileSkills } from './mobile'
import { embeddedSkills } from './embedded'
import { emergingSkills } from './emerging'
import { languageSkills } from './language'
import { industrySkills } from './industry'

export {
  frontendSkills,
  desktopSkills,
  solutionSkills,
  backendSkills,
  databaseSkills,
  devopsSkills,
  industrialSkills,
  languageSkills,
  toolchainSkills,
  mobileSkills,
  embeddedSkills,
  emergingSkills,
  industrySkills,
}

export const allSkills: SkillNode[] = [
  frontendSkills,
  desktopSkills,
  backendSkills,
  databaseSkills,
  devopsSkills,
  industrialSkills,
  languageSkills,
  toolchainSkills,
  mobileSkills,
  embeddedSkills,
  emergingSkills,
  industrySkills,
]

export const skillTreeData = allSkills

export const categories = [
  { id: 'all', name: '全部', icon: '🌈', color: '#94a3b8' },
  { id: 'frontend', name: '前端技术', icon: '⚡', color: '#4ade80' },
  { id: 'desktop', name: '桌面技术', icon: '🖥️', color: '#60a5fa' },
  { id: 'language', name: '编程语言', icon: '🔤', color: '#f59e0b' },
  { id: 'backend', name: '后端技术', icon: '⚙️', color: '#818cf8' },
  { id: 'database', name: '数据库', icon: '🗄️', color: '#f472b6' },
  { id: 'devops', name: 'DevOps', icon: '🚀', color: '#2dd4bf' },
  { id: 'industrial', name: '工业控制', icon: '🏭', color: '#fbbf24' },
  { id: 'toolchain', name: '工具链', icon: '🛠️', color: '#94a3b8' },
  { id: 'mobile', name: '移动端', icon: '📱', color: '#f472b6' },
  { id: 'embedded', name: '嵌入式', icon: '📟', color: '#fb7185' },
  { id: 'emerging', name: '新兴技术', icon: '🔮', color: '#a78bfa' },
  { id: 'industry', name: '行业方案', icon: '🏢', color: '#38bdf8' },
]
