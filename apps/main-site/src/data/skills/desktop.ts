import type { SkillNode } from '../types'

export default {
  id: 'desktop',
  name: '桌面端技术',
  icon: '🖥️',
  color: '#60a5fa',
  children: [
    {
      id: 'dt-web',
      name: 'Web 桌面端',
      children: [
        {
          id: 'electron',
          name: 'Electron',
          level: 88,
          officialLink: 'https://electronjs.org',
          repo: 'electron/electron',
          version: 'v34.0.2',
          reason: 'Electron 是最成熟的 Web 桌面端方案,使用前端技术开发跨平台应用,生态丰富,文档完善,是桌面端开发的主流选择。',
          advantages: [
            '使用熟悉的前端技术栈',
            '跨平台支持(iOS/Android/Windows/Mac/Linux)',
            '生态极其丰富,npm 包众多',
            'Chromium 内核,渲染能力强',
            '热更新支持完善',
            '社区活跃,问题容易找到解决方案'
          ],
          disadvantages: [
            '打包体积大(100MB+)',
            '性能不如原生应用',
            '内存占用较高',
            '安全需要额外关注',
            '启动速度较慢'
          ]
        },
        {
          id: 'tauri',
          name: 'Tauri (Rust)',
          level: 72,
          officialLink: 'https://tauri.app',
          repo: 'tauri-apps/tauri',
          version: 'v2.11.1',
          reason: 'Tauri 使用 Rust 语言编写后端,打包体积小(约 10MB),性能优秀,是 Electron 的轻量级替代方案,正在迅速流行。',
          advantages: [
            '打包体积极小(比 Electron 小 10 倍)',
            '性能优异,Rust 后端高效',
            '内存占用低',
            '安全模型更严格',
            '支持 Swift/Kotlin 扩展',
            '前端框架无关'
          ],
          disadvantages: [
            '生态比 Electron 小',
            '社区和招聘市场较小',
            '某些原生功能需要 Rust 开发',
            '插件系统不如 Electron 成熟',
            'Windows 打包需要 Rust 环境'
          ]
        },
        {
          id: 'wails',
          name: 'Wails (Go)',
          level: 75,
          officialLink: 'https://wails.io',
          repo: 'wailsapp/wails',
          version: 'v2.14.0',
          reason: 'Wails 使用 Go 语言后端,让熟悉 Go 的开发者能用前端技术开发桌面应用,性能优秀且打包体积适中。',
          advantages: [
            'Go 后端性能优秀',
            '打包体积适中(20-30MB)',
            '原生组件支持好',
            '热更新开发体验好',
            'TypeScript 类型自动生成',
            '社区活跃度上升'
          ],
          disadvantages: [
            '生态比 Electron 小',
            'Go 招聘市场较窄',
            '某些平台支持不完善',
            '原生 GUI 开发需要前端+Go 双技能',
            '插件生态待完善'
          ]
        },
        {
          id: 'neutralino',
          name: 'Neutralino.js',
          level: 60,
          officialLink: 'https://neutralino.js.org',
          repo: 'neutralinojs/neutralinojs',
          version: 'v5.3.0',
          reason: 'Neutralino.js 是轻量级的桌面应用框架,打包体积极小(约 2MB),适合对体积敏感的应用场景。',
          advantages: [
            '打包体积极小',
            '内存占用极低',
            '启动速度快',
            '前端框架无关',
            '跨平台支持'
          ],
          disadvantages: [
            '生态不完善',
            '原生 API 支持有限',
            '社区极小',
            '某些复杂场景不适用',
            '文档相对简单'
          ]
        }
      ]
    },
    {
      id: 'dt-dotnet',
      name: 'C# .NET 生态',
      children: [
        {
          id: 'wpf',
          name: 'WPF',
          level: 85,
          officialLink: 'https://learn.microsoft.com/dotnet/desktop/wpf',
          version: '.NET 8.0',
          reason: 'WPF 是 Windows 桌面应用的成熟方案,XAML + C# 提供强大的 UI 能力和硬件加速,适合企业级 Windows 应用。',
          advantages: [
            'XAML UI 表达能力强大',
            '硬件加速渲染',
            '数据绑定功能完善',
            'MVVM 模式成熟',
            '企业级生态完整',
            '自定义能力强'
          ],
          disadvantages: [
            '仅支持 Windows',
            '学习曲线较陡',
            '跨平台需求无法满足',
            '界面开发效率不如现代前端框架'
          ]
        },
        {
          id: 'winforms',
          name: 'WinForms',
          level: 82,
          officialLink: 'https://learn.microsoft.com/dotnet/desktop/winforms',
          version: '.NET 8.0',
          reason: 'WinForms 是传统的 Windows 桌面开发框架,适合快速开发简单工具或维护存量系统。',
          advantages: [
            '上手简单',
            'IDE 可视化设计直观',
            '适合快速开发简单应用',
            '社区资源丰富',
            '维护成本低'
          ],
          disadvantages: [
            '仅支持 Windows',
            'UI 能力有限',
            '样式定制化成本高',
            '已被 WPF 超越'
          ]
        },
        {
          id: 'maui',
          name: '.NET MAUI',
          level: 70,
          officialLink: 'https://dotnet.microsoft.com/apps/maui',
          version: 'v8.0.0',
          reason: '.NET MAUI 是微软最新的跨平台 UI 框架,一份代码支持 Windows/macOS/iOS/Android,是 .NET 跨平台战略的核心。',
          advantages: [
            '.NET 跨平台战略核心',
            '一份代码多平台运行',
            '原生控件渲染',
            '_hot_reload 支持',
            '微软持续投入',
            '与 Blazor 集成好'
          ],
          disadvantages: [
            '相对年轻,稳定性待提升',
            'macOS 开发需要 Xcode',
            '社区比成熟框架小',
            '性能仍有优化空间'
          ]
        },
        {
          id: 'avalonia',
          name: 'Avalonia',
          level: 72,
          officialLink: 'https://avaloniaui.net',
          version: 'v11.2.0',
          reason: 'Avalonia 是 WPF 的跨平台替代品,使用 XAML + C# 开发,支持 Windows/macOS/Linux,是 .NET 桌面跨平台的首选。',
          advantages: [
            'WPF 风格的跨平台实现',
            'XAML 语法相似,学习成本低',
            '支持 Windows/macOS/Linux',
            '社区活跃度上升',
            '像素级渲染一致',
            '开源免费'
          ],
          disadvantages: [
            '生态比 WPF 小',
            '某些原生特性支持滞后',
            '文档不如 WPF 完善',
            '招聘市场较小'
          ]
        },
        {
          id: 'blazor-hybrid',
          name: 'Blazor Hybrid',
          level: 68,
          officialLink: 'https://dotnet.microsoft.com/apps/aspnet/mobile',
          version: '.NET 8.0',
          reason: 'Blazor Hybrid 使用 WebView 渲染 Blazor UI,结合原生能力,是微软在跨平台桌面领域的创新尝试。',
          advantages: [
            '使用 Web 技术栈开发',
            '与现有 Blazor Web 应用共享代码',
            '原生控件嵌入支持',
            '.NET 生态完整',
            '热更新支持'
          ],
          disadvantages: [
            'WebView 性能限制',
            '不如纯原生框架流畅',
            '调试体验一般',
            '学习曲线有'
          ]
        },
        {
          id: 'console-dotnet',
          name: 'Console Application',
          level: 90,
          officialLink: 'https://learn.microsoft.com/dotnet/core/tutorials/cli-templates',
          version: '.NET 8.0',
          reason: 'C# 控制台应用是自动化脚本、工具开发的基础,配合 .NET 生态的强类型和高性能,是后端工具开发的首选。',
          advantages: [
            '开发效率高',
            '性能优异',
            '强类型安全',
            '.NET 生态丰富',
            '跨平台支持',
            '部署简单'
          ],
          disadvantages: [
            '无图形界面',
            '不适合普通用户',
            '需要 .NET 运行时'
          ]
        },
        {
          id: 'unity3d',
          name: 'Unity3D',
          level: 75,
          officialLink: 'https://unity.com',
          version: '2024.2.0',
          reason: 'Unity3D 是最流行的游戏引擎之一,使用 C# 开发,支持多平台发布(PC/移动/主机/VR/AR),不仅是游戏,也适合交互应用。',
          advantages: [
            '跨平台发布能力极强',
            'C# 开发语言',
            '资源商店生态丰富',
            'VR/AR 支持完善',
            '文档和教程丰富',
            '专业级物理和渲染'
          ],
          disadvantages: [
            '学习曲线陡峭',
            '授权费用较高',
            '体积大,不适合轻量应用',
            '游戏开发偏向,非游戏应用略显笨重'
          ]
        }
      ]
    },
    {
      id: 'dt-cpp',
      name: 'C++ 生态',
      children: [
        {
          id: 'qt',
          name: 'Qt',
          level: 78,
          officialLink: 'https://qt.io',
          version: 'v6.9.0',
          reason: 'Qt 是 C++ 桌面 UI 框架的标杆,跨平台支持完善,组件丰富,适合专业级桌面应用和嵌入式开发。',
          advantages: [
            '跨平台能力最强',
            'UI 组件库丰富',
            '信号与槽机制优雅',
            'Qt Creator IDE 优秀',
            '国际化支持完善',
            '商业授权灵活'
          ],
          disadvantages: [
            'C++ 开发效率有限',
            '学习曲线较陡',
            '某些商业特性需要付费',
            '编译时间较长'
          ]
        },
        {
          id: 'mfc',
          name: 'MFC',
          level: 70,
          officialLink: 'https://learn.microsoft.com/cpp/mfc',
          version: 'VS 2022',
          reason: 'MFC 是微软官方的 C++ Windows GUI 框架,适合维护 Windows 存量软件和学习 Windows 桌面开发底层原理。',
          advantages: [
            '微软官方支持',
            '与 Windows API 结合紧密',
            '适合学习 Windows 桌面原理',
            '维护 Windows 老项目',
            '性能优异'
          ],
          disadvantages: [
            '仅支持 Windows',
            '界面开发效率低',
            '已非微软主要发展方向',
            '现代 UI 开发首选 WPF/Qt'
          ]
        },
        {
          id: 'gtk',
          name: 'GTK+',
          level: 55,
          officialLink: 'https://gtk.org',
          version: 'v4.16.0',
          reason: 'GTK+ 是 Linux 桌面的主流 UI 框架,GNOME 桌面环境基于此开发,适合 Linux 原生应用开发。',
          advantages: [
            'Linux 原生支持好',
            'GNOME 生态核心',
            '开源免费',
            '主题定制灵活',
            '跨平台(Linux/Windows/macOS)'
          ],
          disadvantages: [
            'Windows/macOS 支持不如 Linux',
            '文档相对分散',
            'C 语言 API,现代开发效率低',
            '社区比 Qt 小'
          ]
        }
      ]
    },
    {
      id: 'dt-delphi',
      name: 'Delphi / Lazarus',
      level: 50,
      officialLink: 'https://www.lazarus-ide.org',
      version: 'v3.0.0',
      reason: 'Delphi/Lazarus 是快速桌面 UI 开发的老牌方案,适合快速构建数据库应用和 Windows 桌面工具,维护 Delphi 存量项目有价值。',
      advantages: [
        'RAD 开发效率极高',
        '数据库组件丰富',
        '适合快速原型开发',
        'Windows 桌面生态完整',
        '学习曲线平缓'
      ],
      disadvantages: [
        '语言和生态较老',
        '跨平台能力有限',
        '现代招聘市场小',
        'UI 设计不如现代框架灵活'
      ]
    },
    {
      id: 'dt-cross',
      name: '跨平台框架',
      children: [
        {
          id: 'flutter-dt',
          name: 'Flutter Desktop',
          level: 70,
          officialLink: 'https://flutter.dev/multi-platform/desktop',
          version: 'v3.41.0',
          reason: 'Flutter Desktop 让 Flutter 能力扩展到桌面端,一份代码支持 Windows/macOS/Linux,适合已有 Flutter 移动端的项目。',
          advantages: [
            'Flutter 生态共享',
            '原生渲染性能',
            '热重载开发体验',
            'Google 持续投入',
            'UI 一致性好'
          ],
          disadvantages: [
            '桌面端生态不如移动端',
            '某些桌面特性支持滞后',
            '打包体积仍较大',
            '插件生态待完善'
          ]
        },
        {
          id: 'javafx',
          name: 'JavaFX',
          level: 60,
          officialLink: 'https://openjfx.io',
          version: 'v23.0.0',
          reason: 'JavaFX 是 Java 桌面 UI 框架的现代替代品,提供丰富的 UI 组件和 CSS 样式定制,适合 Java 企业级桌面应用。',
          advantages: [
            'Java 生态完善',
            '跨平台能力强',
            'CSS 样式定制',
            'FXML UI 设计',
            'Scene Builder 可视化工具'
          ],
          disadvantages: [
            '需要 Java 运行时',
            '界面开发效率不如现代框架',
            '社区较小',
            '某些特性不如 Web 框架灵活'
          ]
        }
      ]
    }
  ]
}
