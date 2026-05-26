# JnDSOFT Homepage Renewal Plan

## 목적

현재 홈페이지를 단순 IT 개발사/구축사 느낌에서 벗어나, “비즈니스 문제를 실행 가능한 시스템으로 연결하는 기술 파트너”로 개선한다.

핵심 인상:

- 고객의 업무 문제를 이해한다.
- 필요한 첫 단계를 작게 정의한다.
- 업무 시스템, MVP/PoC, AI 자동화로 실제 실행한다.
- 대기업 수준의 설계 경험은 신뢰 요소로만 활용하고, 전체 톤은 무겁지 않게 유지한다.

## Portable Guidelines

### 표현 원칙

- 특정 브랜드 고유명사인 “카톡”은 사용하지 않는다.
- 필요한 경우 “메신저”, “메신저 기반 업무”, “메신저/이메일/엑셀에 흩어진 업무”처럼 추상화한다.
- “최고”, “혁신”, “압도적” 같은 과장 표현을 피한다.
- 기술 스택 나열보다 고객 문제, 운영 결과, 실행 가능한 첫 단계를 먼저 말한다.
- “대기업 경험”은 메인 포지션이 아니라 신뢰 보강 요소로 배치한다.
- “이음”은 유지하되 추상 슬로건이 아니라 고객 문제와 결과물에 연결한다.

### 톤앤매너

- 현실적인 B2B 톤.
- 소상공인 전문처럼 좁아 보이지 않게 한다.
- 대기업 SI처럼 무겁거나 절차 중심으로 보이지 않게 한다.
- 설계 신뢰감, 빠른 실행력, 현실적인 구축 범위가 동시에 느껴지게 한다.

### 문의 UX 원칙

- 문의 폼은 단순 게시판 등록처럼 보이면 안 된다.
- 사용자가 “내 상황을 남기면 실제로 검토 후 답변을 받을 수 있겠다”고 느끼게 해야 한다.
- 자유입력 하나에 의존하지 말고, 고객 유형과 현재 문제를 구조화해서 받는다.
- 필수 입력은 최소화해 이탈을 줄인다.

## Project-Specific Guidelines

### 현재 주요 파일

- 홈 섹션 조합: `src/views/HomePage.vue`
- Hero: `src/components/sections/HeroSection.vue`
- 서비스: `src/components/sections/ServicesSection.vue`
- 프로젝트/문제 해결 예시 후보: `src/components/sections/ProjectsSection.vue`
- 진행 방식: `src/components/sections/EngineeringPipelineSection.vue`
- 강점/기반: `src/components/sections/FoundationSection.vue`
- 홈 하단 CTA: `src/components/sections/ContactSection.vue`
- 문의 페이지: `src/views/ContactView.vue`
- 문의 API 타입/전송: `src/lib/inquiryApi.ts`
- 문의 검증: `src/lib/validators.ts`

## 섹션별 개선 계획

### 1. Hero

목표:

- 첫 화면에서 “비즈니스 문제를 실행 가능한 시스템으로 연결한다”는 메시지를 명확히 전달한다.
- 대기업 경험은 직접 전면 배치하지 않고, proof card 또는 보조 문장으로만 사용한다.

권장 카피:

- 메인: “비즈니스 문제를 실행 가능한 시스템으로 연결합니다”
- 서브: “대기업 수준의 설계 경험과 스타트업 수준의 실행 속도로 업무 시스템, MVP, AI 자동화를 구축합니다.”
- CTA 1: “상담 문의하기” 또는 “업무 진단 요청하기”
- CTA 2: “서비스 살펴보기”

Hero proof card 방향:

- 설계 신뢰감: “대기업 소프트웨어 설계 및 수행 경험”
- 빠른 실행력: “MVP/PoC 중심의 작은 시작”
- 현실적 운영: “관리자·권한·데이터·자동화까지 고려”

### 2. 고객 유형별 서비스

현재 서비스 섹션은 흐름형 구조다. 요청 방향을 반영하려면 고객 유형별 섹션을 추가하거나 기존 `ServicesSection`을 재구성한다.

