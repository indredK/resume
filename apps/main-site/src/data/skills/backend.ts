import type { SkillNode } from '../types'

export default {
  id: 'backend',
  name: '后端技术',
  icon: '🔧',
  color: '#38bdf8',
  children: [
    {
      id: 'be-language',
      name: '主要语言',
      children: [
        {
          id: 'nodejs',
          name: 'Node.js',
          level: 88,
          officialLink: 'https://nodejs.org',
          version: 'v26.0.0',
          reason: 'Node.js 基于 V8 引擎,事件驱动和非阻塞 I/O 模型使其轻量高效,适合 I/O 密集型微服务,生态丰富,NPM 包全球最多。',
          advantages: [
            '事件驱动、非阻塞 I/O,高并发处理能力强',
            'JavaScript 全栈统一,前后端协作顺畅',
            'NPM 生态全球最大,轮子多',
            'JSON 处理自然,适合 RESTful API',
            '活跃社区,文档完善',
            '适合微服务架构,部署简单'
          ],
          disadvantages: [
            '单线程,CPU 密集型任务处理不如多线程语言',
            '回调地狱问题(虽有 async/await 改善)',
            '相较于 Java/Go,大型企业级应用经验较少'
          ]
        },
        {
          id: 'python',
          name: 'Python',
          level: 85,
          officialLink: 'https://python.org',
          version: 'v3.14.5',
          reason: 'Python 语言简洁优雅,库生态丰富,从 Web 开发到 AI/ML 都能胜任,是全栈工程师的多面手语言。',
          advantages: [
            '语法简洁,开发效率高',
            '库生态极其丰富(AI/ML/数据科学生态最强)',
            '胶水语言,可与其他语言无缝集成',
            '框架选择多样(Django/Flask/FastAPI)',
            '社区活跃,文档完善',
            '适合快速原型开发'
          ],
          disadvantages: [
            'GIL 限制,多线程性能受限',
            '运行速度较慢,不适合高性能场景',
            '移动端开发能力弱',
            '类型提示不够强制,大型项目维护成本高'
          ]
        },
        {
          id: 'java',
          name: 'Java',
          level: 80,
          officialLink: 'https://java.com',
          version: 'JDK 24',
          reason: 'Java 是企业级后端开发的主力语言,JVM 生态成熟,跨平台能力强,Spring 框架生态完善,适合构建大型分布式系统。',
          advantages: [
            'JVM 生态成熟,性能优秀',
            '强类型系统,大型项目可维护性强',
            'Spring 框架生态完善,企业级解决方案丰富',
            '跨平台能力强(Write Once, Run Anywhere)',
            '社区成熟,招聘市场大',
            '完善的工具链和IDE支持'
          ],
          disadvantages: [
            '语法相对冗长,开发效率不如动态语言',
            '启动速度较慢',
            '内存占用相对较高',
            '学习曲线较陡'
          ]
        },
        {
          id: 'go',
          name: 'Go',
          level: 78,
          officialLink: 'https://go.dev',
          repo: 'golang/go',
          version: 'v1.26.1',
          reason: 'Go 语言由 Google 打造,静态类型但语法简洁,原生并发支持(goroutine)使其在微服务和云原生领域大放异彩,是现代后端开发的新星。',
          advantages: [
            '语法简洁,学习曲线平缓',
            'Goroutine 天生并发,性能优秀',
            '静态类型+编译快速,适合微服务',
            '标准库完善,工具链成熟',
            'Docker/Kubernetes 等云原生基础设施均用 Go 编写',
            '部署简单,二进制文件直接运行'
          ],
          disadvantages: [
            '错误处理冗长(if err != nil)',
            '泛型支持较晚(1.18才引入),生态相对年轻',
            'GUI 框架生态薄弱',
            '动态特性少,灵活性不如 Python'
          ]
        },
        {
          id: 'rust',
          name: 'Rust',
          level: 65,
          officialLink: 'https://rust-lang.org',
          version: 'v1.95.0',
          reason: 'Rust 提供内存安全保证而无需 GC,性能媲美 C++,适合系统级编程和高性能场景,是编写高效可靠软件的首选。',
          advantages: [
            '内存安全(借用检查器),无 GC 停顿',
            '性能极致,媲美 C++',
            '现代语言特性(模式匹配/闭包/迭代器)',
            '优秀的错误处理机制',
            '包管理器 Cargo 体验极好',
            'WebAssembly 原生支持'
          ],
          disadvantages: [
            '学习曲线陡峭,所有权概念需要适应',
            '编译时间长',
            '社区相对较小,库生态不如 Java/Go 丰富',
            '开发效率在快速迭代场景不如动态语言'
          ]
        },
        {
          id: 'c-sharp',
          name: 'C#',
          level: 85,
          officialLink: 'https://dotnet.microsoft.com',
          version: 'C# 13',
          reason: 'C# 是微软打造的现代编程语言,.NET 生态成熟,从桌面到 Web 再到游戏开发都能胜任,跨平台能力通过 .NET Core 已大幅提升。',
          advantages: [
            '语言设计现代,协程/异步编程支持好',
            '.NET 生态成熟,企业级应用经验丰富',
            'LINQ 提供强大的数据查询能力',
            'Visual Studio IDE 支持极佳',
            '跨平台能力通过 .NET 6+ 大幅提升',
            '游戏开发(Unity)和桌面开发都有强大支持'
          ],
          disadvantages: [
            '长期限于 Windows 生态(虽有改善)',
            '.NET 框架历史包袱较重',
            '在 Linux 服务器端生态不如 Java/Go',
            '入门门槛对新手较高'
          ]
        }
      ]
    },
    {
      id: 'be-framework',
      name: 'Web 框架',
      children: [
        {
          id: 'express',
          name: 'Express',
          level: 88,
          officialLink: 'https://expressjs.com',
          version: 'v4.21.3',
          reason: 'Express 是 Node.js 最流行的 Web 框架,简洁灵活,中间件机制强大,是构建 RESTful API 和微服务的主流选择。',
          advantages: [
            '简洁灵活,学习曲线平缓',
            '中间件机制强大,生态丰富',
            '社区成熟,遇到问题容易找到解决方案',
            '轻量级,性能优秀',
            '几乎所有 Node.js Web 框架都基于 Express 思路',
            '模板引擎和路由系统完善'
          ],
          disadvantages: [
            '只提供基础功能,大型项目需要自行组装',
            'callback 地狱风险(虽有 async/await)',
            '缺乏强类型,TypeScript 支持需要额外配置',
            '缺乏官方推崇的架构模式'
          ]
        },
        {
          id: 'fastify',
          name: 'Fastify',
          level: 82,
          officialLink: 'https://fastify.io',
          version: 'v5.4.2',
          reason: 'Fastify 是高性能 Node.js Web 框架,基于 schema 的验证、插件系统和性能优化使其成为构建高吞吐量 API 的首选。',
          advantages: [
            '性能极高,吞吐量远超 Express',
            '基于 JSON Schema 的请求验证',
            '插件系统优秀,代码复用性好',
            'TypeScript 支持良好',
            '日志功能强大(pino)',
            '钩子机制灵活'
          ],
          disadvantages: [
            '社区相对较小',
            '学习资源不如 Express 丰富',
            '某些场景下过度设计',
            '生态系统不如 Express 丰富'
          ]
        },
        {
          id: 'koa',
          name: 'Koa',
          level: 80,
          officialLink: 'https://koajs.com',
          version: 'v2.18.0',
          reason: 'Koa 由 Express 团队打造,使用 async/await 彻底解决回调地狱,更轻量更优雅,是追求现代 JavaScript 特性的开发者的首选。',
          advantages: [
            'async/await 原生支持,代码更优雅',
            'ctx上下文设计比 req/res 更简洁',
            '洋葱模型中间件,流程控制清晰',
            '代码轻量,可定制性强',
            '对 ES6+ 支持更好',
            '错误处理机制更现代'
          ],
          disadvantages: [
            '生态不如 Express 丰富',
            '缺乏官方路由,需要自行选择',
            '社区相对较小',
            '某些 Express 中间件不兼容'
          ]
        },
        {
          id: 'nestjs',
          name: 'NestJS',
          level: 85,
          officialLink: 'https://nestjs.com',
          version: 'v11.1.3',
          reason: 'NestJS 是 Node.js 的企业级框架,借鉴 Angular 的模块化设计,TypeScript 优先,适合构建大型复杂企业应用。',
          advantages: [
            '模块化架构,大型项目组织清晰',
            'TypeScript 优先,类型安全',
            '依赖注入容器,测试友好',
            '装饰器语法,声明式编程',
            '微服务支持完善',
            '与 Angular 概念相似,全栈统一'
          ],
          disadvantages: [
            '学习曲线陡峭',
            '框架较重,小型项目可能过度设计',
            '装饰器语法可能影响代码可读性',
            '升级有时候会 breaking change'
          ]
        },
        {
          id: 'django',
          name: 'Django',
          level: 78,
          officialLink: 'https://djangoproject.com',
          repo: 'django/django',
          version: 'v5.2.3',
          reason: 'Django 是 Python 全栈 Web 框架,MTV 架构、ORM、Admin 面板、认证系统开箱即用,是快速构建安全网站的 Python 首选框架。',
          advantages: [
            '全栈框架,功能完善',
            'ORM 强大,数据库迁移方便',
            'Admin 后台自动生成',
            '安全机制完善(SQL注入/XSS/CSRF防护)',
            'REST Framework 构建 API 方便',
            '文档优秀,社区成熟'
          ],
          disadvantages: [
            '框架较重,不适合微服务',
            '动态语言缺乏类型安全',
            '学习曲线较陡',
            '性能不如 FastAPI/Go'
          ]
        },
        {
          id: 'flask',
          name: 'Flask',
          level: 75,
          officialLink: 'https://flask.palletsprojects.com',
          version: 'v3.1.0',
          reason: 'Flask 是 Python 的轻量级微框架,核心简单但扩展丰富,适合构建小型服务和 API,是 Python Web 开发的另一主流选择。',
          advantages: [
            '轻量级,核心简单',
            '灵活,可以根据需求选择扩展',
            '适合微服务架构',
            '调试方便',
            ' Jinja2 模板引擎强大',
            '社区活跃,扩展丰富'
          ],
          disadvantages: [
            '缺乏 Django 的开箱即用功能',
            '大型项目需要自己组织结构',
            '异步支持不如 FastAPI',
            '安全性需要额外配置'
          ]
        },
        {
          id: 'fastapi',
          name: 'FastAPI',
          level: 85,
          officialLink: 'https://fastapi.tiangolo.com',
          repo: 'tiangolo/fastapi',
          version: 'v0.115.0',
          reason: 'FastAPI 是现代 Python Web 框架,基于标准 Python 类型提示,具备极高性能、自动生成 API 文档和异步支持,是构建高效后端服务的理想选择。',
          advantages: [
            '性能极高,媲美 Node.js 和 Go',
            '基于标准 Python 类型提示,开发效率高',
            '自动生成交互式 API 文档 (Swagger/Redoc)',
            '原生支持异步 (async/await)',
            '依赖注入系统简洁强大',
            '减少 40% 的代码错误'
          ],
          disadvantages: [
            '相对年轻,生态不如 Django/Flask 丰富',
            '对 Pydantic 的强依赖可能导致学习成本',
            '在非异步场景下性能优势不明显'
          ]
        },
        {
          id: 'springboot',
          name: 'Spring Boot',
          level: 75,
          officialLink: 'https://spring.io/projects/spring-boot',
          repo: 'spring-projects/spring-boot',
          version: 'v3.5.0',
          reason: 'Spring Boot 是 Java 企业级应用的标配,自动配置大幅简化开发,生态完善,是构建微服务 and 分布式系统的工业级选择。',
          advantages: [
            '自动配置,开发效率高',
            '生态完善,各种 starter 即插即用',
            '事务管理、AOP 等企业特性完善',
            '微服务生态(Spring Cloud)成熟',
            '社区成熟,文档完善',
            '易于测试'
          ],
          disadvantages: [
            '框架较重,启动慢',
            '配置相对复杂',
            '学习曲线陡峭',
            'annotation 过多可能影响可读性'
          ]
        }
      ]
    },
    {
      id: 'be-api',
      name: 'API 设计',
      children: [
        {
          id: 'rest',
          name: 'RESTful API',
          level: 90,
          officialLink: 'https://restfulapi.net',
          version: 'REST',
          reason: 'REST 是 Web API 设计的事实标准,基于 HTTP 协议,资源导向,简单易用,是构建 Web API 的主流选择。',
          advantages: [
            '基于 HTTP/HTTPS,广泛支持',
            '无状态设计,易于扩展',
            '资源导向,语义清晰',
            '缓存支持好',
            'URI 路径直观',
            '易于测试和文档化'
          ],
          disadvantages: [
            '缺乏正式标准,容易设计不一致',
            '对于复杂查询参数可能过长',
            '不支持服务端推送',
            '版本管理需要额外策略'
          ]
        },
        {
          id: 'graphql',
          name: 'GraphQL',
          level: 80,
          officialLink: 'https://graphql.org',
          version: 'GraphQL 16.0',
          reason: 'GraphQL 允许客户端精确指定需要的数据,避免过度获取,是移动端和复杂前端需求的理想选择。',
          advantages: [
            '精确获取需要的数据,减少网络传输',
            '类型系统,契约式 API',
            '单一端点,版本控制简单',
            '前端决定数据结构',
            '自描述 schema,易于探索',
            '订阅功能支持实时数据'
          ],
          disadvantages: [
            '复杂查询可能带来性能问题',
            '文件上传等场景支持不如 REST',
            '缓存实现比 REST 复杂',
            '学习曲线较陡',
            '错误处理方式不同'
          ]
        },
        {
          id: 'grpc',
          name: 'gRPC',
          level: 72,
          officialLink: 'https://grpc.io',
          version: 'v1.72.2',
          reason: 'gRPC 使用 Protocol Buffers 高效序列化,HTTP/2 原生支持,是微服务间高效通信的首选,特别适合低延迟场景。',
          advantages: [
            'Protocol Buffers 序列化效率高',
            'HTTP/2 支持多路复用',
            '代码生成,类型安全',
            '双向流支持',
            '适用于微服务内部通信',
            '跨语言支持好'
          ],
          disadvantages: [
            '浏览器直接支持有限(需要 grpc-web)',
            '二进制格式调试困难',
            '社区和文档相对较少',
            '不适合公开 API',
            '学习曲线相对较陡'
          ]
        },
        {
          id: 'websocket',
          name: 'WebSocket',
          level: 85,
          officialLink: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
          version: 'RFC 6455',
          reason: 'WebSocket 提供全双工通信通道,是实时应用(聊天、游戏、金融行情)的核心技术,连接建立后无需轮询。',
          advantages: [
            '全双工通信,服务端可主动推送',
            '基于 TCP,可靠传输',
            '连接建立后无 HTTP 握手开销',
            '协议头部小,开销低',
            '广泛浏览器支持',
            '适合实时应用'
          ],
          disadvantages: [
            '需要维护长连接,服务端资源消耗',
            '负载均衡需要 sticky session',
            '自动重连需要自行处理',
            '二进制数据处理不如 WebSocket API 原生',
            '调试相对困难'
          ]
        }
      ]
    },
    {
      id: 'be-msg',
      name: '消息队列',
      children: [
        {
          id: 'rabbitmq',
          name: 'RabbitMQ',
          level: 80,
          officialLink: 'https://rabbitmq.com',
          version: 'v3.14.0',
          reason: 'RabbitMQ 是最流行的开源消息代理之一,支持多种消息协议,路由功能强大,适合构建异步任务和事件驱动架构。',
          advantages: [
            '支持多种消息协议(AMQP/MQTT/STOMP)',
            '路由功能强大(exchange 类型丰富)',
            '管理界面友好',
            '社区成熟,文档完善',
            '集群和故障转移支持好',
            '插件生态丰富'
          ],
          disadvantages: [
            'Erlang 语言,问题排查困难',
            '性能不如 Kafka',
            '消息持久化配置复杂',
            '集群模式下管理复杂'
          ]
        },
        {
          id: 'kafka',
          name: 'Kafka',
          level: 78,
          officialLink: 'https://kafka.apache.org',
          version: 'v3.9.0',
          reason: 'Kafka 设计用于高吞吐量日志处理场景,以分区顺序日志为核心,是构建实时数据管道和流处理平台的首选。',
          advantages: [
            '超高吞吐量,适合大数据场景',
            '消息持久化到磁盘',
            '分区机制支持水平扩展',
            '消费组实现负载均衡',
            '生态系统丰富(Spark/Flink/Storm)',
            '适合事件溯源架构'
          ],
          disadvantages: [
            '配置复杂,运维成本高',
            '延迟不如 RabbitMQ',
            '消息确认机制相对复杂',
            '磁盘空间管理需要额外关注'
          ]
        },
        {
          id: 'redis-queue',
          name: 'Redis Queue',
          level: 82,
          officialLink: 'https://redis.io/docs/data-types/lists/',
          version: 'Redis 7.4',
          reason: 'Redis 不仅是高性能 KV 存储,其 List 和 Stream 数据类型可实现轻量级消息队列,适合对延迟敏感且消息量不是极大的场景。',
          advantages: [
            '内存级性能,延迟极低',
            '数据结构丰富(List/Stream/Pub-Sub)',
            '一个系统解决多问题',
            '适合轻量级任务队列',
            'Stream 提供持久化',
            '运维简单'
          ],
          disadvantages: [
            '消息堆积会占用大量内存',
            '不适合超大规模消息场景',
            '数据持久化可能丢失',
            '监控和告警不如专业 MQ'
          ]
        },
        {
          id: 'activemq',
          name: 'ActiveMQ',
          level: 70,
          officialLink: 'https://activemq.apache.org',
          version: 'v6.1.0',
          reason: 'ActiveMQ 是老牌开源消息队列,JMS 标准实现,适合 Java 企业级应用集成,但性能已落后于现代云原生方案。',
          advantages: [
            'JMS 标准实现,Java 集成方便',
            '支持多种协议',
            '集群模式完善',
            '与 Spring Boot 集成方便',
            '历史悠久,企业应用广泛',
            '支持主从复制'
          ],
          disadvantages: [
            '性能远落后于 Kafka/RocketMQ',
            '社区活跃度下降',
            '界面不够友好',
            '配置复杂',
            '逐渐被云原生方案替代'
          ]
        }
      ]
    }
  ]
}
