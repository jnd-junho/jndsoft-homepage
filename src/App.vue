<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    
    <router-view />
    
    <AppFooter />
    <ScrollToTop />
  </div>
</template>
