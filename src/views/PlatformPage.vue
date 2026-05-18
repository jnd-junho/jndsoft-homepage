<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  LayoutDashboard, Table2, FormInput, KeyRound, Menu as MenuIcon,
  Palette, Smartphone, Accessibility,
  ShieldCheck, ScrollText, Repeat,
  Briefcase, BarChart3, Settings, ArrowRight, ExternalLink,
  Target, Cog, Layers as LayersIcon, Server
} from 'lucide-vue-next'

// ─────────────────────────────────────────────────────
// PLACEHOLDER: 데모 사이트 임베드 정책 확인 필요
// 옵션:
//   1) iframe 임베드 가능 시: showIframe = true 로 변경
//   2) iframe 차단 시 (CSP/X-Frame-Options): showIframe = false 유지,
//      대신 스크린샷 이미지 또는 새 창 열기 버튼만 제공
// ─────────────────────────────────────────────────────
const demoUrl = 'https://adm.jndsoft.co.kr'
const showIframe = ref(false)

// 제공 모듈 — RAW 레벨 기술 프레임워크 완성, 프로젝트별 추가는 비즈니스 로직뿐
// A. UI 공통 기반 (6종) + B. 운영 기능 (3종)
const uiModules = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    title: '대시보드',
    description: '주요 지표·차트·요약 카드 등 모니터링 화면 템플릿'
  },
  {
    id: 'list',
    icon: Table2,
    title: 'CRUD 목록',
    description: '검색·필터·정렬·페이지네이션을 갖춘 표준 목록 화면'
  },
  {
    id: 'form',
    icon: FormInput,
    title: '입력 폼',
    description: '검증·에러 표시·다단계 입력 등 폼 패턴 일관 적용'
  },
  {
    id: 'account',
    icon: KeyRound,
    title: '계정·로그인',
    description: '로그인·세션·비밀번호 변경 등 인증 UI 화면'
  },
  {
    id: 'menu',
    icon: MenuIcon,
    title: '메뉴·네비게이션',
    description: '사이드바·헤더·브레드크럼 등 일관된 네비게이션 구조'
  },
  {
    id: 'theme',
    icon: Palette,
    title: '디자인 시스템',
    description: '컬러·타이포·여백 토큰화로 시각 일관성 보장'
  }
]

const opsModules = [
  {
    id: 'permission',
    icon: ShieldCheck,
    title: '권한 관리',
    description: '역할·사용자별 접근 권한을 화면에서 직접 설정·운영'
  },
  {
    id: 'audit',
    icon: ScrollText,
    title: '감사 로그',
    description: '주요 동작·데이터 변경 이력을 자동 수집·조회'
  },
  {
    id: 'batch',
    icon: Repeat,
    title: '배치 시스템',
    description: '정기 작업의 등록·실행·결과 모니터링을 한 화면에서'
  }
]

// 아키텍처 레이어 — 비즈니스 톤 (기술 약어·로고 제외)
interface ArchitectureLayer {
  id: string
  icon: typeof Target
  title: string
  subtitle: string
  description: string
  items: string[]
  status: 'add' | 'ready'
}

const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'business',
    icon: Target,
    title: '비즈니스 로직',
    subtitle: 'Business Layer',
    description: '프로젝트마다 다르게 정의되는 영역입니다.',
    items: ['화면 흐름', '데이터 모델', '업무 규칙', '도메인 정책'],
    status: 'add'
  },
  {
    id: 'operation',
    icon: Cog,
    title: '운영 기능',
    subtitle: 'Operation Layer',
    description: '관리자가 화면에서 직접 운영할 수 있는 시스템 기능입니다.',
    items: ['권한 관리', '감사 로그', '배치 시스템'],
    status: 'ready'
  },
  {
    id: 'ui',
    icon: LayersIcon,
    title: 'UI 공통 기반',
    subtitle: 'User Interface Layer',
    description: '대부분의 백오피스에서 공통으로 필요한 화면 자산입니다.',
    items: ['대시보드', 'CRUD 목록', '입력 폼', '계정·로그인', '메뉴', '디자인 시스템'],
    status: 'ready'
  },
  {
    id: 'core',
    icon: Server,
    title: 'RAW 레벨 기술 프레임워크',
    subtitle: 'Core Framework',
    description: '인증·세션·로깅·트랜잭션 등 시스템 동작의 토대입니다.',
    items: ['인증·세션', '로깅·모니터링', '트랜잭션·예외 처리', '인프라 연동'],
    status: 'ready'
  }
]

