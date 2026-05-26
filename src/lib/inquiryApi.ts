export type BudgetRange = 'under_10m' | '10m_30m' | '30m_100m' | '100m_300m' | 'over_300m' | 'undecided'
export type CustomerType = 'sme' | 'startup' | 'gov_supported' | 'enterprise' | 'other'
export type InquiryGoal =
  | 'business_system'
  | 'mvp_poc'
  | 'gov_project'
  | 'ai_automation'
  | 'homepage_landing'
  | 'system_improvement'
  | 'other'
export type CurrentTool = 'excel' | 'messenger' | 'email' | 'paper' | 'legacy_system' | 'none' | 'other'

export interface InquiryPayload {
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

export interface InquirySuccess {
  ok: true
  id: string
  received_at: string
  message?: string
}

export interface ValidationError {
  loc: (string | number)[]
  msg: string
}

export type FailureKind = 'auth' | 'email_limit' | 'maintenance'

export interface InquiryFailure {
  ok: false
  status: number
  message: string
  fieldErrors?: Record<string, string>
  retryAfter?: number
  kind?: FailureKind
}

export type InquiryResult = InquirySuccess | InquiryFailure

const DEFAULT_MESSAGES: Record<number, string> = {
  0: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도하시거나 business@jndsoft.co.kr 로 직접 연락주세요.',
  401: '일시적 오류가 발생했습니다. 잠시 후 다시 시도하시거나 business@jndsoft.co.kr 로 직접 연락주세요.',
  422: '입력값을 확인해주세요.',
  429: '요청이 너무 많습니다. 잠시 후 다시 시도해주세요.',
  503: '서비스 점검 중입니다. 잠시 후 다시 시도해주세요.',
  500: '일시적 오류가 발생했습니다. 잠시 후 다시 시도하시거나 business@jndsoft.co.kr 로 직접 연락주세요.',
}

function fieldNameFromLoc(loc: (string | number)[]): string | null {
  const last = loc[loc.length - 1]
  return typeof last === 'string' ? last : null
}

function isEmailLimitMessage(text: string): boolean {
  return /시간당|한도/.test(text)
}

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  const base = import.meta.env.VITE_PM_API_BASE
  if (!base) {
    return { ok: false, status: 0, message: 'API 엔드포인트가 설정되지 않았습니다.' }
  }

  const apiKey = import.meta.env.VITE_PM_INQUIRY_API_KEY
  if (!apiKey) {
    return { ok: false, status: 0, message: 'API 키가 설정되지 않았습니다.' }
  }

  const controller = new AbortController()
  const timeoutId = window.setTimeout(() => controller.abort(), 10_000)

  let response: Response
  try {
    response = await fetch(`${base}/public/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
  } catch {
    return { ok: false, status: 0, message: DEFAULT_MESSAGES[0] }
  } finally {
    window.clearTimeout(timeoutId)
  }

  let body: unknown = null
  try {
    body = await response.json()
  } catch {
    body = null
  }

  if (response.status === 201) {
    const data = body as InquirySuccess
    return { ok: true, id: data.id, received_at: data.received_at, message: data.message }
  }

  const detail = (body as { detail?: unknown } | null)?.detail

  if (response.status === 401) {
    return {
      ok: false,
      status: 401,
      message: DEFAULT_MESSAGES[401],
      kind: 'auth',
    }
  }

  if (response.status === 422) {
    if (typeof detail === 'string') {
      return {
        ok: false,
        status: 422,
        message: detail,
        kind: isEmailLimitMessage(detail) ? 'email_limit' : undefined,
      }
    }
    if (Array.isArray(detail)) {
      const fieldErrors: Record<string, string> = {}
      for (const err of detail as ValidationError[]) {
        const name = fieldNameFromLoc(err.loc)
        if (name && !fieldErrors[name]) fieldErrors[name] = err.msg
      }
      return {
        ok: false,
        status: 422,
        message: DEFAULT_MESSAGES[422],
        fieldErrors: Object.keys(fieldErrors).length ? fieldErrors : undefined,
      }
    }
    if (detail && typeof detail === 'object') {
      const obj = detail as { message?: string; errors?: ValidationError[] }
      const fieldErrors: Record<string, string> = {}
      for (const err of obj.errors ?? []) {
        const name = fieldNameFromLoc(err.loc)
        if (name && !fieldErrors[name]) fieldErrors[name] = err.msg
      }
      const message = obj.message ?? DEFAULT_MESSAGES[422]
      return {
        ok: false,
        status: 422,
        message,
        fieldErrors: Object.keys(fieldErrors).length ? fieldErrors : undefined,
        kind: isEmailLimitMessage(message) ? 'email_limit' : undefined,
      }
    }
    return { ok: false, status: 422, message: DEFAULT_MESSAGES[422] }
  }

  if (response.status === 429) {
    const header = response.headers.get('Retry-After')
    const retryAfter = header ? Number.parseInt(header, 10) : undefined
    return {
      ok: false,
      status: 429,
      message: typeof detail === 'string' ? detail : DEFAULT_MESSAGES[429],
      retryAfter: Number.isFinite(retryAfter) ? retryAfter : undefined,
    }
  }

  if (response.status === 503) {
    return {
      ok: false,
      status: 503,
      message: typeof detail === 'string' ? detail : DEFAULT_MESSAGES[503],
      kind: 'maintenance',
    }
  }

  return {
    ok: false,
    status: response.status,
    message: typeof detail === 'string' ? detail : DEFAULT_MESSAGES[500],
  }
}
