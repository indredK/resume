export default {
  id: 'database',
  name: '数据库',
  icon: '🗄️',
  color: '#fbbf24',
  children: [
    {
      id: 'db-relational',
      name: '关系型数据库',
      children: [
        {
          id: 'mysql',
          name: 'MySQL',
          level: 88,
          officialLink: 'https://mysql.com',
          repo: 'mysql/mysql-server',
          version: 'v9.7.0',
          reason: 'MySQL 是全球最流行的开源关系型数据库,性能优秀,生态成熟,是 Web 应用的首选数据库。',
          advantages: [
            '开源免费,社区活跃',
            '性能优秀,优化器成熟',
            '存储引擎丰富(InnoDB/MyISAM)',
            '主从复制支持完善',
            '生态工具完善',
            '支持 JSON 数据类型',
            '分库分表方案成熟'
          ],
          disadvantages: [
            '全文检索不如 PostgreSQL',
            'GIS 支持相对较弱',
            '并行查询能力有限',
            '复杂查询优化有时不稳定'
          ]
        },
        {
          id: 'postgresql',
          name: 'PostgreSQL',
          level: 85,
          officialLink: 'https://postgresql.org',
          repo: 'postgres/postgres',
          version: 'v18.3',
          reason: 'PostgreSQL 是功能最强大的开源关系型数据库,支持 JSON/JSONB、全文检索、GIS、数组类型等,学术和工程界口碑极佳。',
          advantages: [
            '功能最强大的开源 RDBMS',
            'JSON/JSONB 原生支持',
            '全文检索强大',
            'GIS 支持完善(PostGIS)',
            'MVCC 实现优秀,并发性能好',
            '自定义类型和函数支持',
            '窗口函数/CTE 语法优雅',
            '严格 SQL 标准遵循'
          ],
          disadvantages: [
            '高并发场景性能略逊于 MySQL',
            '全文检索分词器不如 Elasticsearch',
            'GIS 在超大规模数据下性能问题',
            '连接池管理不如 MySQL 成熟'
          ]
        },
        {
          id: 'mariadb',
          name: 'MariaDB',
          level: 80,
          officialLink: 'https://mariadb.org',
          repo: 'MariaDB/server',
          version: 'v11.8.0',
          reason: 'MariaDB 是 MySQL 的开源 fork,保持与 MySQL 高度兼容的同时,引入更多存储引擎和性能优化,是 MySQL 的可靠替代。',
          advantages: [
            'MySQL 完全兼容,迁移无压力',
            'Galera 集群支持好',
            'ColumnStore 列存储引擎支持',
            '开源社区驱动,无厂商锁定',
            '线程池性能优化',
            'JSON_TABLE 等现代 SQL 特性',
            'Percona XtraBackup 兼容'
          ],
          disadvantages: [
            '社区和生态不如 MySQL',
            '某些场景兼容性仍有问题',
            '某些存储引擎性能不如原生',
            '企业级功能不如 MySQL Enterprise'
          ]
        },
        {
          id: 'sqlite',
          name: 'SQLite',
          level: 85,
          officialLink: 'https://sqlite.org',
          repo: 'sqlite/sqlite',
          version: 'v3.51.1',
          reason: 'SQLite 是嵌入式关系型数据库,零配置、无服务器、跨平台,是移动端、桌面端和测试环境的首选,也是全球部署最多的数据库。',
          advantages: [
            '零配置,无服务器依赖',
            '嵌入式设计,适合移动端',
            '单文件数据库,易于分发',
            'ACID 事务支持完整',
            '性能对于中小规模数据足够',
            '跨平台,几乎所有语言都支持',
            'WAL 模式支持并发读写'
          ],
          disadvantages: [
            '并发写入性能有限',
            '不适合大规模数据 and 高并发',
            '没有用户管理和权限系统',
            '在线 ALTER TABLE 支持有限',
            '不适合需要网络访问的场景'
          ]
        }
      ]
    },
    {
      id: 'db-nosql',
      name: 'NoSQL 数据库',
      children: [
        {
          id: 'mongodb',
          name: 'MongoDB',
          level: 85,
          officialLink: 'https://mongodb.com',
          repo: 'mongodb/mongo',
          version: 'v8.0.0',
          reason: 'MongoDB 是最流行的文档型数据库,JSON 文档存储与 JavaScript 对象天然契合,灵活 schema 适合敏捷开发,是 Node.js 全栈开发的首选。',
          advantages: [
            '文档型存储,JSON 天然契合',
            'Schema 灵活,快速迭代友好',
            '水平扩展能力强(sharding)',
            '丰富的查询语言和索引支持',
            '聚合管道功能强大',
            'Geospatial 索引支持',
            'Atlas 云服务完善'
          ],
          disadvantages: [
            '事务支持相对较晚(4.0+)',
            '内存占用较大',
            '磁盘空间回收不自动',
            '关联查询不如 SQL 直观',
            'JavaScript 引擎 V8 限制'
          ]
        },
        {
          id: 'redis',
          name: 'Redis',
          level: 88,
          officialLink: 'https://redis.io',
          repo: 'redis/redis',
          version: 'Redis 7.4',
          reason: 'Redis 是高性能内存键值存储,支持字符串、哈希、列表、集合、有序集合、Stream 等数据结构,是缓存、Session、会话商店的首选。',
          advantages: [
            '内存级性能,延迟亚毫秒',
            '数据结构丰富',
            '持久化支持(RDB/AOF)',
            '主从复制和 Sentinel 故障转移',
            'Cluster 集群支持水平扩展',
            'Lua 脚本原子操作',
            'Pub/Sub 支持消息发布',
            'Stream 提供消费组支持'
          ],
          disadvantages: [
            '内存容量限制',
            '数据持久化可能丢失',
            '单线程,CPU 多核利用不足',
            '大 Key 可能造成阻塞',
            '复杂查询支持有限'
          ]
        },
        {
          id: 'cassandra',
          name: 'Cassandra',
          level: 70,
          officialLink: 'https://cassandra.apache.org',
          repo: 'apache/cassandra',
          version: 'v5.0.0',
          reason: 'Cassandra 是分布式宽列存储数据库,去中心化架构提供卓越的水平扩展能力和高可用性,是处理海量数据的 NoSQL 选择。',
          advantages: [
            '去中心化,无单点故障',
            '线性水平扩展',
            '高可用性,多数据中心支持',
            '写入性能极其优秀',
            '最终一致性可配置',
            'CQL 与 SQL 类似,学习成本低',
            '始终可写入设计'
          ],
          disadvantages: [
            '查询灵活性有限(分区键设计重要)',
            '读性能不如写性能',
            '数据模型设计复杂',
            '运维复杂,需要专业知识',
            '不支持 join 和复杂事务'
          ]
        },
        {
          id: 'dynamodb',
          name: 'DynamoDB',
          level: 72,
          officialLink: 'https://aws.amazon.com/dynamodb/',
          version: 'DynamoDB',
          reason: 'DynamoDB 是 AWS 提供的完全托管 NoSQL 数据库,提供单数字毫秒延迟,Serverless 模式按需付费,是云原生应用的高性能选择。',
          advantages: [
            '完全托管,运维零负担',
            '单数字毫秒级延迟',
            'Serverless 按需付费模式',
            '自动分片,无需容量规划',
            'DynamoDB Streams 变更数据捕获',
            'DAX 内存缓存加速',
            '全局表多区域复制'
          ],
          disadvantages: [
            '厂商锁定',
            '定价复杂,难以预估',
            '查询模式受限(分区键设计)',
            '二级索引限制多',
            '本地开发需要 Docker',
            '与开源方案相比灵活性低'
          ]
        }
      ]
    },
    {
      id: 'db-vector',
      name: '向量数据库',
      children: [
        {
          id: 'pinecone',
          name: 'Pinecone',
          level: 75,
          officialLink: 'https://pinecone.io',
          version: 'Pinecone',
          reason: 'Pinecone 是完全托管的向量数据库,简化向量嵌入的存储和检索,无需运维,是 AI 应用快速集成向量搜索的首选。',
          advantages: [
            '完全托管,零运维',
            '自动索引和缩放',
            '实时更新支持',
            '与主流 ML 框架集成',
            '支持元数据过滤',
            '延迟低,吞吐量高',
            '多租户支持'
          ],
          disadvantages: [
            '厂商锁定',
            '免费层限制严格',
            '数据量大的成本较高',
            '不支持复杂的向量操作'
          ]
        },
        {
          id: 'weaviate',
          name: 'Weaviate',
          level: 72,
          officialLink: 'https://weaviate.io',
          repo: 'weaviate/weaviate',
          version: 'v1.28.0',
          reason: 'Weaviate 是开源向量数据库,支持 GraphQL API,内置多种向量化模块,是自托管向量搜索的热门选择。',
          advantages: [
            '开源,可自托管',
            'GraphQL API 直观',
            '内置向量化模块',
            '支持混合搜索',
            '多租户支持',
            '实时索引更新',
            '云原生架构'
          ],
          disadvantages: [
            '社区相对较小',
            '文档不如大厂完善',
            '性能调优需要专业知识',
            '运维复杂度高于托管服务'
          ]
        },
        {
          id: 'chroma',
          name: 'Chroma',
          level: 78,
          officialLink: 'https://trychroma.com',
          repo: 'chroma-core/chroma',
          version: 'v0.6.0',
          reason: 'Chroma 是为 AI 应用设计的开源向量数据库,轻量级、易用、与 LLM 框架天然集成,是构建 RAG 应用的首选。',
          advantages: [
            '专为 LLM 应用设计',
            '安装使用极其简单',
            '与 LangChain/ LlamaIndex 集成好',
            '轻量级,开发友好',
            'Python-first',
            '支持多种嵌入模型',
            '免费开源'
          ],
          disadvantages: [
            '不适合大规模生产部署',
            '单节点设计,无集群',
            '数据持久化不如专业数据库',
            '高级功能有限',
            '缺乏企业级特性'
          ]
        }
      ]
    }
  ]
}
