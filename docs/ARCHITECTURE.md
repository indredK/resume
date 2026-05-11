# Portfolio Hub 架构文档

## 概述

Portfolio Hub 是一个展示个人技术能力的多技术栈项目集合。主仓库作为聚合中心，链接到各个独立技术栈的演示项目。

## 整体架构

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
              │
              │ 独立仓库
              ▼
┌──────────────────────────────────────────────────────────────┐
│              kindred-resume-hub 组织下的独立仓库               │
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
| `docs/` | 架构文档 |

### 主站点技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 5
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **样式**: TailwindCSS
- **部署**: GitHub Pages

## 各子仓库说明

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

1. **Build**: 安装依赖 → 运行构建
2. **Deploy**: 上传构建产物 → 部署到 GitHub Pages

## 技能树设计

技能树采用 VSCode 侧边栏风格，分为以下分类：

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

## 页面结构

```
/                   - 首页，展示技术栈概览
/skills             - 技能树页面
/projects           - 项目展示页面
/about              - 关于页面
```

## 扩展计划

1. 添加更多技术栈的独立演示项目
2. 实现更丰富的技能树交互
3. 添加暗色/亮色主题切换
4. 添加国际化支持

## 更新日志

### v1.0.0 (2026-05-11)
- 初始化项目结构
- 主站点基础框架搭建完成
- 技能树组件完成
- 项目导航卡片完成
- CI/CD 工作流配置完成
