# 홈페이지 팀 핸드오프: `/contact` Form → PM Inquiry API 연결

**Source Branch**: `int-jnd-pm-web` / `027-seo-integration`
**Target Repo**: `jndsoft-homepage` (Vue 3 + Vite, AWS Amplify 배포)
**Status Marker**: PM 측 Phase 1 구현 완료 후 이 문서의 모든 값(스테이징 URL, CAPTCHA 사이트 키 등)이 확정된다. 이전에는 "TBD" 로 남겨진 부분이 있다.
**Contact**: 제이앤디소프트 플랫폼 팀 (`business@jndsoft.co.kr`)

이 문서는 `www.jndsoft.co.kr/contact` 페이지에 프로젝트 문의 Form 을 추가하고 PM 백엔드 API 로 제출 데이터를 전달하기 위한 **독립 작업 패키지** 다. 아래 체크리스트를 위에서 아래로 따라가면 PM 팀 질의 없이 작업을 완료할 수 있다.

---

## 0. TL;DR

1. `www.jndsoft.co.kr/contact` 라우트 추가
2. Cloudflare Turnstile 위젯 삽입 (사이트 키는 섹션 3 참조)
3. 폼 필드 섹션 4 스펙대로 구성
4. 제출 시 `POST {PM_API_BASE}/public/inquiries` 호출 (섹션 5)
5. 응답 코드별 사용자 메시지 섹션 6 따라 표시
6. 감사(Thanks) 페이지로 이동 (섹션 7)

섹션 8~11 은 부록: 예시 코드, 체크리스트, FAQ, AI 도구용 프롬프트.

---

## 1. 엔드포인트

| 환경 | Base URL | 비고 |
|---|---|---|
| Staging | `https://pm-staging.jndsoft.co.kr/api/v1` | 개발 연동 기본값. OpenAPI 문서: `https://pm-staging.jndsoft.co.kr/api/v1/docs` |
| Production | `https://pm.jndsoft.co.kr/api/v1` | 운영 배포 시 사용. `/docs` 는 비활성화됨 |

**호출 엔드포인트**: `POST {Base URL}/public/inquiries`

- **메서드**: `POST`
- **Content-Type**: `application/json`
- **인증**: 없음 (공개)
- **Origin 요구사항**: 요청 Origin 이 `https://www.jndsoft.co.kr` 또는 `https://jndsoft.co.kr` 이어야 CORS 통과. 로컬 개발은 `http://localhost:5173` 도 허용 (스테이징 백엔드 기준)

---

## 2. CORS 정책

PM 백엔드는 아래 Origin 만 허용한다. 홈페이지 배포 도메인이 변경되면 PM 팀에 통지해야 한다.

| 환경 | 허용 Origin |
|---|---|
| local | `http://localhost:5173`, `http://localhost:5174` |
| staging | `https://staging.jndsoft.co.kr` |
| production | `https://www.jndsoft.co.kr`, `https://jndsoft.co.kr` |

- `allow_credentials: true` 지만 **쿠키 전송 불필요**. 그냥 `fetch`/`axios` 기본 설정 사용
- `allow_methods`, `allow_headers` 는 `*` 로 넓게 설정되어 있음

---

## 3. Cloudflare Turnstile (CAPTCHA)

홈페이지 Form 에서 Turnstile 위젯을 로드하여 **토큰을 요청 바디의 `captcha_token` 필드로 전달**한다.

| 값 | 설명 |
|---|---|
| 스크립트 URL | `https://challenges.cloudflare.com/turnstile/v0/api.js` |
| Staging 사이트 키 | `TBD`(PM 팀 전달 예정. 요청 즉시 발급) |
| Production 사이트 키 | `TBD` |
| 테스트(항상 통과) 키 | `1x00000000000000000000AA` |
| 테스트(항상 차단) 키 | `2x00000000000000000000AB` |

