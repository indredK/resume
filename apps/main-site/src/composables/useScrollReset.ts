import { nextTick } from 'vue'

/**
 * 页面滚动位置管理 Composable
 */
export function useScrollReset() {
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

  return {
    scrollToTop,
  }
}
