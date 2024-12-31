<template>
    <div class="relative overflow-hidden py-16">
      <div class="flex transition-transform duration-500 ease-out"
           :style="carouselStyle">
        <ProductSlide 
          v-for="(slide, index) in slides" 
          :key="index"
          :slide="slide"
          :is-active="currentSlide === index"
        />
      </div>
      <CarouselNavigation
        @prev="prevSlide"
        @next="nextSlide"
      />
    </div>
  </template>
  
  <script setup>
  import {  computed } from 'vue'
  import ProductSlide from './ProductSlide.vue'
  import CarouselNavigation from './CarouselNavigation.vue'
  import { useCarousel } from '@/composables/useCarousel'
  import { defineProps } from 'vue';

  const props = defineProps({
    slides: {
      type: Array,
      required: true
    }
  })
  
  const { currentSlide, nextSlide, prevSlide } = useCarousel(props.slides.length)
  
  const carouselStyle = computed(() => ({
    transform: `translateX(-${currentSlide.value * 20}%)`
  }))
  </script>