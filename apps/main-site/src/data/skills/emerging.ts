export default {
  id: 'emerging',
  name: '新兴技术',
  icon: '✨',
  color: '#e879f9',
  children: [
    {
      id: 'ai-ml',
      name: 'AI/ML',
      children: [
        {
          id: 'pytorch',
          name: 'PyTorch',
          level: 75,
          officialLink: 'https://pytorch.org',
          repo: 'pytorch/pytorch',
          version: 'PyTorch 2.6',
          reason: 'PyTorch 是深度学习框架的领导者,动态计算图易调试、与 Python 融合自然,是 AI 研究的首选。',
          advantages: [
            '动态计算图,调试友好',
            'Python 优先设计',
            'Autograd 自动微分',
            'torchvision/torchaudio 丰富',
            'Hugging Face 生态',
            '研究论文首选',
            '部署方案完善'
          ],
          disadvantages: [
            '生产部署不如 TensorFlow',
            '移动端支持有限',
            '分布式训练文档复杂',
            '静态图性能不如 TensorFlow'
          ]
        },
        {
          id: 'tensorflow',
          name: 'TensorFlow',
          level: 72,
          officialLink: 'https://tensorflow.org',
          repo: 'tensorflow/tensorflow',
          version: 'TensorFlow 2.18',
          reason: 'TensorFlow 是 Google 的深度学习框架,TFLite/JS/EdgeTPU 部署完善,是端侧部署的首选。',
          advantages: [
            'Google 背书',
            'TFLite 移动端部署完善',
            'TensorFlow.js 浏览器端',
            '生产级部署稳定',
            'TensorBoard 可视化',
            'Keras 高级 API',
            '生态系统最全'
          ],
          disadvantages: [
            '静态图调试困难',
            'API 变化大,迁移成本',
            '版本兼容问题',
            '比 PyTorch 复杂'
          ]
        },
        {
          id: 'langchain',
          name: 'LangChain',
          level: 78,
          officialLink: 'https://langchain.com',
          repo: 'langchain-ai/langchain',
          version: 'LangChain 0.3',
          reason: 'LangChain 是 LLM 应用开发框架,Chain/Agent/Prompt 抽象优雅,是构建 AI 应用的首选工具。',
          advantages: [
            'Chain 抽象优雅',
            'Agent 自主决策',
            '大量工具集成',
            'Memory 支持',
            '文档和教程丰富',
            '国内魔改版众多',
            'RAG 支持完善'
          ],
          disadvantages: [
            '版本迭代快,breaking 多',
            '复杂 Chain 调试困难',
            '生产部署复杂度',
            '文档有时不一致',
            '性能开销'
          ]
        },
        {
          id: 'llamaindex',
          name: 'LlamaIndex',
          level: 75,
          officialLink: 'https://llamaindex.ai',
          repo: 'run-llama/llama_index',
          version: 'LlamaIndex 0.12',
          reason: 'LlamaIndex 是 RAG 专用框架,数据连接/索引/查询优化,是构建知识库问答的首选。',
          advantages: [
            'RAG 专用框架',
            '数据源连接丰富',
            '索引策略多样',
            'Query 优化',
            '与 LangChain 可集成',
            '响应合成能力',
            '评估工具内置'
          ],
          disadvantages: [
            '主要专注 RAG 场景',
            'Agent 能力不如 LangChain',
            '版本迭代快',
            '学习曲线'
          ]
        }
      ]
    },
    {
      id: 'blockchain',
      name: '区块链',
      children: [
        {
          id: 'solidity',
          name: 'Solidity',
          level: 70,
          officialLink: 'https://soliditylang.org',
          repo: 'ethereum/solidity',
          version: 'Solidity 0.8.30',
          reason: 'Solidity 是以太坊智能合约语言,ERC 标准生态丰富,是 Web3 开发的核心技能。',
          advantages: [
            '以太坊官方语言',
            'ERC 标准完善',
            '工具链成熟(Hardhat/Foundry)',
            '大量开源项目参考',
            '安全审计工具',
            'IDE 支持(Remix)',
            '类型安全'
          ],
          disadvantages: [
            'EVM 限制',
            'Gas 优化复杂',
            '安全漏洞风险高',
            '版本升级兼容复杂',
            '调试困难'
          ]
        },
        {
          id: 'web3',
          name: 'Web3.js / Ethers.js',
          level: 72,
          officialLink: 'https://web3js.org',
          repo: 'web3/web3.js',
          version: 'Web3.js 1.10',
          reason: 'Web3.js/Ethers.js 是以太坊交互库,让 DApp 前端与区块链通信,是 Web3 前端开发的首选。',
          advantages: [
            '以太坊交互必备',
            'DApp 前端开发核心',
            'Ethers.js 更现代轻量',
            'MetaMask 集成',
            '合约 ABI 交互',
            '事件监听',
            '签名交易'
          ],
          disadvantages: [
            '版本迭代快',
            '文档有时不更新',
            'RPC 节点管理复杂',
            '错误处理繁琐',
            '国内 DApp 生态有限'
          ]
        }
      ]
    }
  ]
}
