<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Sparkles, Search, TrendingUp, Map,
  ArrowRight, Wrench, CircleDot,
  Mail, Bot, GitBranch, MessageSquare, Sheet
} from 'lucide-vue-next'

// Track 2: 워크플로우 노드 (고객 문의 자동 분류·기록)
const workflowNodes = [
  { id: 1, icon: Mail, label: 'Gmail 새 메일 수신', sub: 'Trigger', tone: 'trigger' },
  { id: 2, icon: Bot, label: 'AI 의도 분류·요약', sub: 'AI · LLM', tone: 'ai' },
  { id: 3, icon: GitBranch, label: '카테고리 분기', sub: 'Logic', tone: 'logic' },
  { id: 4, icon: MessageSquare, label: '담당자 메신저 알림', sub: 'Action · 긴급/컴플레인', tone: 'action' },
  { id: 5, icon: Sheet, label: '문의 내역 자동 기록', sub: 'Action · 전체 로그', tone: 'action' }
]

// Track 1: AI 도입 진단 4단계
const diagnosticSteps = [
  {
    id: 'interview',
    icon: Search,
    title: '업무 프로세스 인터뷰 및 매핑',
    description: '현장 인터뷰로 반복·수작업·데이터 이동이 일어나는 지점을 가시화합니다.'
  },
  {
    id: 'candidates',
    icon: Sparkles,
    title: 'AI 적용 가능 지점 후보 도출',
    description: '대화형 AI · 분류·요약 · 문서 추출 등 적용 가능한 패턴을 후보로 정리합니다.'
  },
  {
    id: 'simulate',
    icon: TrendingUp,
    title: '예상 효과 · 도입 난이도 시뮬레이션',
    description: '시간 절감·비용 절감 효과와 구현 난이도를 함께 평가하여 우선순위를 매깁니다.'
  },
  {
    id: 'roadmap',
    icon: Map,
    title: '단계별 도입 로드맵 제안',
    description: '작은 PoC부터 시스템화까지, 단계별로 검증하며 확장할 수 있는 로드맵을 제시합니다.'
  }
]

// Foundation Tools (도구 중립적 병기)
const tools = ['n8n', 'Zapier', 'Make', '기타 검증된 워크플로우 플랫폼']
</script>

