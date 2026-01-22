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
    <a
      href="tel:+998951113333"
      class="phone-fab fixed bottom-6 right-6 z-20 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f07a1f] text-white shadow-[0_18px_40px_rgba(240,122,31,0.45)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f07a1f]/40 focus-visible:ring-offset-2"
      aria-label="Call +998 95 111 33 33"
    >
      <span
        aria-hidden="true"
        class="phone-fab-ring absolute -inset-2 rounded-full border-2 border-[#f07a1f]/60"
      ></span>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        class="relative h-6 w-6 fill-current"
      >
        <path
          d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 01.96-.27 11.36 11.36 0 003.56.57 1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1H7.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.27.96l-2.18 2.17z"
        />
      </svg>
    </a>
  </div>
</template>
