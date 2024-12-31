<template>
    <div class="fashion-carousel relative overflow-hidden">
      <TransitionGroup
        name="carousel"
        tag="div"
        class="flex"
        :style="carouselStyle"
      >
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="slide-item"
          :class="{ active: currentSlide === index }"
        >
          <FashionCard
            :image="slide.image"
            :title="slide.title"
            :price="slide.price"
            v-observe-visibility="{ callback: onSlideVisible }"
          />
        </div>
      </TransitionGroup>
  
      <BaseButton
        class="carousel-nav prev"
        @click="prev"
        :disabled="isAnimating"
        aria-label="Previous slide"
      >
        <IconChevronLeft />
      </BaseButton>
  
      <BaseButton
        class="carousel-nav next"
        @click="next"
        :disabled="isAnimating"
        aria-label="Next slide"
      >
        <IconChevronRight />
      </BaseButton>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useCarousel } from '@/composables/useCarousel'
  import BaseButton from '@/components/ui/BaseButton.vue'
  import FashionCard from './FashionCard.vue'
  import { vObserveVisibility } from '@/directives/observe-visibility'
  import { defineProps } from 'vue';

  const props = defineProps({
    slides: {
      type: Array,
      required: true,
      validator: (slides) => slides.every(slide => 
        slide.id && slide.image && slide.title && slide.price
      )
    }
  })
  
  const { 
    currentSlide, 
    isAnimating, 
    next, 
    prev 
  } = useCarousel(props.slides, { autoplay: true })
  
  const carouselStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * 100}%)`,
    transition: isAnimating.value ? 'transform 0.5s ease-out' : 'none'
  }))
  
  const onSlideVisible = (isVisible, entry) => {
    if (isVisible) {
      entry.target.classList.add('slide-visible')
    }
  }
  </script>
  
  <style scoped>
  .carousel-slide-enter-active,
  .carousel-slide-leave-active {
    transition: all 0.5s ease;
  }
  
  .carousel-slide-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }
  
  .carousel-slide-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  .slide-visible {
    animation: fadeIn 0.5s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  </style>
  