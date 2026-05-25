import { watch, onUnmounted } from 'vue'

type CloseHandler = () => void
// LIFO 栈:嵌套场景下 ESC 只关闭最上层 handler
const handlerStack: CloseHandler[] = []

let globalListenerRegistered = false

function handleGlobalKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && handlerStack.length > 0) {
    const topHandler = handlerStack[handlerStack.length - 1]
    topHandler()
  }
}

function ensureGlobalListener() {
  if (!globalListenerRegistered) {
    document.addEventListener('keydown', handleGlobalKeydown)
    globalListenerRegistered = true
  }
}

function maybeTeardownGlobalListener() {
  if (globalListenerRegistered && handlerStack.length === 0) {
    document.removeEventListener('keydown', handleGlobalKeydown)
    globalListenerRegistered = false
  }
}

function removeHandler(handler: CloseHandler) {
  const index = handlerStack.lastIndexOf(handler)
  if (index !== -1) {
    handlerStack.splice(index, 1)
  }
}

export function useEscClose(visible: () => boolean, onClose: () => void) {
  let registered = false

  watch(
    visible,
    (isVisible) => {
      if (isVisible) {
        ensureGlobalListener()
        handlerStack.push(onClose)
        registered = true
      } else if (registered) {
        removeHandler(onClose)
        registered = false
        maybeTeardownGlobalListener()
      }
    },
    { immediate: true },
  )

  onUnmounted(() => {
    if (registered) {
      removeHandler(onClose)
      registered = false
      maybeTeardownGlobalListener()
    }
  })
}
