import { ref, readonly, type Ref } from 'vue'

export const THEME_NAMES = ['swiss', 'brutal', 'mag', 'indust'] as const
export type ThemeName = (typeof THEME_NAMES)[number]

const STORAGE_KEY = 'portfolio-theme'
const DEFAULT_THEME: ThemeName = 'swiss'

function isThemeName(value: unknown): value is ThemeName {
  return typeof value === 'string' && (THEME_NAMES as readonly string[]).includes(value)
}

function readInitialTheme(): ThemeName {
  // FOUC 脚本已在 index.html 同步设置过 dataset.theme,以 DOM 为准
  if (typeof document !== 'undefined') {
    const fromDom = document.documentElement.dataset.theme
    if (isThemeName(fromDom)) return fromDom
  }
  return DEFAULT_THEME
}

// 模块级单例 — 全应用共享同一个 current
const current = ref<ThemeName>(readInitialTheme())

function applyTheme(name: ThemeName) {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = name
  }
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, name)
    } catch {
      // quota / 隐私模式 / 禁用 storage — 忽略,运行时仍按当前 ref 工作
    }
  }
}

export function useTheme() {
  function setTheme(name: ThemeName) {
    if (!isThemeName(name) || current.value === name) return
    current.value = name
    applyTheme(name)
  }

  return {
    current: readonly(current) as Readonly<Ref<ThemeName>>,
    setTheme,
    themes: THEME_NAMES,
  }
}
