<script setup lang="ts">
import { CalendarCheck, ShieldCheck, Trophy, Target, Kanban, ClipboardCheck, Rocket as RocketIcon } from 'lucide-vue-next'
import type { CompetitiveBlock, ProcessStep } from '@/types'

const blocks: CompetitiveBlock[] = [
  {
    id: 'predictable',
    title: '예측 가능한 프로젝트',
    icon: 'CalendarCheck',
    features: [
      { icon: 'CheckCircle', text: 'AI가 일정·비용 리스크를 예측' },
      { icon: 'CheckCircle', text: '실시간 진행 현황 자동 보고' },
      { icon: 'CheckCircle', text: 'AI 조기 경보 시스템' },
      { icon: 'CheckCircle', text: '각 단계별 품질 자동 점검' }
    ],
    description: '프로젝트 시작부터 완료까지, AI가 리스크를 예측하고 일정을 지킵니다'
  },
  {
    id: 'quality',
    title: '품질을 보장하는 AI',
    icon: 'ShieldCheck',
    features: [
      { icon: 'CheckCircle', text: '수천 가지 시나리오 자동 검증' },
      { icon: 'CheckCircle', text: '보안 취약점 사전 탐지' },
      { icon: 'CheckCircle', text: 'AI 생성 운영 매뉴얼' },
      { icon: 'CheckCircle', text: '24시간 AI 모니터링' }
    ],
    description: '사람이 놓칠 수 있는 것까지, AI가 꼼꼼히 검증합니다'
  },
  {
    id: 'value',
    title: '고객이 얻는 가치',
    icon: 'Trophy',
    features: [
      { icon: 'CheckCircle', text: '동일 예산으로 더 많은 기능 구현' },
      { icon: 'CheckCircle', text: '평균 납기 준수율 95% 이상' },
      { icon: 'CheckCircle', text: '긴급 수정 요청 70% 감소' },
      { icon: 'CheckCircle', text: '인수 후 3개월 무상 모니터링' }
    ],
    description: '숫자로 증명하는 고객 가치, 결과로 보여드립니다'
  }
]

const processSteps: ProcessStep[] = [
  {
    id: 'requirements',
    title: '요구사항 명확화',
    description: 'AI가 숨겨진 요구사항까지 발굴하여 재작업 최소화',
    icon: 'Target'
  },
  {
    id: 'progress',
    title: '투명한 진행',
    description: '실시간 대시보드로 언제든 진행 상황 확인',
    icon: 'Kanban'
  },
  {
    id: 'verification',
    title: '철저한 검증',
    description: 'AI가 수천 가지 시나리오를 테스트하여 안심 오픈',
    icon: 'ClipboardCheck'
  },
  {
    id: 'operation',
    title: '안정적 운영',
    description: '오픈 후에도 AI가 24시간 시스템을 지켜봅니다',
    icon: 'RocketIcon'
  }
]

const getIconComponent = (iconName: string) => {
  const icons = { CalendarCheck, ShieldCheck, Trophy, Target, Kanban, ClipboardCheck, RocketIcon }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <section id="competitiveness" class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Competitiveness
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          고객의 시간과 비용을 아끼는 AI 파트너십
        </p>
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          예측 가능한 일정, 검증된 품질, 합리적인 비용
        </h3>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          프로젝트의 불확실성을 AI가 관리하고,<br />
          전문가의 경험이 고객의 성공을 이끕니다
        </p>
      </div>
      
      <!-- Competitive Blocks -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(block, index) in blocks"
          :key="block.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="bg-white rounded-2xl p-8 shadow-card"
        >
          <!-- Icon & Title -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <component :is="getIconComponent(block.icon)" :size="28" :stroke-width="1.5" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900">
              {{ block.title }}
            </h4>
          </div>
          
          <!-- Features -->
          <ul class="space-y-3 mb-6">
            <li
              v-for="(feature, idx) in block.features"
              :key="idx"
              class="flex items-start gap-3 text-gray-700"
            >
              <svg class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-sm">{{ feature.text }}</span>
            </li>
          </ul>
          
          <!-- Description -->
          <p class="text-sm text-gray-600 italic border-t border-gray-100 pt-4">
            {{ block.description }}
          </p>
        </div>
      </div>
      
      <!-- Process Steps -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="bg-white rounded-2xl p-8 md:p-12 shadow-card"
      >
        <h4 class="text-2xl font-bold text-gray-900 text-center mb-12">
          고객과 함께하는 여정
        </h4>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in processSteps"
            :key="step.id"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }"
            class="text-center"
          >
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <component :is="getIconComponent(step.icon)" :size="32" :stroke-width="1.5" />
            </div>
            <h5 class="text-lg font-semibold text-gray-900 mb-2">
              {{ step.title }}
            </h5>
            <p class="text-sm text-gray-600">
              {{ step.description }}
            </p>
          </div>
        </div>
        
        <!-- Quote -->
        <div class="mt-12 text-center">
          <p class="text-xl font-medium text-gray-700 italic">
            "리스크는 AI가, 판단은 전문가가, 성과는 고객의 것입니다."
          </p>
        </div>
      </div>
      
      <!-- Expert Synergy Note -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="mt-12 text-center"
      >
        <p class="text-lg text-gray-700 max-w-3xl mx-auto">
          <span class="font-semibold text-primary">기획자, 개발자, 디자이너의 시너지</span>로 
          AI 기술력과 인적 전문성을 결합하여 최상의 결과를 만들어냅니다.
        </p>
      </div>
    </div>
  </section>
</template>
