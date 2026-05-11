<template>
  <div class="bg-slate-800 rounded-lg overflow-hidden">
    <div class="p-4 border-b border-slate-700 flex items-center gap-3">
      <span class="text-2xl">{{ category.icon }}</span>
      <h3 class="text-xl font-bold" :class="`text-${category.color}-400`">
        {{ category.name }}
      </h3>
    </div>
    <div class="p-4 space-y-3">
      <div
        v-for="skill in category.skills"
        :key="skill.name"
        class="skill-item group"
      >
        <div class="flex justify-between items-center mb-1">
          <span
            v-if="skill.link"
            class="text-slate-300 hover:text-green-400 cursor-pointer"
            @click="openLink(skill.link)"
          >
            {{ skill.name }}
          </span>
          <span v-else class="text-slate-300">{{ skill.name }}</span>
          <span class="text-slate-500 text-sm">{{ skill.level }}%</span>
        </div>
        <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            class="h-full transition-all duration-500"
            :class="`bg-${category.color}-500`"
            :style="{ width: `${skill.level}%` }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
  link?: string
}

interface Category {
  icon: string
  name: string
  color: string
  skills: Skill[]
}

defineProps<{
  category: Category
}>()

const openLink = (url: string): void => {
  if (url) {
    window.open(url, '_blank')
  }
}
</script>

<style scoped>
.skill-item:hover {
  @apply transform translate-x-2 transition-transform;
}
</style>
