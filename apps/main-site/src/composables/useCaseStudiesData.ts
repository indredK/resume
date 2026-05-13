import { ref } from 'vue'

const companiesCache = ref(null)
const principlesCache = ref(null)

export function useCaseStudiesData() {
  const loading = ref(false)
  const error = ref(null)

  const loadCompanies = async () => {
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

  const loadPrinciples = async () => {
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
    loadPrinciples
  }
}
