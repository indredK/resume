<template>
  <div class="about-page animate-fade-in">
    <!-- ============================================================
     * Hero — sub-page eyebrow + title pattern
     * ============================================================ -->
    <section class="about-hero">
      <div class="container mx-auto px-6">
        <div class="hero-eyebrow font-mono">Profile · 职业概述</div>
        <h1 class="hero-title font-display">工程实践</h1>
        <p class="hero-tagline">
          企业级前端 · 多端交付 · 复杂业务梳理
        </p>
      </div>
    </section>

    <div class="container mx-auto px-6 pb-16">
      <div class="max-w-5xl mx-auto space-y-12">
        <!-- ============================================================
         * Engineering strengths
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">01</span>
            <div>
              <h2 class="block-title font-display">能力侧重</h2>
              <p class="block-sub font-mono">Frontend · Architecture · Delivery</p>
            </div>
          </header>

          <div class="trait-grid">
            <article v-for="trait in traits" :key="trait.title" class="trait-card">
              <div class="trait-head">
                <span class="trait-glyph" aria-hidden="true">{{ trait.glyph }}</span>
                <h3 class="trait-title font-display">{{ trait.title }}</h3>
              </div>
              <p class="trait-body">{{ trait.desc }}</p>
            </article>
          </div>

          <div class="callout">
            <p class="callout-label font-mono">核心特质</p>
            <div class="tag-list">
              <span v-for="t in coreTraits" :key="t" class="tag font-mono">{{ t }}</span>
            </div>
          </div>
        </section>

        <!-- ============================================================
         * Working style
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">02</span>
            <div>
              <h2 class="block-title font-display">工作风格</h2>
              <p class="block-sub font-mono">Structured · Proactive · Collaborative</p>
            </div>
          </header>

          <div class="trait-grid">
            <article v-for="trait in workStyleTraits" :key="trait.title" class="trait-card">
              <div class="trait-head">
                <span class="trait-glyph" aria-hidden="true">{{ trait.glyph }}</span>
                <h3 class="trait-title font-display">{{ trait.title }}</h3>
              </div>
              <p class="trait-body">{{ trait.desc }}</p>
            </article>
          </div>

          <div class="callout">
            <p class="callout-label font-mono">做事特点</p>
            <div class="tag-list">
              <span v-for="trait in personalTraits" :key="trait" class="tag font-mono">{{ trait }}</span>
            </div>
          </div>
        </section>

        <!-- ============================================================
         * Methodology
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">03</span>
            <div>
              <h2 class="block-title font-display">协作与交付</h2>
              <p class="block-sub font-mono">Clarify · Align · Validate</p>
            </div>
          </header>

          <div class="trait-grid">
            <article v-for="p in principles" :key="p.title" class="trait-card">
              <div class="trait-head">
                <span class="trait-glyph" aria-hidden="true">{{ p.icon }}</span>
                <h3 class="trait-title font-display">{{ p.title }}</h3>
              </div>
              <p class="trait-body">{{ p.desc }}</p>
            </article>
          </div>

          <div class="callout">
            <p class="callout-label font-mono">实践理念</p>
            <p class="callout-body">
              先澄清业务规则与数据契约，再拆分组件、状态和页面流程；通过真实接口联调、多端检查与端到端验收闭合交付。
            </p>
          </div>
        </section>

        <!-- ============================================================
         * Contact channels
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">04</span>
            <div>
              <h2 class="block-title font-display">联系方式</h2>
              <p class="block-sub font-mono">Get in touch · 欢迎交流与合作</p>
            </div>
          </header>

          <div class="contact-grid">
            <a :href="`mailto:${CONTACT.email}`" class="contact-row">
              <span class="contact-key font-mono">email</span>
              <span class="contact-val font-mono">{{ CONTACT.email }}</span>
              <span class="contact-arrow" aria-hidden="true">→</span>
            </a>
            <a :href="CONTACT.github" target="_blank" rel="noopener noreferrer" class="contact-row">
              <span class="contact-key font-mono">github</span>
              <span class="contact-val font-mono">{{ CONTACT.githubHandle }}</span>
              <span class="contact-arrow" aria-hidden="true">↗</span>
            </a>
            <a :href="CONTACT.blog" target="_blank" rel="noopener noreferrer" class="contact-row">
              <span class="contact-key font-mono">blog</span>
              <span class="contact-val font-mono">CSDN</span>
              <span class="contact-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCaseStudiesData } from '@/composables/useCaseStudiesData'
