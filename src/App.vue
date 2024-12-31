<template>
  <div class="min-h-screen bg-black">
    <NavBar />
    <main>
      <HeroSection />
      <ProductCarousel :slides="products" />
    </main>
  </div>
</template>

<script setup>
import { onMounted  } from 'vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ProductCarousel from '@/components/home/ProductCarousel/ProductCarousel.vue'
import { useProductStore } from '@/stores/productStore'
import NavBar from './components/navigation/NavBar.vue';

const productStore = useProductStore()
const products = productStore.products

onMounted(async () => {
  await productStore.fetchProducts()
})

</script>