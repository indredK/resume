# Portfolio Hub — Design System

> 全站翻新的单一事实源。任何视觉/排版/Token 决策以此文档为准;实施过程中如发现冲突,先更新本文档再改代码。

---

## 1. Goals & Non-Goals

### Goals

- 用 4 套**视觉哲学迥异**的主题表达同一份内容:Editorial Swiss / Terminal Brutalism / Editorial Magazine / Neo-Industrial
- 通过一个 header 内嵌的切换器让访客在任意页面切换,选择持久化
- 默认 Swiss(简历语境下最稳重)
- 主题切换**瞬时无闪烁**(同步 FOUC 脚本 + dataset 属性)
- 4 主题共享同一份 DOM 结构和数据层,只在样式 token 层分化
- 保留所有现有 a11y 行为(focus trap / Esc / aria-modal / focus order)

### Non-Goals

- ❌ 不做亮/暗模式开关(主题已经隐含了明暗:Swiss/Mag 是 light,Brutal/Indust 是 dark)
- ❌ 不做每用户自定义调色板
- ❌ 不做 SSR / SSG(继续 SPA,base path `/resume/`)
- ❌ 不动数据层、路由、composables、ESLint 配置
- ❌ 不引入 CSS-in-JS 或额外的样式运行时

---

## 2. Token 契约

四主题共享同一套**语义 token 名**,Tailwind v4 通过 `@theme` 桥接,各主题用 `:root[data-theme="X"]` 覆盖具体值。

### Token 名 → Tailwind utility 映射

| 语义 token | Tailwind utility 生成 | 用途 |
|---|---|---|
| `--color-bg` | `bg-bg` `text-bg` | 页面背景 |
| `--color-surface` | `bg-surface` | 卡片、容器表面 |
| `--color-surface-elev` | `bg-surface-elev` | 凸起表面(抽屉、hover 态) |
| `--color-ink` | `text-ink` `border-ink` | 主文字、强边 |
| `--color-muted` | `text-muted` | 次要文字 |
| `--color-faint` | `text-faint` | 说明文字、占位 |
| `--color-accent` | `text-accent` `bg-accent` `border-accent` | 唯一强色 |
| `--color-accent-soft` | `bg-accent-soft` | 强色淡化背景 |
| `--color-border` | `border-border` | 标准边 |
| `--color-border-soft` | `border-border-soft` | 弱边 |
| `--color-success` | `text-success` `bg-success` | 成功状态(metric 增长) |
| `--color-warning` | `text-warning` `bg-warning` | 警示 |
| `--color-danger` | `text-danger` `bg-danger` | 错误 |
| `--font-display` | `font-display` | 标题字体 |
| `--font-body` | `font-body` | 正文字体 |
| `--font-mono` | `font-mono` | 等宽字体 |
| `--radius-base` | `rounded-base` | 标准圆角 |

opacity 修饰符继续可用:`bg-accent/10` `text-ink/60` 等(v4 自动用 `color-mix` 改写)。

### 各主题完整 token 表