import { CONTACT } from '@/data/contact'

const { loadPrinciples } = useCaseStudiesData()
const principles = ref<Array<{title: string, icon: string, desc: string}>>([])

const traits = [
  {
    glyph: '◎',
    title: '业务拆解',
    desc: '将复杂需求拆分为页面流程、数据契约、权限边界和验收场景，便于跨角色协作推进。'
  },
  {
    glyph: '◇',
    title: '跨端适配',
    desc: '在 H5、App 与小程序之间梳理平台差异，尽量复用业务能力并保持交互行为一致。'
  },
  {
    glyph: '◈',
    title: '组件与架构',
    desc: '具备 Vue、React 与微前端项目实践，关注组件边界、状态管理和渐进式重构。'
  },
  {
    glyph: '◆',
    title: '质量闭环',
    desc: '把接口联调、响应式检查和端到端验收纳入交付过程，针对边缘状态及时修复。'
  }
]

const coreTraits = ['需求拆解', '权限路由', '组件复用', '多端一致', '接口协同', '质量验收']

const workStyleTraits = [
  {
    glyph: '◎',
    title: '结构化思考',
    desc: '习惯先厘清目标、业务流程、数据与权限，再拆成可讨论、可实现和可验收的任务。'
  },
  {
    glyph: '◇',
    title: '主动推进',
    desc: '从需求澄清、接口联调持续跟进到多端验收，遇到偏差会继续定位原因并推动闭环。'
  },
  {
    glyph: '◈',
    title: '重视协作',
    desc: '注重与产品、后端及设备侧团队对齐业务语义和接口约定，尽量用清晰的记录减少反复沟通。'
  },
  {
    glyph: '◆',
    title: '质量意识',
    desc: '关注边界状态、跨端差异与错误恢复；倾向用实际运行结果验证，并把重复问题沉淀为规范。'
  }
]

const personalTraits = ['条理清晰', '责任心强', '乐于协作', '持续复盘', '关注细节']

onMounted(async () => {
  const data = await loadPrinciples()
  principles.value = data
})
</script>

<style scoped>
.about-page {
  color: var(--ink);
}

/* ============================================================
 * Hero
 * ============================================================ */
.about-hero {
  padding: 2.8rem 0 2rem;
  border-bottom: 1px solid var(--border-soft);
}

.hero-eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.1rem;
}

.hero-title {
  font-size: clamp(2.3rem, 5.5vw, 3.8rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--ink);
  font-weight: 600;
  margin-bottom: 0.9rem;
}

.hero-tag {
  display: inline-block;
  margin-left: 0.5rem;
  font-size: 0.45em;
  vertical-align: middle;
  padding: 0.3em 0.7em;
  border: 1px solid var(--border);
  color: var(--accent);
  font-family: var(--font-mono);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.hero-tagline {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--muted);
  max-width: 36rem;
}

/* ============================================================
 * Block header (shared with all 3 sections)
 * ============================================================ */
.block-header {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
  margin: 2.35rem 0 1.45rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--border-soft);
}

.block-marker {
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.1em;
  padding-top: 0.45rem;
  min-width: 2.5rem;
}

.block-title {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-bottom: 0.25rem;
}

.block-sub {
  font-size: 0.72rem;
  color: var(--muted);
  letter-spacing: 0.06em;
}

/* ============================================================
 * Trait + methodology grid (shared)
 * ============================================================ */
