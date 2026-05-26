<template>
  <div class="app-root min-h-screen">
    <header class="site-header">
      <nav class="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
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
              Zhong 的个人技术能力展示中心。<br>
              专注 IoT 物联网与高性能 Web 架构设计。
            </p>
          </div>
          <div>
            <p class="footer-label">联系方式</p>
            <ul class="footer-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="footer-icon" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span class="font-mono">{{ CONTACT.phoneDisplay }}</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="footer-icon" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span class="font-mono">{{ CONTACT.email }}</span>
              </li>
            </ul>
          </div>
          <div class="md:items-end md:text-right flex flex-col gap-4">
            <div class="footer-stack font-mono">
              <span>Vue 3</span><span aria-hidden="true">·</span>
              <span>Vite</span><span aria-hidden="true">·</span>
              <span>TailwindCSS</span>
            </div>
            <p class="footer-credit font-mono">© 2026 Zhong Youshen · Built with Passion.</p>
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
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-soft);
  transition: background-color 0.18s ease, border-color 0.18s ease;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: inherit;
}

.brand-glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.85rem;
  height: 1.85rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--bg);
  background: var(--ink);
  border-radius: var(--radius);
  transition: transform 0.25s ease;
}

.brand-mark:hover .brand-glyph {
  transform: translateY(-1px);
}

.brand-name {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.nav-tabs {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-tab {
  position: relative;
  padding: 0.45rem 0.65rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav-tab:hover {
  color: var(--ink);
}

.nav-tab.router-link-active {
  color: var(--ink);
}

.nav-tab.router-link-active::after {
  content: '';
  position: absolute;
  left: 0.65rem;
  right: 0.65rem;
  bottom: -0.2rem;
  height: 1px;
  background: var(--accent);
}

/* ============================================================
 * Footer
 * ============================================================ */
.site-footer {
  position: relative;
  z-index: 10;
  margin-top: 6rem;
  border-top: 1px solid var(--border);
  background: var(--surface-elev);
}

.footer-title {
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 0.5rem;
}

.footer-body {
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.65;
}

.footer-label {
  color: var(--ink);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 1rem;
}

.footer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.85rem;
}

.footer-list li {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.footer-icon {
  width: 0.95rem;
  height: 0.95rem;
  color: var(--accent);
  flex-shrink: 0;
}

.footer-stack {
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: var(--faint);
  display: flex;
  gap: 0.55rem;
}

.footer-credit {
  font-size: 0.7rem;
  color: var(--faint);
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
  min-height: calc(100vh - 73px);
  padding-top: 61px;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
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
