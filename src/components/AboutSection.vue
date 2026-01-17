<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const paragraphs = computed(() => tm('about.paragraphs') || [])
</script>

<template>
  <section id="about" class="py-24">
    <div class="mx-auto grid w-[min(1200px,90vw)] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div v-reveal class="grid gap-4">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('about.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('about.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">{{ t('about.subtitle') }}</p>
      </div>
      <div class="grid gap-4">
        <div
          v-for="(item, index) in paragraphs"
          :key="index"
          v-reveal
          class="rounded-[18px] bg-white p-6 text-[#4a433b] shadow-[0_24px_60px_rgba(39,28,19,0.16)]"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </section>
</template>
