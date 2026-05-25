export interface Metric {
  value: string
  label: string
  detail: string
}

export interface Approach {
  title: string
  detail: string
  requirement?: string
  implementation?: string
  tech?: string[]
  selectionReason?: string
  alternatives?: {
    name: string
    pros: string
    cons: string
    selected?: boolean
  }[]
  challenges?: {
    problem: string
    solution: string
  }[]
}

export interface ApproachDetail {
  step: number
  title: string
  moduleName: string
  requirement: string
  implementation: string
  tech: string[]
  selectionReason: string
  alternatives: {
    name: string
    pros: string
    cons: string
    selected?: boolean
  }[]
  challenges: {
    problem: string
    solution: string
  }[]
}

export interface Module {
  title: string
  icon: string
  business: string
  tech: string[]
  approach: Approach[]
  futurePlans: string[]
}

export interface Project {
  title: string
  role: string
  period: string
  icon: string
  description: string
  tags: string[]
  link?: string
  metrics: Metric[]
  approach: Approach[]
  futurePlans: string[]
  modules?: Module[]
}

export interface Stat {
  label: string
  value: string
}

export interface Company {
  name: string
  shortName: string
  period: string
  position: string
  icon: string
  color: string
  gradient: string
  summary: string
  totalStats: Stat[]
  projects: Project[]
}

export interface Principle {
  icon: string
  title: string
  desc: string
}

export interface ComparisonItem {
  id: string
  name: string
  icon?: string
  level?: number
  color?: string
  vueItems?: string[]
  reactItems?: string[]
  commonItems?: string[]
  advantages?: string[]
  disadvantages?: string[]
}

export interface SkillNode {
  id: string
  name: string
  icon?: string
  color?: string
  children?: SkillNode[]
  level?: number
  officialLink?: string
  repo?: string
  version?: string
  reason?: string
  advantages?: string[]
  disadvantages?: string[]
  description?: string
  cardColor?: string
  items?: ComparisonItem[]
}
