<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="py-20">
    <div
      v-reveal
      class="mx-auto flex w-[min(1200px,90vw)] flex-col items-start gap-6 rounded-[28px] bg-[#2a1f1a] p-10 text-[#fff5ea] shadow-[0_24px_60px_rgba(39,28,19,0.25)] lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="grid gap-3">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9cfc4]">{{ t('offer.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.8rem)]">{{ t('offer.title') }}</h2>
        <p class="text-[1rem] leading-[1.7] text-[#e8ded3]">{{ t('offer.subtitle') }}</p>
      </div>
      <button
        class="inline-flex items-center justify-center rounded-full bg-[#fff5ea] px-6 py-3 text-sm font-semibold text-[#2a1f1a] shadow-[0_14px_26px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5"
      >
        {{ t('header.cta') }}
      </button>
    </div>
  </section>
</template>
