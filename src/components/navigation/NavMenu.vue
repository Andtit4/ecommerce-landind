<template>
    <div class="flex space-x-6">
      <a v-for="item in items" 
         :key="item"
         class="text-white hover:text-gray-300 transition-colors"
         href="#"
      >
        {{ item }}
      </a>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';

  defineProps({
    items: {
      type: Array,
      required: true
    }
  })
  </script>