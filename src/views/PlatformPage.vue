<script setup lang="ts">
import { Boxes, Globe, Bot, Zap, ShieldCheck, TrendingUp, Settings, Network, Award, Gauge, Database, ShoppingCart, Briefcase } from 'lucide-vue-next'
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-br from-primary to-[#15b862] overflow-hidden">
      <!-- Wave Animation -->
      <div class="absolute inset-0 opacity-10">
        <svg class="absolute bottom-0 w-full h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,192C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div
        class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
          확장형 BackOffice 플랫폼
        </h1>
        <p class="text-xl sm:text-2xl mb-4 font-light opacity-95">
          전문가의 경험과 AI 검증이 만드는 엔터프라이즈 품질
        </p>
        <p class="text-lg opacity-90 max-w-3xl mx-auto">
          수백 개의 검증된 컴포넌트, 글로벌 표준 기술, AI 품질 검증이 결합된<br />
          신뢰할 수 있는 개발 플랫폼
        </p>
      </div>
    </section>

    <!-- Core Strengths Section -->
    <section class="py-20 md:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">핵심 역량</h2>
          <p class="text-lg text-gray-600">완성도와 생산성, 두 마리 토끼를 동시에</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in coreStrengths"
            :key="item.id"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
            class="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
          >
            <div class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
              <component :is="item.icon" :size="40" :stroke-width="1.5" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">{{ item.title }}</h4>
            <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section class="py-20 md:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">전문가 + AI 협업 프로세스</h2>
          <p class="text-lg text-gray-600">각 단계마다 전문가의 판단과 AI 검증이 함께합니다</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            v-for="(step, index) in workflowSteps"
            :key="step.id"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }"
            class="text-center bg-white rounded-2xl p-8 shadow-card relative"
          >
            <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
              {{ index + 1 }}
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">{{ step.title }}</h4>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>

        <div
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        >
          <p class="text-xl font-semibold text-gray-900">
            결과: 검증된 품질, 예측 가능한 일정, 안정적인 운영
          </p>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 md:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Productivity First</h2>
          <p class="text-lg text-gray-600">고객의 핵심 비즈니스에 집중합니다</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(benefit, index) in benefits"
            :key="benefit.id"
            v-motion
            :initial="{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }"
            :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: index * 100 } }"
            class="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-primary"
          >
            <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <component :is="benefit.icon" :size="24" :stroke-width="1.5" />
            </div>
            <div>
              <h5 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h5>
              <p class="text-gray-600">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-20 md:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">모든 프로젝트에 완벽 대응</h2>
          <p class="text-lg text-gray-600">유연한 확장성과 빠른 커스터마이징</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(useCase, index) in useCases"
            :key="useCase.id"
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 80 } }"
            class="text-center p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:-translate-y-1 transition-all"
          >
            <component :is="useCase.icon" :size="40" :stroke-width="1.5" class="mx-auto mb-4 text-primary" />
            <h5 class="text-lg font-semibold text-gray-900 mb-2">{{ useCase.title }}</h5>
            <p class="text-sm text-gray-600">{{ useCase.description }}</p>
          </div>
        </div>

        <div
          class="text-center mt-12"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
        >
          <p class="text-xl font-semibold text-gray-900">
            어떤 산업, 어떤 규모의 프로젝트든<br />
            검증된 플랫폼 기반으로 신속하게 구현 가능합니다
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center">
      <div
        class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">프로젝트 시작이 고민이신가요?</h2>
        <p class="text-xl mb-8 opacity-90">
          검증된 전문가와 AI가 함께하는 프로젝트를 경험하세요
        </p>
        <router-link
          to="/#contact"
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          지금 문의하기
          <Award :size="20" />
        </router-link>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      coreStrengths: [
        {
          id: 'components',
          title: '검증된 컴포넌트',
          description: '200+ 개의 완성도 높은 UI 컴포넌트를 즉시 활용 가능합니다. 처음부터 개발하는 리스크 없이 검증된 기반에서 시작하세요.',
          icon: Boxes
        },
        {
          id: 'standards',
          title: '글로벌 표준 기술',
          description: '국제 표준을 준수하는 기술 스택으로 높은 호환성과 장기적인 유지보수성을 보장합니다.',
          icon: Globe
        },
        {
          id: 'ai',
          title: 'AI 품질 검증',
          description: 'AI가 코드 품질, 보안 취약점, 성능을 자동 검증합니다. 전문가가 놓칠 수 있는 부분까지 AI가 보완합니다.',
          icon: Bot
        }
      ],
      workflowSteps: [
        {
          id: 'analysis',
          title: '요구사항 분석',
          description: '전문 컨설턴트가 요구사항을 분석하고, AI가 유사 프로젝트 데이터를 기반으로 리스크를 사전 진단합니다.'
        },
        {
          id: 'design',
          title: '설계 & 구현',
          description: '검증된 컴포넌트 기반으로 전문가가 최적 설계합니다. 풍부한 실전 경험이 품질의 차이를 만듭니다.'
        },
        {
          id: 'verification',
          title: 'AI 검증 & 안정화',
          description: 'AI가 보안, 성능, 호환성을 자동 검증합니다. 전문가의 코드 리뷰와 결합하여 엔터프라이즈급 안정성을 확보합니다.'
        }
      ],
      benefits: [
        {
          id: 'fast',
          title: '즉시 개발 착수',
          description: '검증된 플랫폼 기반으로 프로젝트 준비 시간을 최소화하고 바로 핵심 기능 개발에 돌입할 수 있습니다.',
          icon: Zap
        },
        {
          id: 'risk',
          title: '리스크 최소화',
          description: '처음부터 개발하는 불확실성을 제거하고 검증된 컴포넌트로 안정성을 보장합니다.',
          icon: ShieldCheck
        },
        {
          id: 'productivity',
          title: '생산성 극대화',
          description: '검증된 컴포넌트와 AI 품질 검증으로 개발 속도와 안정성을 동시에 확보합니다.',
          icon: TrendingUp
        },
        {
          id: 'focus',
          title: '비즈니스 로직 집중',
          description: 'AI가 품질 검증과 반복 테스트를 수행하는 동안, 전문가는 고객의 핵심 비즈니스 로직 구현에 집중합니다.',
          icon: Settings
        },
        {
          id: 'maintenance',
          title: '장기 유지보수 용이',
          description: '표준 기술 스택과 체계적인 구조로 장기적인 유지보수와 확장이 수월합니다.',
          icon: Network
        },
        {
          id: 'quality',
          title: '품질 보증',
          description: '검증된 컴포넌트와 자동화된 품질 관리로 일관된 고품질을 제공합니다.',
          icon: Award
        }
      ],
      useCases: [
        {
          id: 'dashboard',
          title: '대시보드',
          description: '데이터 시각화와 모니터링',
          icon: Gauge
        },
        {
          id: 'admin',
          title: '관리자 시스템',
          description: 'BackOffice 운영 관리',
          icon: Settings
        },
        {
          id: 'erp',
          title: 'ERP/CRM',
          description: '업무 프로세스 통합',
          icon: Network
        },
        {
          id: 'data',
          title: '데이터 관리',
          description: '정보 수집 및 분석',
          icon: Database
        },
        {
          id: 'ecommerce',
          title: '전자상거래 관리',
          description: '상품 및 주문 관리',
          icon: ShoppingCart
        },
        {
          id: 'internal',
          title: '내부 업무 시스템',
          description: '협업 및 업무 자동화',
          icon: Briefcase
        }
      ]
    }
  }
}
</script>
