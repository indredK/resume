# Portfolio Hub

个人技术能力展示中心 - 聚合多种技术栈的演示项目

## 🎯 项目目标

展示全栈技术能力，证明快速学习、接纳新技术和解决问题的能力。

## 🏗️ 架构概览

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
│   └── ARCHITECTURE.md      # 架构文档
└── README.md
```

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
```

## 📦 技术栈

### 主站点
- Vue 3 + Composition API
- Vite 5
- Vue Router 4
- Pinia
- TailwindCSS
- GitHub Pages

### 独立演示项目 (位于 kindred-resume-hub 组织下)

| 项目 | 技术栈 | 仓库 |
|------|--------|------|
| Vue Portfolio | Vue 3 + 全家桶 | [vue-portfolio](https://github.com/kindred-resume-hub/vue-portfolio) |
| React Portfolio | React 18 + Next.js | [react-portfolio](https://github.com/kindred-resume-hub/react-portfolio) |
| Qiankun 微前端 | Qiankun | [qiankun-main](https://github.com/kindred-resume-hub/qiankun-main) |
| Electron 桌面端 | Electron | [electron-demo](https://github.com/kindred-resume-hub/electron-demo) |
| Node.js API | Node.js + Express | [node-api](https://github.com/kindred-resume-hub/node-api) |
| Python API | Python + FastAPI | [python-api](https://github.com/kindred-resume-hub/python-api) |
| Docker DevOps | Docker | [docker-demo](https://github.com/kindred-resume-hub/docker-demo) |

## 📊 技能树

技能树采用 VSCode 侧边栏风格，支持点击跳转至对应技术栈的演示项目：

- ⚡ **前端技术**: Vue 3, React 18, Qiankun, TypeScript, TailwindCSS
- 🔧 **后端技术**: Node.js, Python FastAPI, Go, PostgreSQL, MongoDB
- 🖥️ **桌面端**: Electron, Wails (Go), Tauri
- 🚀 **DevOps**: Docker, Kubernetes, GitHub Actions, AWS

## 🔄 CI/CD

- **构建工具**: GitHub Actions
- **部署平台**: GitHub Pages
- **触发条件**: 推送到 main 分支自动部署

## 📄 License

MIT
