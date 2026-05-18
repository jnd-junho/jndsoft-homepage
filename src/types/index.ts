export interface ServiceCard {
  id: string
  title: string
  icon: string
  description: string
  badge?: string
  link?: string
}

export interface ProjectCard {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  icon: string
}

export interface CompetitiveFeature {
  icon: string
  text: string
}

export interface CompetitiveBlock {
  id: string
  title: string
  icon: string
  features: CompetitiveFeature[]
  description: string
}

export interface CultureValue {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: string
}

export interface PipelineStage {
  id: string
  index: string
  title: string
  titleEn: string
  headline: string
  icon: string
  points: string[]
}

export interface CopyrightItem {
  id: string
  number: string
  /** 한글 부제 (예: "확장형 표준 API 플랫폼") */
  title: string
  /** 자산명 영문 (예: "JND Core API Platform") */
  name?: string
  /** 자산이 담당하는 역할 한 줄 */
  role?: string
  /** 어떻게 활용되는지 한 줄 */
  usage?: string
  /** 등록일 (예: "2026.04") */
  registeredAt?: string
  /** 카테고리 (대표 자산 그룹화용) */
  group?: 'core' | 'tool' | 'domain'
}

export interface IndustryTag {
  id: string
  name: string
  description: string
}

export interface TechCategory {
  id: string
  category: string
  items: string[]
}
