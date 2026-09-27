<template>
  <div class="home-page animate-fade-in">
    <!-- ============================================================
     * Hero — role, contact CTAs, stats
     * ============================================================ -->
    <section class="hero">
      <div class="container mx-auto px-6 hero-grid">
        <div class="hero-lead">
          <div class="hero-eyebrow font-mono">前端开发工程师 · 近 6 年经验</div>
          <h1 class="hero-name font-display">Frontend</h1>
          <p class="hero-tagline">
            使用 <strong>Vue / React</strong> 构建企业级 Web 与多端应用，覆盖物联网和业务管理场景；关注复杂流程拆解、组件复用与跨端体验一致性。
          </p>
          <div class="hero-ctas">
            <a :href="`mailto:${CONTACT.email}`" class="cta-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cta-icon" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email</span>
            </a>
            <a :href="CONTACT.github" target="_blank" rel="noopener noreferrer" class="cta-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="cta-icon" aria-hidden="true">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A3.37 3.37 0 0 0 22.42 4.42 3.37 3.37 0 0 0 21.31.52S19.95.11 16.89 2.12a11.36 11.36 0 0 0-6 0C7.71.11 6.35.52 6.35.52a3.37 3.37 0 0 0-1.11 3.9 3.37 3.37 0 0 0-1.31 2.38c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9.43 16.5V22" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div class="stats-grid">
          <div v-for="stat in statistics" :key="stat.label" class="stat-cell">
            <div class="stat-value font-display">{{ stat.value }}</div>
            <div class="stat-label font-mono">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- ============================================================
         * Main column — Experience + Projects
         * ============================================================ -->
        <div class="lg:col-span-2 space-y-16">
          <section>
            <h2 class="section-title font-display"><span>工作经历</span></h2>
            <div class="timeline">
              <article v-for="exp in experiences" :key="exp.company" class="timeline-item">
                <header class="timeline-header">
                  <div>
                    <h3 class="job-company font-display">{{ exp.company }}</h3>
                    <p class="job-role"><span class="job-position">{{ exp.position }}</span> <span class="job-period font-mono">{{ exp.period }}</span></p>
                  </div>
                  <div class="tag-list">
                    <span v-for="tech in exp.techStack.slice(0, 4)" :key="tech" class="tag font-mono">{{ tech }}</span>
                  </div>
                </header>
                <p class="job-summary">{{ exp.summary }}</p>
                <ul class="bullet-list">
                  <li v-for="(bullet, i) in exp.details" :key="i">{{ bullet }}</li>
                </ul>
              </article>
            </div>
          </section>

          <section>
            <h2 class="section-title font-display"><span>代表项目经历</span></h2>
            <div class="project-stack">
              <article v-for="project in projects" :key="project.title" class="project-card">
                <header class="project-header">
                  <span class="project-icon" aria-hidden="true">{{ project.icon }}</span>
                  <h3 class="project-title font-display">{{ project.title }}</h3>
                  <span class="project-duration font-mono">{{ project.duration }}</span>
                </header>
                <ul class="bullet-list">
                  <li v-for="(hl, i) in project.highlights" :key="i">{{ hl }}</li>
                </ul>
              </article>
            </div>
          </section>
        </div>

        <!-- ============================================================
         * Sidebar — Skills, Education, Self-eval
         * ============================================================ -->
        <aside class="space-y-12">
          <section>
            <h2 class="section-title font-display"><span>专业技能</span></h2>
            <div class="panel">
              <div v-for="skillGroup in skillSummary" :key="skillGroup.title" class="skill-group">
                <h4 class="skill-group-title">{{ skillGroup.title }}</h4>
                <div class="tag-list">
                  <span v-for="skill in skillGroup.items" :key="skill" class="tag font-mono">{{ skill }}</span>
                </div>
              </div>
              <router-link to="/skills" class="panel-link font-mono">查看完整技能树 →</router-link>
            </div>
          </section>

          <section>
            <h2 class="section-title font-display"><span>教育背景</span></h2>
            <div class="panel">
              <h4 class="edu-school font-display">深圳大学</h4>
              <p class="edu-degree">应用物理学 · 本科</p>
              <p class="edu-period font-mono">2016 — 2020</p>
              <div class="tag-list edu-tags">
                <span class="tag font-mono">CET-4</span>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-title font-display"><span>自我评价</span></h2>
            <div class="panel panel-prose">
              <p>
                具备近六年前端开发经验，覆盖企业级管理系统、物联网平台与 H5 / App / 小程序。熟悉 Vue、React 与微前端实践，能从需求梳理、模块设计和接口协同推进到多端验收；重视可复用组件、权限边界、状态一致性与工程质量。
              </p>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CONTACT } from '@/data/contact'

