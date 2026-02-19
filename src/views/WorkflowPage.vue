<script setup lang="ts">
import { Waves, Palette, Zap, Plug, TrendingUp, Shield, Cloud, Code, Briefcase, Settings } from 'lucide-vue-next'
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="relative py-32 bg-linear-to-br from-blue-600 to-blue-800 overflow-hidden">
      <!-- Wave Animation -->
      <div class="absolute inset-0 opacity-10">
        <svg class="absolute bottom-0 w-full h-32 animate-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="0.3" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C672,128,768,192,864,192C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div
        class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-wider bg-clip-text text-transparent bg-linear-to-r from-white to-blue-200">
          AWOP
        </h1>
        <p class="text-xl sm:text-2xl mb-6 font-light tracking-wide text-blue-100">A Wave Of Process</p>
        <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-white">업무가 물 흐르듯 자연스럽게</h2>
        <p class="text-lg opacity-90 max-w-3xl mx-auto">
          복잡한 비즈니스 프로세스를 하나의 아름다운 흐름으로 만드는<br />
          차세대 워크플로우 자동화 플랫폼
        </p>
      </div>
    </section>

    <!-- Coming Soon Section -->
    <section class="py-32 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { duration: 600 } }"
        >
          <Waves :size="80" class="mx-auto mb-8 text-blue-600" />
          <span class="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-semibold mb-8">
            Coming Soon
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 mb-6">파도가 밀려옵니다</h2>
          <p class="text-xl text-gray-700 mb-4">
            업무의 물결을 타고 더 높이 날아오를<br />
            혁신적인 워크플로우 자동화 플랫폼을 준비하고 있습니다.
          </p>
          <p class="text-gray-600 mb-12">곧 만나보실 수 있습니다. 기대해 주세요!</p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/#contact"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              파도 타기 신청
            </router-link>
            <router-link
              to="/"
              class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              다른 서비스 보기
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="py-20 md:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 mb-4">Why Wave?</h2>
          <p class="text-lg text-gray-600">왜 물결인가요?</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(item, index) in philosophy"
            :key="item.id"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
            class="bg-white p-8 rounded-2xl shadow-card"
          >
            <h4 class="text-xl font-semibold text-blue-600 mb-3">{{ item.emoji }} {{ item.title }}</h4>
            <h5 class="text-lg font-medium text-gray-900 mb-3">{{ item.subtitle }}</h5>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 md:py-32 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 mb-4">Ride the Wave</h2>
          <p class="text-lg text-gray-600">파도를 타듯 쉽고 강력하게</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(feature, index) in features"
            :key="feature.id"
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 80 } }"
            class="text-center p-8 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:-translate-y-1 transition-all"
          >
            <component :is="feature.icon" :size="48" :stroke-width="1.5" class="mx-auto mb-4 text-blue-600" />
            <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ feature.title }}</h4>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>

        <!-- Stats -->
        <div
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 mb-8">Create Your Success Wave</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.id">
              <div class="text-4xl sm:text-5xl font-black text-blue-600 mb-2">{{ stat.value }}</div>
              <p class="text-gray-600">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Target Audience Section -->
    <section class="py-20 md:py-32 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(target, index) in targetAudience"
            :key="target.id"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 150 } }"
            class="text-center"
          >
            <component :is="target.icon" :size="48" :stroke-width="1.5" class="mx-auto mb-6 text-blue-600" />
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ target.title }}</h3>
            <p class="text-lg text-gray-700 mb-6">{{ target.subtitle }}</p>
            <ul class="text-left space-y-3">
              <li v-for="(item, i) in target.features" :key="i" class="flex items-start gap-2 text-gray-600">
                <span class="text-blue-600 shrink-0">{{ target.emoji }}</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Final CTA -->
        <div
          class="mt-16 bg-white rounded-2xl p-12 text-center shadow-card"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 mb-4">지금 바로 워크플로우의 물결을 시작하세요</h2>
          <p class="text-xl text-gray-700 mb-8">복잡한 업무 프로세스를 자연스러운 흐름으로 바꿔보세요</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="#" class="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all">
              무료로 시작하기
            </a>
            <a href="#" class="inline-block px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all">
              데모 요청하기
            </a>
          </div>
          <div class="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div>💡 설치 시간: 5분 이내</div>
            <div>💡 신용카드 불필요</div>
            <div>💡 전문가 온보딩 지원</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      philosophy: [
        {
          id: 'flow',
          emoji: '🌊',
          title: '자연스러운 흐름 (Natural Flow)',
          subtitle: '억지로 밀어붙이지 않습니다',
          description: '자연의 법칙처럼, 업무 프로세스가 가장 효율적인 경로로 자연스럽게 흘러가도록 설계했습니다.'
        },
        {
          id: 'connection',
          emoji: '🔗',
          title: '연결의 힘 (Power of Connection)',
          subtitle: '작은 물방울이 거대한 파도가 됩니다',
          description: '개별 태스크들이 하나로 연결되어 조직 전체를 변화시키는 강력한 워크플로우가 됩니다.'
        },
        {
          id: 'motion',
          emoji: '⚡',
          title: '지속적인 움직임 (Continuous Motion)',
          subtitle: '멈추지 않고 계속 흘러갑니다',
          description: '24/7 중단 없는 자동화로 비즈니스가 쉬지 않고 성장할 수 있도록 돕습니다.'
        },
        {
          id: 'adapt',
          emoji: '🎯',
          title: '적응력 (Adaptability)',
          subtitle: '장애물을 만나면 우회합니다',
          description: '예외 상황이나 변화에 유연하게 대응하며, 최적의 결과를 위해 스스로 적응합니다.'
        }
      ],
      features: [
        {
          id: 'builder',
          title: '시각적 워크플로우 빌더',
          description: '코딩 없이도 복잡한 업무 프로세스를 드래그 앤 드롭으로 쉽게 만들 수 있습니다.',
          icon: Palette
        },
        {
          id: 'performance',
          title: '혁신적 성능 엔진',
          description: '최신 동시 처리 기술로 기존 대비 100배 빠른 처리 속도와 99% 메모리 효율성을 실현했습니다.',
          icon: Zap
        },
        {
          id: 'nodes',
          title: '확장 가능한 노드 시스템',
          description: '표준 노드부터 커스텀 노드까지, 필요한 기능을 자유롭게 추가할 수 있습니다.',
          icon: Plug
        },
        {
          id: 'monitoring',
          title: '실시간 모니터링',
          description: '모든 워크플로우의 실행 상태를 실시간으로 추적하고 문제 발생 시 즉시 알림을 받습니다.',
          icon: TrendingUp
        },
        {
          id: 'security',
          title: '엔터프라이즈급 격리',
          description: '혁신적인 격리 기술로 수만 개 워크플로우가 서로 영향 없이 안전하게 동시 실행됩니다.',
          icon: Shield
        },
        {
          id: 'deployment',
          title: '클라우드 & 온프레미스',
          description: '클라우드와 온프레미스 환경 모두 지원하여 기업의 인프라 정책에 맞게 배포할 수 있습니다.',
          icon: Cloud
        }
      ],
      stats: [
        { id: 'memory', value: '99%', label: '메모리 효율성 달성' },
        { id: 'speed', value: '100x', label: '기존 대비 빠른 처리 속도' },
        { id: 'services', value: '500+', label: '연동 가능한 서비스' },
        { id: 'workflows', value: '∞', label: '수만 개 워크플로우 동시 실행' }
      ],
      targetAudience: [
        {
          id: 'developers',
          title: 'For Developers',
          subtitle: '개발자가 사랑하는 워크플로우 플랫폼',
          emoji: '✨',
          icon: Code,
          features: [
            '차세대 동시 처리 기술로 99% 메모리 효율성 달성',
            'REST API 우선 설계로 완벽한 통합',
            '확장 가능한 아키텍처로 무제한 성장',
            '완전 격리된 실행 환경으로 안전성 보장'
          ]
        },
        {
          id: 'business',
          title: 'For Business Leaders',
          subtitle: '조직의 생산성을 혁신하세요',
          emoji: '💼',
          icon: Briefcase,
          features: [
            '혁신적 성능 기술로 99% 운영비용 절감',
            '24/7 중단 없는 대용량 프로세스 처리',
            '실시간 모니터링으로 투명한 운영',
            '무제한 확장으로 비즈니스 성장 지원'
          ]
        },
        {
          id: 'admins',
          title: 'For IT Administrators',
          subtitle: '안전하고 관리하기 쉬운 플랫폼',
          emoji: '🛡️',
          icon: Settings,
          features: [
            '엔터프라이즈급 보안 및 권한 관리',
            '클라우드/온프레미스 하이브리드 지원',
            '중앙 집중식 모니터링 및 로그 관리',
            '백업 및 재해 복구 시스템 내장'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes wave {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-wave {
  animation: wave 20s linear infinite;
}
</style>
