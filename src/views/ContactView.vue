<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { Mail, Send, AlertCircle, MapPin, Phone } from 'lucide-vue-next'
import {
  submitInquiry,
  type BudgetRange,
  type InquiryPayload,
  type ProjectType,
} from '../lib/inquiryApi'
import {
  FIELD_LIMITS,
  validateEmail,
  validateOptional,
  validateRequired,
} from '../lib/validators'

const router = useRouter()

interface FormState {
  email: string
  companyName: string
  contactName: string
  phone: string
  projectType: ProjectType | ''
  budgetRange: BudgetRange | ''
  desiredSchedule: string
  requirementBody: string
  privacyConsent: boolean
  website: string
}

const form = reactive<FormState>({
  email: '',
  companyName: '',
  contactName: '',
  phone: '',
  projectType: '',
  budgetRange: '',
  desiredSchedule: '',
  requirementBody: '',
  privacyConsent: false,
  website: '',
})

const errors = reactive<Record<string, string | undefined>>({})
const submitting = ref(false)
const submitError = ref<string | null>(null)
const retryLockSeconds = ref(0)
let retryTimerId: number | undefined

const projectTypeOptions: { value: ProjectType; label: string }[] = [
  { value: 'si', label: 'SI 시스템 구축' },
  { value: 'mvp', label: 'MVP / 스타트업 프로토타입' },
  { value: 'webapp', label: '웹 애플리케이션' },
  { value: 'homepage', label: '회사/서비스 홈페이지' },
  { value: 'simple', label: '간단한 유지보수/개선' },
  { value: 'other', label: '기타' },
]

const budgetRangeOptions: { value: BudgetRange; label: string }[] = [
  { value: 'under_10m', label: '1천만 원 미만' },
  { value: '10m_30m', label: '1천만 ~ 3천만 원' },
  { value: '30m_100m', label: '3천만 ~ 1억 원' },
  { value: '100m_300m', label: '1억 ~ 3억 원' },
  { value: 'over_300m', label: '3억 원 이상' },
  { value: 'undecided', label: '미정 / 상담 후 결정' },
]

const isSubmittable = computed(() => {
  return (
    !submitting.value &&
    retryLockSeconds.value === 0 &&
    form.email.trim().length > 0 &&
    form.companyName.trim().length > 0 &&
    form.requirementBody.trim().length > 0 &&
    form.privacyConsent
  )
})

function validate(): boolean {
  for (const key of Object.keys(errors)) errors[key] = undefined

  errors.email = validateEmail(form.email) ?? undefined
  errors.company_name = validateRequired(form.companyName, '회사 또는 소속', FIELD_LIMITS.companyName) ?? undefined
  errors.requirement_body =
    validateRequired(form.requirementBody, '요구사항', FIELD_LIMITS.requirementBody) ?? undefined
  errors.contact_name =
    validateOptional(form.contactName, '담당자명', FIELD_LIMITS.contactName) ?? undefined
  errors.phone = validateOptional(form.phone, '연락처', FIELD_LIMITS.phone) ?? undefined
  errors.desired_schedule =
    validateOptional(form.desiredSchedule, '희망 일정', FIELD_LIMITS.desiredSchedule) ?? undefined

  if (!form.privacyConsent) errors.privacy_consent = '개인정보 수집 동의가 필요합니다.'

  return Object.values(errors).every((v) => !v)
}

function startRetryLock(seconds: number) {
  retryLockSeconds.value = seconds
  if (retryTimerId) window.clearInterval(retryTimerId)
  retryTimerId = window.setInterval(() => {
    retryLockSeconds.value -= 1
    if (retryLockSeconds.value <= 0) {
      retryLockSeconds.value = 0
      if (retryTimerId) window.clearInterval(retryTimerId)
    }
  }, 1000)
}