**위젯 삽입 예 (Vue 3)**:
```html
<script setup>
import { onMounted, ref } from 'vue'

const captchaToken = ref('')
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

onMounted(() => {
  const s = document.createElement('script')
  s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
  s.async = true; s.defer = true
  document.head.appendChild(s)
})

window.onTurnstileSuccess = (token) => { captchaToken.value = token }
</script>

<template>
  <div
    class="cf-turnstile"
    :data-sitekey="TURNSTILE_SITE_KEY"
    data-callback="onTurnstileSuccess"
  />
</template>
```

- 토큰 TTL: 300초. 토큰 만료 시 사용자가 위젯을 다시 풀지 않아도 되도록 제출 시점에 토큰이 비어 있으면 에러 노출 후 재발급 유도

---

## 4. 요청 바디 스키마

### 4.1 필드 요약

| 필드 | 타입 | 필수 | 제약 |
|---|---|---|---|
| `email` | string | ✅ | RFC 이메일, 최대 254자 |
| `company_name` | string | ✅ | 1~200자 |
| `requirement_body` | string | ✅ | 1~10,000자 (여러 줄 가능) |
| `privacy_consent` | boolean | ✅ | 반드시 `true` |
| `captcha_token` | string | ✅ | Turnstile 토큰, 최대 2,048자 |
| `source` | string | ✅ | `"homepage_contact"` 고정값 |
| `contact_name` | string | 선택 | 최대 100자 |
| `phone` | string | 선택 | 최대 32자 (형식 자유) |
| `project_type` | string | 선택 | `si`/`mvp`/`webapp`/`homepage`/`simple`/`other` |
| `budget_range` | string | 선택 | `under_10m`/`10m_30m`/`30m_100m`/`100m_300m`/`over_300m`/`undecided` |
| `desired_schedule` | string | 선택 | 최대 200자 (자유 텍스트) |
| `website` | string | 선택 | **허니팟**. 사용자에게는 숨김. 값이 있으면 서버가 spam 분류 |

### 4.2 허니팟 필드 처리

```html
<!-- 사용자에게 보이지 않도록 감춘 상태로 폼에 포함 -->
<div style="position:absolute; left:-9999px; width:1px; height:1px; overflow:hidden" aria-hidden="true">
  <label for="website">Website (do not fill)</label>
  <input id="website" name="website" tabindex="-1" autocomplete="off" v-model="form.website" />
</div>
```

- 일반 사용자는 이 필드를 채우지 않음 → 빈 문자열이면 정상
- 봇이 자동으로 모든 input 을 채우면 값이 생김 → 서버가 감지하여 조용히 spam 분류(프론트는 정상 응답 200/201 받음)

### 4.3 UI 라벨 권장안 (한국어)

| 필드 | 라벨 | placeholder |
|---|---|---|
| `email` | 이메일 | `name@company.co.kr` |
| `company_name` | 회사명 | `(주)제이앤디소프트` |
| `contact_name` | 담당자명 (선택) | `김담당` |
| `phone` | 연락처 (선택) | `010-0000-0000` |
| `project_type` | 프로젝트 유형 (선택) | 드롭다운 |
| `budget_range` | 예상 예산 (선택) | 드롭다운 |
| `desired_schedule` | 희망 일정 (선택) | `2026년 7월 착수 희망` |
| `requirement_body` | 요구사항 | 여러 줄 textarea, 최소 10줄 정도의 높이 |
| `privacy_consent` | "[개인정보 처리방침]에 동의합니다 (필수)" | 체크박스 |

---

## 5. 응답

### 5.1 성공 (201 Created)

```json
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "received_at": "2026-04-24T05:12:00+00:00",
  "message": "접수되었습니다. 영업일 기준 24시간 내에 회신드립니다."
}
```

### 5.2 실패 (400 Bad Request)

```json
{ "detail": "CAPTCHA 검증에 실패했습니다. 다시 시도해주세요." }
```

또는 Pydantic 검증 실패:

