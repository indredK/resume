<template>
  <div class="ai-page animate-fade-in">
    <section class="ai-hero">
      <div class="container mx-auto px-6">
        <p class="ai-eyebrow font-mono">AI ENGINEERING · AGENT WORKFLOW</p>
        <h1 class="ai-title font-display">AI 工具与 Agent 实践</h1>
        <p class="ai-lead">
          把 AI 编码助手、多 Agent 协作和项目知识接入真实研发流程，覆盖需求拆解、代码实现、测试验收与经验沉淀；让效率提升建立在权限可控、过程可查、结果可验证之上。
        </p>
        <div class="ai-hero-tags" aria-label="实践方向">
          <span class="ai-chip font-mono">Context Engineering</span>
          <span class="ai-chip font-mono">Agent Skills</span>
          <span class="ai-chip font-mono">MCP</span>
          <span class="ai-chip font-mono">Human Review</span>
          <span class="ai-chip font-mono">Quality Gates</span>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-6 ai-content">
      <section class="ai-section">
        <header class="ai-section-head">
          <span class="ai-section-index font-mono">01</span>
          <div>
            <h2 class="ai-section-title font-display">工具矩阵</h2>
            <p class="ai-section-sub font-mono">Choose tools by task, context and verification cost</p>
          </div>
        </header>

        <div class="ai-tool-cloud" role="list" aria-label="AI 工具实践矩阵">
          <span v-for="tool in tools" :key="tool" role="listitem" class="ai-tool-pill font-mono">{{ tool }}</span>
        </div>

        <div class="ai-subsection-head">
          <h3 class="ai-subsection-title font-display">工具使用经验</h3>
          <p class="ai-subsection-copy">按任务形态组合 CLI、IDE 与多 Agent 工作空间</p>
        </div>

        <div class="ai-card-grid tool-experience-grid">
          <article v-for="item in toolExperiences" :key="item.title" class="ai-card tool-experience-card">
            <p class="ai-card-kicker font-mono">{{ item.kicker }}</p>
            <h3 class="ai-card-title font-display">{{ item.title }}</h3>
            <div class="tool-experience-names">
              <span v-for="name in item.tools" :key="name" class="ai-card-tag font-mono">{{ name }}</span>
            </div>
            <p class="ai-card-body">{{ item.description }}</p>
            <div class="ai-card-tags">
              <span v-for="tag in item.tags" :key="tag" class="ai-card-tag font-mono">{{ tag }}</span>
            </div>
          </article>
        </div>

        <div class="ai-subsection-head token-head">
          <h3 class="ai-subsection-title font-display">全历史 Token 使用统计</h3>
          <p class="ai-subsection-copy">基于 CC Switch 全历史用量记录汇总请求量、输入输出与缓存结构</p>
        </div>

        <div class="token-metric-grid">
          <article v-for="item in tokenObservations" :key="item.label" class="token-metric-card">
            <p class="token-metric-value font-mono">{{ item.value }}</p>
            <p v-if="item.precise" class="token-metric-precise font-mono">{{ item.precise }}</p>
            <h4 class="token-metric-label">{{ item.label }}</h4>
            <p class="token-metric-detail">{{ item.detail }}</p>
          </article>
        </div>
        <div class="token-breakdown" aria-label="按工具统计的累计 Token">
          <h4 class="token-breakdown-title font-display">按工具拆分</h4>
          <div v-for="item in tokenByTool" :key="item.tool" class="token-breakdown-row">
            <span class="token-breakdown-tool">{{ item.tool }}</span>
            <span class="token-breakdown-value">
              <strong class="font-mono">{{ item.value }}</strong>
              <small class="token-breakdown-precise font-mono">{{ item.tokens }} Token</small>
            </span>
          </div>
        </div>
        <p class="token-scope-note">{{ tokenScopeNote }}</p>
      </section>

      <section class="ai-section">
        <header class="ai-section-head">
          <span class="ai-section-index font-mono">02</span>
          <div>
            <h2 class="ai-section-title font-display">Agent 研发工作流</h2>
            <p class="ai-section-sub font-mono">Context → Contract → Delegate → Guard → Verify → Learn</p>
          </div>
        </header>

        <div class="ai-workflow-grid">
          <article v-for="(step, index) in workflow" :key="step.title" class="workflow-card">
            <span class="workflow-index font-mono">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="workflow-title font-display">{{ step.title }}</h3>
            <p class="workflow-body">{{ step.description }}</p>
          </article>
        </div>
      </section>

      <section class="ai-section">
        <header class="ai-section-head">
          <span class="ai-section-index font-mono">03</span>
          <div>
            <h2 class="ai-section-title font-display">贴合企业研发要求</h2>
            <p class="ai-section-sub font-mono">Governance · Reliability · Reuse</p>
          </div>
        </header>

        <div class="ai-card-grid enterprise-grid">
          <article v-for="item in enterprisePractices" :key="item.title" class="ai-card enterprise-card">
            <div class="enterprise-icon" aria-hidden="true">{{ item.icon }}</div>
            <h3 class="ai-card-title font-display">{{ item.title }}</h3>
            <p class="ai-card-body">{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section class="ai-section">
        <header class="ai-section-head">
          <span class="ai-section-index font-mono">04</span>
          <div>
            <h2 class="ai-section-title font-display">可复用的实践成果</h2>
            <p class="ai-section-sub font-mono">From one-off prompting to repeatable engineering assets</p>
          </div>
        </header>

        <div class="evidence-list">
          <article v-for="item in evidence" :key="item.title" class="evidence-row">
            <div class="evidence-marker font-mono">{{ item.marker }}</div>
            <div class="evidence-copy">
              <h3 class="evidence-title font-display">{{ item.title }}</h3>
              <p class="evidence-body">{{ item.description }}</p>
            </div>
            <div class="evidence-tags">
              <span v-for="tag in item.tags" :key="tag" class="ai-card-tag font-mono">{{ tag }}</span>
            </div>
          </article>
        </div>

        <div class="ai-footer-callout">
          <p class="callout-label font-mono">协作原则</p>
          <p>
            让模型承担可拆分、可复查的执行工作；由人确定目标与风险边界，并对高影响操作和最终交付负责。
          </p>
          <RouterLink to="/case-studies" class="ai-case-link font-mono">查看项目案例 <span aria-hidden="true">→</span></RouterLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const tools = [
  'Codex',
  'Claude Code',
  'Copilot',
  'Cursor',
  'Gemini CLI',
  'OpenCode',
  'Qoder CN IDE',
  'QoderWork',
  'Multica',
  'WorkBuddy',
  'Trae CN',
  'TRAE SOLO CN',
  'CodeBuddy',
  'Kiro',
  'Antigravity',
  'Windsurf',
  'Hermes',
  'OpenClaw',
  'MiniMax Agent',
  'MiniMax Code'
]

const toolExperiences = [
  {
    kicker: '01 / CLI AGENTS',
    title: '终端里的代码库级任务',
    tools: ['Codex', 'Claude Code', 'Gemini CLI', 'OpenCode'],
    description: '用仓库规则和任务边界建立上下文，处理代码检索、跨文件实现、命令执行、调试与差异审查；复杂工作拆成有输入、交付物和验收条件的小任务。',
    tags: ['CLI Tool Use', '跨文件研发', '任务拆解', '人工复核']
  },
  {
    kicker: '02 / IDE AGENTS',
    title: 'IDE 内的代码导航与迭代',
    tools: ['Cursor', 'Qoder CN / QoderWork', 'Trae CN / TRAE SOLO', 'CodeBuddy CN', 'Kiro', 'Antigravity', 'Windsurf'],
    description: '在 IDE 中利用项目上下文完成代码定位、局部实现和多文件修改；按任务选择补全或 Agent 模式，通过查看差异、运行检查和小步修订收口。',
    tags: ['IDE Agent', '代码导航', '增量修改', 'Diff Review']
  },
  {
    kicker: '03 / ORCHESTRATION',
    title: '工作空间与多 Agent 编排',
    tools: ['WorkBuddy', 'Multica', 'Hermes', 'OpenClaw'],
    description: '探索以工作空间组织上下文、连接工具和分派任务的方式；通过角色分工、共享规则和明确交接信息，降低多 Agent 协作中的上下文漂移。',
    tags: ['多 Agent', 'MCP / 工具接入', '上下文管理', '交接规范']
  },
  {
    kicker: '04 / MODEL EVALUATION',
    title: '模型效果与 Token 账本',
    tools: ['Copilot', 'MiniMax Agent / Code', 'MiMo API'],
    description: '在通用 AI 助理与编码 Agent 间按任务切换；通过模型/API 实测记录请求量及输入、输出、缓存输入拆分，对比缓存命中与调用成本，不把单次结果外推成长期均值。',
    tags: ['Token 统计', '缓存命中', '模型评估', '成本意识']
  }
]

const tokenObservations = [
  {
    value: '113.35 亿',
    precise: '11,334,701,044 Token',
    label: 'CC Switch 全历史真实消耗 Token',
    detail: '统计区间 2025-12-13 至 2026-09-27；全部应用、全部来源。'
  },
  {
    value: '81,343',
    label: '累计请求数',
    detail: '覆盖 Codex、OpenCode、Claude Code、MiniMax Code 与 Gemini 的本地记录。'
  },
  {
    value: '87.1%',
    label: '累计缓存命中率',
    detail: '缓存命中约 98.16 亿 Token；新增输入约 13.16 亿、缓存创建约 1.45 亿、输出约 5,832.7 万。'
  }
]

const tokenByTool = [
  { tool: 'Codex', value: '52.48 亿', tokens: '5,248,081,184' },
  { tool: 'OpenCode', value: '43.18 亿', tokens: '4,317,679,781' },
  { tool: 'Claude Code', value: '17.63 亿', tokens: '1,763,345,642' },
  { tool: 'MiniMax Code', value: '0.0546 亿', tokens: '5,463,748' },
  { tool: 'Gemini', value: '0.0013 亿', tokens: '130,689' }
]

const tokenScopeNote = '统计口径：读取 CC Switch 用量面板全应用、全部来源汇总，覆盖 2025-12-13 00:00 至 2026-09-27 13:11。真实消耗包含输入、输出、缓存命中和缓存创建；CC Switch 提示部分协议（如 OpenAI）不上报缓存写入，因此记录总量可能偏低。'

const workflow = [
  {
    title: '加载项目上下文',
    description: '读取仓库规则、需求说明、接口契约和历史结论，先确定真源与禁止触碰的边界。'
  },
  {
    title: '定义任务契约',
    description: '把目标、影响范围、依赖、风险和验收标准写清楚，让任务可以分派也可以复核。'
  },
  {
    title: '按角色分工',
    description: '并行处理调研、实现、审查、测试或文档工作，保留主线负责整合与冲突处理。'
  },
  {
    title: '设置执行护栏',
    description: '控制工具权限与上下文范围；对敏感数据、外部写入和不可逆操作保留人工审查。'
  },
  {
    title: '用证据验收',
    description: '确定性规则交给脚本和 CI，语义与体验问题由 Agent 提供线索、再由人复核。'
  },
  {
    title: '沉淀复用经验',
    description: '把稳定做法、常见故障和验收要求回写到规则、Skills、检查脚本和项目文档。'
  }
]

const enterprisePractices = [
  {
    icon: '⌑',
    title: '权限与数据边界',
    description: '按任务提供必要上下文和工具权限；避免在提示、示例和知识沉淀中暴露凭证、个人资料或客户敏感信息。'
  },
  {
    icon: '✓',
    title: '质量门禁与人工复核',
    description: '将可机器判定的检查固化为脚本与 CI；把需要业务判断的项目留给 Agent 提示和工程师审核。'
  },
  {
    icon: '↺',
    title: '过程可追溯',
    description: '任务说明、代码变更、运行结果和待解决风险都有明确记录；重要操作保留复核和回滚路径。'
  },
  {
    icon: '▦',
    title: '经验可复用',
    description: '把一次性排错转为接管指南、测试 SOP、Skills 或确定性检查，降低重复探索和团队交接成本。'
  }
]

const evidence = [
  {
    marker: 'A',
    title: 'Agent 可直接使用的测试知识体系',
    description: '按“仓库入口 → 测试实践手册 → 判断型 Skill”分层组织测试上下文，包含接管 SOP、账号口径、排错路径与经验索引。',
    tags: ['AGENTS.md', 'E2E SOP', 'Skills']
  },
  {
    marker: 'B',
    title: '从人工检查演进到 CI 质量门禁',
    description: '将国际化、主题令牌、配置镜像、样式单位、跨端 API 和文档规范等重复检查整理为脚本；确定性问题自动拦截，语义候选交由人工复核。',
    tags: ['脚本化', 'CI', '误报治理']
  },
  {
    marker: 'C',
    title: '复杂项目的分角色交付',
    description: '在多端业务研发和桌面应用工程中，使用 Agent 辅助需求拆解、实现、测试、问题定位和文档同步，并以项目规则和验收证据收口。',
    tags: ['多端业务', '桌面应用', '代码评审']
  }
]
</script>

<style scoped>
.ai-page {
  color: var(--ink);
}

.ai-hero {
  padding: 3.8rem 0 3.1rem;
  border-bottom: 1px solid var(--border-soft);
}

.ai-eyebrow,
.ai-section-sub,
.ai-card-kicker,
.workflow-index,
.evidence-marker,
.callout-label {
  color: var(--accent);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.ai-eyebrow {
  margin-bottom: 1rem;
}

.ai-title {
  max-width: 58rem;
  margin-bottom: 1.2rem;
  font-size: clamp(2.5rem, 7vw, 4.7rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.04;
}

.ai-lead {
  max-width: 56rem;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.8;
}

.ai-hero-tags,
.ai-tool-cloud,
.ai-card-tags,
.evidence-tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem;
}

.ai-hero-tags {
  margin-top: 1.5rem;
}

.ai-chip,
.ai-tool-pill,
.ai-card-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.42rem 0.62rem;
  border: 1px solid var(--border-soft);
  background: var(--surface);
  color: var(--muted);
  font-size: 0.68rem;
}

.ai-chip {
  border-color: var(--border);
  color: var(--ink);
}

.ai-content {
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  padding-top: 3.5rem;
  padding-bottom: 2rem;
}

.ai-section-head {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 1.7rem;
  padding-bottom: 1.05rem;
  border-bottom: 1px solid var(--border-soft);
}

.ai-section-index {
  min-width: 2rem;
  padding-top: 0.36rem;
  color: var(--accent);
  font-size: 0.72rem;
}

.ai-section-title {
  margin-bottom: 0.35rem;
  font-size: 1.65rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.ai-section-sub {
  color: var(--faint);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
}

.ai-tool-cloud {
  margin: 0 0 1.35rem 3.25rem;
}

.ai-tool-pill {
  border-color: var(--border);
  color: var(--ink);
  font-size: 0.72rem;
}

.ai-card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.ai-subsection-head {
  margin: 1.75rem 0 1rem 3.25rem;
}

.ai-subsection-title {
  margin-bottom: 0.35rem;
  font-size: 1.08rem;
  font-weight: 600;
}

.ai-subsection-copy {
  color: var(--faint);
  font-size: 0.76rem;
  line-height: 1.6;
}

.tool-experience-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.ai-card {
  min-width: 0;
  padding: 1.35rem;
  border: 1px solid var(--border-soft);
  background: var(--surface);
}

.ai-card-kicker {
  margin-bottom: 0.8rem;
  color: var(--faint);
  font-size: 0.62rem;
}

.ai-card-title {
  margin-bottom: 0.7rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.ai-card-body,
.workflow-body,
.evidence-body {
  color: var(--muted);
  font-size: 0.87rem;
  line-height: 1.75;
}

.ai-card-tags {
  margin-top: 1.1rem;
  gap: 0.4rem;
}

.tool-experience-names {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 0.9rem;
}

.tool-experience-names .ai-card-tag {
  border-color: var(--border);
  color: var(--ink);
}

.ai-card-tag {
  padding: 0.32rem 0.48rem;
  font-size: 0.6rem;
}

.token-head {
  margin-top: 2.1rem;
}

.token-metric-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.token-metric-card {
  min-width: 0;
  padding: 1.1rem 1.15rem;
  border: 1px solid var(--border-soft);
  background: var(--surface-elev);
}

.token-metric-value {
  margin-bottom: 0.8rem;
  color: var(--accent);
  font-size: clamp(1.2rem, 2.4vw, 1.75rem);
  letter-spacing: -0.04em;
  overflow-wrap: anywhere;
}

.token-metric-precise {
  margin: -0.5rem 0 0.8rem;
  color: var(--muted);
  font-size: 0.68rem;
  overflow-wrap: anywhere;
}

.token-metric-label {
  margin-bottom: 0.45rem;
  font-size: 0.86rem;
  font-weight: 600;
}

.token-metric-detail,
.token-scope-note {
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.7;
}

.token-breakdown {
  margin-top: 1.2rem;
  border-top: 1px solid var(--border-soft);
}

.token-breakdown-title {
  padding: 0.95rem 0 0.4rem;
  font-size: 0.88rem;
  font-weight: 600;
}

.token-breakdown-row {
  display: grid;
  grid-template-columns: minmax(8rem, 0.8fr) minmax(0, 1fr);
  gap: 1rem;
  padding: 0.65rem 0;
  border-bottom: 1px solid var(--border-soft);
  font-size: 0.78rem;
}

.token-breakdown-tool {
  color: var(--muted);
}

.token-breakdown-value {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.12rem;
  color: var(--ink);
  text-align: right;
  overflow-wrap: anywhere;
}

.token-breakdown-value strong {
  font-size: 0.8rem;
  font-weight: 600;
}

.token-breakdown-precise {
  color: var(--muted);
  font-size: 0.65rem;
}

.token-scope-note {
  margin: 0.8rem 0 0 3.25rem;
  color: var(--faint);
  font-size: 0.68rem;
}

.ai-workflow-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
}

.workflow-card {
  min-height: 10.5rem;
  padding: 1.2rem;
  border-top: 2px solid var(--accent);
  background: var(--surface-elev);
}

.workflow-index {
  display: block;
  margin-bottom: 1rem;
  color: var(--faint);
  font-size: 0.65rem;
}

.workflow-title {
  margin-bottom: 0.55rem;
  font-size: 1.02rem;
  font-weight: 600;
}

.enterprise-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.enterprise-card {
  position: relative;
  padding-left: 4.1rem;
}

.enterprise-icon {
  position: absolute;
  top: 1.25rem;
  left: 1.35rem;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 1.45rem;
}

.evidence-list {
  border-top: 1px solid var(--border-soft);
}

.evidence-row {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr) minmax(9rem, 0.55fr);
  align-items: start;
  gap: 1rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border-soft);
}

