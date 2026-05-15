<script setup lang="ts">
import { Landmark, Factory, FlaskConical, ShoppingBag, ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

interface IndustryItem {
  id: string
  icon: typeof Landmark
  domain: string
  segment: string
  context: string
  insight: string
}

const industries: IndustryItem[] = [
  {
    id: 'finance-esg',
    icon: Landmark,
    domain: '금융 ESG',
    segment: 'B2B · 엔터프라이즈',
    context: '금융그룹의 ESG 공시·관리 시스템',
    insight: '규제 변화에 따라 데이터 항목·계산식이 자주 바뀌는 환경. 변경 비용을 낮추는 설계가 핵심입니다.'
  },
  {
    id: 'heavy-lca',
    icon: Factory,
    domain: '중공업 LCA',
    segment: 'B2B · 제조',
    context: '제품 전과정 환경영향 평가 시스템',
    insight: '공정 단위 데이터의 정합성 확보와 복합 계산 모델의 추적 가능성이 필요한 도메인입니다.'
  },
  {
    id: 'chem-esg',
    icon: FlaskConical,
    domain: '화학 ESG',
    segment: 'B2B · 제조',
    context: '화학 기업 탄소·환경 데이터 관리 시스템',
    insight: '실시간 데이터 수집과 규제 보고 양식 간의 변환이 일상적으로 일어나는 도메인입니다.'
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    domain: '이커머스',
    segment: 'B2C · 소비자',
    context: '이커머스몰·커뮤니티 운영과 기획전 시스템',
    insight: '트래픽이 시점에 따라 급격히 변하는 환경. 운영 측면의 안정성이 곧 매출 안정성입니다.'
  }
]
</script>

<template>
  <section id="industries" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-12 md:mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Industries
        </h2>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-3">
          우리가 직접 다뤄온 도메인입니다.
        </p>
        <p class="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
          각 산업의 비즈니스 흐름과 데이터 구조를 현장에서 학습했습니다.<br class="hidden sm:block" />
          새로운 도메인도 같은 방식으로 빠르게 흡수합니다.
        </p>
      </div>

      <!-- Industry Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div
          v-for="(industry, index) in industries"
          :key="industry.id"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="group bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <div class="flex items-start gap-4">
            <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <component :is="industry.icon" :size="24" :stroke-width="1.75" />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <h3 class="text-xl font-bold text-gray-900">{{ industry.domain }}</h3>
                <span class="text-xs font-medium text-primary uppercase tracking-wider">
                  {{ industry.segment }}
                </span>
              </div>
              <p class="text-sm text-gray-700 mb-3 leading-relaxed">
                {{ industry.context }}
              </p>
              <div class="bg-white rounded-lg p-3 border border-gray-200">
                <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  도메인 인사이트
                </p>
                <p class="text-sm text-gray-700 leading-relaxed">
                  {{ industry.insight }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Note: 새 도메인 흡수 능력 -->
      <div
        class="mt-10 md:mt-12 max-w-3xl mx-auto text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
          여러 산업을 다뤄온 경험은 새로운 도메인을 빠르게 학습하는 능력으로 이어집니다.
          <span class="font-semibold text-gray-900">초반 1~2주 집중 인터뷰</span>로
          도메인의 핵심 용어·업무 흐름·데이터 구조를 흡수합니다.
        </p>
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          우리 도메인에서도 가능한지 문의
          <ArrowRight :size="16" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
