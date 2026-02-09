<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const hoveredItem = ref<string | null>(null)

const navItems = [
  { id: 'hero', label: '홈', labelEn: 'Home', href: '#hero' },
  { id: 'platform', label: '플랫폼', labelEn: 'Platform', href: '/platform' },
  { id: 'services', label: '서비스', labelEn: 'Services', href: '#services' },
  { id: 'projects', label: '프로젝트', labelEn: 'Projects', href: '#projects' },
  { id: 'competitiveness', label: '경쟁력', labelEn: 'Competitiveness', href: '#competitiveness' },
  { id: 'culture', label: '조직문화', labelEn: 'Culture', href: '#culture' },
  { id: 'journey', label: '연혁', labelEn: 'Journey', href: '#journey' },
  { id: 'contact', label: '문의하기', labelEn: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Update active section based on scroll position
  if (route.path === '/') {
    const sections = navItems.map(item => item.id)
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom >= 100) {
          activeSection.value = sectionId
          break
        }
      }
    }
  } else {
    activeSection.value = ''
  }
}

const smoothScroll = async (e: Event, href: string) => {
  e.preventDefault()
  
  // Handle absolute paths (like /platform)
  if (href.startsWith('/')) {
    isMobileMenuOpen.value = false
    await router.push(href)
    return
  }
  
  if (route.path !== '/') {
    isMobileMenuOpen.value = false
    await router.push({ path: '/', hash: href })
    return
  }

  const targetId = href.substring(1)
  const element = document.getElementById(targetId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
    
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-md'
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a
          href="#hero"
          class="text-2xl font-bold"
          :class="isScrolled ? 'text-gray-900' : 'text-white'"
          @click="smoothScroll($event, '#hero')"
        >
          제이앤디소프트
        </a>
        
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            :class="[
              'text-sm font-medium transition-all duration-300 relative min-w-[60px] text-center',
              activeSection === item.id
                ? isScrolled
                  ? 'text-primary'
                  : 'text-white'
                : isScrolled
                  ? 'text-gray-600 hover:text-primary'
                  : 'text-white/80 hover:text-white'
            ]"
            @click="smoothScroll($event, item.href)"
            @mouseenter="hoveredItem = item.id"
            @mouseleave="hoveredItem = null"
          >
            {{ hoveredItem === item.id ? item.labelEn : item.label }}
            <span
              v-if="activeSection === item.id"
              class="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
            />
          </a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 rounded-lg transition-colors"
          :class="isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-white border-t border-gray-200 shadow-lg"
      >
        <nav class="px-4 py-4 space-y-2">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="item.href"
            :class="[
              'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
              activeSection === item.id
                ? 'bg-primary/10 text-primary'
                : 'text-gray-700 hover:bg-gray-100'
            ]"
            @click="smoothScroll($event, item.href)"
          >
            {{ item.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>
