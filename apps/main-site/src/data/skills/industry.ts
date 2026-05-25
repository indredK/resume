export default {
  id: 'industry',
  name: '行业方案',
  icon: '🏢',
  color: '#64748b',
  children: [
    {
      id: 'ind-erp',
      name: 'ERP 系统',
      children: [
        {
          id: 'sap',
          name: 'SAP',
          level: 65,
          officialLink: 'https://sap.com',
          version: 'S/4HANA',
          reason: 'SAP 是全球最大的企业管理软件公司,SAP S/4HANA 是现代 ERP 系统的主流选择,是大型企业数字化转型的核心。',
          advantages: [
            '全球企业级市场领先',
            'ERP 功能最全面',
            '财务/供应链/HR 集成',
            '行业解决方案丰富',
            '实施合作伙伴生态',
            '持续创新投入'
          ],
          disadvantages: [
            '实施成本极高',
            '运维复杂',
            '需要专业认证顾问',
            '定制开发复杂',
            '年费模式贵'
          ]
        },
        {
          id: 'yonyou',
          name: '用友 U8/NC',
          level: 70,
          officialLink: 'https://yonyou.com',
          version: '用友 NC Cloud',
          reason: '用友是中国本土 ERP 的领导品牌,U8 适合中小企业,NC Cloud 面向大型企业,是国产 ERP 的首选。',
          advantages: [
            '中国本土化适配',
            '中小企业市场占有率高',
            '成本相对合理',
            '本地化服务网络',
            '与国产数据库适配',
            '操作习惯符合国内用户'
          ],
          disadvantages: [
            '国际业务支持有限',
            '技术架构相对老旧',
            '扩展性有限',
            'UI/UX 不够现代',
            '某些场景性能问题'
          ]
        },
        {
          id: 'kingdee',
          name: '金蝶 K3',
          level: 68,
          officialLink: 'https://kingdee.com',
          version: '金蝶云·星空',
          reason: '金蝶是中国领先的 ERP 厂商,金蝶云·星空是面向成长型企业的云 ERP,是国产云 ERP 的热门选择。',
          advantages: [
            '云原生架构',
            'SaaS 模式灵活',
            '移动端支持好',
            '与电商系统集成',
            '成本按需付费',
            '中小企业友好'
          ],
          disadvantages: [
            '大型企业功能不足',
            '数据安全顾虑',
            '离线功能有限',
            '定制化能力弱',
            '与国外系统集成复杂'
          ]
        }
      ]
    },
    {
      id: 'ind-mes',
      name: 'MES 系统',
      children: [
        {
          id: 'mes-standard',
          name: '标准 MES',
          level: 72,
          officialLink: 'https://en.wikipedia.org/wiki/Manufacturing_execution_system',
          version: 'ISA-95',
          reason: '标准 MES 系统遵循 ISA-95 标准,提供完整的生产执行管理功能,是离散制造业数字化车间的核心。',
          advantages: [
            '遵循国际标准',
            '功能完善',
            '跨行业适用',
            '与 ERP/WMS 集成',
            '生产追溯完整',
            '报表和分析'
          ],
          disadvantages: [
            '实施周期长',
            '成本高',
            '需要标准化生产流程',
            '定制开发可能复杂',
            '人员培训成本'
          ]
        },
        {
          id: 'mes-custom',
          name: '定制 MES',
          level: 75,
          officialLink: 'https://github.com',
          version: 'Custom',
          reason: '针对特定行业和生产流程定制的 MES 系统,贴合实际业务,是特殊工艺和产线的首选。',
          advantages: [
            '完全贴合业务',
            '灵活适应特殊工艺',
            '数据采集针对性强',
            '用户体验优化',
            '易于迭代改进',
            '成本可控'
          ],
          disadvantages: [
            '依赖开发团队',
            '缺乏行业最佳实践',
            '维护成本可能高',
            '扩展性有限',
            '无标准接口'
          ]
        }
      ]
    }
  ]
}