| Token | Swiss(默认) | Brutal | Mag | Indust |
|---|---|---|---|---|
| `--bg` | `#F4F1EA` | `#0A0A0A` | `#F2EDE3` | `#1F1F1F` |
| `--surface` | `#FFFFFF` | `#0F0F0F` | `#FFFEF9` | `#2A2A2A` |
| `--surface-elev` | `#FBF8F1` | `#1A1A1A` | `#EAE2D0` | `#353535` |
| `--ink` | `#1A1814` | `#E8E8E8` | `#1B1410` | `#E8E8E8` |
| `--muted` | `#4A463E` | `#888888` | `#5A4E3F` | `#999999` |
| `--faint` | `#8A8478` | `#555555` | `#8F8270` | `#666666` |
| `--accent` | `#C8451F` | `#E8E8E8` | `#8A1538` | `#FF6B1A` |
| `--accent-soft` | `#C8451F` | `#E8E8E8` | `#8A1538` | `#FF6B1A` |
| `--border` | `#1A1814` | `#2A2A2A` | `#1B1410` | `#3D3D3D` |
| `--border-soft` | `#DDD7C8` | `#1F1F1F` | `#D9CFBA` | `#2E2E2E` |
| `--success` | `#2D6A4F` | `#E8E8E8` | `#2D4A3E` | `#5DAB6B` |
| `--warning` | `#B07A18` | `#E8E8E8` | `#C19A4B` | `#E0A030` |
| `--danger` | `#9B1B30` | `#E8E8E8` | `#8A1538` | `#E84B2A` |
| `--font-display` | `"Newsreader", Georgia, serif` | `ui-monospace, Menlo, monospace` | `"Fraunces", Georgia, serif` | `"Space Grotesk Variable", system-ui` |
| `--font-body` | `"IBM Plex Sans", system-ui` | `ui-monospace, Menlo, monospace` | `"IBM Plex Sans", system-ui` | `"Archivo Narrow", system-ui` |
| `--font-mono` | `"IBM Plex Mono", ui-monospace` | `ui-monospace, Menlo, monospace` | `ui-monospace, Menlo, monospace` | `"JetBrains Mono", ui-monospace` |
| `--radius` | `0px` | `0px` | `2px` | `2px` |

**Brutal 主题特殊**:`--accent === --ink`,所有 accent utility 渲染为 ink 颜色,实现「纯单色」效果。

### Mag 主题额外色(只在 Mag 内引用)

| Token | 值 | 用途 |
|---|---|---|
| `--accent-mag-2` | `#C19A4B` | 芥末黄,用于 tag/box 强调 |
| `--accent-mag-3` | `#2D4A3E` | 深墨绿,用于大引文 |

在 Mag 主题外这些变量未定义,引用它们的元素必须用 fallback 或包在 `:root[data-theme="mag"]` 选择器里。

---

## 3. 字体矩阵

所有字体走 `@fontsource(-variable)` 本地 bundle,**移除** Google Fonts preconnect。

| Theme | Display | Body | Mono | npm 包 |
|---|---|---|---|---|
| Swiss | Newsreader(variable) | IBM Plex Sans(400/600) | IBM Plex Mono(400) | `@fontsource-variable/newsreader`、`@fontsource/ibm-plex-sans`、`@fontsource/ibm-plex-mono` |
| Brutal | — | — | — | 无(纯 `ui-monospace`,零字节) |
| Mag | Fraunces(variable, opsz/wght) | 复用 IBM Plex Sans | 复用系统 mono | `@fontsource-variable/fraunces` |
| Indust | Space Grotesk(variable) | Archivo Narrow(400/700 静态,Google Fonts 上无 variable) | JetBrains Mono(400/700) | `@fontsource-variable/space-grotesk`、`@fontsource/archivo-narrow`、`@fontsource/jetbrains-mono` |

总包数:7 个。一次性 import 到 `src/main.ts`,Vite 会按需 emit 子集化 woff2。`font-display: swap` 默认。

---

## 4. 不可触碰清单(Preserved Invariants)

实施过程中**禁止改动**:

| 项 | 路径 / 说明 |
|---|---|
| a11y composables | `src/composables/useFocusTrap.ts` / `useEscClose.ts` / `useScrollLock.ts` / `useScrollReset.ts` |
| Dialog ARIA | `role="dialog"` `aria-modal="true"` `tabindex="-1"` 在 BaseDrawer / FrameworkCompareModal |
| Esc 关 / Focus trap / Click-outside 关 | 行为不变,只改视觉容器 |
| Router 配置 | `src/router/index.ts` 一行不动,base path `/resume/` |
| 数据层 | `src/data/**` 整个目录一行不动 |
| 品牌色 | `#42b883` (Vue) / `#61dafb` (React) 在 FrameworkCompareModal 里保留字面值 |
| ESLint rules | `vue/no-template-target-blank` 等保留 |
| Build / TS / Vite 配置 | `vite.config.js` / `tsconfig.json` / `eslint.config.js` |
| Loading 8s 兜底文案 | `index.html` 里那段 setTimeout 提示保留,仅改样式 |
| Session redirect script | `index.html` 里 `/resume/` redirect 那段同步脚本保留 |

