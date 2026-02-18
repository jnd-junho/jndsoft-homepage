<script setup lang="ts">
import { Mail, MapPin } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <h3 class="text-xl font-bold mb-4">제이앤디소프트</h3>
          <p class="text-gray-400 text-sm mb-4">
            AI와 전문가가 함께하는<br />
            비즈니스 성공 파트너
          </p>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact</h4>
          <div class="space-y-3">
            <div class="flex items-start gap-3 text-sm text-gray-400">
              <MapPin :size="20" class="flex-shrink-0 mt-0.5" />
              <div>
                <p>서울특별시 강서구 양천로 424 (등촌동)</p>
                <p>데시앙플렉스 지식산업센터 630호</p>
              </div>
            </div>
            <div class="flex items-center gap-3 text-sm text-gray-400">
              <Mail :size="20" class="flex-shrink-0" />
              <a
                href="mailto:business@jndsoft.co.kr"
                class="hover:text-primary transition-colors"
              >
                business@jndsoft.co.kr
              </a>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <nav class="space-y-2">
            <a
              href="#hero"
              class="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              class="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              class="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="https://jndsoft-dev.tistory.com"
              target="_blank"
              class="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Tech Blog
            </a>
            <a
              href="#contact"
              class="block text-sm text-gray-400 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {{ currentYear }} JnDSOFT Inc. All Rights Reserved</p>
          <p class="text-xs">
            사업자등록번호: 757-88-02437
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
