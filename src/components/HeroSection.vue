<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const heroStats = computed(() => [
  { value: '12+', label: t('hero.stats.experience') },
  { value: '420+', label: t('hero.stats.projects') },
  { value: '98%', label: t('hero.stats.satisfaction') },
])
</script>

<template>
  <section class="py-20 lg:py-28">
    <div class="mx-auto grid w-[min(1200px,90vw)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
      <div v-reveal class="flex flex-col gap-5">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('hero.eyebrow') }}</p>
        <h1 class="font-['Playfair_Display'] text-[clamp(2.6rem,4vw,4rem)] leading-[1.1]">
          {{ t('hero.title') }}
        </h1>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">
          {{ t('hero.subtitle') }}
        </p>
        <div class="flex flex-wrap gap-4">
          <button
            class="inline-flex items-center justify-center rounded-full bg-[#f07a1f] px-6 py-3 text-sm font-semibold text-[#fff1e3] shadow-[0_18px_30px_rgba(34,25,18,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_26px_rgba(0,0,0,0.12)]"
          >
            {{ t('hero.primary') }}
          </button>
          <button
            class="inline-flex items-center justify-center rounded-full border border-[#f2c7a0] px-6 py-3 text-sm font-semibold text-[#f07a1f] transition hover:-translate-y-0.5"
          >
            {{ t('hero.secondary') }}
          </button>
        </div>
        <div class="grid gap-4 sm:grid-cols-3">
          <div
            v-for="item in heroStats"
            :key="item.label"
            v-reveal
            class="rounded-xl bg-white p-4 shadow-[0_24px_60px_rgba(39,28,19,0.16)] transition hover:-translate-y-1"
          >
            <p class="text-2xl font-bold text-[#f07a1f]">{{ item.value }}</p>
            <span class="text-sm text-[#6a5d52]">{{ item.label }}</span>
          </div>
        </div>
      </div>
      <div class="relative grid gap-6">
        <div
          v-reveal
          class="h-[360px] overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(39,28,19,0.16)]"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
            alt="Zamonaviy yashash xonasi"
          />
        </div>
        <div
          v-reveal
          class="static h-[180px] w-[220px] overflow-hidden rounded-[20px] shadow-[0_24px_60px_rgba(39,28,19,0.16)] md:absolute md:right-[10%] md:-bottom-8"
        >
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=600&q=80"
            alt="Minimalist oshxona dizayni"
          />
        </div>
        <div
          v-reveal
          class="static flex flex-col gap-1 rounded-[18px] bg-white/90 p-4 shadow-[0_24px_60px_rgba(39,28,19,0.16)] backdrop-blur md:absolute md:right-0 md:top-8 motion-safe:animate-pulse"
        >
          <p class="font-semibold text-[#2d2620]">{{ t('hero.floatingTitle') }}</p>
          <span class="text-sm text-[#6e6359]">{{ t('hero.floatingSubtitle') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
