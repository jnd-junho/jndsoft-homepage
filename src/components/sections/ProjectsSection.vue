<script setup lang="ts">
import type { ProjectCard } from '@/types'

const projects: ProjectCard[] = [
  {
    id: 'finance-esg',
    title: '금융그룹 ESG 시스템',
    description: 'ESG 데이터 관리 및 분석 시스템 구축. 지속 가능한 경영을 위한 종합 관리 플랫폼을 개발했습니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    category: '금융'
  },
  {
    id: 'heavy-lca',
    title: '중공업 LCA 시스템',
    description: '전과정평가(Life Cycle Assessment) 시스템 개발. 제품의 전 생애주기에 걸친 환경 영향을 평가합니다.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
    category: '중공업'
  },
  {
    id: 'chemical-esg',
    title: '화학기업 ESG 시스템',
    description: '탄소 배출 모니터링 및 관리 시스템. 실시간 데이터 수집과 분석으로 효율적인 탄소 관리를 지원합니다.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop',
    category: '화학'
  },
  {
    id: 'ecommerce',
    title: '대기업 이커머스몰',
    description: '대규모 쇼핑몰 운영 및 고도화. 수백만 사용자를 위한 안정적이고 확장 가능한 플랫폼을 구축했습니다.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&auto=format&fit=crop',
    category: '이커머스'
  }
]
</script>

<template>
  <section id="projects" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Projects
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          다양한 산업 분야에서 성공적으로 수행한 프로젝트를 소개합니다
        </p>
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          v-motion
          :initial="{ opacity: 0, scale: 0.95 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 150 } }"
          class="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
            
            <!-- Category Badge -->
            <div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                {{ project.category }}
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <h3 class="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