const statistics = [
  { label: '从业经验', value: '近 6 年' },
  { label: '主力框架', value: 'Vue / React' },
  { label: '交付形态', value: '多端应用' },
  { label: '项目领域', value: 'IoT / 企业应用' }
]

const skillSummary = [
  { title: '框架与语言', items: ['Vue 3', 'React', 'TypeScript', 'uni-app'] },
  { title: '工程化与 UI', items: ['Vite', 'single-spa', 'Pinia', 'ECharts', 'Vue I18n'] },
  { title: '质量与交付', items: ['Playwright', 'Vitest', 'CI/CD', '多端验收'] },
  { title: '业务能力', items: ['多端适配', '权限路由', '流程与消息', '接口联调'] }
]

const projects = [
  {
    title: '多端业务管理应用',
    highlights: [
      '基于 uni-app、Vue 3 与 Pinia 交付 H5、App 和微信小程序端功能',
      '覆盖销售、拜访、活动、申请审批、待办消息、附件资料与考核报表等业务',
      '完成真实接口联调、SSO 登录接入、SignalR 消息推送及 Playwright 端到端验收'
    ],
    icon: '◇',
    duration: '2026.07 — 2026.08'
  },
  {
    title: '物联网设备管理平台',
    highlights: [
      '参与设备管理、规则配置与数据可视化等平台模块开发',
      '优化实时数据更新与页面渲染，改善高频刷新场景下的交互流畅度',
      '通过组件拆分与状态管理优化，提升模块可维护性'
    ],
    icon: '◈',
    duration: '2023.02 — 2024.07'
  },
  {
    title: '企业管理平台微前端改造',
    highlights: [
      '参与跨框架子应用集成与生命周期协作，处理样式隔离和状态通信',
      '建设动态路由与角色权限能力，抽离可复用组件和组合式逻辑',
      '推动历史模块向 TypeScript 与现代组件模式渐进迁移'
    ],
    icon: '◫',
    duration: '2022.01 — 2022.07'
  },
  {
    title: 'Bench 桌面工作台 · 开源',
    highlights: [
      '基于 Tauri v2、React、TypeScript 与 Rust 构建 macOS 优先的桌面工作台',
      '围绕应用管理、隔离账号和系统设置组织核心能力，并持续推进插件化扩展',
      '关注插件权限边界、账号数据隔离与真实平台验收，项目持续迭代中'
    ],
    icon: '▣',
    duration: 'GitHub · 持续迭代'
  }
]

const experiences = [
  {
    period: '2023.02 — 2025.11',
    company: '物联网科技企业',
    position: '前端开发工程师',
    techStack: ['React', 'Vue 3', 'WebSocket', 'ECharts', 'uni-app'],
    summary: '负责物联网平台、设备管理界面与跨端配置工具的前端研发。',
    details: [
      '参与设备管理、规则配置与数据可视化模块开发，优化实时数据展示与页面渲染',
      '参与移动端设备配置工具研发，处理跨端界面、设备接入流程与异常状态反馈',
      '推进既有设备管理后台的模块化改造，抽象通用组件并协同完成端侧接口联调',
      '与后端、固件及产品角色协作，完成需求澄清、接口对接和问题定位'
    ]
  },
  {
    period: '2020.12 — 2023.01',
    company: '工程技术服务企业',
    position: '前端开发工程师',
    techStack: ['Vue 3', 'React', 'single-spa', 'TypeScript', 'Pinia'],
    summary: '参与企业管理平台研发，侧重微前端集成、权限路由与公共组件建设。',
    details: [
      '参与基于 single-spa 的微前端建设，协同不同框架子应用的挂载、通信与样式隔离',
      '实现动态路由、角色权限与管理后台模块，完善前后端鉴权和页面访问控制',
      '使用组合式逻辑重构历史组件，抽离跨模块复用的 UI 与业务能力',
      '参与 JavaScript 向 TypeScript 的渐进迁移，改善代码类型约束和维护体验'
    ]
  }
]
</script>

