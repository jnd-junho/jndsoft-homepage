<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Star, Building, Droplet, ShoppingCart, Lightbulb as LightbulbIcon, Bot,
  RotateCw, Lightbulb, TrendingUp, Play,
  GraduationCap, Briefcase, Trophy, ArrowRight
} from 'lucide-vue-next'
import type { TimelineItem, CultureValue } from '@/types'

// ─────────────────────────────────────────────────────
// PLACEHOLDER: 대표 프로필 — 아래 항목을 실제 값으로 교체
// ─────────────────────────────────────────────────────
const founder = {
  name: '한준호',
  role: '대표이사 · 수석 소프트웨어 아키텍트',
  // TODO: 실제 사진 촬영 후 /public/assets/img/founder.jpg 등으로 교체
  photo: null as string | null,
  intro:
    '풀스택 엔지니어로 시작해 시스템 아키텍트로, 그리고 대표로 — 점차 더 큰 그림을 설계해왔습니다. 기술 의사결정과 비즈니스 의사결정을 분리하지 않는 것이, 지금까지 다뤄온 모든 프로젝트의 공통 원칙입니다.',
  highlights: [
    { icon: 'GraduationCap', label: '전공', value: '소프트웨어 개발 학과 졸업' },
    { icon: 'Briefcase', label: '실무 경력', value: '약 18년 — 시스템 설계·구축·운영' },
    { icon: 'Trophy', label: '전문 분야', value: '시스템 설계 · DX 전환 · 대규모 트래픽 운영' }
  ]
}

// ─────────────────────────────────────────────────────
// 대표 경험 — 회사·직책 나열 대신 도메인·역할의 다양성 중심
// ─────────────────────────────────────────────────────
const founderExperience = [
  {
    id: 'exp-domain',
    label: '도메인 다양성',
    title: '여러 산업군의 비즈니스 흐름 학습',
    description: '금융·중공업·화학·이커머스 등 서로 다른 산업의 시스템을 직접 설계·구축·운영했습니다. 각 도메인의 핵심 규제·업무·데이터 흐름을 현장에서 이해했습니다.'
  },
  {
    id: 'exp-segment',
    label: 'B2B · B2C 양면 경험',
    title: '엔터프라이즈와 소비자 서비스 모두',
    description: '대형 기업의 내부 시스템과 일반 소비자를 대상으로 하는 이커머스 서비스를 함께 다뤘습니다. 사용자 유형에 따라 달라지는 우선순위와 의사결정 구조를 알고 있습니다.'
  },
  {
    id: 'exp-scale',
    label: '대규모 운영',
    title: '실시간 트래픽과 장애 대응',
    description: '이커머스 환경에서 트래픽이 몰리는 시점의 운영과 빠른 장애 인지·대응을 경험했습니다. 만드는 단계와 운영하는 단계의 간극을 줄이는 설계 원칙이 여기서 정리되었습니다.'
  },
  {
    id: 'exp-role',
    label: '역할 폭',
    title: '실무 개발부터 기술 리더까지',
    description: '코드를 직접 작성하는 실무자에서, 여러 팀이 협업하는 DX 전환 프로젝트의 기술 리더까지 다양한 위치에서 일했습니다. 미팅 현장에서 즉시 설계 제안이 나오는 배경입니다.'
  }
]

// ─────────────────────────────────────────────────────
// 회사 가치 — 기존 CultureSection에서 이전
// ─────────────────────────────────────────────────────
const cultureValues: CultureValue[] = [
  {
    id: 'improvement',
    title: '현실적 개선',
    description: '무리한 변화보다 현실적인 개선을 선택합니다',
    icon: 'RotateCw'
  },
  {
    id: 'flexibility',
    title: '유연한 사고',
    description: '정답을 강요하지 않고 유연하게 사고합니다',
    icon: 'Lightbulb'
  },
  {
    id: 'execution',
    title: '실행 중심',
    description: '실행을 통해 증명되는 효율을 중시합니다',
    icon: 'TrendingUp'
  },
  {
    id: 'start',
    title: '작은 시작',
    description: '바꿀 수 있는 것부터 시작하는 실천을 중요하게 생각합니다',
    icon: 'Play'
  }
]

