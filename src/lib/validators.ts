const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const FIELD_LIMITS = {
  email: 254,
  companyName: 200,
  contactName: 100,
  phone: 32,
  desiredSchedule: 200,
  requirementBody: 10_000,
} as const

export function validateEmail(value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return '이메일을 입력해주세요.'
  if (trimmed.length > FIELD_LIMITS.email) return `이메일은 최대 ${FIELD_LIMITS.email}자까지 입력 가능합니다.`
  if (!EMAIL_REGEX.test(trimmed)) return '올바른 이메일 형식이 아닙니다.'
  return null
}

export function validateRequired(value: string, label: string, maxLength: number): string | null {
  const trimmed = value.trim()
  if (!trimmed) return `${label}을(를) 입력해주세요.`
  if (trimmed.length > maxLength) return `${label}은(는) 최대 ${maxLength}자까지 입력 가능합니다.`
  return null
}

export function validateOptional(value: string, label: string, maxLength: number): string | null {
  if (!value) return null
  if (value.length > maxLength) return `${label}은(는) 최대 ${maxLength}자까지 입력 가능합니다.`
  return null
}
