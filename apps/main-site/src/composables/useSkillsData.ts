import { ref, computed } from 'vue'

const skillDataCache = new Map()
const categoriesCache = ref(null)

export function useSkillsData() {
  const loading = ref(false)
  const error = ref(null)

  const categories = computed(() => {
    if (categoriesCache.value) return categoriesCache.value
    return null
  })

  const loadCategories = async () => {
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

  const loadSkillTreeData = async () => {
    if (skillDataCache.has('skillTreeData')) {
      return skillDataCache.get('skillTreeData')
    }

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
    categories,
    loadCategories,
    loadSkillTreeData
  }
}
