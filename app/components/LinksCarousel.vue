<template>
  <div class="links-carousel">
    <UCarousel v-slot="{ item }" :arrows="arrows" :dots="dots" :items="items" :ui="actualUi">
      <LinkCard v-if="item" :item="item" />
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import LinkCard from './LinkCard.vue'

interface Item {
  text: string
  color: string
  link: string
  icon: string
}

// define props without withDefaults to avoid the type mismatch
const props = defineProps<{
  ui?: Record<string, any>
  arrows?: boolean
  dots?: boolean
}>()

// local defaults
const actualUi = props.ui ?? { item: 'basis-1/3' }
const arrows = props.arrows ?? true
const dots = props.dots ?? true

// fixed items inside component — Vite asset resolution via new URL
const items: Item[] = [
  {
    text: 'GitHub',
    color: '#da1884',
    link: 'https://github.com/huraicid',
    icon: '/img/icon/github-mark-white.png'
  },
  {
    text: 'note',
    color: '#12bfb2',
    link: 'https://note.com/huraicid',
    icon: '/img/icon/note-logo.png'
  },
  {
    text: 'qiita',
    color: '#9595d2',
    link: 'https://qiita.com/huraicid',
    icon: '/img/icon/qiita-icon.png'
  },
  {
    text: 'X(Twitter)',
    color: '#c4bcb7',
    link: 'https://x.com/huraicid',
    icon: '/img/icon/x-logo-white.png'
  }
]
</script>

<style scoped>
/* 必要に応じて調整 */
.links-carousel { display: block; }
</style>