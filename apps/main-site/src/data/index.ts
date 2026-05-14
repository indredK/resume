import type { SkillNode } from './types'

// 自动导入 skills/ 子目录下所有 default export 的模块
const skillModules = import.meta.glob<SkillNode>('./skills/*.ts', { eager: true, import: 'default' })

const allSkills: SkillNode[] = Object.values(skillModules)

export { allSkills }
export const skillTreeData = allSkills

// 从数据自动生成分类列表
export const categories = [
  { id: 'all', name: '全部', icon: '🌈', color: '#94a3b8' },
  ...allSkills.map(s => ({
    id: s.id,
    name: s.name,
    icon: s.icon || '',
    color: s.color || '#94a3b8',
  })),
]