```json
{
  "detail": {
    "message": "요청 본문 검증 실패",
    "errors": [
      { "loc": ["body","email"], "msg": "value is not a valid email address" }
    ]
  }
}
```

### 5.3 레이트리밋 초과 (429 Too Many Requests)

```json
{ "detail": "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." }
```

응답 헤더 `Retry-After`(초) 로 대기 시간이 전달된다.

### 5.4 서버 오류 (500)

```json
{ "detail": "서버 내부 오류가 발생했습니다." }
```

---

## 6. 레이트리밋

| 기준 | 제한 | 해제 |
|---|---|---|
| IP 단위 | 5회 / 분 | 60초 롤링 윈도우 |
| 이메일 단위 | 3회 / 시간 | 3,600초 롤링 윈도우 |

- 초과 시 429 응답. 사용자에게 `"잠시 후 다시 시도해주세요"` 메시지 표시
- 동일 이메일로 빠르게 반복 제출하면 메시지로 안내 (예: "이미 접수된 이메일로는 시간당 3회까지 제출 가능합니다")

---

## 7. 사용자 메시지 가이드

| 상태 | 화면 표시 |
|---|---|
| 제출 전 CAPTCHA 미완료 | "보안 검증을 먼저 완료해주세요." |
| 개인정보 동의 미체크 | "개인정보 수집 동의가 필요합니다." |
| 필수 필드 누락 | 필드별 인라인 에러 (예: "이메일을 입력해주세요") |
| 제출 중 | 버튼 비활성화 + "전송 중..." (spinner) |
| 201 | `/contact/thanks` 로 이동 (별도 페이지). noindex 권장 |
| 400 CAPTCHA | "보안 검증에 실패했습니다. 위젯을 다시 시도해주세요." + 위젯 리셋 |
| 400 형식 오류 | 서버 `detail.errors` 를 필드별 메시지로 매핑 |
| 429 | "요청이 너무 많습니다. 잠시 후 다시 시도해주세요." (사라지지 않는 토스트) |
| 500/네트워크 오류 | "일시적 오류가 발생했습니다. 잠시 후 다시 시도하시거나 `business@jndsoft.co.kr` 로 직접 연락주세요." |

---

## 8. 감사 페이지 (`/contact/thanks`)

- SPA 내부 라우트 또는 별도 경로
- `<meta name="robots" content="noindex">` 추가 (검색 노출 불필요)
- 표시 내용: 접수 ID 4자리(예: `A6F6`), 예상 회신 시간, 대체 연락 경로(`business@jndsoft.co.kr`, 전화), 홈페이지 복귀 링크
- GA4 / GSC 전환 이벤트를 이 페이지 진입으로 측정

---

## 9. 예시 코드

### 9.1 fetch (Vanilla)

```js
async function submitInquiry(form, captchaToken) {
  const res = await fetch(`${import.meta.env.VITE_PM_API_BASE}/public/inquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: form.email,
      company_name: form.companyName,
      requirement_body: form.requirement,
      privacy_consent: form.agreePrivacy,
      captcha_token: captchaToken,
      source: 'homepage_contact',
      contact_name: form.contactName || null,
      phone: form.phone || null,
      project_type: form.projectType || null,
      budget_range: form.budgetRange || null,
      desired_schedule: form.desiredSchedule || null,
      website: form.website || null, // 허니팟
    }),
  })

  if (res.status === 201) {
    const data = await res.json()
    return { ok: true, id: data.id }
  }

  const err = await res.json().catch(() => ({ detail: '알 수 없는 오류' }))
  return { ok: false, status: res.status, detail: err.detail }
}
```

### 9.2 axios

```js
import axios from 'axios'

const api = axios.create({ baseURL: import.meta.env.VITE_PM_API_BASE, timeout: 10000 })

