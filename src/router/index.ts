import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
      meta: {
        title: '제이앤디소프트 — 비즈니스와 기술의 이음',
        description: '검증된 공통 기반 위에 비즈니스 로직을 빠르게. 시스템 구축·기술 컨설팅·MVP 개발을 함께 다룹니다.',
        keywords: 'SI, 시스템통합, IT컨설팅, MVP개발, 스타트업, BackOffice, 공통 기반, 제이앤디소프트',
        ogTitle: '제이앤디소프트 — 비즈니스와 기술의 이음',
        ogDescription: '검증된 공통 기반 위에 비즈니스 로직을 빠르게. 시스템 구축·기술 컨설팅·MVP 개발을 함께 다룹니다.',
        ogUrl: 'https://www.jndsoft.co.kr/'
      }
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/PlatformPage.vue'),
      meta: {
        title: 'BackOffice 공통 기반 | 제이앤디소프트',
        description: '대시보드·목록·폼·계정 등 백오피스 공통 UI를 검증된 형태로 제공합니다. 비즈니스 로직만 더하면 됩니다.',
        keywords: '백오피스, 어드민, 관리자페이지, BackOffice, 공통 기반, UI 프레임워크, 디자인 시스템, 제이앤디소프트',
        ogTitle: 'BackOffice 공통 기반 | 제이앤디소프트',
        ogDescription: '대시보드·목록·폼·계정 등 백오피스 공통 UI를 검증된 형태로 제공합니다.',
        ogUrl: 'https://www.jndsoft.co.kr/platform'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
      meta: {
        title: '회사 소개 | 제이앤디소프트',
        description: '대표 프로필, 회사 가치, 연혁. 검증된 공통 기반과 실무 경험으로 비즈니스와 기술을 잇는 회사입니다.',
        keywords: '회사소개, 대표, 연혁, 조직문화, 제이앤디소프트',
        ogTitle: '회사 소개 | 제이앤디소프트',
        ogDescription: '대표 프로필, 회사 가치, 연혁.',
        ogUrl: 'https://www.jndsoft.co.kr/about'
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
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: '프로젝트 문의 | 제이앤디소프트',
        description: 'SI, MVP, 웹앱, 홈페이지 등 프로젝트 문의를 남겨주세요. 영업일 기준 24시간 이내 회신드립니다.',
        keywords: '프로젝트 문의, 견적 요청, SI 의뢰, MVP 개발 문의, 제이앤디소프트',
        ogTitle: '프로젝트 문의 | 제이앤디소프트',
        ogDescription: 'SI, MVP, 웹앱, 홈페이지 등 프로젝트 문의를 남겨주세요. 영업일 기준 24시간 이내 회신드립니다.',
        ogUrl: 'https://www.jndsoft.co.kr/contact'
      }
    },
    {
      path: '/contact/thanks',
      name: 'contact-thanks',
      component: () => import('../views/ContactThanksView.vue'),
      meta: {
        title: '문의 접수 완료 | 제이앤디소프트',
        description: '프로젝트 문의가 접수되었습니다.',
        robots: 'noindex'
      }
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
      meta: {
        title: '개인정보 처리방침 | 제이앤디소프트',
        description: '제이앤디소프트의 개인정보 수집·이용 및 처리에 관한 방침입니다.'
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

  // robots (default: index,follow; noindex for thanks page)
  updateMetaTag('robots', (to.meta.robots as string) || 'index,follow')

  next()
})

export default router
