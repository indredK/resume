<template>
  <div class="about-page animate-fade-in">
    <!-- ============================================================
     * Hero — sub-page eyebrow + title pattern
     * ============================================================ -->
    <section class="about-hero">
      <div class="container mx-auto px-6">
        <div class="hero-eyebrow font-mono">About · 关于我</div>
        <h1 class="hero-title font-display">Zhong <span class="hero-tag">INTJ</span></h1>
        <p class="hero-tagline">
          建筑师型人格 · 理性思考者 · 追求卓越的工程师
        </p>
      </div>
    </section>

    <div class="container mx-auto px-6 pb-24">
      <div class="max-w-5xl mx-auto space-y-16">
        <!-- ============================================================
         * INTJ Personality
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">01</span>
            <div>
              <h2 class="block-title font-display">INTJ 建筑师型人格</h2>
              <p class="block-sub font-mono">Introverted · Intuitive · Thinking · Judging</p>
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
         * Methodology
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">02</span>
            <div>
              <h2 class="block-title font-display">工作方法论</h2>
              <p class="block-sub font-mono">Data-driven · Continuous iteration</p>
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
              按<strong>公司与项目维度</strong>,量化呈现每一段经历中的<strong>核心成果</strong>与<strong>方法论</strong>。
              用数据说话,用结果证明,持续优化,追求卓越。
            </p>
          </div>
        </section>

        <!-- ============================================================
         * Contact channels
         * ============================================================ -->
        <section>
          <header class="block-header">
            <span class="block-marker font-mono">03</span>
            <div>
              <h2 class="block-title font-display">联系方式</h2>
              <p class="block-sub font-mono">Get in touch · 欢迎交流与合作</p>
            </div>
          </header>

          <div class="contact-grid">
            <a :href="`tel:${CONTACT.phone}`" class="contact-row">
              <span class="contact-key font-mono">phone</span>
              <span class="contact-val font-mono">{{ CONTACT.phoneDisplay }}</span>
              <span class="contact-arrow" aria-hidden="true">→</span>
            </a>
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
    title: '战略思维',
    desc: '善于从全局视角分析问题,制定长期规划。在技术选型和架构设计中,总是考虑可扩展性和未来演进方向。'
  },
  {
    glyph: '◇',
    title: '创新驱动',
    desc: '不满足于现状,持续探索新技术和最佳实践。从 jQuery 到 Vue3,从单体应用到微前端,始终保持技术敏感度。'
  },
  {
    glyph: '◈',
    title: '追求完美',
    desc: '对代码质量有高标准要求,注重工程化实践。TypeScript 覆盖率从 5% 提升到 40%,体现了对类型安全的执着。'
  },
  {
    glyph: '◆',
    title: '独立学习',
    desc: '自主完成多个全栈开源项目,从 GIS 可视化到跨平台聊天应用,展现了强大的自学能力和执行力。'
  }
]

const coreTraits = ['理性分析', '系统思考', '追求效率', '独立自主', '注重细节', '长期规划']

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
  padding: 3.5rem 0 2.5rem;
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
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--ink);
  font-weight: 600;
  margin-bottom: 1.2rem;
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
  gap: 1.5rem;
  margin: 3rem 0 2rem;
  padding-bottom: 1.25rem;
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
  font-size: 1.5rem;
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
