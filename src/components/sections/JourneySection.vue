<script setup lang="ts">
import { Star, Building, Droplet, ShoppingCart, Lightbulb as LightbulbIcon, Bot } from 'lucide-vue-next'
import type { TimelineItem } from '@/types'

const timeline: TimelineItem[] = [
  {
    id: 'establishment',
    date: '2022년 7월',
    title: '회사 설립',
    description: '(주)제이앤디소프트 창업',
    icon: 'Star'
  },
  {
    id: 'finance',
    date: '2022년 하반기',
    title: '금융/중공업 프로젝트',
    description: '금융그룹사 ESG 시스템 구축 개발 참여\n중공업 LCA 시스템 구축 개발 참여',
    icon: 'Building'
  },
  {
    id: 'chemical',
    date: '2023년 상반기',
    title: '화학 기업 프로젝트',
    description: '국내 화학 기업 ESG 시스템 구축 개발 참여',
    icon: 'Droplet'
  },
  {
    id: 'ecommerce',
    date: '2023년 하반기 ~ 현재',
    title: '대기업 이커머스 프로젝트',
    description: '국내 화장품 전문기업 이커머스몰/커뮤니티 운영\n기획전 파트 시스템 고도화 참여',
    icon: 'ShoppingCart'
  },
  {
    id: 'research',
    date: '2025년 상반기',
    title: '연구소 설립',
    description: '기업부설연구소 설립',
    icon: 'LightbulbIcon'
  },
  {
    id: 'ai-platform',
    date: '2025년 10월 ~ 현재',
    title: 'AI 플랫폼 개발',
    description: '워크플로우 자동화 플랫폼 서비스 개발 진행 중',
    icon: 'Bot'
  }
]

const getIconComponent = (iconName: string) => {
  const icons = { Star, Building, Droplet, ShoppingCart, LightbulbIcon, Bot }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <section id="journey" class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Journey
        </h2>
        <p class="text-lg text-gray-600">
          함께 성장해온 우리의 발자취
        </p>
      </div>
      
      <!-- Timeline -->
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />
          
          <!-- Timeline Items -->
          <div class="space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.id"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }"
              class="relative flex gap-6 md:gap-8"
            >
              <!-- Icon -->
              <div class="shrink-0">
                <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg relative z-10">
                  <component :is="getIconComponent(item.icon)" :size="28" :stroke-width="1.5" />
                </div>
              </div>
              
              <!-- Content -->
              <div class="flex-1 bg-white rounded-2xl p-6 shadow-card">
                <div class="text-sm font-medium text-primary mb-2">
                  {{ item.date }}
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-3">
                  {{ item.title }}
                  <span
                    v-if="item.id === 'ai-platform'"
                    class="ml-2 px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                  >
                    진행중
                  </span>
                </h4>
                <p class="text-gray-600 whitespace-pre-line">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
