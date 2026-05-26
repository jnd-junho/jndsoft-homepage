<script setup lang="ts">
import BaseSection from './common/BaseSection.vue'
import SectionHeader from './common/SectionHeader.vue'

const faqs = [
  {
    question: '홈페이지나 랜딩페이지도 의뢰할 수 있나요?',
    answer: '가능합니다. 다만 단순 제작물보다 고객 유입 화면으로 보고, 문의·상담·예약·고객관리 같은 운영 흐름과 연결 가능한 구조를 우선 검토합니다.'
  },
  {
    question: 'MVP는 어느 범위부터 시작하는 것이 좋나요?',
    answer: '처음부터 큰 개발을 전제하지 않습니다. 핵심 사용자 흐름, 관리자 화면, 반드시 검증해야 할 업무 규칙을 우선 정하고 MVP로 만든 뒤 운영 가능성을 확인합니다.'
  },
  {
    question: 'AI 업무 자동화는 어떤 업무부터 적용할 수 있나요?',
    answer: '반복 문의 응대, 문서 확인, 요약·분류, 자동 리포트 생성처럼 사람이 기준을 반복해서 적용하는 업무부터 PoC로 검증하기 좋습니다.'
  },
  {
    question: '관리자 페이지가 포함된 업무 시스템 구축도 가능한가요?',
    answer: '가능합니다. 운영자가 직접 데이터를 확인하고 수정할 수 있도록 권한, 메뉴, 목록, 입력 폼, 감사 로그 같은 관리자 기능을 업무 흐름에 맞춰 설계합니다.'
  }
]
</script>

<template>
  <BaseSection id="faq" variant="grid-gray" max-width="5xl" padding="compact">
    <SectionHeader
      eyebrow="FAQ"
      description="고객 유입 화면, 업무 시스템 구축, AI 자동화, SaaS·MVP 확장을 고민할 때 자주 나오는 질문을 정리했습니다."
    >
      <template #title>
        자주 묻는 <span class="text-primary">소프트웨어 구축</span> 질문
      </template>
    </SectionHeader>

      <div class="space-y-4">
        <article
          v-for="(faq, index) in faqs"
          :key="faq.question"
          class="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
        >
          <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
          <div class="flex gap-4">
            <span class="shrink-0 text-sm font-mono font-bold text-primary">
              Q{{ index + 1 }}
            </span>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                {{ faq.question }}
              </h3>
              <p class="text-sm md:text-base text-gray-600 leading-relaxed">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </article>
      </div>
  </BaseSection>
</template>
