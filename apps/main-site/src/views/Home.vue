<template>
  <div class="home-page animate-fade-in">
    <!-- Resume Header (Hero) -->
    <section class="resume-header py-16 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div class="flex-1 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-6 tracking-wider uppercase">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            前端开发工程师 | 5年经验
          </div>
          <h1 class="text-6xl font-black mb-4 tracking-tighter text-white">
            钟邮深
          </h1>
          <p class="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed font-medium">
            深耕 <span class="text-blue-400">IoT 物联网</span> 与 <span class="text-emerald-400">微前端架构</span>。
            擅长复杂权限体系、工业数据可视化与组件化架构设计，具备从 0 到 1 构建系统能力。
          </p>
          <div class="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="mailto:zys233333@gmail.com" class="contact-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Email
            </a>
            <span class="contact-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              135-0159-7242
            </span>
            <a href="https://github.com/indredK" target="_blank" class="contact-pill">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A3.37 3.37 0 0 0 22.42 4.42 3.37 3.37 0 0 0 21.31.52S19.95.11 16.89 2.12a11.36 11.36 0 0 0-6 0C7.71.11 6.35.52 6.35.52a3.37 3.37 0 0 0-1.11 3.9 3.37 3.37 0 0 0-1.31 2.38c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9.43 16.5V22"></path></svg>
              GitHub
            </a>
          </div>
        </div>
        <div class="stats-grid grid grid-cols-2 gap-4">
          <div v-for="stat in statistics" :key="stat.label" class="glass-card p-6 rounded-2xl text-center">
            <div class="text-2xl font-black text-blue-400 mb-1">{{ stat.value }}</div>
            <div class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Column: Experience -->
        <div class="lg:col-span-2 space-y-12">
          <section>
            <h2 class="section-title">工作经历</h2>
            <div class="space-y-8">
              <div v-for="exp in experiences" :key="exp.company" class="experience-item">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 class="text-xl font-bold text-white">{{ exp.company }}</h4>
                    <p class="text-blue-400 text-sm font-bold">{{ exp.position }} | {{ exp.period }}</p>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in exp.techStack.slice(0, 4)" :key="tech" class="tech-tag">{{ tech }}</span>
                  </div>
                </div>
                <p class="text-slate-400 text-sm leading-relaxed mb-4 italic">{{ exp.summary }}</p>
                <ul class="space-y-2">
                  <li v-for="(bullet, i) in exp.details" :key="i" class="resume-bullet">
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-title">核心项目经历</h2>
            <div class="grid grid-cols-1 gap-6">
              <div v-for="project in projects.slice(0, 3)" :key="project.title" class="project-resume-card glass-panel p-6 rounded-2xl">
                <div class="flex items-center gap-3 mb-4">
                  <span class="text-2xl">{{ project.icon }}</span>
                  <h3 class="text-lg font-bold text-white">{{ project.title }}</h3>
                  <span class="text-[10px] text-slate-500 ml-auto font-mono uppercase">{{ project.duration }}</span>
                </div>
                <ul class="space-y-2">
                  <li v-for="(hl, i) in project.highlights" :key="i" class="resume-bullet text-xs">
                    {{ hl }}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar: Skills Summary & Education -->
        <div class="space-y-12">
          <section>
            <h2 class="section-title">专业技能</h2>
            <div class="glass-panel p-6 rounded-3xl space-y-6">
              <div v-for="skillGroup in skillSummary" :key="skillGroup.title">
                <h4 class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span class="w-1 h-1 bg-blue-500 rounded-full"></span>
                  {{ skillGroup.title }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="skill in skillGroup.items" :key="skill" class="px-2 py-1 rounded-md bg-white/5 text-[10px] text-slate-300 border border-white/5">
                    {{ skill }}
                  </span>
                </div>
              </div>
              <router-link to="/skills" class="block text-center py-3 rounded-xl bg-blue-600/10 text-blue-400 text-xs font-bold hover:bg-blue-600/20 transition-colors">
                查看完整技能树 →
              </router-link>
            </div>
          </section>

          <section>
            <h2 class="section-title">教育背景</h2>
            <div class="glass-panel p-6 rounded-3xl">
              <div class="mb-4">
                <h4 class="text-lg font-bold text-white">深圳大学</h4>
                <p class="text-emerald-400 text-sm font-bold">应用物理学 | 本科</p>
                <p class="text-slate-500 text-xs mt-1">2016 - 2020</p>
              </div>
              <div class="flex gap-2">
                <span class="tech-tag">CET-4</span>
              </div>
            </div>
          </section>

          <section>
            <h2 class="section-title">自我评价</h2>
            <div class="glass-panel p-6 rounded-3xl text-xs text-slate-400 leading-relaxed">
              Vue3 前端工程师，5年企业级后台系统与物联网平台开发经验。具备 UniApp 跨端开发能力，擅长复杂权限体系、工业数据可视化与组件化架构设计。注重工程化实践与代码质量。
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const statistics = ref([
  { label: 'Experience', value: '5+ Years' },
  { label: 'IoT Projects', value: '40+' },
  { label: 'Sub-apps', value: '4' },
  { label: 'Open Source', value: '3+' }
])

const skillSummary = ref([
  { title: '框架与语言', items: ['Vue3', 'React', 'TypeScript', 'UniApp', 'Pinia', 'Redux'] },
  { title: '工程化与 UI', items: ['Vite', 'Webpack', 'UnoCSS', 'Element Plus', 'Ant Design'] },
  { title: '业务与可视化', items: ['RBAC 权限', 'WebSocket', 'GIS 地图', '实时数据仪表盘'] }
])

const projects = ref([
  {
    title: '星纵云物联网管理平台',
    highlights: [
      '主导实时仪表盘开发，利用 WebSocket + 请求合并解决 200+ 传感器高频刷新下的卡顿问题',
      '设计可视化规则引擎，支持 8 种条件组合与 40+ 种触发动作，显著提升配置效率',
      '实现设备全生命周期管理流程（注册 → 配置 → 监控 → 升级 → 维护）'
    ],
    icon: '☁️',
    duration: '2023.02 - 2024.07'
  },
  {
    title: '微前端企业管理平台',
    highlights: [
      '处理 Svelte 与 React 跨框架生命周期通信，解决样式冲突与全局状态污染',
      '构建覆盖个人/岗位/应用/用户的四层权限体系，承担组织管理、个人中心等 70% 页面开发',
      '主导 4 个子应用从 JS/Class 到 TS/Hooks 的全面升级，类型覆盖率提升至 40%'
    ],
    icon: '🏗️',
    duration: '2022.01 - 2022.07'
  },
  {
    title: '特殊网关后台系统',
    highlights: [
      '设计模块化组件体系，为后续 9 种网关型号扩展提供统一技术框架',
      '主导从 jQuery 到 Vue3 的架构迁移，建立标准化的前端工程化规范',
      '实现设备参数配置、状态监控与权限管理功能'
    ],
    icon: '🌐',
    duration: '2025.02 - 2025.07'
  }
])

const experiences = ref([
  {
    period: '2023.02 - 2025.11',
    company: '厦门星纵物联科技有限公司',
    position: '前端开发工程师',
    techStack: ['Vue3', 'TS', 'UniApp', 'WebSocket'],
    summary: '负责物联网平台核心开发，主导网关系统架构升级与传感器配置移动端应用。',
    details: [
      '支撑 40+ 类工业设备与 200+ 种传感器的接入管理，独立负责设备管理、规则引擎等核心模块',
      '基于 UniApp 独立开发 Toolbox App，支持蓝牙/WiFi 扫描及固件升级，解决工业现场调试痛点',
      '主导特殊网关后台从 jQuery 到 Vue3 的完整迁移，设计可复用组件库支撑 9 种型号扩展',
      '参与工业路由器 Web 管理后台开发，实现 LAN/WAN/VPN/APN 等复杂网络配置功能'
    ]
  },
  {
    period: '2020.12 - 2023.01',
    company: '深圳高速工程顾问有限公司',
    position: '前端开发工程师',
    techStack: ['React', 'single-spa', 'Vite', 'Redux'],
    summary: '主导微前端架构体系建设，构建颗粒度精确到按钮级的 RBAC 权限系统。',
    details: [
      '主导 4 个子应用的从零构建与 single-spa 跨框架（Svelte/React）生命周期通信',
      '构建覆盖个人/岗位/应用/用户的四层权限体系，承担组织管理、个人中心等 70% 页面开发',
      '利用 React Hooks 对历史复杂组件进行逻辑重构，封装 5+ 种跨项目公共组件',
      '深度集成网政通电子签章服务，实现工程建设合同线上签署全流程闭环'
    ]
  }
])
</script>

<style scoped>
.resume-header {
  background: radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
}

.section-title {
  @apply text-2xl font-bold text-white mb-8 flex items-center gap-3;
}

.section-title::after {
  content: '';
  @apply h-px flex-1 bg-gradient-to-r from-white/10 to-transparent;
}

.experience-item {
  @apply relative pl-6 border-l border-white/5;
}

.experience-item::before {
  content: '';
  @apply absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)];
}

.resume-bullet {
  @apply flex items-start gap-2 text-xs text-slate-500 leading-relaxed;
}

.resume-bullet::before {
  content: '•';
  @apply text-blue-500 font-bold;
}

.tech-tag {
  @apply px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-500 border border-white/5;
}

.contact-pill {
  @apply flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-sm hover:bg-white/10 hover:text-white transition-all;
}

.project-resume-card {
  @apply border-white/5 hover:border-blue-500/20 transition-all;
}
</style>
