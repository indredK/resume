import type { SkillNode } from './types'
import { frontendSkills } from './frontend'
import { desktopSkills } from './desktop'
import { solutionSkills } from './solutions'

export const backendSkills: SkillNode = {
  id: 'backend',
  name: '后端技术',
  icon: '🔧',
  color: '#38bdf8',
  children: [
    {
      id: 'be-language',
      name: '主要语言',
      children: [
        { id: 'nodejs', name: 'Node.js', level: 88 },
        { id: 'python', name: 'Python', level: 85 },
        { id: 'java', name: 'Java', level: 80 },
        { id: 'go', name: 'Go', level: 78 },
        { id: 'rust', name: 'Rust', level: 65 },
        { id: 'c-sharp', name: 'C#', level: 85 }
      ]
    },
    {
      id: 'be-framework',
      name: 'Web 框架',
      children: [
        { id: 'express', name: 'Express', level: 88 },
        { id: 'fastify', name: 'Fastify', level: 82 },
        { id: 'koa', name: 'Koa', level: 80 },
        { id: 'nestjs', name: 'NestJS', level: 85 },
        { id: 'django', name: 'Django', level: 78 },
        { id: 'flask', name: 'Flask', level: 75 },
        { id: 'springboot', name: 'Spring Boot', level: 75 }
      ]
    },
    {
      id: 'be-api',
      name: 'API 设计',
      children: [
        { id: 'rest', name: 'RESTful API', level: 90 },
        { id: 'graphql', name: 'GraphQL', level: 80 },
        { id: 'grpc', name: 'gRPC', level: 72 },
        { id: 'websocket', name: 'WebSocket', level: 85 }
      ]
    },
    {
      id: 'be-msg',
      name: '消息队列',
      children: [
        { id: 'rabbitmq', name: 'RabbitMQ', level: 80 },
        { id: 'kafka', name: 'Kafka', level: 78 },
        { id: 'redis-queue', name: 'Redis Queue', level: 82 },
        { id: 'activemq', name: 'ActiveMQ', level: 70 }
      ]
    }
  ]
}

export const databaseSkills: SkillNode = {
  id: 'database',
  name: '数据库',
  icon: '🗄️',
  color: '#fbbf24',
  children: [
    {
      id: 'db-relational',
      name: '关系型数据库',
      children: [
        { id: 'mysql', name: 'MySQL', level: 88 },
        { id: 'postgresql', name: 'PostgreSQL', level: 85 },
        { id: 'mariadb', name: 'MariaDB', level: 80 },
        { id: 'sqlite', name: 'SQLite', level: 85 }
      ]
    },
    {
      id: 'db-nosql',
      name: 'NoSQL 数据库',
      children: [
        { id: 'mongodb', name: 'MongoDB', level: 85 },
        { id: 'redis', name: 'Redis', level: 88 },
        { id: 'cassandra', name: 'Cassandra', level: 70 },
        { id: 'dynamodb', name: 'DynamoDB', level: 72 }
      ]
    },
    {
      id: 'db-vector',
      name: '向量数据库',
      children: [
        { id: 'pinecone', name: 'Pinecone', level: 75 },
        { id: 'weaviate', name: 'Weaviate', level: 72 },
        { id: 'chroma', name: 'Chroma', level: 78 }
      ]
    }
  ]
}

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
        { id: 'github-actions', name: 'GitHub Actions', level: 90 },
        { id: 'gitlab-ci', name: 'GitLab CI', level: 82 },
        { id: 'jenkins', name: 'Jenkins', level: 78 },
        { id: 'circleci', name: 'CircleCI', level: 75 }
      ]
    },
    {
      id: 'do-container',
      name: '容器化',
      children: [
        { id: 'docker', name: 'Docker', level: 90 },
        { id: 'kubernetes', name: 'Kubernetes', level: 78 },
        { id: 'helm', name: 'Helm', level: 75 },
        { id: 'docker-compose', name: 'Docker Compose', level: 88 }
      ]
    },
    {
      id: 'do-cloud',
      name: '云服务',
      children: [
        { id: 'aws', name: 'AWS', level: 80 },
        { id: 'azure', name: 'Azure', level: 72 },
        { id: 'gcp', name: 'GCP', level: 70 },
        { id: 'vercel', name: 'Vercel', level: 88 }
      ]
    },
    {
      id: 'do-infra',
      name: '基础设施即代码',
      children: [
        { id: 'terraform', name: 'Terraform', level: 78 },
        { id: 'ansible', name: 'Ansible', level: 75 },
        { id: 'pulumi', name: 'Pulumi', level: 70 }
      ]
    }
  ]
}

