<template>
  <div
    class="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all hover:-translate-y-1 cursor-pointer"
  >
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-xl font-bold" :class="`text-${project.color}-400`">
        {{ project.name }}
      </h3>
      <div class="flex gap-2">
        <a
          v-if="project.repo"
          :href="project.repo"
          target="_blank"
          class="text-slate-400 hover:text-white transition-colors"
          @click.stop
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          v-if="project.url"
          :href="project.url"
          target="_blank"
          class="text-slate-400 hover:text-white transition-colors"
          @click.stop
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
    <p class="text-slate-400 mb-4 text-sm">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in project.tech"
        :key="tech"
        class="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  name: string
  color: string
  description: string
  tech: string[]
  repo?: string
  url?: string
}

defineProps<{
  project: Project
}>()
</script>
