<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref<'router' | 'gateway'>('router')
const activeModule = ref<string>('status')

const routerModules = [
  { id: 'status', name: '设备状态监控', icon: '📊' },
  { id: 'config', name: '配置管理', icon: '⚙️' }
]

const gatewayModules = [
  { id: 'data', name: '数据处理', icon: '🔄' },
  { id: 'file', name: '文件管理', icon: '📁' },
  { id: 'comm', name: '通信机制', icon: '📡' }
]

const vpnConnections = ref([
  { name: 'WireGuard', status: 'connected', tunnel: 'wg-to-hq', traffic: '2.3 MB/s', quality: 98, peers: 3 },
  { name: 'IPsec', status: 'connected', tunnel: 'ipsec-vpn-main', traffic: '1.1 MB/s', quality: 95, peers: 2 },
  { name: 'OpenVPN', status: 'disconnected', tunnel: 'openvpn-backup', traffic: '0 KB/s', quality: 0, peers: 0 }
])

const linkBackup = ref({
  primary: { name: '主链路 4G', status: 'active', health: 98, latency: '23ms' },
  secondary: { name: '备用链路 WAN', status: 'standby', health: 95, latency: '31ms' },
  lastSwitch: '2024-03-15 14:32:11',
  switchHistory: [
    { time: '2024-03-15 14:32:11', reason: '主链路超时', result: '成功切换' },
    { time: '2024-03-10 09:15:33', reason: '链路检测失败', result: '成功切换' },
    { time: '2024-03-05 22:08:47', reason: '手动切换', result: '成功切换' }
  ]
})

const deviceStatus = ref({
  cpu: 23,
  memory: 45,
  temperature: 42,
  uptime: '15天 8小时 32分钟',
  networkIn: '12.5 Mbps',
  networkOut: '8.3 Mbps'
})

const configVersions = ref([
  { version: 'v2.1.0', date: '2024-03-18', author: 'admin', description: '优化VPN参数' },
  { version: 'v2.0.5', date: '2024-03-10', author: 'admin', description: '更新安全策略' },
  { version: 'v2.0.0', date: '2024-02-28', author: 'admin', description: '新增WireGuard支持' },
  { version: 'v1.9.2', date: '2024-02-15', author: 'admin', description: '修复链路备份问题' }
])

const protocolConversion = ref({
  total: 15420,
  success: 15285,
  failed: 135,
  successRate: 99.12,
  conversions: [
    { from: 'Modbus RTU', to: 'MQTT', count: 8230, successRate: 99.45 },
    { from: 'Modbus TCP', to: 'HTTP/JSON', count: 4120, successRate: 98.92 },
    { from: 'OPC UA', to: 'MQTT', count: 2870, successRate: 99.78 },
    { from: 'Custom Protocol', to: 'CoAP', count: 200, successRate: 95.00 }
  ]
})

const dataMappingRules = ref([
  { id: 1, name: '温度传感器映射', source: 'Tag_001', target: 'temperature', transform: 'scale(0.1)' },
  { id: 2, name: '压力传感器映射', source: 'Tag_002', target: 'pressure', transform: 'scale(0.01)' },
  { id: 3, name: '流量计映射', source: 'Tag_003', target: 'flow_rate', transform: 'passthrough' }
])

const firmwareList = ref([
  { version: 'v3.2.1', date: '2024-03-12', size: '45.2 MB', status: 'latest' },
  { version: 'v3.2.0', date: '2024-02-28', size: '44.8 MB', status: 'available' },
  { version: 'v3.1.5', date: '2024-01-20', size: '43.5 MB', status: 'available' }
])

const logFiles = ref([
  { name: 'system.log', size: '12.5 MB', date: '2024-03-18 14:30', type: 'system' },
  { name: 'operation.log', size: '8.3 MB', date: '2024-03-18 14:28', type: 'operation' },
  { name: 'error.log', size: '1.2 MB', date: '2024-03-18 14:25', type: 'error' }
])

const downloadProgress = ref({
  active: false,
  progress: 0,
  speed: '0 KB/s',
  filename: '',
  canResume: true
})

