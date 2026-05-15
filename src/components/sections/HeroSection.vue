<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, ChevronDown, Boxes, Layers, Activity } from 'lucide-vue-next'

const backgroundImages = [
  '/assets/img/hero-carousel/hero-carousel-1.png',
  '/assets/img/hero-carousel/hero-carousel-2.png',
  '/assets/img/hero-carousel/hero-carousel-3.png'
]

const currentBgIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentBgIndex.value = (currentBgIndex.value + 1) % backgroundImages.length
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})

const proofs = [
  {
    id: 'framework',
    icon: Boxes,
    title: '검증된 공통 기반',
    description: 'UI·기능 프레임워크 재사용으로 비즈니스 로직에 집중'
  },
  {
    id: 'industry',
    icon: Layers,
    title: '4개 산업 도메인',
    description: '금융·중공업·화학 ESG, 이커머스 실전 경험'
  },
  {
    id: 'architect',
    icon: Activity,
    title: '기술 깊이를 가진 설계',
    description: '비즈니스 요구를 기술 구조로 즉시 변환하는 아키텍트가 직접 참여'
  }
]
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
      <div class="absolute inset-0 bg-linear-to-br from-gray-900/90 via-gray-900/85 to-gray-900/75" />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
    >
      <!-- Eyebrow -->
      <p
        class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.25em] mb-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        JnDSOFT
      </p>

      <!-- Main Headline -->
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
      >
        비즈니스와 기술의<br />
        <span class="text-primary font-extrabold tracking-tight">이음</span>
      </h1>

      <!-- Subheadline -->
      <p
        class="text-base sm:text-lg lg:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 350 } }"
      >
        검증된 공통 기반 위에 당신의 차별화를 빠르게.<br class="hidden sm:block" />
        비즈니스와 기술 사이의 거리를 좁힙니다.
      </p>

      <!-- Proof Cards (3 evidences) -->
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 500 } }"
      >
        <div
          v-for="proof in proofs"
          :key="proof.id"
          class="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/15 text-left"
        >
          <div class="w-9 h-9 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-3">
            <component :is="proof.icon" :size="18" :stroke-width="1.75" />
          </div>
          <h3 class="text-sm sm:text-base font-semibold text-white mb-1">
            {{ proof.title }}
          </h3>
          <p class="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {{ proof.description }}
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 650 } }"
      >
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          프로젝트 문의
          <ArrowRight :size="20" />
        </RouterLink>
        <a
          href="#pipeline"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          어떻게 일하는가
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800, delay: 1000 } }"
    >
      <a
        href="#services"
        class="flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors"
      >
        <span class="text-xs">Scroll</span>
        <ChevronDown :size="20" />
      </a>
    </div>
  </section>
</template>
