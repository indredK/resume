<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="visible"
        class="drawer-overlay fixed inset-0 flex justify-end backdrop-blur-sm"
        :class="isNested ? 'z-[1100] bg-black/40 is-nested' : 'z-[1000] bg-black/60'"
        @click.self="$emit('close')"
      >
        <div
          class="drawer-content glass-panel w-full h-full shadow-2xl flex flex-col border-l border-white/5"
          :class="isNested ? 'max-w-md -translate-x-[30px] scale-95 is-nested' : 'max-w-lg'"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useEscClose } from '@/composables/useEscClose'

const props = defineProps<{
  visible: boolean
  isNested?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

useEscClose(() => props.visible, () => emit('close'))
</script>

<style scoped>
/* 统一的抽屉过渡动画 */
.drawer-enter-active, .drawer-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-active .drawer-content, .drawer-leave-active .drawer-content {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from { opacity: 0; }
.drawer-enter-from .drawer-content { transform: translateX(100%); }

.drawer-leave-to { opacity: 0; }
.drawer-leave-to .drawer-content { transform: translateX(100%); }

/* 嵌套抽屉的特殊动画 */
.drawer-enter-active .drawer-content.is-nested {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease;
}
.drawer-leave-active .drawer-content.is-nested {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1), opacity 0.3s ease;
}
.drawer-enter-from .drawer-content.is-nested {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}
.drawer-leave-to .drawer-content.is-nested {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}
</style>
