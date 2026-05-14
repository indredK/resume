import type { SkillNode } from '../types'

export default {
  id: 'industrial',
  name: '工业控制',
  icon: '🏭',
  color: '#fb923c',
  children: [
    {
      id: 'ind-dotnet',
      name: 'C# .NET 工控',
      children: [
        {
          id: 'dotnet-framework',
          name: '.NET Framework',
          level: 88,
          officialLink: 'https://dotnet.microsoft.com',
          version: '.NET Framework 4.8',
          reason: '.NET Framework 是 Windows 工控软件的主流开发框架,WPF/WinForms 生态成熟,是工控行业存量系统维护的主力。',
          advantages: [
            'Windows 工控生态成熟',
            'WPF 界面开发效率高',
            '与西门子/ABB 等 PLC 通讯库丰富',
            '强类型,稳定性好',
            'Visual Studio 工具完善',
            '企业级支持稳定'
          ],
          disadvantages: [
            '仅限 Windows',
            '开源有限',
            '.NET Core/5+ 迁移有工作',
            '容器化困难'
          ]
        },
        {
          id: 'dotnet-core',
          name: '.NET Core/5+',
          level: 85,
          officialLink: 'https://dotnet.microsoft.com',
          repo: 'dotnet/runtime',
          version: '.NET 8.0',
          reason: '.NET Core/5+ 是跨平台 .NET,工控场景适合需要跨 Windows/Linux 的现代应用,是新项目工控开发的首选。',
          advantages: [
            '跨平台支持',
            '性能优秀',
            '容器化友好',
            'gRPC 支持好',
            '长期支持版本稳定',
            '与现代工控 IoT 集成方便'
          ],
          disadvantages: [
            'GUI 框架不如 WPF 成熟',
            '工控硬件驱动支持可能不足',
            '某些第三方库只有 Framework 版',
            '学习迁移成本'
          ]
        },
        {
          id: 'wincc',
          name: 'WinCC / WinCC OA',
          level: 72,
          officialLink: 'https://siemens.com/wincc',
          version: 'WinCC 7.5',
          reason: 'WinCC 是西门子官方 HMI/SCADA 软件,工业级稳定性,是西门子 PLC 系统集成的行业标准。',
          advantages: [
            '西门子官方软件',
            '工业级稳定',
            '与 S7 系列 PLC 无缝集成',
            '报表和归档完善',
            '全球广泛使用',
            '技术支持完善'
          ],
          disadvantages: [
            '价格昂贵',
            '仅限西门子生态',
            '开放性有限',
            '脚本 VBS 体验一般',
            '现代化 UI 支持有限'
          ]
        },
        {
          id: 'opc-ua',
          name: 'OPC UA',
          level: 80,
          officialLink: 'https://opcfoundation.org/opc-ua/',
          repo: 'node-opcua/node-opcua',
          version: 'OPC UA 1.05',
          reason: 'OPC UA 是工业 4.0 的互操作性标准,平台无关,安全完善,是现代工控系统集成的核心协议。',
          advantages: [
            '平台无关的互操作标准',
            '安全模型完善',
            '信息模型丰富',
            '工业 4.0 核心',
            '订阅/通知机制',
            '网关穿透能力强',
            '广泛厂商支持'
          ],
          disadvantages: [
            '学习曲线',
            '性能不如直接 socket',
            'SDK 商业许可费用',
            '复杂场景配置繁琐',
            '老设备需要转换网关'
          ]
        }
      ]
    },
    {
      id: 'ind-plc',
      name: 'PLC 编程',
      children: [
        {
          id: 'siemens',
          name: '西门子 S7',
          level: 75,
          officialLink: 'https://siemens.com/s7',
          version: 'TIA Portal V18',
          reason: '西门子 S7 系列 PLC 是全球市场占有率最高的 PLC,特别是 S7-1500 系列,是工业自动化的主流选择。',
          advantages: [
            '全球市场占有率最高',
            'TIA Portal 统一工程平台',
            '运动控制功能强大',
            '安全功能完善',
            '丰富的扩展模块',
            'Profinet 总线支持',
            '大量项目案例参考'
          ],
          disadvantages: [
            '专有协议,开放性差',
            '价格较高',
            '编程软件体积大',
            '与第三方集成需 OPC',
            '许可证管理复杂'
          ]
        },
        {
          id: 'omron',
          name: '欧姆龙 NJ/NX',
          level: 72,
          officialLink: 'https://industrial.omron.com',
          version: 'Sysmac Studio V1.5',
          reason: '欧姆龙 NJ/NX 系列 PLC 以运动控制见长, Sysmac Studio 统一编程环境,是高精度运动控制的首选。',
          advantages: [
            '运动控制功能优秀',
            'EtherCAT 原生支持',
            '统一编程环境',
            'CNC 功能集成',
            '安全功能完善',
            '与 Vision 集成好'
          ],
          disadvantages: [
            '市场份额低于西门子',
            '第三方资源相对少',
            '生态系统不如西门子',
            '国内技术支持网络有限'
          ]
        },
        {
          id: 'beckhoff',
          name: '倍福 TwinCAT',
          level: 70,
          officialLink: 'https://beckhoff.com/twincat',
          version: 'TwinCAT 3.1',
          reason: '倍福 TwinCAT 以 PC 控制理念著称,软 PLC 架构灵活, EtherCAT 总线速度极快,是高端自动化和运动控制的选择。',
          advantages: [
            '软 PLC 架构,灵活扩展',
            'EtherCAT 总线速度最快',
            '基于 Windows,开发方便',
            '运动控制精度高',
            '实时性能优秀',
            '开放性较好'
          ],
          disadvantages: [
            '需要专用硬件',
            '学习曲线',
            '国内技术支持有限',
            '价格较高',
            '维护依赖倍福'
          ]
        },
        {
          id: 'ab',
          name: 'AB ControlLogix',
          level: 68,
          officialLink: 'https://ab.com/logix',
          version: 'Studio 5000 V35',
          reason: 'AB (Allen-Bradley) 是美国工业自动化的领导品牌,ControlLogix 系统在北美市场占有率最高,是出口设备的首选。',
          advantages: [
            '北美市场占有率高',
            '系统稳定性极高',
            '与罗克韦尔 MES 集成好',
            '安全功能完善',
            '运动控制强大',
            '全球支持网络'
          ],
          disadvantages: [
            '价格昂贵',
            '专有协议',
            '软件许可证费用高',
            '国内使用成本高',
            '开放性差'
          ]
        }
      ]
    },
    {
      id: 'ind-comm',
      name: '工业通讯',
      children: [
        {
          id: 'modbus',
          name: 'Modbus RTU/TCP',
          level: 82,
          officialLink: 'https://modbus.org',
          version: 'Modbus IDA',
          reason: 'Modbus 是最古老的工业协议之一,简单可靠,几乎所有工业设备都支持,是设备互联互通的首选。',
          advantages: [
            '最简单的工业协议',
            '几乎所有工业设备支持',
            '免费开放',
            '容易实现和调试',
            'RTU(二进制)和 TCP 双版本',
            '多年稳定性验证'
          ],
          disadvantages: [
            '速度慢',
            '无原生安全',
            '主从架构不灵活',
            '错误检测能力有限',
            '点对点模式,多主站复杂'
          ]
        },
        {
          id: 'profinet',
          name: 'PROFINET',
          level: 75,
          officialLink: 'https://profinet.com',
          version: 'PROFINET RT/IRT',
          reason: 'PROFINET 是工业以太网的主流标准,实时性能好,与西门子 PLC 原生集成,是工厂自动化的核心网络。',
          advantages: [
            '工业以太网标准',
            '与西门子生态无缝集成',
            '实时/等时同步支持',
            '网络诊断功能',
            '一线既传数据又供电',
            '星型和总线混合拓扑'
          ],
          disadvantages: [
            '需要专用交换机',
            '配置复杂',
            '成本高于普通以太网',
            '非西门子设备集成需网关',
            '需要专业知识'
          ]
        },
        {
          id: 'ethernet-ip',
          name: 'EtherNet/IP',
          level: 72,
          officialLink: 'https://odva.org',
          version: 'EtherNet/IP',
          reason: 'EtherNet/IP 是 ODVA 组织的工业以太网标准,在北美市场广泛使用,是出口设备特别是美国项目的首选。',
          advantages: [
            'CIP 协议统一',
            '北美市场广泛使用',
            '标准以太网硬件',
            '与 AB PLC 无缝集成',
            '设备级环网(DLR)',
            '对象库丰富'
          ],
          disadvantages: [
            '实时性能不如 PROFINET IRT',
            '国内使用相对较少',
            '配置工具不如西门子',
            '第三方网关选择有限'
          ]
        },
        {
          id: 'canopen',
          name: 'CANopen',
          level: 70,
          officialLink: 'https://can-cia.org/canopen',
          version: 'CiA 301/401',
          reason: 'CANopen 是基于 CAN 总线的高层协议,适合运动控制和嵌入式实时应用,是欧洲设备集成的常见选择。',
          advantages: [
            'CAN 总线可靠',
            '实时性能好',
            '适合运动控制',
            '嵌入式系统友好',
            ' EDS/DCF 配置描述',
            '欧洲设备常见'
          ],
          disadvantages: [
            'CAN 物理层限制距离',
            '速率低(最高 1Mbps)',
            '网络规模有限',
            '需要专用分析仪',
            '与以太网集成需网关'
          ]
        }
      ]
    },
    {
      id: 'ind-scada',
      name: 'SCADA 系统',
      children: [
        {
          id: 'ignition',
          name: 'Ignition',
          level: 78,
          officialLink: 'https://ignition.com',
          version: 'Ignition 8.1',
          reason: 'Ignition 是现代 SCADA 软件,基于 Web 技术,模块化设计,边缘计算支持好,是传统 SCADA 的革新者。',
          advantages: [
            '基于 Web,现代化 UI',
            '模块化架构按需购买',
            '边缘计算支持',
            'SQL 数据库内置',
            '跨平台',
            '标签式架构简单',
            'Python 脚本支持'
          ],
          disadvantages: [
            '厂商锁定(Ignition)',
            '大型项目性能未知',
            '传统工控人员学习曲线',
            '国内技术支持有限'
          ]
        },
        {
          id: 'factorytalk',
          name: 'FactoryTalk',
          level: 72,
          officialLink: 'https://ab.com/factorytalk',
          version: 'FactoryTalk View V14',
          reason: 'FactoryTalk 是罗克韦尔的 HMI/SCADA 平台,与 AB PLC 无缝集成,是 AB 系统集成的标准选择。',
          advantages: [
            '与 AB PLC 深度集成',
            'FactoryTalk SE 平台统一',
            'MES 集成好',
            '安全模型完善',
            'Vantagepoint UI 现代化',
            '全球支持网络'
          ],
          disadvantages: [
            '仅限罗克韦尔生态',
            '价格昂贵',
            '系统要求高',
            '开放性有限'
          ]
        },
        {
          id: 'kepware',
          name: 'Kepware',
          level: 75,
          officialLink: 'https://kepware.com',
          version: 'KEPServerEX 6.5',
          reason: 'Kepware 是工业通讯网关的事实标准,驱动覆盖全球 95% 的工业设备,是 SCADA 数据采集的核心中间件。',
          advantages: [
            '驱动覆盖最全面',
            '150+ 驱动支持',
            'OPC UA/DA 双协议',
            '数据桥接和转换',
            '云端/本地部署',
            '稳定性和可靠性高',
            '诊断工具完善'
          ],
          disadvantages: [
            '商业软件,价格高',
            '配置相对复杂',
            '需要维护更新驱动',
            '性能取决于驱动',
            '国产设备驱动更新慢'
          ]
        }
      ]
    }
  ]
}