.evidence-marker {
  padding-top: 0.2rem;
  font-size: 0.75rem;
}

.evidence-title {
  margin-bottom: 0.45rem;
  font-size: 1.08rem;
  font-weight: 600;
}

.evidence-tags {
  justify-content: flex-end;
}

.ai-footer-callout {
  margin-top: 1.5rem;
  padding: 1.35rem 1.5rem;
  border-left: 2px solid var(--accent);
  background: var(--surface-elev);
}

.callout-label {
  margin-bottom: 0.5rem;
}

.ai-footer-callout > p:not(.callout-label) {
  max-width: 52rem;
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.75;
}

.ai-case-link {
  display: inline-flex;
  gap: 0.45rem;
  margin-top: 1rem;
  color: var(--ink);
  font-size: 0.7rem;
  text-decoration: none;
  text-transform: uppercase;
}

.ai-case-link:hover {
  color: var(--accent);
}

@media (max-width: 900px) {
  .ai-card-grid,
  .ai-workflow-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .token-metric-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .evidence-row {
    grid-template-columns: 2rem minmax(0, 1fr);
  }

  .evidence-tags {
    grid-column: 2;
    justify-content: flex-start;
  }
}

@media (max-width: 600px) {
  .ai-hero {
    padding: 2.8rem 0 2.4rem;
  }

  .ai-content {
    gap: 3.3rem;
    padding-top: 2.5rem;
  }

  .ai-section-head {
    gap: 0.75rem;
  }

  .ai-section-title {
    font-size: 1.4rem;
  }

  .ai-section-sub {
    font-size: 0.58rem;
    line-height: 1.5;
  }

  .ai-tool-cloud,
  .ai-subsection-head,
  .token-scope-note {
    margin-left: 0;
  }

  .ai-card-grid,
  .ai-workflow-grid,
  .enterprise-grid,
  .token-metric-grid {
    grid-template-columns: 1fr;
  }

  .workflow-card {
    min-height: 0;
  }

  .evidence-row {
    gap: 0.65rem;
  }

  .token-breakdown-row {
    grid-template-columns: minmax(6.5rem, 0.7fr) minmax(0, 1fr);
    gap: 0.6rem;
    font-size: 0.7rem;
  }
}
</style>
