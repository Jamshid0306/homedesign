<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const testimonials = computed(() => tm('reviews.list') || [])
</script>

<template>
  <section id="reviews" class="bg-[linear-gradient(160deg,#fff7f1_0%,#ffe9d5_100%)] py-24">
    <div class="mx-auto w-[min(1200px,90vw)]">
      <div v-reveal class="mb-12 grid gap-3 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('reviews.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('reviews.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">
          {{ t('reviews.subtitle') }}
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="review in testimonials"
          :key="review.name"
          v-reveal
          class="flex flex-col gap-4 rounded-[18px] bg-white p-6 shadow-[0_24px_60px_rgba(39,28,19,0.16)]"
        >
          <p class="leading-[1.7] text-[#423a32]">“{{ review.text }}”</p>
          <div class="text-sm text-[#6d5f53]">
            <span class="block font-semibold text-[#2d2620]">{{ review.name }}</span>
            <span>{{ review.role }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
