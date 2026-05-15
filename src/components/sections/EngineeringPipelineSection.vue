<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { PenTool, Code2, GitBranch, Activity, ArrowRight } from 'lucide-vue-next'
import type { PipelineStage } from '@/types'

const stages: PipelineStage[] = [
  {
    id: 'design',
    index: '01',
    title: '설계',
    titleEn: 'Design',
    headline: '검증된 설계 원칙·즉시 제안',
    icon: 'PenTool',
    points: [
      '18년 실무 경험이 팀 표준으로 제도화',
      '미팅 현장에서 기술·기획 옵션 동시 제안',
      '초반 1~2주 집중 인터뷰로 도메인 흡수',
      'AI 보조로 엣지 케이스 사전 검토'
    ]
  },
  {
    id: 'build',
    index: '02',
    title: '개발',
    titleEn: 'Build',
    headline: '비즈니스 로직에만 집중',
    icon: 'Code2',
    points: [
      'UI 프레임워크 + 기능 모듈 보유',
      '인증·세션·메뉴 등 공통 기능 재사용',
      '팀은 비즈니스 로직 구현에 시간 투입',
      'AI 보조 + 내부 코드 리뷰 체크리스트'
    ]
  },
  {
    id: 'deploy',
    index: '03',
    title: '배포',
    titleEn: 'Deploy',
    headline: '자동화 파이프라인',
    icon: 'GitBranch',
    points: [
      'CI/CD 파이프라인 표준 구성',
      '자동화된 빌드·테스트·배포',
      '휴먼 에러 차단·일관된 릴리스'
    ]
  },
  {
    id: 'operate',
    index: '04',
    title: '운영',
    titleEn: 'Operate',
    headline: '빠른 장애 인지·신속 대응',
    icon: 'Activity',
    points: [
      '모니터링·알림 체계 구성',
      '이커머스 대규모 트래픽 운영 노하우',
      '검증된 장애 대응 프로세스'
    ]
  }
]

const activeStageId = ref<string>('build')

const getIconComponent = (iconName: string) => {
  const icons = { PenTool, Code2, GitBranch, Activity }
  return icons[iconName as keyof typeof icons]
}

const setActive = (id: string) => {
  activeStageId.value = id
}
</script>

<template>
  <section id="pipeline" class="py-20 md:py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-12 md:mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          How We Work
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          무거운 방법론 대신, 짧은 합의 사이클로
        </p>
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          비즈니스 로직에 집중하는 팀
        </h3>
        <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          매번 처음부터 만들지 않습니다.<br class="hidden sm:block" />
          검증된 공통 기반 위에 당신의 비즈니스를 빠르게 얹습니다.
        </p>
      </div>

      <!-- Pipeline Diagram -->
      <div
        class="bg-white rounded-2xl p-6 md:p-10 lg:p-12 shadow-card"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <!-- Customer Sync Line (Desktop) -->
        <div class="hidden lg:block mb-4">
          <div class="flex items-center justify-between px-6 mb-2">
            <span class="text-xs font-medium text-primary uppercase tracking-widest">
              Customer Sync
            </span>
            <span class="text-xs text-gray-500">
              미팅 → 정리·재구성 → 재공유 사이클
            </span>
          </div>
          <div class="relative h-6">
            <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 6" preserveAspectRatio="none">
              <line
                x1="0" y1="3" x2="100" y2="3"
                stroke="currentColor"
                class="text-primary/60"
                stroke-width="0.3"
                stroke-dasharray="1.2 1.2"
              />
            </svg>
            <div class="absolute inset-0 flex justify-between items-center px-2">
              <span
                v-for="i in 9"
                :key="`dot-${i}`"
                class="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </div>
          <p class="text-xs text-gray-500 italic mt-3 text-center">
            단계마다 고객과 동기화. 끝나고 보여주는 게 아니라, 만들어가며 함께 결정합니다.
          </p>
        </div>

        <!-- Stage Cards (Desktop: Horizontal / Mobile: Vertical) -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-3 relative">
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
                class="w-full text-left rounded-xl border-2 p-5 lg:p-6 transition-all duration-300 h-full"
                :class="activeStageId === stage.id
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-gray-200 bg-white hover:border-primary/40 hover:shadow-sm'"
                :aria-expanded="activeStageId === stage.id"
                :aria-controls="`stage-detail-${stage.id}`"
                @click="setActive(stage.id)"
                @mouseenter="setActive(stage.id)"
              >
                <div class="flex items-start gap-3 mb-3">
                  <span class="text-xs font-mono text-gray-400">{{ stage.index }}</span>
                  <div
                    class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                    :class="activeStageId === stage.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'"
                  >
                    <component :is="getIconComponent(stage.icon)" :size="20" :stroke-width="1.75" />
                  </div>
                </div>
                <div class="flex items-baseline gap-2 mb-1">
                  <h4 class="text-lg font-bold text-gray-900">{{ stage.title }}</h4>
                  <span class="text-xs font-mono text-gray-400">{{ stage.titleEn }}</span>
                </div>
                <p class="text-sm text-gray-600 leading-relaxed">{{ stage.headline }}</p>
              </button>

              <!-- Arrow connector (Desktop only, between cards) -->
              <div
                v-if="idx < stages.length - 1"
                class="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 items-center justify-center w-8 h-8"
                aria-hidden="true"
              >
                <svg viewBox="0 0 16 16" class="w-4 h-4 text-gray-300" fill="currentColor">
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
              class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
            >
              <div class="md:col-span-1">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-xs font-mono text-primary">{{ stage.index }}</span>
                  <div class="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center">
                    <component :is="getIconComponent(stage.icon)" :size="18" :stroke-width="1.75" />
                  </div>
                </div>
                <h5 class="text-xl font-bold text-gray-900 mb-1">{{ stage.title }}</h5>
                <p class="text-sm font-mono text-gray-400 mb-2">{{ stage.titleEn }}</p>
                <p class="text-base text-gray-700 font-medium">{{ stage.headline }}</p>
              </div>
              <ul class="md:col-span-2 space-y-2.5">
                <li
                  v-for="(point, pIdx) in stage.points"
                  :key="pIdx"
                  class="flex items-start gap-3 text-gray-700"
                >
                  <span class="inline-flex shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
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
          미팅과 코드, 설계와 운영, 비즈니스와 기술.
        </p>
        <p class="text-sm md:text-base text-gray-500 max-w-3xl mx-auto mb-8">
          각 단계는 <span class="font-medium text-gray-700">회사 표준으로 제도화</span>되어 있습니다.
          특정 개인의 역량에 의존하지 않습니다.
        </p>

        <!-- Platform CTA -->
        <RouterLink
          to="/platform"
          class="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:border-primary hover:text-primary transition-all"
        >
          개발 단계의 공통 기반 보러가기
          <ArrowRight :size="16" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
