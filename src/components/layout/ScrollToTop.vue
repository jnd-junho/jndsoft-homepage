<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-50"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-50"
  >
    <button
      v-if="isVisible"
      class="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <ArrowUp :size="20" />
    </button>
  </Transition>
</template>
