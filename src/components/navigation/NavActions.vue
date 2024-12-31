<template>
    <div class="flex items-center space-x-4">
      <CartIcon />
      <AppButton variant="ghost">Login</AppButton>
      <AppButton variant="primary">Sign up</AppButton>
    </div>
  </template>
  
  <script setup>
  import CartIcon from '@/components/ui/CartIcon.vue'
  import AppButton from '@/components/ui/AppButton.vue'
  </script>