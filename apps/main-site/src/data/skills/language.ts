export default {
  id: 'language',
  name: '编程语言',
  icon: '⌨️',
  color: '#2dd4bf',
  children: [
    {
      id: 'lang-frontend',
      name: '前端语言',
      children: [
        {
          id: 'typescript',
          name: 'TypeScript',
          level: 92,
          officialLink: 'https://typescriptlang.org',
          repo: 'microsoft/TypeScript',
          version: 'v5.8.2',
          reason: 'TypeScript 为 JavaScript 带来了强类型检查,大幅提升了大型前端项目的可维护性和开发体验,是现代 Web 开发的标配。',
          advantages: [
            '强类型检查,减少运行时错误',
            '完善的 IDE 补全 and 重构支持',
            '支持最新的 ECMAScript 特性',
            '接口和泛型提升代码抽象能力',
            '生态系统极其丰富',
            '微软背书,长期稳定更新'
          ],
          disadvantages: [
            '编译过程增加了构建时间',
            '类型系统有时过于复杂(Type Gymnastics)',
            '对某些库的类型定义不完善'
          ]
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          level: 95,
          officialLink: 'https://ecma-international.org/publications-and-standards/standards/ecma-262/',
          repo: 'v8/v8',
          version: 'ES2024',
          reason: 'JavaScript 是 Web 的唯一标准语言,掌握其核心机制和最新特性是成为高级前端工程师的基础。',
          advantages: [
            'Web 开发事实标准',
            '极其灵活,支持多范式编程',
            '非阻塞 I/O 和事件循环机制',
            'npm 生态拥有全球最大的包管理器',
            '几乎所有现代设备都内置支持'
          ],
          disadvantages: [
            '缺乏强类型,大型项目易出错',
            '历史遗留问题多(Type Coercion)',
            '单线程架构在计算密集型场景受限'
          ]
        },
        {
          id: 'html-css',
          name: 'HTML/CSS',
          level: 88,
          officialLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          version: 'HTML5.3/CSS4',
          reason: 'HTML 和 CSS 是 Web 的基石,语义化 HTML 和现代 CSS 是创建优秀 Web 体验的基础,任何前端开发者必须精通。',
          advantages: [
            'Web 基础',
            '语义化提升可访问性',
            'CSS Grid/Flexbox 强大',
            'CSS 变量和自定义属性',
            '动画和过渡',
            '响应式设计支持',
            '无需编译'
          ],
          disadvantages: [
            '浏览器兼容性问题',
            '大型 CSS 难以维护',
            '缺少模块化(虽有 CSS Modules)',
            '复杂布局有时困难',
            '性能考虑'
          ]
        }
      ]
    },
    {
      id: 'lang-backend',
      name: '后端语言',
      children: [
        {
          id: 'python',
          name: 'Python',
          level: 88,
          officialLink: 'https://python.org',
          repo: 'python/cpython',
          version: 'v3.13.2',
          reason: 'Python 以其极简的语法和庞大的生态系统,成为 AI、数据科学、后端开发和自动化脚本的首选语言。',
          advantages: [
            '语法极其简洁,易于学习',
            '全球最强大的 AI/ML 生态 (PyTorch/TensorFlow)',
            '丰富的后端框架 (Django/FastAPI)',
            '极其高效的数据处理能力',
            '广泛应用于科学计算和自动化',
            '社区庞大,学习资源极多'
          ],
          disadvantages: [
            '运行速度相对较慢 (GIL 限制)',
            '动态类型可能导致大型项目重构困难',
            '多线程并发能力受限'
          ]
        },
        {
          id: 'java',
          name: 'Java',
          level: 85,
          officialLink: 'https://java.com',
          repo: 'openjdk/jdk',
          version: 'Java 21 LTS',
          reason: 'Java 是企业级应用开发的常青树,凭借其强大的 JVM、完善的生态和高度的稳定性,统治着大型分布式系统和 Android 开发。',
          advantages: [
            '企业级应用事实标准',
            'JVM 性能优秀且极其稳定',
            '完善的生态系统 (Spring/Hibernate)',
            '强类型和面向对象,适合大型团队协作',
            '强大的多线程和并发处理能力',
            '人才市场极其广阔'
          ],
          disadvantages: [
            '语法相对冗长',
            '启动时间较长,不适合 Serverless',
            '内存开销相对较大'
          ]
        },
        {
          id: 'go-lang',
          name: 'Go (Golang)',
          level: 82,
          officialLink: 'https://go.dev',
          repo: 'golang/go',
          version: 'v1.24.0',
          reason: 'Go 语言以其极致的并发模型、极简的语法和优秀的工程化设计,成为云原生和高并发场景下的首选语言。',
          advantages: [
            '原生并发支持 (Goroutine/Channel)',
            '编译速度极快,部署简单',
            '语法精简,学习成本极低',
            '强大的标准库',
            '云原生事实标准 (Docker/K8s 开发语言)',
            '内存效率高'
          ],
          disadvantages: [
            '泛型支持较晚且有限',
            '错误处理较为繁琐 (if err != nil)',
            '表达能力不如 Rust/Scala'
          ]
        },
        {
          id: 'rust-lang',
          name: 'Rust',
          level: 75,
          officialLink: 'https://rust-lang.org',
          repo: 'rust-lang/rust',
          version: 'v1.85.0',
          reason: 'Rust 是极致追求性能和内存安全的系统级语言,通过所有权机制彻底消除了空指针和并发竞争问题。',
          advantages: [
            '极致的性能 (媲美 C/C++)',
            '内存安全 (无 GC)',
            '强大的类型系统和所有权模型',
            '卓越的并发安全性',
            '现代化的包管理工具 (Cargo)',
            '社区口碑极佳'
          ],
          disadvantages: [
            '学习曲线极其陡峭',
            '编译时间较长',
            '生态相比 Java/Python 仍较年轻'
          ]
        },
        {
          id: 'cpp',
          name: 'C/C++',
          level: 75,
          officialLink: 'https://isocpp.org',
          version: 'C++23',
          reason: 'C/C++ 是系统级编程的基石,从操作系统到游戏引擎,从嵌入式到高频交易,是最底层又最高性能的选择。',
          advantages: [
            '最高性能控制',
            '系统级编程',
            '硬件直接访问',
            '内存精确控制',
            '广泛生态系统',
            '游戏引擎核心',
            '嵌入式首选'
          ],
          disadvantages: [
            '内存安全完全靠自己',
            '学习曲线陡峭',
            '复杂模板可能难懂',
            '编译时间长',
            '缺少现代工具链'
          ]
        }
      ]
    },
    {
      id: 'lang-script',
      name: '脚本语言',
      children: [
        {
          id: 'bash',
          name: 'Bash/Shell',
          level: 82,
          officialLink: 'https://gnu.org/software/bash',
          version: 'Bash 5.2',
          reason: 'Bash 是 Linux/macOS 终端的脚本语言,是服务器运维、自动化脚本开发的必备技能,是 DevOps 工程师的基本功。',
          advantages: [
            '系统默认安装',
            '管道和重定向',
            '自动化脚本首选',
            '与系统命令集成',
            '轻量快速',
            'Cron 任务',
            '容器入口脚本'
          ],
          disadvantages: [
            '语法古老',
            '复杂逻辑难写',
            '调试困难',
            '跨平台有限',
            '文本处理不如 AWK/Perl'
          ]
        },
        {
          id: 'powershell',
          name: 'PowerShell',
          level: 78,
          officialLink: 'https://docs.microsoft.com/powershell',
          version: 'PowerShell 7.5',
          reason: 'PowerShell 是 Windows 自动化的强大利器,对象管道设计优雅,.NET 集成深入,是 Windows 系统管理和 Azure 的首选脚本语言。',
          advantages: [
            'Windows 管理首选',
            '对象管道',
            '.NET 集成',
            'Azure 模块丰富',
            '跨平台(PowerShell Core)',
            '远程管理',
            '与企业微软产品集成'
          ],
          disadvantages: [
            'Linux 原生不支持',
            '语法独特学习曲线',
            '历史包袱(alias)',
            '社区资源相对较少',
            '某些场景不如 Bash'
          ]
        },
        {
          id: 'lua',
          name: 'Lua',
          level: 72,
          officialLink: 'https://lua.org',
          version: 'Lua 5.4',
          reason: 'Lua 是轻量级脚本语言,嵌入其他程序能力强,是游戏脚本(Redis/Wireshark/OpenResty)和配置脚本的首选。',
          advantages: [
            '极其轻量',
            '嵌入能力强',
            '游戏脚本首选',
            'Redis/Nginx 脚本',
            '启动快',
            '内存占用小',
            'C API 简洁'
          ],
          disadvantages: [
            '生态系统有限',
            '不是通用语言',
            '大型项目少见',
            '第三方库少',
            '调试工具缺乏'
          ]
        }
      ]
    }
  ]
}
