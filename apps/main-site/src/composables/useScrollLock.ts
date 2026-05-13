let lockCount = 0

export function lockBodyScroll() {
  if (lockCount === 0) {
    document.body.style.overflow = 'hidden'
  }
  lockCount++
}

export function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) {
    document.body.style.overflow = ''
  }
}