export async function submitInquiry(payload) {
  try {
    const { data } = await api.post('/public/inquiries', payload)
    return { ok: true, ...data }
  } catch (e) {
    return {
      ok: false,
      status: e.response?.status ?? 0,
      detail: e.response?.data?.detail ?? '네트워크 오류',
    }
  }
}
```

### 9.3 curl 수동 테스트

```bash
curl -i -X POST "https://pm-staging.jndsoft.co.kr/api/v1/public/inquiries" \
  -H "Content-Type: application/json" \
  -H "Origin: https://www.jndsoft.co.kr" \
  -d '{
    "email":"test@example.com",
    "company_name":"테스트",
    "requirement_body":"테스트 문의입니다.",
    "privacy_consent":true,
    "captcha_token":"1x00000000000000000000AA",
    "source":"homepage_contact"
  }'
```

테스트 토큰 `1x00000000000000000000AA` 는 Turnstile 의 **항상 통과** 키. 스테이징에서만 사용하고 운영 배포 전에는 실제 위젯 연동으로 교체.

---

## 10. 홈페이지 팀 체크리스트

`jndsoft-homepage` 리포에서 아래 순서대로 진행한다.

### 환경 설정
- [ ] `.env.production`, `.env.staging` 에 다음 환경변수 추가
  - `VITE_PM_API_BASE` (예: `https://pm-staging.jndsoft.co.kr/api/v1`)
  - `VITE_TURNSTILE_SITE_KEY`
- [ ] Amplify 빌드 환경변수에 위 두 값 주입

### 구현
- [ ] `src/router/index.ts` 에 `/contact`, `/contact/thanks` 라우트 추가
- [ ] `src/views/ContactView.vue` 생성 (폼·CAPTCHA·제출)
- [ ] `src/views/ContactThanksView.vue` 생성 (감사 페이지)
- [ ] 개인정보 처리방침 페이지 선행 또는 병행 제작 (`/privacy`)
- [ ] 메타 태그·canonical·JSON-LD(ContactPage) 삽입
- [ ] 푸터/헤더 에 `/contact` 링크 추가

### 검증
- [ ] 로컬에서 `VITE_PM_API_BASE=https://pm-staging.jndsoft.co.kr/api/v1` 로 제출 성공 확인
- [ ] 허니팟 시나리오: 숨겨진 `website` 필드에 값 넣고 제출 → 201 응답이지만 PM 관리자 UI 에서 `status=spam` 확인
- [ ] 검증 실패 시나리오: 이메일 빈 값 → 400 + 인라인 에러 표시 확인
- [ ] CAPTCHA 실패 시나리오: `2x00000000000000000000AB` 사이트 키로 위젯 구성 → 400 확인
- [ ] 레이트리밋 시나리오: 같은 IP 에서 6회 제출 → 429 확인
- [ ] 모바일 반응형 확인

### 배포
- [ ] 스테이징 배포 → PM 팀과 E2E 검증 1회
- [ ] 운영 배포 시 `VITE_PM_API_BASE`, `VITE_TURNSTILE_SITE_KEY` 를 운영 값으로 교체
- [ ] 배포 후 PM 팀에 알림 → 운영 관리자 UI 에서 실제 수신 확인
- [ ] Google Search Console 에 `/contact` 색인 요청

---

## 11. FAQ

**Q1. `source` 값을 `homepage_contact` 외의 것으로 보내도 되나?**
A. 안 된다. 공개 API 는 `homepage_contact` 만 허용. 다른 값은 400 반환.

**Q2. 첨부 파일 업로드가 필요하다.**
A. Phase 1 범위 밖. 필요 시 별도 요청하여 스펙 확장.

**Q3. 제출 성공 응답의 `id` 를 사용자에게 보여줘도 되나?**
A. 예. 감사 페이지에 앞 8자리 정도 참조번호로 표시 권장 (담당자 회신 시 대조에 도움).

**Q4. 사용자가 언제 회신받나?**
A. 영업일 기준 24시간 이내 (스펙 SC-008). 주말·연휴에는 다음 영업일.

