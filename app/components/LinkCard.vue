<template>
  <a :href="item.link" target="_blank" rel="noopener noreferrer" class="block">
    <div class="square rounded-lg" :style="{ backgroundColor: item.color }">
      <img :src="item.icon" alt="link icon" class="w-8 h-8 mb-2" />
      <div class="link-text">{{ item.text }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Item {
  text: string
  color: string
  link: string
  icon: string
}
const props = defineProps<{ item: Item }>()
</script>

<style scoped>
.square {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 120px;
  width: 120px;
}
.link-text {
  font-size: 0.875rem;
  font-weight: 500;
}
</style>