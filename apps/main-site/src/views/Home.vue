<template>
  <div class="home-page animate-fade-in">
    <section class="hero">
      <div class="container mx-auto px-6 hero-grid">
        <div class="hero-lead">
          <p class="hero-eyebrow font-mono">前端开发工程师 · 六年多经验</p>
          <h1 class="hero-name font-display">Frontend</h1>
          <p class="hero-tagline">
            使用 <strong>Vue / React</strong> 构建企业级 Web 与多端应用，服务物联网和业务管理场景，关注复杂流程、组件复用及跨端一致性。
          </p>
          <div class="hero-ctas">
            <a :href="`mailto:${CONTACT.email}`" class="cta-btn">Email</a>
            <a :href="CONTACT.github" target="_blank" rel="noopener noreferrer" class="cta-btn">GitHub</a>
          </div>
        </div>

        <figure class="hero-visual">
          <picture>
            <source :srcset="`${baseUrl}images/iot-context.webp`" type="image/webp">
            <img
              :src="`${baseUrl}images/iot-context.jpg`"
              width="960"
              height="720"
              alt="工业边缘网关与传感器的场景示意"
              fetchpriority="high"
            >
          </picture>
          <figcaption class="visual-caption font-mono">物联网设备场景示意</figcaption>
        </figure>
      </div>

      <dl class="container mx-auto px-6 hero-facts" aria-label="职业概况">
        <div v-for="stat in statistics" :key="stat.label" class="fact-cell">
          <dt class="fact-label font-mono">{{ stat.label }}</dt>
          <dd class="fact-value font-display">{{ stat.value }}</dd>
        </div>
      </dl>
    </section>

    <div class="container mx-auto px-6 resume-content">
      <div class="resume-grid">
        <div class="primary-column">
          <section class="resume-section" aria-labelledby="experience-title">
            <h2 id="experience-title" class="section-title font-display">工作经历</h2>
            <div class="timeline">
              <article v-for="exp in experiences" :key="exp.company" class="timeline-item">
                <div class="timeline-meta">
                  <p class="job-period font-mono">{{ exp.period }}</p>
                  <p class="job-position">{{ exp.position }}</p>
                </div>
                <div class="timeline-content">
                  <header class="timeline-header">
                    <h3 class="job-company font-display">{{ exp.company }}</h3>
                    <div class="tag-list">
                      <span v-for="tech in exp.techStack.slice(0, 4)" :key="tech" class="tag font-mono">{{ tech }}</span>
                    </div>
                  </header>
                  <p class="job-summary">{{ exp.summary }}</p>
                  <ul class="bullet-list">
                    <li v-for="(bullet, i) in exp.details" :key="i">{{ bullet }}</li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          <section class="resume-section project-section" aria-labelledby="projects-title">
            <div class="project-intro">
              <h2 id="projects-title" class="section-title font-display">代表项目经历</h2>
              <figure class="project-visual">
                <picture>
                  <source :srcset="`${baseUrl}images/multidevice-context.webp`" type="image/webp">
                  <img
                    :src="`${baseUrl}images/multidevice-context.jpg`"
                    width="960"
                    height="640"
                    alt="笔记本电脑、平板与手机的多端使用场景示意"
                    loading="lazy"
                  >
                </picture>
                <figcaption class="visual-caption font-mono">多端使用场景示意</figcaption>
              </figure>
            </div>
            <div class="project-stack">
              <article v-for="project in projects" :key="project.title" class="project-item">
                <header class="project-header">
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

        <aside class="sidebar-column">
          <section class="resume-section sidebar-section" aria-labelledby="skills-title">
            <h2 id="skills-title" class="section-title font-display">专业技能</h2>
            <div class="skill-groups">
              <div v-for="skillGroup in skillSummary" :key="skillGroup.title" class="skill-group">
                <h3 class="skill-group-title">{{ skillGroup.title }}</h3>
                <div class="tag-list">
                  <span v-for="skill in skillGroup.items" :key="skill" class="tag font-mono">{{ skill }}</span>
                </div>
              </div>
            </div>
            <router-link to="/skills" class="panel-link font-mono">查看完整技能树 <span aria-hidden="true">→</span></router-link>
          </section>

          <section class="resume-section sidebar-section" aria-labelledby="education-title">
            <h2 id="education-title" class="section-title font-display">教育背景</h2>
            <h3 class="edu-school font-display">深圳大学</h3>
            <p class="edu-degree">应用物理学 · 本科</p>
            <p class="edu-period font-mono">2016-2020</p>
            <div class="tag-list edu-tags">
              <span class="tag font-mono">CET-4</span>
            </div>
          </section>

          <section class="resume-section sidebar-section" aria-labelledby="summary-title">
            <h2 id="summary-title" class="section-title font-display">自我评价</h2>
            <p class="panel-prose">
              具备六年多前端开发经验，覆盖企业级管理系统、物联网平台与 H5 / App / 小程序。熟悉 Vue、React 与微前端实践，能从需求梳理、模块设计和接口协同推进到多端验收；重视可复用组件、权限边界、状态一致性与工程质量。
            </p>
          </section>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CONTACT } from '@/data/contact'

