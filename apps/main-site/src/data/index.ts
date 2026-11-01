import type { SkillNode } from './types'

const skillModules = import.meta.glob<SkillNode>('./skills/*.ts', { eager: true, import: 'default' })

const categoryOrder = [
  'frontend', 'mobile', 'desktop', 'language', 'toolchain', 'devops',
  'backend', 'database', 'industrial', 'embedded', 'industry', 'solutions', 'emerging'
]
const categoryRank = new Map(categoryOrder.map((id, index) => [id, index]))

const allSkills: SkillNode[] = Object.entries(skillModules).map(([path, mod]) => {
  if (!mod || typeof mod !== 'object' || typeof mod.id !== 'string' || typeof mod.name !== 'string') {
    throw new Error(`Invalid skill module: ${path} — default export 必须含 id:string + name:string`)
  }
  return mod
}).sort((a, b) => (categoryRank.get(a.id) ?? categoryOrder.length) - (categoryRank.get(b.id) ?? categoryOrder.length))

export { allSkills }
export const skillTreeData = allSkills

export const categories = [
  { id: 'all', name: '全部', icon: '🌈', color: '#94a3b8' },
  ...allSkills.map(s => ({
    id: s.id,
    name: s.name,
    icon: s.icon || '',
    color: s.color || '#94a3b8',
  })),
]
