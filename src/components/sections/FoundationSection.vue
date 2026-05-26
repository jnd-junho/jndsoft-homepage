<script setup lang="ts">
import { Boxes, Layers, Cpu } from 'lucide-vue-next'
import type { CopyrightItem, IndustryTag, TechCategory } from '@/types'
import BaseSection from './common/BaseSection.vue'
import SectionHeader from './common/SectionHeader.vue'

// 대표 자산 2건 (Foundation 섹션 카드 노출)
const featuredAssets: CopyrightItem[] = [
  {
    id: 'core-api',
    name: 'JND Core API Platform',
    title: '확장형 표준 API 플랫폼',
    role: '백엔드 표준',
    usage: 'BackOffice·관리자 API의 토대',
    number: 'C-2026-021220',
    registeredAt: '2026.04',
    group: 'core'
  },
  {
    id: 'front-ui',
    name: 'JND Front UI Platform',
    title: '확장형 표준 UI 프론트엔드 플랫폼',
    role: '프론트엔드 표준',
    usage: 'BackOffice 데모 사이트의 토대',
    number: 'C-2026-022462',
    registeredAt: '2026.05',
    group: 'core'
  }
]

// 외 3건은 요약 노출
const otherAssets: CopyrightItem[] = [
  {
    id: 'excel-fw',
    name: 'JND Excel Framework',
    title: '엑셀 프레임워크',
    number: 'C-2026-021232',
    registeredAt: '2026.04',
    group: 'tool'
  },
  {
    id: 'expense',
    name: 'JND Expense Classifier',
    title: '지출 내역 분류 시스템',
    number: 'C-2026-021233',
    registeredAt: '2026.04',
    group: 'domain'
  },
  {
    id: 'accounting',
    name: 'JND Accounting Dashboard',
    title: '통합 회계 시각화 시스템',
    number: 'C-2026-021234',
    registeredAt: '2026.04',
    group: 'domain'
  }
]

const industries: IndustryTag[] = [
  { id: 'finance-esg', name: '금융 ESG', description: '금융그룹 ESG 공시·관리 시스템' },
  { id: 'heavy-lca', name: '중공업 LCA', description: '제품 전과정 환경영향 평가' },
  { id: 'chem-esg', name: '화학 ESG', description: '화학 기업 ESG 데이터 관리' },
  { id: 'ecommerce', name: '이커머스', description: '대규모 트래픽 운영·기획전 시스템' }
]