SkillTree 的 `--cat-color` / `--skill-color` 机制保留,但在 Swiss/Brutal 主题里被全局覆盖为单色 ink。

---

## 5. ThemeSwitcher 契约

### DOM 形态

```html
<nav class="theme-switcher" aria-label="主题">
  <button type="button" data-theme-target="swiss"  :aria-current="...">swiss</button>
  <span aria-hidden="true">/</span>
  <button type="button" data-theme-target="brutal" :aria-current="...">brutal</button>
  <span aria-hidden="true">/</span>
  <button type="button" data-theme-target="mag"    :aria-current="...">mag</button>
  <span aria-hidden="true">/</span>
  <button type="button" data-theme-target="indust" :aria-current="...">indust</button>
</nav>
```

### 视觉规则

- Active 按钮:`text-ink`,inactive:`text-muted`
- 4 主题共用同一份 DOM。在不同主题中自然读作:出版栏目标签 / CLI 选项 / 刊物分类 / 控制面板选择器
- 字体跟随 `--font-mono`(所有 4 主题都让切换器用 mono 字体,形成视觉锚点)

### 键盘 / a11y

- 每个 button 用 `type="button"`,Tab 可达
- 当前主题用 `aria-current="true"`
- 不用 ARIA `radiogroup`(切换的是 UI 状态,不是表单值)
- 不做下拉(避免 focus trap 复杂度)
- 移动端 < 480px 折行而非折叠

### 持久化

- localStorage key:`portfolio-theme`
- 合法值:`swiss` | `brutal` | `mag` | `indust`
- 非法/缺失值 → fallback 到 `swiss`
- 读写都通过 `useTheme()` composable

### FOUC 防闪烁

同步内联脚本在 `index.html` 的 `<head>` 中、`#app-loading` 之前执行:

```html
<script>
  (function(){
    try {
      var t = localStorage.getItem('portfolio-theme');
      var valid = ['swiss','brutal','mag','indust'];
      document.documentElement.dataset.theme = valid.indexOf(t) !== -1 ? t : 'swiss';
    } catch(e) { document.documentElement.dataset.theme = 'swiss'; }
  })();
</script>
```

`#app-loading` 的样式根据 `html[data-theme]` 分化,首屏背景色与主题一致。

---

## 6. PR 序列

| PR | 范围 | Acceptance |
|---|---|---|
| **PR 1** | 设计文档 + style.css 重写 + useTheme + ThemeSwitcher + index.html FOUC + main.ts fontsource | 4 主题可切换,body 背景/字体/loading 都换;视图层还在用旧 Tailwind utility(预期半新半旧)。lint/type-check/build 全绿。 |
| **PR 2** | Home + App.vue chrome(header/footer 重做) + 排版节奏 utility + 删 glass-* | Home 在 4 主题下视觉迥异且都成立;切主题瞬切无 FOUC。 |
| **PR 3** | About + Skills + NotFound + SkillTree token 化 | 三个页面 + SkillTree 在 4 主题下都成立;Swiss/Brutal 单色,Mag/Indust 类别色保留。 |
| **PR 4** | CaseStudies(独立 PR,structurally 重写 scoped style) | 4 主题下 Case Studies 全部成立,a11y 无回归。 |
| **PR 5** | BaseDrawer + ApproachDrawer + FrameworkCompareModal + 滚动条 + 截图归档 | 抽屉/模态 4 主题视觉一致;品牌色保留;键盘焦点回归;部署验证。 |

每个 PR 在合并前满足第 9 节验证清单。

---

## 7. CaseStudies 迁移 Playbook

[CaseStudies.vue](apps/main-site/src/views/CaseStudies.vue) 有 700+ 行 `<style scoped>` 段,36 个 `rgba()` 字面值,基于「玻璃拟态」假设写的(translucent slate stacks + box-shadow)。**纯 find-replace 不可行** —— 这个 aesthetic 在 Swiss/Brutal 里完全错误(无 shadow、无 glass)。

