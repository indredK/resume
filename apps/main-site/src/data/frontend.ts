import type { SkillNode } from './types'

export const frontendSkills: SkillNode = {
  id: 'frontend',
  name: '前端技术',
  icon: '⚡',
  color: '#4ade80',
  children: [
    {
      id: 'fe-framework',
      name: '框架生态',
      children: [
        {
          id: 'fe-vue',
          name: 'Vue 生态',
          level: 95,
          children: [
            { id: 'vue3', name: 'Vue 3', level: 95, link: 'https://github.com/kindred-resume-hub/vue-portfolio' },
            { id: 'vue2', name: 'Vue 2', level: 90 },
            { id: 'pinia', name: 'Pinia', level: 92 },
            { id: 'vue-router', name: 'Vue Router', level: 90 },
            { id: 'nuxt', name: 'Nuxt.js', level: 80 },
            { id: 'quasar', name: 'Quasar', level: 75 },
            { id: 'naiveui', name: 'NaiveUI', level: 85 }
          ]
        },
        {
          id: 'fe-react',
          name: 'React 生态',
          level: 88,
          children: [
            { id: 'react18', name: 'React 18', level: 88, link: 'https://github.com/kindred-resume-hub/react-portfolio' },
            { id: 'nextjs', name: 'Next.js', level: 85 },
            { id: 'remix', name: 'Remix', level: 70 },
            { id: 'redux', name: 'Redux', level: 80 },
            { id: 'zustand', name: 'Zustand', level: 85 },
            { id: 'react-query', name: 'TanStack Query', level: 82 },
            { id: 'antd', name: 'Ant Design', level: 88 }
          ]
        },
        {
          id: 'fe-angular',
          name: 'Angular 生态',
          level: 65,
          children: [
            { id: 'angular2', name: 'Angular 2+', level: 65 },
            { id: 'ngrx', name: 'NgRx', level: 60 }
          ]
        },
        {
          id: 'fe-other',
          name: '其他框架',
          level: 75,
          children: [
            { id: 'svelte', name: 'Svelte', level: 75 },
            { id: 'solid', name: 'Solid.js', level: 60 },
            { id: 'qwik', name: 'Qwik', level: 50 }
          ]
        }
      ]
    },
    {
      id: 'fe-mobile',
      name: '移动端框架',
      children: [
        { id: 'rn', name: 'React Native', level: 80 },
        { id: 'flutter', name: 'Flutter', level: 70 },
        { id: 'uniapp', name: 'UniApp', level: 85 },
        { id: 'taro', name: 'Taro', level: 78 }
      ]
    },
    {
      id: 'fe-build',
      name: '构建工具',
      children: [
        { id: 'vite', name: 'Vite', level: 95 },
        { id: 'webpack', name: 'Webpack', level: 85 },
        { id: 'esbuild', name: 'esbuild', level: 80 },
        { id: 'rollup', name: 'Rollup', level: 75 },
        { id: 'turbopack', name: 'Turbopack', level: 70 }
      ]
    },
    {
      id: 'fe-css',
      name: 'CSS 框架',
      children: [
        { id: 'tailwind', name: 'TailwindCSS', level: 95 },
        { id: 'unocss', name: 'UnoCSS', level: 85 },
        { id: 'sass', name: 'Sass/Less', level: 90 },
        { id: 'emotion', name: 'Emotion', level: 80 },
        { id: 'stitches', name: 'Stitches', level: 75 },
        { id: 'radix', name: 'Radix UI', level: 78 }
      ]
    },
    {
      id: 'fe-micro',
      name: '微前端',
      children: [
        { id: 'qiankun', name: 'Qiankun', level: 88, link: 'https://github.com/kindred-resume-hub/qiankun-main' },
        { id: 'single-spa', name: 'single-spa', level: 75 },
        { id: 'garfish', name: 'Garfish', level: 70 }
      ]
    }
  ]
}
