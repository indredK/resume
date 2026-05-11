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
        { id: 'sol-ws-arch', name: 'WebSocket 架构设计', level: 85, link: '' },
        { id: 'sol-sse', name: 'SSE 推送方案', level: 80, link: '' },
        { id: 'sol-longpolling', name: '长轮询优化', level: 75, link: '' },
        { id: 'sol-msghub', name: '消息中心架构', level: 82, link: '' }
      ]
    },
    {
      id: 'sol-sdk',
      name: 'SDK 设计与封装',
      icon: '📦',
      children: [
        { id: 'sol-sdk-arch', name: 'SDK 架构设计', level: 80, link: '' },
        { id: 'sol-sdk-version', name: '多版本兼容策略', level: 78, link: '' },
        { id: 'sol-sdk-aop', name: 'AOP 拦截机制', level: 75, link: '' },
        { id: 'sol-sdk-chain', name: '链式调用设计', level: 82, link: '' }
      ]
    },
    {
      id: 'sol-perf',
      name: '性能优化方案',
      icon: '⚡',
      children: [
        { id: 'sol-bundle', name: '前端打包优化', level: 85, link: '' },
        { id: 'sol-code-split', name: '代码分割策略', level: 82, link: '' },
        { id: 'sol-caching', name: '多级缓存设计', level: 80, link: '' },
        { id: 'sol-ssr', name: 'SSR/SSG 方案', level: 78, link: '' }
      ]
    },
    {
      id: 'sol-micro',
      name: '微服务架构',
      icon: '🏗️',
      children: [
        { id: 'sol-service-mesh', name: '服务网格设计', level: 75, link: '' },
        { id: 'sol-api-gateway', name: 'API Gateway 架构', level: 80, link: '' },
        { id: 'sol-dist-trans', name: '分布式事务', level: 72, link: '' },
        { id: 'sol-circuit', name: '熔断降级策略', level: 78, link: '' }
      ]
    },
    {
      id: 'sol-data',
      name: '数据架构',
      icon: '🗄️',
      children: [
        { id: 'sol-datalake', name: '数据湖设计', level: 70, link: '' },
        { id: 'sol-etl', name: 'ETL 流程设计', level: 75, link: '' },
        { id: 'sol-analytics', name: '实时数据分析', level: 72, link: '' },
        { id: 'sol-backup', name: '数据备份策略', level: 80, link: '' }
      ]
    },
    {
      id: 'sol-sec',
      name: '安全解决方案',
      icon: '🔒',
      children: [
        { id: 'sol-auth', name: '认证授权设计', level: 82, link: '' },
        { id: 'sol-oauth', name: 'OAuth2.0 实现', level: 80, link: '' },
        { id: 'sol-jwt', name: 'JWT 安全策略', level: 78, link: '' },
        { id: 'sol-encrypt', name: '数据加密方案', level: 75, link: '' }
      ]
    }
  ]
}