const baseUrl = import.meta.env.BASE_URL

const statistics = [
  { label: '从业经验', value: '六年多' },
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
    duration: '2026.07 - 2026.08'
  },
  {
    title: '物联网设备管理平台',
    highlights: [
      '参与设备管理、规则配置与数据可视化等平台模块开发',
      '优化实时数据更新与页面渲染，改善高频刷新场景下的交互流畅度',
      '通过组件拆分与状态管理优化，提升模块可维护性'
    ],
    icon: '◈',
    duration: '2023.02 - 2024.07'
  },
  {
    title: '企业管理平台微前端改造',
    highlights: [
      '参与跨框架子应用集成与生命周期协作，处理样式隔离和状态通信',
      '建设动态路由与角色权限能力，抽离可复用组件和组合式逻辑',
      '推动历史模块向 TypeScript 与现代组件模式渐进迁移'
    ],
    icon: '◫',
    duration: '2022.01 - 2022.07'
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
    period: '2023.02 - 2025.11',
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
    period: '2020.12 - 2023.01',
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

<style>
.home-page {
  color: var(--ink);
}

.hero {
  padding: 2.5rem 0 0;
  border-bottom: 1px solid var(--border-soft);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.9rem;
  align-items: center;
}

.hero-lead {
  max-width: 42rem;
}

.hero-eyebrow {
  margin-bottom: 0.9rem;
  color: var(--accent);
  font-size: 0.76rem;
  letter-spacing: 0.07em;
}

.hero-name {
  margin-bottom: 0.85rem;
  color: var(--ink);
  font-size: clamp(3rem, 6vw, 4.8rem);
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.055em;
}

.hero-tagline {
  max-width: 39rem;
  margin-bottom: 1.35rem;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.68;
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
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.6rem 1.05rem;
  border: 1px solid var(--ink);
  border-radius: var(--radius);
  color: var(--bg);
  background: var(--ink);
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.18s ease, color 0.18s ease, transform 0.18s ease;
}

.cta-btn:hover {
  color: var(--ink);
  background: transparent;
}

.cta-btn:active {
  transform: translateY(1px);
}

.hero-visual,
.project-visual {
  min-width: 0;
  margin: 0;
}

.hero-visual picture,
.project-visual picture {
  display: block;
  width: 100%;
}

.hero-visual img,
.project-visual img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  background: var(--surface-elev);
}

.hero-visual img {
  aspect-ratio: 4 / 3;
  border: 1px solid var(--border-soft);
}

.visual-caption {
  padding-top: 0.55rem;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
}

.hero-facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 1.25rem;
}

.fact-cell {
  display: flex;
  flex-direction: column;
  gap: 0.28rem;
  min-width: 0;
  padding: 0.7rem 0.65rem;
}

.fact-cell:nth-child(odd) {
  padding-left: 0;
}

.fact-value {
  order: 1;
  color: var(--accent);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.3;
}

.fact-label {
  order: 2;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.04em;
}

.resume-content {
  padding-top: 2.65rem;
  padding-bottom: 4rem;
}

.resume-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3rem;
}

.primary-column,
.sidebar-column {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.primary-column {
  gap: 3rem;
}

.sidebar-column {
  gap: 2rem;
}

.section-title {
  margin: 0 0 1.2rem;
  color: var(--ink);
  font-size: 1.38rem;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.025em;
}

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.85rem;
  padding: 1.3rem 0 1.55rem;
  border-top: 1px solid var(--border-soft);
}

.timeline-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}

.job-period,
.edu-period {
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.02em;
}

.job-position {
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 600;
}

.timeline-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.65rem 1rem;
  margin-bottom: 0.65rem;
}

.job-company {
  color: var(--ink);
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.job-summary {
  margin-bottom: 0.8rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

.bullet-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
}

.bullet-list li {
  position: relative;
  padding-left: 1rem;
  color: var(--muted);
  font-size: 0.86rem;
  line-height: 1.65;
}

.bullet-list li::before {
  position: absolute;
  top: 0.72em;
  left: 0;
  width: 0.42rem;
  height: 1px;
  background: var(--accent);
  content: '';
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  min-height: 1.55rem;
  padding: 0.18rem 0.48rem;
  border: 1px solid var(--border-soft);
  border-radius: var(--radius);
  color: var(--muted);
  background: transparent;
  font-size: 0.68rem;
  letter-spacing: 0.015em;
}

.project-intro {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 1.25rem;
  margin-bottom: 1.7rem;
}

.project-intro .section-title {
  margin-bottom: 0;
}

.project-visual img {
  aspect-ratio: 3 / 2;
  border: 1px solid var(--border-soft);
}

.project-stack {
  display: flex;
  flex-direction: column;
}

.project-item {
  padding: 1.35rem 0;
}

.project-item + .project-item {
  border-top: 1px solid var(--border-soft);
}

.project-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.45rem 1rem;
  margin-bottom: 0.7rem;
}

