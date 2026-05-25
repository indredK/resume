# Portfolio Hub 架构问题分析

> 分析日期: 2026-05-25
> 范围: 仓库整体结构 + `apps/main-site/`(Vue 3 + Vite + TypeScript)
> 代码体量: 12,428 行(src 目录),17 个 `.vue` + 多个 `.ts` 数据/组合式文件

---

## 一、总体结论

项目处于 **"快速原型已经能跑、但工程化几乎为零"** 的状态。

- 表层架构(目录、路由、CI)看起来合理;
- 内层却充斥着**数据/UI 混杂的超大文件、可复用层缺失、工具链形同虚设、TypeScript 名存实亡**;
- 文档与现实严重脱节,`apps/` monorepo 是空壳。

按风险/收益排序的整改优先级:

1. P0 - 让 TypeScript 和 ESLint 真正生效(目前是装饰品)
2. P1 - 拆分超大数据文件 + 抽屉/模态组件统一基座
3. P2 - 清理未使用依赖、修正与文档不符的"伪 monorepo"
4. P3 - 视图层组件拆分 + 状态管理重构

---

## 二、工程化基础问题(P0)

### 2.1 Lint 完全没生效 — 双重失效

[`.github/workflows/lint.yml:34-35`](.github/workflows/lint.yml) 配置:

```yaml
- name: Run ESLint
  run: npm run lint
  continue-on-error: true
```

但 [`apps/main-site/package.json`](apps/main-site/package.json) 里:

- 没有 `lint` 脚本 → `npm run lint` 直接报错
- 没有 ESLint / Prettier 配置文件(`.eslintrc.*`, `eslint.config.*`)
- 即便报错,`continue-on-error: true` 也会让 CI 通过

**等价于完全没有代码风格检查**。这导致后面所有的"超大文件、未使用变量、any 泛滥"都没有警报。

### 2.2 TypeScript 严格模式关闭

[`apps/main-site/tsconfig.json`](apps/main-site/tsconfig.json):

```json
"strict": false
```

- `any` 隐式通过、空值不检查、未使用变量不报警
- `vue-tsc` 装了却没在 `build` 脚本里调用 — 构建时不做类型检查
- 入口 [`src/main.js`](apps/main-site/src/main.js) 仍是 `.js` 而非 `.ts`,与全部 `.vue` 文件的 `lang="ts"` 不一致

### 2.3 测试 / Git Hook 全部缺位

- 无单元测试(Vitest)、E2E(Playwright/Cypress)
- 无 husky / lint-staged → 提交时没有任何卡控
- `package.json scripts` 只有 `dev / build / preview` 三个

---

## 三、数据层架构问题(P1)

### 3.1 单文件数据爆炸

| 文件 | 行数 | 问题 |
|------|------|------|
| [`src/data/skills/frontend.ts`](apps/main-site/src/data/skills/frontend.ts) | **1701** | 单个前端技能树全在一个 `.ts` 字面量里 |
| [`src/data/caseStudies.ts`](apps/main-site/src/data/caseStudies.ts) | **1335** | 所有项目案例的长文本描述硬编码于此 |
| `data/skills/solutions.ts` | 558 | 同上 |
| `data/skills/backend.ts` | 524 | 同上 |

这些文件本质上是 **配置/内容**,却以 TS 字面量的形式塞进源码,带来:

- 每次改一段描述都要走构建流程,无热更新
- 长字符串中混了 HTML/Markdown,IDE 无法语法高亮
- 翻译、版本化、协作编辑全部不可能

**建议:** 拆分为 JSON / Markdown 文件,通过 `import.meta.glob` 或 fetch 动态加载;Type 留在 `types.ts`,内容与代码分离。

### 3.2 类型设计模糊

[`src/data/types.ts`](apps/main-site/src/data/types.ts) 中的 `SkillNode` **同时支持** `items` 和 `children`,消费方需要多重判断。例如 [`FrameworkCompareModal.vue:293-306`](apps/main-site/src/components/FrameworkCompareModal.vue) 出现了 3 层嵌套 `if` 才能确定渲染分支。

**建议:** 用判别联合(discriminated union)按 `kind` 分类,比如 `{ kind: 'leaf' } | { kind: 'group', children: ... } | { kind: 'comparison', items: ... }`。

### 3.3 自动聚合无校验

[`src/data/index.ts`](apps/main-site/src/data/index.ts) 用 `import.meta.glob` 聚合所有 `skills/*.ts`,**没有运行时校验**,任一文件里写错字段不会有任何提示(因为 strict: false)。

---

## 四、组件层架构问题(P1)

### 4.1 抽屉/模态组件四份重复实现

