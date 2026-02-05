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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0701816395274!2d126.84976531531156!3d37.52997847980484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9c3e5b5f5555%3A0x5555555555555555!2z7ISc7Jq47Yq567OE7Iuc7IucIOqwleyEnOq1rCDslpHsspzroZwgNDI0!5e0!3m2!1sko!2skr!4v1650000000000!5m2!1sko!2skr"
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