### 操作步骤

1. **删除所有 `box-shadow` 规则** —— 4 主题都不要假装有发光/深度。如某主题需要阴影,通过 `border-bottom` 或 `outline` 表达。
2. **替换 rgba 背景** —— `rgba(15, 23, 42, *)` → `var(--bg)` / `var(--surface)` / `var(--surface-elev)`(按 elevation 选)。
3. **替换 rgba 边** —— `rgba(255, 255, 255, *)` → `var(--border)` / `var(--border-soft)`。
4. **替换 backdrop-filter** —— 仅在 Mag/Indust 主题保留(用 `:root[data-theme="mag"] .panel` 选择器包裹),Swiss/Brutal 不要。
5. **公司主题色 `COMPANY_THEME`(line 376-416)**:
   - Mag/Indust:保留(用 HSL 着色)
   - Swiss/Brutal:全部映射为 `var(--ink)`,通过 `:root[data-theme="swiss"], :root[data-theme="brutal"] .company-accent { color: var(--ink); border-color: var(--ink); }` 覆盖
6. **`color-mix(in srgb, var(--cat-color) 20%, rgba(...))`(line 48-50,Skills.vue)** —— 改为 `color-mix(in oklab, var(--cat-color) 20%, var(--surface))`,在 Swiss/Brutal 里 cat-color 已被覆盖为 ink。
7. **Sticky tab 的 `scale(1.05)` 激活态** —— 改为 `border-bottom: 2px solid var(--accent)`,所有主题都用同一种激活语言:加粗下边线。

### 验证

PR4 完成后,访问 `/case-studies` 在 4 主题下:
- 内容结构、tabs、左侧 nav、approach drawer、metric cards 全部可见
- 4 主题视觉迥异,但每个都「成立」
- 键盘:Tab 走 sticky tab → 左 nav → 右侧详情 → drawer 触发 → drawer 内焦点 trap

---

## 8. 各主题视觉规范

### 8.1 Editorial Swiss(默认)

**精神**:出版物气质。安静、有信任感。让访客感到这是一个慎重的人在表达。

| 维度 | 规则 |
|---|---|
| 网格 | 12 栏,gutter 24px,max-width 1200px,左右大留白 |
| 字号刻度 | Display 64/48/32(serif Newsreader,line-height 1.05) · Body 16/14(grotesque,line-height 1.6) · Caption 12(uppercase tracking-wider) |
| 强色 | 朱红 `#C8451F` 仅用于:链接 hover、强调段落首字、可点击区域 active 态 |
| 装饰 | 极少。允许:`hr` 横线、章节编号(01–04)、列表用 `—` 而非 bullet |
| 阴影 | 无 |
| 圆角 | 0 |
| 标题段落 | 大量留白,标题左对齐而非居中 |
| 链接 | 文字内 `text-accent` + `underline-offset: 0.2em` |
| Hover | 颜色变化,无 transform |
| Do | 用衬线 display + 大留白讲层级 |
| Don't | 玻璃、光晕、渐变文字、渐变背景、圆角卡片、阴影 |

### 8.2 Terminal Brutalism

**精神**:开发者文化原教旨主义。看上去像一个 `--help` 输出但精心排版。

| 维度 | 规则 |
|---|---|
| 网格 | 等宽字符网格,基础单位 1ch |
| 字号刻度 | 全部 mono。Display 32/24/18 · Body 14 · Caption 12 |
| 强色 | 单色,`--accent === --ink`,无第二色 |
| 装饰 | ASCII 字符:`┌─┐│└─┘` 边框、`▓▒░` 进度条、`> ` `$ ` 命令提示符、`*` 列表项 |
| 阴影 | 无 |
| 圆角 | 0 |
| 边 | 1px `--border`(灰)或 ASCII 字符代替 |
| Hover | 反色(`background: var(--ink); color: var(--bg);`)或 `[ ]` 包裹 |
| 链接 | 下划线 + 前缀 `→` 或 `[link]` 标记 |
| Do | 全 mono、ASCII 装饰、单色、零字节字体 |
| Don't | 衬线字、彩色、阴影、圆角、玻璃、任何 transform 动画 |

