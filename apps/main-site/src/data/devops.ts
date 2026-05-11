import type { SkillNode } from './types'

export const devopsSkills: SkillNode = {
  id: 'devops',
  name: 'DevOps',
  icon: '🚀',
  color: '#a78bfa',
  children: [
    {
      id: 'do-ci',
      name: 'CI/CD',
      children: [
        {
          id: 'github-actions',
          name: 'GitHub Actions',
          level: 88,
          officialLink: 'https://github.com/features/actions',
          repo: 'actions/runner',
          version: 'v2.321.0',
          reason: 'GitHub Actions 是 GitHub 内置的 CI/CD 平台,与代码仓库深度集成,配置简单且生态丰富,是现代自动化工作流的首选。',
          advantages: [
            '与 GitHub 深度集成,无需外部配置',
            '配置简单(YAML)',
            '丰富的 Marketplace Actions',
            '支持容器化执行环境',
            '完全托管,运维成本低',
            '开源项目免费额度大'
          ],
          disadvantages: [
            '相比 Jenkins 灵活性稍逊',
            '某些复杂逻辑需要自定义 Action',
            '私有仓库额度限制',
            '调试有时不直观'
          ]
        },
        {
          id: 'gitlab-ci',
          name: 'GitLab CI',
          level: 82,
          officialLink: 'https://docs.gitlab.com/ee/ci/',
          version: 'GitLab CI',
          reason: 'GitLab CI 是 GitLab 自带的 CI/CD 功能,.gitlab-ci.yml 配置简单,流水线可视化优秀,是 GitLab 用户的首选。',
          advantages: [
            '与 GitLab 深度集成',
            '流水线可视化优秀',
            'Auto DevOps 自动检测语言',
            'Kubernetes 集成完善',
            'Docker Registry 内置',
            'MR/Pipeline 联动',
            '无需额外服务器'
          ],
          disadvantages: [
            '仅限 GitLab',
            'Runner 管理有学习曲线',
            '大规模流水线可能慢',
            '配置灵活但可能复杂'
          ]
        },
        {
          id: 'jenkins',
          name: 'Jenkins',
          level: 75,
          officialLink: 'https://jenkins.io',
          repo: 'jenkinsci/jenkins',
          version: 'v2.492',
          reason: 'Jenkins 是老牌开源 CI/CD 工具,插件极其丰富,可定制性极高,适合需要复杂流程和本地部署的企业级场景。',
          advantages: [
            '开源免费,可自托管',
            '插件生态极其丰富(1800+)',
            '可定制性极强',
            '支持 Pipeline as Code (Jenkinsfile)',
            '历史悠久,社区沉淀深厚',
            '适合复杂传统项目集成'
          ],
          disadvantages: [
            '界面陈旧,配置复杂',
            '维护成本高(Java/Tomcat/插件冲突)',
            '相比现代 SaaS 方案不够敏捷',
            '资源占用较高'
          ]
        },
        {
          id: 'circleci',
          name: 'CircleCI',
          level: 75,
          officialLink: 'https://circleci.com/docs',
          version: 'CircleCI',
          reason: 'CircleCI 以速度著称,缓存机制优秀,配置简洁,是追求 CI/CD 效率的团队的热门选择。',
          advantages: [
            '执行速度快',
            '缓存机制优秀',
            '配置简洁',
            'Docker 支持好',
            'SSH 调试方便',
            'GitHub/Bitbucket 集成',
            'Orbs 包管理'
          ],
          disadvantages: [
            '免费额度有限',
            '私有项目需付费',
            'Windows 支持相对较新',
            '国内访问可能慢'
          ]
        }
      ]
    },
    {
      id: 'do-container',
      name: '容器化',
      children: [
        {
          id: 'docker',
          name: 'Docker',
          level: 90,
          officialLink: 'https://docker.com',
          repo: 'docker/cli',
          version: 'v28.0.0',
          reason: 'Docker 是容器化技术的标准,通过镜像和容器实现应用及其依赖的打包与隔离,是现代 DevOps 的基石。',
          advantages: [
            '环境一致性(一次构建,到处运行)',
            '资源利用率高,启动快',
            '应用隔离安全',
            '镜像仓库生态丰富(Docker Hub)',
            '微服务架构的最佳载体',
            'CI/CD 集成简单'
          ],
          disadvantages: [
            'Windows/Mac 上性能略逊于 Linux',
            '存储和网络配置有学习成本',
            '镜像安全需要额外关注',
            '多容器编排需要额外工具(Compose)'
          ]
        },
        {
          id: 'k8s',
          name: 'Kubernetes',
          level: 80,
          officialLink: 'https://kubernetes.io',
          repo: 'kubernetes/kubernetes',
          version: 'v1.32.0',
          reason: 'Kubernetes 是容器编排的事实标准,提供自动部署、扩展和管理容器化应用的能力,是大型分布式系统的核心。',
          advantages: [
            '强大的自动化运维能力',
            '弹性伸缩(HPA/VPA)',
            '服务发现和负载均衡',
            '滚动更新和回滚',
            '声明式配置管理',
            '庞大的社区和生态系统'
          ],
          disadvantages: [
            '学习曲线极其陡峭',
            '运维复杂度高',
            '对小型项目可能过度设计',
            '资源消耗较大'
          ]
        },
        {
          id: 'helm',
          name: 'Helm',
          level: 75,
          officialLink: 'https://helm.sh',
          version: 'v3.18.4',
          reason: 'Helm 是 Kubernetes 的包管理器,Chart 概念让复杂应用部署变得简单,是 K8s 生态不可或缺的工具。',
          advantages: [
            'K8s 包管理标准',
            'Chart 复用性好',
            '版本管理便捷',
            '模板化配置',
            '社区 Chart 丰富',
            '回滚支持',
            '依赖管理'
          ],
          disadvantages: [
            '模板语法学习曲线',
            'Chart 质量参差不齐',
            '调试困难',
            'Values 配置复杂',
            '版本兼容问题'
          ]
        },
        {
          id: 'docker-compose',
          name: 'Docker Compose',
          level: 88,
          officialLink: 'https://docs.docker.com/compose/',
          version: 'v2.35.0',
          reason: 'Docker Compose 以 YAML 定义多容器应用,一键启动完整开发环境,是本地开发和多容器编排的便捷工具。',
          advantages: [
            'YAML 配置简单直观',
            '本地开发体验优秀',
            '一键启动完整环境',
            '适合微服务开发',
            '与 Docker 无缝集成',
            '网络和卷管理内置',
            '开发测试环境一致性'
          ],
          disadvantages: [
            '不适合生产环境',
            '大规模集群不支持',
            '扩缩容功能有限',
            '无滚动更新',
            '无自愈能力'
          ]
        }
      ]
    },
    {
      id: 'do-cloud',
      name: '云服务',
      children: [
        {
          id: 'aws',
          name: 'AWS',
          level: 80,
          officialLink: 'https://aws.amazon.com',
          version: 'AWS',
          reason: 'AWS 是全球最大的云平台,服务种类最全,生态成熟,是企业级云应用的首选。',
          advantages: [
            '服务种类全球最多',
            '生态成熟',
            '全球区域覆盖广',
            '定价模型灵活',
            '文档完善',
            '机器学习服务丰富',
            '企业级合规认证多'
          ],
          disadvantages: [
            '学习曲线陡峭',
            '定价复杂',
            '控制台有时慢',
            '某些服务有厂商锁定',
            '国内访问受限'
          ]
        },
        {
          id: 'azure',
          name: 'Azure',
          level: 72,
          officialLink: 'https://azure.microsoft.com',
          version: 'Azure',
          reason: 'Azure 与微软生态深度集成,是企业级 Microsoft 技术栈用户的首选,混合云支持优秀。',
          advantages: [
            '与 Microsoft 365/Office 集成',
            'Active Directory 集成',
            '混合云支持优秀',
            'Visual Studio 集成',
            '企业级支持完善',
            '.NET 开发首选',
            '合规认证丰富'
          ],
          disadvantages: [
            '服务数量不如 AWS',
            '文档质量参差不齐',
            '定价复杂',
            '社区资源相对较少',
            '某些地区覆盖不足'
          ]
        },
        {
          id: 'gcp',
          name: 'GCP',
          level: 70,
          officialLink: 'https://cloud.google.com',
          version: 'GCP',
          reason: 'GCP 以技术领先著称,Kubernetes 源自 Google,BigQuery 等数据服务优秀,是技术驱动型公司的选择。',
          advantages: [
            'Kubernetes 起源',
            'BigQuery 数据分析强',
            '机器学习/AI 服务领先',
            '网络性能优秀',
            '定价相对简单',
            '开源友好',
            'GKE 管理体验好'
          ],
          disadvantages: [
            '区域覆盖相对较少',
            '某些企业功能不如 AWS',
            '迁移工具不如 AWS',
            '生态系统相对年轻',
            '国内访问受限'
          ]
        },
        {
          id: 'vercel',
          name: 'Vercel',
          level: 88,
          officialLink: 'https://vercel.com',
          version: 'Vercel',
          reason: 'Vercel 是前端部署的首选,Next.js 官方支持,预览部署、自动 HTTPS、Edge Network,是 Jamstack 时代的领航者。',
          advantages: [
            '前端部署零配置',
            '预览部署每次 PR',
            '自动 HTTPS',
            'Edge Network 全球加速',
            'Next.js 官方支持',
            'Serverless Functions 内置',
            '开发体验极致'
          ],
          disadvantages: [
            '后端能力有限',
            '厂商锁定',
            '冷启动延迟',
            '大规模应用成本高',
            '自定义服务器有限制'
          ]
        }
      ]
    },
    {
      id: 'do-infra',
      name: '基础设施即代码',
      children: [
        {
          id: 'terraform',
          name: 'Terraform',
          level: 85,
          officialLink: 'https://terraform.io',
          repo: 'hashicorp/terraform',
          version: 'v1.11.0',
          reason: 'Terraform 是基础设施即代码 (IaC) 的领先工具,使用 HCL 语言定义云资源,支持几乎所有主流云平台。',
          advantages: [
            '声明式配置,可重复性高',
            '支持多云管理(AWS/Azure/GCP)',
            '强大的状态管理功能',
            '执行计划预览 (plan)',
            '模块化设计,代码复用性好',
            '庞大的 Provider 生态'
          ],
          disadvantages: [
            '状态文件同步和冲突处理有挑战',
            'HCL 语法对非开发人员有学习成本',
            'Provider 更新有时会带来破坏性变化'
          ]
        },
        {
          id: 'ansible',
          name: 'Ansible',
          level: 80,
          officialLink: 'https://ansible.com',
          repo: 'ansible/ansible',
          version: 'v11.3.0',
          reason: 'Ansible 是无代理的基础设施自动化工具,使用 YAML 编写剧本 (Playbook),极其简单易用,适合配置管理和应用部署。',
          advantages: [
            '无代理架构 (Agentless),通过 SSH 工作',
            'YAML 语法,极其易读易写',
            '学习曲线平缓',
            '模块化设计,开箱即用',
            '幂等性保证操作安全',
            '庞大的角色 (Role) 生态'
          ],
          disadvantages: [
            '在大规模节点下执行速度较慢',
            'YAML 逻辑表达能力有限',
            '状态管理不如 Terraform'
          ]
        },
        {
          id: 'pulumi',
          name: 'Pulumi',
          level: 70,
          officialLink: 'https://pulumi.com',
          version: 'v3.150.0',
          reason: 'Pulumi 使用真实编程语言(TS/Python/Go)编写 IaC,代码复用能力强,是喜欢编程的开发者写 IaC 的首选。',
          advantages: [
            '使用熟悉语言',
            '代码复用能力强',
            'IDE 支持好',
            '测试友好',
            '动态类型支持',
            '面向对象设计',
            'Pulumi ESC 环境管理'
          ],
          disadvantages: [
            '相对年轻',
            '社区小于 Terraform',
            '状态管理需要 Pulumi Service',
            '学习曲线对运维不友好',
            '文档不如 Terraform 完善'
          ]
        }
      ]
    }
  ]
}
