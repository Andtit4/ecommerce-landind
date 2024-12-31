<template>
    <svg class="w-6 h-6" :class="directionClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { defineProps } from 'vue';

  
  const props = defineProps({
    direction: {
      type: String,
      default: 'right'
    }
  })
  
  const directionClass = computed(() => ({
    'rotate-180': props.direction === 'left'
  }))
  </script>