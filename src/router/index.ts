import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
      meta: {
        title: '제이앤디소프트 - SI, 컨설팅, MVP 개발 전문',
        description: 'AI와 전문가가 함께하는 IT 파트너. SI 시스템 구축, IT 컨설팅, 스타트업 MVP 개발, AWOP 플랫폼 제공',
        keywords: 'SI, 시스템통합, IT컨설팅, MVP개발, 스타트업, AWOP, AI워크플로우, 제이앤디소프트',
        ogTitle: '제이앤디소프트 - SI, 컨설팅, MVP 개발 전문',
        ogDescription: 'AI와 전문가가 함께하는 IT 파트너. SI 시스템 구축, IT 컨설팅, 스타트업 MVP 개발, AWOP 플랫폼 제공',
        ogUrl: 'https://www.jndsoft.co.kr/'
      }
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/PlatformPage.vue'),
      meta: {
        title: '확장형 BackOffice 플랫폼 - 제이앤디소프트',
        description: '전문가의 경험과 AI 검증이 만드는 엔터프라이즈 품질의 BackOffice 플랫폼. 수백 개의 검증된 컴포넌트와 글로벌 표준 기술 적용.',
        keywords: '백오피스, 어드민, 관리자페이지, SI, 프레임워크, 컴포넌트, AI검증, 제이앤디소프트',
        ogTitle: '확장형 BackOffice 플랫폼 - 제이앤디소프트',
        ogDescription: '전문가의 경험과 AI 검증이 만드는 엔터프라이즈 품질의 BackOffice 플랫폼.',
        ogUrl: 'https://www.jndsoft.co.kr/platform'
      }
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: () => import('../views/WorkflowPage.vue'),
      meta: {
        title: 'AWOP - A Wave Of Process | 워크플로우 자동화 플랫폼',
        description: '복잡한 비즈니스 프로세스를 하나의 아름다운 흐름으로 만드는 차세대 워크플로우 자동화 플랫폼. 코딩 없이 드래그 앤 드롭으로 만드는 시각적 워크플로우.',
        keywords: '워크플로우, 자동화, RPA, 비즈니스 프로세스, 노코드, 로우코드, AWOP, 제이앤디소프트',
        ogTitle: 'AWOP - A Wave Of Process | 워크플로우 자동화 플랫폼',
        ogDescription: '복잡한 비즈니스 프로세스를 하나의 아름다운 흐름으로 만드는 차세대 워크플로우 자동화 플랫폼.',
        ogUrl: 'https://www.jndsoft.co.kr/workflow'
      }
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Helper function to update meta tags
const updateMetaTag = (name: string, content: string) => {
  let element = document.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

// Helper function to update OG tags
const updateOgTag = (property: string, content: string) => {
  let element = document.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

// Update document title and meta tags on route change
router.beforeEach((to, _from, next) => {
  // Update Title
  const title = (to.meta.title as string) || '제이앤디소프트 - SI, 컨설팅, MVP 개발 전문'
  document.title = title

  // Update Meta Description
  if (to.meta.description) {
    updateMetaTag('description', to.meta.description as string)
  }

  // Update Meta Keywords
  if (to.meta.keywords) {
    updateMetaTag('keywords', to.meta.keywords as string)
  }

  // Update OG Tags
  if (to.meta.ogTitle) {
    updateOgTag('og:title', to.meta.ogTitle as string)
  }
  if (to.meta.ogDescription) {
    updateOgTag('og:description', to.meta.ogDescription as string)
  }
  if (to.meta.ogUrl) {
    updateOgTag('og:url', to.meta.ogUrl as string)
  }

  // Always set og:type to website
  updateOgTag('og:type', 'website')

  next()
})

export default router
