import type { SkillNode } from './types'

export const solutionSkills: SkillNode = {
  id: 'solutions',
  name: '解决方案',
  icon: '💡',
  color: '#f59e0b',
  children: [
    {
      id: 'sol-realtime',
      name: '实时通信架构',
      icon: '🔄',
      children: [
        {
          id: 'sol-ws-arch',
          name: 'WebSocket 架构设计',
          level: 85,
          officialLink: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
          reason: 'WebSocket 提供了全双工通信能力,是实时应用的基础,适合聊天、协作、游戏等需要即时响应的场景。',
          advantages: [
            '全双工通信,服务端可主动推送',
            '基于 TCP,传输可靠',
            '协议头部小,开销低',
            '单连接持续通信,无 HTTP 握手开销',
            '广泛支持,所有现代浏览器兼容'
          ],
          disadvantages: [
            '需要维护长连接,服务端资源消耗',
            '负载均衡需要 sticky session 支持',
            '自动重连需要自行处理',
            '二进制数据支持不如 WebSocket API 原生'
          ]
        },
        {
          id: 'sol-sse',
          name: 'SSE 推送方案',
          level: 80,
          officialLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',
          reason: 'SSE 是轻量级的服务器推送方案,基于 HTTP,简单易用,适合只需要服务端推送的简单场景。',
          advantages: [
            '基于 HTTP,无需特殊协议',
            '自动重连机制内置',
            '兼容 HTTP/2 多路复用',
            '实现简单,调试方便',
            '跨域支持好'
          ],
          disadvantages: [
            '仅支持服务端到客户端单向通信',
            '浏览器兼容不如 WebSocket',
            '最大连接数浏览器限制',
            '二进制数据支持有限'
          ]
        },
        {
          id: 'sol-longpolling',
          name: '长轮询优化',
          level: 75,
          reason: '长轮询是 HTTP 时代的实时方案,兼容性好,适合作为 WebSocket 的降级方案或低频更新场景。',
          advantages: [
            '基于 HTTP,兼容所有网络环境',
            '无需维护 WebSocket 连接',
            '可穿透大多数防火墙和代理',
            '实现简单,老项目易接入',
            '适合低频更新场景'
          ],
          disadvantages: [
            '实时性差,延迟取决于轮询间隔',
            'HTTP 头部开销大',
            '服务端资源消耗高',
            '浪费带宽和服务器资源'
          ]
        },
        {
          id: 'sol-msghub',
          name: '消息中心架构',
          level: 82,
          officialLink: 'https://redis.io/docs/interact/pubsub/',
          reason: '消息中心是分布式实时系统的核心,解耦生产者和消费者,支持消息持久化和多协议接入,是高并发实时系统的必备组件。',
          advantages: [
            '生产者和消费者解耦',
            '支持消息持久化和追回',
            '多协议适配(WebSocket/MQTT/AMQP)',
            '水平扩展能力强',
            '流量削峰和异步处理',
            '支持消息过滤和路由'
          ],
          disadvantages: [
            '增加系统复杂度',
            '消息顺序性难以保证',
            '需要处理消息幂等',
            '运维成本增加'
          ]
        }
      ]
    },
    {
      id: 'sol-sdk',
      name: 'SDK 设计与封装',
      icon: '📦',
      children: [
        {
          id: 'sol-sdk-arch',
          name: 'SDK 架构设计',
          level: 80,
          reason: '优秀的 SDK 架构能隐藏技术细节,提供友好的 API,让使用者专注于业务,是技术产品化的关键。',
          advantages: [
            '抽象底层细节,简化使用',
            '提供一致的 API 风格',
            '便于版本管理和升级',
            '支持多语言实现',
            '方便做 A/B 测试和功能开关'
          ],
          disadvantages: [
            '前期设计成本高',
            '需要考虑兼容性',
            '抽象泄漏风险',
            '调试和问题排查可能更复杂'
          ]
        },
        {
          id: 'sol-sdk-version',
          name: '多版本兼容策略',
          level: 78,
          reason: '多版本兼容确保 SDK 升级平滑,让使用者有选择空间,同时保证系统的稳定性。',
          advantages: [
            '平滑升级,降低升级风险',
            '支持灰度发布',
            '兼容不同阶段的使用者',
            '便于修复线上问题',
            '支持特性开关控制'
          ],
          disadvantages: [
            '维护成本增加',
            '代码复杂度上升',
            '测试工作量翻倍',
            '文档和维护负担重'
          ]
        },
        {
          id: 'sol-sdk-aop',
          name: 'AOP 拦截机制',
          level: 75,
          reason: 'AOP 能在不修改业务代码的情况下添加日志、监控、重试等横切关注点,是 SDK 扩展的利器。',
          advantages: [
            '业务代码和横切逻辑分离',
            '便于添加日志和监控',
            '支持自动重试和熔断',
            '增强代码可读性',
            '插件化扩展能力'
          ],
          disadvantages: [
            '调试困难,堆栈不直观',
            '切面过多导致性能损耗',
            '学习曲线陡峭',
            '可能隐藏关键业务逻辑'
          ]
        },
        {
          id: 'sol-sdk-chain',
          name: '链式调用设计',
          level: 82,
          reason: '链式调用提供流畅的 API 体验,让代码更简洁易读,是现代 SDK 的标志性设计。',
          advantages: [
            'API 调用简洁流畅',
            '代码可读性高',
            'IDE 自动补全友好',
            '减少中间变量',
            '提升开发体验'
          ],
          disadvantages: [
            '不适合复杂参数场景',
            '错误处理可能不直观',
            '调试时难以查看中间状态',
            '返回 this 类型定义复杂'
          ]
        }
      ]
    },
    {
      id: 'sol-perf',
      name: '性能优化方案',
      icon: '⚡',
      children: [
        {
          id: 'sol-bundle',
          name: '前端打包优化',
          level: 85,
          reason: '打包优化能显著减小产物体积,加快加载速度,是前端性能优化的基础,直接影响用户体验和 SEO。',
          advantages: [
            '减小 bundle size',
            '加快首屏加载',
            'Tree shaking 去除死代码',
            'Code splitting 按需加载',
            '压缩和混淆提升安全',
            'SourceMap 便于调试'
          ],
          disadvantages: [
            '配置复杂,学习成本高',
            '构建时间可能增加',
            '调试需要 SourceMap',
            '缓存策略需要精心设计'
          ]
        },
        {
          id: 'sol-code-split',
          name: '代码分割策略',
          level: 82,
          reason: '代码分割让应用按需加载,减少首屏体积,配合懒加载能大幅提升页面响应速度。',
          advantages: [
            '首屏加载更快',
            '减少内存占用',
            '提升用户体验',
            '支持路由级分割',
            '组件级懒加载',
            '并行加载优化'
          ],
          disadvantages: [
            '增加网络请求数',
            '分割策略需要规划',
            '可能导致布局抖动',
            '缓存命中率需要优化'
          ]
        },
        {
          id: 'sol-caching',
          name: '多级缓存设计',
          level: 80,
          reason: '多级缓存是高性能系统的核心,从 CDN 到浏览器,从内存到磁盘,层层缓存能抗住高并发。',
          advantages: [
            '抗住高并发访问',
            '降低数据库压力',
            '提升响应速度',
            '节约服务器成本',
            '支持缓存失效策略',
            '便于扩展和分层'
          ],
          disadvantages: [
            '缓存一致性问题',
            '缓存穿透和雪崩',
            '运维复杂度增加',
            '数据实时性可能受损'
          ]
        },
        {
          id: 'sol-ssr',
          name: 'SSR/SSG 方案',
          level: 78,
          officialLink: 'https://nuxt.com',
          repo: 'nuxt/nuxt',
          version: 'v3.15.4',
          reason: 'SSR 和 SSG 能提升首屏加载速度和 SEO 效果,是现代 Web 应用的重要优化手段。',
          advantages: [
            'SEO 友好',
            '首屏加载快',
            '用户体验更好',
            '社交分享预览',
            '内容预渲染',
            '减少客户端负担'
          ],
          disadvantages: [
            '服务端复杂度增加',
            '运维成本上升',
            '动态内容缓存难',
            '相对困难'
          ]
        }
      ]
    },
    {
      id: 'sol-micro',
      name: '微服务架构',
      icon: '🏗️',
      children: [
        {
          id: 'sol-service-mesh',
          name: '服务网格设计',
          level: 75,
          officialLink: 'https://istio.io',
          repo: 'istio/istio',
          version: 'v1.25.0',
          reason: '服务网格将网络通信、安全、可观测性从应用层剥离,是微服务治理的未来方向,适合超大规模分布式系统。',
          advantages: [
            '网络治理与应用解耦',
            '灰度发布和流量管理',
            'mTLS 安全通信',
            '全链路追踪',
            '负载均衡策略灵活',
            '故障注入和恢复'
          ],
          disadvantages: [
            '引入额外复杂度',
            '性能开销(约 10-15%)',
            '学习曲线陡峭',
            '运维成本显著增加'
          ]
        },
        {
          id: 'sol-api-gateway',
          name: 'API Gateway 架构',
          level: 80,
          officialLink: 'https://konghq.com',
          repo: 'Kong/kong',
          version: 'v3.10.0',
          reason: 'API Gateway 是微服务的统一入口,负责路由、认证、限流、监控,是微服务架构的核心组件。',
          advantages: [
            '统一入口,简化客户端',
            '认证授权集中管理',
            '限流熔断保护后端',
            '协议转换和聚合',
            '请求日志和监控',
            '便于 A/B 测试'
          ],
          disadvantages: [
            '单点故障风险',
            '增加网络跳转',
            '配置复杂度高',
            '性能瓶颈可能在此'
          ]
        },
        {
          id: 'sol-dist-trans',
          name: '分布式事务',
          level: 72,
          officialLink: 'https://seata.io',
          repo: 'apache/seata',
          version: 'v2.2.0',
          reason: '分布式事务确保跨服务数据一致性,是微服务架构的难题,Saga 和 TCC 是常见的解决方案。',
          advantages: [
            '保证数据一致性',
            '支持跨服务操作',
            '补偿机制完善',
            '适合长事务场景',
            'Saga 模式性能好'
          ],
          disadvantages: [
            '实现复杂度高',
            '性能损耗较大',
            '需要配套的监控',
            '补偿逻辑可能不一致',
            '调试和排查困难'
          ]
        },
        {
          id: 'sol-circuit',
          name: '熔断降级策略',
          level: 78,
          officialLink: 'https://resilience4j.com',
          repo: 'resilience4j/resilience4j',
          version: 'v2.3.0',
          reason: '熔断降级是保护系统的最后防线,防止级联故障扩散,提升系统整体可用性。',
          advantages: [
            '防止级联故障',
            '保护下游服务',
            '快速失败快速恢复',
            '降级服务有保底',
            '提升系统可用性',
            '便于监控和告警'
          ],
          disadvantages: [
            '增加系统复杂度',
            '降级逻辑需要设计',
            '可能影响用户体验',
            '阈值配置需要经验'
          ]
        }
      ]
    },
    {
      id: 'sol-data',
      name: '数据架构',
      icon: '🗄️',
      children: [
        {
          id: 'sol-datalake',
          name: '数据湖设计',
          level: 70,
          officialLink: 'https://lakefs.io',
          repo: 'treeverse/lakeFS',
          version: 'v0.116.0',
          reason: '数据湖支持海量多格式数据存储,是企业数据资产化的基础,适合大数据分析和机器学习场景。',
          advantages: [
            '存储任意格式数据',
            '成本低廉,扩展性强',
            '支持流批一体',
            'Schema 事后定义',
            '适合大数据分析',
            '机器学习数据源'
          ],
          disadvantages: [
            '数据质量难以保证',
            '查询性能不稳定',
            '元数据管理复杂',
            '安全合规挑战大'
          ]
        },
        {
          id: 'sol-etl',
          name: 'ETL 流程设计',
          level: 75,
          officialLink: 'https://airbyte.com',
          repo: 'airbytehq/airbyte',
          version: 'v1.10.0',
          reason: 'ETL 是数据工程的基础,负责数据抽取、转换、加载,是构建数据仓库和数据管道的核心流程。',
          advantages: [
            '数据集成标准化',
            '清洗和转换能力',
            '支持多数据源',
            '调度 and 依赖管理',
            '便于数据质量监控',
            '增量同步支持'
          ],
          disadvantages: [
            '实时性有限',
            '构建和维护复杂',
            '数据延迟问题',
            'Schema 变更处理难',
            '全量同步成本高'
          ]
        },
        {
          id: 'sol-analytics',
          name: '实时数据分析',
          level: 72,
          officialLink: 'https://clickhouse.com',
          repo: 'ClickHouse/ClickHouse',
          version: 'v25.2',
          reason: '实时数据分析让业务决策更快,是数字化运营的基础,OLAP 数据库和流计算框架是核心组件。',
          advantages: [
            '实时业务洞察',
            '快速响应市场',
            '支持复杂查询',
            '聚合计算高效',
            '便于 A/B 测试分析',
            '用户行为分析'
          ],
          disadvantages: [
            '技术栈复杂',
            '数据延迟和准确性权衡',
            '存储成本高',
            '查询优化需要经验'
          ]
        },
        {
          id: 'sol-backup',
          name: '数据备份策略',
          level: 80,
          reason: '数据备份是安全的最后防线,合理的备份策略能最大限度减少数据丢失风险,是每个系统必须的保障。',
          advantages: [
            '防止数据丢失',
            '支持灾难恢复',
            '满足合规要求',
            '支持数据回溯',
            '测试环境数据源',
            '降低运维风险'
          ],
          disadvantages: [
            '增加存储成本',
            '备份和恢复需要测试',
            '大量数据备份时间长',
            '跨地域备份复杂'
          ]
        }
      ]
    },
    {
      id: 'sol-sec',
      name: '安全解决方案',
      icon: '🔒',
      children: [
        {
          id: 'sol-auth',
          name: '认证授权设计',
          level: 82,
          reason: '认证授权是系统安全的大门,合理的权限设计既保障安全又不过度复杂,是企业级应用的基础。',
          advantages: [
            '保护用户数据',
            '资源访问受控',
            '支持细粒度权限',
            '便于审计追溯',
            '角色管理简化',
            'SSO 单点登录'
          ],
          disadvantages: [
            '设计复杂度高',
            '性能略有损耗',
            '用户体验可能受影响',
            '权限蔓延风险'
          ]
        },
        {
          id: 'sol-oauth',
          name: 'OAuth2.0 实现',
          level: 80,
          officialLink: 'https://oauth.net/2/',
          reason: 'OAuth2.0 是互联网授权的标准协议,让第三方应用安全访问用户资源,是开放平台的基础。',
          advantages: [
            '开放授权标准',
            '避免密码泄露',
            '支持多种授权模式',
            'Token 可撤回',
            '细粒度权限控制',
            '广泛采用,生态成熟'
          ],
          disadvantages: [
            '协议复杂,容易实现错误',
            'Token 管理 and 刷新复杂',
            'CSRF 攻击风险',
            'OAuth 陷阱需防范'
          ]
        },
        {
          id: 'sol-jwt',
          name: 'JWT 安全策略',
          level: 78,
          officialLink: 'https://jwt.io',
          repo: 'auth0/node-jsonwebtoken',
          version: 'v9.0.2',
          reason: 'JWT 是无状态认证的常用方案,适合分布式系统和微服务,能有效减少 session 存储压力。',
          advantages: [
            '无状态,扩展性强',
            '跨域认证简单',
            '减少服务端存储',
            'JSON 格式,便于解析',
            '适合移动端',
            '支持签名验证'
          ],
          disadvantages: [
            'Token 一旦签发难以撤销',
            'Payload 信息有限',
            'Token 体积较大',
            '需要 HTTPS 传输',
            '续期策略复杂'
          ]
        },
        {
          id: 'sol-encrypt',
          name: '数据加密方案',
          level: 75,
          reason: '数据加密是保护敏感信息的最后防线,从传输加密到存储加密,是安全合规的必备要求。',
          advantages: [
            '保护敏感数据',
            '满足合规要求',
            '防止数据泄露',
            '传输过程安全',
            '密钥轮换支持',
            '审计和追溯'
          ],
          disadvantages: [
            '性能开销',
            '密钥管理复杂',
            '增加系统复杂度',
            '可能影响查询效率'
          ]
        }
      ]
    }
  ]
}