<style scoped>
.home-page {
  color: var(--ink);
}

/* ============================================================
 * Hero
 * ============================================================ */
.hero {
  padding: 4rem 0 3rem;
  border-bottom: 1px solid var(--border-soft);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: end;
}

@media (min-width: 768px) {
  .hero-grid {
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    gap: 4rem;
  }
}

.hero-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.hero-name {
  font-size: clamp(3.5rem, 9vw, 6.5rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--ink);
  font-weight: 600;
  margin-bottom: 1.75rem;
}

.hero-tagline {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--muted);
  max-width: 36rem;
  margin-bottom: 2rem;
}

.hero-tagline strong {
  color: var(--ink);
  font-weight: 600;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  font-size: 0.82rem;
  color: var(--ink);
  background: transparent;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  text-decoration: none;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.cta-btn:hover {
  background: var(--ink);
  color: var(--bg);
}

.cta-btn.cta-static {
  cursor: default;
}

.cta-btn.cta-static:hover {
  background: transparent;
  color: var(--ink);
}

.cta-icon {
  width: 0.95rem;
  height: 0.95rem;
  flex-shrink: 0;
}

/* ============================================================
 * Stats grid
 * ============================================================ */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-cell {
  padding: 1.25rem 1rem;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  border-radius: var(--radius);
  text-align: center;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.stat-cell:hover {
  border-color: var(--ink);
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 600;
  letter-spacing: -0.04em;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

/* ============================================================
 * Section title (shared)
 * ============================================================ */
.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin: 3rem 0 2rem;
}

.section-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border-soft);
}

/* ============================================================
 * Timeline (Experience)
 * ============================================================ */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.timeline-item {
  position: relative;
  padding-left: 1.75rem;
  border-left: 1px solid var(--border-soft);
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: -4px;
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
}

.timeline-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

@media (min-width: 640px) {
  .timeline-header {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem;
  }
}

.job-company {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  margin-bottom: 0.25rem;
}

.job-role {
  font-size: 0.82rem;
  color: var(--muted);
}

.job-position {
  color: var(--accent);
  font-weight: 600;
  margin-right: 0.5rem;
}

.job-period {
  font-size: 0.78rem;
  color: var(--muted);
  letter-spacing: 0.02em;
}

.job-summary {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--muted);
  margin-bottom: 1rem;
  font-style: italic;
}

/* ============================================================
 * Bullet list
 * ============================================================ */
.bullet-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.bullet-list li {
  position: relative;
  padding-left: 1.1rem;
  font-size: 0.82rem;
  line-height: 1.65;
  color: var(--muted);
}

.bullet-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

/* ============================================================
 * Tags
 * ============================================================ */
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem 0.5rem;
  font-size: 0.68rem;
  color: var(--muted);
  background: transparent;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  letter-spacing: 0.02em;
}

/* ============================================================
 * Project cards
 * ============================================================ */
.project-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-card {
  padding: 1.5rem;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  border-radius: var(--radius);
  transition: border-color 0.15s ease;
}

.project-card:hover {
  border-color: var(--ink);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.1rem;
  flex-wrap: wrap;
}

.project-icon {
  font-size: 1.25rem;
  color: var(--accent);
  line-height: 1;
}

.project-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
}

.project-duration {
  font-size: 0.7rem;
  color: var(--faint);
  letter-spacing: 0.04em;
  margin-left: auto;
}

/* ============================================================
 * Sidebar panel
 * ============================================================ */
.panel {
  padding: 1.5rem;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  border-radius: var(--radius);
}

.panel-prose {
  font-size: 0.85rem;
  line-height: 1.75;
  color: var(--muted);
}

.skill-group {
  margin-bottom: 1.25rem;
}

.skill-group:last-of-type {
  margin-bottom: 1.5rem;
}

