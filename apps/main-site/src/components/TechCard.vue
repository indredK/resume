<template>
  <div
    class="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors cursor-pointer"
    @click="handleClick"
  >
    <div class="flex items-center gap-3 mb-4">
      <span class="text-3xl">{{ category.icon }}</span>
      <h3 class="text-xl font-bold" :class="`text-${category.color}-400`">
        {{ category.title }}
      </h3>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="item in category.items"
        :key="item"
        class="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300"
      >
        {{ item }}
      </span>
    </div>
    <p class="mt-4 text-sm text-slate-500">点击查看完整演示 →</p>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true
  }
})

const handleClick = () => {
  window.open(category.link, '_blank')
}
</script>
