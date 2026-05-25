import { ref } from 'vue'
import type { Company, Principle } from '@/data/types'

const companiesCache = ref<Company[] | null>(null)
const principlesCache = ref<Principle[] | null>(null)

export function useCaseStudiesData() {
  const loading = ref(false)
  const error = ref<unknown>(null)

  const loadCompanies = async (): Promise<Company[]> => {
    if (companiesCache.value) return companiesCache.value

    loading.value = true
    try {
      const module = await import('@/data/caseStudies')
      companiesCache.value = module.companies
      return module.companies
    } catch (e) {
      error.value = e
      throw e
    } finally {
      loading.value = false
    }
  }

  const loadPrinciples = async (): Promise<Principle[]> => {
    if (principlesCache.value) return principlesCache.value

    loading.value = true
    try {
      const module = await import('@/data/caseStudies')
      principlesCache.value = module.principles
      return module.principles
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
    loadCompanies,
    loadPrinciples,
  }
}
