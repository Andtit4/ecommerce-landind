<template>
  <nav class="p-4">
    <div class="container mx-auto flex items-center justify-between">
      <AppLogo />
      <NavMenu :items="menuItems" />
      <NavActions />
    </div>
  </nav>
</template>

<script setup>
import AppLogo from './AppLogo.vue'
import NavMenu from './NavMenu.vue'
import NavActions from './NavActions.vue'
import { MENU_ITEMS } from '@/constants/navigation'

const menuItems = MENU_ITEMS

</script>