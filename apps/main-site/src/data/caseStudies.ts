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
