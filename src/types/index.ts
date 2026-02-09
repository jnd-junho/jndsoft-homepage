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
