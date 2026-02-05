<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import CompetitivenessSection from '../components/sections/CompetitivenessSection.vue'
import CultureSection from '../components/sections/CultureSection.vue'
import JourneySection from '../components/sections/JourneySection.vue'
import ContactSection from '../components/sections/ContactSection.vue'

onMounted(() => {
  console.log('JnDSOFT Homepage v2.0 loaded')
})
</script>

<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <CompetitivenessSection />
    <CultureSection />
    <JourneySection />
    <ContactSection />
  </main>
</template>
