<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const info = computed(() => tm('contact.info') || [])
const options = computed(() => tm('contact.form.options') || [])
</script>

<template>
  <section id="contact" class="bg-[linear-gradient(140deg,#f3e5d7_0%,#fdf8f3_100%)] py-24">
    <div class="mx-auto grid w-[min(1200px,90vw)] gap-10 lg:grid-cols-[1fr_0.9fr]">
      <div>
        <div v-reveal class="grid gap-3">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('contact.eyebrow') }}</p>
          <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('contact.title') }}</h2>
          <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">
            {{ t('contact.subtitle') }}
          </p>
        </div>
        <div class="mt-6 grid gap-4">
          <div v-for="item in info" :key="item.label" v-reveal class="grid gap-1 text-[#5c5147]">
            <span class="text-sm">{{ item.label }}</span>
            <strong class="text-base text-[#2d2620]">{{ item.value }}</strong>
          </div>
        </div>
      </div>
      <form v-reveal class="grid gap-4 rounded-[28px] bg-white p-7 shadow-[0_24px_60px_rgba(39,28,19,0.16)]">
        <label class="grid gap-2 text-sm text-[#5a4f45]">
          {{ t('contact.form.name') }}
          <input
            type="text"
            :placeholder="t('contact.form.namePlaceholder')"
            class="rounded-xl border border-[#ddcbb8] bg-[#fffaf4] px-4 py-3"
          />
        </label>
        <label class="grid gap-2 text-sm text-[#5a4f45]">
          {{ t('contact.form.phone') }}
          <input
            type="tel"
            :placeholder="t('contact.form.phonePlaceholder')"
            class="rounded-xl border border-[#ddcbb8] bg-[#fffaf4] px-4 py-3"
          />
        </label>
        <label class="grid gap-2 text-sm text-[#5a4f45]">
          {{ t('contact.form.service') }}
          <select class="rounded-xl border border-[#ddcbb8] bg-[#fffaf4] px-4 py-3">
            <option v-for="option in options" :key="option">{{ option }}</option>
          </select>
        </label>
        <label class="grid gap-2 text-sm text-[#5a4f45]">
          {{ t('contact.form.note') }}
          <textarea
            rows="4"
            :placeholder="t('contact.form.notePlaceholder')"
            class="rounded-xl border border-[#ddcbb8] bg-[#fffaf4] px-4 py-3"
          ></textarea>
        </label>
        <button
          class="inline-flex items-center justify-center rounded-full bg-[#664836] px-6 py-3 text-sm font-semibold text-[#fff5ea] shadow-[0_18px_30px_rgba(34,25,18,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_26px_rgba(0,0,0,0.12)]"
          type="submit"
        >
          {{ t('contact.form.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>
