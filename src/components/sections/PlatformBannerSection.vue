<script setup lang="ts">
import { Boxes, Bot, Globe } from 'lucide-vue-next'

const highlights = [
  {
    id: 'components',
    icon: Boxes,
    value: '200+',
    label: '검증된 컴포넌트'
  },
  {
    id: 'standards',
    icon: Globe,
    value: 'Global',
    label: '표준 기술 스택'
  },
  {
    id: 'ai',
    icon: Bot,
    value: 'AI',
    label: '자동 품질 검증'
  }
]
</script>

<template>
  <section class="py-16 md:py-24 bg-gradient-to-br from-primary to-[#15b862] relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <!-- Text Content -->
        <div
          class="flex-1 text-white text-center lg:text-left"
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <p class="text-sm font-medium uppercase tracking-widest opacity-80 mb-3">Our Technology Foundation</p>
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">확장형 BackOffice 플랫폼</h2>
          <p class="text-lg opacity-90 mb-8 leading-relaxed">
            SI 프로젝트부터 스타트업 MVP까지, 모든 서비스의 공통 기반.<br class="hidden sm:block" />
            검증된 컴포넌트와 AI 품질 검증으로 개발 생산성을 극대화합니다.
          </p>
          <span
            class="inline-flex items-center gap-2 px-8 py-4 bg-white/60 text-primary/70 rounded-lg font-semibold shadow-lg cursor-default"
          >
            준비중
          </span>
        </div>

        <!-- Key Highlights -->
        <div
          class="flex-1 w-full"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
        >
          <div class="grid grid-cols-3 gap-4 sm:gap-6">
            <div
              v-for="item in highlights"
              :key="item.id"
              class="text-center bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-colors duration-300"
            >
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/20 flex items-center justify-center">
                <component :is="item.icon" :size="24" :stroke-width="1.5" class="text-white" />
              </div>
              <p class="text-2xl sm:text-3xl font-bold text-white mb-1">{{ item.value }}</p>
              <p class="text-sm text-white/80">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