카드 구성:

| 고객 유형 | 핵심 메시지 | 예시 |
|---|---|---|
| 중소기업·소상공인 | 흩어진 업무를 웹 시스템으로 전환 | 엑셀, 메신저, 이메일, 수기 업무를 상담관리·예약관리·정산관리로 연결 |
| 스타트업 | 아이디어를 MVP/PoC로 빠르게 검증 | 핵심 기능, 관리자, 초기 서비스 흐름 구현 |
| 정부지원사업 선정 기업 | 사업계획의 결과물을 제한된 기간 안에 구현 | PoC, 시제품, 사업화 개발 산출물 구현 |

### 3. 강점 영역

강점은 “우리가 잘한다”보다 “고객의 리스크를 줄인다”로 표현한다.

권장 항목:

- 대기업 소프트웨어 설계 및 수행 경험
- 다양한 도메인 시스템 구축 경험
- 고객 언어를 개발 언어로 전환하는 기획력
- AI 활용 기반의 빠른 실행력
- 운영을 고려한 현실적인 설계

주의:

- 대기업 경험을 너무 크게 내세우면 SI 회사처럼 보일 수 있다.
- “필요한 만큼 설계하고, 검증 후 확장한다”는 메시지를 함께 배치한다.

### 4. 문제 해결 예시

`ProjectsSection`은 현재 익명 프로젝트 유형 중심이다. 방문자가 자기 문제와 연결하기 쉽도록 “문제 → 실행 결과” 구조를 강화한다.

권장 카드:

| 문제 | 실행 결과 |
|---|---|
| 엑셀로 관리하던 업무가 사람마다 다름 | 웹 기반 업무 시스템과 관리자 화면으로 정리 |
| 메신저와 이메일에 문의가 흩어짐 | 상담관리·고객관리 흐름으로 통합 |
| 반복 문의와 문서 확인이 많음 | AI 자동화 PoC로 반복 업무 검증 |
| 아이디어는 있지만 개발 범위가 불명확함 | MVP 범위 정의 후 빠른 구현 |
| 정부지원사업 결과물이 필요함 | 사업계획 기반 PoC/시제품 구현 |

### 5. 진행 방식

현재 `EngineeringPipelineSection`의 진단 → 설계 → 구현 → 운영 흐름은 유지하되, 요청한 단계명에 맞게 더 고객 친화적으로 정리한다.

권장 단계:

1. 문제 진단
2. MVP/PoC 범위 정의
3. 빠른 구현
4. 운영 피드백 반영
5. 확장 개발

핵심 문장:

- “처음부터 큰 시스템을 전제하지 않습니다.”
- “실제로 운영 가능한 첫 단계를 정의하고, 검증 후 확장합니다.”

### 6. 문의 영역

홈 하단 CTA와 문의 페이지는 “무료 문의”보다 “업무 진단 요청” 느낌을 강화한다.

권장 문구:

- “지금 필요한 것은 큰 시스템이 아니라, 실행 가능한 첫 단계일 수 있습니다.”
- “현재 업무 문제를 남겨주시면 가능한 구축 방향과 첫 범위를 검토해드립니다.”
- CTA: “업무 진단 요청하기”, “프로젝트 상담 요청하기”

## 문의 폼 개선안

### UX 방향

현재 문의 폼은 기본 문의 등록 구조에 가깝다. 개선 시 아래 순서로 받는다.

1. 어떤 유형의 고객인지
2. 어떤 도움이 필요한지
3. 현재 어떤 도구와 방식으로 운영 중인지
4. 무엇이 막혀 있는지
5. 어떤 결과를 기대하는지
6. 회신 정보

### 권장 필수 필드

- 이메일
- 회사 또는 소속
- 고객 유형
- 문의 목적
- 현재 문제 요약
- 개인정보 동의

### 권장 선택 필드

- 담당자명
- 연락처
- 현재 사용 도구
- 기대 결과
- 예산 범위
- 희망 일정

## 백엔드 API 변경 요청 정의서

### Endpoint

기존:

```http
POST /public/inquiries
```

