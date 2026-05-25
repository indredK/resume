<template>
  <div class="about-page animate-fade-in" style="padding-top: 61px;">
    <!-- Hero Section -->
    <section class="hero-section py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-linear-to-b from-purple-500/5 via-transparent to-transparent"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-8 tracking-wider uppercase shadow-lg shadow-purple-500/10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="w-4 h-4">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          关于我
        </div>
        <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 leading-tight">
          Zhong <span class="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-blue-400">INTJ</span>
        </h1>
        <p class="text-base md:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
          建筑师型人格 · 理性思考者 · 追求卓越的工程师
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="container mx-auto px-6 pb-32">
      <div class="max-w-5xl mx-auto space-y-8">
<!-- INTJ Personality -->
        <div class="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 bg-linear-to-br from-purple-600/20 via-transparent to-transparent"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl shadow-xl">
                🧠
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white mb-2">INTJ 建筑师型人格</h2>
                <p class="text-sm text-slate-500">Introverted · Intuitive · Thinking · Judging</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="personality-trait rounded-2xl p-6 bg-slate-800/30 border border-slate-700/30">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">🎯</span>
                  <h3 class="text-lg font-bold text-white">战略思维</h3>
                </div>
                <p class="text-sm text-slate-400 leading-relaxed">
                  善于从全局视角分析问题，制定长期规划。在技术选型和架构设计中，总是考虑可扩展性和未来演进方向。
                </p>
              </div>

              <div class="personality-trait rounded-2xl p-6 bg-slate-800/30 border border-slate-700/30">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">💡</span>
                  <h3 class="text-lg font-bold text-white">创新驱动</h3>
                </div>
                <p class="text-sm text-slate-400 leading-relaxed">
                  不满足于现状，持续探索新技术和最佳实践。从 jQuery 到 Vue3，从单体应用到微前端，始终保持技术敏感度。
                </p>
              </div>

              <div class="personality-trait rounded-2xl p-6 bg-slate-800/30 border border-slate-700/30">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">🔍</span>
                  <h3 class="text-lg font-bold text-white">追求完美</h3>
                </div>
                <p class="text-sm text-slate-400 leading-relaxed">
                  对代码质量有高标准要求，注重工程化实践。TypeScript 覆盖率从 5% 提升到 40%，体现了对类型安全的执着。
                </p>
              </div>

              <div class="personality-trait rounded-2xl p-6 bg-slate-800/30 border border-slate-700/30">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-2xl">🎓</span>
                  <h3 class="text-lg font-bold text-white">独立学习</h3>
                </div>
                <p class="text-sm text-slate-400 leading-relaxed">
                  自主完成多个全栈开源项目，从 GIS 可视化到跨平台聊天应用，展现了强大的自学能力和执行力。
                </p>
              </div>
            </div>

            <div class="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6">
              <h3 class="text-sm font-bold text-purple-400 uppercase tracking-wider mb-3">核心特质</h3>
              <div class="flex flex-wrap gap-3">
                <span class="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20">理性分析</span>
                <span class="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20">系统思考</span>
                <span class="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20">追求效率</span>
                <span class="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20">独立自主</span>
                <span class="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20">注重细节</span>
                <span class="px-4 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-semibold border border-purple-500/20">长期规划</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Methodology -->
        <div class="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 bg-linear-to-br from-emerald-600/20 via-transparent to-transparent"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-3xl shadow-xl">
                📊
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white mb-2">工作方法论</h2>
                <p class="text-sm text-slate-500">数据驱动 · 持续迭代</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="principle in principles" :key="principle.title" class="methodology-card rounded-2xl p-6 bg-slate-800/30 border border-slate-700/30 group hover:border-emerald-500/30 transition-all">
                <div class="flex items-start gap-4">
                  <span class="text-3xl transition-transform group-hover:scale-110">{{ principle.icon }}</span>
                  <div>
                    <h3 class="text-lg font-bold text-white mb-2">{{ principle.title }}</h3>
                    <p class="text-sm text-slate-400 leading-relaxed">{{ principle.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <h3 class="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-3">实践理念</h3>
              <p class="text-sm text-slate-400 leading-relaxed">
                按<span class="text-slate-300 font-medium">公司与项目维度</span>，量化呈现每一段经历中的<span class="text-slate-300 font-medium">核心成果</span>与<span class="text-slate-300 font-medium">方法论</span>。
                用数据说话，用结果证明，持续优化，追求卓越。
              </p>
            </div>
          </div>
        </div>

        <!-- Contact & Links -->
        <div class="glass-panel rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div class="absolute inset-0 opacity-10 bg-linear-to-br from-blue-600/20 via-transparent to-transparent"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl shadow-xl">
                📬
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white mb-2">联系方式</h2>
                <p class="text-sm text-slate-500">欢迎交流与合作</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a :href="`tel:${CONTACT.phone}`" class="contact-card rounded-xl p-5 bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  📱
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-1">电话</div>
                  <div class="text-sm font-semibold text-white">{{ CONTACT.phoneDisplay }}</div>
                </div>
              </a>

              <a :href="`mailto:${CONTACT.email}`" class="contact-card rounded-xl p-5 bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-1">邮箱</div>
                  <div class="text-sm font-semibold text-white">{{ CONTACT.email }}</div>
                </div>
              </a>

              <a :href="CONTACT.github" target="_blank" class="contact-card rounded-xl p-5 bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  💻
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-1">GitHub</div>
                  <div class="text-sm font-semibold text-white">{{ CONTACT.githubHandle }}</div>
                </div>
              </a>

              <a :href="CONTACT.blog" target="_blank" class="contact-card rounded-xl p-5 bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-all flex items-center gap-4 group">
                <div class="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  ✍️
                </div>
                <div>
                  <div class="text-xs text-slate-500 mb-1">技术博客</div>
                  <div class="text-sm font-semibold text-white">CSDN</div>
                </div>
              </a>
            </div>
          </div>
        </div>
</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCaseStudiesData } from '@/composables/useCaseStudiesData'
import { CONTACT } from '@/data/contact'

const { loadPrinciples } = useCaseStudiesData()
const principles = ref<Array<{title: string, icon: string, desc: string}>>([])

onMounted(async () => {
  const data = await loadPrinciples()
  principles.value = data
})
</script>

<style scoped>
.hero-section {
  background: radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
}

.personality-trait:hover {
  transform: translateY(-2px);
  border-color: rgba(168, 85, 247, 0.3);
}

.methodology-card:hover {
  transform: translateY(-2px);
}

.contact-card:hover {
  transform: translateY(-2px);
}
</style>
