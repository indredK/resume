import type { SkillNode } from '../types'

export default {
  id: 'toolchain',
  name: '工具链',
  icon: '🔧',
  color: '#94a3b8',
  children: [
    {
      id: 'tc-version',
      name: '版本控制',
      children: [
        {
          id: 'git',
          name: 'Git',
          level: 90,
          officialLink: 'https://git-scm.com',
          repo: 'git/git',
          version: 'v2.50.0',
          reason: 'Git 是现代版本控制的标配,分布式架构、分支模型灵活,是代码协作的事实标准。',
          advantages: [
            '分布式架构,离线可用',
            '分支模型强大',
            '合并算法智能',
            'GitHub/GitLab 生态',
            '轻量级分支',
            '暂存区设计优雅',
            '跨平台支持'
          ],
          disadvantages: [
            '学习曲线',
            '二进制文件效率低',
            '子模块管理复杂',
            '大仓库性能问题',
            '需要命令行才能完全发挥'
          ]
        },
        {
          id: 'svn',
          name: 'SVN',
          level: 75,
          officialLink: 'https://subversion.apache.org',
          version: 'v1.14.3',
          reason: 'SVN 是集中式版本控制的代表,简单直观,适合文档和设计稿版本管理,是部分传统企业的选择。',
          advantages: [
            '集中式,概念简单',
            '目录版本控制',
            '权限管理简单',
            '部分提交支持',
            'Windows 工具完善',
            '培训成本低',
            '适合非程序员'
          ],
          disadvantages: [
            '分支合并复杂',
            '需要服务器',
            '离线不能提交',
            '速度慢于 Git',
            '社区活跃度下降'
          ]
        }
      ]
    },
    {
      id: 'tc-ide',
      name: 'IDE',
      children: [
        {
          id: 'vscode',
          name: 'VS Code',
          level: 92,
          officialLink: 'https://code.visualstudio.com',
          repo: 'microsoft/vscode',
          version: 'v1.99.1',
          reason: 'VS Code 是现代代码编辑器,轻量但功能强大,插件生态丰富,几乎支持所有语言,是开发者的首选编辑器。',
          advantages: [
            '轻量级但功能强大',
            '插件生态极其丰富',
            '内置 Git 支持',
            '智能补全(IntelliSense)',
            '跨平台支持',
            '远程开发支持',
            '内置终端'
          ],
          disadvantages: [
            '内存占用相对较高',
            '大型项目可能卡顿',
            '某些语言不如专业 IDE',
            '插件质量参差不齐'
          ]
        },
        {
          id: 'intellij',
          name: 'IntelliJ IDEA',
          level: 82,
          officialLink: 'https://jetbrains.com/idea',
          repo: 'JetBrains/intellij-community',
          version: 'IDEA 2024.3',
          reason: 'IntelliJ IDEA 是 Java/kotlin 开发的首选 IDE,智能重构、代码分析一流,是企业级 Java 开发的标配。',
          advantages: [
            'Java/Kotlin 支持最好',
            '智能重构',
            '代码分析深入',
            '框架集成完善',
            '数据库工具内置',
            '调试能力强',
            '社区版免费'
          ],
          disadvantages: [
            '相对较重',
            '收费',
            '启动慢',
            '对前端支持不如 WebStorm',
            '资源占用高'
          ]
        },
        {
          id: 'visual-studio',
          name: 'Visual Studio',
          level: 85,
          officialLink: 'https://visualstudio.microsoft.com',
          repo: 'microsoft/vs-threading',
          version: 'VS 2022 17.14',
          reason: 'Visual Studio 是 Windows 开发的首选 IDE,.NET/C++ 开发体验一流,是 Windows 桌面和游戏开发的标准工具。',
          advantages: [
            'Windows 开发首选',
            '.NET/C++ 支持顶级',
            '企业级功能',
            '测试工具完善',
            '性能分析工具',
            '跨平台 C++ 支持',
            'CMake 集成'
          ],
          disadvantages: [
            '仅限 Windows(除了 VS Code)',
            '体积大,安装慢',
            '仅部分功能免费',
            'macOS/Linux 支持有限'
          ]
        },
        {
          id: 'vim',
          name: 'Vim',
          level: 75,
          officialLink: 'https://vim.org',
          repo: 'vim/vim',
          version: 'v9.1.0',
          reason: 'Vim 是终端编辑器,模式编辑高效,远程服务器开发必备,是追求极致效率的开发者的终极选择。',
          advantages: [
            '终端内编辑效率高',
            '远程服务器必备',
            '内存占用极低',
            '高度可定制',
            '插件生态丰富',
            '键盘流操作',
            '所有 Linux 默认安装'
          ],
          disadvantages: [
            '学习曲线极其陡峭',
            '鼠标支持差',
            '协作代码阅读困难',
            '格式化功能弱',
            '新人培养成本高'
          ]
        }
      ]
    },
    {
      id: 'tc-test',
      name: '测试工具',
      children: [
        {
          id: 'jest',
          name: 'Jest',
          level: 88,
          officialLink: 'https://jestjs.io',
          repo: 'jestjs/jest',
          version: 'v30.0.0',
          reason: 'Jest 是 JavaScript 测试框架,零配置、快照测试、内置覆盖率,是 React/Node.js 测试的首选。',
          advantages: [
            '零配置开箱即用',
            '快照测试便捷',
            '内置覆盖率报告',
            '并行测试速度快',
            'Mock 系统完善',
            'watch 模式开发友好',
            'React Testing Library 集成'
          ],
          disadvantages: [
            '大型项目可能慢',
            '配置灵活性不如 Vitest',
            '单线程,多核利用不足',
            '对非 JS 项目支持有限'
          ]
        },
        {
          id: 'cypress',
          name: 'Cypress',
          level: 82,
          officialLink: 'https://cypress.io',
          repo: 'cypress-io/cypress',
          version: 'v14.3.3',
          reason: 'Cypress 是现代 E2E 测试框架,实时 reload、time travel debug,是前端 E2E 测试的热门选择。',
          advantages: [
            '实时 reload',
            'Time travel debug',
            '自动等待机制',
            '视频录制',
            '截图对比',
            'CI 集成简单',
            'API 测试支持'
          ],
          disadvantages: [
            '仅支持 JS/TS',
            '跨标签页测试受限',
            '文件上传测试复杂',
            'Safari 支持有限',
            '大型测试套件可能慢'
          ]
        },
        {
          id: 'playwright',
          name: 'Playwright',
          level: 85,
          officialLink: 'https://playwright.dev',
          repo: 'microsoft/playwright',
          version: 'v1.53.0',
          reason: 'Playwright 是微软的 E2E 测试框架,跨浏览器、跨平台、自动等待,是现代 Web 测试的首选。',
          advantages: [
            'Chromium/Firefox/WebKit 全支持',
            '自动等待机制',
            '跨平台支持',
            '并行测试快',
            '代码生成测试',
            'CI 集成简单',
            '移动端模拟支持'
          ],
          disadvantages: [
            '学习曲线',
            '某些功能需要 paid plan',
            '视频录制不如 Cypress',
            '复杂场景配置多'
          ]
        },
        {
          id: 'junit',
          name: 'JUnit',
          level: 78,
          officialLink: 'https://junit.org/junit5/',
          repo: 'junit-team/junit5',
          version: 'JUnit 5.11.0',
          reason: 'JUnit 是 Java 测试的事实标准,现代版本支持 Lambda、动态测试,是 Java 单元测试的首选。',
          advantages: [
            'Java 测试标准',
            '注解驱动',
            '参数化测试',
            '动态测试',
            '与主流构建工具集成',
            'IDE 内置支持',
            '生态丰富(JUnit 4 兼容)'
          ],
          disadvantages: [
            '某些测试需要大量样板',
            '并行执行配置复杂',
            '外部依赖 Mock 复杂',
            '与 JavaScript 测试体验有差距'
          ]
        }
      ]
    }
  ]
}
