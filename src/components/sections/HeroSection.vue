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
    id: 'diagnosis',
    icon: Boxes,
    title: '아키텍트 주도 진단',
    description: '대표 겸 수석 아키텍트가 업무 구조와 기술 범위를 함께 정리'
  },
  {
    id: 'software',
    icon: Layers,
    title: '운영되는 소프트웨어',
    description: '관리자 화면, 데이터, 권한, 자동화 흐름까지 운영 기준으로 설계'
  },
  {
    id: 'growth',
    icon: Activity,
    title: 'SaaS·AX 확장',
    description: '작게 검증한 업무 흐름을 SaaS 모델과 AI 자동화로 확장'
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
          class="w-full h-full object-cover scale-105"
        />
      </div>
      <div class="absolute inset-0 bg-linear-to-br from-gray-900/95 via-gray-900/85 to-gray-900/70" />
    </div>

    <!-- Decorative SVG Lines (이음 모티프) -->
    <svg
      class="absolute inset-0 w-full h-full z-[1] pointer-events-none opacity-[0.18]"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
          <stop offset="50%" stop-color="#10b981" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </linearGradient>
      </defs>
      <!-- 좌측에서 우측으로 점이 이어지는 모티프 -->
      <g stroke="url(#hero-line-grad)" stroke-width="0.8" fill="none">
        <path d="M -100 200 Q 400 100 720 450 T 1540 700" />
        <path d="M -100 700 Q 400 800 720 450 T 1540 200" />
      </g>
      <!-- 만나는 지점의 노드 -->
      <g fill="#10b981" opacity="0.6">
        <circle cx="200" cy="170" r="2.5" />
        <circle cx="500" cy="280" r="2" />
        <circle cx="720" cy="450" r="4" />
        <circle cx="940" cy="600" r="2" />
        <circle cx="1240" cy="660" r="2.5" />
      </g>
    </svg>

    <!-- Subtle Grid Pattern Overlay -->
    <div
      class="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 60px 60px;"
      aria-hidden="true"
    />

    <!-- Content -->
    <div
      class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
    >
      <!-- Eyebrow -->
      <div
        class="inline-flex items-center gap-3 mb-8"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        <span class="h-px w-8 bg-primary/60" />
        <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
          Jump &amp; Develop
        </span>
        <span class="h-px w-8 bg-primary/60" />
      </div>

      <!-- Main Headline -->
      <h1
        class="mb-6"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
      >
        <span class="block text-lg sm:text-xl lg:text-2xl font-light text-white/85 mb-4 sm:mb-5 tracking-wide">
          비즈니스와 기술의 이음,
        </span>
        <span class="hero-brand block font-black leading-[0.95]">
          운영되는 소프트웨어로
        </span>
      </h1>

      <!-- Tagline (이음 키워드는 본문에 한 번만) -->
      <p
        class="text-sm sm:text-base text-primary/90 mb-10 font-medium tracking-wide"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 320 } }"
      >
        JnDSOFT는 고객 언어와 개발 언어의 <span class="font-semibold text-primary">이음</span>을 만듭니다
      </p>

      <!-- Subheadline -->
      <p
        class="text-base sm:text-lg lg:text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
      >
        대표 겸 수석 소프트웨어 아키텍트가 업무 구조를 진단하고,<br class="hidden sm:block" />
        고객 유입 화면부터 업무 시스템, AI 자동화, SaaS 확장까지 연결해 설계합니다.
      </p>

      <!-- Proof Cards (3 evidences) -->
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-12"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 550 } }"
      >
        <div
          v-for="(proof, idx) in proofs"
          :key="proof.id"
          class="group relative bg-white/[0.07] backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/15 text-left overflow-hidden hover:bg-white/[0.12] hover:border-primary/40 transition-all duration-300"
        >
          <!-- 번호 (배경 데코) -->
          <span
            class="absolute -top-2 -right-1 text-5xl sm:text-6xl font-black text-white/[0.04] leading-none select-none"
            aria-hidden="true"
          >
            0{{ idx + 1 }}
          </span>
          <div class="relative w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
            <component :is="proof.icon" :size="20" :stroke-width="1.75" />
          </div>
          <h3 class="relative text-sm sm:text-base font-semibold text-white mb-1">
            {{ proof.title }}
          </h3>
          <p class="relative text-xs sm:text-sm text-gray-300 leading-relaxed">
            {{ proof.description }}
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 700 } }"
      >
        <RouterLink
          to="/contact"
          class="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/30"
        >
          무료 진단 문의하기
          <ArrowRight :size="20" class="transition-transform group-hover:translate-x-1" />
        </RouterLink>
        <a
          href="#services"
          class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all duration-300"
        >
          서비스 살펴보기
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800, delay: 1100 } }"
    >
      <a
        href="#services"
        class="group flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
      >
        <span class="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div class="w-px h-8 bg-gradient-to-b from-white/40 to-transparent group-hover:from-primary transition-colors" />
        <ChevronDown :size="16" class="animate-bounce" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero-brand {
  font-size: clamp(2.5rem, 8.5vw, 6.5rem);
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 55%, #10b981 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 80px rgba(16, 185, 129, 0.18);
  letter-spacing: -0.025em;
  position: relative;
  white-space: nowrap;
}
.hero-brand::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -0.18em;
  transform: translateX(-50%);
  width: 1.5em;
  height: 0.03em;
  background: linear-gradient(90deg, transparent, #10b981, transparent);
  border-radius: 9999px;
}
@media (max-width: 380px) {
  .hero-brand {
    font-size: 2.1rem;
    letter-spacing: -0.03em;
  }
}
</style>
