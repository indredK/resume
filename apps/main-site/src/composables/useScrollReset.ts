import { nextTick, type Ref } from 'vue'

/**
 * 页面滚动位置管理 Composable
 * 提供平滑滚动到顶部的功能，适用于切换项目/公司时的滚动重置
 */
export function useScrollReset() {
  /**
   * 平滑滚动到页面顶部
   * @param delay 延迟执行时间(ms)，用于等待 DOM 更新
   */
  const scrollToTop = (delay: number = 50) => {
    nextTick(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }, delay)
    })
  }

  /**
   * 立即滚动到页面顶部（无动画）
   */
  const scrollToTopImmediately = () => {
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  }

  /**
   * 滚动到指定元素
   * @param element 目标元素
   * @param offsetTop 顶部偏移量
   */
  const scrollToElement = (element: HTMLElement | null, offsetTop: number = 0) => {
    if (!element) return
    nextTick(() => {
      const top = element.getBoundingClientRect().top + window.scrollY - offsetTop
      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
      })
    })
  }

  /**
   * 获取当前滚动位置
   */
  const getScrollPosition = (): { x: number; y: number } => {
    return {
      x: window.scrollX,
      y: window.scrollY
    }
  }

  return {
    scrollToTop,
    scrollToTopImmediately,
    scrollToElement,
    getScrollPosition
  }
}

/**
 * 快捷滚动重置 Hook
 * 返回一个 scrollReset 函数，每次调用都会平滑滚动到顶部
 */
export function useScrollResetOnChange(..._deps: unknown[]) {
  const { scrollToTop } = useScrollReset()

  const scrollReset = () => {
    scrollToTop()
  }

  return {
    scrollReset,
    scrollToTop
  }
}
