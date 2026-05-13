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
    summary: '星纵物联（Milesight）是专业的数字感知产品提供商，专注智能物联网设备研发生产与销售，产品涵盖 LoRaWAN 网关、传感器、4G/5G 数据采集终端、AI 视觉感知等，应用于智慧园区、智慧楼宇、智慧农业等领域，业务遍及 120+ 国家和地区。负责物联网平台核心开发，主导星纵云物联网管理平台核心功能开发（支撑 40+ 类工业设备与 200+ 种传感器接入），主导网关系统架构从 jQuery 向 React 迁移升级，独立完成特殊网关后台系统从零构建（可复用组件库支撑 9 种网关型号扩展）。',
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
        description: '工业物联网设备与传感器管理平台，支撑 40+ 类工业设备与 200+ 种传感器的接入管理，覆盖设备全生命周期。核心功能包括仪表盘、地图、规则引擎三大模块，支持页面 Tab 切换展示各模块详情。',
        tags: ['React', 'WebSocket', 'ECharts', 'Google Maps', 'IoT'],
        metrics: [
          { value: '30%+', label: '仪表盘渲染性能提升', detail: '200+ 传感器高频数据刷新场景下，页面帧率从卡顿恢复到流畅' },
          { value: '8×40+', label: '规则引擎复杂度', detail: '8 种条件组合 × 40+ 种触发动作，用户零代码即可完成自动化配置' },
          { value: '40+', label: '设备类型覆盖', detail: '从传感器注册→配置→监控→升级→维护，全生命周期管理闭环' }
        ],
        approach: [
          { title: '设备全生命周期建模', detail: '抽象设备状态机（注册→配置→运行→升级→维护→退役），通过统一接口屏蔽不同设备类型差异。' },
          { title: '增量更新与虚拟滚动', detail: '对大量设备列表采用虚拟滚动渲染，对实时数据使用增量 diff 更新策略，避免全量重绘。' }
        ],
        futurePlans: [
          '建立前端性能监控体系（FCP / LCP / CLS），实现持续的自动化性能回归测试',
          '探索 WebGL/Canvas 替代 DOM 渲染方案，应对千级设备同屏展示的极端场景'
        ],
        modules: [
          {
            title: '仪表盘',
            icon: '📊',
            business: '实时监控 200+ 传感器的数据状态，展示设备运行指标；绘制历史数据趋势图，支持温度、湿度、CO2、用电量等多类型传感器的数据可视化；设置告警阈值，异常数据实时高亮提醒。',
            tech: ['React', 'WebSocket', 'ECharts', 'Immer', '请求合并策略'],
            approach: [
              { 
                title: 'WebSocket 长连接 + 请求合并', 
                detail: '通过 WebSocket 接收 200+ 传感器高频推送数据，采用请求合并策略将多次数据更新合并为批量渲染，大幅降低 DOM 操作频率。',
                requirement: '物联网场景下，200+ 传感器每秒产生大量数据，传统轮询方式无法满足实时性要求，且频繁的 HTTP 请求会造成服务器压力和网络开销。',
                implementation: '1. 使用 WebSocket 建立长连接，服务端主动推送数据变更；2. 实现请求合并队列，将 500ms 内的多次数据更新合并为一次批量渲染；3. 使用 requestAnimationFrame 确保渲染时机与浏览器刷新同步；4. 实现心跳检测和断线重连机制，保证连接稳定性。',
                tech: ['WebSocket', 'requestAnimationFrame', 'RxJS'],
                selectionReason: 'WebSocket 相比轮询能减少 90% 以上的请求次数，请求合并策略进一步降低 DOM 操作频率，避免浏览器主线程阻塞。',
                alternatives: [
                  { name: 'HTTP 短轮询', pros: '实现简单，兼容性好', cons: '实时性差，服务器压力大', selected: false },
                  { name: 'Server-Sent Events', pros: '单向数据流，实现简单', cons: '不支持双向通信，部分浏览器支持不佳', selected: false },
                  { name: 'WebSocket + 请求合并', pros: '实时性强，性能优异', cons: '实现稍复杂，需要处理断线重连', selected: true }
                ],
                challenges: [
                  { problem: 'WebSocket 连接在弱网环境下容易断开', solution: '实现指数退避重连策略，配合心跳检测及时发现连接状态' },
                  { problem: '高频数据更新导致 UI 卡顿', solution: '使用请求合并和 requestAnimationFrame 控制渲染频率' }
                ]
              },
              { 
                title: 'React 增量更新优化', 
                detail: '使用 React Hooks 管理实时数据流，结合 Immer 实现不可变数据更新，只渲染变化的部分而非全量重绘。',
                requirement: '传感器数据频繁更新时，React 组件可能出现不必要的重渲染，导致页面响应变慢。',
                implementation: '1. 使用 useCallback 和 useMemo 缓存计算结果和回调函数；2. 使用 Immer 简化不可变数据更新逻辑；3. 将传感器数据拆分为独立的可观察对象，配合 React.memo 实现细粒度更新；4. 使用 useReducer 管理复杂状态，减少状态分散。',
                tech: ['React Hooks', 'Immer', 'React.memo'],
                selectionReason: 'Immer 提供直观的 mutable API 操作不可变数据，配合 React 的 memo 和 useMemo 能有效减少不必要的渲染。',
                alternatives: [
                  { name: '原生 setState', pros: '简单直接', cons: '复杂状态难以管理，容易触发不必要重渲染', selected: false },
                  { name: 'Redux', pros: '状态集中管理', cons: '样板代码多，学习曲线陡', selected: false },
                  { name: 'React Hooks + Immer', pros: '简洁高效，性能优异', cons: '需要理解 Hooks 依赖规则', selected: true }
                ],
                challenges: [
                  { problem: 'Hooks 依赖数组管理复杂', solution: '使用 ESLint hooks 规则检查，合理使用 useCallback 缓存依赖' },
                  { problem: '深层嵌套对象更新复杂', solution: '使用 Immer 的 produce 函数简化更新逻辑' }
                ]
              },
              { 
                title: 'ECharts 多类型图表', 
                detail: '集成 ECharts 绘制折线图、柱状图、热力图等，展示传感器历史数据趋势、异常告警等可视化需求。',
                requirement: '需要展示多种类型的传感器数据，包括实时数值、历史趋势、数据分布等，要求图表美观且交互流畅。',
                implementation: '1. 封装统一的图表组件，支持折线图、柱状图、热力图、仪表盘等多种类型；2. 实现图表数据的增量更新，避免全量重绘；3. 添加图表联动功能，点击一个图表可过滤其他图表数据；4. 支持图表导出为图片或 PDF。',
                tech: ['ECharts', 'ResizeObserver', 'html2canvas'],
                selectionReason: 'ECharts 功能强大，支持丰富的图表类型和交互，社区活跃，文档完善。',
                alternatives: [
                  { name: 'Chart.js', pros: '轻量级，性能好', cons: '图表类型有限，定制能力弱', selected: false },
                  { name: 'D3.js', pros: '高度可定制', cons: '学习曲线陡峭，开发成本高', selected: false },
                  { name: 'ECharts', pros: '功能全面，文档完善', cons: '包体积较大', selected: true }
                ],
                challenges: [
                  { problem: '大量数据点导致图表渲染卡顿', solution: '使用 ECharts 的 dataZoom 和 sampling 功能进行数据降采样' },
                  { problem: '图表响应式适配复杂', solution: '使用 ResizeObserver 监听容器尺寸变化，自动调整图表大小' }
                ]
              },
              { 
                title: '虚拟列表与数据分片', 
                detail: '对大量传感器数据采用虚拟滚动，对长周期历史数据采用分片加载策略，避免页面卡顿。',
                requirement: '当传感器数量达到数百个时，一次性渲染所有数据会导致严重的性能问题。',
                implementation: '1. 使用 react-window 实现虚拟列表，只渲染可视区域内的传感器项；2. 历史数据按时间范围分片，通过滚动加载更多数据；3. 实现数据预加载机制，提前获取即将进入视口的数据；4. 使用 IntersectionObserver 检测列表项可见性。',
                tech: ['react-window', 'IntersectionObserver', 'Lodash'],
                selectionReason: 'react-window 是业界成熟的虚拟列表解决方案，性能优异，API 简洁。',
                alternatives: [
                  { name: '纯 CSS overflow', pros: '实现简单', cons: '大数据量时性能差', selected: false },
                  { name: 'react-virtualized', pros: '功能强大', cons: '包体积大，学习成本高', selected: false },
                  { name: 'react-window', pros: '轻量高效', cons: '功能相对基础', selected: true }
                ],
                challenges: [
                  { problem: '虚拟列表滚动时可能出现空白', solution: '增加缓冲区，预渲染可视区域外的几项' },
                  { problem: '动态高度的列表项难以处理', solution: '使用 react-window 的 VariableSizeList 组件' }
                ]
              }
            ],
            futurePlans: [
              '引入 Web Worker 将数据解析与图表渲染分离，进一步提升复杂仪表盘场景的响应速度',
              '探索 WebGL 加速 ECharts 渲染，应对千级设备同屏展示的极端场景'
            ]
          },
          {
            title: '地图',
            icon: '🗺️',
            business: '在地图上展示物联网设备位置，支持查看设备实时状态；绘制矩形、圆形等地理围栏，设置围栏名称、告警阈值、关联设备；设备进出围栏时实时触发告警通知，可联动规则引擎执行预设动作。',
            tech: ['Google Maps API', 'WebSocket', 'DrawingManager', 'Canvas 渲染', 'Supercluster', '空间索引'],
            approach: [
              { 
                title: '实时数据 - WebSocket 设备追踪', 
                detail: '通过 WebSocket 接收传感器 GPS 坐标数据，建立设备与地图标记的实时绑定；实现断线重连与数据缓冲机制，确保设备位置更新的连续性。',
                requirement: '物联网设备需要实时显示位置信息，传统轮询方式延迟高、效率低，无法满足实时追踪需求。',
                implementation: '1. 建立 WebSocket 连接接收设备 GPS 数据推送；2. 维护设备 ID 到地图标记的映射关系；3. 实现断线重连和数据缓冲，断连期间的数据在重连后补发；4. 使用 requestAnimationFrame 批量更新标记位置，避免频繁 DOM 操作。',
                tech: ['WebSocket', 'Google Maps API', 'requestAnimationFrame'],
                selectionReason: 'WebSocket 提供低延迟的双向通信，适合实时位置数据推送场景。',
                alternatives: [
                  { name: 'HTTP 轮询', pros: '实现简单', cons: '延迟高，服务器压力大', selected: false },
                  { name: 'MQTT', pros: '轻量级，适合 IoT', cons: '需要额外部署 MQTT 服务器', selected: false },
                  { name: 'WebSocket', pros: '实时性强，双向通信', cons: '需要处理断线重连', selected: true }
                ],
                challenges: [
                  { problem: 'GPS 数据漂移导致标记抖动', solution: '使用卡尔曼滤波平滑位置数据' },
                  { problem: '大量设备同时上线导致消息风暴', solution: '实现消息限流和批量处理' }
                ]
              },
              { 
                title: '地图 SDK - 坐标与围栏渲染', 
                detail: '基于 Google Maps JavaScript API 处理 WGS84 坐标转换；使用 Polygon / Circle API 绘制围栏边界；InfoWindow 展示设备详情与围栏状态。',
                requirement: '需要在地图上精确显示设备位置和地理围栏，支持多种坐标格式和围栏形状。',
                implementation: '1. 封装坐标转换工具，支持 WGS84、GCJ-02、BD-09 坐标互转；2. 使用 Google Maps Polygon 和 Circle API 绘制围栏；3. 实现围栏样式自定义（颜色、透明度、边框）；4. 使用 InfoWindow 展示设备详情和围栏信息。',
                tech: ['Google Maps API', 'Turf.js', 'Proj4js'],
                selectionReason: 'Google Maps API 功能完善，支持丰富的地图操作，社区活跃。',
                alternatives: [
                  { name: '百度地图 API', pros: '国内访问速度快', cons: '国际化支持不佳', selected: false },
                  { name: 'OpenLayers', pros: '开源免费', cons: '功能相对简单', selected: false },
                  { name: 'Google Maps API', pros: '功能强大，国际化支持好', cons: '需要 API Key，有使用限制', selected: true }
                ],
                challenges: [
                  { problem: '坐标转换精度问题', solution: '使用专业的坐标转换库，定期校准转换参数' },
                  { problem: '围栏绘制性能问题', solution: '使用 Canvas 渲染大量围栏，减少 DOM 元素' }
                ]
              },
              { 
                title: '交互绘制 - 围栏绘制工具', 
                detail: '集成 DrawingManager 控件，支持手动在地图上绘制矩形、圆形、多边形围栏；封装围栏参数配置面板（名称、告警阈值、关联设备列表）。',
                requirement: '用户需要直观地在地图上绘制地理围栏，设置围栏属性和关联设备。',
                implementation: '1. 集成 Google Maps DrawingManager 控件；2. 自定义绘制工具栏，支持矩形、圆形、多边形绘制；3. 实现围栏编辑功能（移动、调整大小、删除）；4. 封装围栏配置面板，支持设置名称、告警阈值、关联设备。',
                tech: ['Google Maps DrawingManager', 'React Modal', 'Formik'],
                selectionReason: 'DrawingManager 提供现成的绘制功能，开发效率高。',
                alternatives: [
                  { name: '自定义绘制', pros: '高度定制', cons: '开发成本高', selected: false },
                  { name: '第三方绘制库', pros: '功能丰富', cons: '增加额外依赖', selected: false },
                  { name: 'DrawingManager', pros: '开箱即用', cons: '样式定制有限', selected: true }
                ],
                challenges: [
                  { problem: '绘制过程中的视觉反馈不足', solution: '添加绘制预览和实时坐标显示' },
                  { problem: '多边形顶点编辑复杂', solution: '提供顶点拖拽和删除功能' }
                ]
              },
              { 
                title: '性能优化 - Canvas 与空间索引', 
                detail: '使用 Canvas 渲染模式替代 DOM 标记，应对千级设备同屏场景；引入 Supercluster 实现设备点聚合；Web Worker 线程计算设备与围栏的空间关系。',
                requirement: '当设备数量达到数千个时，传统 DOM 渲染方式性能严重下降。',
                implementation: '1. 使用 Canvas 绑定层渲染大量设备标记；2. 引入 Supercluster 实现设备点聚合，根据缩放级别动态调整聚合粒度；3. 使用 Web Worker 计算设备与围栏的空间关系，避免阻塞主线程；4. 实现视口裁剪，只渲染可见区域内的设备。',
                tech: ['Canvas API', 'Supercluster', 'Web Worker'],
                selectionReason: 'Canvas 渲染性能远超 DOM，Supercluster 是成熟的点聚合解决方案。',
                alternatives: [
                  { name: '纯 DOM 渲染', pros: '简单直接', cons: '性能差', selected: false },
                  { name: 'WebGL 渲染', pros: '性能极佳', cons: '学习成本高', selected: false },
                  { name: 'Canvas + Supercluster', pros: '性能优异，实现相对简单', cons: '需要处理 Canvas 绑定', selected: true }
                ],
                challenges: [
                  { problem: 'Canvas 绑定层与原生 API 交互复杂', solution: '封装统一的绑定层接口' },
                  { problem: '点聚合算法复杂度', solution: '使用成熟的 Supercluster 库' }
                ]
              }
            ],
            futurePlans: [
              '引入 Supercluster 实现大规模设备点聚合，优化千级设备同屏渲染性能',
              '增加热力图模式，展示设备分布密度'
            ]
          },
          {
            title: '规则引擎',
            icon: '⚙️',
            business: '可视化配置自动化规则，将复杂逻辑抽象为「条件节点 + 动作节点」的树形结构；支持 8 种条件类型（如温度>30℃、时间触发、设备状态变化）和 40+ 种动作（如发送邮件、开关设备、HTTP 回调）；规则下发至边缘网关或云端执行引擎执行。',
            tech: ['React', '拖拽编排', 'MQTT', 'WebSocket', 'DSL'],
            approach: [
              { 
                title: '条件节点与动作节点设计', 
                detail: '将规则抽象为「条件节点（如：温度>30℃）」与「动作节点（如：发送邮件/开关设备）」，通过树形结构组合。',
                requirement: '用户需要可视化配置自动化规则，规则逻辑可能包含复杂的条件组合和动作序列。',
                implementation: '1. 定义条件节点类型（数值比较、时间触发、设备状态变化等）；2. 定义动作节点类型（发送邮件、开关设备、HTTP 回调等）；3. 使用树形数据结构表示规则逻辑；4. 实现节点间的逻辑关系（AND/OR/NOT）。',
                tech: ['React', 'Zustand', 'JSON Schema'],
                selectionReason: '树形结构清晰表达规则逻辑，便于后续解析和执行。',
                alternatives: [
                  { name: '线性规则链', pros: '简单直观', cons: '无法表达复杂逻辑', selected: false },
                  { name: '流程图模式', pros: '可视化强', cons: '实现复杂', selected: false },
                  { name: '树形节点组合', pros: '逻辑清晰，易于解析', cons: '学习曲线稍陡', selected: true }
                ],
                challenges: [
                  { problem: '节点类型扩展困难', solution: '使用工厂模式动态注册节点类型' },
                  { problem: '逻辑关系表达复杂', solution: '提供预设模板和可视化辅助' }
                ]
              },
              { 
                title: '拖拽式规则编排', 
                detail: '实现节点拖拽、连接线绘制、参数配置等交互，支持规则的保存、复制、导入导出。',
                requirement: '用户需要直观地通过拖拽方式构建规则，支持规则的复用和分享。',
                implementation: '1. 使用 react-flow 或自定义拖拽实现节点编排；2. 实现节点拖拽放置、连接线绘制、删除等交互；3. 支持规则的保存、复制、导入导出；4. 实现规则模板功能，支持快速创建常见规则。',
                tech: ['react-flow', 'react-dnd', 'uuid'],
                selectionReason: 'react-flow 提供成熟的流程图编辑能力，开发效率高。',
                alternatives: [
                  { name: '自定义拖拽', pros: '高度定制', cons: '开发成本高', selected: false },
                  { name: '第三方流程图库', pros: '功能完善', cons: '包体积大', selected: false },
                  { name: 'react-flow', pros: '功能强大，社区活跃', cons: '学习成本', selected: true }
                ],
                challenges: [
                  { problem: '连接线自动路由复杂', solution: '使用 react-flow 内置的连接路由算法' },
                  { problem: '大规模规则卡顿', solution: '实现虚拟滚动和按需渲染' }
                ]
              },
              { 
                title: '规则下发与设备联动', 
                detail: '规则保存后通过 MQTT/WebSocket 下发至边缘网关或云端执行引擎，实时监控规则触发状态与执行日志。',
                requirement: '规则需要下发到边缘网关或云端执行，支持离线场景下的规则执行。',
                implementation: '1. 将规则转换为可执行的 JSON 格式；2. 通过 MQTT/WebSocket 下发到执行引擎；3. 实现规则版本管理和增量更新；4. 实时监控规则执行状态和日志。',
                tech: ['MQTT', 'WebSocket', 'Redis'],
                selectionReason: 'MQTT 适合 IoT 场景的消息推送，WebSocket 适合实时状态同步。',
                alternatives: [
                  { name: 'HTTP API', pros: '简单直接', cons: '不支持离线场景', selected: false },
                  { name: 'CoAP', pros: '轻量级', cons: '生态不成熟', selected: false },
                  { name: 'MQTT + WebSocket', pros: '支持离线，实时性强', cons: '需要额外部署', selected: true }
                ],
                challenges: [
                  { problem: '离线规则执行', solution: '边缘网关本地存储和执行规则' },
                  { problem: '规则冲突检测', solution: '规则下发前进行冲突检测' }
                ]
              },
              { 
                title: '复杂条件表达式解析', 
                detail: '设计条件表达式 DSL，支持AND/OR/NOT逻辑组合、时间窗口、设备属性阈值等多维度条件表达。',
                requirement: '规则条件可能包含复杂的逻辑组合和时间窗口限制。',
                implementation: '1. 设计条件表达式 DSL，支持 AND/OR/NOT 逻辑；2. 实现表达式解析器和执行器；3. 支持时间窗口、设备属性阈值等条件；4. 实现表达式验证和错误提示。',
                tech: ['PEG.js', 'math.js', 'date-fns'],
                selectionReason: '自定义 DSL 提供灵活的条件表达能力，便于扩展。',
                alternatives: [
                  { name: 'SQL 表达式', pros: '语法熟悉', cons: '表达能力有限', selected: false },
                  { name: 'JavaScript 表达式', pros: '功能强大', cons: '安全风险', selected: false },
                  { name: '自定义 DSL', pros: '安全可控，易于扩展', cons: '需要实现解析器', selected: true }
                ],
                challenges: [
                  { problem: '表达式解析性能', solution: '缓存解析结果，避免重复解析' },
                  { problem: '错误提示不友好', solution: '提供详细的语法错误提示' }
                ]
              }
            ],
            futurePlans: [
              '引入决策树算法，实现规则冲突检测与优先级自动排序',
              '增加规则模板市场，预置行业场景（如农业大棚、工业产线）的标准化规则方案'
            ]
          }
        ]
      },
      {
        title: '特殊网关后台系统',
        role: '独立开发',
        period: '2025.02 - 2025.07',
        icon: '🌐',
        description: '从零构建定制化网关后台管理系统，替代传统 jQuery 架构，设计可复用组件库支撑 9 种网关型号扩展。',
        tags: ['React', '架构迁移', '组件库'],
        metrics: [
          { value: '9+', label: '网关型号复用', detail: '统一的模块化组件体系，让新增网关型号的开发成本降低 60%+' },
          { value: '100%', label: '架构现代化', detail: '从 jQuery 全面迁移到 React Hooks，代码可维护性质的飞跃' },
          { value: '60%+', label: '新型号开发效率提升', detail: '组件化 + 配置化设计，新增型号只需编写差异化配置' }
        ],
        approach: [
          { title: '组件化抽象分层', detail: '将网关管理功能拆分为「基础层（通用 UI）+ 协议层（通信逻辑）+ 业务层（设备特性）」三级架构，最大化代码复用。' },
          { title: '配置驱动渲染', detail: '设计 JSON Schema 驱动的动态表单系统，新增网关型号只需编写配置文件，无需修改组件代码。' },
          { title: '渐进式迁移策略', detail: '在 React 应用中保留 jQuery 兼容层，确保迁移期间功能不受影响，逐步替换并最终完全移除旧代码。' },
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
        tags: ['jQuery', 'React', '混合开发', 'WebSocket', 'VPN'],
        metrics: [
          { value: '50+', label: '功能迭代数量', detail: '持续迭代开发路由器配置、监控、日志等核心功能模块' },
          { value: 'jQuery+React', label: '技术栈融合', detail: '在 jQuery 项目中通过路由机制成功集成 React 页面开发' },
          { value: '100%', label: '功能稳定性', detail: '保证生产环境功能稳定运行，及时响应客户需求' }
        ],
        modules: [
          {
            title: '设备状态监控',
            icon: '📊',
            business: '实时展示路由器整体运行状态、网络连接状态及关键性能指标，包括 CPU/内存使用率、温度、流量统计等。',
            tech: ['React', 'WebSocket', 'ECharts', '实时数据'],
            futurePlans: [
              '引入 Web Worker 将数据解析与 UI 渲染分离，进一步提升高频更新场景的响应速度',
              '探索 WebGL 加速 ECharts 渲染，应对多隧道同屏监控的极端场景'
            ],
            approach: [
              {
                title: 'WebSocket 实时状态推送',
                detail: '通过 WebSocket 建立长连接，实时接收设备状态变化，实现零轮询的实时监控。',
                requirement: '工业路由器需要 7×24 小时监控，状态变化需要实时反馈到管理界面。',
                implementation: '1. 建立 WebSocket 长连接，服务端推送设备状态变化；2. 实现心跳检测和断线自动重连；3. 使用 requestAnimationFrame 控制 UI 更新频率，避免频繁渲染；4. 增量更新只变化的数据，而非全量刷新。',
                tech: ['WebSocket', 'requestAnimationFrame', '增量更新'],
                selectionReason: 'WebSocket 相比 HTTP 轮询延迟更低、资源消耗更少，适合持续状态监控场景。',
                alternatives: [
                  { name: 'HTTP 短轮询', pros: '实现简单', cons: '延迟高，资源消耗大', selected: false },
                  { name: 'Server-Sent Events', pros: '实现简单，单向推送', cons: '不支持双向通信', selected: false },
                  { name: 'WebSocket 长连接', pros: '实时性强，支持双向', cons: '需要处理断线重连', selected: true }
                ],
                challenges: [
                  { problem: '网络波动导致连接中断', solution: '实现指数退避重连策略，配合心跳检测' },
                  { problem: '高频状态更新导致 UI 卡顿', solution: '请求合并 + requestAnimationFrame 节流渲染' }
                ]
              },
              {
                title: 'VPN 隧道状态可视化',
                detail: '展示 WireGuard、IPsec、OpenVPN 三种 VPN 协议的连接状态、隧道信息、流量统计及连接质量评估。',
                requirement: 'VPN 是工业路由器核心功能，需要直观展示各隧道状态和流量情况。',
                implementation: '1. 设计隧道状态卡片布局，展示连接状态、流量、延迟等信息；2. 使用 ECharts 绘制流量趋势图；3. 实现隧道切换操作和状态刷新；4. 展示对等点数量和连接质量评分。',
                tech: ['React', 'ECharts', 'VPN 协议'],
                selectionReason: 'ECharts 支持丰富的图表类型，能清晰展示流量趋势和状态变化。',
                alternatives: [
                  { name: '纯 CSS 进度条', pros: '实现简单', cons: '信息量有限', selected: false },
                  { name: '第三方图表库', pros: '功能丰富', cons: '增加包体积', selected: false },
                  { name: 'ECharts', pros: '功能全面，性能好', cons: '需要按需引入', selected: true }
                ],
                challenges: [
                  { problem: 'VPN 状态更新频繁', solution: '设置合理刷新间隔，合并短时间内更新' },
                  { problem: '隧道数量多时布局混乱', solution: '响应式网格布局，支持折叠展开' }
                ]
              }
            ]
          },
          {
            title: '链路备份管理',
            icon: '🔗',
            business: '链路备份功能状态显示，包括主备链路切换状态、切换历史记录及链路健康度评估。',
            tech: ['React', '状态机', '链路检测'],
            futurePlans: [
              '支持更多链路类型（WiFi、LoRa 等），构建多链路冗余备份体系',
              '引入机器学习预测链路故障，实现预防性切换'
            ],
            approach: [
              {
                title: '主备链路切换机制',
                detail: '实现双链路冗余备份，支持手动切换和自动切换，展示切换历史和链路健康度。',
                requirement: '工业环境要求高可靠性，主链路故障时需自动切换到备用链路。',
                implementation: '1. 设计链路状态机：主链路 active、备用链路 standby、切换中 switching；2. 实时监测链路延迟和丢包率，低于阈值时触发告警；3. 记录切换历史，包含时间、原因、结果；4. 计算链路健康度得分。',
                tech: ['状态机', '链路检测', '健康度算法'],
                selectionReason: '状态机模式能清晰表达链路切换的各状态和转换关系。',
                alternatives: [
                  { name: '简单标志位', pros: '实现简单', cons: '状态逻辑混乱', selected: false },
                  { name: '状态机模式', pros: '逻辑清晰，易维护', cons: '需要设计状态转换图', selected: true }
                ],
                challenges: [
                  { problem: '切换时机判断困难', solution: '设置多级阈值，综合考虑延迟、丢包、抖动等因素' },
                  { problem: '频繁切换导致震荡', solution: '设置切换间隔保护和连续检测确认' }
                ]
              }
            ]
          },
          {
            title: '配置管理',
            icon: '⚙️',
            business: '实现路由器配置文件的下载、上传、验证及版本控制与回滚机制。',
            tech: ['React', '文件处理', '版本控制'],
            futurePlans: [
              '支持配置模板功能，预设常用配置组合快速部署',
              '实现配置的 CI/CD 流水线，支持配置变更审批流程'
            ],
            approach: [
              {
                title: '配置文件下载/上传',
                detail: '支持导出当前系统配置为 JSON 文件，上传新配置并验证有效性。',
                requirement: '路由器配置需要可备份、可恢复、可批量部署。',
                implementation: '1. 实现配置文件导出功能，生成带时间戳的 JSON 文件；2. 拖拽上传或点击选择文件；3. 上传前验证 JSON Schema 格式；4. 配置预览和差异对比。',
                tech: ['File API', 'JSON Schema', '拖拽上传'],
                selectionReason: 'File API 提供标准的文件操作接口，JSON Schema 可验证配置有效性。',
                alternatives: [
                  { name: '仅手动编辑', pros: '灵活性高', cons: '容易出错', selected: false },
                  { name: '文件导入导出', pros: '便于备份和迁移', cons: '需要处理格式兼容', selected: true }
                ],
                challenges: [
                  { problem: '大文件上传失败', solution: '分片上传 + 断点续传机制' },
                  { problem: '配置格式错误', solution: '上传前 JSON Schema 预校验' }
                ]
              },
              {
                title: '版本控制与回滚',
                detail: '记录配置修改历史，支持回滚到任意历史版本。',
                requirement: '配置变更需要可追溯、可撤销，出现问题时能快速恢复。',
                implementation: '1. 每次配置变更生成新版本记录；2. 版本列表展示时间、作者、变更描述；3. 支持查看历史版本详情；4. 一键回滚到指定版本。',
                tech: ['版本管理', 'Diff 对比', '回滚机制'],
                selectionReason: '版本化管理确保配置变更可追溯，简化问题排查和恢复。',
                alternatives: [
                  { name: '仅保留最新配置', pros: '存储简单', cons: '无法回溯', selected: false },
                  { name: 'Git 式版本控制', pros: '功能完整', cons: '实现复杂', selected: false },
                  { name: '简版版本列表', pros: '平衡功能与实现', cons: '功能相对简单', selected: true }
                ],
                challenges: [
                  { problem: '版本数量过多', solution: '限制保留数量，自动清理旧版本' },
                  { problem: '回滚后配置不兼容', solution: '回滚前检查版本兼容性提示' }
                ]
              }
            ]
          }
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
        tags: ['jQuery', 'React', '技术探索', 'MQTT', '协议转换'],
        metrics: [
          { value: '40+', label: '功能模块开发', detail: '开发网关配置、协议管理、数据采集等核心功能模块' },
          { value: '混合架构', label: '技术栈创新', detail: '在 jQuery 基础上尝试集成 React，探索混合开发模式' },
          { value: '稳定运行', label: '生产环境表现', detail: '确保系统在工业环境下稳定可靠运行' }
        ],
        modules: [
          {
            title: '数据处理模块',
            icon: '🔄',
            business: '实现多种工业协议与标准协议间的数据格式转换，提供数据转换规则配置界面，展示转换成功率和关键指标。',
            tech: ['React', 'MQTT', 'Modbus', 'OPC UA', '数据可视化'],
            futurePlans: [
              '引入 WebAssembly 加速协议解析性能',
              '支持更多工业协议（Profinet、EtherCAT 等）'
            ],
            approach: [
              {
                title: '多协议转换引擎',
                detail: '支持 Modbus RTU↔TCP、OPC UA→MQTT、HTTP/JSON 等多种协议转换。',
                requirement: '工业现场设备使用各种私有协议，需要统一转换为标准 IoT 协议上云。',
                implementation: '1. 设计协议转换映射表，定义源格式和目标格式的对应关系；2. 实现转换中间层，屏蔽底层协议差异；3. 支持自定义转换函数处理特殊数据格式；4. 统计转换成功率、错误类型等指标。',
                tech: ['协议转换', 'Modbus', 'OPC UA', 'MQTT'],
                selectionReason: '模块化转换引擎便于添加新协议支持，统计指标便于问题排查。',
                alternatives: [
                  { name: '硬编码转换逻辑', pros: '性能最优', cons: '扩展性差', selected: false },
                  { name: '规则引擎驱动', pros: '灵活可配置', cons: '性能略有损耗', selected: false },
                  { name: '映射表 + 自定义函数', pros: '平衡灵活性与性能', cons: '需要设计好接口', selected: true }
                ],
                challenges: [
                  { problem: '不同协议数据格式差异大', solution: '设计统一的中间数据模型' },
                  { problem: '转换性能影响数据吞吐', solution: '批量转换 + 异步处理' }
                ]
              },
              {
                title: '数据映射规则配置',
                detail: '可视化配置数据映射关系，支持自定义数据转换函数和过滤规则。',
                requirement: '用户需要灵活配置数据映射，将设备数据映射到云平台的统一数据模型。',
                implementation: '1. 设计映射规则 DSL，支持字段映射、类型转换、计算公式；2. 可视化规则编辑器，降低配置门槛；3. 规则预览和模拟运行；4. 规则版本管理和导出复用。',
                tech: ['DSL', '可视化编辑器', '规则引擎'],
                selectionReason: '可视化配置提升用户体验，DSL 提供灵活的表达能力。',
                alternatives: [
                  { name: '纯代码配置', pros: '灵活性高', cons: '门槛高', selected: false },
                  { name: '可视化拖拽', pros: '用户体验好', cons: '实现复杂', selected: false },
                  { name: 'DSL + 可视化', pros: '平衡灵活性与易用性', cons: '需要设计 DSL 语法', selected: true }
                ],
                challenges: [
                  { problem: '复杂映射关系表达困难', solution: '提供函数库和预设模板' },
                  { problem: '规则冲突难以发现', solution: '运行前静态分析和模拟测试' }
                ]
              }
            ]
          },
          {
            title: '文件管理模块',
            icon: '📁',
            business: '固件下载、日志管理、断点续传等文件处理功能。',
            tech: ['React', '分片下载', '断点续传', '文件处理'],
            futurePlans: [
              '支持固件对比功能，版本间差异可视化',
              '实现远程日志实时流式查看'
            ],
            approach: [
              {
                title: '固件版本管理',
                detail: '支持工业网关固件的查询、选择与下载安装。',
                requirement: '网关固件需要支持远程升级，管理员需要查看版本历史和兼容性信息。',
                implementation: '1. 固件版本列表展示版本号、日期、大小、兼容性；2. 支持选择指定版本下载；3. 固件完整性校验（MD5/SHA256）；4. 下载进度和安装状态展示。',
                tech: ['固件管理', '版本控制', '完整性校验'],
                selectionReason: '固件升级是网关的核心运维功能，需要可靠性和进度可视化。',
                alternatives: [
                  { name: '手动下载固件', pros: '简单', cons: '效率低', selected: false },
                  { name: '远程 OTA 升级', pros: '自动化程度高', cons: '需要网络稳定', selected: true }
                ],
                challenges: [
                  { problem: '下载过程中网络中断', solution: '断点续传机制，支持暂停和恢复' },
                  { problem: '固件版本兼容性问题', solution: '升级前检查硬件型号和兼容性信息' }
                ]
              },
              {
                title: '日志管理',
                detail: '提供系统日志、操作日志、错误日志的分类查看与下载。',
                requirement: '设备运行日志是问题排查的重要依据，需要支持分类查看和导出。',
                implementation: '1. 日志分类：系统日志、操作日志、错误日志；2. 日志级别筛选：DEBUG、INFO、WARN、ERROR；3. 时间范围筛选和关键词搜索；4. 日志文件打包下载。',
                tech: ['日志管理', '分页加载', '关键词搜索'],
                selectionReason: '分类管理便于快速定位问题，分页和搜索提升查看效率。',
                alternatives: [
                  { name: '实时日志流', pros: '实时性高', cons: '占用带宽', selected: false },
                  { name: '分页日志列表', pros: '按需加载', cons: '实时性一般', selected: true }
                ],
                challenges: [
                  { problem: '日志量过大导致加载慢', solution: '分页加载 + 懒加载' },
                  { problem: '关键词搜索性能差', solution: '服务端索引 + 前端缓存' }
                ]
              },
              {
                title: '断点续传机制',
                detail: '实现大文件下载的断点续传，支持暂停、恢复及进度显示。',
                requirement: '工业网关固件文件较大（数十 MB），需要支持断点续传确保下载可靠性。',
                implementation: '1. 分片下载：将文件分成多个 chunk 并发下载；2. 记录已下载位置，暂停后保存进度；3. 恢复时从断点继续下载；4. 进度条实时展示下载进度和速度。',
                tech: ['分片下载', '断点续传', '并发控制'],
                selectionReason: '分片并发下载提升速度，断点续传确保大文件下载可靠性。',
                alternatives: [
                  { name: '单线程下载', pros: '实现简单', cons: '速度慢，不支持断点', selected: false },
                  { name: '分片 + 断点续传', pros: '速度快，可靠性高', cons: '实现复杂', selected: true }
                ],
                challenges: [
                  { problem: '分片下载管理复杂', solution: '使用下载管理器统一调度' },
                  { problem: '服务器不支持范围请求', solution: '检测服务器能力，降级到单线程' }
                ]
              }
            ]
          },
          {
            title: '通信机制模块',
            icon: '📡',
            business: '数据轮询模式和数据订阅模式的配置与管理，支持两种模式的切换和性能对比。',
            tech: ['React', 'MQTT', '轮询', '订阅', '性能对比'],
            futurePlans: [
              '智能模式自动切换，根据网络状况自动选择最优模式',
              '支持更多消息协议（CoAP、LWM2M 等）'
            ],
            approach: [
              {
                title: '轮询模式配置',
                detail: '配置数据轮询频率、超时时间及重试策略。',
                requirement: '轮询模式适合简单查询场景，需要可配置轮询间隔和重试逻辑。',
                implementation: '1. 轮询频率配置：100ms - 60s 可选；2. 超时时间设置；3. 重试次数和间隔配置；4. 轮询设备列表和状态展示。',
                tech: ['轮询机制', '超时控制', '重试策略'],
                selectionReason: '可配置参数满足不同场景需求，状态展示便于监控。',
                alternatives: [
                  { name: '固定间隔轮询', pros: '简单', cons: '不灵活', selected: false },
                  { name: '自适应轮询', pros: '智能', cons: '实现复杂', selected: false },
                  { name: '可配置轮询', pros: '灵活可调', cons: '需要参数优化', selected: true }
                ],
                challenges: [
                  { problem: '轮询间隔设置不当', solution: '提供默认推荐值和场景预设' },
                  { problem: '设备响应慢导致超时', solution: '合理的超时和重试配置' }
                ]
              },
              {
                title: '订阅模式管理',
                detail: '配置 MQTT 订阅主题、消息过滤规则及 QoS 级别。',
                requirement: '订阅模式适合实时监控场景，需要配置订阅规则和消息过滤。',
                implementation: '1. 订阅主题配置（支持通配符）；2. 消息过滤规则；3. QoS 级别选择（0/1/2）；4. 消息计数和流量统计。',
                tech: ['MQTT', '订阅模式', '消息过滤', 'QoS'],
                selectionReason: 'MQTT 是 IoT 标准的轻量级协议，订阅模式实时性好。',
                alternatives: [
                  { name: 'HTTP 轮询', pros: '简单', cons: '实时性差', selected: false },
                  { name: 'WebSocket', pros: '实时双向', cons: '不适合大规模设备', selected: false },
                  { name: 'MQTT 订阅', pros: '轻量级，实时性好', cons: '需要 MQTT Broker', selected: true }
                ],
                challenges: [
                  { problem: '订阅主题过多影响性能', solution: '限制单个连接的主题数量' },
                  { problem: '消息过滤增加延迟', solution: '客户端预过滤，减少无效消息' }
                ]
              },
              {
                title: '模式性能对比',
                detail: '提供轮询模式和订阅模式的功能对比和性能指标展示。',
                requirement: '用户需要根据场景选择合适的通信模式，需要直观的功能和性能对比。',
                implementation: '1. 响应延迟对比：轮询 50-100ms vs 订阅 10-30ms；2. 网络开销对比；3. 适用场景说明；4. 一键切换当前模式。',
                tech: ['性能对比', '可视化', '模式切换'],
                selectionReason: '可视化对比帮助用户做出选择，一键切换提升体验。',
                alternatives: [
                  { name: '纯文字说明', pros: '信息完整', cons: '不直观', selected: false },
                  { name: '图表对比', pros: '直观', cons: '需要实现图表', selected: true }
                ],
                challenges: [
                  { problem: '性能数据不准确', solution: '实际测试采集数据，定期更新' },
                  { problem: '用户难以理解技术差异', solution: '提供场景化推荐和简化说明' }
                ]
              }
            ]
          }
        ],
        approach: [
          { title: 'jQuery 迭代开发', detail: '基于 jQuery 进行日常功能开发和维护，处理设备配置、状态监控等业务逻辑。' },
          { title: '路由机制设计', detail: '设计前端路由系统，支持在 jQuery 项目中按路由加载不同技术栈的页面。' },
          { title: 'React 混合集成', detail: '通过路由机制在 jQuery 项目中嵌入 React 页面，使用 ReactDOM.render 动态挂载组件，实现新旧技术栈共存。' },
          { title: '兼容性保障', detail: '确保新旧技术栈之间的兼容性，避免样式冲突和全局变量污染。' }
        ],
        futurePlans: [
          '总结混合开发经验，形成可复用的技术方案',
          '推动团队技术栈升级，逐步向现代前端框架迁移',
          '建立前端工程化体系，提升开发效率和代码质量'
        ]
      },
      {
        title: '传感器蓝牙配置 App',
        role: '独立开发',
        period: '2024.08 - 2025.01',
        icon: '📱',
        description: '基于 Vue3 + UniApp 的跨平台移动应用，用于传感器设备的蓝牙激活与网关接入配置。解决工业传感器在无屏幕场景下的配网难题，用户通过手机蓝牙连接传感器完成激活，并将其接入附近网关实现数据上云。',
        tags: ['Vue3', 'UniApp', '蓝牙 BLE', 'IoT'],
        metrics: [
          { value: '蓝牙', label: '即连即配', detail: '靠近传感器自动发现，一键激活并接入网关，全流程耗时 < 30秒' },
          { value: '跨平台', label: 'iOS/Android', detail: '一套代码同时打包 iOS 和 Android，节省 50% 的移动端开发成本' },
          { value: '离线', label: '无网配置', detail: '传感器激活不依赖 WiFi，通过蓝牙完成全部配置' }
        ],
        modules: [
          {
            title: '蓝牙扫描与连接',
            icon: '📡',
            business: '扫描发现附近的星纵传感器设备，展示设备名称、信号强度、剩余电量等信息，建立蓝牙连接进行数据交互。',
            tech: ['UniApp', '蓝牙 BLE', '状态机'],
            futurePlans: [
              '支持多设备同时连接，实现批量激活',
              '引入 BLE 定位，实现室内资产追踪'
            ],
            approach: [
              {
                title: '蓝牙扫描与筛选',
                detail: '利用设备广播名过滤星纵设备，解析广播数据中的传感器型号和电量信息。',
                requirement: '现场可能有多个传感器同时广播，需要快速准确识别目标设备。',
                implementation: '1. 调用 uni.startBluetoothDeviceDiscovery 开始扫描；2. 通过广播名过滤 Milesight 设备；3. 解析广播数据中的型号、电量、信号强度；4. 按 RSSI 排序展示设备列表。',
                tech: ['蓝牙 BLE', '广播数据解析', 'RSSI'],
                selectionReason: '蓝牙 BLE 是最低功耗的设备发现方式，适合电池供电的传感器。',
                alternatives: [
                  { name: 'WiFi 扫描', pros: '距离远', cons: '功耗高，传感器不支持', selected: false },
                  { name: 'NFC', pros: '触碰即连', cons: '需要贴近，无法批量', selected: false },
                  { name: '蓝牙 BLE', pros: '功耗低，自动发现', cons: '需要权限申请', selected: true }
                ],
                challenges: [
                  { problem: 'Android 和 iOS 蓝牙 API 差异大', solution: '封装统一接口，根据平台调用对应 API' },
                  { problem: '后台扫描被系统限制', solution: '引导用户开启定位权限（Android 6.0+）' }
                ]
              },
              {
                title: '蓝牙连接状态管理',
                detail: '管理蓝牙连接的生命周期，包含连接中、已连接、配对中、配对失败等状态。',
                requirement: '蓝牙连接过程可能出现各种异常，需要清晰的状态反馈和错误处理。',
                implementation: '1. 设计连接状态机：空闲→扫描中→发现设备→连接中→配对中→已连接→错误；2. 每个状态对应不同的 UI 和操作；3. 错误状态提供重试和取消选项；4. 连接超时自动断开保护。',
                tech: ['状态机', 'Promise', '错误处理'],
                selectionReason: '状态机模式能清晰管理连接各阶段，状态转换有据可循。',
                alternatives: [
                  { name: '简单标志位', pros: '实现简单', cons: '状态逻辑混乱', selected: false },
                  { name: '状态机模式', pros: '逻辑清晰，易维护', cons: '需要设计状态转换图', selected: true }
                ],
                challenges: [
                  { problem: 'iOS 配对弹窗难以捕获', solution: '引导用户手动确认，状态流转独立处理' },
                  { problem: '连接被系统中断', solution: '监听蓝牙适配器状态变化，自动尝试重连' }
                ]
              }
            ]
          },
          {
            title: '传感器激活配置',
            icon: '⚡',
            business: '通过蓝牙向传感器写入配置，包括目标网关选择、采样间隔、发送周期等参数，完成传感器激活上线。',
            tech: ['UniApp', '蓝牙 Write', 'JSON Schema'],
            futurePlans: [
              '支持配置模板，批量下发相同配置',
              '增加配置校验，提前发现参数冲突'
            ],
            approach: [
              {
                title: '网关自动发现',
                detail: '扫描并展示可接入的网关列表，用户选择目标网关后写入传感器配置。',
                requirement: '传感器需要知道将数据发送到哪里，需要选择可用的网关作为数据路由。',
                implementation: '1. 通过 BLE 扫描发现的网关设备；2. 解析网关支持的频段和协议；3. 展示网关信号质量和工作状态；4. 用户选择后写入传感器目标网关配置。',
                tech: ['网关发现', '频段匹配', '配置写入'],
                selectionReason: '用户需要了解网关情况才能做出选择，可视化列表便于操作。',
                alternatives: [
                  { name: '手动输入网关 ID', pros: '灵活', cons: '易出错，体验差', selected: false },
                  { name: '自动连接最近网关', pros: '简单', cons: '用户无法控制', selected: false },
                  { name: '列表选择网关', pros: '可控性好，用户友好', cons: '需要网关广播', selected: true }
                ],
                challenges: [
                  { problem: '附近无网关可用', solution: '提示用户检查网关电源和工作状态' },
                  { problem: '网关频段与传感器不匹配', solution: '根据型号筛选兼容网关，减少选择困惑' }
                ]
              },
              {
                title: '配置下发与确认',
                detail: '将用户配置的参数通过蓝牙写入传感器，等待传感器确认激活成功。',
                requirement: '传感器配置需要可靠传输，确认激活成功才能算完成配置流程。',
                implementation: '1. 序列化和校验配置参数；2. 分包通过 BLE Characteristic 写入；3. 传感器回复确认帧；4. 解析确认数据判断激活结果；5. 激活成功后展示设备上线状态。',
                tech: ['分包写入', '确认机制', 'CRC 校验'],
                selectionReason: 'BLE 单次传输数据量有限，需要分包；确认机制确保配置可靠落地。',
                alternatives: [
                  { name: '单次写入', pros: '简单', cons: '数据量受限', selected: false },
                  { name: '分包写入 + 确认', pros: '可靠，可追溯', cons: '实现稍复杂', selected: true }
                ],
                challenges: [
                  { problem: '分包传输中断', solution: '记录已发送包索引，断点续传' },
                  { problem: '传感器无响应', solution: '设置超时时间，超时提示用户重试' }
                ]
              }
            ]
          },
          {
            title: '设备管理与日志',
            icon: '📋',
            business: '记录传感器配置历史，提供配置回溯和问题排查能力。',
            tech: ['Vue3', '本地存储', 'SQLite'],
            futurePlans: [
              '同步配置记录到云端，多设备统一管理',
              '增加配置对比功能，支持配置变更历史'
            ],
            approach: [
              {
                title: '本地配置记录',
                detail: '使用 SQLite 本地数据库存储配置历史，包含设备信息、配置参数、激活时间等。',
                requirement: '用户需要查看历史配置记录，便于问题排查和配置迁移。',
                implementation: '1. 使用 uni-app 集成 SQLite 插件；2. 设计配置记录表结构；3. 配置完成后写入本地数据库；4. 列表展示历史记录，支持搜索和筛选。',
                tech: ['SQLite', '数据持久化', '本地存储'],
                selectionReason: '本地存储不依赖网络，离线可查看；SQLite 适合结构化数据存储。',
                alternatives: [
                  { name: 'LocalStorage', pros: '简单', cons: '不适合大量数据', selected: false },
                  { name: '文件存储', pros: '灵活', cons: '查询不便', selected: false },
                  { name: 'SQLite', pros: '查询高效，结构清晰', cons: '需要插件', selected: true }
                ],
                challenges: [
                  { problem: '数据库迁移', solution: '版本号管理，支持升级脚本' },
                  { problem: '数据量增长', solution: '定期清理或归档历史记录' }
                ]
              },
              {
                title: '配置日志详情',
                detail: '查看单次配置的全过程日志，包含蓝牙交互的每一步命令和响应。',
                requirement: '配置失败时需要详细日志便于排查问题。',
                implementation: '1. 配置过程每一步都记录日志；2. 日志包含时间戳、命令类型、数据内容；3. 成功/失败状态清晰标注；4. 支持导出日志文件用于技术支持。',
                tech: ['日志系统', '时间戳', '数据可视化'],
                selectionReason: '详细日志是问题排查的关键，导出功能便于技术支持。',
                alternatives: [
                  { name: '简单状态提示', pros: '用户友好', cons: '排查困难', selected: false },
                  { name: '详细日志', pros: '排查方便', cons: '用户可能困惑', selected: true }
                ],
                challenges: [
                  { problem: '日志数据量大', solution: '限制保留条数，自动压缩旧日志' },
                  { problem: '用户看不懂日志', solution: '日志增加友好提示，错误码关联解决方案' }
                ]
              }
            ]
          }
        ],
        approach: [
          { title: '跨端技术选型', detail: '选择 Vue3 + UniApp 方案，一套代码覆盖 iOS 和 Android，同时为未来小程序和 H5 预留扩展能力。' },
          { title: '蓝牙协议封装', detail: '封装统一的蓝牙操作模块，根据平台（iOS/Android）调用原生 BLE API，屏蔽平台差异。' },
          { title: '状态驱动 UI', detail: '使用 Vue3 Composition API + 状态机管理蓝牙连接和配置流程，状态变化驱动 UI 更新。' },
          { title: '离线优先设计', detail: '核心功能不依赖网络，蓝牙配网和本地存储确保在现场无网络环境下也能正常工作。' }
        ],
        futurePlans: [
          '扩展支持 LoRaWAN 设备激活，完善星纵产品线全场景覆盖',
          '增加设备诊断功能，通过蓝牙读取传感器更多运行状态',
          '探索 Apple Watch / 安卓手表适配，进一一部降低操作门槛'
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
    summary: '高速工程顾问是由深圳高速公路股份有限公司（深高速，A+H 股上市）发起设立的工程咨询公司，业务覆盖工程全生命周期（咨询、勘察、设计、监理、检测、养护等），深度集成 BIM、3DGIS、北斗等技术，参与港珠澳大桥、深中通道等国家重点工程。主导玄同微前端架构体系建设（基于 single-spa，整合 Svelte 与 React 跨框架子应用），构建个人/岗位/应用/用户四层 RBAC 权限体系（精确到按钮级），推进 TypeScript 覆盖率从 5% 提升至 40%，独立承担平台约 70% 页面开发。',
    totalStats: [
      { label: 'TS 覆盖率提升', value: '5%→40%' },
      { label: '页面开发占比', value: '70%' },
      { label: '遗留缺陷修复', value: '20+' },
      { label: '公共组件封装', value: '5+' }
    ],
    projects: [
      {
        title: '玄同微前端企业管理平台',
        role: '前端负责人',
        period: '2022.01 - 2022.07',
        icon: '🏗️',
        description: '基于 single-spa 的微前端架构企业管理平台，平台命名为"玄同"，整合 Svelte 与 React 跨框架子应用，深度集成政务级电子签章服务。',
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
        modules: [
          {
            title: '微前端架构设计',
            icon: '🏗️',
            business: '基于 single-spa 实现微前端架构，整合 Svelte 与 React 跨框架子应用，实现模块独立开发、部署与运行时集成。',
            tech: ['single-spa', 'Svelte', 'React', '跨框架通信'],
            futurePlans: [
              '探索 Module Federation 实现更优的共享依赖管理',
              '引入微前端沙箱隔离，增强安全性和稳定性'
            ],
            approach: [
              {
                title: '子应用注册与生命周期管理',
                detail: '设计子应用注册机制，统一管理各子应用的加载、挂载、卸载生命周期。',
                requirement: '各子应用独立开发部署，需要统一的生命周期管理确保切换流畅和状态隔离。',
                implementation: '1. 定义子应用注册规范，包含名称、入口、激活条件；2. 实现 single-spa 的 import-map 跨域加载；3. 设计应用切换时的状态保存与恢复机制；4. 监控子应用加载失败并提供降级方案。',
                tech: ['single-spa', 'import-map', '生命周期钩子'],
                selectionReason: 'single-spa 是成熟的微前端框架，支持多框架共存，文档完善。',
                alternatives: [
                  { name: 'iframe 隔离', pros: '隔离性强', cons: '通信困难，体验差', selected: false },
                  { name: 'EMP', pros: 'Webpack 模块共享', cons: '强依赖 Webpack', selected: false },
                  { name: 'single-spa', pros: '多框架支持，生态成熟', cons: '样式隔离需额外处理', selected: true }
                ],
                challenges: [
                  { problem: '子应用样式冲突', solution: 'CSS Modules + 样式前缀规范' },
                  { problem: '跨应用状态共享', solution: '设计 SharedState 事件总线' }
                ]
              },
              {
                title: '跨框架通信机制',
                detail: '设计 Svelte 与 React 子应用间的通信机制，实现跨框架事件传递和状态同步。',
                requirement: '登录模块使用 Svelte，业务模块使用 React，需要统一的登录状态共享。',
                implementation: '1. 基于事件总线实现跨应用通信；2. 设计统一的状态管理协议；3. 实现 Svelte 到 React 的登录状态同步；4. 处理路由跳转和 URL 参数传递。',
                tech: ['EventBus', '跨框架状态', '路由同步'],
                selectionReason: '事件总线模式解耦度高，各子应用无需直接依赖。',
                alternatives: [
                  { name: 'localStorage 同步', pros: '实现简单', cons: '同步时机难以控制', selected: false },
                  { name: 'SharedStore', pros: '状态统一', cons: '增加耦合', selected: false },
                  { name: 'EventBus 事件总线', pros: '解耦彻底', cons: '需要统一事件规范', selected: true }
                ],
                challenges: [
                  { problem: '事件顺序不确定', solution: '设计事件确认机制' },
                  { problem: '内存泄漏风险', solution: '统一事件监听清理机制' }
                ]
              },
              {
                title: '统一权限认证',
                detail: '集成政务级电子签章服务，实现基于 JWT 的统一身份认证与权限验证。',
                requirement: '政务系统需要强身份认证，支持电子签章和操作审计。',
                implementation: '1. JWT Token 生成与刷新机制；2. 集成电子签章 SDK；3. 统一权限验证中间件；4. 敏感操作日志记录。',
                tech: ['JWT', 'OAuth2', '电子签章', 'RBAC'],
                selectionReason: 'JWT 是标准的无状态认证方案，适合微服务架构。',
                alternatives: [
                  { name: 'Session 认证', pros: '服务端可控', cons: '扩展性差', selected: false },
                  { name: 'JWT', pros: '无状态，扩展性好', cons: 'Token 管理复杂', selected: true }
                ],
                challenges: [
                  { problem: 'Token 过期处理', solution: '静默刷新 + 引导重新登录' },
                  { problem: '多设备登录', solution: '设备绑定 + 异地登录提醒' }
                ]
              }
            ]
          },
          {
            title: '响应式设计系统',
            icon: '📱',
            business: '构建适配多终端的响应式设计系统，确保 PC、平板、手机等设备的一致用户体验。',
            tech: ['CSS Grid', 'Flexbox', '媒体查询', 'Rem 适配'],
            futurePlans: [
              '建立设计令牌系统，实现 Design Token 自动化',
              '探索 CSS Container Queries 实现更灵活的组件响应式'
            ],
            approach: [
              {
                title: '栅格布局系统',
                detail: '设计 12 栅格系统，适配不同屏幕尺寸的响应式布局规范。',
                requirement: '工程管理后台需要在 PC 大屏和移动端都能良好展示。',
                implementation: '1. 定义 12 栅格基础单位和间距；2. 实现断点系统（sm/md/lg/xl）；3. 关键组件的响应式适配；4. 验证不同设备下的布局正确性。',
                tech: ['CSS Grid', '断点系统', '响应式单位'],
                selectionReason: 'CSS Grid 是现代布局方案，12 栅格是业界通用标准。',
                alternatives: [
                  { name: 'Bootstrap 栅格', pros: '成熟稳定', cons: '样式定制受限', selected: false },
                  { name: '自定义 Grid', pros: '灵活定制', cons: '需要开发时间', selected: true }
                ],
                challenges: [
                  { problem: '表格在移动端显示', solution: '表格横向滚动 + 列隐藏策略' },
                  { problem: '图表自适应', solution: 'ECharts resize 监听 + 容器宽度检测' }
                ]
              },
              {
                title: '组件响应式适配',
                detail: '实现表单、表格、卡片等基础组件的响应式适配。',
                requirement: '相同数据在不同设备上需要不同的展示方式。',
                implementation: '1. 表单：PC 多列 → 移动端单列；2. 表格：PC 全列 → 移动端卡片；3. 卡片：PC 网格 → 移动端堆叠；4. 导航：PC 侧边栏 → 移动端抽屉。',
                tech: ['组件适配', '条件渲染', 'CSS 变换'],
                selectionReason: '基于断点的条件渲染实现简单可控。',
                alternatives: [
                  { name: '纯 CSS 响应式', pros: '维护简单', cons: '无法处理复杂逻辑', selected: false },
                  { name: '组件级适配', pros: '逻辑清晰', cons: '代码量增加', selected: true }
                ],
                challenges: [
                  { problem: '数据密度差异', solution: '移动端采用详情展开模式' },
                  { problem: '触控区域大小', solution: '设置最小触控区域 44px' }
                ]
              }
            ]
          }
        ],
        futurePlans: [
          '采用 Module Federation 替代 single-spa，实现更灵活的子应用加载与共享依赖管理',
          '引入端到端自动化测试（Playwright），对核心流程建立回归测试用例',
          '将 TypeScript 覆盖率继续推进到 80%+，并引入 strict mode 强化类型安全'
        ]
      },
      {
        title: '企业管理后台系统',
        role: '核心开发',
        period: '2020.12 - 2022.01',
        icon: '⚙️',
        description: '面向工程企业的综合管理平台，涵盖工程管理、合同段管理、用户权限管理、图片管理等核心模块，支持工程全生命周期管理和数据可视化决策。',
        tags: ['React', 'Ant Design', 'ECharts', '阿里云 OSS'],
        metrics: [
          { value: '4+', label: '核心业务模块', detail: '工程管理、合同段、用户权限、图片管理等模块完整实现' },
          { value: '20+', label: '数据统计图表', detail: '涵盖工程进度、质量、安全等多维度数据可视化' },
          { value: '70%', label: '前端页面占比', detail: '独立承担约 70% 的页面开发工作' }
        ],
        modules: [
          {
            title: '工程管理模块',
            icon: '🏗️',
            business: '实现工程项目全生命周期管理，涵盖项目立项、进度跟踪、质量监控、安全管理等核心功能。',
            tech: ['React', 'ECharts', '工作流引擎', '状态机'],
            futurePlans: [
              '引入 BIM 三维模型与工程进度关联展示',
              '集成北斗定位实现施工机械实时监控'
            ],
            approach: [
              {
                title: '项目全生命周期建模',
                detail: '设计工程项目状态机，覆盖从立项到竣工的全阶段管理。',
                requirement: '工程项目周期长、阶段多，需要清晰的状态流转和完整的过程记录。',
                implementation: '1. 设计项目状态机：立项→审批→实施→验收→竣工→归档；2. 每个状态定义可执行的操作和前置条件；3. 状态变更记录完整日志；4. 阶段切换需要审批流程。',
                tech: ['状态机', '工作流', '审批流'],
                selectionReason: '状态机模式清晰表达项目阶段流转，工作流引擎支持复杂审批。',
                alternatives: [
                  { name: '简单状态字段', pros: '实现简单', cons: '状态逻辑混乱', selected: false },
                  { name: '状态机 + 工作流', pros: '逻辑清晰，支持审批', cons: '实现复杂', selected: true }
                ],
                challenges: [
                  { problem: '状态转换规则复杂', solution: '可视化状态机设计器' },
                  { problem: '并行阶段处理', solution: '设计阶段依赖关系图' }
                ]
              },
              {
                title: '工程进度甘特图',
                detail: '使用甘特图展示项目进度，支持里程碑标记和进度预警。',
                requirement: '管理者需要直观了解项目整体进度和各阶段完成情况。',
                implementation: '1. 使用 ECharts Gantt 组件渲染项目计划；2. 里程碑用菱形标记关键节点；3. 进度滞后用红色预警；4. 支持缩放和拖拽调整计划。',
                tech: ['ECharts', 'Gantt', '拖拽交互'],
                selectionReason: 'ECharts Gantt 功能完善，支持交互和定制。',
                alternatives: [
                  { name: 'Excel 导出', pros: '用户熟悉', cons: '无法实时更新', selected: false },
                  { name: '第三方 Gantt 库', pros: '功能完善', cons: '样式定制受限', selected: false },
                  { name: 'ECharts Gantt', pros: '可定制，集成方便', cons: '大项目渲染性能', selected: true }
                ],
                challenges: [
                  { problem: '大项目甘特图性能', solution: '虚拟滚动，只渲染可见区域' },
                  { problem: '跨团队任务依赖', solution: '设计任务关联线和关键路径算法' }
                ]
              },
              {
                title: '质量与安全管理',
                detail: '实现工程质量和安全检查记录，支持问题跟踪和整改闭环。',
                requirement: '质量和安全是工程管理核心，需要完整的检查-整改-复查闭环。',
                implementation: '1. 设计检查表模板，支持自定义检查项；2. 拍照记录检查现场图片；3. 问题分级（严重/一般/建议）和整改期限；4. 整改情况跟踪和复查确认。',
                tech: ['图片上传', '问题跟踪', '闭环管理'],
                selectionReason: '拍照留痕符合工程行业习惯，闭环管理确保问题解决。',
                alternatives: [
                  { name: '纯文字记录', pros: '简单', cons: '信息不完整', selected: false },
                  { name: '图片 + 记录', pros: '信息完整', cons: '存储成本增加', selected: true }
                ],
                challenges: [
                  { problem: '检查标准不统一', solution: '提供检查表模板库' },
                  { problem: '整改拖延', solution: '自动提醒 + 超时预警' }
                ]
              }
            ]
          },
          {
            title: '合同段管理模块',
            icon: '📋',
            business: '支持合同段信息录入、编辑、查询、归档，包含合同详情、工程量清单、变更管理等完整功能。',
            tech: ['React', 'Ant Design', 'Excel', '版本控制'],
            futurePlans: [
              '引入智能合同比对，自动识别变更条款',
              '区块链存证合同文本，防止篡改'
            ],
            approach: [
              {
                title: '合同文档管理',
                detail: '实现合同的创建、编辑、审批、归档全流程管理。',
                requirement: '合同是工程结算依据，需要严格的审批流程和版本控制。',
                implementation: '1. 合同信息结构化录入（合同号、甲方乙方、金额、工期等）；2. 支持 PDF/Word 合同文本上传；3. 审批流程自定义；4. 合同版本管理和变更记录。',
                tech: ['文档管理', '工作流', '版本控制'],
                selectionReason: '结构化数据便于统计，文档存储便于审计。',
                alternatives: [
                  { name: '纯纸质合同', pros: '传统习惯', cons: '管理困难', selected: false },
                  { name: '电子合同系统', pros: '便于管理', cons: '需要电子签章', selected: true }
                ],
                challenges: [
                  { problem: '合同文本搜索', solution: 'OCR 识别 + 全文索引' },
                  { problem: '大文件预览', solution: '服务端转 PDF 在线预览' }
                ]
              },
              {
                title: '工程量清单管理',
                detail: '实现工程量清单的录入、导入、变更和结算功能。',
                requirement: '工程量清单是造价核算基础，需要支持 Excel 导入和变更管理。',
                implementation: '1. 支持 Excel 模板导入工程量清单；2. 清单项与定额库关联；3. 变更申请-审批-执行流程；4. 变更后重新计算总价。',
                tech: ['Excel 解析', '表单联动', '计算引擎'],
                selectionReason: 'Excel 是工程行业标准交换格式，导入导出必须支持。',
                alternatives: [
                  { name: '手动逐项录入', pros: '精确控制', cons: '效率低', selected: false },
                  { name: 'Excel 导入', pros: '效率高', cons: '格式校验复杂', selected: true }
                ],
                challenges: [
                  { problem: 'Excel 格式不统一', solution: '提供标准模板 + 格式校验' },
                  { problem: '变更累计计算', solution: '版本差量计算算法' }
                ]
              }
            ]
          },
          {
            title: '图片管理功能',
            icon: '🖼️',
            business: '基于阿里云 OSS 实现图片上传、下载、预览、删除等操作，集成压缩、格式转换、水印等处理功能。',
            tech: ['阿里云 OSS', 'Canvas', '图片压缩', '水印'],
            futurePlans: [
              '引入 CDN 加速图片访问',
              'AI 辅助图片分类和标签自动识别'
            ],
            approach: [
              {
                title: 'OSS 文件上传',
                detail: '实现大文件分片上传、进度显示、断点续传。',
                requirement: '工程现场图片量大（单项目可达 GB 级），需要可靠的上传机制。',
                implementation: '1. 前端直传 OSS，使用签名 URL 避免密钥暴露；2. 分片上传支持 100MB+ 文件；3. 进度条实时显示上传进度；4. 网络中断后断点续传。',
                tech: ['OSS SDK', '分片上传', '断点续传'],
                selectionReason: '阿里云 OSS SDK 封装完善，直传减少服务端压力。',
                alternatives: [
                  { name: '服务端转发', pros: '简单', cons: '浪费带宽', selected: false },
                  { name: '前端直传 OSS', pros: '性能好，安全性高', cons: '需要签名服务', selected: true }
                ],
                challenges: [
                  { problem: '上传失败重试', solution: '自动重试 + 手动续传' },
                  { problem: '大图加载慢', solution: '缩略图 + 懒加载' }
                ]
              },
              {
                title: '图片处理服务',
                detail: '实现图片压缩、格式转换、水印添加等处理功能。',
                requirement: '原始图片占用空间大，需要压缩和水印处理后存储。',
                implementation: '1. 使用 Canvas 在前端进行图片压缩；2. 支持 JPEG/PNG/WebP 格式转换；3. 水印合成（文字水印 + 图片水印）；4. 处理完成后上传 OSS。',
                tech: ['Canvas', '图片压缩', '水印合成'],
                selectionReason: '前端处理减少服务器压力，用户可即时预览效果。',
                alternatives: [
                  { name: '服务端处理', pros: '处理能力强', cons: '增加服务器负载', selected: false },
                  { name: '前端处理', pros: '即时预览，减少带宽', cons: '移动端性能有限', selected: true }
                ],
                challenges: [
                  { problem: '移动端性能', solution: 'Web Worker 后台处理' },
                  { problem: '水印被去除', solution: '多重水印 + 不可见水印' }
                ]
              },
              {
                title: '图片访问控制',
                detail: '实现基于 Token 的图片访问权限控制和防盗链。',
                requirement: '工程图片涉及敏感信息，需要限制未授权访问。',
                implementation: '1. 图片 URL 设置过期时间；2. Referer 防盗链配置；3. 私有 bucket + 签名 URL 访问；4. 图片访问日志记录。',
                tech: ['OSS 权限', '签名 URL', 'Referer 白名单'],
                selectionReason: 'OSS 原生支持多种权限控制方案，无需额外开发。',
                alternatives: [
                  { name: '公开访问', pros: '简单', cons: '无安全性', selected: false },
                  { name: '私有 + 签名', pros: '安全可控', cons: '增加复杂度', selected: true }
                ],
                challenges: [
                  { problem: '签名服务压力', solution: '签名 URL 缓存 + 预生成' },
                  { problem: '外部分享需求', solution: '限时公开链接功能' }
                ]
              }
            ]
          },
          {
            title: '系统通用模块',
            icon: '🔧',
            business: '数据可视化、工作流引擎、日志管理、系统设置等企业级通用功能。',
            tech: ['ECharts', 'Bpmn.js', 'ELK', '加密'],
            futurePlans: [
              '引入低代码平台，简化表单和流程配置',
              '实现智能数据分析，自动生成管理报表'
            ],
            approach: [
              {
                title: '数据可视化平台',
                detail: '构建统一的数据可视化平台，支持工程数据统计图表展示和数据导出。',
                requirement: '管理者需要多维度的数据统计和灵活的报表导出。',
                implementation: '1. 设计可视化组件库（柱状图、饼图、折线图、地图等）；2. 支持自定义图表配置；3. 数据导出为 Excel/PDF；4. 仪表盘自定义布局。',
                tech: ['ECharts', '数据导出', '仪表盘'],
                selectionReason: 'ECharts 图表类型丰富，支持定制和导出。',
                alternatives: [
                  { name: '纯表格展示', pros: '数据精确', cons: '不直观', selected: false },
                  { name: 'ECharts 可视化', pros: '直观美观', cons: '需要设计规范', selected: true }
                ],
                challenges: [
                  { problem: '数据量大时卡顿', solution: '数据采样 + 分页加载' },
                  { problem: '导出格式不一致', solution: '统一导出服务' }
                ]
              },
              {
                title: '工作流引擎',
                detail: '基于 bpmn-js 实现工程审批流程的自定义与管理。',
                requirement: '工程管理涉及多级审批，需要可视化的流程设计器。',
                implementation: '1. 使用 bpmn-js 渲染流程图；2. 支持审批节点、网关、事件的配置；3. 流程版本管理和切换；4. 审批历史记录和跟踪。',
                tech: ['bpmn-js', '流程设计', '审批流'],
                selectionReason: 'bpmn-js 是 BPMN 2.0 标准实现，业界认可度高。',
                alternatives: [
                  { name: '硬编码流程', pros: '实现简单', cons: '不灵活', selected: false },
                  { name: 'bpmn-js', pros: '标准可视化', cons: '学习成本', selected: true }
                ],
                challenges: [
                  { problem: '复杂条件表达式', solution: '提供可视化条件配置' },
                  { problem: '流程性能', solution: '流程缓存 + 懒加载' }
                ]
              },
              {
                title: '日志管理与安全',
                detail: '实现系统操作日志、异常日志的记录、查询、导出和安全措施。',
                requirement: '政务系统需要完整的操作审计和安全防护。',
                implementation: '1. AOP 切面记录所有操作日志；2. 统一异常处理和堆栈记录；3. 日志分词搜索和条件筛选；4. 日志导出为 Excel；5. 数据加密传输和敏感信息脱敏。',
                tech: ['AOP', 'ELK', 'RSA', 'SQL 注入防护'],
                selectionReason: 'AOP 解耦日志逻辑，ELK 提供强大的日志检索能力。',
                alternatives: [
                  { name: '手动日志', pros: '简单', cons: '遗漏多', selected: false },
                  { name: 'AOP 自动日志', pros: '完整，可追溯', cons: '需要切面支持', selected: true }
                ],
                challenges: [
                  { problem: '日志量大', solution: '日志分级 + 定期归档' },
                  { problem: '敏感信息泄露', solution: '脱敏规则 + 权限控制' }
                ]
              }
            ]
          }
        ],
        approach: [
          { title: '组件化架构设计', detail: '基于 Ant Design Pro 框架，采用区块化开发模式，提升开发效率和代码复用性。' },
          { title: '权限体系构建', detail: '设计个人/岗位/应用/用户四层权限体系，实现精细化的按钮级权限控制。' },
          { title: '工程业务建模', detail: '深入理解工程管理业务逻辑，设计贴合行业习惯的数据模型和流程。' },
          { title: '企业级稳定性', detail: '前后端双重校验、表单防抖、请求重试等机制保障系统稳定运行。' }
        ],
        futurePlans: [
          '引入 BIM 三维可视化，实现工程数据的沉浸式展示',
          '建设移动端 App，支撑现场巡检和即时审批场景',
          '探索 AI 辅助决策，智能分析工程数据异常和风险预警'
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
