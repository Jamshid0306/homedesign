<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const services = computed(() => tm('services.list') || [])
</script>

<template>
  <section id="services" class="py-24">
    <div class="mx-auto w-[min(1200px,90vw)]">
      <div v-reveal class="mb-12 grid gap-3 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('services.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('services.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">
          {{ t('services.subtitle') }}
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          v-reveal
          class="flex flex-col gap-3 rounded-[18px] bg-white p-6 shadow-[0_24px_60px_rgba(39,28,19,0.16)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_40px_rgba(39,28,19,0.2)]"
        >
          <h3 class="text-[1.4rem] font-semibold text-[#2d2620]">{{ service.title }}</h3>
          <p class="text-[#4a433b]">{{ service.description }}</p>
          <span class="text-sm font-semibold text-[#8b6d51]">{{ t('services.more') }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
