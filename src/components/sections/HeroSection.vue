<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ChevronDown } from 'lucide-vue-next'

const backgroundImages = [
  '/assets/img/hero-carousel/hero-carousel-1.png',
  '/assets/img/hero-carousel/hero-carousel-2.png',
  '/assets/img/hero-carousel/hero-carousel-3.png'
]

const currentBgIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  // Auto-rotate background images every 5 seconds
  intervalId = setInterval(() => {
    currentBgIndex.value = (currentBgIndex.value + 1) % backgroundImages.length
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background Images with Gradient Overlay -->
    <div class="absolute inset-0 z-0">
      <div
        v-for="(image, index) in backgroundImages"
        :key="image"
        class="absolute inset-0 transition-opacity duration-1000"
        :class="currentBgIndex === index ? 'opacity-100' : 'opacity-0'"
      >
        <img
          :src="image"
          alt="Hero Background"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/70" />
    </div>
    
    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
    >
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
        검증된 전문가들이 만드는<br />
        <span class="text-primary font-extrabold">
          비즈니스 성공 방정식
        </span>
      </h1>
      
      <p
        class="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
      >
        SI 구축부터 스타트업 MVP까지,<br />
        AI와 전문가가 함께하는 성장 파트너
      </p>
      
      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
      >
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          무료 컨설팅 신청
          <ArrowRight :size="20" />
        </a>
        <a
          href="#projects"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          포트폴리오 보기
        </a>
      </div>
      
      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 800, delay: 1000 } }"
      >
        <a
          href="#services"
          class="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span class="text-sm">Scroll</span>
          <ChevronDown :size="24" />
        </a>
      </div>
    </div>
  </section>
</template>
