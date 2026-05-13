import { ref, watch, onUnmounted, nextTick, type Ref, type ComputedRef } from 'vue'
import { lockBodyScroll, unlockBodyScroll } from './useScrollLock'

/**
 * 抽屉组件的滚动管理 Hook
 * @param drawerBodyRef 抽屉内容区域的 ref
 * @param visible 抽屉可见性
 * @param watchProps 需要监听变化的属性，用于自动滚动到顶部
 */
export function useDrawer(
  drawerBodyRef: Ref<HTMLElement | null>,
  visible: ComputedRef<boolean>,
  watchProps: Record<string, any> = {}
) {
  // 防止滚动冒泡到底层
  const handleWheel = (e: WheelEvent) => {
    const el = drawerBodyRef.value
    if (!el) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    if (isScrollingDown && scrollTop + clientHeight >= scrollHeight - 1) {
      e.preventDefault()
      el.scrollTop = scrollHeight - clientHeight
    } else if (isScrollingUp && scrollTop <= 0) {
      e.preventDefault()
      el.scrollTop = 0
    }
  }

  // 滚动到顶部
  const scrollToTop = () => {
    nextTick(() => {
      if (drawerBodyRef.value) {
        drawerBodyRef.value.scrollTop = 0
      }
    })
  }

  // 监听抽屉可见性
  watch(visible, (isVisible) => {
    if (isVisible) {
      lockBodyScroll()
      scrollToTop()
      
      // 绑定滚动事件
      if (drawerBodyRef.value) {
        drawerBodyRef.value.addEventListener('wheel', handleWheel, { passive: false })
      }
    } else {
      unlockBodyScroll()
      
      if (drawerBodyRef.value) {
        drawerBodyRef.value.removeEventListener('wheel', handleWheel)
      }
    }
  }, { immediate: true })

  // 监听属性变化，自动滚动到顶部
  const watchKeys = Object.keys(watchProps)
  if (watchKeys.length > 0) {
    watch(
      () => watchKeys.map(key => watchProps[key]),
      () => {
        if (visible.value) {
          scrollToTop()
        }
      }
    )
  }

  // 组件卸载时清理
  onUnmounted(() => {
    unlockBodyScroll()
    if (drawerBodyRef.value) {
      drawerBodyRef.value.removeEventListener('wheel', handleWheel)
    }
  })

  return {
    scrollToTop,
  }
}