### 8.3 Editorial Magazine

**精神**:独立杂志风。有生活、有手感、不规整。

| 维度 | 规则 |
|---|---|
| 网格 | 不对称,允许 7+5 / 4+8 / 3+9 切分,栏目间 hairline 分隔 |
| 字号刻度 | Display Fraunces 96/64/40(variable opsz 可变到展示态) · Body Plex Sans 16/14 · Pullquote 32(serif italic) |
| 强色 | 多色:酒红 `#8A1538` display、芥末黄 `#C19A4B` tag、墨绿 `#2D4A3E` 大引文 |
| 装饰 | ISSUE/SECTION 编号、大引文、装饰横线 `━━━━━`、可选 noise grain 纸张感(轻) |
| 阴影 | 微小 hard shadow `0 2px 0 var(--ink)` 用于 tag/box,无 blur |
| 圆角 | 2px(几乎是直角) |
| 标题段落 | 标题可超大,正文可错位 |
| Hover | 颜色变化,可加 `text-decoration: line-through` 或重描边 |
| Do | serif + sans 混搭、不对称、大引文、有意的"杂乱" |
| Don't | 完全对称的居中布局、玻璃、渐变光晕 |

### 8.4 Neo-Industrial

**精神**:工程图纸感。回应 IoT 工程师身份。

| 维度 | 规则 |
|---|---|
| 网格 | 8px 基础栅格 + 背景细 grid(2px dot 或 1px line at 8px interval, very subtle) |
| 字号刻度 | Display Space Grotesk 56/40/28(narrow, ALL CAPS for h2+) · Body Archivo Narrow 14 · Code JetBrains Mono 13 |
| 强色 | 警示橙 `#FF6B1A`,用在 status indicator、active state、可点击主按钮 |
| 装饰 | 技术标注:`REV.04` `SCALE 1:1` `UNIT:rem` 等小字脚注;⊙ ◉ ● 圆点状态;`[ FIG.01 ]` 标记;hairline 边框 |
| 阴影 | 实色硬阴影 `0 1px 0 var(--border)` + 大范围 `0 8px 24px rgba(0,0,0,0.4)` 凸起感 |
| 圆角 | 2px(克制) |
| 边 | 多用 1px `--border-soft`,关键容器用 2px `--accent` |
| Hover | translateY(-1px) + 边色变 `--accent` |
| Do | 标注线、技术字段、ALL CAPS 标题、橙色作为单一信号色、blueprint grid |
| Don't | 玻璃/模糊、渐变光晕、serif 字、过多动画 |

---

## 9. 决策日志

Append-only。新决策追加到底部,旧决策不删不改(便于回溯)。

| 日期 | 决策 | 理由 |
|---|---|---|
| 2026-05-26 | 默认主题 Swiss | 简历语境下最稳重,首次访问的安全选择 |
| 2026-05-26 | 4 主题都做并加切换器,不做亮/暗模式 | 4 主题已经隐含明暗;再加一层会让 token 表炸开 |
| 2026-05-26 | @fontsource 本地打包(非 Google Fonts CDN) | 性能 + 切换时无 FOUT |
| 2026-05-26 | ThemeSwitcher 用 `swiss / brutal / mag / indust` 文字 slash 分隔 | 一份 DOM 在 4 主题里读起来都成立 |
| 2026-05-26 | SkillTree `--cat-color` 在 Swiss/Brutal 里被覆盖为 ink | 单色主题不应有彩色类别区分 |
| 2026-05-26 | Vue/React 品牌色保留字面值不主题化 | 它们是关于产品的内容数据,不是 chrome |
| 2026-05-26 | Tailwind v4 `@theme` bridge + `data-theme` 覆盖 | v4 idiomatic;opacity 修饰符(`/10` 等)继续可用 |
| 2026-05-26 | 拆 5 个 PR | 每个 PR 自洽可合,review 面积可控,中间态不公开 |
