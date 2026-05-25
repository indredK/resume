import { ref } from 'vue'
import type { SkillNode } from '@/data/types'

interface Category {
  id: string
  name: string
  icon: string
  color: string
}

const skillDataCache = new Map<string, SkillNode[]>()
const categoriesCache = ref<Category[] | null>(null)

export function useSkillsData() {
  const loading = ref(false)
  const error = ref<unknown>(null)

  const loadCategories = async (): Promise<Category[]> => {
    if (categoriesCache.value) return categoriesCache.value

    loading.value = true
    try {
      const module = await import('@/data/index')
      categoriesCache.value = module.categories
      return module.categories
    } catch (e) {
      error.value = e
      throw e
    } finally {
      loading.value = false
    }
  }

  const loadSkillTreeData = async (): Promise<SkillNode[]> => {
    const cached = skillDataCache.get('skillTreeData')
    if (cached) return cached

    loading.value = true
    try {
      const module = await import('@/data/index')
      const data = module.skillTreeData
      skillDataCache.set('skillTreeData', data)
      return data
    } catch (e) {
      error.value = e
      throw e
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    loadCategories,
    loadSkillTreeData,
  }
}
