import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const isVisible = ref(false)
  const targetRef = ref(null)

  const callback = (entries) => {
    const [entry] = entries
    isVisible.value = entry.isIntersecting
  }

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(callback, options)
    if (targetRef.value) observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return {
    isVisible,
    targetRef
  }
}