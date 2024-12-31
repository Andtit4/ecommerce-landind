<template>
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <div class="text-white">
        <p class="font-semibold">{{ price }}</p>
        <p class="text-sm">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    import { defineProps } from 'vue';

  defineProps({
    price: String,
    description: String
  })
  </script>