.project-title {
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.35;
}

.project-duration {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.015em;
}

.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.skill-group-title {
  margin-bottom: 0.6rem;
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.055em;
}

.panel-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  margin-top: 1.35rem;
  padding-bottom: 0.38rem;
  border-bottom: 1px solid var(--border-soft);
  color: var(--accent);
  font-size: 0.76rem;
  text-decoration: none;
  transition: border-color 0.18s ease, color 0.18s ease, gap 0.18s ease;
}

.panel-link:hover {
  gap: 0.8rem;
  border-color: var(--accent);
  color: var(--ink);
}

.edu-school {
  margin-bottom: 0.35rem;
  color: var(--ink);
  font-size: 1.12rem;
  font-weight: 600;
}

.edu-degree {
  margin-bottom: 0.35rem;
  color: var(--muted);
  font-size: 0.87rem;
}

.edu-tags {
  margin-top: 0.7rem;
}

.panel-prose {
  color: var(--muted);
  font-size: 0.88rem;
  line-height: 1.75;
}

:root[data-theme="brutal"] .home-page .hero-name {
  font-weight: 400;
  letter-spacing: 0;
}

:root[data-theme="brutal"] .home-page .timeline-item,
:root[data-theme="brutal"] .home-page .project-item + .project-item {
  border-top-style: dashed;
}

:root[data-theme="brutal"] .home-page .bullet-list li::before {
  background: var(--ink);
}

:root[data-theme="mag"] .home-page .hero-name,
:root[data-theme="mag"] .home-page .section-title,
:root[data-theme="mag"] .home-page .job-company,
:root[data-theme="mag"] .home-page .project-title,
:root[data-theme="mag"] .home-page .edu-school {
  font-style: italic;
}

:root[data-theme="mag"] .home-page .hero-name {
  font-weight: 500;
  letter-spacing: -0.04em;
}

:root[data-theme="indust"] .home-page .hero-name {
  font-weight: 500;
  letter-spacing: -0.025em;
}

:root[data-theme="indust"] .home-page .hero-eyebrow,
:root[data-theme="indust"] .home-page .skill-group-title {
  letter-spacing: 0.12em;
}

:root[data-theme="indust"] .home-page .tag {
  background: var(--surface-elev);
  border-color: var(--border);
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .hero {
    padding-top: 2.8rem;
  }

  .hero-grid {
    grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
    gap: clamp(2rem, 4vw, 3.5rem);
  }

  .hero-facts {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 1.75rem;
  }

  .fact-cell {
    flex-direction: row;
    align-items: baseline;
    gap: 0.45rem;
    padding: 0.65rem clamp(0.55rem, 1vw, 1rem);
    border-right: 1px solid var(--border-soft);
  }

  .fact-cell:first-child {
    padding-left: 0;
  }

  .fact-cell:nth-child(odd):not(:first-child) {
    padding-left: clamp(0.55rem, 1vw, 1rem);
  }

  .fact-cell:nth-child(even) {
    padding-left: clamp(0.55rem, 1vw, 1rem);
  }

  .fact-cell:last-child {
    padding-right: 0;
    border-right: 0;
  }

  .resume-content {
    padding-top: 3.4rem;
  }

  .resume-grid {
    grid-template-columns: minmax(0, 2fr) minmax(15rem, 0.88fr);
    gap: clamp(2rem, 4vw, 3.5rem);
  }

  .timeline-item {
    grid-template-columns: minmax(8.5rem, 0.38fr) minmax(0, 1.62fr);
    gap: 1.25rem;
    padding: 1.3rem 0 1.5rem;
  }

  .timeline-meta {
    display: block;
    padding-top: 0.15rem;
  }

  .job-position {
    margin-top: 0.45rem;
  }

  .project-intro {
    grid-template-columns: minmax(0, 1fr) minmax(14rem, 0.7fr);
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.4rem;
  }
}

@media (min-width: 1024px) {
  .hero {
    padding-top: 2.75rem;
  }

  .hero-facts {
    padding-bottom: 1.45rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 767px) {
  .project-visual img {
    max-height: 15rem;
  }
}
</style>
