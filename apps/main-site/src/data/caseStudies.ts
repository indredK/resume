import type { Company, Principle } from './types'

export const companies: Company[] = [
  {
    name: '厦门星纵物联科技有限公司',
    shortName: '星纵物联',
    period: '2023.02 - 2025.11',
    position: '前端开发工程师',
    icon: '🏢',
    color: 'emerald',
    gradient: 'from-emerald-400 to-green-300',
    summary: '负责物联网平台核心开发，主导网关系统架构升级与传感器配置移动端应用。',
    totalStats: [
      { label: '渲染性能提升', value: '30%+' },
      { label: '设备型号支撑', value: '9+' },
      { label: '新型号效率提升', value: '60%+' },
      { label: '项目数量', value: '4个' }
    ],
    projects: [
      {
        title: '星纵云物联网管理平台',
        role: '核心开发者',
        period: '2023.02 - 2024.07',
        icon: '☁️',
        description: '工业物联网设备与传感器管理平台，支撑 40+ 类工业设备与 200+ 种传感器的接入管理，覆盖设备全生命周期。',
        tags: ['Vue3', 'WebSocket', 'IoT'],
        metrics: [
          { value: '30%+', label: '仪表盘渲染性能提升', detail: '200+ 传感器高频数据刷新场景下，页面帧率从卡顿恢复到流畅' },
          { value: '8×40+', label: '规则引擎复杂度', detail: '8 种条件组合 × 40+ 种触发动作，用户零代码即可完成自动化配置' },
          { value: '40+', label: '设备类型覆盖', detail: '从传感器注册→配置→监控→升级→维护，全生命周期管理闭环' }
        ],
        approach: [
          { title: 'WebSocket + 请求合并策略', detail: '针对 200+ 传感器的高频数据推送，通过 WebSocket 长连接替代轮询，再用请求合并策略将多次渲染压缩为批量更新，大幅降低 DOM 操作频率。' },
          { title: '可视化规则引擎架构', detail: '将规则配置抽象为「条件节点 + 动作节点」的树形结构，支持拖拽组合，使非技术人员也能高效配置复杂自动化逻辑。' },
          { title: '设备全生命周期建模', detail: '抽象设备状态机（注册→配置→运行→升级→维护→退役），通过统一接口屏蔽不同设备类型差异。' },
          { title: '增量更新与虚拟滚动', detail: '对大量设备列表采用虚拟滚动渲染，对实时数据使用增量 diff 更新策略，避免全量重绘。' }
        ],
        futurePlans: [
          '引入 Web Worker 将数据解析与 UI 渲染分离，进一步提升复杂仪表盘场景的响应速度',
          '探索 WebGL/Canvas 替代 DOM 渲染方案，应对千级设备同屏展示的极端场景',
          '建立前端性能监控体系（FCP / LCP / CLS），实现持续的自动化性能回归测试'
        ]
      },
      {
        title: '特殊网关后台系统',
        role: '独立开发',
        period: '2025.02 - 2025.07',
        icon: '🌐',
        description: '从零构建定制化网关后台管理系统，替代传统 jQuery 架构，设计可复用组件库支撑 9 种网关型号扩展。',
        tags: ['Vue3', '架构迁移', '组件库'],
        metrics: [
          { value: '9+', label: '网关型号复用', detail: '统一的模块化组件体系，让新增网关型号的开发成本降低 60%+' },
          { value: '100%', label: '架构现代化', detail: '从 jQuery 全面迁移到 Vue3 Composition API，代码可维护性质的飞跃' },
          { value: '60%+', label: '新型号开发效率提升', detail: '组件化 + 配置化设计，新增型号只需编写差异化配置' }
        ],
        approach: [
          { title: '组件化抽象分层', detail: '将网关管理功能拆分为「基础层（通用 UI）+ 协议层（通信逻辑）+ 业务层（设备特性）」三级架构，最大化代码复用。' },
          { title: '配置驱动渲染', detail: '设计 JSON Schema 驱动的动态表单系统，新增网关型号只需编写配置文件，无需修改组件代码。' },
          { title: '渐进式迁移策略', detail: '在 Vue3 应用中保留 jQuery 兼容层，确保迁移期间功能不受影响，逐步替换并最终完全移除旧代码。' },
          { title: '嵌入式协议对接', detail: '与固件团队紧密协作，设计统一的前端-嵌入式接口规范，封装 API 适配层屏蔽协议差异。' }
        ],
        futurePlans: [
          '将组件库抽离为独立 npm 包，支持内部团队跨项目复用',
          '引入 Storybook 构建组件文档与可视化测试平台',
          '探索 WebAssembly 加速嵌入式数据解析，提升复杂配置页面响应速度'
        ]
      },
      {
        title: '工业路由器后台系统',
        role: '功能开发',
        period: '2023.02 - 2025.11',
        icon: '📡',
        description: '工业级路由器设备管理后台，负责常规功能迭代开发与维护，基于 jQuery 技术栈，并尝试在项目中混合 React 技术进行页面开发。',
        tags: ['jQuery', 'React', '混合开发'],
        metrics: [
          { value: '50+', label: '功能迭代数量', detail: '持续迭代开发路由器配置、监控、日志等核心功能模块' },
          { value: 'jQuery+React', label: '技术栈融合', detail: '在 jQuery 项目中通过路由机制成功集成 React 页面开发' },
          { value: '100%', label: '功能稳定性', detail: '保证生产环境功能稳定运行，及时响应客户需求' }
        ],
        approach: [
          { title: 'jQuery 常规开发', detail: '基于现有 jQuery 架构进行功能迭代，熟练使用 jQuery 进行 DOM 操作、事件处理和 AJAX 请求。' },
          { title: 'React 混合集成', detail: '通过路由机制在 jQuery 项目中嵌入 React 页面，使用 ReactDOM.render 动态挂载组件，实现新旧技术栈共存。' },
          { title: '跨框架通信', detail: '设计全局事件总线和状态管理方案，解决 jQuery 和 React 之间的数据通信问题。' },
          { title: '渐进式重构', detail: '在保证现有功能稳定的前提下，逐步将新功能使用 React 开发，为未来全面迁移做准备。' }
        ],
        futurePlans: [
          '建立完整的 jQuery 到 React 迁移方案，制定分阶段重构计划',
          '引入 TypeScript 增强代码类型安全',
          '优化构建流程，实现 jQuery 和 React 代码的按需加载'
        ]
      },
      {
        title: '工业网关后台系统',
        role: '功能开发',
        period: '2023.02 - 2025.11',
        icon: '🔌',
        description: '工业网关设备管理后台，负责常规功能迭代开发与维护，基于 jQuery 技术栈，并探索在传统项目中引入现代前端技术。',
        tags: ['jQuery', 'React', '技术探索'],
        metrics: [
          { value: '40+', label: '功能模块开发', detail: '开发网关配置、协议管理、数据采集等核心功能模块' },
          { value: '混合架构', label: '技术栈创新', detail: '在 jQuery 基础上尝试集成 React，探索混合开发模式' },
          { value: '稳定运行', label: '生产环境表现', detail: '确保系统在工业环境下稳定可靠运行' }
        ],
        approach: [
          { title: 'jQuery 迭代开发', detail: '基于 jQuery 进行日常功能开发和维护，处理设备配置、状态监控等业务逻辑。' },
          { title: '路由机制设计', detail: '设计前端路由系统，支持在 jQuery 项目中按路由加载不同技术栈的页面。' },
          { title: 'React 页面集成', detail: '通过容器组件方式将 React 页面嵌入到 jQuery 应用中，实现局部现代化改造。' },
          { title: '兼容性保障', detail: '确保新旧技术栈之间的兼容性，避免样式冲突和全局变量污染。' }
        ],
        futurePlans: [
          '总结混合开发经验，形成可复用的技术方案',
          '推动团队技术栈升级，逐步向现代前端框架迁移',
          '建立前端工程化体系，提升开发效率和代码质量'
        ]
      }
    ]
  },
  {
    name: '深圳高速工程顾问有限公司',
    shortName: '高速工程顾问',
    period: '2020.12 - 2023.01',
    position: '前端开发工程师',
    icon: '🏗️',
    color: 'blue',
    gradient: 'from-blue-400 to-cyan-300',
    summary: '主导微前端架构体系建设，构建颗粒度精确到按钮级的 RBAC 权限系统。',
    totalStats: [
      { label: 'TS 覆盖率提升', value: '5%→40%' },
      { label: '页面开发占比', value: '70%' },
      { label: '遗留缺陷修复', value: '20+' },
      { label: '公共组件封装', value: '5+' }
    ],
    projects: [
      {
        title: '微前端企业管理平台',
        role: '前端负责人',
        period: '2022.01 - 2022.07',
        icon: '🏗️',
        description: '基于 single-spa 的微前端架构企业管理平台，整合 Svelte 与 React 跨框架子应用，深度集成政务级电子签章服务。',
        tags: ['React', 'single-spa', '微前端'],
        metrics: [
          { value: '5%→40%', label: 'TypeScript 覆盖率提升', detail: '从几乎无类型的 JS 代码库，逐步迁移到 40% TS 覆盖，类型安全大幅增强' },
          { value: '70%', label: '页面开发占比', detail: '独立承担组织管理、个人中心及平台管理后台约 70% 的页面开发' },
          { value: '20+', label: '遗留缺陷修复', detail: '系统性排查并修复历史遗留 Bug，显著降低线上故障率' }
        ],
        approach: [
          { title: 'JS → TS 渐进式迁移', detail: '采用"新增代码必须 TS + 旧代码按模块迁移"的策略，在不影响正常迭代的前提下逐步提升类型覆盖率。' },
          { title: 'Class → Hooks 重构', detail: '利用 React Hooks 将冗余的 Class Component 拆解为可复用的自定义 Hook，实现业务逻辑解耦，封装 5+ 种跨项目公共组件。' },
          { title: '跨框架生命周期桥接', detail: '深入 single-spa 源码，设计 Svelte（登录）与 React（业务）之间的通信桥，解决样式隔离与全局状态污染问题。' },
          { title: '按钮级 RBAC 权限控制', detail: '构建个人/岗位/应用/用户四层权限体系，使用自定义指令 + HOC 实现精确到按钮级的权限控制。' }
        ],
        futurePlans: [
          '采用 Module Federation 替代 single-spa，实现更灵活的子应用加载与共享依赖管理',
          '引入端到端自动化测试（Playwright），对核心流程建立回归测试用例',
          '将 TypeScript 覆盖率继续推进到 80%+，并引入 strict mode 强化类型安全'
        ]
      }
    ]
  },
  {
    name: '个人开源项目',
    shortName: '个人项目',
    period: '2025.11 - 至今',
    position: '独立开发者',
    icon: '🚀',
    color: 'purple',
    gradient: 'from-purple-400 to-pink-300',
    summary: '独立完成多个全栈项目，涵盖 GIS 数据可视化、企业级管理系统、跨平台聊天应用等方向。',
    totalStats: [
      { label: '开源项目', value: '4个' },
      { label: '技术栈覆盖', value: '全栈' },
      { label: 'GitHub Stars', value: '持续增长' },
      { label: '跨平台支持', value: '5端' }
    ],
    projects: [
      {
        title: '中国历史全视界',
        role: '独立开发',
        period: '2025.11 - 至今',
        icon: '🗺️',
        description: '多维度历史信息交互可视化平台，整合时间轴、历史事件、人物与地理数据，独立完成前后端全栈开发。',
        tags: ['Vue3', 'TypeScript', 'GIS'],
        link: 'https://github.com/indredK/history',
        metrics: [
          { value: 'GIS 可视化', label: '核心技术', detail: '实现历史疆域和行政区划的时序变化展示，支持交互式地图渲染' },
          { value: '全栈开发', label: '开发模式', detail: '独立完成前后端分离架构设计与实现' },
          { value: '多维数据', label: '数据整合', detail: '整合时间轴、历史事件、人物与地理数据的关联展示' }
        ],
        approach: [
          { title: 'TypeScript 架构设计', detail: '采用 TypeScript + Vue3 实现可扩展组件架构，确保代码类型安全和可维护性。' },
          { title: 'GIS 数据建模', detail: '设计历史地理数据模型，支持疆域变迁、行政区划等时空数据的存储与查询。' },
          { title: '交互式地图渲染', detail: '实现基于时间轴的动态地图渲染，支持历史时期的切换与数据联动展示。' },
          { title: '前后端分离', detail: '独立完成 GIS 数据服务与前端可视化组件的整体设计与实现。' }
        ],
        futurePlans: [
          '增加更多历史时期的数据覆盖，完善历史事件与人物关系图谱',
          '优化地图渲染性能，支持更大规模的历史数据展示',
          '引入 3D 地图展示，提升历史场景的沉浸式体验'
        ]
      },
      {
        title: '通用资产管理平台',
        role: '独立开发',
        period: '2026.02 - 2026.03',
        icon: '📦',
        description: '基于 Vue3 + TypeScript 的企业级资产管理平台，实现 RBAC 权限体系、动态路由、国际化等企业级功能。',
        tags: ['Vue3', 'TypeScript', 'Element Plus'],
        link: 'https://github.com/indredK/vue3',
        metrics: [
          { value: 'RBAC 权限', label: '权限体系', detail: '实现完整的角色权限管理，支持动态路由和按钮级权限控制' },
          { value: '国际化', label: '多语言支持', detail: '基于 Vue I18n 实现中英文切换，支持语言包动态加载' },
          { value: '工程化', label: '开发规范', detail: '集成 ESLint、Prettier、Husky，建立完整的代码规范体系' }
        ],
        approach: [
          { title: '企业级架构设计', detail: '采用 Vite + Vue3 + TypeScript 技术栈，搭建可扩展的企业级前端架构。' },
          { title: 'RBAC 权限实现', detail: '设计角色-权限-菜单的关联模型，实现动态路由生成和细粒度权限控制。' },
          { title: 'UnoCSS 原子化', detail: '引入 UnoCSS 原子化 CSS 方案，提升样式开发效率和代码可维护性。' },
          { title: '请求拦截封装', detail: '封装统一的请求拦截器，处理 Token 鉴权、错误提示、请求重试等逻辑。' }
        ],
        futurePlans: [
          '增加数据可视化大屏模块，提供资产统计分析功能',
          '引入微前端架构，支持多业务模块的独立开发与部署',
          '完善单元测试覆盖率，建立自动化测试体系'
        ]
      },
      {
        title: 'Discord Clone',
        role: '独立开发',
        period: '2026.03 - 至今',
        icon: '💬',
        description: '模仿网页版 Discord 的全栈跨平台聊天应用，支持 Web、桌面端（Windows/macOS/Linux）、iOS 和 Android。',
        tags: ['Vue3', 'Go', 'Tauri', 'WebSocket'],
        link: 'https://github.com/kindred-react/react-discord',
        metrics: [
          { value: '5端支持', label: '跨平台', detail: 'Web + 桌面端（3个系统）+ 移动端（2个平台）全覆盖' },
          { value: 'WebSocket', label: '实时通信', detail: '基于 WebSocket 实现消息实时推送、输入状态同步等功能' },
          { value: '全栈开发', label: '技术栈', detail: '前端 Vue3 + 后端 Go + 桌面端 Tauri 2.0（Rust）' }
        ],
        approach: [
          { title: 'Tauri 跨平台适配', detail: '使用 Tauri 2.0 实现 Web/Desktop/Mobile 跨平台适配，设计平台检测工具实现差异化渲染。' },
          { title: 'WebSocket 实时通信', detail: '基于 Gorilla WebSocket 实现消息实时推送、输入状态同步、语音频道在线状态等实时通信机制。' },
          { title: 'Go 后端架构', detail: '采用 Go + Gin + PostgreSQL 构建高性能后端服务，实现用户认证、消息存储、文件上传等功能。' },
          { title: '性能优化', detail: '使用 TanStack Virtual 优化长消息列表渲染性能，采用 Pinia 进行全局状态管理。' }
        ],
        futurePlans: [
          '增加语音/视频通话功能，基于 WebRTC 实现实时音视频通信',
          '优化移动端体验，完善触摸手势和原生功能集成',
          '引入端到端加密，提升消息安全性'
        ]
      },
      {
        title: 'SimpleApp - 工业自动控制系统',
        role: '独立开发',
        period: '2024 - 至今',
        icon: '🏭',
        description: '基于 Avalonia UI 和 .NET 10 的工业自动化监控应用程序，支持 Modbus TCP/RTU 通信，实现设备管理、实时监控、趋势分析和报警管理。',
        tags: ['Avalonia UI', '.NET 10', 'MVVM', 'Modbus'],
        link: 'https://github.com/indredK/C-app',
        metrics: [
          { value: '跨平台', label: '桌面应用', detail: '基于 Avalonia UI 实现 Windows/macOS/Linux 跨平台支持' },
          { value: 'Modbus', label: '工业通信', detail: '支持 Modbus TCP/RTU 协议，实现工业设备数据采集' },
          { value: 'MVVM', label: '架构模式', detail: '采用 MVVM 架构，使用 CommunityToolkit.Mvvm 实现数据绑定' }
        ],
        approach: [
          { title: 'Avalonia UI 跨平台', detail: '使用 Avalonia UI 12.0.2 框架构建现代化桌面应用，实现 Windows、macOS、Linux 全平台支持。' },
          { title: 'MVVM 架构设计', detail: '采用 MVVM 设计模式，使用 CommunityToolkit.Mvvm 8.4.0 实现视图与业务逻辑分离，提升代码可维护性。' },
          { title: 'Modbus 通信实现', detail: '实现 Modbus TCP/RTU 协议通信，支持工业设备数据采集与控制，提供 Mock 数据模拟功能。' },
          { title: '实时监控与报警', detail: '实现设备状态实时监控、趋势数据分析、报警管理与确认处理，使用 Serilog 记录系统日志。' }
        ],
        futurePlans: [
          '增加更多工业协议支持（OPC UA、Profinet 等）',
          '实现数据持久化存储，支持历史数据查询与导出',
          '优化 UI 交互体验，增加数据可视化图表组件'
        ]
      }
    ]
  }
]

export const principles: Principle[] = [
  { icon: '📊', title: '量化先行', desc: '用具体数据衡量问题严重程度，而不是靠"感觉慢"来做判断。' },
  { icon: '🔬', title: '根因分析', desc: '追溯性能瓶颈的根本原因，避免"头痛医头"的临时方案。' },
  { icon: '🧪', title: '方案验证', desc: '每个优化方案上线前，必须有对比实验和数据支撑。' },
  { icon: '🔄', title: '持续迭代', desc: '性能优化没有终点，建立监控体系实现持续改进。' }
]
