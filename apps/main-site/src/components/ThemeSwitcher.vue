<template>
  <nav class="theme-switcher" aria-label="主题">
    <template v-for="(theme, i) in themes" :key="theme">
      <span v-if="i > 0" class="sep" aria-hidden="true">/</span>
      <button
        type="button"
        :data-theme-target="theme"
        :aria-current="theme === current ? 'true' : undefined"
        :class="{ active: theme === current }"
        @click="setTheme(theme)"
      >
        {{ theme }}
      </button>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { current, setTheme, themes } = useTheme()
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
  gap: 0.4ch;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  user-select: none;
  line-height: 1;
}

.theme-switcher button {
  background: transparent;
  border: 0;
  padding: 0.3rem 0.35rem;
  color: var(--muted);
  font: inherit;
  letter-spacing: inherit;
  transition: color 0.15s ease;
}

.theme-switcher button:hover {
  color: var(--ink);
}

.theme-switcher button.active {
  color: var(--ink);
}

.theme-switcher button:focus-visible {
  outline: 1px solid var(--accent);
  outline-offset: 2px;
}

.theme-switcher .sep {
  color: var(--faint);
  pointer-events: none;
}

@media (max-width: 480px) {
  .theme-switcher {
    flex-wrap: wrap;
    row-gap: 0.2rem;
  }
}
</style>
