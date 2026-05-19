<script setup lang="ts">
import { Network, ChartBar, Rocket, Sparkles } from 'lucide-vue-next'
import type { ServiceCard } from '@/types'

const services: ServiceCard[] = [
  {
    id: 'si',
    title: '시스템 구축 · SI',
    icon: 'Network',
    description: '기업의 업무 흐름을 정리하고, 그에 맞는 시스템을 처음부터 끝까지 함께 만듭니다. 검증된 공통 기반 위에 비즈니스 로직을 빠르게 얹습니다.'
  },
  {
    id: 'consulting',
    title: '기술 컨설팅 · DX',
    icon: 'ChartBar',
    description: '기술 의사결정과 비즈니스 의사결정을 분리하지 않습니다. 아키텍처 진단, 전환 전략, 단계별 실행 계획까지 함께 설계합니다.'
  },
  {
    id: 'mvp',
    title: 'MVP · 신규 서비스',
    icon: 'Rocket',
    description: '아이디어를 작동하는 제품으로 옮기는 단계. 짧은 합의 사이클로 가설을 검증하면서 시장에 진입할 수 있는 형태를 함께 다듬습니다.'
  },
  {
    id: 'automation',
    title: 'AX & 업무 자동화',
    icon: 'Sparkles',
    description: 'AI 도입 진단과 워크플로우 자동화 PoC로 반복 업무를 줄입니다. 작게 시작해 SI / DX로 확장하는 디지털 전환의 첫 걸음.',
    badge: 'NEW',
    link: '/automation'
  },
]

const getIconComponent = (iconName: string) => {
  const icons = { Network, ChartBar, Rocket, Sparkles }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <section id="services" class="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <div class="inline-flex items-center gap-3 mb-5">
          <span class="h-px w-8 bg-primary/60" />
          <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
            Services
          </span>
          <span class="h-px w-8 bg-primary/60" />
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          비즈니스와 기술을 잇는 <span class="text-primary">네 가지</span> 방식
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          비즈니스와 기술을 분리하지 않고 한 흐름으로 다룹니다.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-5">
        <router-link
          v-for="(service, index) in services"
          :key="service.id"
          :to="service.link || '#'"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="service-card group relative bg-white rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 shadow-card hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer block overflow-hidden"
        >
          <!-- Top accent bar -->
          <span class="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
          <!-- Index (background) -->
          <span
            class="absolute -bottom-4 -right-2 text-7xl font-black text-gray-100/80 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
            aria-hidden="true"
          >
            0{{ index + 1 }}
          </span>

          <div class="relative">
            <!-- Icon -->
            <div class="mb-5 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
              <component :is="getIconComponent(service.icon)" :size="28" :stroke-width="1.5" />
            </div>

            <!-- Title with Badge -->
            <div class="flex items-center gap-2 mb-3">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <span
                v-if="service.badge"
                class="px-2 py-0.5 text-xs font-semibold bg-primary text-white rounded-full"
              >
                {{ service.badge }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-sm md:text-base text-gray-600 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
