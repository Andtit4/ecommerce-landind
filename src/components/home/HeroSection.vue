<template>
    <div class="container mx-auto px-4 py-16 text-center">
      <Badge>{{ badgeText }}</Badge>
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-700 hover:tracking-wider">
        {{ title }}
      </h1>
      <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
        {{ description }}
      </p>
      <AppButton variant="primary" class="with-arrow">
        {{ ctaText }}
      </AppButton>
    </div>
  </template>
  
  <script setup>
  import Badge from '@/components/ui/BadgeApp.vue'
  import AppButton from '@/components/ui/AppButton.vue'
  import { HERO_CONTENT } from '@/constants/content'
  import {ref, onMounted } from 'vue'
  import Typed from 'typed.js' 
  
  const { badgeText, title, description, ctaText } = HERO_CONTENT
const titleRef = ref('') 


onMounted(() => {
  const options = {
    strings: [HERO_CONTENT.title], 
    typeSpeed: 50,
    backSpeed: 25,
    loop: false,
  }
  new Typed(titleRef.value, options) 
})
  </script>