<template>
  <main class="pt-20">
    <!-- ─────────────────────────────────────────────── -->
    <!-- Hero Section -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <!-- Background grid pattern -->
      <div
        class="absolute inset-0 opacity-[0.04] pointer-events-none"
        style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-3 mb-5">
          <span class="h-px w-8 bg-primary/60" />
          <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
            AI Transformation  ·  Entry Point
          </span>
          <span class="h-px w-8 bg-primary/60" />
        </div>

        <!-- Headline -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          AX & <br class="sm:hidden" />
          <span class="text-primary">업무 자동화</span>
        </h1>

        <!-- Sub -->
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          복잡한 업무를 노드로 연결하고, AI로 판단합니다.<br class="hidden sm:block" />
          작게 시작해 SI / DX로 확장하는 디지털 전환의 첫 걸음.
        </p>

        <!-- CTA -->
        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <RouterLink
            to="/contact"
            class="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            진단은 무료로 시작하세요
            <ArrowRight :size="18" class="transition-transform group-hover:translate-x-1" />
          </RouterLink>
          <a
            href="#diagnostics"
            class="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
          >
            서비스 자세히 보기
          </a>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- Track 1 — AI 도입 진단 -->
    <!-- ─────────────────────────────────────────────── -->
    <section id="diagnostics" class="relative bg-white py-20 md:py-28 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.025] pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px); background-size: 28px 28px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Track 01
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            <span class="text-primary">AI 도입</span>은 진단부터.
          </h2>
          <p class="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            현재 업무 프로세스를 함께 분석하고, AI를 적용해 즉시 효과를 낼 수 있는 지점을 발굴합니다.
          </p>
        </div>

        <!-- 4-Step Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 lg:gap-4 max-w-7xl mx-auto">
          <article
            v-for="(step, idx) in diagnosticSteps"
            :key="step.id"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: idx * 100 } }"
            class="step-card group relative bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span class="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl" aria-hidden="true" />
            <!-- background number -->
            <span
              class="absolute -bottom-4 -right-2 text-7xl font-black text-gray-100/80 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
              aria-hidden="true"
            >
              0{{ idx + 1 }}
            </span>

            <div class="relative">
              <!-- Icon Badge -->
              <div class="mb-5 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <component :is="step.icon" :size="26" :stroke-width="1.5" />
              </div>

              <!-- Step number label -->
              <p class="text-[10px] font-mono font-semibold text-primary uppercase tracking-widest mb-2">
                Step 0{{ idx + 1 }}
              </p>

              <!-- Title -->
              <h3 class="text-base md:text-lg font-bold text-gray-900 mb-2 leading-snug">
                {{ step.title }}
              </h3>

              <!-- Description -->
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- Track 2 — 워크플로우 자동화 PoC (Placeholder) -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Track 02
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            <span class="text-primary">워크플로우 자동화</span> PoC.
          </h2>
          <p class="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            진단에서 도출된 자동화 후보를 작은 워크플로우로 만들어 효과를 즉시 검증합니다.
          </p>
        </div>

        <!-- Workflow Diagram Canvas -->
        <div
          class="relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        >
          <span class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" aria-hidden="true" />

          <!-- Canvas Header -->
          <div class="flex items-center justify-between px-5 md:px-6 py-3.5 border-b border-gray-100 bg-gray-50/60">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span class="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span class="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <span class="ml-3 text-xs font-mono text-gray-500">workflow / inquiry-triage.json</span>
            </div>
            <span class="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold text-primary uppercase tracking-widest">
              <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live Example
            </span>
          </div>

          <!-- Diagram Body -->
          <div
            class="relative px-5 md:px-10 py-10 md:py-14"
            style="background-image: radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px); background-size: 22px 22px;"
          >
            <!-- Row 1: Linear flow (1 → 2 → 3) -->
            <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 md:gap-x-10">
              <div
                v-for="(node, idx) in workflowNodes.slice(0, 3)"
                :key="node.id"
                class="node-cell relative"
                v-motion
                :initial="{ opacity: 0, y: 16 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: idx * 120 } }"
              >
                <!-- Connector (desktop) -->
                <template v-if="idx < 2">
                  <span class="hidden sm:block absolute top-1/2 -right-6 w-6 h-px bg-gradient-to-r from-primary/40 to-primary/10" aria-hidden="true" />
                  <span class="hidden sm:block absolute top-1/2 -right-[26px] -translate-y-1/2 text-primary/50" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><path d="M0 0 L8 4 L0 8 Z" /></svg>
                  </span>
                </template>

                <div
                  class="group relative bg-white rounded-xl border border-gray-200 px-4 py-4 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                  :class="{ 'ring-1 ring-primary/20': node.tone === 'ai' }"
                >
                  <span class="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white border border-gray-200 text-[10px] font-mono font-bold text-gray-500 flex items-center justify-center shadow-sm">
                    {{ node.id }}
                  </span>
                  <div class="flex items-center gap-3">
                    <div
                      class="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                      :class="{
                        'bg-blue-50 text-blue-600 group-hover:bg-blue-100': node.tone === 'trigger',
                        'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white': node.tone === 'ai',
                        'bg-amber-50 text-amber-600 group-hover:bg-amber-100': node.tone === 'logic',
                      }"
                    >
                      <component :is="node.icon" :size="20" :stroke-width="1.75" />
                    </div>
                    <div class="min-w-0">
                      <p class="text-[10px] font-mono font-semibold uppercase tracking-widest mb-0.5"
                        :class="{
                          'text-blue-600': node.tone === 'trigger',
                          'text-primary': node.tone === 'ai',
                          'text-amber-600': node.tone === 'logic',
                        }"
                      >
                        {{ node.sub }}
                      </p>
                      <p class="text-sm font-bold text-gray-900 leading-snug truncate">
                        {{ node.label }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Branch Connector (3 → 4, 5) -->
            <div class="relative hidden sm:flex justify-center my-1 h-10" aria-hidden="true">
              <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 40">
                <!-- center down -->
                <path d="M200 0 L200 18" stroke="rgb(16 185 129 / 0.4)" stroke-width="1.5" fill="none" />
                <!-- horizontal split -->
                <path d="M100 18 L300 18" stroke="rgb(16 185 129 / 0.4)" stroke-width="1.5" fill="none" />
                <!-- down to 4 and 5 -->
                <path d="M100 18 L100 40" stroke="rgb(16 185 129 / 0.4)" stroke-width="1.5" fill="none" />
                <path d="M300 18 L300 40" stroke="rgb(16 185 129 / 0.4)" stroke-width="1.5" fill="none" />
                <!-- arrow heads -->
                <path d="M96 34 L100 40 L104 34 Z" fill="rgb(16 185 129 / 0.6)" />
                <path d="M296 34 L300 40 L304 34 Z" fill="rgb(16 185 129 / 0.6)" />
              </svg>
            </div>

            <!-- Row 2: Parallel actions (4, 5) -->
            <div class="relative grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 md:gap-x-10 mt-6 sm:mt-2 sm:max-w-[calc(66.666%+1rem)] sm:mx-auto md:max-w-[calc(66.666%+1.5rem)]">
              <div
                v-for="(node, idx) in workflowNodes.slice(3)"
                :key="node.id"
                class="node-cell relative"
                v-motion
                :initial="{ opacity: 0, y: 16 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (idx + 3) * 120 } }"
              >
                <div class="group relative bg-white rounded-xl border border-gray-200 px-4 py-4 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                  <span class="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white border border-gray-200 text-[10px] font-mono font-bold text-gray-500 flex items-center justify-center shadow-sm">
                    {{ node.id }}
                  </span>
                  <div class="flex items-center gap-3">
                    <div class="shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                      <component :is="node.icon" :size="20" :stroke-width="1.75" />
                    </div>
                    <div class="min-w-0">
                      <p class="text-[10px] font-mono font-semibold uppercase tracking-widest mb-0.5 text-emerald-600">
                        {{ node.sub }}
                      </p>
                      <p class="text-sm font-bold text-gray-900 leading-snug truncate">
                        {{ node.label }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Caption -->
            <p class="mt-10 text-center text-xs md:text-sm text-gray-500 leading-relaxed">
              <span class="font-semibold text-gray-700">예시 시나리오</span> · 신규 문의 메일이 도착하면 AI가 의도를 분류하고,
              긴급/컴플레인은 사내 메신저로 즉시 알림, 모든 문의는 자동으로 기록됩니다. 실제 고객 응대는 담당자가 직접 수행합니다.
              <br class="hidden sm:block" />
              <span class="text-gray-400">* 메신저(카카오워크 · 네이버웍스 · Teams · Slack 등)와 기록 도구(스프레드시트 · 노션 · DB 등)는 환경에 맞게 선택</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- Foundation Tools — 도구 중립적 병기 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-white py-16 md:py-20 overflow-hidden">
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 md:p-10 border border-primary/20 overflow-hidden"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <span class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40" aria-hidden="true" />
          <span class="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-primary/[0.06]" aria-hidden="true" />

          <div class="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            <!-- Label -->
            <div class="md:col-span-1">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <Wrench :size="20" :stroke-width="1.75" />
                </div>
                <div>
                  <p class="text-[10px] font-mono font-semibold text-primary uppercase tracking-widest">
                    Foundation Tools
                  </p>
                  <p class="text-base font-bold text-gray-900">기반 도구</p>
                </div>
              </div>
              <p class="text-sm text-gray-600 leading-relaxed">
                특정 도구에 종속되지 않고, 검증된 워크플로우 플랫폼을 프로젝트 특성에 맞게 선택해 사용합니다.
              </p>
            </div>

            <!-- Tool Tags -->
            <div class="md:col-span-2 flex flex-wrap gap-2">
              <span
                v-for="t in tools"
                :key="t"
                class="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-lg hover:border-primary/40 hover:text-primary transition-colors"
              >
                <CircleDot :size="14" :stroke-width="1.75" class="text-primary/70" />
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- CTA — AX는 시작, SI/DX로 확장 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-3 mb-5">
          <span class="h-px w-8 bg-primary/60" />
          <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
            Start Small  ·  Scale Naturally
          </span>
          <span class="h-px w-8 bg-primary/60" />
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          AX는 시작입니다. <br class="sm:hidden" />
          <span class="text-primary">SI / DX</span>로 자연스럽게 확장하세요.
        </h2>
        <p class="text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
          작은 자동화 PoC에서 출발해 데이터·프로세스의 빈틈을 발견하고,<br class="hidden sm:block" />
          전사 시스템 구축과 디지털 전환 컨설팅으로 자연스럽게 이어갑니다.
        </p>

        <RouterLink
          to="/contact"
          class="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
        >
          무료 진단 신청하기
          <ArrowRight :size="20" class="transition-transform group-hover:translate-x-1" />
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.step-card {
  will-change: transform, box-shadow;
}
</style>
