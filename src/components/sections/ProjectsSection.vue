<script setup lang="ts">
import { Table2, MessagesSquare, Bot, Rocket, Landmark, ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import BaseSection from './common/BaseSection.vue'
import SectionHeader from './common/SectionHeader.vue'

interface IndustryItem {
  id: string
  icon: typeof Landmark
  problem: string
  result: string
  segment: string
}

const industries: IndustryItem[] = [
  {
    id: 'excel-workflow',
    icon: Table2,
    problem: '엑셀로 관리하던 업무가 사람마다 다름',
    result: '웹 기반 업무 시스템과 관리자 화면으로 정리',
    segment: '업무 시스템'
  },
  {
    id: 'scattered-inquiry',
    icon: MessagesSquare,
    problem: '메신저와 이메일에 문의가 흩어짐',
    result: '상담관리·고객관리 흐름으로 통합',
    segment: '고객 운영'
  },
  {
    id: 'ai-repeat',
    icon: Bot,
    problem: '반복 문의와 문서 확인이 많음',
    result: 'AI 자동화 PoC로 반복 업무 검증',
    segment: 'AI 자동화'
  },
  {
    id: 'unclear-mvp',
    icon: Rocket,
    problem: '아이디어는 있지만 개발 범위가 불명확함',
    result: 'MVP 범위 정의 후 빠른 구현',
    segment: 'MVP/PoC'
  },
  {
    id: 'gov-output',
    icon: Landmark,
    problem: '정부지원사업 결과물이 필요함',
    result: '사업계획 기반 PoC/시제품 구현',
    segment: '정부지원사업'
  }
]
</script>

<template>
  <BaseSection id="industries" variant="white">
    <SectionHeader eyebrow="Projects">
      <template #title>
        고객 문제가 시스템으로 바뀌는 <span class="text-primary">방식</span>
      </template>
      <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        공개 가능한 범위에서 특정 고객명이나 수치 대신,<br class="hidden sm:block" />
        방문자가 자기 상황과 연결하기 쉬운 문제와 실행 결과를 보여드립니다.
      </p>
    </SectionHeader>

    <!-- Industry Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
      <article
        v-for="(industry, index) in industries"
        :key="industry.id"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
        class="industry-card group relative bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      >
          <!-- Decorative corner accent -->
          <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
          <!-- Index number (background) -->
          <span
            class="absolute -bottom-4 -right-2 text-7xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
            aria-hidden="true"
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <div class="relative flex items-start gap-4">
            <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
              <component :is="industry.icon" :size="24" :stroke-width="1.75" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 class="text-xl font-bold text-gray-900">{{ industry.problem }}</h3>
                <span class="text-[10px] font-mono font-semibold text-primary uppercase tracking-widest">
                  {{ industry.segment }}
                </span>
              </div>
              <div class="bg-white rounded-lg p-3 border border-gray-200 group-hover:border-primary/30 transition-colors">
                <div class="flex items-center gap-1.5 mb-1.5">
                  <span class="w-1 h-3 rounded-full bg-primary" aria-hidden="true" />
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    실행 결과
                  </p>
                </div>
                <p class="text-sm text-gray-700 leading-relaxed">
                  {{ industry.result }}
                </p>
              </div>
            </div>
          </div>
      </article>
    </div>

    <!-- Bottom Note: 새 도메인 흡수 능력 -->
    <div
      class="mt-10 md:mt-12 max-w-3xl mx-auto text-center"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
    >
      <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
        포트폴리오보다 중요한 것은 현재 업무의 병목을 정확히 파악하는 일입니다.
        <span class="font-semibold text-gray-900">초기 진단</span>에서
        고객 유형, 현재 도구, 막힌 업무, 필요한 첫 결과물을 함께 확인합니다.
      </p>
      <RouterLink
        to="/contact"
        class="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        우리 업무도 시스템화 가능한지 문의
        <ArrowRight :size="16" class="transition-transform group-hover:translate-x-1" />
      </RouterLink>
    </div>
  </BaseSection>
</template>

<style scoped>
.industry-card {
  will-change: transform, box-shadow;
}
</style>
