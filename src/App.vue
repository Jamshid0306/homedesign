<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import RepairTypesSection from './components/RepairTypesSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import EstimateSection from './components/EstimateSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RepairTypesSection />
      <BenefitsSection />
      <EstimateSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
