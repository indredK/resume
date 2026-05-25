export default {
  id: 'frontend',
  name: '前端技术',
  icon: '⚡',
  color: '#4ade80',
  children: [
    {
      id: 'fe-framework',
      name: '框架生态',
      children: [
        {
          id: 'fe-vue',
          name: 'Vue 生态',
          level: 95,
          officialLink: 'https://vuejs.org',
          repo: 'vuejs/core',
          version: 'v3.5.34',
          reason: 'Vue3 以其出色的响应式系统和 Composition API 提供了优雅的开发体验,上手简单且生态完善,适合快速迭代的中大型项目。',
          advantages: [
            '上手简单,学习曲线平缓,文档友好',
            '响应式系统高效,性能出色',
            '单文件组件开发体验优秀',
            '生态完整,从路由到状态管理都有官方方案',
            'TypeScript 支持良好',
            '社区活跃,主题丰富'
          ],
          disadvantages: [
            '相比 React,生态圈和第三方库稍少',
            '在超大型应用中的可靠性略逊于 Angular',
            '移动端支持不如 React Native 成熟'
          ],
          children: [
            {
              id: 'vue3',
              name: 'Vue 3',
              level: 95,
              officialLink: 'https://vuejs.org',
              repo: 'vuejs/core',
              version: 'v3.5.34',
              reason: 'Vue3 是现代前端框架的标杆之作,组合式 API 让代码组织更加灵活,性能优异且易于迁移。',
              advantages: [
                'Composition API 提供更灵活的代码组织方式',
                '响应式系统基于 Proxy,性能优秀',
                'TypeScript 优先设计,类型推导准确',
                '虚拟 DOM 优化到位,渲染速度快',
                'Suspense 和 Teleport 等特性增强开发体验',
                '向下兼容好,升级平滑'
              ],
              disadvantages: [
                'Options API 仍在使用,新旧写法混杂',
                '响应式在深层对象场景有性能开销',
                '生态相比 React 稍显不足'
              ]
            },
            {
              id: 'vue2',
              name: 'Vue 2',
              level: 90,
              officialLink: 'https://v2.vuejs.org',
              repo: 'vuejs/vue',
              version: 'v2.7.18',
              reason: 'Vue2 虽然已停止维护,但仍有大量存量项目,掌握它能应对企业级老项目维护需求。',
              advantages: [
                '社区资源丰富,问题容易找到解决方案',
                '文档详尽,生态插件众多',
                '学习曲线平缓,适合新手入门',
                '上手项目多,实战经验丰富'
              ],
              disadvantages: [
                '已停止维护,不再更新',
                'TypeScript 支持不如 Vue3',
                '响应式系统基于 Object.defineProperty,有局限性'
              ]
            },
            {
              id: 'pinia',
              name: 'Pinia',
              level: 92,
              officialLink: 'https://pinia.vuejs.org',
              repo: 'vuejs/pinia',
              version: 'v3.1.0',
              reason: 'Pinia 是 Vue 官方推荐的状态管理库,比 Vuex 更轻量且对 TypeScript 支持更好,是 Vue3 项目状态管理的首选。',
              advantages: [
                'Vue 官方推荐,质量有保障',
                'API 简洁,学习成本低',
                '对 TypeScript 支持优秀',
                '模块化设计,无需手动嵌套',
                '支持持久化扩展',
                'DevTools 集成良好'
              ],
              disadvantages: [
                '小型项目可能显得过于复杂',
                '不支持自动代码分割',
                '社区插件生态不如 Vuex 成熟'
              ]
            },
            {
              id: 'vue-router',
              name: 'Vue Router',
              level: 90,
              officialLink: 'https://router.vuejs.org',
              repo: 'vuejs/router',
              version: 'v5.0.0',
              reason: 'Vue Router 是 Vue 官方的路由管理器,与 Vue 深度集成,提供声明式路由和导航守卫等功能。',
              advantages: [
                'Vue 官方出品,与 Vue 完美集成',
                '支持嵌套路由和视图组合',
                '导航守卫功能完善',
                '支持路由懒加载',
                'TypeScript 类型推导完整'
              ],
              disadvantages: [
                '大型项目路由配置可能变得复杂',
                '动态路由在某些场景下有坑',
                '无法像 React Router 那样编程式导航到任意位置'
              ]
            },
            {
              id: 'nuxt',
              name: 'Nuxt.js',
              level: 80,
              officialLink: 'https://nuxt.com',
              repo: 'nuxt/nuxt',
              version: 'v4.4.0',
              reason: 'Nuxt 是 Vue 的全栈框架,提供 SSR/SSG 等能力,让 Vue 也能轻松构建复杂应用。',
              advantages: [
                '开箱即用的 SSR/SSG 支持',
                '自动代码分割和路由预取',
                '文件约定式路由,开发高效',
                '自动导入组件和工具函数',
                '强大的模块生态',
                'SEO 友好,首屏加载快'
              ],
              disadvantages: [
                '学习曲线较陡,概念较多',
                '调试 SSR 问题相对困难',
                '构建产物较大,首屏可能慢',
                '服务端部署相对复杂'
              ]
            },
            {
              id: 'quasar',
              name: 'Quasar',
              level: 75,
              officialLink: 'https://quasar.dev',
              repo: 'quasarframework/quasar',
              version: 'v2.20.0',
              reason: 'Quasar 是强大的 Vue UI 框架,一套代码可输出 Web、移动端、桌面端,适合快速开发多端应用。',
              advantages: [
                '一套代码多端运行(Web/移动/桌面)',
                '组件丰富,开箱即用',
                '内置 Babel、Webpack 等工具链',
                'Material Design 设计风格',
                '社区活跃,持续更新'
              ],
              disadvantages: [
                'UI 风格较单一,定制化成本高',
                '移动端性能不如原生框架',
                '包体积较大',
                '与 Vue3 配合的版本稳定性待提升'
              ]
            },
            {
              id: 'naiveui',
              name: 'NaiveUI',
              level: 85,
              officialLink: 'https://naiveui.org',
              repo: 'tusen-ai/naive-ui',
              version: 'v2.42.0',
              reason: 'NaiveUI 是专为 Vue3 设计的 UI 库,使用 TypeScript 编写,主题定制灵活,适合中后台项目。',
              advantages: [
                '完全为 Vue3 设计,Composition API 友好',
                'TypeScript 编写,类型安全',
                '主题系统强大,定制化方便',
                '组件质量高,细节处理到位',
                '按需引入,打包体积小'
              ],
              disadvantages: [
                '社区相比 Element Plus 较小',
                '组件数量不如 Element Plus 丰富',
                '移动端组件支持有限'
              ]
            }
          ]
        },
        {
          id: 'fe-react',
          name: 'React 生态',
          level: 88,
          officialLink: 'https://react.dev',
          repo: 'facebook/react',
          version: 'v19.2.1',
          reason: 'React 是全球最流行的前端框架,拥有最大的社区和最丰富的生态系统,适合构建复杂企业级应用。',
          advantages: [
            '社区庞大,生态圈丰富',
            '学习资源丰富,人才易招聘',
            '灵活度高,可适配各种架构',
            '服务器组件支持领先',
            'React Native 让跨平台更统一',
            'Facebook 背书,长期维护有保障'
          ],
          disadvantages: [
            '概念较多,上手曲线比 Vue 陡',
            '状态管理需要借助第三方库',
            '更新频繁,升级成本高',
            'Hooks 规则复杂,容易出错'
          ],
          children: [
            {
              id: 'react18',
              name: 'React 18',
              level: 88,
              officialLink: 'https://react.dev',
              repo: 'facebook/react',
              version: 'v19.2.1',
              reason: 'React18 引入了并发渲染、Suspense、Server Components 等革命性特性,让 React 在性能和开发体验上都有质的飞跃。',
              advantages: [
                '并发渲染显著提升 UI 响应性',
                'Suspense 让数据获取更优雅',
                'Server Components 减少客户端 JS',
                '自动批处理减少不必要的渲染',
                '新的 Hooks 增强开发体验',
                'Ref 回调、useTransition 等新 API'
              ],
              disadvantages: [
                '新特性学习成本高',
                'Server Components 生态还不成熟',
                'TypeScript 类型定义有时不准确',
                '升级迁移有时破坏性较大'
              ]
            },
            {
              id: 'nextjs',
              name: 'Next.js',
              level: 85,
              officialLink: 'https://nextjs.org',
              repo: 'vercel/next.js',
              version: 'v16.2.6',
              reason: 'Next.js 是 React 生态中最成熟的元框架,提供 SSR、SSG、ISR 等渲染策略,是构建现代 Web 应用的首选。',
              advantages: [
                '多种渲染模式按需选择(SSR/SSG/ISR)',
                'App Router 引领业界潮流',
                '自动代码分割和优化',
                '内置 CSS-in-JS、图像优化等',
                'Vercel 背书,持续创新',
                '大型社区和丰富生态'
              ],
              disadvantages: [
                '学习曲线陡,概念多',
                'App Router 和 Pages Router 风格差异大',
                '服务端部署有一定复杂度',
                '某些特性锁定 Vercel 平台'
              ]
            },
            {
              id: 'remix',
              name: 'Remix',
              level: 70,
              officialLink: 'https://remix.run',
              repo: 'remix-run/remix',
              version: 'v2.19.0',
              reason: 'Remix 是新兴的全栈框架,主张 Web 标准优先,提供出色的错误处理和渐进增强能力。',
              advantages: [
                'Web 标准优先,易于理解',
                '内置错误边界,用户体验好',
                'loader/action 模式清晰直观',
                '支持边缘计算部署',
                'SEO 友好,内置meta标签'
              ],
              disadvantages: [
                '社区相对较小',
                '生态不如 Next.js 丰富',
                '学习资源较少',
                'V2 版本仍有 breaking changes'
              ]
            },
            {
              id: 'redux',
              name: 'Redux',
              level: 80,
              officialLink: 'https://redux.js.org',
              repo: 'reduxjs/redux',
              version: 'v5.1.0',
              reason: 'Redux 是 React 生态中最成熟的状态管理方案,适合大型复杂应用,拥有完善的时间旅行调试能力。',
              advantages: [
                '生态系统完善,中间件丰富',
                'DevTools 调试体验极佳',
                ' predictability 强,状态可追溯',
                'RTK Query 数据获取一体化',
                '社区文档丰富'
              ],
              disadvantages: [
                '样板代码多,繁琐',
                '小型项目显得过于复杂',
                '需要配合 Selector 才能高效渲染',
                'Redux Toolkit 虽然简化但仍有学习成本'
              ]
            },
            {
              id: 'zustand',
              name: 'Zustand',
              level: 85,
              officialLink: 'https://zustand-demo.pmnd.rs',
              repo: 'pmndrs/zustand',
              version: 'v5.0.0',
              reason: 'Zustand 是轻量级的状态管理库,API 简洁直观,比 Redux 更简单但功能同样强大,正在迅速流行。',
              advantages: [
                'API 极简,学习曲线低',
                '不需要 Provider 包裹',
                '内置 persist 中间件',
                'TypeScript 支持好',
                '体积小,性能优秀',
                '支持 React 外使用'
              ],
              disadvantages: [
                '社区和生态不如 Redux 成熟',
                '大型项目中的最佳实践还在探索',
                '中间件生态相对较少'
              ]
            },
            {
              id: 'react-query',
              name: 'TanStack Query',
              level: 82,
              officialLink: 'https://tanstack.com/query',
              repo: 'TanStack/query',
              version: 'v6.0.0',
              reason: 'TanStack Query 是最强大的服务端状态管理库,自动处理缓存、背景更新、乐观更新等复杂场景。',
              advantages: [
                '自动缓存和背景同步',
                '乐观更新让 UI 即时响应',
                '分页和无限滚动支持完善',
                'DevTools 调试体验好',
                '支持 React 外的框架'
              ],
              disadvantages: [
                '需要改变传统的数据获取思维',
                '配置项多,学习成本有',
                '错误处理需要配合 ErrorBoundary'
              ]
            },
            {
              id: 'antd',
              name: 'Ant Design',
              level: 88,
              officialLink: 'https://ant.design',
              repo: 'ant-design/ant-design',
              version: 'v6.0.0',
              reason: 'Ant Design 是 React 生态中最流行的企业级 UI 库,组件丰富、质量高、文档详尽,是中后台开发的首选。',
              advantages: [
                '组件数量业界最全',
                'Design Token 支持主题定制',
                'TypeScript 编写,类型完善',
                '国际化支持完善',
                'Pro 系列提供完整解决方案',
                '社区活跃,持续更新'
              ],
              disadvantages: [
                '体积较大,需要按需引入优化',
                '移动端支持不如桌面端',
                'UI 风格较单一',
                '部分组件定制化成本高'
              ]
            }
          ]
        },
        {
          id: 'fe-angular',
          name: 'Angular 生态',
          level: 65,
          officialLink: 'https://angular.io',
          repo: 'angular/angular',
          version: 'v20.0.0',
          reason: 'Angular 是 Google 背书的成熟框架,适合大型企业级应用,TypeScript 优先,内置功能完备。',
          advantages: [
            'Google 背书,长期维护有保障',
            'TypeScript 优先,类型安全',
            '内置依赖注入、路由、HTTP 等',
            'RxJS 响应式编程强大',
            '适合大型团队协作',
            '升级工具完善'
          ],
          disadvantages: [
            '学习曲线最陡',
            '版本间迁移成本高',
            '灵活性较低,适合固定架构',
            '社区和招聘市场不如 React/Vue'
          ],
          children: [
            {
              id: 'angular2',
              name: 'Angular 2+',
              level: 65,
              officialLink: 'https://angular.io',
              repo: 'angular/angular',
              version: 'v20.0.0',
              reason: 'Angular 是面向大型应用的完整解决方案,内置 DI、RxJS、Zone.js 等,企业级项目首选。',
              advantages: [
                '完整的 MVC 架构',
                '依赖注入容器',
                'RxJS 响应式编程',
                'NgModules 模块系统',
                '内置测试工具',
                '升级工具完善'
              ],
              disadvantages: [
                '概念多,学习曲线陡峭',
                'bundle size 较大',
                '模板语法较复杂',
                '灵活性不如 Vue/React'
              ]
            },
            {
              id: 'ngrx',
              name: 'NgRx',
              level: 60,
              officialLink: 'https://ngrx.io',
              repo: 'ngrx/platform',
              version: 'v19.0.0',
              reason: 'NgRx 是 Angular 专属的状态管理方案,提供 Redux 模式,适合超大型 Angular 应用的复杂状态管理。',
              advantages: [
                'Redux 模式在 Angular 中的实现',
                '时间旅行调试',
                '副作用管理清晰',
                '类型安全的状态管理'
              ],
              disadvantages: [
                '样板代码多',
                '小型项目不需要',
                '学习曲线陡'
              ]
            }
          ]
        },
        {
          id: 'fe-other',
          name: '其他框架',
          level: 75,
          children: [
            {
              id: 'jquery',
              name: 'jQuery',
              level: 85,
              officialLink: 'https://jquery.com',
              repo: 'jquery/jquery',
              version: 'v3.7.1',
              reason: 'jQuery 曾是前端开发的基石,简化了 DOM 操作和浏览器兼容性处理,虽然现代框架已取代其地位,但仍有大量存量项目在使用。',
              advantages: [
                '简化 DOM 操作,链式调用优雅',
                '抹平浏览器兼容性差异',
                '插件生态极其丰富',
                '学习曲线平缓',
                '文档和教程资源丰富',
                '轻量级,易于集成'
              ],
              disadvantages: [
                '现代框架已取代其地位',
                '性能不如原生 API',
                '不适合构建复杂应用',
                '缺乏组件化和状态管理',
                '维护模式,不再积极开发'
              ]
            },
            {
              id: 'backbone',
              name: 'Backbone.js',
              level: 60,
              officialLink: 'https://backbonejs.org',
              repo: 'jashkenas/backbone',
              version: 'v1.6.0',
              reason: 'Backbone 是早期的 MVC 框架,提供了模型、视图、集合等概念,是现代前端框架的先驱。',
              advantages: [
                '轻量级,核心代码简洁',
                'MVC 架构清晰',
                '灵活度高,不强制约束',
                '与 jQuery 配合良好',
                '历史悠久,稳定可靠'
              ],
              disadvantages: [
                '已过时,社区不活跃',
                '缺乏现代特性',
                '双向绑定需要手动实现',
                '大型项目维护困难',
                '招聘市场需求极少'
              ]
            },
            {
              id: 'svelte',
              name: 'Svelte',
              level: 75,
              officialLink: 'https://svelte.dev',
              repo: 'sveltejs/svelte',
              version: 'v5.20.0',
              reason: 'Svelte 是编译型框架,运行时代码极少,性能出色,语法简洁,正在快速流行。',
              advantages: [
                '编译后无运行时,体积最小',
                '响应式基于赋值,直观简单',
                '无需虚拟 DOM,性能优秀',
                '模板语法简洁',
                'SvelteKit 全栈方案成熟'
              ],
              disadvantages: [
                '社区相比 React/Vue 较小',
                '生态和第三方库较少',
                '编译时优化依赖工具链',
                '团队招聘相对困难'
              ]
            },
            {
              id: 'solid',
              name: 'Solid.js',
              level: 60,
              officialLink: 'https://solidjs.com',
              repo: 'solidjs/solid',
              version: 'v1.9.0',
              reason: 'Solid.js 是性能最强的响应式框架之一,基于细粒度响应式,无需虚拟 DOM,适合对性能极致追求的项目。',
              advantages: [
                '细粒度响应式,性能极佳',
                '无虚拟 DOM,运行效率高',
                'TypeScript 优先',
                'JSX 语法熟悉度高',
                '打包体积小'
              ],
              disadvantages: [
                '社区极小',
                '招聘难度大',
                '生态不完善',
                '学习曲线与传统 React 不同'
              ]
            },
            {
              id: 'qwik',
              name: 'Qwik',
              level: 50,
              officialLink: 'https://qwik.dev',
              repo: 'QwikDev/qwik',
              version: 'v1.9.0',
              reason: 'Qwik 是创新性的 Resumable 框架,主张 服务端序列化状态到客户端,实现极致的首屏加载性能。',
              advantages: [
                'Resumable 架构,极快首屏',
                '自动化代码分割',
                '服务端渲染开箱即用',
                '内置性能优化'
              ],
              disadvantages: [
                '生态极不成熟',
                '社区极小',
                '学习资源匮乏',
                '概念创新,接受度待观察'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fe-comparison',
      name: '技术选型',
      level: 95,
      color: '#f59e0b',
      icon: '⚖️',
      children: [
        {
          id: 'fe-framework-eco',
          name: '框架生态对比',
          icon: '🖥️',
          level: 95,
          description: 'Vue vs React 核心生态对比',
          cardColor: '#8b5cf6',
          items: [
            {
              id: 'fe-core-principle',
              name: '核心原理',
              icon: '⚙️',
              level: 95,
              vueItems: [
                '响应式系统基于 Proxy,自动追踪依赖',
                '模板编译时优化,自动分析依赖',
                '组合式 API(Composition API)让逻辑复用更灵活',
                '单文件组件(SFC)模板、样式、逻辑合一'
              ],
              reactItems: [
                '虚拟 DOM + Hooks,手动声明式更新',
                '运行时 Reconciler,灵活性强',
                'Server Components 让服务端渲染更高效',
                'JSX 让 UI 和逻辑完全融合'
              ],
              disadvantages: [
                'Vue: 深层响应式有性能开销,需注意数据结构设计',
                'React: 频繁重渲染需要 memo/useCallback 手动优化'
              ]
            },
            {
              id: 'fe-state-compare',
              name: '状态管理',
              icon: '🔄',
              level: 92,
              vueItems: [
                'Pinia(官方推荐),响应式自动追踪',
                'computed 和 watch 让派生状态更直观',
                '小型项目更简单,状态管理更统一'
              ],
              reactItems: [
                'Redux Toolkit、Zustand、Jotai 选择更多',
                '状态管理适合大型复杂应用,生态成熟',
                '选择众多,可以根据项目规模灵活选择'
              ],
              disadvantages: [
                'React: 状态管理学习曲线因选择众多而变陡',
                'Vue: 响应式在深层对象场景有性能开销'
              ]
            },
            {
              id: 'fe-ui-compare',
              name: 'UI 组件库',
              icon: '🎨',
              level: 90,
              vueItems: [
                'Element Plus、Naive UI、Vuetify 组件丰富质量高',
                '内置 Transition、KeepAlive 等动画组件'
              ],
              reactItems: [
                'Ant Design、Material UI、Chakra UI 生态庞大',
                'Headless UI(Radix) 在 React 生态更成熟',
                'Suspense 让数据获取和代码分割更优雅'
              ],
              commonItems: [
                'Tailwind CSS 两者都完美支持'
              ],
              disadvantages: [
                'Vue: Vuetify、Quasar 倾向完整组件,灵活性稍差',
                'React: styled-components 等 CSS-in-JS 方案更丰富'
              ]
            },
            {
              id: 'fe-ssr-compare',
              name: 'SSR 服务端渲染',
              icon: '🌐',
              level: 90,
              vueItems: [
                'Nuxt.js,文件约定路由,开箱即用',
                'auto-import 减少样板代码'
              ],
              reactItems: [
                'Next.js(最成熟),App Router 引领业界潮流',
                'Server Actions 让前后端协作更紧密'
              ],
              commonItems: [
                'Nuxt 3 和 Next.js 14 都支持 Server Components',
                '两者都支持 SSG、ISR 等渲染模式'
              ],
              disadvantages: [
                'SSR 调试比 CSR 更复杂',
                'Nuxt 学习曲线比 Vue 更陡',
                'Next.js App Router 和 Pages Router 风格差异大'
              ]
            },
            {
              id: 'fe-learning-docs',
              name: '学习曲线与文档',
              icon: '📚',
              level: 90,
              vueItems: [
                '官方文档最友好,中文社区活跃',
                '上手最容易,渐进式学习路径',
                'Vue School、哔哩哔哩教程丰富'
              ],
              reactItems: [
                '官方文档清晰,概念简单(一切皆组件)',
                'TypeScript 支持完善,类型推导好'
              ],
              disadvantages: [
                'React: 新概念多(Hooks/Context/Suspense),学习曲线较陡',
                'Vue: 组合式 API 需要一定基础才能驾驭'
              ]
            },
            {
              id: 'fe-community-enterprise',
              name: '社区与企业采用',
              icon: '🏢',
              level: 88,
              vueItems: [
                'GitHub 43W+ stars,国内使用率最高',
                '尤雨溪主导,国内阿里/滴滴/字节大量使用',
                '知名用户:阿里巴巴/滴滴/GitLab/Laravel'
              ],
              reactItems: [
                'GitHub 25W+ stars,NPM 下载量遥遥领先',
                'Facebook/Meta 主导,Meta 员工参与核心开发',
                '知名用户:Facebook/Instagram/Netflix/Airbnb'
              ],
              disadvantages: [
                'React: 核心团队扩张导致 API 变化频繁',
                'Vue: 社区相对小,国际化企业案例较少'
              ]
            }
          ]
        },
        {
          id: 'fe-mobile-eco',
          name: '移动端框架对比',
          icon: '📱',
          level: 88,
          description: '跨平台移动开发框架对比',
          cardColor: '#06b6d4',
          items: [
            {
              id: 'fe-rn-vs-uni',
              name: 'React Native vs UniApp',
              icon: '⚡',
              level: 88,
              reactItems: [
                'React Native: 原生体验,大厂验证(Instagram/Discord)',
                '底层由原生渲染,性能更接近原生',
                'RN 社区更大,第三方库更丰富',
                'Flipper 调试工具成熟'
              ],
              vueItems: [
                'UniApp: 一套代码多端运行(小程序/H5/App)',
                '上手更快,生态更广(支持更多平台)',
                '基于 Weex,Vue 开发者友好'
              ],
              disadvantages: [
                'React Native: 学习曲线陡,原生模块开发复杂',
                'Vue UniApp: 性能不如原生,部分平台特性支持不完整'
              ]
            }
          ]
        },
        {
          id: 'fe-build-eco',
          name: '构建工具对比',
          icon: '🔧',
          level: 86,
          description: '前端构建工具深度对比',
          cardColor: '#f59e0b',
          items: [
            {
              id: 'fe-vite-detail',
              name: 'Vite',
              icon: '⚡',
              level: 90,
              color: '#fbbf24',
              advantages: [
                '冷启动毫秒级,热更新无需刷新整个页面',
                '基于 ESM,Nuxt/Next 都采用,现代工程标配',
                '零配置,开箱即用,约定优于配置',
                '内置 TypeScript/CSS/JSON 模块化支持',
                'Vue/React 官方集成,配置少到几乎不需要'
              ],
              disadvantages: [
                '生产构建依赖 Rollup,某些 webpack 特性暂不支持',
                '深度定制时仍需了解 Rollup 配置'
              ]
            },
            {
              id: 'fe-webpack-detail',
              name: 'Webpack',
              icon: '📦',
              level: 85,
              color: '#8b5cf6',
              advantages: [
                '生态最成熟,插件最全,适合复杂大型项目',
                'Code Splitting 能力强,代码分割策略成熟',
                '配置灵活,定制性强,可控制构建方方面面',
                'Loader/Plugin 生态丰富,扩展性极强'
              ],
              disadvantages: [
                '冷启动慢,配置复杂,学习成本高',
                '配置文件复杂,TypeScript 配置类型支持差'
              ]
            },
            {
              id: 'fe-esbuild-detail',
              name: 'esbuild',
              icon: '🚀',
              level: 80,
              color: '#f97316',
              advantages: [
                'Go 语言编写,编译速度是其他工具的 10-100 倍',
                'API 简洁,集成到项目只需几行代码',
                '内置 TypeScript、JSX、minification 支持'
              ],
              disadvantages: [
                '功能相对较少,生态不如 webpack 完善',
                '自定义配置选项有限'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fe-mobile',
      name: '移动端框架',
      children: [
        {
          id: 'rn',
          name: 'React Native',
          level: 80,
          officialLink: 'https://reactnative.dev',
          repo: 'facebook/react-native',
          version: 'v0.84.1',
          reason: 'React Native 使用 React 语法开发原生移动应用,一份代码可运行 iOS/Android,生态成熟,是跨平台移动开发的主流选择。',
          advantages: [
            '使用熟悉的 React 语法',
            '一份代码支持双平台',
            '热更新能力强大',
            '社区庞大,组件丰富',
            'Meta(Facebook)持续投入',
            'New Architecture 性能大幅提升'
          ],
          disadvantages: [
            '性能仍不如原生应用',
            '某些原生功能需要原生模块',
            '调试原生问题有门槛',
            '版本升级有时破坏性大'
          ]
        },
        {
          id: 'flutter',
          name: 'Flutter',
          level: 70,
          officialLink: 'https://flutter.dev',
          repo: 'flutter/flutter',
          version: 'v3.41.0',
          reason: 'Flutter 使用 Dart 语言,自绘引擎实现跨平台,性能接近原生,UI 表现力极强,适合追求高品质 UI 的项目。',
          advantages: [
            '自绘引擎,UI 一致性好',
            '性能接近原生',
            '丰富的 Material/Cupertino 组件',
            'Hot Reload 开发体验好',
            'Dart 语言简单易学',
            'Google 背书,持续发展'
          ],
          disadvantages: [
            'Dart 生态不如 JavaScript 丰富',
            '社区和招聘市场较小',
            '某些平台特性支持滞后',
            '打包体积相对较大'
          ]
        },
        {
          id: 'uniapp',
          name: 'UniApp',
          level: 85,
          officialLink: 'https://uniapp.dcloud.net.cn',
          repo: 'dcloudio/uni-app',
          version: 'v4.0.0',
          reason: 'UniApp 基于 Vue 语法,一份代码可发布到小程序/H5/App,国内生态完善,是国内跨平台开发的首选。',
          advantages: [
            'Vue 语法,国内开发者熟悉',
            '一份代码多端发行',
            '国内生态完善',
            '插件市场丰富',
            '开发成本低',
            '支持鸿蒙系统'
          ],
          disadvantages: [
            '多端一致性仍有差异',
            '性能不如原生',
            '微信小程序限制较多',
            '国际化支持弱'
          ]
        },
        {
          id: 'taro',
          name: 'Taro',
          level: 78,
          officialLink: 'https://taro.jd.com',
          repo: 'NervJS/taro',
          version: 'v4.0.0',
          reason: 'Taro 支持 React/Vue/Nerv 语法,编译到多端,京东团队维护,国内使用广泛,是另一优秀的跨平台方案。',
          advantages: [
            '多框架支持(React/Vue)',
            '多端编译(小程序/H5/RN)',
            '京东团队持续维护',
            'Taro 3 支持任意前端框架',
            '插件生态丰富'
          ],
          disadvantages: [
            '多端适配仍需工作',
            '编译体积较大',
            '某些特性受限',
            '文档有更新滞后问题'
          ]
        }
      ]
    },
    {
      id: 'fe-build',
      name: '构建工具',
      children: [
        {
          id: 'vite',
          name: 'Vite',
          level: 95,
          officialLink: 'https://vitejs.dev',
          repo: 'vitejs/vite',
          version: 'v8.0.10',
          reason: 'Vite 以其极快的冷启动和热更新彻底改变了前端开发体验,是现代前端工程的标配,与 Vue 深度集成也被 React 等框架采用。',
          advantages: [
            '冷启动秒级完成',
            '热更新毫秒级响应',
            '基于 ESM,无需打包',
            '内置 TypeScript 支持',
            'CSS/JSON 等模块化支持',
            '插件生态丰富'
          ],
          disadvantages: [
            '生产构建仍需 Rollup',
            '配置文件与 webpack 有差异',
            '某些 webpack 特性暂不支持',
            'Node 版本要求较高'
          ]
        },
        {
          id: 'webpack',
          name: 'Webpack',
          level: 85,
          officialLink: 'https://webpack.js.org',
          repo: 'webpack/webpack',
          version: 'v5.105.4',
          reason: 'Webpack 是最成熟的模块打包器,生态极其丰富,配置灵活,是大型项目的可靠选择。',
          advantages: [
            '生态最成熟,插件最全',
            '配置灵活,定制性强',
            'Tree Shaking 优化彻底',
            'Code Splitting 能力强',
            '适合复杂大型项目',
            '社区资源丰富'
          ],
          disadvantages: [
            '配置复杂,学习成本高',
            '冷启动慢,开发体验差',
            '构建速度是痛点',
            '版本升级往往有 breaking changes'
          ]
        },
        {
          id: 'esbuild',
          name: 'esbuild',
          level: 80,
          officialLink: 'https://esbuild.github.io',
          repo: 'evanw/esbuild',
          version: 'v0.25.0',
          reason: 'esbuild 由 Go 语言编写,性能极高,是下一代打包工具的标杆,常被用作 Vite 的底层依赖。',
          advantages: [
            '构建速度极快(比 webpack 快 100 倍)',
            'Go 语言编写,性能优异',
            '内置 TypeScript 支持',
            'Tree Shaking 支持',
            '插件系统简洁'
          ],
          disadvantages: [
            '生态不如 webpack 丰富',
            '插件 API 尚不稳定',
            '某些高级特性不支持',
            '社区插件较少'
          ]
        },
        {
          id: 'rollup',
          name: 'Rollup',
          level: 75,
          officialLink: 'https://rollupjs.org',
          repo: 'rollup/rollup',
          version: 'v4.31.0',
          reason: 'Rollup 专注于库和 NPM 包的打包,Tree Shaking 效果最佳,输出的代码干净整洁,是发布 NPM 包的首选。',
          advantages: [
            'Tree Shaking 效果最佳',
            '输出格式多样(ESM/CJS/UMD)',
            '配置简洁',
            '适合库开发',
            '体积小'
          ],
          disadvantages: [
            '代码分割能力不如 webpack',
            '热更新体验一般',
            '第三方非 ESM 兼容性问题',
            '大型应用构建支持弱'
          ]
        },
        {
          id: 'turbopack',
          name: 'Turbopack',
          level: 70,
          officialLink: 'https://turbo.build/pack',
          repo: 'vercel/turbo',
          version: 'v2.4.0',
          reason: 'Turbopack 是 Vercel 推出的 Rust 编写的打包工具,声称比 Vite 快 10 倍,是 Webpack 的潜在替代者。',
          advantages: [
            'Rust 编写,性能优秀',
            '增量编译,越用越快',
            '与 Next.js 深度集成',
            '缓存效率高',
            '未来潜力大'
          ],
          disadvantages: [
            '仍处于早期阶段',
            '生态不完善',
            '配置与 webpack 不兼容',
            '某些特性尚在开发'
          ]
        }
      ]
    },
    {
      id: 'fe-css',
      name: 'CSS 框架',
      children: [
        {
          id: 'tailwind',
          name: 'TailwindCSS',
          level: 95,
          officialLink: 'https://tailwindcss.com',
          repo: 'tailwindlabs/tailwindcss',
          version: 'v4.1.0',
          reason: 'TailwindCSS 以 Utility-First 理念彻底改变了 CSS 开发方式,无需离开 HTML 即可完成样式,是当前最流行的 CSS 框架。',
          advantages: [
            'Utility-First,开发效率极高',
            '无需写单独的 CSS 文件',
            '内置暗色模式支持',
            '主题定制灵活',
            'PurgeCSS 确保体积小',
            '社区组件库丰富'
          ],
          disadvantages: [
            'HTML 复杂度上升',
            '部分样式名称需要学习',
            '与第三方组件库可能冲突',
            'IDE 支持需要插件'
          ]
        },
        {
          id: 'unocss',
          name: 'UnoCSS',
          level: 85,
          officialLink: 'https://unocss.dev',
          repo: 'unocss/unocss',
          version: 'v66.6.8',
          reason: 'UnoCSS 是原子化 CSS 的新一代方案,比 Tailwind 更快更灵活,按需生成,体积接近零,是 Vite 项目的绝佳搭档。',
          advantages: [
            '性能极致,按需生成',
            '预设丰富,可定制化强',
            'Attributify 模式简洁',
            'Vite 集成最佳',
            '支持变体(variants)',
            '图标集成方便'
          ],
          disadvantages: [
            '社区比 Tailwind 小',
            '文档相对简单',
            '学习曲线比 Tailwind 陡',
            '部分工具不一致'
          ]
        },
        {
          id: 'sass',
          name: 'Sass/Less',
          level: 90,
          officialLink: 'https://sass-lang.com',
          repo: 'sass/dart-sass',
          version: 'v1.86.0',
          reason: 'Sass 是成熟稳定的 CSS 预处理器,变量、嵌套、混合宏等特性提升 CSS 工程化水平,至今仍是大型项目的可靠选择。',
          advantages: [
            '变量系统减少重复',
            '嵌套语法简化选择器',
            'Mixins 代码复用',
            '社区成熟,教程丰富',
            '兼容所有 CSS 特性',
            '工具链完善'
          ],
          disadvantages: [
            '需要编译步骤',
            '比原生 CSS 学习成本高',
            'Tailwind 等方案冲击',
            '现代 CSS 变量已能覆盖部分场景'
          ]
        },
        {
          id: 'emotion',
          name: 'Emotion',
          level: 80,
          officialLink: 'https://emotion.sh',
          repo: 'emotion-js/emotion',
          version: 'v11.13.0',
          reason: 'Emotion 是强大的 CSS-in-JS 方案,支持样式组件和字符串两种写法,在 React 社区中广泛使用。',
          advantages: [
            'React 集成优秀',
            '支持 sx prop 便捷写法',
            '主题系统完善',
            'SSR 支持好',
            '动态样式简单'
          ],
          disadvantages: [
            '运行时性能开销',
            '与 Tailwind 相比无明显优势',
            'React Server Components 支持待改进',
            '打包体积增加'
          ]
        },
        {
          id: 'stitches',
          name: 'Stitches',
          level: 75,
          officialLink: 'https://stitches.dev',
          repo: 'stitchesjs/stitches',
          version: 'v1.0.0',
          reason: 'Stitches 是轻量级的 CSS-in-JS 方案,零运行时开销,支持 Token,适合对性能敏感的 React 项目。',
          advantages: [
            '零运行时开销',
            'Design Token 支持好',
            'SSR 支持完善',
            '类型安全',
            '前缀自动添加'
          ],
          disadvantages: [
            '已停止维护',
            '社区较小',
            '功能不如 Emotion 丰富',
            '维护者推荐切换到 vanilla-extract'
          ]
        },
        {
          id: 'radix',
          name: 'Radix UI',
          level: 78,
          officialLink: 'https://radix-ui.com',
          repo: 'radix-ui/primitives',
          version: 'v1.1.0',
          reason: 'Radix UI 提供无样式、可访问的 React 组件,作为 Headless UI 的代表,让你完全控制样式的同时保证可访问性。',
          advantages: [
            'Headless 设计,完全控制样式',
            '开箱即用的可访问性',
            '组件设计良好',
            '主题定制灵活',
            '动画 API 强大',
            'Vue/Angular 也有对应版本'
          ],
          disadvantages: [
            '需要自行设计样式',
            '组件种类有限',
            '文档相对简单',
            '社区比 Chakra UI 小'
          ]
        }
      ]
    },
    {
      id: 'fe-concepts',
      name: '核心概念',
      children: [
        {
          id: 'fe-routing',
          name: '路由与导航',
          level: 92,
          children: [
            {
              id: 'navigation-guards',
              name: '路由守卫',
              level: 92,
              reason: '路由守卫是前端路由的核心机制,用于在路由跳转前后执行逻辑,实现权限控制、数据预加载、页面埋点等功能。',
              advantages: [
                '权限验证:检查用户是否有权访问页面',
                '登录拦截:未登录用户重定向到登录页',
                '数据预加载:进入页面前先加载必要数据',
                '页面离开确认:表单未保存时提示用户',
                '页面标题修改:动态设置 document.title',
                '埋点统计:记录页面访问日志'
              ],
              disadvantages: [
                '过度使用会增加路由跳转延迟',
                '异步守卫处理不当会导致白屏',
                '守卫链过长时调试困难'
              ]
            },
            {
              id: 'scroll-behavior',
              name: '滚动行为',
              level: 85,
              reason: '控制路由切换时的页面滚动位置,提升用户体验,避免导航栏遮挡内容等问题。',
              advantages: [
                '路由切换时自动滚动到顶部',
                '浏览器前进/后退时恢复滚动位置',
                '锚点跳转支持平滑滚动',
                '可设置导航栏高度偏移'
              ],
              disadvantages: [
                '某些浏览器兼容性问题',
                '与第三方滚动库可能冲突'
              ]
            },
            {
              id: 'lazy-loading',
              name: '路由懒加载',
              level: 90,
              reason: '按需加载路由组件,减少首屏加载时间,提升应用性能。',
              advantages: [
                '减少首屏 JS 体积',
                '提升首屏加载速度',
                '按需加载,节省带宽',
                '支持预加载和预取'
              ],
              disadvantages: [
                '首次进入子页面有加载延迟',
                '需要合理规划代码分割粒度'
              ]
            }
          ]
        },
        {
          id: 'fe-performance',
          name: '性能优化',
          level: 95,
          children: [
            {
              id: 'code-splitting',
              name: '代码分割',
              level: 90,
              reason: '将代码拆分成多个 bundle,按需加载,是前端性能优化的核心手段。',
              advantages: [
                '减少首屏加载时间',
                '提升缓存命中率',
                '支持并行加载',
                '降低内存占用'
              ],
              disadvantages: [
                '过度分割会增加 HTTP 请求',
                '需要合理规划分割策略'
              ]
            },
            {
              id: 'tree-shaking',
              name: 'Tree Shaking',
              level: 88,
              reason: '移除未使用的代码,减少打包体积,是现代构建工具的标配功能。',
              advantages: [
                '自动移除死代码',
                '减少打包体积',
                '提升运行性能',
                '支持 ESM 模块'
              ],
              disadvantages: [
                '需要 ESM 格式支持',
                '副作用代码可能被误删',
                '第三方库支持不一'
              ]
            },
            {
              id: 'virtual-scroll',
              name: '虚拟滚动',
              level: 85,
              reason: '只渲染可见区域的列表项,处理大数据列表的最佳方案。',
              advantages: [
                '支持百万级数据渲染',
                'DOM 节点数量恒定',
                '滚动流畅不卡顿',
                '内存占用低'
              ],
              disadvantages: [
                '实现复杂度高',
                '动态高度处理困难',
                '某些场景下有闪烁'
              ]
            },
            {
              id: 'debounce-throttle',
              name: '防抖与节流',
              level: 92,
              reason: '控制函数执行频率,优化高频事件处理,是性能优化的基础技巧。',
              advantages: [
                '减少函数执行次数',
                '降低性能开销',
                '提升用户体验',
                '简单易用'
              ],
              disadvantages: [
                '延迟响应可能影响体验',
                '需要根据场景选择策略'
              ]
            },
            {
              id: 'memo-cache',
              name: '缓存与记忆化',
              level: 88,
              reason: '缓存计算结果,避免重复计算,React.memo、useMemo、Vue computed 等都是记忆化的应用。',
              advantages: [
                '避免重复计算',
                '提升渲染性能',
                '减少不必要的更新',
                '降低 CPU 占用'
              ],
              disadvantages: [
                '过度使用增加内存占用',
                '缓存失效策略需要考虑',
                '调试相对困难'
              ]
            }
          ]
        },
        {
          id: 'fe-security',
          name: '前端安全',
          level: 90,
          children: [
            {
              id: 'xss',
              name: 'XSS 防护',
              level: 90,
              reason: '跨站脚本攻击是最常见的前端安全问题,必须对用户输入进行转义和过滤。',
              advantages: [
                '防止恶意脚本注入',
                '保护用户数据安全',
                '现代框架默认转义',
                'CSP 策略增强防护'
              ],
              disadvantages: [
                '过度转义影响功能',
                '富文本场景处理复杂'
              ]
            },
            {
              id: 'csrf',
              name: 'CSRF 防护',
              level: 85,
              reason: '跨站请求伪造攻击利用用户身份执行恶意操作,需要 Token 验证等机制防护。',
              advantages: [
                'Token 验证有效防护',
                'SameSite Cookie 增强安全',
                '双重提交 Cookie 方案',
                '验证 Referer 头'
              ],
              disadvantages: [
                '需要后端配合',
                'Token 管理增加复杂度'
              ]
            },
            {
              id: 'https',
              name: 'HTTPS 与加密',
              level: 88,
              reason: 'HTTPS 加密传输是现代 Web 应用的标配,保护数据传输安全。',
              advantages: [
                '数据传输加密',
                '防止中间人攻击',
                'SEO 友好',
                '浏览器信任标识'
              ],
              disadvantages: [
                '证书成本(Let\'s Encrypt 免费)',
                '性能开销(可忽略)'
              ]
            },
            {
              id: 'auth',
              name: '认证与授权',
              level: 92,
              reason: '前端需要实现 JWT、OAuth、SSO 等认证机制,配合路由守卫实现权限控制。',
              advantages: [
                'JWT 无状态认证',
                'OAuth 第三方登录',
                'SSO 单点登录',
                'RBAC 角色权限控制'
              ],
              disadvantages: [
                'Token 存储安全问题',
                '刷新 Token 机制复杂',
                '权限粒度设计困难'
              ]
            }
          ]
        },
        {
          id: 'fe-state',
          name: '状态管理',
          level: 93,
          children: [
            {
              id: 'client-state',
              name: '客户端状态',
              level: 90,
              reason: '管理组件间共享的 UI 状态,如表单数据、弹窗状态等。',
              advantages: [
                '组件间数据共享',
                '状态可预测',
                '时间旅行调试',
                '中间件扩展'
              ],
              disadvantages: [
                '小型项目过度设计',
                '学习成本高',
                '样板代码多'
              ]
            },
            {
              id: 'server-state',
              name: '服务端状态',
              level: 88,
              reason: '管理从服务器获取的数据,如用户信息、列表数据等,TanStack Query 是代表方案。',
              advantages: [
                '自动缓存和同步',
                '乐观更新',
                '背景刷新',
                '分页和无限滚动'
              ],
              disadvantages: [
                '需要改变思维模式',
                '配置项多',
                '错误处理复杂'
              ]
            },
            {
              id: 'global-state',
              name: '全局状态',
              level: 85,
              reason: '跨组件、跨页面的全局状态管理,如用户登录状态、主题配置等。',
              advantages: [
                '全局访问',
                '持久化存储',
                '响应式更新',
                '类型安全'
              ],
              disadvantages: [
                '过度使用导致耦合',
                '调试困难',
                '性能开销'
              ]
            }
          ]
        },
        {
          id: 'fe-rendering',
          name: '渲染模式',
          level: 90,
          children: [
            {
              id: 'csr',
              name: 'CSR 客户端渲染',
              level: 85,
              reason: '传统 SPA 渲染模式,所有渲染在浏览器完成,适合交互复杂的应用。',
              advantages: [
                '交互体验流畅',
                '前后端分离',
                '部署简单',
                '开发效率高'
              ],
              disadvantages: [
                'SEO 不友好',
                '首屏加载慢',
                '白屏时间长'
              ]
            },
            {
              id: 'ssr',
              name: 'SSR 服务端渲染',
              level: 88,
              reason: '服务器生成 HTML,首屏快速呈现,SEO 友好,Next.js/Nuxt 的核心能力。',
              advantages: [
                'SEO 友好',
                '首屏加载快',
                '社交分享预览',
                '更好的性能指标'
              ],
              disadvantages: [
                '服务器压力大',
                '开发复杂度高',
                '部署成本高',
                '某些浏览器 API 不可用'
              ]
            },
            {
              id: 'ssg',
              name: 'SSG 静态生成',
              level: 82,
              reason: '构建时生成静态 HTML,性能最优,适合内容型网站。',
              advantages: [
                '性能最优',
                'CDN 友好',
                '安全性高',
                '成本低'
              ],
              disadvantages: [
                '内容更新需要重新构建',
                '动态内容支持弱',
                '构建时间长'
              ]
            },
            {
              id: 'isr',
              name: 'ISR 增量静态再生',
              level: 80,
              reason: 'Next.js 独创的渲染模式,结合 SSG 和 SSR 优点,按需重新生成页面。',
              advantages: [
                '兼顾性能和实时性',
                '按需更新',
                'CDN 缓存',
                '降低服务器压力'
              ],
              disadvantages: [
                '配置复杂',
                '缓存策略难把握',
                '仅 Next.js 支持'
              ]
            }
          ]
        },
        {
          id: 'fe-testing',
          name: '测试策略',
          level: 85,
          children: [
            {
              id: 'unit-test',
              name: '单元测试',
              level: 85,
              reason: '测试独立函数和组件,Jest/Vitest 是主流工具。',
              advantages: [
                '快速反馈',
                '易于调试',
                '覆盖率高',
                '重构保障'
              ],
              disadvantages: [
                '编写成本高',
                '维护成本高',
                '无法覆盖集成问题'
              ]
            },
            {
              id: 'e2e-test',
              name: 'E2E 测试',
              level: 80,
              reason: '模拟用户操作,测试完整流程,Playwright/Cypress 是代表工具。',
              advantages: [
                '覆盖真实场景',
                '发现集成问题',
                '用户视角测试',
                '自动化回归'
              ],
              disadvantages: [
                '运行慢',
                '维护成本高',
                '环境依赖多',
                '调试困难'
              ]
            },
            {
              id: 'visual-test',
              name: '视觉回归测试',
              level: 70,
              reason: '对比截图发现 UI 变化,Chromatic/Percy 是代表工具。',
              advantages: [
                '发现视觉 bug',
                '自动化对比',
                '历史记录',
                'CI/CD 集成'
              ],
              disadvantages: [
                '成本高',
                '误报多',
                '存储占用大'
              ]
            }
          ]
        },
        {
          id: 'fe-accessibility',
          name: '可访问性',
          level: 80,
          children: [
            {
              id: 'aria',
              name: 'ARIA 属性',
              level: 80,
              reason: 'ARIA 属性让屏幕阅读器能正确理解页面结构,是无障碍开发的基础。',
              advantages: [
                '屏幕阅读器支持',
                '键盘导航',
                '语义化增强',
                '法律合规'
              ],
              disadvantages: [
                '学习成本高',
                '测试困难',
                '浏览器支持差异'
              ]
            },
            {
              id: 'keyboard',
              name: '键盘导航',
              level: 82,
              reason: '确保所有功能都能通过键盘操作,是可访问性的核心要求。',
              advantages: [
                '无障碍用户友好',
                '提升效率',
                '法律合规',
                '更好的用户体验'
              ],
              disadvantages: [
                '开发成本增加',
                '测试工作量大'
              ]
            },
            {
              id: 'color-contrast',
              name: '色彩对比度',
              level: 75,
              reason: 'WCAG 要求文字和背景有足够对比度,确保视障用户可读。',
              advantages: [
                '视障用户友好',
                '法律合规',
                '更好的可读性',
                '品牌形象提升'
              ],
              disadvantages: [
                '设计限制',
                '美观性权衡'
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'fe-micro',
      name: '微前端',
      children: [
        {
          id: 'qiankun',
          name: 'Qiankun',
          level: 88,
          officialLink: 'https://qiankun.umijs.org',
          repo: 'umijs/qiankun',
          version: 'v2.13.0',
          reason: 'Qiankun 是蚂蚁金服开源的微前端解决方案,基于 single-spa 封装,对 Vue/React 友好,是国内微前端落地的首选。',
          advantages: [
            '开箱即用,配置简单',
            'Vue/React/Angular 统一支持',
            'JS 沙箱隔离优秀',
            '样式隔离解决方案',
            '预加载资源,提升体验',
            '国内社区活跃'
          ],
          disadvantages: [
            '应用间通信复杂',
            '主应用和子应用需要同构技术栈',
            '调试相对困难',
            '部署和发布流程复杂'
          ]
        },
        {
          id: 'single-spa',
          name: 'single-spa',
          level: 75,
          officialLink: 'https://single-spa.js.org',
          repo: 'single-spa/single-spa',
          version: 'v6.1.0',
          reason: 'single-spa 是最早的微前端框架之一,设计了跨框架应用的通用规范,是 qiankun 等国产方案的基础。',
          advantages: [
            '跨框架支持(Vue/React/Angular)',
            '概念简单清晰',
            '轻量级',
            '历史悠久,稳定可靠',
            '学习微前端原理的好范本'
          ],
          disadvantages: [
            '需要较多手动配置',
            '样式隔离需额外处理',
            'JS 沙箱不如 qiankun 完善',
            '文档更新不及时'
          ]
        },
        {
          id: 'garfish',
          name: 'Garfish',
          level: 70,
          officialLink: 'https://garfish.top',
          repo: 'bytedance/garfish',
          version: 'v1.5.0',
          reason: 'Garfish 是字节跳动开源的微前端方案,支持多实例运行,适合超大型应用拆分,提供更强大的隔离能力。',
          advantages: [
            '支持多实例运行',
            '强隔离能力',
            'Vue/React/Angular 统一支持',
            '提供完整的微前端工具链',
            '字节跳动生产验证'
          ],
          disadvantages: [
            '社区比 qiankun 小',
            '学习成本较高',
            '文档中文为主,英文资料少',
            '配置相对复杂'
          ]
        }
      ]
    }
  ]
}