export const industrialSkills: SkillNode = {
  id: 'industrial',
  name: '工业控制',
  icon: '🏭',
  color: '#fb923c',
  children: [
    {
      id: 'ind-dotnet',
      name: 'C# .NET 工控',
      children: [
        { id: 'dotnet-framework', name: '.NET Framework', level: 88 },
        { id: 'dotnet-core', name: '.NET Core/5+', level: 85 },
        { id: 'wincc', name: 'WinCC / WinCC OA', level: 72 },
        { id: 'opc-ua', name: 'OPC UA', level: 80 }
      ]
    },
    {
      id: 'ind-plc',
      name: 'PLC 编程',
      children: [
        { id: 'siemens', name: '西门子 S7', level: 75 },
        { id: 'omron', name: '欧姆龙 NJ/NX', level: 72 },
        { id: 'beckhoff', name: '倍福 TwinCAT', level: 70 },
        { id: 'ab', name: 'AB ControlLogix', level: 68 }
      ]
    },
    {
      id: 'ind-comm',
      name: '工业通讯',
      children: [
        { id: 'modbus', name: 'Modbus RTU/TCP', level: 82 },
        { id: 'profinet', name: 'PROFINET', level: 75 },
        { id: 'ethernet-ip', name: 'EtherNet/IP', level: 72 },
        { id: 'canopen', name: 'CANopen', level: 70 }
      ]
    },
    {
      id: 'ind-scada',
      name: 'SCADA 系统',
      children: [
        { id: 'ignition', name: 'Ignition', level: 78 },
        { id: 'factorytalk', name: 'FactoryTalk', level: 72 },
        { id: 'kepware', name: 'Kepware', level: 75 }
      ]
    }
  ]
}

export const languageSkills: SkillNode = {
  id: 'language',
  name: '编程语言',
  icon: '⌨️',
  color: '#2dd4bf',
  children: [
    {
      id: 'lang-frontend',
      name: '前端语言',
      children: [
        { id: 'javascript', name: 'JavaScript', level: 92 },
        { id: 'typescript', name: 'TypeScript', level: 90 },
        { id: 'html-css', name: 'HTML/CSS', level: 88 }
      ]
    },
    {
      id: 'lang-backend',
      name: '后端语言',
      children: [
        { id: 'python-lang', name: 'Python', level: 85 },
        { id: 'java-lang', name: 'Java', level: 80 },
        { id: 'go-lang', name: 'Go', level: 78 },
        { id: 'rust-lang', name: 'Rust', level: 65 },
        { id: 'cpp', name: 'C/C++', level: 75 }
      ]
    },
    {
      id: 'lang-script',
      name: '脚本语言',
      children: [
        { id: 'bash', name: 'Bash/Shell', level: 82 },
        { id: 'powershell', name: 'PowerShell', level: 78 },
        { id: 'lua', name: 'Lua', level: 72 }
      ]
    }
  ]
}

export const toolchainSkills: SkillNode = {
  id: 'toolchain',
  name: '工具链',
  icon: '🔧',
  color: '#94a3b8',
  children: [
    {
      id: 'tc-version',
      name: '版本控制',
      children: [
        { id: 'git', name: 'Git', level: 90 },
        { id: 'svn', name: 'SVN', level: 75 }
      ]
    },
    {
      id: 'tc-ide',
      name: 'IDE',
      children: [
        { id: 'vscode', name: 'VS Code', level: 92 },
        { id: 'intellij', name: 'IntelliJ IDEA', level: 82 },
        { id: 'visual-studio', name: 'Visual Studio', level: 85 },
        { id: 'vim', name: 'Vim', level: 75 }
      ]
    },
    {
      id: 'tc-test',
      name: '测试工具',
      children: [
        { id: 'jest', name: 'Jest', level: 88 },
        { id: 'cypress', name: 'Cypress', level: 82 },
        { id: 'playwright', name: 'Playwright', level: 85 },
        { id: 'junit', name: 'JUnit', level: 78 }
      ]
    }
  ]
}

