<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const bullets = computed(() => tm('estimate.bullets') || [])
</script>

<template>
  <section id="estimate" class="py-24">
    <div class="mx-auto grid w-[min(1200px,90vw)] gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div v-reveal class="grid gap-4">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('estimate.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('estimate.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">{{ t('estimate.subtitle') }}</p>
      </div>
      <div v-reveal class="rounded-[22px] bg-white p-6 shadow-[0_24px_60px_rgba(39,28,19,0.16)]">
        <ul class="grid gap-3 text-sm text-[#4a433b]">
          <li v-for="(item, index) in bullets" :key="index" class="flex gap-2">
            <span class="mt-1 inline-block h-2 w-2 rounded-full bg-[#664836]"></span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
