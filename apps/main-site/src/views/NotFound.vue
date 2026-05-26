<template>
  <main class="not-found animate-fade-in">
    <div class="container mx-auto px-6 nf-stack">
      <div class="nf-marker font-mono">Error · 404</div>
      <div class="nf-code font-display">404</div>
      <p class="nf-message">页面找不到了。</p>
      <p class="nf-sub font-mono">The page you're looking for has gone missing.</p>
      <RouterLink to="/" class="nf-back font-mono">
        <span class="nf-back-arrow" aria-hidden="true">←</span>
        <span>返回首页</span>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 61px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ink);
}

.nf-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.85rem;
}

.nf-marker {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.nf-code {
  font-size: clamp(7rem, 22vw, 14rem);
  font-weight: 600;
  letter-spacing: -0.06em;
  line-height: 0.85;
  color: var(--ink);
  margin-bottom: 1rem;
}

.nf-message {
  font-size: 1.1rem;
  color: var(--ink);
  font-weight: 500;
}

.nf-sub {
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
}

.nf-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  font-size: 0.78rem;
  color: var(--ink);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  transition: background-color 0.15s ease, color 0.15s ease, padding-left 0.2s ease;
}

.nf-back:hover {
  background: var(--ink);
  color: var(--bg);
}

.nf-back-arrow {
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.nf-back:hover .nf-back-arrow {
  transform: translateX(-3px);
}
</style>

<style>
/* ============================================================
 * Theme-specific
 * ============================================================ */

/* ---- Brutal: code in mono already; just adjust spacing ---- */
:root[data-theme="brutal"] .not-found .nf-code {
  font-weight: 400;
  letter-spacing: -0.02em;
}

:root[data-theme="brutal"] .not-found .nf-marker {
  color: var(--ink);
}

/* ---- Mag: italic dramatic 404 ---- */
:root[data-theme="mag"] .not-found .nf-code {
  font-style: italic;
  color: var(--accent);
}

/* ---- Indust: condensed uppercase ---- */
:root[data-theme="indust"] .not-found .nf-message {
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

:root[data-theme="indust"] .not-found .nf-marker {
  font-size: 0.65rem;
  letter-spacing: 0.22em;
}
</style>
