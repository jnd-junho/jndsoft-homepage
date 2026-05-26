<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Search, ListChecks, Code2, MessageSquare, GitBranch, ArrowRight } from 'lucide-vue-next'
import type { PipelineStage } from '@/types'
import BaseSection from './common/BaseSection.vue'
import SectionHeader from './common/SectionHeader.vue'

const stages: PipelineStage[] = [
  {
    id: 'diagnosis',
    index: '01',
    title: '문제 진단',
    titleEn: 'Diagnose',
    headline: '현재 업무와 병목을 먼저 확인',
    icon: 'Search',
    points: [
      '고객 유형과 현재 사용하는 도구를 확인',
      '엑셀, 메신저, 이메일, 수기 업무 중 병목 지점 정리',
      '고객 유입, 관리자, 데이터 출처, 반복 업무를 분리'
    ]
  },
  {
    id: 'scope',
    index: '02',
    title: 'MVP/PoC 범위 정의',
    titleEn: 'Scope',
    headline: '처음 운영할 만큼만 작게 정의',
    icon: 'ListChecks',
    points: [
      '처음부터 큰 시스템을 전제하지 않음',
      '핵심 기능, 관리자, 데이터 흐름을 우선순위화',
      '디자인 파트너와 화면 경험과 운영 구조를 함께 검토'
    ]
  },
  {
    id: 'build',
    index: '03',
    title: '빠른 구현',
    titleEn: 'Build',
    headline: '실제로 써볼 수 있는 시스템 구현',
    icon: 'Code2',
    points: [
      '업무 시스템에 필요한 핵심 화면과 관리자 기능 우선',
      '인증, 메뉴, 권한 등 반복 기반은 표준 자산 활용',
      '업무 규칙은 한곳에서 관리되도록 구현'
    ]
  },
  {
    id: 'feedback',
    index: '04',
    title: '운영 피드백 반영',
    titleEn: 'Operate',
    headline: '실제 사용 후 예외 업무를 반영',
    icon: 'MessageSquare',
    points: [
      '실제 사용 후 발견되는 예외 업무 반영',
      '관리자가 확인해야 할 화면과 데이터를 점검',
      '운영 중 바뀔 수 있는 설정, 기준값, 자동화 조건 분리'
    ]
  },
  {
    id: 'expand',
    index: '05',
    title: '확장 개발',
    titleEn: 'Expand',
    headline: '검증된 흐름을 확장',
    icon: 'GitBranch',
    points: [
      'PoC·MVP 검증 결과에 따라 기능 확장',
      'AI 자동화가 가능한 반복 업무를 단계적으로 연결',
      '반복되는 요구와 공통 기능을 SaaS 전환 후보로 검토'
    ]
  }
]

const activeStageId = ref<string>('scope')

const getIconComponent = (iconName: string) => {
  const icons = { Search, ListChecks, Code2, MessageSquare, GitBranch }
  return icons[iconName as keyof typeof icons]
}

const setActive = (id: string) => {
  activeStageId.value = id
}
</script>

