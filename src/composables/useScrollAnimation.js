import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const handleScroll = () => {
    const elements = document.querySelectorAll('[data-scroll]')
    
    elements.forEach(el => {
      const rect = el.getBoundingClientRect()
      const isVisible = rect.top <= window.innerHeight * 0.75
      
      if (isVisible) {
        el.classList.add('animate-fade-in')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}