const activeLayerId = ref<string>('business')
const setActiveLayer = (id: string) => { activeLayerId.value = id }

// 사용 시나리오 (어떤 프로젝트에 적합한가)
const useCases = [
  {
    id: 'admin',
    icon: Briefcase,
    title: '내부 관리자 시스템',
    description: '직원·운영자가 사용하는 백오피스. 빠른 화면 제공이 핵심인 경우.'
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: '운영 대시보드',
    description: '실시간 지표 모니터링·보고서 화면이 필요한 경우.'
  },
  {
    id: 'internal',
    icon: Settings,
    title: '사내 업무 도구',
    description: '특정 업무 흐름을 디지털화하는 사내 전용 시스템.'
  }
]

// 차별점
const differentiators = [
  {
    id: 'consistency',
    icon: Palette,
    title: '일관된 디자인 시스템',
    description: '컬러·타이포·여백·컴포넌트가 토큰 기반으로 정의되어 화면 전반의 시각적 일관성을 유지합니다.'
  },
  {
    id: 'responsive',
    icon: Smartphone,
    title: '반응형 대응',
    description: '데스크탑·태블릿·모바일 모두 검토된 레이아웃. 별도 모바일 화면 작업 부담을 줄입니다.'
  },
  {
    id: 'a11y',
    icon: Accessibility,
    title: '접근성 고려',
    description: '키보드 네비게이션·시맨틱 마크업 등 기본 접근성 가이드를 반영한 컴포넌트 구조.'
  }
]
</script>