const techStack: TechCategory[] = [
  {
    id: 'backend',
    category: 'Backend',
    items: ['Java / Spring', 'Node.js', 'Python', 'REST API', 'Batch']
  },
  {
    id: 'frontend',
    category: 'Frontend',
    items: ['Vue 3', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'infra',
    category: 'Infrastructure',
    items: ['AWS', 'Docker', 'CI/CD', 'Monitoring', 'Alerting']
  },
  {
    id: 'data',
    category: 'Data',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch']
  }
]
</script>

<template>
  <BaseSection id="foundation" variant="white">
    <SectionHeader
      eyebrow="Foundation"
      description="단순 화면 제작이 아니라 운영되는 소프트웨어를 만들기 위해 표준 자산, 도메인 학습 방식, 안정적인 기술 스택을 준비해둡니다."
    >
      <template #title>
        SI·DX·AX 구축을 가능하게 하는<br class="sm:hidden" />
        <span class="text-primary">소프트웨어 기반</span>
      </template>
    </SectionHeader>

      <!-- Three Pillars -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Pillar 01: 표준 자산 -->
        <article
          class="foundation-card group relative bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <!-- Decorative background blob -->
          <span
            class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.05] group-hover:bg-primary/[0.08] transition-colors duration-500"
            aria-hidden="true"
          />
          <span class="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />

          <div class="relative">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <Boxes :size="24" :stroke-width="1.75" />
              </div>
              <div>
                <p class="text-[10px] font-mono text-primary uppercase tracking-widest mb-0.5">Pillar 01</p>
                <h3 class="text-xl font-bold text-gray-900">표준 소프트웨어 기반</h3>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-5 leading-relaxed">
              로그인, 메뉴, 관리자 API처럼 반복되는 기반을 표준화해 고객사의 핵심 업무와 자동화 구현에 더 집중합니다.
            </p>

            <!-- 대표 자산 2건 -->
            <ul class="space-y-2.5 mb-4">
              <li
                v-for="asset in featuredAssets"
                :key="asset.id"
                class="bg-white rounded-lg p-3 border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <div class="text-sm font-bold text-gray-900 leading-snug mb-0.5">
                  {{ asset.name }}
                </div>
                <div class="text-xs text-gray-500 mb-2">{{ asset.title }}</div>
                <div class="flex flex-col gap-0.5 mb-2">
                  <span class="text-xs text-gray-600 leading-snug">— {{ asset.role }}</span>
                  <span class="text-xs text-gray-600 leading-snug">— {{ asset.usage }}</span>
                </div>
                <div class="text-[10px] font-mono text-gray-400">
                  {{ asset.number }}
                </div>
              </li>
            </ul>

            <!-- 외 3건 요약 -->
            <p class="text-xs text-gray-500 leading-relaxed">
              외 <span class="font-semibold text-gray-700">{{ otherAssets.length }}건</span>의 자산 보유 ·
              엑셀 프레임워크, 지출 분류, 회계 시각화 시스템
            </p>
          </div>
        </article>

        <!-- Pillar 02: 산업 도메인 -->
        <article
          class="foundation-card group relative bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 120 } }"
        >
          <span
            class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.05] group-hover:bg-primary/[0.08] transition-colors duration-500"
            aria-hidden="true"
          />
          <span class="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />

          <div class="relative">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <Layers :size="24" :stroke-width="1.75" />
              </div>
              <div>
                <p class="text-[10px] font-mono text-primary uppercase tracking-widest mb-0.5">Pillar 02</p>
                <h3 class="text-xl font-bold text-gray-900">업무 구조화</h3>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-5 leading-relaxed">
              대기업·기업 시스템 경험을 중소기업 현실에 맞춰 필요한 만큼만 적용하고, 용어·데이터·승인 흐름을 빠르게 구조화합니다.
            </p>
            <ul class="space-y-2.5">
              <li
                v-for="ind in industries"
                :key="ind.id"
                class="bg-white rounded-lg p-3 border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <div class="text-sm font-semibold text-gray-900 mb-0.5">{{ ind.name }}</div>
                <div class="text-xs text-gray-600 leading-snug">{{ ind.description }}</div>
              </li>
            </ul>
          </div>
        </article>

        <!-- Pillar 03: 기술 스택 -->
        <article
          class="foundation-card group relative bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 240 } }"
        >
          <span
            class="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-primary/[0.05] group-hover:bg-primary/[0.08] transition-colors duration-500"
            aria-hidden="true"
          />
          <span class="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />

          <div class="relative">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <Cpu :size="24" :stroke-width="1.75" />
              </div>
              <div>
                <p class="text-[10px] font-mono text-primary uppercase tracking-widest mb-0.5">Pillar 03</p>
                <h3 class="text-xl font-bold text-gray-900">확장 가능한 스택</h3>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-5 leading-relaxed">
              운영 지속성을 기준으로 검증된 기술을 사용합니다. 디자인 파트너와 협업하더라도 화면 품질과 개발 유지보수성을 함께 검토합니다.
            </p>
            <div class="space-y-4">
              <div v-for="cat in techStack" :key="cat.id">
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-1 h-3 rounded-full bg-primary/60" aria-hidden="true" />
                  <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {{ cat.category }}
                  </div>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="item in cat.items"
                    :key="item"
                    class="inline-block px-2.5 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded-md hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
  </BaseSection>
</template>

<style scoped>
.foundation-card {
  will-change: transform, box-shadow;
}
</style>
