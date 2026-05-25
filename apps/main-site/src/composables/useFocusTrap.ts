import { watch, onUnmounted, nextTick, type Ref, type ComputedRef } from 'vue'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

/**
 * 焦点陷阱 Hook
 * - 可见时:记录原焦点 → 把焦点移入容器 → 拦截 Tab/Shift+Tab 在首尾循环
 * - 不可见时:还原原焦点并解绑
 *
 * @param containerRef 焦点陷阱容器
 * @param visible 可见性
 */
export function useFocusTrap(
  containerRef: Ref<HTMLElement | null>,
  visible: ComputedRef<boolean> | Ref<boolean>,
) {
  let previouslyFocused: HTMLElement | null = null
  let bound = false

  const getFocusable = (): HTMLElement[] => {
    const root = containerRef.value
    if (!root) return []
    return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter((el) => {
      return !el.hasAttribute('disabled') && el.offsetParent !== null
    })
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    const focusables = getFocusable()
    if (focusables.length === 0) {
      e.preventDefault()
      return
    }
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement as HTMLElement | null

    if (e.shiftKey) {
      if (active === first || !containerRef.value?.contains(active)) {
        e.preventDefault()
        last.focus()
      }
    } else {
      if (active === last || !containerRef.value?.contains(active)) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  const activate = () => {
    previouslyFocused = (document.activeElement as HTMLElement | null) ?? null
    nextTick(() => {
      const focusables = getFocusable()
      if (focusables.length > 0) {
        focusables[0].focus()
      } else {
        containerRef.value?.focus()
      }
    })
    if (!bound) {
      document.addEventListener('keydown', handleKeydown)
      bound = true
    }
  }

  const deactivate = () => {
    if (bound) {
      document.removeEventListener('keydown', handleKeydown)
      bound = false
    }
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus()
    }
    previouslyFocused = null
  }

  watch(visible, (isVisible) => {
    if (isVisible) activate()
    else deactivate()
  }, { immediate: true })

  onUnmounted(() => {
    if (bound) {
      document.removeEventListener('keydown', handleKeydown)
      bound = false
    }
    previouslyFocused = null
  })
}
