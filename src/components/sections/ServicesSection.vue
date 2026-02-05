<script setup lang="ts">
import { Network, ChartBar, Rocket, Bot } from 'lucide-vue-next'
import type { ServiceCard } from '@/types'

const services: ServiceCard[] = [
  {
    id: 'si',
    title: 'SI & System Integration',
    icon: 'Network',
    description: '기업 맞춤형 시스템 구축 및 통합. 다양한 시스템을 효율적으로 연결하여 업무 프로세스를 최적화합니다.'
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    icon: 'ChartBar',
    description: '비즈니스 분석 및 기술 전략 수립. 전문적인 컨설팅으로 성공적인 디지털 전환을 지원합니다.'
  },
  {
    id: 'mvp',
    title: 'Startup MVP 개발',
    icon: 'Rocket',
    description: '빠른 MVP 개발 및 운영 대행. 스타트업의 아이디어를 빠르게 검증하고 시장에 진입할 수 있도록 지원합니다.'
  },
  {
    id: 'platform',
    title: 'AWOP Platform',
    icon: 'Bot',
    description: 'BackOffice 플랫폼 & AI 워크플로우. 개발 생산성을 3배 향상시키는 AI 기반 플랫폼을 제공합니다.',
    badge: '준비중',
    link: '/workflow'
  }
]

const getIconComponent = (iconName: string) => {
  const icons = { Network, ChartBar, Rocket, Bot }
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
          최적의 IT 솔루션으로 비즈니스 혁신을 지원합니다
        </p>
      </div>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
