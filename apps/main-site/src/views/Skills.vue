<template>
  <div class="relative min-h-full flex flex-col pt-[61px]">
    <div class="glass-panel sticky top-[61px] z-40 py-4 border-b border-white/5 min-h-fit bg-[rgba(2,6,23,0.95)] backdrop-blur-md">
      <div class="container mx-auto px-6">
        <div class="flex gap-2 flex-wrap justify-center">
          <button
            v-for="cat in categoriesRef"
            :key="cat.id"
            class="category-tab flex items-center gap-2 px-4 py-1.5 rounded-xl border border-transparent cursor-pointer transition-all duration-300 text-slate-400 bg-white/[0.03] hover:bg-white/5 hover:text-slate-200"
            :class="{ active: selectedCategory === cat.id, '!text-white !border-white/10': selectedCategory === cat.id }"
            :style="{ '--cat-color': cat.color }"
            @click="selectCategory(cat.id)"
          >
            <span class="text-sm">{{ cat.icon }}</span>
            <span class="text-xs font-bold uppercase tracking-wide">{{ cat.name }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="flex-1 relative pt-4">
      <SkillTree :category="selectedCategory" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SkillTree from '@/components/SkillTree.vue'
import { useSkillsData } from '@/composables/useSkillsData'

const selectedCategory = ref('all')
const categoriesRef = ref<Array<{id: string, name: string, icon: string, color: string}>>([])

const { loadCategories } = useSkillsData()

onMounted(async () => {
  categoriesRef.value = await loadCategories()
})

const selectCategory = (id: string) => {
  selectedCategory.value = id
}
</script>

<style scoped>
.category-tab.active {
  background: color-mix(in srgb, var(--cat-color) 20%, rgba(255, 255, 255, 0.05));
  box-shadow: 0 0 20px -5px color-mix(in srgb, var(--cat-color) 30%, transparent);
  border-color: color-mix(in srgb, var(--cat-color) 40%, transparent);
}
</style>