const pollingConfig = ref({
  enabled: true,
  frequency: 1000,
  timeout: 5000,
  retry: 3,
  devices: [
    { name: 'PLC-01', address: '192.168.1.101', status: 'active', pollCount: 15420 },
    { name: 'PLC-02', address: '192.168.1.102', status: 'active', pollCount: 12350 },
    { name: 'Sensor-01', address: '192.168.1.103', status: 'active', pollCount: 28600 }
  ]
})

const subscriptionConfig = ref({
  enabled: true,
  topics: [
    { name: '设备状态', topic: 'devices/+/status', filter: '.*', qos: 2, msgCount: 45230 },
    { name: '报警信息', topic: 'devices/+/alert', filter: 'severity>1', qos: 1, msgCount: 1250 },
    { name: '数据上报', topic: 'devices/+/data', filter: '.*', qos: 0, msgCount: 185420 }
  ]
})

let wsInterval: number | null = null

const simulateRealTime = () => {
  wsInterval = window.setInterval(() => {
    deviceStatus.value.cpu = Math.round(20 + Math.random() * 15)
    deviceStatus.value.memory = Math.round(40 + Math.random() * 10)
    vpnConnections.value[0].traffic = `${(1.5 + Math.random() * 2).toFixed(1)} MB/s`
  }, 2000)
}

const startDownload = () => {
  downloadProgress.value.active = true
  downloadProgress.value.progress = 0
  downloadProgress.value.filename = 'gateway_firmware_v3.2.1.bin'
  const interval = setInterval(() => {
    if (downloadProgress.value.progress < 100) {
      downloadProgress.value.progress += Math.random() * 5
      downloadProgress.value.speed = `${Math.round(500 + Math.random() * 1000)} KB/s`
    } else {
      clearInterval(interval)
      downloadProgress.value.active = false
    }
  }, 200)
}

const pauseDownload = () => {
  downloadProgress.value.canResume = false
}

onMounted(() => {
  simulateRealTime()
})

onUnmounted(() => {
  if (wsInterval) clearInterval(wsInterval)
})
</script>

