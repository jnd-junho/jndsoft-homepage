# 프로젝트 문의 API 연동 규격

## 목적

홈페이지 `/contact` 문의 폼과 PM 백엔드 공개 API 연동에 필요한 요청/응답, 헤더, 환경변수, 검증 기준을 정의한다.

## Endpoint

| 항목 | 규격 |
|---|---|
| Method | `POST` |
| URL | `{VITE_PM_API_BASE}/public/inquiries` |
| Content-Type | `application/json` |
| 인증 헤더 | `X-API-Key: {VITE_PM_INQUIRY_API_KEY}` |
| 성공 상태 | `201 Created` |
| 프론트 타임아웃 | 10초 |

## Environment Variables

| 이름 | 필수 | 설명 |
|---|---:|---|
| `VITE_PM_API_BASE` | Y | PM API Base URL. `/public/inquiries`는 포함하지 않는다. |
| `VITE_PM_INQUIRY_API_KEY` | Y | 홈페이지 문의 API 호출용 공개 API Key |

API Key는 브라우저 번들에 포함되므로 관리자 권한이나 내부 데이터 접근 권한을 부여하면 안 된다. 백엔드는 API Key scope, Origin allowlist, rate limit을 함께 검증한다.

## Request Headers

```http
Content-Type: application/json
X-API-Key: <VITE_PM_INQUIRY_API_KEY>
```

## Request Body

```ts
type BudgetRange = 'under_10m' | '10m_30m' | '30m_100m' | '100m_300m' | 'over_300m' | 'undecided'
type CustomerType = 'sme' | 'startup' | 'gov_supported' | 'enterprise' | 'other'
type InquiryGoal = 'business_system' | 'mvp_poc' | 'gov_project' | 'ai_automation' | 'homepage_landing' | 'system_improvement' | 'other'
type CurrentTool = 'excel' | 'messenger' | 'email' | 'paper' | 'legacy_system' | 'none' | 'other'

interface InquiryPayload {
  email: string
  company_name: string
  privacy_consent: true
  source: 'homepage_contact'
  customer_type: CustomerType
  inquiry_goal: InquiryGoal[]
  problem_summary: string
  contact_name?: string | null
  phone?: string | null
  current_tools?: CurrentTool[] | null
  expected_outcome?: string | null
  budget_range?: BudgetRange | null
  desired_schedule?: string | null
}
```

## Field Rules

| 필드 | 필수 | 제한 |
|---|---:|---|
| `email` | Y | 이메일 형식, 최대 254자 |
| `company_name` | Y | 최대 200자 |
| `privacy_consent` | Y | `true`만 허용 |
| `source` | Y | `homepage_contact` 고정 |
| `customer_type` | Y | enum 값만 허용 |
| `inquiry_goal` | Y | 최소 1개 |
| `problem_summary` | Y | 최대 4,000자 |
| `contact_name` | N | 최대 100자 |
| `phone` | N | 최대 32자 |
| `current_tools` | N | enum 배열 |
| `expected_outcome` | N | 최대 4,000자 |
| `budget_range` | N | enum 값 |
| `desired_schedule` | N | 최대 200자 |

## Success Response

```ts
interface InquirySuccess {
  ok: true
  id: string
  received_at: string
  message?: string
}
```

### `id` Format

- 프론트는 `id`를 사용자에게 노출하지 않는다.
- 프론트는 `id`의 정규식, prefix, 날짜, 길이, UUID 여부를 가정하지 않는다.
- 백엔드는 `id`를 문자열로만 반환하면 된다.
- `"1"`, `"127"` 같은 숫자 문자열도 가능하다.
- 운영상 사람이 식별할 접수번호가 필요해지는 경우에만 별도 `reference_no` 필드를 추가한다.

예시:

```json
{
  "ok": true,
  "id": "127",
  "received_at": "2026-05-26T09:00:00+09:00",
  "message": "입력하신 내용을 기준으로 업무 구조와 가능한 첫 단계를 검토해 회신드리겠습니다."
}
```

## Error Response

| 상태 | 의미 | 프론트 처리 |
|---:|---|---|
| `401` | API Key 누락/오류 | 일반 오류 메시지 |
| `422` | 입력값 검증 실패 | 필드 오류 표시 |
| `429` | 요청 과다 | `Retry-After`가 있으면 재시도 제한 |
| `503` | 점검 중 | 점검 안내 |
| `500` 계열 | 서버 오류 | 일반 오류 메시지 |

검증 오류는 FastAPI/Pydantic 형식 또는 `message/errors` 형식을 허용한다.

```json
{
  "detail": [
    {
      "loc": ["body", "email"],
      "msg": "올바른 이메일 형식이 아닙니다."
    }
  ]
}
```

## Backend Requirements

- `source`는 `homepage_contact`만 허용한다.
- `privacy_consent`는 `true`만 접수한다.
- enum 값은 대소문자를 구분해 검증한다.
- 빈 문자열은 `null` 또는 미입력과 동일하게 처리하되, 필수 필드는 거부한다.
- 개인정보가 포함될 수 있으므로 요청 body 전체를 평문 로그로 남기지 않는다.
