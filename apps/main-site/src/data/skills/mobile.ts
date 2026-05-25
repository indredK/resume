export default {
  id: 'mobile',
  name: '移动端技术',
  icon: '📱',
  color: '#f472b6',
  children: [
    {
      id: 'mob-native',
      name: '原生开发',
      children: [
        {
          id: 'ios-swift',
          name: 'iOS (Swift)',
          level: 65,
          officialLink: 'https://swift.org',
          version: 'Swift 6.2',
          reason: 'Swift 是苹果官方语言,现代安全,与 Apple 生态深度集成,是 iOS 原生开发的首选。',
          advantages: [
            'Apple 官方支持',
            '内存安全默认',
            '性能优秀',
            'SwiftUI 声明式 UI',
            '与 Objective-C 兼容',
            'Playgrounds 快速原型',
            '现代语法糖'
          ],
          disadvantages: [
            '仅限 Apple 平台',
            '学习曲线',
            'macOS 构建必需',
            '第三方库不如 Android',
            '招聘相对较难'
          ]
        },
        {
          id: 'ios-oc',
          name: 'iOS (Objective-C)',
          level: 60,
          officialLink: 'https://developer.apple.com/objective-c/',
          version: 'Objective-C',
          reason: 'Objective-C 是 iOS 开发的历史语言,大量存量应用仍需维护,某些场景如系统级开发仍有价值。',
          advantages: [
            'iOS 存量代码维护',
            'Runtime 动态特性',
            '与 C/C++ 混编方便',
            'MRC/ARC 内存管理',
            'Category 扩展机制',
            '大量历史项目参考'
          ],
          disadvantages: [
            '语法复杂',
            '无现代语言特性',
            '社区活跃度下降',
            '新项目不推荐',
            '学习价值有限'
          ]
        },
        {
          id: 'android-kotlin',
          name: 'Android (Kotlin)',
          level: 70,
          officialLink: 'https://kotlinlang.org',
          version: 'Kotlin 2.1.0',
          reason: 'Kotlin 是 Android 官方首选语言,空安全、协程支持、Java 100% 互操作,是现代 Android 开发的标准。',
          advantages: [
            'Google 官方支持',
            '空安全',
            '协程异步简洁',
            '与 Java 100% 互操作',
            'Jetpack Compose',
            '扩展函数',
            '智能类型推导'
          ],
          disadvantages: [
            '编译速度有时慢',
            'Kotlin Multiplatform 仍不成熟',
            '某些场景 Java 更直接',
            '历史代码仍 Java 为主'
          ]
        },
        {
          id: 'android-java',
          name: 'Android (Java)',
          level: 75,
          officialLink: 'https://java.com',
          version: 'JDK 17+',
          reason: 'Java 是 Android 开发的历史语言,大量存量应用和库仍 Java 写成,是 Android 维护和某些企业级应用的首选。',
          advantages: [
            'Android 开发历史语言',
            '大量存量代码',
            '企业级生态',
            '强类型稳定',
            'JVM 工具丰富',
            '第三方库丰富',
            '人才市场大'
          ],
          disadvantages: [
            '空指针风险',
            '语法冗长',
            '协程支持不如 Kotlin',
            '新项目推荐 Kotlin',
            '学习曲线对移动开发者较高'
          ]
        }
      ]
    },
    {
      id: 'mob-cross',
      name: '跨平台开发',
      children: [
        {
          id: 'rn-cross',
          name: 'React Native',
          level: 80,
          officialLink: 'https://reactnative.dev',
          repo: 'facebook/react-native',
          version: 'v0.84.1',
          reason: 'React Native 使用 React 生态开发原生移动应用,是跨平台开发的主流选择,Facebook/Meta 嫡系。',
          advantages: [
            'React 生态复用',
            '原生组件渲染',
            '热更新支持',
            '大量第三方组件',
            '社区活跃',
            'New Architecture 性能提升',
            'Microsoft 参与(Windows)'
          ],
          disadvantages: [
            '某些原生模块需编写',
            '调试有时复杂',
            'Bridge 性能开销(旧架构)',
            'iOS/Android 分支代码仍可能',
            '版本升级 breaking'
          ]
        },
        {
          id: 'flutter-cross',
          name: 'Flutter',
          level: 72,
          officialLink: 'https://flutter.dev',
          repo: 'flutter/flutter',
          version: 'v3.41.0',
          reason: 'Flutter 使用 Dart 语言,自绘引擎渲染,60fps 流畅动画,是追求高性能和高保真设计的首选。',
          advantages: [
            '自绘引擎,高度自定义',
            '60fps 流畅动画',
            '一套代码 iOS/Android/Web/Desktop',
            'Widget 丰富',
            'Hot Reload 开发体验',
            'Google 官方支持',
            '性能优秀'
          ],
          disadvantages: [
            'Dart 语言额外学习',
            '包生态不如 RN',
            '原生能力需要 Platform Channel',
            '包体积相对较大',
            '某些平台特性支持滞后'
          ]
        },
        {
          id: 'uniapp-cross',
          name: 'UniApp',
          level: 85,
          officialLink: 'https://uniapp.dcloud.net.cn',
          repo: 'dcloudio/uni-app',
          version: 'v4.0.0',
          reason: 'UniApp 基于 Vue.js,一套代码编译到 iOS/Android/小程序/H5,是国内跨平台开发的首选,生态本土化。',
          advantages: [
            'Vue.js 开发者友好',
            '小程序支持最全面',
            '国内生态完善',
            'UTS 通用的 TypeScript',
            'NVue 原生渲染',
            '大量国内插件市场',
            'DCloud 持续维护'
          ],
          disadvantages: [
            '国际生态相对弱',
            '自定义程度有限',
            '大型应用性能优化需深入',
            '与国外服务集成有时不便'
          ]
        },
        {
          id: 'taro-cross',
          name: 'Taro',
          level: 78,
          officialLink: 'https://taro.jd.com',
          repo: 'NervJS/taro',
          version: 'v4.0.0',
          reason: 'Taro 使用 React 生态开发跨端应用,支持小程序/H5/RN,是京东 RN 系跨平台的主流方案。',
          advantages: [
            'React 生态',
            '多端编译支持',
            '小程序支持成熟',
            'nutui 组件库',
            'Taro Doctor 工具',
            '京东持续维护',
            '插件机制丰富'
          ],
          disadvantages: [
            '编译结果不如原生',
            '某些小程序特性受限',
            '升级可能 breaking',
            '第三方库兼容问题',
            '调试不如原生直观'
          ]
        },
        {
          id: 'cordova',
          name: 'Cordova/PhoneGap',
          level: 65,
          officialLink: 'https://cordova.apache.org',
          repo: 'apache/cordova-cli',
          version: 'v12.0.0',
          reason: 'Cordova 是最早的跨平台方案,使用 WebView 打包,是轻量级跨平台应用的简单选择。',
          advantages: [
            '最早跨平台方案',
            '上手简单',
            '插件生态历史积累',
            'Web 技术栈',
            'IDE 选择自由',
            '在线构建支持'
          ],
          disadvantages: [
            'WebView 性能限制',
            '原生体验差',
            '插件质量参差不齐',
            '已逐渐被 RN/Flutter 取代',
            '性能问题明显'
          ]
        }
      ]
    }
  ]
}
