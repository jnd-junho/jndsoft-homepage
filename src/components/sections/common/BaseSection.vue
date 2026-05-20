<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  id: string
  variant?: 'white' | 'grid-gray'
  maxWidth?: '4xl' | '5xl' | '7xl'
  padding?: 'default' | 'compact'
}>(), {
  variant: 'white',
  maxWidth: '7xl',
  padding: 'default'
})

const sectionClass = computed(() => [
  'relative overflow-hidden',
  props.padding === 'compact' ? 'py-20 md:py-28' : 'py-20 md:py-32',
  props.variant === 'grid-gray' ? 'bg-gray-50' : 'bg-white'
])

const innerClass = computed(() => [
  'relative mx-auto px-4 sm:px-6 lg:px-8',
  props.maxWidth === '4xl' ? 'max-w-4xl' : props.maxWidth === '5xl' ? 'max-w-5xl' : 'max-w-7xl'
])
</script>

<template>
  <section :id="id" :class="sectionClass">
    <div
      v-if="variant === 'grid-gray'"
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
      aria-hidden="true"
    />

    <div :class="innerClass">
      <slot />
    </div>
  </section>
</template>
