<script setup lang="ts">

const githubIcon = new URL('../assets/img/icon/github-mark-white.png', import.meta.url).href
const noteIcon = new URL('../assets/img/icon/note-logo.png', import.meta.url).href
const qiitaIcon = new URL('../assets/img/icon/qiita-icon.png', import.meta.url).href
const xIcon = new URL('../assets/img/icon/x-logo-white.png', import.meta.url).href

const items = [
  { text: 'GitHub', color: '#da1884', link: 'https://github.com/huraicid', icon: githubIcon },
  { text: 'note', color: '#12bfb2', link: 'https://note.com/huraicid', icon: noteIcon },
  { text: 'qiita', color: '#9595d2', link: 'https://qiita.com/huraicid', icon: qiitaIcon },
  { text: 'X(Twitter)', color: '#c4bcb7', link: 'https://x.com/huraicid', icon: xIcon }
]
</script>

<style>
  .square {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 120px;
    width: 120px;
    align-items: center !important;
  }
</style>

<template>
  <div class="dark" style="text-align:center; margin-top:3rem;">
    <h1>huraicid's Home Page</h1>

    <!-- selection -->
    <h2>Links</h2>
    <div class="container bg-center max-w-md box-border mx-auto">
      <UCarousel v-slot="{ item }" arrows dots :items="items" :ui="{ item: 'basis-1/3' }">
        <a v-if="item" :href="item.link" target="_blank" rel="noopener noreferrer" class="block">
          <div class="square rounded-lg" :style="{ backgroundColor: item.color }">
            <img :src="item.icon" alt="link icon" class="w-8 h-8 mb-2" />
            {{ item.text }}
          </div>
        </a>
      </UCarousel>
    </div>
  </div>
</template>

display:fl