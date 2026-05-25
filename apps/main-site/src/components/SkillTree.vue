<template>
  <div class="container mx-auto px-4 py-8 flex flex-col gap-10">
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
    <template v-else>
      <div v-for="(cat, index) in displayData" :key="cat.id" class="relative animate-fade-in" :style="{ animationDelay: `${index * 0.1}s` }">
        <div class="mb-5 flex" :style="{ '--cat-color': cat.color }">
          <div class="glass-panel flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-transparent">
            <span class="text-xl">{{ cat.icon }}</span>
            <span class="text-base font-bold text-white tracking-tight">{{ cat.name }}</span>
          </div>
        </div>

        <div class="relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <template v-if="cat.children">
              <div
                v-for="sub in cat.children"
                :key="sub.id"
                class="glass-card flex flex-col p-4 rounded-xl"
              >
                <div v-if="sub.name" class="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
                  <span class="text-sm opacity-60">{{ sub.icon || '📁' }}</span>
                  <span class="text-[12px] font-bold text-slate-400 uppercase tracking-wider">{{ sub.name }}</span>
                </div>

                <div class="flex flex-col gap-1.5">
                  <div
                    v-for="skill in (sub.children || [sub])"
                    :key="skill.id || skill.name"
                    class="glass-card group flex items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-all duration-300 bg-white/[0.02] border border-white/[0.08] hover:bg-white/5 hover:-translate-y-0.5 hover:border-white/[0.15] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                    :style="{ '--skill-color': skill.color || cat.color }"
                    @click="handleSkillClick(skill)"
                  >
                    <div class="w-1 h-1 rounded-full shadow-[0_0_6px_var(--skill-color)]" :style="{ background: skill.color || cat.color }"></div>
                    <span class="text-sm">{{ skill.icon || '📄' }}</span>
                    <span class="flex-1 text-[13px] text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-100">{{ skill.name }}</span>
                    <span class="text-slate-600 opacity-0 transition-all duration-300 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0">→</span>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div
                class="glass-card group w-full flex flex-row items-center gap-2.5 p-4 rounded-lg cursor-pointer transition-all duration-300 bg-white/[0.02] border border-white/[0.08] hover:bg-white/5 hover:-translate-y-0.5 hover:border-white/[0.15] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
                :style="{ '--skill-color': cat.color }"
                @click="handleSkillClick(cat)"
              >
                <span class="text-sm">{{ cat.icon || '📄' }}</span>
                <span class="flex-1 text-[13px] text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-100">{{ cat.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>

    <FrameworkCompareModal
      v-if="selectedSkill"
      :visible="modalVisible"
      :skill="selectedSkill"
      @close="modalVisible = false"
      @select="handleModalSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import FrameworkCompareModal from '@/components/FrameworkCompareModal.vue'
import { useSkillsData } from '@/composables/useSkillsData'
import type { SkillNode } from '@/data/types'

const props = defineProps<{
  category: string
}>()

const { loading, loadSkillTreeData } = useSkillsData()
const skillTreeData = ref<SkillNode[]>([])

onMounted(async () => {
  skillTreeData.value = await loadSkillTreeData()
})

const modalVisible = ref(false)
const selectedSkill = ref<SkillNode | null>(null)

const displayData = computed(() => {
  if (!skillTreeData.value.length) return []
  if (props.category === 'all') {
    return skillTreeData.value
  }
  return skillTreeData.value.filter((c: SkillNode) => c.id === props.category)
})

const handleSkillClick = (skill: SkillNode) => {
  selectedSkill.value = skill
  modalVisible.value = true
}

const handleModalSelect = (skill: SkillNode) => {
  selectedSkill.value = skill
}
</script>
