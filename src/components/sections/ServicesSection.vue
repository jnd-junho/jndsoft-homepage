<script setup lang="ts">
import { Network, ChartBar, Rocket, Sparkles } from 'lucide-vue-next'
import type { ServiceCard } from '@/types'
import BaseSection from './common/BaseSection.vue'
import SectionHeader from './common/SectionHeader.vue'

const services: ServiceCard[] = [
  {
    id: 'acquisition',
    title: '고객 유입 화면 설계',
    icon: 'Network',
    description: '홈페이지 UI/UX, 랜딩페이지, 상품 상세페이지를 단순 제작물이 아니라 문의와 상담으로 이어지는 앞단 흐름으로 설계합니다.'
  },
  {
    id: 'business-system',
    title: '업무 시스템 구축',
    icon: 'ChartBar',
    description: '상담관리, 고객관리, 예약관리, 정산관리, 관리자 페이지처럼 실제 운영에 필요한 화면과 데이터 구조를 구축합니다.'
  },
  {
    id: 'automation',
    title: 'AI 업무 자동화',
    icon: 'Sparkles',
    description: '반복 문의, 상담 기록 정리, 문서 확인, 리포트 생성을 작은 PoC로 검증하고 실제 업무 흐름에 연결합니다.',
    badge: 'AX',
    link: '/automation'
  },
  {
    id: 'saas-mvp',
    title: 'SaaS·MVP 확장',
    icon: 'Rocket',
    description: '검증된 업무 흐름을 MVP, 정부지원사업용 서비스, 업종형 SaaS 모델로 확장할 수 있는 구조로 정리합니다.'
  },
]

const getIconComponent = (iconName: string) => {
  const icons = { Network, ChartBar, Rocket, Sparkles }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <BaseSection id="services" variant="grid-gray">
    <SectionHeader
      eyebrow="Services"
      description="홈페이지 제작을 따로 떼어 팔기보다, 고객 유입 화면에서 업무 시스템과 자동화로 이어지는 소프트웨어 구축 흐름을 설계합니다."
    >
      <template #title>
        고객 유입부터 운영 자동화까지 잇는 <span class="text-primary">네 가지</span> 흐름
      </template>
    </SectionHeader>

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
  </BaseSection>
</template>
