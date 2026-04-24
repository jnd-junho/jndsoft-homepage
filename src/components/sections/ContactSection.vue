<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Mail, ArrowRight, Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Contact
        </h2>
        <p class="text-lg text-gray-600">
          프로젝트 문의는 언제든지 환영합니다
        </p>
      </div>

      <!-- Map + CTA (2열) -->
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-6"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <!-- Map -->
        <div class="lg:col-span-2 rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
          <iframe
            src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EC%84%9C%EA%B5%AC+%EC%96%91%EC%B2%9C%EB%A1%9C+424+%EB%8D%B0%EC%8B%9C%EC%95%99%ED%94%8C%EB%A0%89%EC%8A%A4+%EC%A7%80%EC%8B%9D%EC%82%B0%EC%97%85%EC%84%BC%ED%84%B0&output=embed"
            width="100%"
            height="450"
            style="border:0;"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full min-h-[320px] lg:min-h-[450px]"
          />
        </div>

        <!-- CTA Card -->
        <div class="lg:col-span-1 order-1 lg:order-2">
          <div class="h-full bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white flex flex-col">
            <h3 class="text-2xl font-bold mb-3 leading-tight">
              프로젝트를<br />시작하세요
            </h3>
            <p class="text-sm text-white/90 mb-6 leading-relaxed">
              요구사항을 남겨주시면 영업일 기준 24시간 이내 담당자가 회신드립니다.
            </p>

            <ul class="space-y-2 mb-8 text-sm text-white/90">
              <li class="flex items-center gap-2">
                <Clock :size="16" :stroke-width="2" />
                <span>24시간 이내 응답</span>
              </li>
              <li class="flex items-center gap-2">
                <Mail :size="16" :stroke-width="2" />
                <span>무료 견적 상담</span>
              </li>
            </ul>

            <RouterLink
              to="/contact"
              class="mt-auto inline-flex items-center justify-between gap-2 px-5 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-50 transition-colors group"
            >
              <span>문의하기</span>
              <ArrowRight :size="18" class="transition-transform group-hover:translate-x-1" />
            </RouterLink>

            <a
              href="mailto:business@jndsoft.co.kr"
              class="mt-3 text-center text-xs text-white/80 hover:text-white transition-colors"
            >
              또는 이메일로 직접 문의
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
