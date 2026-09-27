<template>
  <div class="app-root min-h-screen">
    <header class="site-header">
      <nav class="site-nav container mx-auto px-6 flex items-center justify-between gap-4">
        <router-link to="/" class="brand-mark" aria-label="Portfolio Hub 首页">
          <span class="brand-glyph" aria-hidden="true">P</span>
          <span class="brand-name font-display">Portfolio Hub</span>
        </router-link>

        <div class="flex items-center gap-5 sm:gap-7">
          <div class="nav-tabs">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              class="nav-tab"
            >
              {{ item.name }}
            </router-link>
          </div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>

    <main class="main-content relative">
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div>
            <p class="footer-title font-display">Portfolio Hub</p>
            <p class="footer-body">
              个人技术能力展示中心。<br>
              专注 IoT 物联网与高性能 Web 架构设计。
            </p>
          </div>
          <div>
            <p class="footer-label">联系方式</p>
            <ul class="footer-list">
              <li><span class="font-mono">{{ CONTACT.email }}</span></li>
            </ul>
          </div>
          <div class="md:items-end md:text-right flex flex-col gap-4">
            <p class="footer-stack font-mono">Vue 3 / Vite / TailwindCSS</p>
            <p class="footer-credit font-mono">© 2026 Portfolio Hub.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { CONTACT } from '@/data/contact'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const navItems = [
  { name: '简历', path: '/' },
  { name: '技能树', path: '/skills' },
  { name: '成果', path: '/case-studies' },
  { name: 'AI 实践', path: '/ai-agent' },
  { name: '关于我', path: '/about' }
]
</script>

<style>
@layer base {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    min-height: 100%;
    width: 100%;
  }

  html {
    scrollbar-gutter: stable;
  }
}

.app-root {
  color: var(--ink);
}

/* ============================================================
 * Header (site chrome)
 * ============================================================ */
.site-header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  height: var(--header-height);
  border-bottom: 1px solid var(--border-soft);
  background-color: color-mix(in srgb, var(--bg) 92%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: background-color 0.18s ease, border-color 0.18s ease;
}

.site-nav {
  height: 100%;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: inherit;
  text-decoration: none;
}

.brand-glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.85rem;
  height: 1.85rem;
  border-radius: var(--radius);
  color: var(--bg);
  background: var(--ink);
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.brand-mark:hover .brand-glyph {
  transform: translateY(-1px);
}

.brand-name {
  color: var(--ink);
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.nav-tabs {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.nav-tab {
  position: relative;
  padding: 0.5rem 0.58rem;
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 0.8rem;
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-tab:hover,
.nav-tab.router-link-active {
  color: var(--ink);
}

.nav-tab.router-link-active::after {
  position: absolute;
  right: 0.58rem;
  bottom: 0.18rem;
  left: 0.58rem;
  height: 2px;
  background: var(--accent);
  content: '';
}

@media (max-width: 760px) {
  :root {
    --header-height: 94px;
  }

  .site-nav {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: 2.2rem 2.2rem;
    align-content: center;
    column-gap: 0.55rem;
    row-gap: 0.15rem;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
  }

  .site-nav > .brand-mark {
    grid-column: 1;
    grid-row: 1;
  }

  .site-nav > div {
    display: contents;
  }

  .site-nav .theme-switcher {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    gap: 0.15ch;
    font-size: 0.68rem;
  }

  .site-nav .nav-tabs {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-content: space-between;
    min-width: 0;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .site-nav .nav-tabs::-webkit-scrollbar {
    display: none;
  }

  .nav-tab {
    flex: 0 0 auto;
    padding: 0.45rem 0.42rem;
    font-size: 0.74rem;
  }

  .nav-tab.router-link-active::after {
    right: 0.42rem;
    left: 0.42rem;
  }
}

@media (max-width: 420px) {
  .brand-name {
    display: none;
  }

  .site-nav .theme-switcher {
    font-size: 0.64rem;
  }

  .nav-tab {
    padding-inline: 0.35rem;
    font-size: 0.7rem;
  }
}

.site-footer {
  position: relative;
  z-index: 10;
  margin-top: 0;
  border-top: 1px solid var(--border-soft);
  background: var(--surface-elev);
}

.site-footer > .container {
  padding-top: 2.8rem;
  padding-bottom: 2.8rem;
}

.footer-title {
  margin-bottom: 0.5rem;
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.footer-body {
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.65;
}

.footer-label {
  margin-bottom: 0.85rem;
  color: var(--ink);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.footer-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.82rem;
  list-style: none;
}

.footer-stack {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.035em;
}

.footer-credit {
  color: var(--muted);
  font-size: 0.7rem;
  letter-spacing: 0.02em;
}

/* ============================================================
 * Theme-specific chrome
 * ============================================================ */

/* Brutal: hard square edges, all-caps, no blur, ASCII active marker */
:root[data-theme="brutal"] .site-header {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

:root[data-theme="brutal"] .brand-glyph {
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid var(--ink);
  background: transparent;
  color: var(--ink);
  font-size: 0.85rem;
}

:root[data-theme="brutal"] .brand-name {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

:root[data-theme="brutal"] .nav-tab.router-link-active::after {
  display: none;
}

:root[data-theme="brutal"] .nav-tab.router-link-active::before {
  content: '> ';
  color: var(--ink);
}

/* Mag: italic display, thicker active underline */
:root[data-theme="mag"] .brand-glyph {
  background: var(--accent);
  color: var(--bg);
  font-style: italic;
}

:root[data-theme="mag"] .brand-name {
  font-style: italic;
  letter-spacing: -0.025em;
}

:root[data-theme="mag"] .nav-tab.router-link-active::after {
  height: 2px;
  background: var(--accent);
}

/* Indust: condensed caps for tabs */
:root[data-theme="indust"] .nav-tab {
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
}

:root[data-theme="indust"] .nav-tab.router-link-active::after {
  bottom: -0.3rem;
  height: 2px;
}

/* ============================================================
 * Layout helpers
 * ============================================================ */
.main-content {
  min-height: calc(100dvh - var(--header-height));
  padding-top: var(--header-height);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
