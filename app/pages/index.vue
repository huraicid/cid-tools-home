<script setup lang="ts">
import LinksCarousel from '@/components/LinksCarousel.vue'
</script>

<template>
  <div class="dark" style="text-align:center; margin-top:3rem;">
    <h1>huraicid's Home Page</h1>

    <!-- selection -->
    <h2>Links</h2>
    <div class="container bg-center max-w-md box-border mx-auto">
      <LinksCarousel :dots="true" :arrows="true" />
    </div>
  </div>
</template>
