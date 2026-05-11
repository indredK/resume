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
  { id: 'all', name: '全部' },
  { id: 'frontend', name: '前端技术' },
  { id: 'desktop', name: '桌面技术' },
  { id: 'language', name: '编程语言' },
  { id: 'backend', name: '后端技术' },
  { id: 'database', name: '数据库' },
  { id: 'devops', name: 'DevOps' },
  { id: 'industrial', name: '工业控制' },
  { id: 'toolchain', name: '工具链' },
  { id: 'mobile', name: '移动端' },
  { id: 'embedded', name: '嵌入式' },
  { id: 'emerging', name: '新兴技术' },
  { id: 'industry', name: '行业方案' },
]