async function handleSubmit() {
  submitError.value = null
  if (!validate()) return

  if (form.website.trim().length > 0) {
    // 허니팟 감지: 조용히 성공 페이지처럼 처리하지 않고 그냥 무시
    return
  }

  submitting.value = true
  const payload: InquiryPayload = {
    email: form.email.trim(),
    company_name: form.companyName.trim(),
    requirement_body: form.requirementBody.trim(),
    privacy_consent: true,
    source: 'homepage_contact',
    contact_name: form.contactName.trim() || null,
    phone: form.phone.trim() || null,
    project_type: form.projectType || null,
    budget_range: form.budgetRange || null,
    desired_schedule: form.desiredSchedule.trim() || null,
  }

  const result = await submitInquiry(payload)
  submitting.value = false

  if (result.ok) {
    await router.push({
      path: '/contact/thanks',
      state: { inquiryId: result.id, message: result.message ?? null },
    })
    return
  }

  if (result.status === 422) {
    if (result.kind === 'email_limit') {
      submitError.value = result.message || '동일 이메일로는 시간당 3회까지 접수 가능합니다. 잠시 후 다시 시도해주세요.'
      return
    }
    if (result.fieldErrors) {
      for (const [field, msg] of Object.entries(result.fieldErrors)) errors[field] = msg
      submitError.value = '입력값을 다시 확인해주세요.'
    } else {
      submitError.value = result.message
    }
    return
  }

  if (result.status === 429) {
    submitError.value = result.message
    if (result.retryAfter && result.retryAfter > 0) startRetryLock(result.retryAfter)
    return
  }

  if (result.status === 401 || result.status === 503) {
    submitError.value = result.message
    // TODO: Sentry 도입 시 이 지점에서 reportToSentry(result) 호출로 교체
    console.error('[inquiry] server error', {
      kind: result.kind,
      status: result.status,
      message: result.message,
    })
    return
  }

  submitError.value = result.message
}
</script>

