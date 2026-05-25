# Portfolio Hub 架构文档

> ⚠️ **状态说明**:本文档将"已实现"和"Roadmap"明确分开。
> 当前 MVP 仅含 `apps/main-site/` 一个 Vue 3 应用,其它子仓库尚未创建。
> 架构问题与改进计划请参见 [ARCHITECTURE-ISSUES.md](./ARCHITECTURE-ISSUES.md)。

## 概述

Portfolio Hub 计划成为一个展示个人技术能力的多技术栈项目集合,以主仓库作为
聚合中心、链接到各个独立技术栈的演示项目。目前处于 MVP 阶段。

## 当前架构(已实现)

```
┌─────────────────────────────────────────────────────────────┐
│                     Portfolio Hub                            │
│                  github.com/kindred-resume-hub/portfolio    │
│                                                                │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│   │  技术栈切换器  │  │   技能树展示   │  │    项目导航卡片   │  │
│   │  (跳转外站)   │  │ (VSCode风格)  │  │   (跳转到各仓库)  │  │
│   └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Roadmap 架构(规划中)

```
┌──────────────────────────────────────────────────────────────┐
│           kindred-resume-hub 组织下的独立仓库(规划)            │
│                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌───────────────┐ │
│  │  vue-portfolio  │  │ react-portfolio │  │qiankun-main   │ │
│  │  Vue3 完整演示   │  │ React18 完整演示 │  │  微前端主应用   │ │
│  └─────────────────┘  └─────────────────┘  └───────────────┘ │
│                                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌───────────────┐ │
│  │  electron-demo  │  │    node-api     │  │  python-api   │ │
│  │  Electron桌面端  │  │   Node.js API    │  │ FastAPI 后端  │ │
│  └─────────────────┘  └─────────────────┘  └───────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

## 仓库结构

### 主仓库 (portfolio)

| 目录/文件 | 说明 |
|-----------|------|
| `apps/main-site/` | 主聚合站点 (Vue3 + Vite + TailwindCSS) |
| `.github/workflows/` | CI/CD 配置文件 |
| `docs/ARCHITECTURE.md` | 架构文档(本文件) |
| `docs/ARCHITECTURE-ISSUES.md` | 架构问题分析与改进路线 |

> 注:目前根目录无 `package.json` / workspace 配置,`apps/` 仅是为未来
> monorepo 预留的目录结构,并未生效。

### 主站点技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 5
- **路由**: Vue Router 4
- **样式**: TailwindCSS
- **类型**: TypeScript(渐进式 strict)
- **Lint**: ESLint + vue-eslint-parser + @typescript-eslint
- **部署**: GitHub Pages

> 历史版本曾使用 Pinia 做状态管理,目前主站点未引入任何 store,Pinia 依赖已移除。

## Roadmap 子仓库说明(尚未实现)

下列仓库目前**均不存在**,为未来计划:

| 仓库名 | 技术栈 | 用途 |
|--------|--------|------|
| `vue-portfolio` | Vue 3 + 全家桶 | Vue 技术展示 |
| `react-portfolio` | React 18 + Next.js | React 技术展示 |
| `qiankun-main` | Qiankun | 微前端主应用 |
| `qiankun-vue` | Vue 3 | 微前端 Vue 子应用 |
| `qiankun-react` | React 18 | 微前端 React 子应用 |
| `electron-demo` | Electron | 桌面端应用演示 |
| `wails-demo` | Wails (Go) | Go 桌面端演示 |
| `node-api` | Node.js + Express | 后端 API 演示 |
| `python-api` | Python + FastAPI | Python 后端演示 |
| `docker-demo` | Docker | DevOps 演示 |

## CI/CD 流程

### 主站点部署

```
Push → GitHub Actions → Build → Deploy to GitHub Pages
```

### 触发条件

- 推送 `main` 分支且 `apps/main-site/` 下有文件变化
- 提交 PR 到 `main` 分支

### 工作流

1. **Lint & Type Check**: `npm run lint` + `npm run type-check`(PR 必须通过)
2. **Build**: 安装依赖 → `vue-tsc --noEmit` → `vite build`
3. **Deploy**: 上传构建产物 → 部署到 GitHub Pages

## 技能树设计

技能树采用 VSCode 侧边栏风格,**当前为静态展示**(无跳转到外部演示项目),
未来子仓库就绪后再启用跳转。

### 前端技术
- Vue 3 / React 18
- TypeScript
- Qiankun 微前端
- TailwindCSS
- Vite / Webpack

### 后端技术
- Node.js (Express / Fastify)
- Python (FastAPI / Django)
- Go (Gin / Echo)
- PostgreSQL / MongoDB / Redis

### 桌面端技术
- Electron
- Wails (Go)
- Tauri (Rust)

### DevOps
- Docker / Kubernetes
- GitHub Actions
- AWS / GCP

## 页面结构(已实现)

```
/                   - 首页,展示技术栈概览
/skills             - 技能树页面
/projects           - 项目展示页面
/case-studies       - 工作成果案例
/about              - 关于页面
```

## Roadmap

| 项目 | 状态 |
|------|------|
| 添加更多技术栈的独立演示项目 | 📋 计划中 |
| 实现更丰富的技能树交互(跳转演示) | 📋 计划中 |
| 暗色/亮色主题切换 | 📋 计划中 |
| 国际化支持 | 📋 计划中 |
| 数据层去硬编码(JSON / Markdown) | 📋 [详见 ISSUES](./ARCHITECTURE-ISSUES.md) |
| 抽屉 / 模态组件统一基座 | 📋 [详见 ISSUES](./ARCHITECTURE-ISSUES.md) |

## 更新日志

### v1.1.0 (2026-05-25)
- 接入 ESLint + 真正的 type-check CI 门禁
- 启用 TypeScript 渐进式 strict
- 入口 `main.js` → `main.ts`, `router/index.js` → `router/index.ts`
- 移除未使用依赖 `@vue-flow/*` 与 `pinia`
- vite 配置收紧 `chunkSizeWarningLimit`
- 新增 `ARCHITECTURE-ISSUES.md` 与文档"已实现 vs Roadmap"区分

### v1.0.0 (2026-05-11)
- 初始化项目结构
- 主站点基础框架搭建完成
- 技能树组件完成
- 项目导航卡片完成
- CI/CD 工作流配置完成
