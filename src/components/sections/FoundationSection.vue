<script setup lang="ts">
import { FileCheck2, Layers, Cpu, ExternalLink } from 'lucide-vue-next'
import type { CopyrightItem, IndustryTag, TechCategory } from '@/types'

const copyrights: CopyrightItem[] = [
  { id: 'cr-placeholder-1', number: 'C-2024-000000', title: '소프트웨어 저작권 제목 (입력 예정)' },
  { id: 'cr-placeholder-2', number: 'C-2024-000000', title: '소프트웨어 저작권 제목 (입력 예정)' }
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

const crosUrl = 'https://www.cros.or.kr'
</script>

<template>
  <section id="foundation" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-12 md:mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Foundation
        </h2>
        <p class="text-lg text-gray-600 mb-6">
          말이 아닌, 확인 가능한 자산
        </p>
        <p class="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          저작권·산업 경험·기술 스택은 모두 검증 가능한 형태로 공개합니다.
        </p>
      </div>

      <!-- Three Pillars -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <!-- Software Copyrights -->
        <div
          class="bg-gray-50 rounded-2xl p-6 md:p-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <FileCheck2 :size="22" :stroke-width="1.75" />
            </div>
            <h3 class="text-xl font-bold text-gray-900">소프트웨어 저작권</h3>
          </div>
          <p class="text-sm text-gray-600 mb-5 leading-relaxed">
            한국저작권위원회에 등록된 자체 보유 소프트웨어입니다.
          </p>
          <ul class="space-y-2.5 mb-5">
            <li
              v-for="item in copyrights"
              :key="item.id"
              class="bg-white rounded-lg p-3 border border-gray-200"
            >
              <div class="text-xs font-mono text-primary mb-1">{{ item.number }}</div>
              <div class="text-sm text-gray-800 leading-snug">{{ item.title }}</div>
            </li>
          </ul>
          <a
            :href="crosUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            CROS 공식 검색에서 검증
            <ExternalLink :size="14" :stroke-width="2" />
          </a>
        </div>

        <!-- Industries -->
        <div
          class="bg-gray-50 rounded-2xl p-6 md:p-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 120 } }"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Layers :size="22" :stroke-width="1.75" />
            </div>
            <h3 class="text-xl font-bold text-gray-900">산업 도메인</h3>
          </div>
          <p class="text-sm text-gray-600 mb-5 leading-relaxed">
            실제 수행한 4개 산업의 비즈니스 흐름을 학습했습니다.
          </p>
          <ul class="space-y-2.5">
            <li
              v-for="ind in industries"
              :key="ind.id"
              class="bg-white rounded-lg p-3 border border-gray-200"
            >
              <div class="text-sm font-semibold text-gray-900 mb-0.5">{{ ind.name }}</div>
              <div class="text-xs text-gray-600 leading-snug">{{ ind.description }}</div>
            </li>
          </ul>
        </div>

        <!-- Tech Stack -->
        <div
          class="bg-gray-50 rounded-2xl p-6 md:p-8"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 240 } }"
        >
          <div class="flex items-center gap-3 mb-5">
            <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Cpu :size="22" :stroke-width="1.75" />
            </div>
            <h3 class="text-xl font-bold text-gray-900">기술 스택</h3>
          </div>
          <p class="text-sm text-gray-600 mb-5 leading-relaxed">
            안정성이 검증된 스택만 사용. 새 기술은 사전 검토 후 도입합니다.
          </p>
          <div class="space-y-4">
            <div v-for="cat in techStack" :key="cat.id">
              <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {{ cat.category }}
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="item in cat.items"
                  :key="item"
                  class="inline-block px-2.5 py-1 text-xs font-medium bg-white border border-gray-200 text-gray-700 rounded-md"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Note -->
      <div
        class="mt-10 text-center"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        <p class="text-sm text-gray-500">
          * 저작권 항목은 추후 실제 등록 정보로 교체됩니다.
        </p>
      </div>
    </div>
  </section>
</template>
