<script setup lang="ts">
import { Landmark, Factory, FlaskConical, ShoppingBag, ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import BaseSection from './common/BaseSection.vue'
import SectionHeader from './common/SectionHeader.vue'

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
    domain: 'ESG 데이터 관리',
    segment: '익명 사례 · B2B',
    context: '여러 부서와 파일에 흩어진 ESG 데이터를 수집·검증·관리하는 업무 시스템 유형입니다.',
    insight: '핵심은 화려한 화면보다 데이터 항목 변경, 계산식 추적, 보고 양식 변경과 운영 지표 확인에 대응하는 구조입니다.'
  },
  {
    id: 'heavy-lca',
    icon: Factory,
    domain: '제조 데이터 계산 업무',
    segment: '익명 사례 · 제조',
    context: '공정·제품 단위 데이터를 모아 계산하고, 근거 데이터를 다시 확인해야 하는 업무 유형입니다.',
    insight: '입력값, 계산 과정, 결과가 분리되면 운영자가 원인을 찾기 어렵습니다. 추적 가능한 데이터 흐름이 중요합니다.'
  },
  {
    id: 'chem-esg',
    icon: FlaskConical,
    domain: '환경·탄소 관리 업무',
    segment: '익명 사례 · 운영',
    context: '수집된 데이터를 기준에 맞게 정리하고, 내부 관리와 외부 보고에 활용하는 시스템 유형입니다.',
    insight: '규칙이 바뀌어도 전체를 다시 만들지 않도록, 기준값과 업무 규칙을 한곳에서 관리하는 설계가 필요합니다.'
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    domain: '고객 유입·운영 시스템',
    segment: '익명 사례 · B2C',
    context: '상품 상세, 기획전, 커뮤니티, 문의 흐름과 운영 데이터를 관리자가 반복적으로 다루는 서비스 운영 유형입니다.',
    insight: '고객 유입 화면과 운영 관리가 분리되면 작은 변경도 병목이 됩니다. 전환 화면과 관리자 업무 흐름을 함께 설계해야 합니다.'
  }
]
</script>

<template>
  <BaseSection id="industries" variant="white">
    <SectionHeader eyebrow="Projects">
      <template #title>
        실제 업무에서 출발한 <span class="text-primary">프로젝트 유형</span>
      </template>
      <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        고객명과 수치 성과를 앞세우기보다, 공개 가능한 범위 안에서<br class="hidden sm:block" />
        어떤 업무 문제를 어떤 소프트웨어 구조로 다뤘는지 설명합니다.
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
                <h3 class="text-xl font-bold text-gray-900">{{ industry.domain }}</h3>
                <span class="text-[10px] font-mono font-semibold text-primary uppercase tracking-widest">
                  {{ industry.segment }}
                </span>
              </div>
              <p class="text-sm text-gray-700 mb-3 leading-relaxed">
                {{ industry.context }}
              </p>
              <div class="bg-white rounded-lg p-3 border border-gray-200 group-hover:border-primary/30 transition-colors">
                <div class="flex items-center gap-1.5 mb-1.5">
                  <span class="w-1 h-3 rounded-full bg-primary" aria-hidden="true" />
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    설계 포인트
                  </p>
                </div>
                <p class="text-sm text-gray-700 leading-relaxed">
                  {{ industry.insight }}
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
        고객 유입 흐름, 데이터 출처, 관리자 역할, 자동화·SaaS 확장 가능성을 함께 확인합니다.
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
