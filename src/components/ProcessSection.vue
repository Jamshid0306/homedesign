<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const steps = computed(() => tm('process.steps') || [])
</script>

<template>
  <section id="process" class="py-24">
    <div class="mx-auto w-[min(1200px,90vw)]">
      <div v-reveal class="mb-12 grid gap-3 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('process.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('process.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">{{ t('process.subtitle') }}</p>
      </div>
      <div class="grid gap-4">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          v-reveal
          class="grid gap-4 rounded-[18px] bg-white p-6 shadow-[0_24px_60px_rgba(39,28,19,0.16)] sm:grid-cols-[64px_1fr]"
        >
          <span class="text-[1.3rem] font-bold text-[#f29a49]">0{{ index + 1 }}</span>
          <div>
            <h3 class="text-[1.2rem] font-semibold text-[#2d2620]">{{ step.title }}</h3>
            <p class="text-[#4a433b]">{{ step.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
