import { watch, onUnmounted, nextTick, type Ref, type ComputedRef } from 'vue'
import { lockBodyScroll, unlockBodyScroll } from './useScrollLock'

/**
 * 抽屉/模态滚动管理 Hook
 * - 进入可见态:body scroll lock + 绑定 wheel 防穿透 + scrollTop 归零
 * - 离开可见态/卸载:严格按当前状态 release,绝不"无条件 -1"
 * - 配合模块级 lockCount(useScrollLock),保证多 drawer 并存时彼此不偷锁
 *
 * @param drawerBodyRef 抽屉内容滚动容器
 * @param visible 可见性(ComputedRef/Ref)
 * @param watchProps 需要在变化时自动 scrollTop 归零的属性
 */
export function useDrawer(
  drawerBodyRef: Ref<HTMLElement | null>,
  visible: ComputedRef<boolean> | Ref<boolean>,
  watchProps: Record<string, unknown> = {}
) {
  let locked = false
  let wheelBound = false

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

  const scrollToTop = () => {
    nextTick(() => {
      if (drawerBodyRef.value) {
        drawerBodyRef.value.scrollTop = 0
      }
    })
  }

  const acquireLock = () => {
    if (!locked) {
      lockBodyScroll()
      locked = true
    }
  }

  const releaseLock = () => {
    if (locked) {
      unlockBodyScroll()
      locked = false
    }
  }

  const bindWheel = () => {
    if (wheelBound) return
    const el = drawerBodyRef.value
    if (!el) return
    el.addEventListener('wheel', handleWheel, { passive: false })
    wheelBound = true
  }

  const unbindWheel = () => {
    if (!wheelBound) return
    drawerBodyRef.value?.removeEventListener('wheel', handleWheel)
    wheelBound = false
  }

  watch(visible, (isVisible) => {
    if (isVisible) {
      acquireLock()
      scrollToTop()
      // DOM 还没绑定模板 ref 时 bindWheel 会 no-op;首次显示靠 nextTick 后再绑
      nextTick(bindWheel)
    } else {
      releaseLock()
      unbindWheel()
    }
  }, { immediate: true })

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

  onUnmounted(() => {
    releaseLock()
    unbindWheel()
  })

  return {
    scrollToTop,
  }
}