<template>
  <section class="industrial-showcase py-20 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-orange-950/20 to-slate-900/50"></div>
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <span class="text-orange-400 text-sm font-bold tracking-widest uppercase mb-4 block">Industrial IoT</span>
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">工业设备后台管理系统</h2>
        <p class="text-slate-400 text-lg max-w-3xl mx-auto">面向工业路由器与工业网关的完整后台解决方案，涵盖设备监控、协议转换、边缘计算等核心功能</p>
      </div>

      <div class="flex gap-4 mb-8 justify-center">
        <button
          :class="['px-6 py-3 rounded-xl font-bold transition-all duration-300', activeTab === 'router' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700']"
          @click="activeTab = 'router'"
        >
          工业路由器
        </button>
        <button
          :class="['px-6 py-3 rounded-xl font-bold transition-all duration-300', activeTab === 'gateway' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700']"
          @click="activeTab = 'gateway'"
        >
          工业网关
        </button>
      </div>

      <!-- Router System -->
      <div v-if="activeTab === 'router'" class="space-y-8">
        <div class="flex gap-3 flex-wrap justify-center">
          <button
            v-for="mod in routerModules"
            :key="mod.id"
            :class="['px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2', activeModule === mod.id ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40' : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600']"
            @click="activeModule = mod.id"
          >
            <span>{{ mod.icon }}</span>
            <span>{{ mod.name }}</span>
          </button>
        </div>

        <!-- Status Monitoring Module -->
        <div v-if="activeModule === 'status'" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Device Overview -->
          <div class="glass-card rounded-2xl p-6 col-span-1">
            <h3 class="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              设备运行状态
            </h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-slate-400 text-sm">CPU 使用率</span>
                <span class="text-white font-mono">{{ deviceStatus.cpu }}%</span>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div class="bg-emerald-400 h-2 rounded-full transition-all duration-500" :style="{ width: deviceStatus.cpu + '%' }"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400 text-sm">内存使用率</span>
                <span class="text-white font-mono">{{ deviceStatus.memory }}%</span>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div class="bg-blue-400 h-2 rounded-full transition-all duration-500" :style="{ width: deviceStatus.memory + '%' }"></div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-slate-400 text-sm">温度</span>
                <span class="text-white font-mono">{{ deviceStatus.temperature }}°C</span>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-2">
                <div class="bg-amber-400 h-2 rounded-full transition-all duration-500" :style="{ width: (deviceStatus.temperature / 80) * 100 + '%' }"></div>
              </div>
              <div class="pt-4 border-t border-slate-700">
                <div class="flex justify-between text-sm">
                  <span class="text-slate-500">运行时间</span>
                  <span class="text-slate-300 font-mono">{{ deviceStatus.uptime }}</span>
                </div>
                <div class="flex justify-between text-sm mt-2">
                  <span class="text-slate-500">网络下行</span>
                  <span class="text-emerald-400 font-mono">{{ deviceStatus.networkIn }}</span>
                </div>
                <div class="flex justify-between text-sm mt-2">
                  <span class="text-slate-500">网络上行</span>
                  <span class="text-blue-400 font-mono">{{ deviceStatus.networkOut }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- VPN Status -->
          <div class="glass-card rounded-2xl p-6 col-span-1 lg:col-span-2">
            <h3 class="text-lg font-bold text-white mb-5">VPN 隧道状态</h3>
            <div class="space-y-4">
              <div v-for="vpn in vpnConnections" :key="vpn.name" class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <div :class="['w-3 h-3 rounded-full', vpn.status === 'connected' ? 'bg-emerald-400' : 'bg-slate-500']"></div>
                    <span class="font-bold text-white">{{ vpn.name }}</span>
                    <span class="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-400">{{ vpn.tunnel }}</span>
                  </div>
                  <span :class="['text-xs font-bold px-2 py-1 rounded', vpn.status === 'connected' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-600/50 text-slate-400']">
                    {{ vpn.status === 'connected' ? '已连接' : '未连接' }}
                  </span>
                </div>
                <div class="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span class="text-slate-500 block">流量</span>
                    <span class="text-white font-mono">{{ vpn.traffic }}</span>
                  </div>
                  <div>
                    <span class="text-slate-500 block">质量</span>
                    <span :class="['font-mono', vpn.quality > 90 ? 'text-emerald-400' : 'text-slate-400']">{{ vpn.quality }}%</span>
                  </div>
                  <div>
                    <span class="text-slate-500 block">对等点</span>
                    <span class="text-white font-mono">{{ vpn.peers }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Link Backup -->
          <div class="glass-card rounded-2xl p-6 col-span-1 lg:col-span-3">
            <h3 class="text-lg font-bold text-white mb-5">链路备份状态</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-slate-400 text-sm">主链路</span>
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div class="text-xl font-bold text-white">{{ linkBackup.primary.name }}</div>
                <div class="flex justify-between text-sm mt-2">
                  <span class="text-slate-500">健康度</span>
                  <span class="text-emerald-400">{{ linkBackup.primary.health }}%</span>
                </div>
                <div class="flex justify-between text-sm mt-1">
                  <span class="text-slate-500">延迟</span>
                  <span class="text-white">{{ linkBackup.primary.latency }}</span>
                </div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-slate-400 text-sm">备用链路</span>
                  <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                </div>
                <div class="text-xl font-bold text-white">{{ linkBackup.secondary.name }}</div>
                <div class="flex justify-between text-sm mt-2">
                  <span class="text-slate-500">健康度</span>
                  <span class="text-amber-400">{{ linkBackup.secondary.health }}%</span>
                </div>
                <div class="flex justify-between text-sm mt-1">
                  <span class="text-slate-500">延迟</span>
                  <span class="text-white">{{ linkBackup.secondary.latency }}</span>
                </div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="text-slate-400 text-sm mb-2">最近切换</div>
                <div class="text-white font-mono text-sm">{{ linkBackup.lastSwitch }}</div>
                <div class="mt-4 space-y-2">
                  <div v-for="(h, i) in linkBackup.switchHistory" :key="i" class="text-xs">
                    <span class="text-slate-500">{{ h.time }}</span>
                    <span class="text-slate-400 ml-2">{{ h.reason }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Config Management Module -->
        <div v-if="activeModule === 'config'" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Config Download -->
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-5">配置文件下载</h3>
            <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span class="text-orange-400 text-xl">📄</span>
                </div>
                <div>
                  <div class="text-white font-medium">router_config_{{ Date.now() }}.json</div>
                  <div class="text-slate-500 text-sm">当前运行配置</div>
                </div>
              </div>
              <div class="text-slate-400 text-sm mb-4">包含所有接口配置、VPN设置、路由策略、安全规则等</div>
              <button class="w-full py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors">
                下载配置文件
              </button>
            </div>
          </div>

          <!-- Config Upload -->
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-5">配置文件上传</h3>
            <div class="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center mb-4 hover:border-orange-500/50 transition-colors">
              <div class="text-4xl mb-3">📤</div>
              <div class="text-slate-400 mb-2">拖拽配置文件或点击上传</div>
              <div class="text-slate-500 text-sm">支持 .json 格式，最大 10MB</div>
            </div>
            <div class="flex gap-3">
              <button class="flex-1 py-2.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors">
                浏览文件
              </button>
              <button class="flex-1 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors">
                上传并验证
              </button>
            </div>
          </div>

          <!-- Version Control -->
          <div class="glass-card rounded-2xl p-6 lg:col-span-2">
            <h3 class="text-lg font-bold text-white mb-5">版本控制与回滚</h3>
            <div class="space-y-3">
              <div v-for="(ver, i) in configVersions" :key="ver.version" class="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div :class="['w-8 h-8 rounded-lg flex items-center justify-center', i === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400']">
                    {{ i + 1 }}
                  </div>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-white">{{ ver.version }}</span>
                      <span v-if="i === 0" class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">当前</span>
                    </div>
                    <div class="text-slate-400 text-sm">{{ ver.description }}</div>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-slate-500 text-sm">{{ ver.date }}</div>
                  <div class="text-slate-400 text-sm">{{ ver.author }}</div>
                </div>
                <button v-if="i !== 0" class="px-4 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium transition-colors">
                  回滚到此版本
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gateway System -->
      <div v-if="activeTab === 'gateway'" class="space-y-8">
        <div class="flex gap-3 flex-wrap justify-center">
          <button
            v-for="mod in gatewayModules"
            :key="mod.id"
            :class="['px-5 py-2.5 rounded-lg font-medium transition-all flex items-center gap-2', activeModule === mod.id ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40' : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-slate-600']"
            @click="activeModule = mod.id"
          >
            <span>{{ mod.icon }}</span>
            <span>{{ mod.name }}</span>
          </button>
        </div>

        <!-- Data Processing Module -->
        <div v-if="activeModule === 'data'" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Conversion Stats -->
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-5">数据转换统计</h3>
            <div class="text-center mb-6">
              <div class="text-5xl font-black text-orange-400 mb-2">{{ protocolConversion.successRate }}%</div>
              <div class="text-slate-400">转换成功率</div>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-slate-400">总转换数</span>
                <span class="text-white font-mono">{{ protocolConversion.total.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">成功</span>
                <span class="text-emerald-400 font-mono">{{ protocolConversion.success.toLocaleString() }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">失败</span>
                <span class="text-red-400 font-mono">{{ protocolConversion.failed }}</span>
              </div>
            </div>
          </div>

          <!-- Protocol Conversion -->
          <div class="glass-card rounded-2xl p-6 lg:col-span-2">
            <h3 class="text-lg font-bold text-white mb-5">协议转换详情</h3>
            <div class="space-y-3">
              <div v-for="conv in protocolConversion.conversions" :key="conv.from" class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <span class="px-2 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-mono">{{ conv.from }}</span>
                    <span class="text-slate-500">→</span>
                    <span class="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono">{{ conv.to }}</span>
                  </div>
                  <span class="text-white font-mono">{{ conv.count.toLocaleString() }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="flex-1 bg-slate-700 rounded-full h-1.5">
                    <div :class="['h-1.5 rounded-full transition-all', conv.successRate > 99 ? 'bg-emerald-400' : conv.successRate > 95 ? 'bg-amber-400' : 'bg-red-400']" :style="{ width: conv.successRate + '%' }"></div>
                  </div>
                  <span :class="['text-xs font-mono', conv.successRate > 99 ? 'text-emerald-400' : conv.successRate > 95 ? 'text-amber-400' : 'text-red-400']">{{ conv.successRate }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Data Mapping Rules -->
          <div class="glass-card rounded-2xl p-6 lg:col-span-3">
            <div class="flex items-center justify-between mb-5">
              <h3 class="text-lg font-bold text-white">数据映射规则配置</h3>
              <button class="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold transition-colors">
                + 新增规则
              </button>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="text-left text-slate-500 text-sm border-b border-slate-700">
                    <th class="pb-3 font-medium">规则名称</th>
                    <th class="pb-3 font-medium">源标签</th>
                    <th class="pb-3 font-medium">目标字段</th>
                    <th class="pb-3 font-medium">转换函数</th>
                    <th class="pb-3 font-medium">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="rule in dataMappingRules" :key="rule.id" class="border-b border-slate-800 text-sm">
                    <td class="py-3 text-white">{{ rule.name }}</td>
                    <td class="py-3 font-mono text-blue-400">{{ rule.source }}</td>
                    <td class="py-3 font-mono text-emerald-400">{{ rule.target }}</td>
                    <td class="py-3 font-mono text-slate-400">{{ rule.transform }}</td>
                    <td class="py-3">
                      <button class="text-orange-400 hover:text-orange-300 mr-3">编辑</button>
                      <button class="text-red-400 hover:text-red-300">删除</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- File Management Module -->
        <div v-if="activeModule === 'file'" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Firmware Management -->
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-5">固件管理</h3>
            <div class="space-y-3 mb-4">
              <div v-for="fw in firmwareList" :key="fw.version" class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <span class="text-2xl">💾</span>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-bold text-white">v{{ fw.version }}</span>
                        <span v-if="fw.status === 'latest'" class="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">最新</span>
                      </div>
                      <div class="text-slate-500 text-sm">{{ fw.date }} · {{ fw.size }}</div>
                    </div>
                  </div>
                  <button v-if="fw.status === 'available'" class="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors">
                    安装
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Log Management -->
          <div class="glass-card rounded-2xl p-6">
            <h3 class="text-lg font-bold text-white mb-5">日志管理</h3>
            <div class="space-y-3 mb-4">
              <div v-for="log in logFiles" :key="log.name" class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <span :class="['text-xl', log.type === 'error' ? 'text-red-400' : log.type === 'operation' ? 'text-blue-400' : 'text-slate-400']">📋</span>
                    <div>
                      <div class="font-mono text-white">{{ log.name }}</div>
                      <div class="text-slate-500 text-sm">{{ log.date }} · {{ log.size }}</div>
                    </div>
                  </div>
                  <button class="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm transition-colors">
                    下载
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Download Progress -->
          <div class="glass-card rounded-2xl p-6 lg:col-span-2">
            <h3 class="text-lg font-bold text-white mb-5">断点续传下载</h3>
            <div v-if="downloadProgress.active" class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <div class="text-white font-medium">{{ downloadProgress.filename }}</div>
                  <div class="text-slate-400 text-sm">{{ downloadProgress.speed }} · {{ Math.round(downloadProgress.progress) }}%</div>
                </div>
                <div class="flex gap-2">
                  <button class="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold transition-colors" @click="pauseDownload">
                    暂停
                  </button>
                  <button class="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-bold transition-colors" @click="downloadProgress.active = false">
                    取消
                  </button>
                </div>
              </div>
              <div class="w-full bg-slate-700 rounded-full h-3">
                <div class="bg-gradient-to-r from-orange-500 to-amber-400 h-3 rounded-full transition-all duration-300" :style="{ width: downloadProgress.progress + '%' }"></div>
              </div>
            </div>
            <div v-else class="text-center py-8">
              <button class="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors" @click="startDownload">
                开始下载测试
              </button>
              <div v-if="downloadProgress.progress >= 100" class="mt-3 text-emerald-400 text-sm">下载完成！</div>
            </div>
          </div>
        </div>

        <!-- Communication Mechanism Module -->
        <div v-if="activeModule === 'comm'" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Polling Mode -->
          <div class="glass-card rounded-2xl p-6">
            <div class="flex items-center justify-between mb-5">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-blue-400"></span>
                轮询模式
              </h3>
              <span :class="['px-3 py-1 rounded-full text-xs font-bold', pollingConfig.enabled ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-600/50 text-slate-400']">
                {{ pollingConfig.enabled ? '已启用' : '已禁用' }}
              </span>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-slate-800/50 rounded-xl p-3 text-center">
                <div class="text-2xl font-black text-blue-400">{{ pollingConfig.frequency }}</div>
                <div class="text-slate-500 text-xs">轮询频率(ms)</div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-3 text-center">
                <div class="text-2xl font-black text-amber-400">{{ pollingConfig.timeout }}</div>
                <div class="text-slate-500 text-xs">超时时间(ms)</div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-3 text-center">
                <div class="text-2xl font-black text-red-400">{{ pollingConfig.retry }}</div>
                <div class="text-slate-500 text-xs">重试次数</div>
              </div>
            </div>
            <div class="space-y-2">
              <div v-for="device in pollingConfig.devices" :key="device.name" class="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between text-sm">
                <div class="flex items-center gap-3">
                  <div :class="['w-2 h-2 rounded-full', device.status === 'active' ? 'bg-emerald-400' : 'bg-slate-500']"></div>
                  <span class="text-white">{{ device.name }}</span>
                  <span class="text-slate-500 font-mono text-xs">{{ device.address }}</span>
                </div>
                <span class="text-slate-400">{{ device.pollCount.toLocaleString() }} 次</span>
              </div>
            </div>
          </div>

          <!-- Subscription Mode -->
          <div class="glass-card rounded-2xl p-6">
            <div class="flex items-center justify-between mb-5">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
                订阅模式
              </h3>
              <span :class="['px-3 py-1 rounded-full text-xs font-bold', subscriptionConfig.enabled ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-600/50 text-slate-400']">
                {{ subscriptionConfig.enabled ? '已启用' : '已禁用' }}
              </span>
            </div>
            <div class="space-y-3">
              <div v-for="topic in subscriptionConfig.topics" :key="topic.name" class="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-white">{{ topic.name }}</span>
                  <span class="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-400">QoS {{ topic.qos }}</span>
                </div>
                <div class="font-mono text-xs text-blue-400 mb-2">{{ topic.topic }}</div>
                <div class="flex justify-between text-sm">
                  <span class="text-slate-500">过滤器: <span class="text-slate-400">{{ topic.filter }}</span></span>
                  <span class="text-emerald-400">{{ topic.msgCount.toLocaleString() }} 消息</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Mode Comparison -->
          <div class="glass-card rounded-2xl p-6 lg:col-span-2">
            <h3 class="text-lg font-bold text-white mb-5">模式性能对比</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                <div class="text-slate-500 text-xs mb-2">响应延迟</div>
                <div class="flex justify-center gap-4">
                  <div>
                    <div class="text-xl font-black text-blue-400">轮询</div>
                    <div class="text-slate-400 text-sm">50-100ms</div>
                  </div>
                  <div>
                    <div class="text-xl font-black text-emerald-400">订阅</div>
                    <div class="text-slate-400 text-sm">10-30ms</div>
                  </div>
                </div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                <div class="text-slate-500 text-xs mb-2">网络开销</div>
                <div class="flex justify-center gap-4">
                  <div>
                    <div class="text-xl font-black text-blue-400">轮询</div>
                    <div class="text-slate-400 text-sm">较高</div>
                  </div>
                  <div>
                    <div class="text-xl font-black text-emerald-400">订阅</div>
                    <div class="text-slate-400 text-sm">较低</div>
                  </div>
                </div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                <div class="text-slate-500 text-xs mb-2">服务器负载</div>
                <div class="flex justify-center gap-4">
                  <div>
                    <div class="text-xl font-black text-blue-400">轮询</div>
                    <div class="text-slate-400 text-sm">较高</div>
                  </div>
                  <div>
                    <div class="text-xl font-black text-emerald-400">订阅</div>
                    <div class="text-slate-400 text-sm">较低</div>
                  </div>
                </div>
              </div>
              <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                <div class="text-slate-500 text-xs mb-2">适用场景</div>
                <div class="flex justify-center gap-4">
                  <div>
                    <div class="text-xs font-bold text-blue-400">轮询</div>
                    <div class="text-slate-400 text-xs">简单查询</div>
                  </div>
                  <div>
                    <div class="text-xs font-bold text-emerald-400">订阅</div>
                    <div class="text-slate-400 text-xs">实时监控</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mt-16 text-center">
        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">核心技术栈</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in ['Vue 3', 'TypeScript', 'WebSocket', 'ECharts', 'Tailwind CSS', 'Pinia', '断点续传', 'MQTT', 'OPC UA', 'Modbus']" :key="tech" class="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(71, 85, 105, 0.5);
}
</style>
