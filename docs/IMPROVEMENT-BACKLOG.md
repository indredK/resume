# Improvement Backlog

> 起源:在完成 P0/P2/P3 第一轮整改后,补做的"非结构性"改进清单。
> 结构性问题(模态统一、数据巨石、组件拆分、Monorepo 等)请看 [ARCHITECTURE-ISSUES.md](./ARCHITECTURE-ISSUES.md)。
> 日期:2026-05-25

---

## A. 高价值 + 低成本(半天内,推荐立刻做)

### A1. 安全:为 `target="_blank"` 加 `rel="noopener noreferrer"`

新打开的页面通过 `window.opener` 可以读改原页面 URL,是公认的安全缺陷。
影响范围 7 处:

- [`src/views/Home.vue:30`](../apps/main-site/src/views/Home.vue)
- [`src/views/About.vue:168, 178`](../apps/main-site/src/views/About.vue)
- [`src/views/CaseStudies.vue:165`](../apps/main-site/src/views/CaseStudies.vue)
- [`src/components/ProjectCard.vue:13, 24`](../apps/main-site/src/components/ProjectCard.vue)
- [`src/components/SkillDrawer.vue:45`](../apps/main-site/src/components/SkillDrawer.vue)
- [`src/components/FrameworkCompareModal.vue:65`](../apps/main-site/src/components/FrameworkCompareModal.vue)

**做法:** 给所有 `target="_blank"` 的 `<a>` 加 `rel="noopener noreferrer"`,
也可以在 ESLint 用 `vue/no-target-blank` 规则强制。

### A2. SEO / 分享卡片

[`index.html`](../apps/main-site/index.html) 目前只有 `<title>`、`<meta charset>`、`<meta viewport>`,
缺关键 meta:

- `<meta name="description" content="...">` — 搜索结果摘要
- `<meta name="keywords">` — 可选
- `<link rel="canonical" href="https://...">` — 防止重复内容
- Open Graph 全套:`og:title` / `og:description` / `og:image` / `og:url` / `og:type`
- Twitter Card:`twitter:card` / `twitter:title` / `twitter:description` / `twitter:image`
- `<meta name="theme-color" content="#020617">` — 浏览器 UI 配色

简历项目被丢进微信 / Slack / 邮件分享时,目前没有任何预览卡片。

### A3. 路由切换更新文档标题

目前各路由切换后标签页标题始终是 "Portfolio Hub - 个人技术能力展示中心",
影响 SEO 和用户记忆。做法:

```ts
// router/index.ts 的 route 上加 meta.title
{ path: '/skills', name: 'Skills', meta: { title: '技能树' }, component: ... }

// 在 router.afterEach 里
router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} · Portfolio Hub`
    : 'Portfolio Hub - 个人技术能力展示中心'
})
```

### A4. 字体 `font-display: swap`

[`index.html:8-9`](../apps/main-site/index.html) 配了 Google Fonts preconnect 但没加载策略。
首屏字体阻塞 FCP。给 Google Fonts URL 加 `&display=swap`。

### A5. 真正的 404 页面

[`src/router/index.ts`](../apps/main-site/src/router/index.ts) 兜底:

```ts
{ path: '/:pathMatch(.*)*', redirect: '/' }
```

用户敲错地址会默默跳首页,体验上感知不到 "错了"。
建议新建 `views/NotFound.vue`,提供 "回首页 / 看技能树" 的引导。

### A6. 全局错误兜底

[`src/main.ts`](../apps/main-site/src/main.ts) 缺 `app.config.errorHandler`。
生产环境运行时报错目前无任何上报通道,只能靠用户截图。

```ts
app.config.errorHandler = (err, _vm, info) => {
  // 至少 console.error,后续可接 Sentry
  console.error('[Vue Error]', err, info)
}
```

### A7. DX 杂项(各 ~1 分钟)

- `.editorconfig` — 统一缩进 / EOL / charset
- `.vscode/extensions.json` 推荐 `Vue.volar`、`dbaeumer.vscode-eslint`、`bradlc.vscode-tailwindcss`

---

## B. 中价值 + 中等成本(1-2 天)

### B1. 键盘可访问性

- **全局 `:focus-visible` 样式缺失** — 键盘 Tab 时看不到当前焦点位置
- **图标按钮缺 `aria-label`** — 关闭按钮、刷新按钮、图标 SVG only 的按钮没语义
  - 已知漏点:`SkillDrawer.vue:55` (关闭)、`ApproachDrawer.vue:11` (关闭)、
    `FrameworkCompareModal.vue:14` (关闭)、`ComparisonDetailModal.vue:14` (关闭)、
    `SkillDrawer.vue:34` (refresh)
- **Focus trap** — 模态打开时焦点未锁定在模态内、关闭后未返回原触发元素
  - 可借鉴 `focus-trap` / `vue-focus-trap` 库,或自己写 50 行实现

### B2. 移动端字号

8 处使用 `text-[10px]`(约 10px),在 1x 像素密度下移动端不可读:

- `views/Home.vue:39, 79, 102, 251`
- `views/CaseStudies.vue:158`
- `components/ApproachDrawer.vue:228`
- `components/SkillDrawer.vue:458, 462`

**做法:** 最低改成 `text-xs`(12px),或 `text-[10px] sm:text-xs` 仅桌面用小字。

### B3. 颜色对比度(WCAG AA)

深色背景 + `text-slate-500/600` 对比度不足 4.5:1,正文 / 次要文字建议升级到 `text-slate-400` 或 `text-slate-300`。
对装饰性文字(版权、page hint)可保留 `text-slate-500`。

### B4. 大数据按需加载

[ARCHITECTURE-ISSUES.md §3.1](./ARCHITECTURE-ISSUES.md) 的"数据巨石"配套优化:
`data/skills/frontend.ts`(1701 行)和 `data/caseStudies.ts`(1335 行)目前进首页 bundle。

**做法:**

```ts
// useSkillsData.ts
const data = await import('@/data/skills/frontend.ts')

