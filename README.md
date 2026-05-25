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
│              主聚合站点 (Vue3 + Vite + TailwindCSS)           │
│                                                               │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│   │  技术栈切换器  │  │   技能树展示   │  │    项目导航卡片   │  │
│   │  (跳转外站)   │  │ (VSCode风格)  │  │   (跳转到各仓库)  │  │
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
- Vite 5
- Vue Router 4
- TailwindCSS
- TypeScript(渐进式启用 strict)
- ESLint(vue3-recommended + ts-eslint)
- GitHub Pages 部署

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

其它 Roadmap 项:暗色/亮色主题切换、国际化、技能树跳转至演示项目。

## 📊 技能树(展示)

技能树采用 VSCode 侧边栏风格,目前仅作为**静态展示**:

- ⚡ **前端技术**: Vue 3, React 18, Qiankun, TypeScript, TailwindCSS
- 🔧 **后端技术**: Node.js, Python FastAPI, Go, PostgreSQL, MongoDB
- 🖥️ **桌面端**: Electron, Wails (Go), Tauri
- 🚀 **DevOps**: Docker, Kubernetes, GitHub Actions, AWS

## 🔄 CI/CD

- **构建工具**: GitHub Actions
- **部署平台**: GitHub Pages
- **触发条件**: 推送到 main 分支自动部署
- **质量门禁**: ESLint + vue-tsc 类型检查(PR 必须通过)

## 📄 License

MIT
