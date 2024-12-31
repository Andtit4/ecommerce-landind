<template>
    <div class="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
      <button 
        @click="$emit('prev')"
        class="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors pointer-events-auto"
      >
        <ArrowIcon direction="left" />
      </button>
      <button 
        @click="$emit('next')"
        class="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors pointer-events-auto"
      >
        <ArrowIcon direction="right" />
      </button>
    </div>
  </template>
  
  <script setup>
  import ArrowIcon from '@/components/ui/ArrowIcon.vue'
  import { defineEmits } from 'vue';

  
  defineEmits(['prev', 'next'])
  </script>