.trait-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 720px) {
  .trait-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.trait-card {
  padding: 1.5rem;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  border-radius: var(--radius);
  transition: border-color 0.15s ease;
}

.trait-card:hover {
  border-color: var(--ink);
}

.trait-head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.8rem;
}

.trait-glyph {
  font-size: 1.4rem;
  color: var(--accent);
  line-height: 1;
}

.trait-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
}

.trait-body {
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--muted);
}

/* ============================================================
 * Callout (core traits + practice philosophy)
 * ============================================================ */
.callout {
  padding: 1.5rem;
  border: 1px dashed var(--border);
  background: transparent;
  border-radius: var(--radius);
}

.callout-label {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 0.85rem;
}

.callout-body {
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--muted);
}

.callout-body strong {
  color: var(--ink);
  font-weight: 600;
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
 * Contact list (typographic, no icon boxes)
 * ============================================================ */
.contact-grid {
  display: flex;
  flex-direction: column;
}

.contact-row {
  display: grid;
  grid-template-columns: 5rem 1fr auto;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-soft);
  text-decoration: none;
  color: var(--ink);
  transition: padding-left 0.2s ease, background-color 0.15s ease;
}

.contact-row:first-of-type {
  border-top: 1px solid var(--border-soft);
}

.contact-row:hover {
  padding-left: 0.75rem;
  background: var(--surface);
}

.contact-key {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
}

.contact-val {
  font-size: 0.95rem;
  color: var(--ink);
  font-weight: 500;
  word-break: break-all;
}

.contact-arrow {
  font-size: 1rem;
  color: var(--faint);
  transition: color 0.15s ease, transform 0.2s ease;
}

.contact-row:hover .contact-arrow {
  color: var(--accent);
  transform: translateX(4px);
}
</style>

<style>
/* ============================================================
 * Theme-specific overrides
 * ============================================================ */

/* ---- Brutal: ASCII markers, hard edges ---- */
:root[data-theme="brutal"] .about-page .hero-eyebrow,
:root[data-theme="brutal"] .about-page .block-marker {
  color: var(--ink);
}

:root[data-theme="brutal"] .about-page .hero-tag {
  color: var(--ink);
  background: var(--ink);
  color: var(--bg);
}

:root[data-theme="brutal"] .about-page .trait-card {
  background: transparent;
  border-color: var(--border);
}

:root[data-theme="brutal"] .about-page .trait-glyph,
:root[data-theme="brutal"] .about-page .callout-label,
:root[data-theme="brutal"] .about-page .contact-key {
  color: var(--ink);
}

:root[data-theme="brutal"] .about-page .callout {
  border-style: solid;
}

:root[data-theme="brutal"] .about-page .contact-row:hover .contact-arrow {
  color: var(--ink);
}

/* ---- Mag: italic display, tinted backgrounds ---- */
:root[data-theme="mag"] .about-page .hero-title,
:root[data-theme="mag"] .about-page .block-title,
:root[data-theme="mag"] .about-page .trait-title {
  font-style: italic;
}

:root[data-theme="mag"] .about-page .hero-tag {
  font-style: normal;
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
}

/* ---- Indust: compact uppercase blocks, accent saturation ---- */
:root[data-theme="indust"] .about-page .block-title {
  text-transform: uppercase;
  font-size: 1.2rem;
  letter-spacing: 0.04em;
}

:root[data-theme="indust"] .about-page .hero-eyebrow,
:root[data-theme="indust"] .about-page .block-sub {
  font-size: 0.65rem;
  letter-spacing: 0.22em;
}

:root[data-theme="indust"] .about-page .tag {
  background: var(--surface-elev);
  border-color: var(--border);
  text-transform: uppercase;
  font-size: 0.62rem;
  letter-spacing: 0.06em;
}

:root[data-theme="indust"] .about-page .hero-tag {
  background: var(--accent);
  color: var(--bg);
  border-color: var(--accent);
  text-transform: uppercase;
}
</style>