| 组件 | 行数 | 是否基于 `BaseDrawer` | 自带 Escape/锁滚 |
|------|------|----------------------|------------------|
| [`BaseDrawer.vue`](apps/main-site/src/components/BaseDrawer.vue) | 77 | — | ✅ |
| [`SkillDrawer.vue`](apps/main-site/src/components/SkillDrawer.vue) | 500 | ✅ | 部分 |
| [`ApproachDrawer.vue`](apps/main-site/src/components/ApproachDrawer.vue) | 257 | ✅ | 部分 |
| [`FrameworkCompareModal.vue`](apps/main-site/src/components/FrameworkCompareModal.vue) | **1034** | ❌ 自己再写一遍 Teleport | ❌ 自己调 `useScrollLock` |
| [`ComparisonDetailModal.vue`](apps/main-site/src/components/ComparisonDetailModal.vue) | 342 | ❌ | ❌ 自己调 `useScrollLock` |

[`FrameworkCompareModal.vue:250`](apps/main-site/src/components/FrameworkCompareModal.vue) 和 [`ComparisonDetailModal.vue:118`](apps/main-site/src/components/ComparisonDetailModal.vue) 都绕过了 `useDrawer` 直接 `import { lockBodyScroll, unlockBodyScroll } from '@/composables/useScrollLock'` — 计数锁存在**竞态条件**风险(多个模态同时开关时计数错乱)。

**建议:** `BaseDrawer` 提升为唯一入口,负责 Teleport、Escape、滚动锁、动画;业务模态只传 slot 内容。

### 4.2 `FrameworkCompareModal.vue` 是典型上帝组件(1034 行)

混合了:

- 模板渲染(~200 行)
- 滚动监听 `setupScrollSpy / cleanupScrollSpy / handleWheel`([:411-465](apps/main-site/src/components/FrameworkCompareModal.vue:411))
- 多种对比类型分支判断 `isBuildToolCard / isSkillDetailCard`([:390-396](apps/main-site/src/components/FrameworkCompareModal.vue:390))
- TOC 生成 `collectLeaves / tocItems`([:275-388](apps/main-site/src/components/FrameworkCompareModal.vue:275))
- 530 行硬编码颜色/断点样式([:504-1035](apps/main-site/src/components/FrameworkCompareModal.vue:504))

**建议拆分:** `ComparisonModal`(壳) + `useTocScroll`(滚动) + `formatComparison`(数据处理) + 样式抽 utility class。

### 4.3 视图层堆叠

[`views/CaseStudies.vue`](apps/main-site/src/views/CaseStudies.vue) 682 行,把公司概览、左侧导航、Tabs、指标、模块列表全塞在一起,本地状态(`activeCategory / activeProject / activeTab`)与路由状态混用,没有专门的 composable。

**建议拆为:** `CompanyOverview` / `ProjectNav` / `ProjectDetail` + `useProjectNavigation`。

---

## 五、组合式函数(composables)问题(P2)

### 5.1 `useScrollLock` 被多入口调用

- [`useDrawer.ts:2`](apps/main-site/src/composables/useDrawer.ts) 内部调用
- [`FrameworkCompareModal.vue:250`](apps/main-site/src/components/FrameworkCompareModal.vue) 绕过 `useDrawer` 直接调
- [`ComparisonDetailModal.vue:118`](apps/main-site/src/components/ComparisonDetailModal.vue) 同上

→ 同一锁逻辑三处入口,加锁/解锁不平衡会导致 body 永久禁止滚动。

### 5.2 `useEscClose` 用全局 `handlerStack`

[`useEscClose.ts`](apps/main-site/src/composables/useEscClose.ts) 维护一个模块级数组,没有优先级 / scope,多个模态嵌套时关闭顺序依赖注册顺序,不直观。

### 5.3 没有状态管理但安装了 Pinia

`main.js` 里 `app.use(createPinia())`,但全项目 `grep defineStore` **零结果**,`src/stores/` 目录不存在。要么使用 Pinia,要么从依赖里删掉。

---

## 六、仓库 / Monorepo 结构问题(P2)

### 6.1 伪 monorepo

```
resume/
├── apps/
│   └── main-site/      ← 唯一一个 app
├── docs/
└── README.md
```

- 根目录**没有** `package.json` / `pnpm-workspace.yaml` / `turbo.json`
- `apps/` 层只有一个子目录,完全没起到 workspace 作用
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 描述的 9 个子仓库(`vue-portfolio` / `react-portfolio` / `qiankun-*` / `electron-demo` 等)**目前都不存在**

**两种修法,二选一:**

- (A) 接受现状:删掉 `apps/` 层,把代码上提到根目录,文档同步收敛到 MVP 描述;
- (B) 落实 monorepo:加根 `package.json` + workspaces 配置,补 `packages/ui` 等共享层,逐步把子站点搬进来。

### 6.2 未使用依赖

[`apps/main-site/package.json`](apps/main-site/package.json) 安装了:

```json
"@vue-flow/background": "^1.3.2",
"@vue-flow/controls": "^1.1.3",
"@vue-flow/core": "^1.48.2",
```

