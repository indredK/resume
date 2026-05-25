export default {
  id: 'embedded',
  name: '嵌入式',
  icon: '🔌',
  color: '#22d3ee',
  children: [
    {
      id: 'em-mcu',
      name: '微控制器',
      children: [
        {
          id: 'stm32',
          name: 'STM32',
          level: 80,
          officialLink: 'https://st.com/stm32',
          version: 'STM32CubeIDE',
          reason: 'STM32 是 ARM Cortex-M 微控制器的代表,性能强、功耗低、外设丰富,是嵌入式开发的主流选择。',
          advantages: [
            'ARM Cortex-M 性能选择多',
            '低功耗设计',
            '外设丰富',
            'HAL/LL 库支持',
            'FreeRTOS 原生支持',
            'CubeMX 配置工具',
            '生态系统完善'
          ],
          disadvantages: [
            '寄存器级调试复杂',
            '部分芯片供货问题',
            '国产替代需要适配',
            '学习资料不均',
            '某些型号价格高'
          ]
        },
        {
          id: 'arduino',
          name: 'Arduino',
          level: 85,
          officialLink: 'https://arduino.cc',
          repo: 'arduino/Arduino',
          version: 'Arduino IDE 2.3',
          reason: 'Arduino 以简单易用著称,是创客和教育领域的首选,大量扩展板和社区支持,是电子原型开发的利器。',
          advantages: [
            '上手极其简单',
            '社区资源丰富',
            '扩展板(Shield)生态完善',
            '大量第三方库',
            '跨平台 IDE',
            '适合快速原型',
            '教育推广成功'
          ],
          disadvantages: [
            '性能有限',
            '不适合实时系统',
            '内存受限',
            '不适合产品级开发',
            '安全机制缺乏'
          ]
        },
        {
          id: 'esp32',
          name: 'ESP32',
          level: 82,
          officialLink: 'https://espressif.com/esp32',
          repo: 'espressif/esp-idf',
          version: 'ESP-IDF 5.4',
          reason: 'ESP32 是乐鑫的 WiFi/Bluetooth SoC,性价比极高,双核处理器,无线连接,是 IoT 项目的热门选择。',
          advantages: [
            'WiFi + Bluetooth 集成',
            '双核处理器',
            '性价比极高',
            '低功耗模式',
            'MicroPython/Arduino 支持',
            '大量开源项目参考',
            '国内生态活跃'
          ],
          disadvantages: [
            'RTOS 学习曲线',
            '睡眠模式调试复杂',
            '某些芯片不稳定',
            '文档部分为中文',
            '射频调试需要经验'
          ]
        },
        {
          id: 'raspberry-pi',
          name: 'Raspberry Pi',
          level: 82,
          officialLink: 'https://raspberrypi.org',
          repo: 'raspberrypi/linux',
          version: 'Raspberry Pi 5',
          reason: 'Raspberry Pi 是单板计算机的标杆,运行 Linux,接口丰富,是教育、原型、边缘计算的热门选择。',
          advantages: [
            '运行完整 Linux',
            'GPIO 接口',
            '社区生态最活跃',
            '大量操作系统选择',
            'HDMI/USB/网络接口',
            '计算模块适合工业',
            '文档完善'
          ],
          disadvantages: [
            '不是真正实时系统',
            '功耗较高',
            '体积大于 MCU',
            '不适合电池供电',
            '价格比 MCU贵'
          ]
        }
      ]
    },
    {
      id: 'em-rtos',
      name: '实时操作系统',
      children: [
        {
          id: 'freertos',
          name: 'FreeRTOS',
          level: 78,
          officialLink: 'https://freertos.org',
          repo: 'FreeRTOS/FreeRTOS-Kernel',
          version: 'v11.2.0',
          reason: 'FreeRTOS 是最流行的开源 RTOS,内核小巧、任务调度完善、是学习 RTOS 和商业产品的首选。',
          advantages: [
            '开源免费',
            '内核小巧(约 9KB)',
            '商业认证',
            '大量芯片支持',
            '社区活跃',
            '低功耗支持',
            'Amazon IoT 集成'
          ],
          disadvantages: [
            '无内存保护(需商用版)',
            '网络协议栈单独购买',
            '调试工具不如商业版',
            '文件系统单独购买',
            '文档不够详细'
          ]
        },
        {
          id: 'rt-thread',
          name: 'RT-Thread',
          level: 75,
          officialLink: 'https://rt-thread.org',
          repo: 'RT-Thread/rt-thread',
          version: 'RT-Thread 5.1',
          reason: 'RT-Thread 是国产 RTOS 的优秀代表,组件丰富、中文社区活跃、是国内 IoT 和嵌入式开发的首选。',
          advantages: [
            '国产开源',
            '组件极其丰富',
            '中文社区活跃',
            '软件包生态完善',
            'FinSH Shell 好用',
            '低功耗支持',
            '国内芯片适配多'
          ],
          disadvantages: [
            '国际生态有限',
            '某些芯片适配滞后',
            '文档英文版不全',
            '商业案例相对较少'
          ]
        },
        {
          id: 'zephyr',
          name: 'Zephyr',
          level: 70,
          officialLink: 'https://zephyrproject.org',
          repo: 'zephyrproject-rtos/zephyr',
          version: 'Zephyr 3.9',
          reason: 'Zephyr 是 Linux 基金会的开源 RTOS,安全机制完善、芯片支持广泛、是下一代 IoT 设备的有力竞争者。',
          advantages: [
            'Linux 基金会支持',
            '安全机制完善',
            '芯片支持广泛',
            '设备树配置',
            'Kconfig 构建系统',
            '蓝牙/WiFi 栈内置',
            'Google/Intel/Nordic 支持'
          ],
          disadvantages: [
            '学习曲线较陡',
            '构建系统复杂',
            '社区相对较小',
            '国内资源少',
            '与国内芯片适配需工作'
          ]
        }
      ]
    }
  ]
}
