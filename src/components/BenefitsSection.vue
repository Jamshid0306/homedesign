<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const benefits = computed(() => tm('benefits.list') || [])
</script>

<template>
  <section id="benefits" class="bg-[linear-gradient(160deg,#fdf8f3_0%,#f4e9dc_100%)] py-24">
    <div class="mx-auto w-[min(1200px,90vw)]">
      <div v-reveal class="mb-12 grid gap-3 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('benefits.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('benefits.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">{{ t('benefits.subtitle') }}</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="benefit in benefits"
          :key="benefit.title"
          v-reveal
          class="flex flex-col gap-3 rounded-[18px] bg-white p-6 shadow-[0_24px_60px_rgba(39,28,19,0.16)]"
        >
          <h3 class="text-[1.2rem] font-semibold text-[#2d2620]">{{ benefit.title }}</h3>
          <p class="text-[#4a433b]">{{ benefit.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