**Q5. 개인정보 보관 기간은?**
A. 접수 시점부터 3년. 이후 자동 파기(개인정보 마스킹). 승격된 경우 프로젝트 보관 정책을 따름.

**Q6. PM 팀이 우리 폼 필드 변경을 요구하면?**
A. 본 문서의 "요청 바디 스키마" 가 계약. 변경은 PM 측 스펙 수정 → 본 문서 갱신 → 홈페이지 반영 순서.

**Q7. 로컬 개발에서 CORS 문제가 발생한다.**
A. PM 스테이징 백엔드의 `CORS_ORIGINS` 에 로컬 Vite 주소가 포함되어 있는지 PM 팀에 확인. 기본적으로 `http://localhost:5173`, `http://localhost:5174` 포함됨.

**Q8. 서버가 내려가 있을 때 홈페이지 UI 는 어떻게 동작해야 하나?**
A. 네트워크 에러 처리(섹션 7 참조). 이메일 직접 연락 경로(`business@jndsoft.co.kr`)를 함께 표시하는 것이 필수.

---

## 12. AI 도구용 생성 프롬프트

홈페이지 팀이 Claude Code, Cursor, GitHub Copilot 등 AI 도구로 Vue 컴포넌트 초안을 생성할 때 사용할 수 있는 **검증된 프롬프트 템플릿**. 아래 블록 전체를 복사해서 사용.

### 12.1 ContactView.vue 생성 프롬프트

```
역할: 너는 제이앤디소프트 회사 홈페이지(jndsoft-homepage 리포, Vue 3 + Vite + <기존 UI 프레임워크>) 의 프론트엔드 개발자다.

목표: `/contact` 라우트에 표시될 "프로젝트 문의" Form 컴포넌트 `src/views/ContactView.vue` 를 작성한다.

엄수할 계약:
- 제출은 POST `${VITE_PM_API_BASE}/public/inquiries`. 요청/응답 스키마는 아래 표를 따른다.
- Cloudflare Turnstile 위젯을 삽입하고, 발급된 토큰을 요청 바디 `captcha_token` 으로 전달.
- 사용자에게 보이지 않는 허니팟 필드 `website` 를 포함 (display:none + tabindex=-1 + aria-hidden).
- `source` 는 항상 리터럴 `"homepage_contact"`.
- 개인정보 수집 동의 체크박스가 미체크면 제출 비활성화.
- 응답 201 시 `/contact/thanks` 로 라우터 이동. 다른 상태 코드는 사용자에게 한국어 메시지 표시.

필드:
- 필수: email, company_name, requirement_body, privacy_consent
- 선택: contact_name, phone, project_type(드롭다운), budget_range(드롭다운), desired_schedule

드롭다운 값:
- project_type: si / mvp / webapp / homepage / simple / other (라벨은 한국어)
- budget_range: under_10m / 10m_30m / 30m_100m / 100m_300m / over_300m / undecided (라벨은 한국어, "1천만 원 미만" 등)

UI 요구:
- 기존 홈페이지의 `<기존 디자인 토큰·컴포넌트>` 를 재사용.
- 모바일 1열 / 데스크톱 2열 레이아웃.
- 제출 버튼은 유효성 검증·CAPTCHA 통과·개인정보 동의 충족 시에만 활성화.
- 전송 중 버튼 비활성화 + 로딩 표시.
- 인라인 에러는 필드 아래, 서버 에러는 상단 알림.

작성 범위:
- `src/views/ContactView.vue` 단일 파일
- script setup + TypeScript(`lang="ts"`)
- axios 또는 fetch 중 프로젝트 기존 관행 따름
- 환경변수: `VITE_PM_API_BASE`, `VITE_TURNSTILE_SITE_KEY`

작성하지 말 것:
- 라우터 설정 변경 (별도 PR)
- 디자인 토큰 재정의
- 임의의 추가 필드나 기능(파일 업로드, 소셜 로그인 등)

검증:
- TypeScript 타입 오류 없음
- 기존 ESLint/Prettier 설정 통과
- Claude Code 로 생성 후 브라우저에서 샘플 제출 → 스테이징 API 에서 201 확인

이 사양과 완전히 정합하는 단일 파일을 출력해줘.
```

