
// composables/useCarousel.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useCarousel(slides, options = {}) {
  const currentSlide = ref(0)
  const isAnimating = ref(false)
  const { autoplay = true, interval = 5000 } = options
  
  const next = () => {
    if (isAnimating.value) return
    isAnimating.value = true
    currentSlide.value = (currentSlide.value + 1) % slides.length
    setTimeout(() => isAnimating.value = false, 500)
  }

  const prev = () => {
    if (isAnimating.value) return
    isAnimating.value = true
    currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
    setTimeout(() => isAnimating.value = false, 500)
  }

  let intervalId

  onMounted(() => {
    if (autoplay) {
      intervalId = setInterval(next, interval)
    }
  })

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
  })

  return {
    currentSlide,
    isAnimating,
    next,
    prev
  }
}