<script setup lang="ts">
defineProps<{
  title: string
  description: string
  url: string
  repo?: string        // ← GitHub リポジトリ URL
  icon?: string
}>()
</script>

<template>
  <UCard
    as="a"
    :href="url"
    :ui="{ body: 'p-6' }"
    class="
      relative overflow-hidden
      max-w-sm mx-auto w-full

      bg-white/10 dark:bg-white/5
      backdrop-blur-xl
      border border-white/20 dark:border-white/10

      shadow-[0_8px_30px_rgb(0,0,0,0.05)]
      hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)]

      hover:-translate-y-1 hover:scale-[1.02]
      transition-all duration-300 ease-[cubic-bezier(.25,.8,.25,1)]
      text-gray-900 dark:text-gray-200
    "
  >

    <!-- subtle highlight -->
    <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 to-white/5 dark:from-white/10 dark:to-white/0"></div>

    <!-- GitHub button（右上固定） -->
    <div
      v-if="repo"
      class="
        absolute top-2 right-2 z-20
        bg-white/20 dark:bg-white/10
        backdrop-blur-lg
        rounded-xl p-2
        hover:bg-white/30 dark:hover:bg-white/20
        transition
      "
    >
      <a :href="repo" target="_blank" @click.stop>
        <UIcon name="i-simple-icons-github" class="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </a>
    </div>

    <div class="relative z-10 flex items-center gap-4">
      <div
        class="
          w-14 h-14 flex items-center justify-center rounded-2xl
          bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-md
        "
      >
        <UIcon :name="icon ?? 'i-lucide-square'" class="w-7 h-7 text-gray-900 dark:text-gray-100" />
      </div>

      <div>
        <h3 class="text-xl font-semibold leading-tight">{{ title }}</h3>
        <p class="text-gray-700 dark:text-gray-400 text-sm mt-1">
          {{ description }}
        </p>
      </div>
    </div>
  </UCard>
</template>
