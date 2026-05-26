# Portfolio Hub

个人技术能力展示中心 - 当前版本为单站点 Vue 3 应用,Roadmap 中将扩展为多技术栈聚合。

> ⚠️ **当前状态(MVP)**:仓库内仅有 `apps/main-site/` 一个 Vue 3 应用。
> README 末尾 "独立演示项目" 列表中的子仓库均为 **Roadmap 计划**,目前尚未创建。

## 🎯 项目目标

展示全栈技术能力,证明快速学习、接纳新技术和解决问题的能力。

## 🏗️ 当前架构(已实现)

```
┌─────────────────────────────────────────────────────────────┐
│                     Portfolio Hub                            │
│       Vue 3 + Vite 7 + TailwindCSS 4 + 4 主题设计系统          │
│                                                               │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│   │   主题切换器   │  │   技能矩阵    │  │  案例项目深度展示  │  │
│   │ (swiss/brutal│  │ (14 类 / 198 │  │ (公司 → 项目 →    │  │
│   │  /mag/indust)│  │   技能行)    │  │  模块 → 实现思路) │  │
│   └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## 📁 项目结构

```
portfolio/
├── apps/
│   └── main-site/           # 主聚合站点 (Vue3)
├── .github/
│   └── workflows/           # CI/CD 配置
│       ├── deploy-main.yml   # 主站点部署
│       └── lint.yml          # 代码检查
├── docs/
│   ├── ARCHITECTURE.md         # 架构文档
│   └── ARCHITECTURE-ISSUES.md  # 架构问题分析与改进路线
└── README.md
```

> 注:`apps/` 目录目前只有 `main-site/` 一个子项目,根目录尚未配置 npm/pnpm
> workspace。属于"为未来 monorepo 预留的目录结构",不是真正生效的 monorepo。

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/kindred-resume-hub/portfolio.git
cd portfolio

# 进入主站点目录
cd apps/main-site

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查 + 构建
npm run build

# Lint
npm run lint
```

## 📦 技术栈

### 主站点(已实现)
- Vue 3 + Composition API
- Vite 7
- Vue Router 4
- TailwindCSS 4(CSS-first 配置,无 `tailwind.config.js`)
- TypeScript(渐进式启用 strict)
- @fontsource(自托管所有主题字体,无 CDN 依赖)
- ESLint(vue3-recommended + ts-eslint)
- GitHub Pages 部署

### 🎨 设计系统(2026-05 全站翻新)

四套可切换主题,通过 `<html data-theme>` 切换,所有组件基于 semantic
tokens (`--bg`/`--ink`/`--surface`/`--accent`/`--success`/`--danger`…)
和 `color-mix` 派生色书写,主题切换零闪烁。

| 主题 | 风格 | 字体方向 |
|------|------|---------|
| `swiss` (default) | Editorial Swiss — 暖米底 / 锈红 accent / 0 圆角 | Newsreader + IBM Plex |
| `brutal` | Terminal Brutalism — 纯黑底 / 单色 / 方块滚动条 | ui-monospace 全栈 |
| `mag` | Editorial Magazine — 暖奶油底 / 酒红宝石 / 斜体显示 | Fraunces + IBM Plex |
| `indust` | Neo-Industrial — 深灰底 / 霓虹橙 / 大写排版 / 发光 | Space Grotesk + Archivo Narrow + JetBrains Mono |

每个实体(公司、技能、卡片、工具)走 `--co-color`/`--card-color`/
`--tool-color` 这类 entity-scoped CSS 变量:Swiss + Brutal 强制收回到
ink/accent 保持克制,Mag + Indust 通过专属 override opt-in 表达品牌色。

## 🗺️ Roadmap(尚未实现)

以下子仓库 / 功能均为规划阶段,**仓库目前不存在**:

| 项目 | 技术栈 | 状态 |
|------|--------|------|
| Vue Portfolio | Vue 3 + 全家桶 | 📋 计划中 |
| React Portfolio | React 18 + Next.js | 📋 计划中 |
| Qiankun 微前端 | Qiankun | 📋 计划中 |
| Electron 桌面端 | Electron | 📋 计划中 |
| Node.js API | Node.js + Express | 📋 计划中 |
| Python API | Python + FastAPI | 📋 计划中 |
| Docker DevOps | Docker | 📋 计划中 |

其它 Roadmap 项:国际化、技能树跳转至演示项目。

## 📊 技能矩阵(已实现)

`/skills` 路由展示 14 类共 198 个技能行,点击可弹出详情/对比 modal:

- ⚡ 前端 / Vue 生态 / React 生态
- 🔧 后端(Node / Python / Java / Go / Rust / C#)
- 🗄️ 数据库(关系型 / NoSQL / 向量)
- 🖥️ 桌面端(Web 桌面端 / .NET 生态 / C++ / 跨平台)
- 🚀 DevOps + 容器 + IaC + 云服务
- 🤖 新兴技术(AI/ML / 区块链 / 量子计算)
- 🏭 工业控制 / 嵌入式 / 行业方案
- 🛠️ 工具链 / 解决方案

`/case-studies` 路由提供项目深度展示:**公司 → 项目分类 → 项目 → 模块 → 实现思路**
四层下钻,所有路径走 sticky aside + 抽屉式实现细节展示。

## 🔄 CI/CD

- **构建工具**: GitHub Actions
- **部署平台**: GitHub Pages
- **触发条件**: 推送到 main 分支自动部署
- **质量门禁**: ESLint + vue-tsc 类型检查(PR 必须通过)

## 📄 License

MIT
