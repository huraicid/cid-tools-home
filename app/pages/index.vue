<script setup lang="ts">
const items = [
  { text: 'GitHub', color: '#da1884', link: 'https://github.com/huraicid'},
  { text: 'note', color: '#12bfb2', link: 'https://note.com/huraicid'},
  { text: 'qiita', color: '#9595d2', link: 'https://qiita.com/huraicid'},
  { text: 'X(Twitter)', color: '#c4bcb7', link: 'https://x.com/huraicid'}
]
</script>

<style>
  .square {
    display: flex;
    align-items: center;
    justify-content:center;
    height: 160px;
    width: 160px;
    align-items: center !important;
  }
</style>

<template>
  <div class="dark" style="text-align:center; margin-top:3rem;">
    <h1>huraicid's Home page</h1>

    <!-- selection -->
    <h2>Links</h2>
    <div class="container bg-center max-w-lg box-border mx-auto">
      <UCarousel v-slot="{ item }" arrows dots :items="items" :ui="{ item: 'basis-1/3' }">
        <a v-if="item" :href="item.link" target="_blank" rel="noopener noreferrer" class="block">
          <div class="square rounded-lg" :style="{ backgroundColor: item.color }">
            {{ item.text }}
          </div>
        </a>
      </UCarousel>
    </div>
  </div>
</template>

display:fl