유지 가능. 단, payload 필드 확장이 필요하다.

### Request Payload

```ts
type CustomerType =
  | 'sme'
  | 'startup'
  | 'gov_supported'
  | 'enterprise'
  | 'other'

type InquiryGoal =
  | 'business_system'
  | 'mvp_poc'
  | 'gov_project'
  | 'ai_automation'
  | 'homepage_landing'
  | 'system_improvement'
  | 'other'

type CurrentTool =
  | 'excel'
  | 'messenger'
  | 'email'
  | 'paper'
  | 'legacy_system'
  | 'none'
  | 'other'

interface InquiryPayloadV2 {
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

### Field Definition

| 필드 | 타입 | 필수 | 설명 |
|---|---|---:|---|
| `email` | string | Y | 회신 이메일 |
| `company_name` | string | Y | 회사/소속 |
| `contact_name` | string | N | 담당자명 |
| `phone` | string | N | 연락처 |
| `customer_type` | enum | Y | 고객 유형 |
| `inquiry_goal` | enum[] | Y | 필요한 지원 범위 |
| `current_tools` | enum[] | N | 현재 업무에 사용하는 도구 |
| `problem_summary` | string | Y | 현재 문제 요약 |
| `expected_outcome` | string | N | 기대 결과 |
| `budget_range` | enum | N | 예산 범위 |
| `desired_schedule` | string | N | 희망 일정 |
| `privacy_consent` | boolean | Y | 개인정보 동의 |
| `source` | string | Y | 유입 출처 |

### Validation Recommendation

- `email`: required, email format, max 254
- `company_name`: required, max 200
- `customer_type`: required, enum
- `inquiry_goal`: required, min 1
- `current_tools`: optional, enum array
- `problem_summary`: required, max 4000
- `expected_outcome`: optional, max 4000
- `contact_name`: optional, max 100
- `phone`: optional, max 32
- `desired_schedule`: optional, max 200

### Response

기존 성공 응답 유지 가능.

```ts
interface InquirySuccess {
  ok: true
  id: string
  received_at: string
  message?: string
}
```

권장 성공 메시지:

```text
입력하신 내용을 기준으로 업무 구조와 가능한 첫 단계를 검토해 회신드리겠습니다.
```

## 단계별 실행 순서

### Phase 1. 카피 및 섹션 구조 정리

- Hero 카피 교체
- “카톡” 표현이 있다면 “메신저”로 통일
- 고객 유형별 서비스 섹션 추가 또는 기존 서비스 섹션 재구성
- 문제 해결 예시 섹션을 “문제 → 결과” 구조로 정리

### Phase 2. 문의 UX 개선

- `ContactView.vue` 폼을 진단형 구조로 재배치
- 고객 유형, 문의 목적, 현재 사용 도구 필드 추가
- 기존 `requirement_body`를 `problem_summary` 중심으로 분리
- 제출 버튼과 안내 문구를 “업무 진단 요청” 톤으로 변경

### Phase 3. 백엔드 연동 조정

- 백엔드에 `InquiryPayloadV2` 필드 추가 요청
- 프론트 `src/lib/inquiryApi.ts` 타입 확장
- `src/lib/validators.ts` 제한값과 검증 로직 확장
- 백엔드 배포 전까지는 V1 호환 여부를 확인한 뒤 배포 순서를 조율

### Phase 4. 검증

- `npm run build` 실행
- 문의 폼 필수값 검증 확인
- 모바일 화면에서 필드 간격과 CTA 가독성 확인
- 실제 API 연동 환경에서 201, 422, 429, 500 계열 응답 처리 확인

## 적용 시 주의점

- 포트폴리오나 성과 수치를 새로 지어내지 않는다.
- 상세 기능별 가격표를 노출하지 않는다.
- 대기업 경험을 “큰 프로젝트도 한다”가 아니라 “운영을 고려한 설계가 가능하다”로 표현한다.
- 문의 필드를 과하게 늘려 접수 전환율을 떨어뜨리지 않는다.
- API 변경은 백엔드와 배포 순서를 맞춰야 한다.
