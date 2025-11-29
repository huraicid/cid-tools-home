<script setup lang="ts">
defineProps<{
  title: string
  description: string
  url: string
  repo?: string
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

    /* ====== 背景 ====== */
    bg-[#F5F5F7]            /* ← iOS風のライトグレー */
    dark:bg-white/5
    backdrop-blur-xl

    border border-white/40 dark:border-white/10

    shadow-[0_4px_20px_rgba(0,0,0,0.06)]
    hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]

    hover:-translate-y-1 hover:scale-[1.02]
    transition-all duration-300 ease-[cubic-bezier(.25,.8,.25,1)]

    text-gray-900 dark:text-gray-200
  "
>

    <!-- subtle highlight -->
    <div
      class="
        pointer-events-none absolute inset-0
        bg-gradient-to-br
      "
    />

    <div class="relative z-10 flex items-center gap-4">
      <div
        class="
          w-14 h-14 flex items-center justify-center rounded-2xl
          bg-white/80 dark:bg-white/10
          backdrop-blur-lg shadow-md
        "
      >
        <UIcon :name="icon ?? 'i-lucide-square'"
               class="w-7 h-7 text-black dark:text-white" />
      </div>

      <div>
        <h3 class="text-xl font-bold leading-tight text-black dark:text-white">
          {{ title }}
        </h3>
        <p class="text-sm mt-1 text-black/80 dark:text-white/80">
          {{ description }}
        </p>
      </div>
    </div>
  </UCard>
</template>
