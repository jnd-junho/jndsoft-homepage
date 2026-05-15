<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  LayoutDashboard, Table2, FormInput, KeyRound, Menu as MenuIcon,
  Palette, Smartphone, Accessibility,
  Briefcase, BarChart3, Settings, ArrowRight, ExternalLink
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

// 제공 모듈 — UI 공통 기반 범위 (권한/감사로그/배치는 미포함)
const modules = [
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
    <section class="bg-gray-50 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.25em] mb-4">
          BackOffice Starter Kit
        </p>
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
            class="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            데모 사이트 열기
            <ExternalLink :size="18" />
          </a>
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:border-primary hover:text-primary transition-all duration-300"
          >
            우리 프로젝트에 적용 문의
            <ArrowRight :size="18" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 데모 사이트 미리보기 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-white py-20 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            직접 보고 판단하세요
          </h2>
          <p class="text-base text-gray-600">
            실제 동작하는 데모입니다. 클릭하며 체험해보실 수 있습니다.
          </p>
        </div>

        <!-- iframe (showIframe=true 시) -->
        <div
          v-if="showIframe"
          class="rounded-2xl overflow-hidden border border-gray-200 shadow-card"
        >
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
          class="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 md:p-12 text-center"
        >
          <div class="max-w-md mx-auto">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
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
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              새 창에서 데모 열기
              <ExternalLink :size="16" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 제공 모듈 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-gray-50 py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            제공 모듈
          </h2>
          <p class="text-base text-gray-600 max-w-2xl mx-auto">
            대부분의 백오피스에 공통으로 필요한 화면을 검증된 형태로 제공합니다.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="m in modules"
            :key="m.id"
            class="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-sm transition-all"
          >
            <div class="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <component :is="m.icon" :size="22" :stroke-width="1.75" />
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-1.5">{{ m.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ m.description }}</p>
          </div>
        </div>

        <!-- 범위 명확화 (오해 방지) -->
        <div class="max-w-3xl mx-auto mt-10 bg-white rounded-xl p-5 border border-gray-200">
          <p class="text-sm text-gray-700 leading-relaxed">
            <span class="font-semibold text-gray-900">제공 범위에 대해</span> ·
            이 자산은 백오피스 UI의 공통 기반을 제공합니다.
            권한 관리·감사 로그·배치 시스템 등 기능적 모듈은 프로젝트 요구사항에 맞춰 별도로 구현합니다.
          </p>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 차별점 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-white py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            왜 검증된 공통 기반인가
          </h2>
          <p class="text-base text-gray-600">
            처음부터 만들지 않아도 되는 부분과, 처음부터 다듬어 둔 부분.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="d in differentiators"
            :key="d.id"
            class="text-center p-6"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
              <component :is="d.icon" :size="28" :stroke-width="1.5" />
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-2">{{ d.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ d.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ─────────────────────────────────────────────── -->
    <!-- 사용 시나리오 -->
    <!-- ─────────────────────────────────────────────── -->
    <section class="bg-gray-50 py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            어떤 프로젝트에 적합한가
          </h2>
          <p class="text-base text-gray-600">
            아래 유형의 프로젝트라면 즉시 출발할 수 있습니다.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <div
            v-for="c in useCases"
            :key="c.id"
            class="bg-white rounded-xl p-6 border border-gray-200"
          >
            <div class="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
              <component :is="c.icon" :size="22" :stroke-width="1.75" />
            </div>
            <h3 class="text-base font-semibold text-gray-900 mb-1.5">{{ c.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed">{{ c.description }}</p>
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
          이 공통 기반 위에<br class="sm:hidden" />
          당신의 비즈니스 로직을 얹어드립니다
        </h2>
        <p class="text-base text-gray-600 mb-8">
          프로젝트 요구사항을 알려주시면 적용 가능 범위와 일정을 검토해드립니다.
        </p>
        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          프로젝트 문의
          <ArrowRight :size="20" />
        </RouterLink>
      </div>
    </section>
  </main>
</template>