<template>
  <BaseSection id="pipeline" variant="grid-gray">
    <SectionHeader eyebrow="How We Work">
      <template #title>
        작게 시작해 검증 후 확장하는 <span class="text-primary">구축 방식</span>
      </template>
      <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        처음부터 큰 시스템을 전제하지 않습니다.<br class="hidden sm:block" />
        실제로 운영 가능한 첫 단계를 정의하고, 검증 후 확장합니다.
      </p>
    </SectionHeader>

      <!-- Pipeline Diagram -->
      <div
        class="relative bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-card"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <!-- Customer Sync Line (Desktop) -->
        <div class="hidden lg:block mb-6">
          <div class="flex items-center justify-between px-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="inline-flex w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span class="text-xs font-semibold text-primary uppercase tracking-widest">
                Customer Sync
              </span>
            </div>
            <span class="text-xs text-gray-500 italic">
              문제 진단 → MVP/PoC 범위 정의 → 빠른 구현 → 운영 피드백 → 확장 개발
            </span>
          </div>
          <div class="relative h-8">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 8" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sync-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.3" />
                  <stop offset="50%" stop-color="#10b981" stop-opacity="0.9" />
                  <stop offset="100%" stop-color="#10b981" stop-opacity="0.3" />
                </linearGradient>
              </defs>
              <line
                x1="0" y1="4" x2="100" y2="4"
                stroke="url(#sync-line-grad)"
                stroke-width="0.3"
                stroke-dasharray="1.2 1.2"
              />
            </svg>
            <div class="absolute inset-0 flex justify-between items-center px-1">
              <span
                v-for="i in 9"
                :key="`dot-${i}`"
                class="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              />
            </div>
          </div>
          <p class="text-xs text-gray-500 italic mt-3 text-center">
            기획·디자인·개발이 따로 움직이지 않도록, 정리된 범위와 화면으로 단계마다 다시 확인합니다.
          </p>
        </div>

        <!-- Stage Cards (Desktop: Horizontal / Mobile: Vertical) -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative">
          <template v-for="(stage, idx) in stages" :key="stage.id">
            <!-- Stage Card -->
            <div
              class="relative"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: idx * 120 } }"
            >
              <button
                type="button"
                class="stage-card group relative w-full text-left rounded-xl border-2 p-5 lg:p-6 transition-all duration-300 h-full overflow-hidden"
                :class="activeStageId === stage.id
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-white shadow-lg shadow-primary/10 -translate-y-1'
                  : 'border-gray-200 bg-white hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5'"
                :aria-expanded="activeStageId === stage.id"
                :aria-controls="`stage-detail-${stage.id}`"
                @click="setActive(stage.id)"
                @mouseenter="setActive(stage.id)"
              >
                <!-- Top accent bar (active state) -->
                <span
                  class="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  :class="activeStageId === stage.id ? 'bg-gradient-to-r from-primary to-primary/40 opacity-100' : 'opacity-0'"
                  aria-hidden="true"
                />

                <!-- Outline number (background decoration) -->
                <span
                  class="absolute -top-3 -right-2 text-6xl lg:text-7xl font-black leading-none select-none transition-colors duration-300"
                  :class="activeStageId === stage.id ? 'text-primary/10' : 'text-gray-100 group-hover:text-gray-200'"
                  aria-hidden="true"
                >
                  {{ stage.index }}
                </span>

                <div class="relative">
                  <div
                    class="w-11 h-11 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                    :class="activeStageId === stage.id
                      ? 'bg-primary text-white shadow-md shadow-primary/30 scale-105'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'"
                  >
                    <component :is="getIconComponent(stage.icon)" :size="22" :stroke-width="1.75" />
                  </div>
                  <div class="flex items-baseline gap-2 mb-1.5">
                    <h4
                      class="text-lg font-bold transition-colors duration-300"
                      :class="activeStageId === stage.id ? 'text-primary' : 'text-gray-900'"
                    >
                      {{ stage.title }}
                    </h4>
                    <span class="text-xs font-mono text-gray-400 uppercase tracking-wider">{{ stage.titleEn }}</span>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed">{{ stage.headline }}</p>
                </div>
              </button>

              <!-- Arrow connector (Desktop only, between cards) -->
              <div
                v-if="idx < stages.length - 1"
                class="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center justify-center w-8 h-8"
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" class="w-5 h-5 text-gray-300" fill="currentColor">
                  <path d="M6 3l5 5-5 5V3z" />
                </svg>
              </div>

              <!-- Vertical connector (Mobile only) -->
              <div
                v-if="idx < stages.length - 1"
                class="lg:hidden flex justify-center py-2"
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" class="w-4 h-4 text-gray-300" fill="currentColor">
                  <path d="M3 6l5 5 5-5H3z" />
                </svg>
              </div>
            </div>
          </template>
        </div>

        <!-- Active Stage Detail Panel -->
        <div
          class="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-gray-200"
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1, transition: { duration: 600, delay: 600 } }"
        >
          <template v-for="stage in stages" :key="`detail-${stage.id}`">
            <div
              v-show="activeStageId === stage.id"
              :id="`stage-detail-${stage.id}`"
              class="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start"
            >
              <!-- Detail Background outline number -->
              <span
                class="hidden md:block absolute -top-4 -left-2 text-[10rem] font-black text-primary/[0.06] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {{ stage.index }}
              </span>

              <div class="relative md:col-span-1">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-xs font-mono text-primary font-semibold tracking-wider">{{ stage.index }}</span>
                  <span class="h-px flex-1 bg-primary/30 max-w-12" />
                  <div class="w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center shadow-md shadow-primary/20">
                    <component :is="getIconComponent(stage.icon)" :size="20" :stroke-width="1.75" />
                  </div>
                </div>
                <h5 class="text-2xl font-bold text-gray-900 mb-1">{{ stage.title }}</h5>
                <p class="text-xs font-mono text-gray-400 mb-3 uppercase tracking-wider">{{ stage.titleEn }}</p>
                <p class="text-base text-primary font-semibold">{{ stage.headline }}</p>
              </div>

              <ul class="md:col-span-2 space-y-3">
                <li
                  v-for="(point, pIdx) in stage.points"
                  :key="pIdx"
                  class="flex items-start gap-3 text-gray-700"
                >
                  <span class="inline-flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-primary/10 mt-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary" />
                  </span>
                  <span class="text-sm md:text-base leading-relaxed">{{ point }}</span>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>

      <!-- Bottom Caption -->
      <div
        class="mt-10 text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        <p class="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-3">
          각 단계는 <span class="font-semibold text-primary">이음</span>입니다 —
          고객 유입과 운영, 디자인과 시스템, 비즈니스 언어와 개발 언어.
        </p>
        <p class="text-sm md:text-base text-gray-500 max-w-3xl mx-auto mb-8">
          필요한 만큼 설계하고 작게 구현한 뒤, 검증된 업무부터 자동화와 SaaS 전환 가능성을 검토합니다.
        </p>

        <!-- Platform CTA -->
        <RouterLink
          to="/platform"
          class="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:border-primary hover:text-primary hover:shadow-md transition-all"
        >
          표준 자산 살펴보기
          <ArrowRight :size="16" class="transition-transform group-hover:translate-x-1" />
        </RouterLink>
      </div>
  </BaseSection>
</template>

<style scoped>
.stage-card {
  will-change: transform, box-shadow;
}
</style>
