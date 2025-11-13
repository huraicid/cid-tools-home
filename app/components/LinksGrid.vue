<template>
    <div class="links-grid">
        <div :class="`grid gap-4 ${actualUi.grid}`">
        <LinkCard v-for="(item, index) in items" :key="index" :item="item" />
        </div>
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
}>()

// local defaults
const actualUi = props.ui ?? { grid: 'grid-cols-2' }

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
.links-grid { 
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0px;
  padding: 16px;
  width: min(100%, 300px);
}
</style>