<template>
  <main class="pt-32 pb-20 bg-gray-50 min-h-screen">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          프로젝트 문의
        </h1>
        <p class="text-lg text-gray-600">
          요구사항을 남겨주시면 영업일 기준 24시간 이내에 회신드립니다.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Side info -->
        <aside class="lg:col-span-1 space-y-6">
          <div class="bg-white rounded-2xl p-6 shadow-sm">
            <div class="flex items-start gap-3 mb-4">
              <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                <Mail :size="20" :stroke-width="1.5" />
              </div>
              <div>
                <p class="text-sm text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:business@jndsoft.co.kr"
                  class="text-gray-900 font-medium hover:text-primary transition-colors"
                >
                  business@jndsoft.co.kr
                </a>
              </div>
            </div>
            <div class="flex items-start gap-3 mb-4">
              <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                <Phone :size="20" :stroke-width="1.5" />
              </div>
              <div>
                <p class="text-sm text-gray-500 mb-1">응답 시간</p>
                <p class="text-gray-900 font-medium">영업일 기준 24시간 이내</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                <MapPin :size="20" :stroke-width="1.5" />
              </div>
              <div>
                <p class="text-sm text-gray-500 mb-1">주소</p>
                <p class="text-gray-900 text-sm leading-relaxed">
                  서울특별시 강서구 양천로 424<br />
                  데시앙플렉스 지식산업센터 630호
                </p>
              </div>
            </div>
          </div>
        </aside>

        <!-- Form -->
        <form
          class="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
          novalidate
          @submit.prevent="handleSubmit"
        >
          <!-- Top-level error alert -->
          <div
            v-if="submitError"
            class="mb-6 flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
            role="alert"
          >
            <AlertCircle :size="20" class="shrink-0 mt-0.5" />
            <p class="text-sm">{{ submitError }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Email (required) -->
            <div class="md:col-span-2">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1.5">
                이메일 <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                placeholder="name@company.co.kr"
                :maxlength="FIELD_LIMITS.email"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                :class="{ 'border-red-400': errors.email }"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <!-- Company name / affiliation (required) -->
            <div>
              <label for="company_name" class="block text-sm font-medium text-gray-700 mb-1.5">
                회사 또는 소속 <span class="text-red-500">*</span>
              </label>
              <input
                id="company_name"
                v-model="form.companyName"
                type="text"
                autocomplete="organization"
                placeholder="(주)제이앤디소프트 · 프리랜서 · 개인"
                :maxlength="FIELD_LIMITS.companyName"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                :class="{ 'border-red-400': errors.company_name }"
              />
              <p v-if="errors.company_name" class="mt-1 text-sm text-red-600">{{ errors.company_name }}</p>
            </div>

            <!-- Contact name (optional) -->
            <div>
              <label for="contact_name" class="block text-sm font-medium text-gray-700 mb-1.5">
                담당자명 <span class="text-gray-400 text-xs">(선택)</span>
              </label>
              <input
                id="contact_name"
                v-model="form.contactName"
                type="text"
                autocomplete="name"
                placeholder="김담당"
                :maxlength="FIELD_LIMITS.contactName"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                :class="{ 'border-red-400': errors.contact_name }"
              />
              <p v-if="errors.contact_name" class="mt-1 text-sm text-red-600">{{ errors.contact_name }}</p>
            </div>

            <!-- Phone (optional) -->
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1.5">
                연락처 <span class="text-gray-400 text-xs">(선택)</span>
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                autocomplete="tel"
                placeholder="010-0000-0000"
                :maxlength="FIELD_LIMITS.phone"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                :class="{ 'border-red-400': errors.phone }"
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
            </div>

            <!-- Project type -->
            <div>
              <label for="project_type" class="block text-sm font-medium text-gray-700 mb-1.5">
                프로젝트 유형 <span class="text-gray-400 text-xs">(선택)</span>
              </label>
              <select
                id="project_type"
                v-model="form.projectType"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition bg-white"
              >
                <option value="">선택해주세요</option>
                <option v-for="opt in projectTypeOptions" :key="opt.value" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>
            </div>

            <!-- Budget range -->
            <div>
              <label for="budget_range" class="block text-sm font-medium text-gray-700 mb-1.5">
                예상 예산 <span class="text-gray-400 text-xs">(선택)</span>
              </label>
              <select
                id="budget_range"
                v-model="form.budgetRange"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition bg-white"
              >
                <option value="">선택해주세요</option>
                <option v-for="opt in budgetRangeOptions" :key="opt.value" :value="opt.value">
                  {{ opt.label }}
                </option>
              </select>
            </div>

            <!-- Desired schedule -->
            <div class="md:col-span-2">
              <label for="desired_schedule" class="block text-sm font-medium text-gray-700 mb-1.5">
                희망 일정 <span class="text-gray-400 text-xs">(선택)</span>
              </label>
              <input
                id="desired_schedule"
                v-model="form.desiredSchedule"
                type="text"
                placeholder="예: 2026년 7월 착수 희망"
                :maxlength="FIELD_LIMITS.desiredSchedule"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                :class="{ 'border-red-400': errors.desired_schedule }"
              />
              <p v-if="errors.desired_schedule" class="mt-1 text-sm text-red-600">{{ errors.desired_schedule }}</p>
            </div>

            <!-- Requirement body (required) -->
            <div class="md:col-span-2">
              <label for="requirement_body" class="block text-sm font-medium text-gray-700 mb-1.5">
                요구사항 <span class="text-red-500">*</span>
              </label>
              <textarea
                id="requirement_body"
                v-model="form.requirementBody"
                rows="10"
                placeholder="해결하고 싶은 문제, 기대하는 결과, 참고 자료 등을 자유롭게 작성해주세요."
                :maxlength="FIELD_LIMITS.requirementBody"
                class="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition resize-y"
                :class="{ 'border-red-400': errors.requirement_body }"
              />
              <div class="mt-1 flex items-start justify-between gap-2">
                <p v-if="errors.requirement_body" class="text-sm text-red-600">{{ errors.requirement_body }}</p>
                <p class="text-xs text-gray-400 ml-auto shrink-0">
                  {{ form.requirementBody.length }} / {{ FIELD_LIMITS.requirementBody.toLocaleString() }}
                </p>
              </div>
            </div>
          </div>

          <!-- Honeypot (hidden) -->
          <div
            aria-hidden="true"
            style="position:absolute; left:-9999px; width:1px; height:1px; overflow:hidden;"
          >
            <label for="website">Website (do not fill)</label>
            <input
              id="website"
              v-model="form.website"
              type="text"
              tabindex="-1"
              autocomplete="off"
            />
          </div>

          <!-- Privacy consent -->
          <label class="mt-6 flex items-start gap-3 cursor-pointer">
            <input
              v-model="form.privacyConsent"
              type="checkbox"
              class="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/20"
            />
            <span class="text-sm text-gray-700">
              <RouterLink to="/privacy" target="_blank" class="text-primary hover:underline">
                개인정보 처리방침
              </RouterLink>
              에 동의합니다. <span class="text-red-500">*</span>
            </span>
          </label>
          <p v-if="errors.privacy_consent" class="mt-1 text-sm text-red-600">
            {{ errors.privacy_consent }}
          </p>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="!isSubmittable"
            class="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <span v-if="submitting">전송 중...</span>
            <span v-else-if="retryLockSeconds > 0">{{ retryLockSeconds }}초 후 다시 시도</span>
            <template v-else>
              <Send :size="18" />
              <span>문의 접수하기</span>
            </template>
          </button>
        </form>
      </div>
    </div>
  </main>
</template>