// ─────────────────────────────────────────────────────
// 회사 연혁 — 기존 JourneySection에서 이전
// ─────────────────────────────────────────────────────
const companyTimeline: TimelineItem[] = [
  {
    id: 'establishment',
    date: '2022년 7월',
    title: '회사 설립',
    description: '(주)제이앤디소프트 창업',
    icon: 'Star'
  },
  {
    id: 'finance',
    date: '2022년 하반기',
    title: '금융/중공업 프로젝트',
    description: '금융그룹사 ESG 시스템 구축 개발 참여\n중공업 LCA 시스템 구축 개발 참여',
    icon: 'Building'
  },
  {
    id: 'chemical',
    date: '2023년 상반기',
    title: '화학 기업 프로젝트',
    description: '국내 화학 기업 ESG 시스템 구축 개발 참여',
    icon: 'Droplet'
  },
  {
    id: 'ecommerce',
    date: '2023년 하반기 ~ 현재',
    title: '대기업 이커머스 프로젝트',
    description: '국내 화장품 전문기업 이커머스몰/커뮤니티 운영\n기획전 파트 시스템 고도화 참여',
    icon: 'ShoppingCart'
  },
  {
    id: 'research',
    date: '2025년 상반기',
    title: '연구소 설립',
    description: '기업부설연구소 설립',
    icon: 'LightbulbIcon'
  },
  {
    id: 'ai-platform',
    date: '2025년 10월 ~ 현재',
    title: 'AI 플랫폼 개발',
    description: '워크플로우 자동화 플랫폼 서비스 개발 진행 중',
    icon: 'Bot'
  }
]

const getCultureIcon = (iconName: string) => {
  const icons = { RotateCw, Lightbulb, TrendingUp, Play }
  return icons[iconName as keyof typeof icons]
}

const getTimelineIcon = (iconName: string) => {
  const icons = { Star, Building, Droplet, ShoppingCart, LightbulbIcon, Bot }
  return icons[iconName as keyof typeof icons]
}

