<template>
    <button
      class="px-4 py-2 rounded transition-all duration-300 transform hover:scale-105"
      :class="buttonClasses"
    >
      <slot />
      <span v-if="withArrow" class="ml-2">→</span>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { defineProps } from 'vue';

  const props = defineProps({
    variant: {
      type: String,
      default: 'primary'
    },
    withArrow: {
      type: Boolean,
      default: false
    }
  })
  
  const buttonClasses = computed(() => ({
    'bg-white text-black hover:bg-gray-200': props.variant === 'primary',
    'text-white hover:bg-white hover:text-black': props.variant === 'ghost'
  }))
  </script>