<template>
  <main class="pt-20">
    <!-- ─────────────────────────────────────────────── -->
    <!-- Hero -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="background-image: linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px); background-size: 60px 60px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center gap-3 mb-5">
          <span class="h-px w-8 bg-primary/60" />
          <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
            BackOffice Starter Kit
          </span>
          <span class="h-px w-8 bg-primary/60" />
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          BackOffice 시스템의 <span class="text-primary">UI 공통 기반</span>
        </h1>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
          대시보드·목록·폼·계정·메뉴 등 백오피스에 공통으로 필요한 UI를
          이미 검증된 형태로 제공합니다.<br class="hidden sm:block" />
          비즈니스 로직만 더하면 됩니다.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            :href="demoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            데모 사이트 열기
            <ExternalLink :size="18" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <RouterLink
            to="/contact"
            class="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
          >
            우리 프로젝트에 적용 문의
            <ArrowRight :size="18" class="transition-transform group-hover:translate-x-1" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 데모 사이트 미리보기 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-white py-20 md:py-24 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.025] pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px); background-size: 28px 28px;"
        aria-hidden="true"
      />
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Live Demo
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            직접 보고 <span class="text-primary">판단하세요</span>
          </h2>
          <p class="text-base text-gray-600">
            실제 동작하는 데모입니다. 클릭하며 체험해보실 수 있습니다.
          </p>
        </div>

        <!-- iframe (showIframe=true 시) -->
        <div
          v-if="showIframe"
          class="relative rounded-2xl overflow-hidden border border-gray-200 shadow-card"
        >
          <span class="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-2xl z-10" aria-hidden="true" />
          <iframe
            :src="demoUrl"
            class="w-full h-[600px] md:h-[700px] bg-white"
            title="JnDSOFT BackOffice Demo"
            loading="lazy"
            referrerpolicy="no-referrer"
          />
        </div>

        <!-- Fallback: 스크린샷 placeholder + 외부 링크 -->
        <div
          v-else
          class="relative rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 md:p-12 text-center overflow-hidden"
        >
          <span class="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-primary/[0.05]" aria-hidden="true" />
          <span class="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-primary/[0.04]" aria-hidden="true" />
          <div class="relative max-w-md mx-auto">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 shadow-sm">
              <LayoutDashboard :size="32" :stroke-width="1.5" />
            </div>
            <p class="text-base font-semibold text-gray-900 mb-2">
              데모 사이트 미리보기
            </p>
            <p class="text-sm text-gray-600 mb-2 leading-relaxed">
              [PLACEHOLDER: 데모 사이트 스크린샷 이미지를 여기에 배치하거나,
              iframe 임베드 정책 확인 후 <code class="text-xs bg-gray-200 px-1.5 py-0.5 rounded">showIframe</code> 값을
              <code class="text-xs bg-gray-200 px-1.5 py-0.5 rounded">true</code>로 변경하세요.]
            </p>
            <p class="text-xs text-gray-500 mb-6">
              * adm.jndsoft.co.kr 의 X-Frame-Options · CSP 헤더에 따라 iframe 임베드 가능 여부 확인 필요
            </p>
            <a
              :href="demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:shadow-md hover:shadow-primary/30 transition-all"
            >
              새 창에서 데모 열기
              <ExternalLink :size="16" class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- Architecture (레이어 스택) -->
    <!-- ─────────────────────────────────────────────── -->
    <section id="architecture" class="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.025] pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px); background-size: 28px 28px;"
        aria-hidden="true"
      />
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
          <div class="inline-flex items-center gap-3 mb-5">
            <span class="h-px w-8 bg-primary/60" />
            <span class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Architecture
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            프로젝트마다 만드는 영역은 <span class="text-primary">최상단</span>뿐입니다
          </h2>
          <p class="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            RAW 레벨 기술부터 운영 기능까지 — 하단 세 레이어는 이미 완성되어 있습니다.<br class="hidden sm:block" />
            프로젝트에서는 비즈니스 로직만 추가합니다.
          </p>
        </div>

        <!-- Architecture Stack -->
        <div class="space-y-3 md:space-y-4">
          <article
            v-for="(layer, idx) in architectureLayers"
            :key="layer.id"
            class="arch-layer group relative rounded-2xl border-2 transition-all duration-300 overflow-hidden"
            :class="[
              layer.status === 'add'
                ? 'bg-white border-dashed border-gray-300 hover:border-primary/40'
                : 'bg-white border-solid border-primary/30 hover:border-primary/60 hover:shadow-lg',
              activeLayerId === layer.id ? '-translate-y-0.5 shadow-lg' : ''
            ]"
            @mouseenter="setActiveLayer(layer.id)"
            @click="setActiveLayer(layer.id)"
          >
            <!-- Status badge bar (top) -->
            <span
              class="absolute top-0 left-0 right-0 h-1 transition-opacity"
              :class="layer.status === 'add'
                ? 'bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300'
                : 'bg-gradient-to-r from-primary via-primary/80 to-primary'"
              aria-hidden="true"
            />
            <!-- Outline level number -->
            <span
              class="absolute -top-3 -right-2 text-7xl md:text-8xl font-black leading-none select-none transition-colors duration-300"
              :class="layer.status === 'add' ? 'text-gray-100' : 'text-primary/[0.08]'"
              aria-hidden="true"
            >
              L{{ idx + 1 }}
            </span>

            <div class="relative p-5 md:p-6 lg:p-7">
              <div class="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <!-- Left: icon + title -->
                <div class="md:w-1/3 shrink-0">
                  <div class="flex items-center gap-3 mb-2">
                    <div
                      class="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300"
                      :class="layer.status === 'add'
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30'"
                    >
                      <component :is="layer.icon" :size="22" :stroke-width="1.75" />
                    </div>
                    <!-- Status badge -->
                    <span
                      class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider"
                      :class="layer.status === 'add'
                        ? 'bg-gray-100 text-gray-500 border border-dashed border-gray-300'
                        : 'bg-primary/10 text-primary'"
                    >
                      <span class="w-1.5 h-1.5 rounded-full" :class="layer.status === 'add' ? 'bg-gray-400' : 'bg-primary'" />
                      {{ layer.status === 'add' ? '프로젝트 추가' : '구현 완료' }}
                    </span>
                  </div>
                  <h3 class="text-lg md:text-xl font-bold text-gray-900 mb-1">{{ layer.title }}</h3>
                  <p class="text-xs font-mono text-gray-400 uppercase tracking-widest">{{ layer.subtitle }}</p>
                </div>

                <!-- Right: description + items -->
                <div class="md:flex-1 md:pl-6 md:border-l md:border-gray-200">
                  <p class="text-sm text-gray-700 mb-3 leading-relaxed">
                    {{ layer.description }}
                  </p>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="item in layer.items"
                      :key="item"
                      class="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md border transition-colors"
                      :class="layer.status === 'add'
                        ? 'bg-white border-dashed border-gray-300 text-gray-600'
                        : 'bg-gray-50 border-gray-200 text-gray-700 group-hover:border-primary/30'"
                    >
                      {{ item }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Bottom message -->
        <div class="mt-10 text-center max-w-3xl mx-auto">
          <p class="text-sm md:text-base text-gray-600 leading-relaxed">
            <span class="font-semibold text-gray-900">L2 · L3 · L4</span>는 이미 완성되어 있고,
            <span class="font-semibold text-primary">L1 비즈니스 로직만</span> 프로젝트 요구사항에 맞춰 추가합니다.
            그래서 개발 일정·비용이 예측 가능합니다.
          </p>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 제공 모듈 -->
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
              Modules
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            <span class="text-primary">기술 프레임워크</span>는 이미 완성되어 있습니다
          </h2>
          <p class="text-base text-gray-600 max-w-2xl mx-auto">
            UI부터 운영 기능까지 — RAW 레벨 기술은 구현 완료. 프로젝트에서 추가하는 것은 비즈니스 로직뿐입니다.
          </p>
        </div>

        <!-- UI 공통 기반 -->
        <div class="mb-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">A</span>
            <h3 class="text-base md:text-lg font-bold text-gray-900">UI 공통 기반</h3>
            <span class="text-xs font-mono text-gray-400 uppercase tracking-widest">User Interface</span>
            <span class="flex-1 h-px bg-gray-200" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <article
              v-for="(m, idx) in uiModules"
              :key="m.id"
              class="module-card group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-xl" aria-hidden="true" />
              <span
                class="absolute -bottom-4 -right-2 text-6xl font-black text-gray-100/80 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
                aria-hidden="true"
              >
                A{{ idx + 1 }}
              </span>
              <div class="relative">
                <div class="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                  <component :is="m.icon" :size="22" :stroke-width="1.75" />
                </div>
                <h4 class="text-base font-bold text-gray-900 mb-1.5">{{ m.title }}</h4>
                <p class="text-sm text-gray-600 leading-relaxed">{{ m.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <!-- 운영 기능 (시스템 레벨) -->
        <div>
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">B</span>
            <h3 class="text-base md:text-lg font-bold text-gray-900">운영 기능</h3>
            <span class="text-xs font-mono text-gray-400 uppercase tracking-widest">Operation</span>
            <span class="flex-1 h-px bg-gray-200" />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <article
              v-for="(m, idx) in opsModules"
              :key="m.id"
              class="module-card group relative bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-xl" aria-hidden="true" />
              <span
                class="absolute -bottom-4 -right-2 text-6xl font-black text-gray-100/80 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
                aria-hidden="true"
              >
                B{{ idx + 1 }}
              </span>
              <div class="relative">
                <div class="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                  <component :is="m.icon" :size="22" :stroke-width="1.75" />
                </div>
                <h4 class="text-base font-bold text-gray-900 mb-1.5">{{ m.title }}</h4>
                <p class="text-sm text-gray-600 leading-relaxed">{{ m.description }}</p>
              </div>
            </article>
          </div>
        </div>

        <!-- 핵심 메시지: 추가는 비즈니스 로직뿐 -->
        <div class="relative max-w-3xl mx-auto mt-10 bg-gradient-to-br from-primary/5 to-white rounded-xl p-5 md:p-6 border border-primary/20 overflow-hidden">
          <span class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40" aria-hidden="true" />
          <span class="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-primary/[0.06]" aria-hidden="true" />
          <div class="relative">
            <p class="text-sm font-semibold text-primary mb-2">
              프로젝트에서 추가하는 것
            </p>
            <p class="text-sm text-gray-700 leading-relaxed">
              UI·운영 기능 모두 <span class="font-semibold text-gray-900">RAW 레벨 기술 프레임워크가 이미 완성</span>되어 있습니다.
              프로젝트마다 추가되는 것은 <span class="font-semibold text-gray-900">고객 비즈니스 로직</span>뿐 — 화면 흐름, 데이터 모델, 규칙 정의.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 차별점 -->
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
              Differentiators
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            왜 검증된 <span class="text-primary">공통 기반</span>인가
          </h2>
          <p class="text-base text-gray-600">
            처음부터 만들지 않아도 되는 부분과, 처음부터 다듬어 둔 부분.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <article
            v-for="(d, idx) in differentiators"
            :key="d.id"
            class="diff-card group relative bg-gray-50 rounded-xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden"
          >
            <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-xl" aria-hidden="true" />
            <span
              class="absolute -bottom-3 -right-1 text-5xl font-black text-gray-200/60 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
              aria-hidden="true"
            >
              0{{ idx + 1 }}
            </span>
            <div class="relative">
              <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <component :is="d.icon" :size="28" :stroke-width="1.5" />
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-2">{{ d.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ d.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 사용 시나리오 -->
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
              Use Cases
            </span>
            <span class="h-px w-8 bg-primary/60" />
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
            어떤 프로젝트에 <span class="text-primary">적합한가</span>
          </h2>
          <p class="text-base text-gray-600">
            아래 유형의 프로젝트라면 즉시 출발할 수 있습니다.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <article
            v-for="(c, idx) in useCases"
            :key="c.id"
            class="usecase-card group relative bg-white rounded-xl p-6 md:p-7 border border-gray-200 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span class="absolute top-0 left-0 w-10 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-tl-xl" aria-hidden="true" />
            <span
              class="absolute -bottom-3 -right-1 text-5xl font-black text-gray-100/80 group-hover:text-primary/10 leading-none select-none transition-colors duration-300"
              aria-hidden="true"
            >
              0{{ idx + 1 }}
            </span>
            <div class="relative">
              <div class="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <component :is="c.icon" :size="22" :stroke-width="1.75" />
              </div>
              <h3 class="text-base font-bold text-gray-900 mb-1.5">{{ c.title }}</h3>
              <p class="text-sm text-gray-600 leading-relaxed">{{ c.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- CTA -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="relative bg-white py-20 md:py-24 overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.025] pointer-events-none"
        style="background-image: radial-gradient(circle, rgba(0,0,0,1) 1px, transparent 1px); background-size: 28px 28px;"
        aria-hidden="true"
      />
      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          이 <span class="text-primary">공통 기반</span> 위에<br class="sm:hidden" />
          당신의 비즈니스 로직을 얹어드립니다
        </h2>
        <p class="text-base text-gray-600 mb-8">
          프로젝트 요구사항을 알려주시면 적용 가능 범위와 일정을 검토해드립니다.
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
.module-card,
.diff-card,
.usecase-card {
  will-change: transform, box-shadow;
}
</style>
