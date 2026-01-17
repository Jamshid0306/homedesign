<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const contactInfo = computed(() => tm('contact.info') || [])
</script>

<template>
  <footer class="bg-[#1f1914] pb-8 pt-16 text-[#f5ede3]">
    <div v-reveal class="mx-auto grid w-[min(1200px,90vw)] gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div>
        <div class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="HomeDesign logo"
            class="w-[100px] rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
          />
          <p class="font-['Playfair_Display'] text-[1.3rem]">HomeDesign</p>
        </div>
        <p class="mt-3 text-sm leading-[1.6] text-[#d9cfc4]">
          {{ t('footer.text') }}
        </p>
      </div>
      <div class="grid gap-2 text-sm text-[#d0c4b8]">
        <span class="font-semibold text-[#fff0e1]">{{ t('footer.sections') }}</span>
        <a class="transition hover:text-white" href="#about">{{ t('nav.about') }}</a>
        <a class="transition hover:text-white" href="#services">{{ t('nav.services') }}</a>
        <a class="transition hover:text-white" href="#repair-types">{{ t('nav.repairTypes') }}</a>
      </div>
      <div class="grid gap-2 text-sm text-[#d0c4b8]">
        <span class="font-semibold text-[#fff0e1]">{{ t('footer.contact') }}</span>
        <a class="transition hover:text-white" href="tel:+998990536926">{{ t('footer.phone') }}</a>
        <a class="transition hover:text-white" href="mailto:info@domremont.uz">{{ t('footer.email') }}</a>
        <span>{{ contactInfo[2]?.value }}</span>
      </div>
    </div>
    <div
      v-reveal
      class="mx-auto mt-8 w-[min(1200px,90vw)] border-t border-white/10 pt-5 text-center text-xs text-[#c8b8a9]"
    >
      <span>{{ t('footer.copyright') }}</span>
    </div>
  </footer>
</template>
