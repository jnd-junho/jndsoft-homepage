<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ChevronLeft } from 'lucide-vue-next'

const router = useRouter()

const goBack = () => {
  if (window.history.state?.back) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <main class="pt-32 pb-20 bg-white min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        type="button"
        class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        @click="goBack"
      >
        <ChevronLeft :size="16" />
        이전으로
      </button>

      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        개인정보 처리방침
      </h1>
      <p class="text-sm text-gray-500 mb-6">
        시행일: 2026년 4월 24일
      </p>

      <div class="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">1. 수집 항목 및 목적</h2>
          <p class="mb-2">
            주식회사 제이앤디소프트(이하 "회사")는 프로젝트 문의 접수 및 회신을 위해 문의 폼을 통해
            아래 항목을 수집합니다.
          </p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>필수:</strong> 이메일, 회사 또는 소속, 요구사항</li>
            <li><strong>선택:</strong> 담당자명, 연락처, 프로젝트 유형, 예상 예산, 희망 일정</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">2. 보관 기간</h2>
          <p>
            접수일로부터 <strong>3년간</strong> 보관한 후 지체 없이 파기합니다. 계약으로 이어진 경우
            해당 프로젝트의 보관 정책을 따릅니다.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">3. 제3자 제공</h2>
          <p>
            회사는 수집한 개인정보를 제3자에게 제공하지 않습니다. 다만 관련 법령에 따른 수사기관의
            적법한 요청이 있는 경우에 한해 예외적으로 제공할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">4. 이용자의 권리</h2>
          <p>
            이용자는 언제든지 본인 개인정보에 대해 열람·정정·삭제·처리정지를 요청하거나 수집·이용
            동의를 철회할 수 있습니다. 아래 연락처로 이메일 요청 시 즉시 조치합니다.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-3">5. 개인정보 보호책임자</h2>
          <p>
            제이앤디소프트 플랫폼 팀 ·
            <a href="mailto:business@jndsoft.co.kr" class="text-primary hover:underline">
              business@jndsoft.co.kr
            </a>
          </p>
        </section>
      </div>
    </div>
  </main>
</template>
