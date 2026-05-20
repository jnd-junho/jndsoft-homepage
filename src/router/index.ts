import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
      meta: {
        title: '제이앤디소프트 — 업무 시스템 구축, AI 자동화, MVP 빠른 구축',
        description: '중소기업·소상공인·스타트업의 엑셀, 카톡, 수기 업무를 웹 시스템, AI 자동화, MVP 서비스로 전환합니다.',
        keywords: '업무 시스템 구축, AI 업무 자동화, MVP 빠른 구축, SaaS 전환, 엑셀 업무 시스템화, 카톡 업무 자동화, 관리자 페이지, 제이앤디소프트',
        ogTitle: '제이앤디소프트 — 업무 시스템 구축, AI 자동화, MVP 빠른 구축',
        ogDescription: '엑셀, 카톡, 수기 업무를 웹 시스템, AI 자동화, MVP 서비스로 전환하는 IT 구축 파트너입니다.',
        ogUrl: 'https://www.jndsoft.co.kr/'
      }
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/PlatformPage.vue'),
      meta: {
        title: '관리자 페이지 표준 자산 | 제이앤디소프트',
        description: '업무 시스템 구축에 필요한 관리자 페이지, 권한, 메뉴, 목록, 입력 폼, 운영 기능을 빠르게 구성할 수 있는 표준 자산입니다.',
        keywords: '관리자 페이지, 백오피스, 업무 시스템 구축, 권한 관리, 감사 로그, 표준 자산, 제이앤디소프트',
        ogTitle: '관리자 페이지 표준 자산 | 제이앤디소프트',
        ogDescription: '업무 시스템 구축에 필요한 관리자 화면과 운영 기능을 표준 자산 기반으로 구성합니다.',
        ogUrl: 'https://www.jndsoft.co.kr/platform'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
      meta: {
        title: '회사 소개 | 제이앤디소프트',
        description: '고객의 업무 언어를 개발 가능한 요구사항으로 번역하고, 진단부터 MVP와 운영 확장까지 함께 설계하는 IT 구축 파트너입니다.',
        keywords: '회사소개, 업무 시스템 구축, MVP 구축, AI 자동화, 조직문화, 제이앤디소프트',
        ogTitle: '회사 소개 | 제이앤디소프트',
        ogDescription: '업무 문제를 기술 결과물로 옮기는 방식과 제이앤디소프트의 일하는 원칙을 소개합니다.',
        ogUrl: 'https://www.jndsoft.co.kr/about'
      }
    },
    {
      path: '/automation',
      name: 'automation',
      component: () => import('../views/AutomationPage.vue'),
      meta: {
        title: 'AI 업무 자동화 | 제이앤디소프트',
        description: '반복 문의, 문서 확인, 요약·분류, 자동 리포트 생성 업무를 작은 자동화 PoC로 검증하고 실제 업무 흐름에 연결합니다.',
        keywords: 'AI 업무 자동화, 반복 문의 자동화, 문서 요약, 문서 분류, 자동 리포트, 업무 자동화 PoC, 제이앤디소프트',
        ogTitle: 'AI 업무 자동화 | 제이앤디소프트',
        ogDescription: '반복 문의, 문서 확인, 요약·분류, 리포트 생성부터 작게 검증하는 AI 업무 자동화.',
        ogUrl: 'https://www.jndsoft.co.kr/automation'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: '무료 진단 문의 | 제이앤디소프트',
        description: '업무 시스템 구축, AI 자동화, MVP 빠른 구축, SaaS 전환 상담을 남겨주세요. 영업일 기준 24시간 이내 회신드립니다.',
        keywords: '무료 진단 문의, 업무 시스템 상담, AI 자동화 상담, MVP 구축 상담, SaaS 전환 상담, 제이앤디소프트',
        ogTitle: '무료 진단 문의 | 제이앤디소프트',
        ogDescription: '현재 업무 문제를 남겨주시면 시스템화, 자동화, MVP 구축 방향을 검토해드립니다.',
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
  const title = (to.meta.title as string) || '제이앤디소프트 - 업무 시스템 구축, AI 자동화, MVP 개발'
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