export const mobileSkills: SkillNode = {
  id: 'mobile',
  name: '移动端技术',
  icon: '📱',
  color: '#f472b6',
  children: [
    {
      id: 'mob-native',
      name: '原生开发',
      children: [
        { id: 'ios-swift', name: 'iOS (Swift)', level: 65 },
        { id: 'ios-oc', name: 'iOS (Objective-C)', level: 60 },
        { id: 'android-kotlin', name: 'Android (Kotlin)', level: 70 },
        { id: 'android-java', name: 'Android (Java)', level: 75 }
      ]
    },
    {
      id: 'mob-cross',
      name: '跨平台开发',
      children: [
        { id: 'rn-cross', name: 'React Native', level: 80 },
        { id: 'flutter-cross', name: 'Flutter', level: 72 },
        { id: 'uniapp-cross', name: 'UniApp', level: 85 },
        { id: 'taro-cross', name: 'Taro', level: 78 },
        { id: 'cordova', name: 'Cordova/PhoneGap', level: 65 }
      ]
    }
  ]
}

export const embeddedSkills: SkillNode = {
  id: 'embedded',
  name: '嵌入式',
  icon: '🔌',
  color: '#22d3ee',
  children: [
    {
      id: 'em-mcu',
      name: '微控制器',
      children: [
        { id: 'stm32', name: 'STM32', level: 80 },
        { id: 'arduino', name: 'Arduino', level: 85 },
        { id: 'esp32', name: 'ESP32', level: 82 },
        { id: 'raspberry-pi', name: 'Raspberry Pi', level: 82 }
      ]
    },
    {
      id: 'em-rtos',
      name: '实时操作系统',
      children: [
        { id: 'freertos', name: 'FreeRTOS', level: 78 },
        { id: 'rt-thread', name: 'RT-Thread', level: 75 },
        { id: 'zephyr', name: 'Zephyr', level: 70 }
      ]
    }
  ]
}

export const emergingSkills: SkillNode = {
  id: 'emerging',
  name: '新兴技术',
  icon: '✨',
  color: '#e879f9',
  children: [
    {
      id: 'ai-ml',
      name: 'AI/ML',
      children: [
        { id: 'pytorch', name: 'PyTorch', level: 75 },
        { id: 'tensorflow', name: 'TensorFlow', level: 72 },
        { id: 'langchain', name: 'LangChain', level: 78 },
        { id: 'llamaindex', name: 'LlamaIndex', level: 75 }
      ]
    },
    {
      id: 'blockchain',
      name: '区块链',
      children: [
        { id: 'solidity', name: 'Solidity', level: 70 },
        { id: 'web3', name: 'Web3.js / Ethers.js', level: 72 }
      ]
    },
    {
      id: 'web3',
      name: 'Web3 应用',
      children: [
        { id: 'nft', name: 'NFT 开发', level: 68 },
        { id: 'defi', name: 'DeFi 协议', level: 65 }
      ]
    }
  ]
}

export const industrySkills: SkillNode = {
  id: 'industry',
  name: '行业方案',
  icon: '🏢',
  color: '#64748b',
  children: [
    {
      id: 'ind-erp',
      name: 'ERP 系统',
      children: [
        { id: 'sap', name: 'SAP', level: 65 },
        { id: '用友', name: '用友 U8/NC', level: 70 },
        { id: '金蝶', name: '金蝶 K3', level: 68 }
      ]
    },
    {
      id: 'ind-mes',
      name: 'MES 系统',
      children: [
        { id: 'mes-standard', name: '标准 MES', level: 72 },
        { id: 'mes-custom', name: '定制 MES', level: 75 }
      ]
    }
  ]
}

export const allSkills: SkillNode[] = [
  frontendSkills,
  desktopSkills,
  backendSkills,
  databaseSkills,
  devopsSkills,
  industrialSkills,
  languageSkills,
  toolchainSkills,
  mobileSkills,
  embeddedSkills,
  emergingSkills,
  industrySkills,
  solutionSkills
]

export const skillTreeData = allSkills

export { frontendSkills, desktopSkills, solutionSkills }
export type { Category } from './types'
export { categories } from './types'
