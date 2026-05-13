import { watch, onUnmounted } from 'vue'

type CloseHandler = () => void
const handlerStack: CloseHandler[] = []

let globalListenerRegistered = false

function handleGlobalKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && handlerStack.length > 0) {
    const topHandler = handlerStack[handlerStack.length - 1]
    topHandler()
  }
}

function registerGlobalListener() {
  if (!globalListenerRegistered) {
    document.addEventListener('keydown', handleGlobalKeydown)
    globalListenerRegistered = true
  }
}

export function useEscClose(visible: () => boolean, onClose: () => void) {
  let registered = false

  watch(
    visible,
    (isVisible) => {
      if (isVisible) {
        registerGlobalListener()
        handlerStack.push(onClose)
        registered = true
      } else {
        if (registered) {
          const index = handlerStack.lastIndexOf(onClose)
          if (index !== -1) {
            handlerStack.splice(index, 1)
          }
          registered = false
        }
      }
    },
    { immediate: true },
  )

  onUnmounted(() => {
    if (registered) {
      const index = handlerStack.lastIndexOf(onClose)
      if (index !== -1) {
        handlerStack.splice(index, 1)
      }
      registered = false
    }
  })
}