但 `grep '@vue-flow' src/` **零结果**,直接拖累打包体积(三个包合计 ~80KB 压缩前)。`pinia` 同样未实际使用(见 5.3)。

### 6.3 Vite 配置潜在隐患

[`apps/main-site/vite.config.js`](apps/main-site/vite.config.js) 把 `chunkSizeWarningLimit` 提到 500KB —— 在没有压缩配置的情况下,等于**主动关闭了体积告警**,掩盖了打包问题。

---

## 七、文档与现实脱节(P3)

| 文档声称 | 实际 |
|----------|------|
| Monorepo 聚合多个 app | 只有 1 个 app,无 workspace |
| 9 个独立仓库 (`react-portfolio` 等) | 全部不存在 |
| "技能树支持点击跳转至演示项目" | 跳转目标仓库尚未创建 |
| "暗色/亮色主题切换" | 未实现 |
| "国际化支持" | 未实现 |

[`README.md`](README.md) 和 [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) 都用**陈述句**而非**计划句**描述未来功能,易让协作者或招聘方误判项目状态。

**建议:** 在文档中加入"Roadmap / MVP 状态"区分。

---

## 八、改进路线图建议

### 立刻能做的小步快跑(1 天内)

1. 删除 `@vue-flow/*` 三个未用依赖 + `pinia`(除非补上 store)
2. 在 [`apps/main-site/package.json`](apps/main-site/package.json) 加 `"lint": "eslint . --ext .vue,.ts,.js"` 并补 `eslint.config.js`,去掉 `lint.yml` 里的 `continue-on-error`
3. 把 `tsconfig.json` 的 `strict` 打开,先解决报错最少的那一批
4. 把 `main.js` 改名 `main.ts`
5. 修文档,标明已实现 vs Roadmap

### 一周内的中等改造

6. 数据层拆分:`data/caseStudies.ts` 和 `data/skills/frontend.ts` 改为多个 JSON/Markdown
7. 抽屉/模态统一基座:`FrameworkCompareModal` 和 `ComparisonDetailModal` 收口到 `BaseDrawer`
8. `useScrollLock` 改为单入口,模态组件统一通过 `useDrawer`

### 中长期(2-4 周)

9. 拆分 `CaseStudies.vue` 视图 + 抽 `useProjectNavigation`
10. 拆分 `FrameworkCompareModal` 成 4 个小组件 + 单独的 composable
11. 引入 Vitest 给 composables 写最小单测(尤其是 `useScrollLock` 的锁计数)
12. 决定 monorepo 落地还是收回 `apps/` 层

---

## 九、本批次提交进度(2026-05-25)

### ✅ 已落地

| 优先级 | 改动 | 提交 |
|--------|------|------|
| P0 | ESLint 配置 + lint.yml 去掉 `continue-on-error` + build 加入 vue-tsc | `chore(P0): wire up real lint + type-check pipeline` |
| P0 | TypeScript 渐进式 strict + `main.ts` + `router/index.ts` + `shims-vue.d.ts` | `chore(P0): enable progressive TypeScript strict mode` |
| P2 | 移除 `@vue-flow/*` 与 `pinia` 未用依赖 | `chore(P2): remove unused dependencies` |
| P2 | `vite.config.js` 收紧 chunk 告警阈值 | `chore(P2): tighten vite build config` |
| P3 | README / ARCHITECTURE 区分已实现 vs Roadmap | `docs(P3): split implemented vs roadmap` |

### ⏸️ P1 待单独立项

P1 抽屉/模态统一基座 **未在本批次动代码**,原因:

- 触面广:横跨 [`BaseDrawer.vue`](apps/main-site/src/components/BaseDrawer.vue)、
  [`SkillDrawer.vue`](apps/main-site/src/components/SkillDrawer.vue)、
  [`ApproachDrawer.vue`](apps/main-site/src/components/ApproachDrawer.vue)、
  [`FrameworkCompareModal.vue`](apps/main-site/src/components/FrameworkCompareModal.vue)、
  [`ComparisonDetailModal.vue`](apps/main-site/src/components/ComparisonDetailModal.vue)
- 无任何单测/E2E 兜底,改完只能靠人工回归
- 涉及 `useScrollLock` 三个调用点的重排,改错会让 body 永久禁滚

**建议拆解后逐项做(每项一个 PR):**

1. 给 `BaseDrawer` 补默认 slot + 透传 props,先确保它能承接现有两个使用方的能力差
2. `FrameworkCompareModal` 模板部分迁到 `BaseDrawer`,Teleport / Escape / 滚动锁全部由 BaseDrawer 接管
3. `ComparisonDetailModal` 同 (2)
4. `useScrollLock` 的两个直调点删掉,统一通过 `useDrawer` 进入
5. 引入 Vitest,先对 `useScrollLock` 写计数单测,作为后续重构的安全网

完成 (1) - (5) 后,P1 的"上帝组件 + 多份基座"问题就基本收敛。