### 12.2 ContactThanksView.vue 생성 프롬프트

```
역할: 제이앤디소프트 홈페이지 Vue 3 프론트엔드 개발자.

목표: `/contact/thanks` 라우트에 표시될 감사 페이지 `src/views/ContactThanksView.vue` 작성.

요구:
- Router state 또는 query 로 전달된 접수 ID(UUID) 중 앞 8자리를 "참조번호" 로 표시 (예: "참조번호: A6F64571").
- 예상 회신 시간 안내: "영업일 기준 24시간 이내에 회신드립니다."
- 대체 연락 경로 표시: business@jndsoft.co.kr, 회사 대표번호(있으면).
- 홈페이지 메인으로 복귀 버튼.
- `<meta name="robots" content="noindex">` 를 페이지 내에서 useHead 또는 router meta 로 적용.
- GA4 `page_view` 이벤트가 자동 발생하도록 확인 (프로젝트 관행 따름).

UI:
- 기존 홈페이지 디자인 시스템 재사용, 중앙 정렬, 큰 체크 아이콘.
- 모바일 반응형.

작성 범위: 단일 파일. TypeScript. 범위 밖 작업 금지.
```

### 12.3 라우터 등록 프롬프트

```
목표: src/router/index.ts 에 /contact 와 /contact/thanks 라우트를 추가한다.
- /contact → ContactView.vue, meta.title="프로젝트 문의 | 제이앤디소프트"
- /contact/thanks → ContactThanksView.vue, meta.title="문의 접수 완료", meta.robots="noindex"
- lazy 라우트 import 패턴을 기존 라우트와 동일하게 유지.
- 기존 메타 태그 업데이트 로직(routeMeta watcher) 에서 noindex 가 설정된 경우 적절히 반영.

단일 파일 수정. 기존 라우트 순서/포맷 변경 금지.
```

### 12.4 개인정보 처리방침 페이지 프롬프트 (선행 필요)

```
목표: /privacy 라우트에 표시될 PrivacyView.vue 초안 작성.

포함 내용:
- 수집 항목: 필수(이메일, 회사명, 요구사항, 개인정보 수집 동의), 선택(담당자명, 연락처, 프로젝트 유형, 예상 예산, 희망 일정)
- 수집 목적: 프로젝트 문의 대응, 견적 제공, 계약 협의
- 보관 기간: 접수일부터 3년. 승격(계약) 시 해당 프로젝트 보관 정책 적용.
- 제3자 제공: 없음(초기). 정부 법령에 의한 요청 시에만 예외.
- 개인정보 보호책임자: business@jndsoft.co.kr
- 권리 행사 방법: 이메일로 요청

법적 정확성은 사내 법무·경영진 검토가 필요함. 본 초안은 템플릿.
```

---

## 13. PM 팀에 알려야 할 변경사항

다음 중 하나라도 변경되면 PM 팀에 즉시 공유해야 한다. PM 측에서 CORS·알림 설정 변경이 필요할 수 있다.

- 홈페이지 배포 도메인(`www.jndsoft.co.kr` → 다른 도메인)
- 홈페이지 `/contact` 페이지의 동작 방식 근본 변경 (예: 첨부 파일 추가)
- Turnstile 사이트 키 재발급
- 운영 중 대량 스팸 유입 발견 (PM 측 필터 강화 요청)

---

## 14. 버전 이력

| 버전 | 날짜 | 내용 |
|---|---|---|
| 0.1 (draft) | 2026-04-24 | 초안 작성 (PM Phase 1 스펙 기준) |
| 1.0 (예정) | Phase 1 구현 완료 후 | 스테이징 URL, 사이트 키, 실제 응답 예시 확정 |
