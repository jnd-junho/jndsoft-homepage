<script setup lang="ts">
defineProps<{
  eyebrow: string
  description?: string
}>()
</script>

<template>
  <div
    class="text-center mb-12 md:mb-16"
    v-motion
    :initial="{ opacity: 0, y: 30 }"
    :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
  >
    <div class="inline-flex items-center gap-3 mb-5">
      <span class="h-px w-8 bg-primary/60" />
      <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
        {{ eyebrow }}
      </span>
      <span class="h-px w-8 bg-primary/60" />
    </div>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
      <slot name="title" />
    </h2>
    <p
      v-if="description"
      class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
    >
      {{ description }}
    </p>
    <slot />
  </div>
</template>
