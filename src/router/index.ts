import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('../views/PlatformPage.vue'),
      meta: {
        title: '확장형 BackOffice 플랫폼 - 제이앤디소프트'
      }
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: () => import('../views/WorkflowPage.vue'),
      meta: {
        title: 'AWOP - A Wave Of Process | 워크플로우 자동화 플랫폼'
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

// Update document title on route change
router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  } else {
    document.title = '제이앤디소프트 - SI, 컨설팅, MVP 개발 전문'
  }
  next()
})

export default router
