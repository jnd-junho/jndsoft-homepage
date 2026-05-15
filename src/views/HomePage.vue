<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ServicesSection from '../components/sections/ServicesSection.vue'
import ProjectsSection from '../components/sections/ProjectsSection.vue'
import EngineeringPipelineSection from '../components/sections/EngineeringPipelineSection.vue'
import FoundationSection from '../components/sections/FoundationSection.vue'
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
    <EngineeringPipelineSection />
    <FoundationSection />
    <ContactSection />
  </main>
</template>