// 或者整体改成 fetch 静态 JSON
const data = await fetch('/data/skills/frontend.json').then(r => r.json())
```

### B5. Vitest + 第一个测试

为后续 P1 模态 / `useScrollLock` 重构提供安全网:

1. 装 `vitest` + `@vue/test-utils` + `jsdom`
2. 给 `composables/useScrollLock.ts` 写最小单测,覆盖"多次加锁后必须同样次数解锁"
3. 在 [`lint.yml`](../.github/workflows/lint.yml) 后追加 `npm test` 步骤

---

## C. 战略 / 长线(自由选择)

| # | 方向 | 价值 | 工作量 |
|---|------|------|-------|
| C1 | **Lighthouse CI** 接入 GHA,设性能预算 | 防止后续 PR 拖垮首屏 | 0.5 天 |
| C2 | **Sentry / Glitchtip** 错误监控 | 上线后真实问题可见 | 0.5 天 |
| C3 | 隐私优先 **analytics**(Plausible / umami) | 看简历访问数据,合规 | 0.5 天 |
| C4 | **PWA**(vite-plugin-pwa) | 离线可访问、可装到桌面 | 1 天 |
| C5 | **暗 / 亮色主题** | README 已写入 Roadmap | 1-2 天 |
| C6 | **i18n** 国际化 | 投递外企 / 外包用得到 | 1-2 天 |
| C7 | **Visual regression**(Playwright screenshot 对比) | 改组件不再担心样式漏 | 1 天 |
| C8 | `CODEOWNERS` / PR / Issue 模板 | 协作正规化 | 0.5 小时 |
| C9 | 安全 headers(CSP / `X-Frame-Options` / 等) | 通过 GH Pages 不太好做,可考虑迁 Vercel/Netlify | — |

---

## 推荐顺序

1. **A 批一次性扫完** — 改动小、风险低,可见度高
2. **B2(字号)+ B1(focus)** — 实际体验提升立竿见影
3. **B5 Vitest 起步** — 给后续大重构铺路
4. **再做 C 里选定的项** — 这些是长线投入

## 不在这份清单里的

属于 [ARCHITECTURE-ISSUES.md](./ARCHITECTURE-ISSUES.md) P1 / 中长期的:
- 抽屉/模态统一 BaseDrawer 基座
- `FrameworkCompareModal.vue`(1034 行) 上帝组件拆分
- `CaseStudies.vue`(682 行) 视图拆分 + 抽 `useProjectNavigation`
- Monorepo 落地或收回 `apps/` 层