.skill-group-title {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.panel-link {
  display: block;
  text-align: center;
  padding: 0.65rem;
  font-size: 0.78rem;
  color: var(--accent);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  text-decoration: none;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.panel-link:hover {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

.edu-school {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.35rem;
}

.edu-degree {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.edu-period {
  font-size: 0.72rem;
  color: var(--faint);
  letter-spacing: 0.04em;
  margin-bottom: 0.85rem;
}

.edu-tags {
  margin-top: 0.5rem;
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides (global, not scoped) — keyed off
 * :root[data-theme] selectors. These flip thematic details on
 * the same DOM so each theme reads as itself.
 * ============================================================ */

/* ---- Brutal: ASCII timeline, square tags, no italics ---- */
:root[data-theme="brutal"] .home-page .hero-name {
  font-weight: 400;
  letter-spacing: 0;
}

:root[data-theme="brutal"] .home-page .hero-eyebrow {
  color: var(--ink);
}

:root[data-theme="brutal"] .home-page .timeline-item {
  border-left-style: dashed;
}

:root[data-theme="brutal"] .home-page .timeline-item::before {
  border-radius: 0;
  width: 9px;
  height: 9px;
  background: var(--ink);
}

:root[data-theme="brutal"] .home-page .bullet-list li::before {
  content: '>';
  color: var(--ink);
}

:root[data-theme="brutal"] .home-page .job-position,
:root[data-theme="brutal"] .home-page .skill-group-title,
:root[data-theme="brutal"] .home-page .edu-degree,
:root[data-theme="brutal"] .home-page .project-icon,
:root[data-theme="brutal"] .home-page .stat-value {
  color: var(--ink);
}

:root[data-theme="brutal"] .home-page .stat-cell,
:root[data-theme="brutal"] .home-page .project-card,
:root[data-theme="brutal"] .home-page .panel {
  background: transparent;
  border-color: var(--border);
}

:root[data-theme="brutal"] .home-page .panel-link {
  border: 1px dashed var(--border);
  color: var(--ink);
}

:root[data-theme="brutal"] .home-page .panel-link:hover {
  background: var(--ink);
  color: var(--bg);
  border-color: var(--ink);
}

:root[data-theme="brutal"] .home-page .job-summary {
  font-style: normal;
}

/* ---- Mag: italic display, dramatic drop-shadow on name, drop-cap on prose ---- */
:root[data-theme="mag"] .home-page .hero-name {
  font-style: italic;
  font-weight: 500;
  letter-spacing: -0.04em;
}

:root[data-theme="mag"] .home-page .section-title {
  font-style: italic;
}

:root[data-theme="mag"] .home-page .job-company,
:root[data-theme="mag"] .home-page .project-title,
:root[data-theme="mag"] .home-page .edu-school {
  font-style: italic;
}

:root[data-theme="mag"] .home-page .panel-prose p::first-letter {
  font-family: var(--font-display);
  font-size: 3.2em;
  font-style: italic;
  font-weight: 500;
  float: left;
  line-height: 0.85;
  margin: 0.15em 0.12em 0 0;
  color: var(--accent);
}

:root[data-theme="mag"] .home-page .stat-value {
  font-style: italic;
}

/* ---- Indust: condensed, sharp orange, slab-tracking labels ---- */
:root[data-theme="indust"] .home-page .hero-name {
  letter-spacing: -0.02em;
  font-weight: 500;
}

:root[data-theme="indust"] .home-page .hero-eyebrow,
:root[data-theme="indust"] .home-page .skill-group-title {
  font-size: 0.65rem;
  letter-spacing: 0.22em;
}

:root[data-theme="indust"] .home-page .section-title {
  text-transform: uppercase;
  font-size: 1.15rem;
  letter-spacing: 0.04em;
}

:root[data-theme="indust"] .home-page .tag {
  background: var(--surface-elev);
  border-color: var(--border);
  text-transform: uppercase;
  font-size: 0.62rem;
  letter-spacing: 0.06em;
}

:root[data-theme="indust"] .home-page .timeline-item::before {
  border-radius: 0;
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 25%, transparent);
}

:root[data-theme="indust"] .home-page .bullet-list li::before {
  content: '▸';
  color: var(--accent);
}

/* ---- Swiss (default): bullet uses em-dash already; no extra overrides ---- */
</style>