const getFounderIcon = (iconName: string) => {
  const icons = { GraduationCap, Briefcase, Trophy }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <main class="pt-20">
    <!-- ─────────────────────────────────────────────── -->
    <!-- Hero Section -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      <!-- Background grid pattern -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-3 mb-5">
          <span class="h-px w-8 bg-primary/60" />
          <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
            About JnDSOFT
          </span>
          <span class="h-px w-8 bg-primary/60" />
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          비즈니스와 기술의 <span class="text-primary">이음</span>
        </h1>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          검증된 표준 자산과 도메인 경험을 잇대어,<br class="hidden sm:block" />
          고객의 비즈니스를 함께 설계합니다.
        </p>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 회사명 어원 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-3 mb-4">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Our Name
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            제이앤디소프트
          </h2>
          <p class="text-sm text-gray-500">
            회사 이름에는 우리가 지향하는 방향이 담겨 있습니다.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <!-- J -->
          <div class="origin-card group relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
            <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
            <span class="absolute -top-4 -right-2 text-6xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300" aria-hidden="true">01</span>
            <div class="relative">
              <div class="text-5xl font-black text-primary mb-2 leading-none">J</div>
              <p class="text-sm font-semibold text-gray-900 mb-1">Jump</p>
              <p class="text-xs text-gray-500">도약</p>
            </div>
          </div>
          <!-- n -->
          <div class="origin-card group relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
            <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
            <span class="absolute -top-4 -right-2 text-6xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300" aria-hidden="true">02</span>
            <div class="relative">
              <div class="text-5xl font-black text-gray-400 mb-2 leading-none">n</div>
              <p class="text-sm font-semibold text-gray-900 mb-1">and</p>
              <p class="text-xs text-gray-500">&amp; (이음)</p>
            </div>
          </div>
          <!-- D -->
          <div class="origin-card group relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
            <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
            <span class="absolute -top-4 -right-2 text-6xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300" aria-hidden="true">03</span>
            <div class="relative">
              <div class="text-5xl font-black text-primary mb-2 leading-none">D</div>
              <p class="text-sm font-semibold text-gray-900 mb-1">Develop</p>
              <p class="text-xs text-gray-500">발전</p>
            </div>
          </div>
        </div>

        <p class="text-center text-sm md:text-base text-gray-600 mt-8 leading-relaxed">
          <span class="font-semibold text-gray-900">도약</span>과
          <span class="font-semibold text-gray-900">발전</span>을 잇는 회사.<br class="sm:hidden" />
          머무르지 않고, 끊어지지 않게.
        </p>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 대표 프로필 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-white py-20 md:py-28 overflow-hidden">
      <!-- Background dot pattern -->
      <div
        class="absolute inset-0 opacity-[0.025] pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px); background-size: 28px 28px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Founder
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            설계 원칙으로 <span class="text-primary">제도화된</span> 경험
          </h2>
          <p class="text-base text-gray-600">대표 개인이 아닌 회사 표준</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <!-- Profile Photo (임시: 모노그램 플레이스홀더) -->
          <div class="lg:col-span-4">
            <div class="relative aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30">
              <!-- Decorative top accent -->
              <span class="absolute top-0 left-0 w-16 h-1.5 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl z-10" aria-hidden="true" />
              <!-- Subtle grid pattern -->
              <div
                class="absolute inset-0 opacity-[0.08] pointer-events-none"
                style="background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px); background-size: 32px 32px;"
                aria-hidden="true"
              />
              <!-- Corner glow -->
              <span class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
              <span class="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />

              <!-- Photo (when available) or monogram fallback -->
              <img
                v-if="founder.photo"
                :src="founder.photo"
                :alt="founder.name"
                class="relative w-full h-full object-cover"
              />
              <div
                v-else
                class="relative w-full h-full flex flex-col items-center justify-center text-center p-6"
                :aria-label="`${founder.name} 프로필 (임시 이미지)`"
              >
                <!-- Eyebrow -->
                <span class="text-[10px] font-mono text-white/50 uppercase tracking-[0.3em] mb-4">
                  JnDSOFT
                </span>
                <!-- Monogram: J & D (Jump and Develop) -->
                <div class="flex items-baseline gap-2 sm:gap-3 mb-4 leading-none tracking-tight">
                  <span class="text-7xl sm:text-8xl font-black text-white">J</span>
                  <span class="text-6xl sm:text-7xl font-black text-primary">&amp;</span>
                  <span class="text-7xl sm:text-8xl font-black text-white">D</span>
                </div>
                <!-- Name -->
                <div class="text-base font-semibold text-white/90 mb-1">
                  {{ founder.name }}
                </div>
                <div class="text-xs text-white/50">
                  {{ founder.role }}
                </div>
              </div>
            </div>
            <!-- Note (작게, 가독성을 위해 카드 외부에) -->
            <p
              v-if="!founder.photo"
              class="mt-2 text-[11px] text-gray-400 text-center"
            >
              * 프로필 사진은 추후 추가될 예정입니다.
            </p>
          </div>

          <!-- Profile Detail -->
          <div class="lg:col-span-8">
            <p class="text-sm font-medium text-primary mb-2">{{ founder.role }}</p>
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {{ founder.name }}
            </h3>
            <p class="text-base text-gray-700 leading-relaxed mb-8">
              {{ founder.intro }}
            </p>

            <!-- Highlights -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div
                v-for="h in founder.highlights"
                :key="h.label"
                class="group relative bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-primary/40 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <span class="absolute top-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-primary/30 rounded-tl-xl" aria-hidden="true" />
                <div class="flex items-center gap-2 mb-2">
                  <component :is="getFounderIcon(h.icon)" :size="16" :stroke-width="1.75" class="text-primary" />
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {{ h.label }}
                  </span>
                </div>
                <p class="text-sm text-gray-800 leading-snug">{{ h.value }}</p>
              </div>
            </div>

            <!-- 두 가지 차별 메시지 (2열 그리드) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- 기술 깊이를 가진 설계자 -->
              <div class="group relative bg-gradient-to-br from-primary/5 to-white border border-primary/20 rounded-xl p-5 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <span class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40" aria-hidden="true" />
                <span class="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-primary/[0.07]" aria-hidden="true" />
                <div class="relative">
                  <p class="text-sm font-semibold text-primary mb-1.5">
                    기술 깊이를 가진 설계자
                  </p>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    미팅 현장에서 비즈니스 요구를 듣고, 기술적 실현 가능성과 트레이드오프까지 즉시 설명합니다.
                    '영업이 듣고 개발이 다시 듣는' 단절이 발생하지 않습니다.
                  </p>
                </div>
              </div>
              <!-- 대표 개인이 아닌 팀 표준 -->
              <div class="group relative bg-gray-50 border border-gray-200 rounded-xl p-5 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <span class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 to-gray-200" aria-hidden="true" />
                <div class="relative">
                  <p class="text-sm font-semibold text-gray-700 mb-1.5">
                    대표 개인이 아닌 팀 표준
                  </p>
                  <p class="text-sm text-gray-700 leading-relaxed">
                    18년의 경험은 설계 원칙·코드 리뷰 체크리스트·운영 프로세스로 제도화되어 있습니다.
                    특정 개인의 가용성에 프로젝트가 의존하지 않습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 대표 경험 (도메인·역할의 다양성) -->
        <div class="max-w-5xl mx-auto mt-16">
          <h3 class="text-xl font-bold text-gray-900 mb-2 text-center">경험의 폭</h3>
          <p class="text-sm text-gray-500 text-center mb-8">
            특정 회사·직책이 아닌, 다뤄온 도메인과 역할의 범위입니다.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article
              v-for="(item, idx) in founderExperience"
              :key="item.id"
              class="experience-card group relative bg-gray-50 rounded-xl p-5 md:p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-xl" aria-hidden="true" />
              <span
                class="absolute -bottom-4 -right-2 text-6xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
                aria-hidden="true"
              >
                0{{ idx + 1 }}
              </span>
              <div class="relative">
                <span class="inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-primary uppercase tracking-widest mb-3">
                  <span class="w-1 h-3 rounded-full bg-primary" aria-hidden="true" />
                  {{ item.label }}
                </span>
                <h4 class="text-base font-bold text-gray-900 mb-2">
                  {{ item.title }}
                </h4>
                <p class="text-sm text-gray-600 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 이음 철학 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-gray-50 py-20 md:py-28">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Our Philosophy
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            우리가 만드는 것은 <span class="text-primary">이음</span>입니다
          </h2>
          <p class="text-base text-gray-600">
            모든 프로젝트는 결국, 무언가를 잇는 일이라고 믿습니다.
          </p>
        </div>

        <div class="relative bg-white rounded-2xl p-8 md:p-10 border border-gray-200 overflow-hidden">
          <span class="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
          <span class="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-primary/[0.04]" aria-hidden="true" />

          <ul class="relative space-y-5">
            <li
              v-for="(philo, idx) in [
                { title: '비즈니스와 기술의', desc: '도메인을 깊이 이해한 사람이 직접 설계합니다. 기술이 비즈니스의 언어가 되도록.' },
                { title: '고객과 우리, 신뢰의', desc: '짧은 합의 사이클로 누적된 오해를 차단합니다. 끝나고 보여주지 않고, 만들어가며 함께 결정합니다.' },
                { title: '미팅과 결과물의', desc: '말로 끝나는 미팅이 아닌, 정리·재구성·재공유의 사이클이 결과물로 이어집니다.' },
                { title: '설계와 운영의', desc: '만들고 끝이 아닙니다. 빠른 장애 인지·대응 체계까지 함께 설계합니다.' }
              ]"
              :key="idx"
              class="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/[0.03] transition-colors"
            >
              <span class="inline-flex shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary items-center justify-center text-sm font-mono font-bold shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all">
                0{{ idx + 1 }}
              </span>
              <div class="flex-1">
                <p class="text-base md:text-lg font-semibold text-gray-900 mb-1">
                  {{ philo.title }} <span class="text-primary">이음</span>
                </p>
                <p class="text-sm text-gray-600 leading-relaxed">
                  {{ philo.desc }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 회사 가치 (Culture) -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-white py-20 md:py-28 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.025] pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px); background-size: 28px 28px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Our Culture
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            함께 일하기 <span class="text-primary">좋은 팀</span>
          </h2>
          <p class="text-base text-gray-600 max-w-2xl mx-auto">
            누군가를 가르치려 들지 않습니다. 더 나은 방향을 함께 찾고,
            스스로 납득한 방식으로 움직입니다.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(value, idx) in cultureValues"
            :key="value.id"
            class="culture-card group relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden"
          >
            <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
            <span
              class="absolute -bottom-3 -right-1 text-5xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
              aria-hidden="true"
            >
              0{{ idx + 1 }}
            </span>
            <div class="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
              <component :is="getCultureIcon(value.icon)" :size="28" :stroke-width="1.5" />
            </div>
            <h4 class="relative text-lg font-semibold text-gray-900 mb-2">{{ value.title }}</h4>
            <p class="relative text-sm text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 회사 연혁 (Journey) -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Journey
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            함께 성장해온 <span class="text-primary">발자취</span>
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/10 hidden md:block" />

            <div class="space-y-8">
              <div
                v-for="item in companyTimeline"
                :key="item.id"
                class="group relative flex gap-4 md:gap-8"
              >
                <div class="shrink-0">
                  <div class="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 relative z-10 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                    <component :is="getTimelineIcon(item.icon)" :size="26" :stroke-width="1.5" />
                  </div>
                </div>

                <div class="flex-1 relative bg-white rounded-2xl p-5 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden">
                  <span class="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
                  <div class="relative">
                    <div class="text-sm font-mono font-semibold text-primary mb-1">{{ item.date }}</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">
                      {{ item.title }}
                      <span
                        v-if="item.id === 'ai-platform'"
                        class="ml-2 px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        진행중
                      </span>
                    </h4>
                    <p class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- CTA -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-white py-20 md:py-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          비즈니스를 함께 만들 준비가 되어 있습니다
        </h2>
        <p class="text-base text-gray-600 mb-8">
          작은 미팅부터 시작합니다. 부담 없이 문의하세요.
        </p>
        <RouterLink
          to="/contact"
          class="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
        >
          프로젝트 문의
          <ArrowRight :size="20" class="transition-transform group-hover:translate-x-1" />
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.origin-card,
.experience-card,
.culture-card {
  will-change: transform, box-shadow;
}
</style>
