<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { CheckCircle2, Mail, Home } from 'lucide-vue-next'

const serverMessage = computed<string | null>(() => {
  const fromState = (history.state as { message?: unknown } | null)?.message
  return typeof fromState === 'string' && fromState.length > 0 ? fromState : null
})
</script>

<template>
  <main class="pt-32 pb-20 bg-gray-50 min-h-screen">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl p-8 sm:p-12 shadow-sm text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
          <CheckCircle2 :size="48" :stroke-width="1.5" />
        </div>

        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          문의가 접수되었습니다
        </h1>
        <p v-if="serverMessage" class="text-gray-600 mb-8">{{ serverMessage }}</p>
        <p v-else class="text-gray-600 mb-8">
          영업일 기준 <strong class="text-gray-900">24시간 이내</strong>에 담당자가 회신드리겠습니다.
        </p>

        <div class="border-t border-gray-200 pt-6 mb-8">
          <p class="text-sm text-gray-500 mb-3">회신이 지연되거나 추가 문의가 필요하시면</p>
          <a
            href="mailto:business@jndsoft.co.kr"
            class="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <Mail :size="18" />
            business@jndsoft.co.kr
          </a>
        </div>

        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
        >
          <Home :size="18" />
          홈으로 돌아가기
        </RouterLink>
      </div>
    </div>
  </main>
</template>
