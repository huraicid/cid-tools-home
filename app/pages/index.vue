<script setup lang="ts">
import LinksCarousel from '@/components/LinksCarousel.vue'
</script>

<template>
  <div class="dark" style="text-align:center; margin:3rem;">
    <div class="container mx-auto px-4">
      <h1>huraicid's Home Page</h1>
      <h2>Welcome to my personal site</h2>
      <p> Under construction</p>
      
      <!-- selection -->
      <h2>Links</h2>
      <LinksCarousel :dots="true" :arrows="true" class="mx-auto"/>
    </div>
  </div>

  <footer class="text-center p-4">
    <p class="text-sm text-gray-500">© 2024 huraicid. All rights reserved.</p>
  </footer>
</template>
