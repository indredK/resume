import type { SkillNode } from './types'

export const frontendSkills: SkillNode = {
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
