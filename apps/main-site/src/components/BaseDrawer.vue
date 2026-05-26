<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="visible"
        class="drawer-overlay"
        :class="{ 'is-nested': isNested }"
        @click.self="$emit('close')"
      >
        <div
          ref="drawerContentRef"
          class="drawer-content"
          :class="{ 'is-nested': isNested }"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useEscClose } from '@/composables/useEscClose'
import { useFocusTrap } from '@/composables/useFocusTrap'

const props = defineProps<{
  visible: boolean
  isNested?: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const drawerContentRef = ref<HTMLElement | null>(null)

useEscClose(() => props.visible, () => emit('close'))
useFocusTrap(drawerContentRef, computed(() => props.visible))
</script>

<style scoped>
/* ============================================================
 * Overlay — covers viewport with scrim, mounts drawer at right edge
 * ============================================================ */
.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  background: color-mix(in srgb, var(--ink) 55%, transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.drawer-overlay.is-nested {
  z-index: 1100;
  background: color-mix(in srgb, var(--ink) 35%, transparent);
}

/* ============================================================
 * Drawer surface — uses semantic surface tokens, theme-driven border
 * ============================================================ */
.drawer-content {
  width: 100%;
  max-width: 34rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border-left: 1px solid var(--border);
  box-shadow:
    -16px 0 32px -8px color-mix(in srgb, var(--ink) 25%, transparent),
    -2px 0 0 0 var(--border-soft);
  color: var(--ink);
}

.drawer-content.is-nested {
  max-width: 28rem;
  transform: translateX(-30px) scale(0.95);
  box-shadow: -8px 0 24px -4px color-mix(in srgb, var(--ink) 30%, transparent);
}

/* ============================================================
 * Transitions
 * ============================================================ */
.drawer-enter-active, .drawer-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-active .drawer-content, .drawer-leave-active .drawer-content {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from { opacity: 0; }
.drawer-enter-from .drawer-content { transform: translateX(100%); }

.drawer-leave-to { opacity: 0; }
.drawer-leave-to .drawer-content { transform: translateX(100%); }

/* Nested drawer animation */
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

<style>
/* ============================================================
 * Theme-specific overrides
 * ============================================================ */

/* ---- Brutal: no blur, sharp slab, raw ---- */
:root[data-theme="brutal"] .drawer-overlay {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: color-mix(in srgb, var(--ink) 70%, transparent);
}

:root[data-theme="brutal"] .drawer-content {
  border-left: 2px solid var(--ink);
  box-shadow: -4px 0 0 0 var(--accent);
}

/* ---- Mag: warm tint scrim, accent-tinted edge ---- */
:root[data-theme="mag"] .drawer-overlay {
  background: color-mix(in srgb, var(--accent) 35%, color-mix(in srgb, var(--ink) 50%, transparent));
}

:root[data-theme="mag"] .drawer-content {
  box-shadow: -20px 0 40px -8px color-mix(in srgb, var(--accent) 25%, transparent);
}

/* ---- Indust: cool dark scrim, accent glow line ---- */
:root[data-theme="indust"] .drawer-content {
  border-left: 1px solid color-mix(in srgb, var(--accent) 40%, var(--border));
  box-shadow:
    -16px 0 32px -8px color-mix(in srgb, var(--ink) 50%, transparent),
    -1px 0 0 0 color-mix(in srgb, var(--accent) 50%, transparent);
}
</style>
