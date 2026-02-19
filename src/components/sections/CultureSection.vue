<script setup lang="ts">
import { RotateCw, Lightbulb, TrendingUp, Play } from 'lucide-vue-next'
import type { CultureValue } from '@/types'

const values: CultureValue[] = [
  {
    id: 'improvement',
    title: '현실적 개선',
    description: '무리한 변화보다 현실적인 개선을 선택합니다',
    icon: 'RotateCw'
  },
  {
    id: 'flexibility',
    title: '유연한 사고',
    description: '정답을 강요하지 않고 유연하게 사고합니다',
    icon: 'Lightbulb'
  },
  {
    id: 'execution',
    title: '실행 중심',
    description: '실행을 통해 증명되는 효율을 중시합니다',
    icon: 'TrendingUp'
  },
  {
    id: 'start',
    title: '작은 시작',
    description: '바꿀 수 있는 것부터 시작하는 실천을 중요하게 생각합니다',
    icon: 'Play'
  }
]

const galleryImages = [
  {
    id: 1,
    src: '/assets/img/culture-1.png',
    title: '협업',
    description: '함께 성장하는 문화'
  },
  {
    id: 2,
    src: '/assets/img/culture-2.png',
    title: '혁신',
    description: '새로운 도전을 환영'
  },
  {
    id: 3,
    src: '/assets/img/culture-3.png',
    title: '성장',
    description: '지속적인 학습과 발전'
  }
]

const getIconComponent = (iconName: string) => {
  const icons = { RotateCw, Lightbulb, TrendingUp, Play }
  return icons[iconName as keyof typeof icons]
}
</script>

<template>
  <section id="culture" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Culture
        </h2>
        <p class="text-lg text-gray-600 mb-8">
          함께 일할수록 좋아지는 팀
        </p>
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          지속 가능한 개선은 작은 실천에서 시작됩니다
        </h3>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          우리는 누군가를 가르치려 들지 않습니다. 대신 더 나은 방향을 함께 찾고, 스스로 납득한 방식으로 움직입니다.<br />
          변화를 강요하지 않지만, 필요한 변화는 외면하지 않습니다.
        </p>
      </div>
      
      <!-- Values Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
        <div
          v-for="(value, index) in values"
          :key="value.id"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
          class="text-center"
        >
          <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-4">
            <component :is="getIconComponent(value.icon)" :size="40" :stroke-width="1.5" />
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-3">
            {{ value.title }}
          </h4>
          <p class="text-gray-600">
            {{ value.description }}
          </p>
        </div>
      </div>
      
      <!-- Gallery -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div
          v-for="image in galleryImages"
          :key="image.id"
          class="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
        >
          <img
            :src="image.src"
            :alt="image.title"
            class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
            <div class="text-center text-white">
              <h5 class="text-xl font-semibold mb-2">{{ image.title }}</h5>
              <p class="text-sm text-gray-200">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
