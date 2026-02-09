<script setup lang="ts">
import { MapPin, Mail } from 'lucide-vue-next'
</script>

<template>
  <section id="contact" class="py-20 md:py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Contact
        </h2>
        <p class="text-lg text-gray-600">
          프로젝트 문의는 언제든지 환영합니다
        </p>
      </div>
      
      <!-- Contact Info -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
      >
        <!-- Address -->
        <div class="bg-gray-50 rounded-2xl p-8 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <MapPin :size="32" :stroke-width="1.5" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Address</h3>
          <p class="text-gray-600">
            서울특별시 강서구 양천로 424 (등촌동)<br />
            데시앙플렉스 지식산업센터 630호
          </p>
        </div>
        
        <!-- Email -->
        <div class="bg-gray-50 rounded-2xl p-8 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
            <Mail :size="32" :stroke-width="1.5" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
          <a
            href="mailto:business@jndsoft.co.kr"
            class="text-primary hover:text-primary/80 transition-colors text-lg font-medium"
          >
            business@jndsoft.co.kr
          </a>
        </div>
      </div>
      
      <!-- Map -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
        class="rounded-2xl overflow-hidden shadow-card"
      >
        <iframe
          src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EC%84%9C%EA%B5%AC+%EC%96%91%EC%B2%9C%EB%A1%9C+424+%EB%8D%B0%EC%8B%9C%EC%95%99%ED%94%8C%EB%A0%89%EC%8A%A4+%EC%A7%80%EC%8B%9D%EC%82%B0%EC%97%85%EC%84%BC%ED%84%B0&output=embed"
          width="100%"
          height="450"
          style="border:0;"
          :allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full"
        />
      </div>
    </div>
  </section>
</template>
