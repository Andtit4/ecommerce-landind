<template>
    <div 
      class="min-w-[20%] px-2 transition-all duration-500"
      :class="{ 'scale-95': !isActive }"
    >
      <div class="relative rounded-xl overflow-hidden aspect-[3/4] group">
        <img 
        height="400px"
          :src="slide.image" 
          :alt="slide.description"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <ProductOverlay :price="slide.price" :description="slide.description" />
      </div>
    </div>
  </template>
  
  <script setup>
  import ProductOverlay from './ProductOverlay.vue'
  import { defineProps } from 'vue';

  defineProps({
    slide: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  })
  </script>