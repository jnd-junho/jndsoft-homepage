<script setup lang="ts">
import { Network, ChartBar, Rocket } from 'lucide-vue-next'
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
]

const getIconComponent = (iconName: string) => {
  const icons = { Network, ChartBar, Rocket }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <section id="services" class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Services
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          비즈니스와 기술을 함께 다루는 세 가지 방식
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <router-link
          v-for="(service, index) in services"
          :key="service.id"
          :to="service.link || '#'"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-pointer block"
        >
          <!-- Icon -->
          <div class="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <component :is="getIconComponent(service.icon)" :size="32" :stroke-width="1.5" />
          </div>
          
          <!-- Title with Badge -->
          <div class="flex items-center gap-2 mb-3">
            <h3 class="text-xl font-semibold text-gray-900">
              {{ service.title }}
            </h3>
            <span
              v-if="service.badge"
              class="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-700 rounded-full"
            >
              {{ service.badge }}
            </span>
          </div>
          
          <!-- Description -->
          <p class="text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>
