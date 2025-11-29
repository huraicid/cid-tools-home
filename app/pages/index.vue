<script setup lang="ts">
import LinksGrid from '~/components/LinksGrid.vue';
import ToolCard from '~/components/ToolCard.vue';
import { tools } from '~/data/tools';
</script>

<template>
  <div style="text-align:center; margin:3rem;">
    <div class="container mx-auto px-4">
      <h1>huraicid's Home Page</h1>

      <!-- Welcome -->
      <div class="flex flex-col items-center justify-center text-center space-y-4 w-full mt-8">
        <h2>Welcome to my personal site</h2>
        <p> Under construction...</p>
      </div>

      <!-- selection -->
      <div class="flex flex-col items-center justify-center text-center space-y-4 w-full">
        <h2 class="text-2xl font-semibold">Links</h2>
        <div class="w-full max-w-2xl flex justify-center">
          <LinksGrid />
        </div>
      </div>

      <!-- Tools -->
      <div class="flex flex-col items-center justify-center text-center space-y-4 w-full mt-8">
        <h2 class="text-2xl font-semibold">Tools</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard
              v-for="tool in tools"
              :key="tool.id"
              :title="tool.name"
              :description="tool.description"
              :url="tool.url"
              :icon="tool.icon"
            />
        </div>
      </div>
    </div>
  </div>

  <footer class="text-center p-4">
    <p class="text-sm text-gray-500">(C) 2025 huraicid. All rights reserved.</p>
  </footer>
</template>



