<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const isOpen = ref(false)
const isMenuOpen = ref(false)
const menuRef = ref(null)

const languages = [
  { code: 'uz', label: 'UZ', name: "O'zbek", flag: '🇺🇿' },
  { code: 'ru', label: 'RU', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
]

const currentLanguage = computed(
  () => languages.find((lang) => lang.code === locale.value) ?? languages[0],
)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const selectLanguage = (code) => {
  locale.value = code
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <header
    class="sticky top-0 z-10 border-b border-[#3c2d24]/10 bg-[#fff4ea]/90 backdrop-blur motion-safe:animate-[slideDown_0.8s_ease_both]"
  >
    <div class="mx-auto flex w-[min(1200px,90vw)] items-center justify-between gap-6 py-4">
      <div class="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="HomeDesign logo"
          class="w-[120px] rounded-[14px]"
        />
        <div>
          <p class="font-['Playfair_Display'] text-[1.4rem]">HomeDesign</p>
          <span class="text-sm text-[#5c5248]">{{ t('header.tagline') }}</span>
        </div>
      </div>
      <nav class="hidden items-center gap-5 text-[0.95rem] text-[#51463c] lg:flex">
        <a class="transition hover:text-[#f07a1f]" href="#about">{{ t('nav.about') }}</a>
        <a class="transition hover:text-[#f07a1f]" href="#services">{{ t('nav.services') }}</a>
        <a class="transition hover:text-[#f07a1f]" href="#reviews">{{ t('nav.reviews') }}</a>
        <a class="transition hover:text-[#f07a1f]" href="#contact">{{ t('nav.contact') }}</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="relative" ref="menuRef">
          <button
            type="button"
            class="flex items-center gap-2 rounded-full border border-[#f2c7a0] px-4 py-2 text-sm font-semibold text-[#f07a1f] transition hover:-translate-y-0.5"
            @click.stop="toggleMenu"
          >
            <span class="text-base">{{ currentLanguage.flag }}</span>
            <span>{{ currentLanguage.label }}</span>
          </button>
          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-40 overflow-hidden rounded-[16px] bg-white shadow-[0_24px_60px_rgba(39,28,19,0.16)]"
          >
            <button
              v-for="lang in languages"
              :key="lang.code"
              type="button"
              class="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-[#2d2620] transition hover:bg-[#ffe9d5]"
              @click="selectLanguage(lang.code)"
            >
              <span class="text-base">{{ lang.flag }}</span>
              <span class="font-semibold">{{ lang.label }}</span>
              <span class="text-xs text-[#7d6a5a]">{{ lang.name }}</span>
            </button>
          </div>
        </div>
        <button
          class="hidden items-center justify-center rounded-full bg-[#f07a1f] px-6 py-3 text-sm font-semibold text-[#fff1e3] shadow-[0_18px_30px_rgba(34,25,18,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_26px_rgba(0,0,0,0.12)] lg:inline-flex"
        >
          {{ t('header.cta') }}
        </button>
        <button
          type="button"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2c7a0] text-[#f07a1f] transition hover:-translate-y-0.5 lg:hidden"
          @click="toggleMobileMenu"
          aria-label="Toggle navigation"
        >
          <span class="relative block h-4 w-5">
            <span
              class="absolute left-0 top-0 h-0.5 w-full rounded bg-[#f07a1f] transition-all duration-300"
              :class="isMenuOpen ? 'top-1.5 rotate-45' : ''"
            ></span>
            <span
              class="absolute left-0 top-1.5 h-0.5 w-full rounded bg-[#f07a1f] transition-all duration-300"
              :class="isMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="absolute left-0 top-3 h-0.5 w-full rounded bg-[#f07a1f] transition-all duration-300"
              :class="isMenuOpen ? 'top-1.5 -rotate-45' : ''"
            ></span>
          </span>
        </button>
      </div>
    </div>
    <div
      class="border-t border-[#3c2d24]/10 bg-[#fff4ea]/95 backdrop-blur transition-all duration-300 lg:hidden"
      :class="isMenuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'"
    >
      <div class="mx-auto grid w-[min(1200px,90vw)] gap-3 overflow-hidden py-4 transition-all duration-300">
        <a class="text-[#51463c]" href="#about" @click="isMenuOpen = false">{{ t('nav.about') }}</a>
        <a class="text-[#51463c]" href="#services" @click="isMenuOpen = false">{{ t('nav.services') }}</a>
        <a class="text-[#51463c]" href="#repair-types" @click="isMenuOpen = false">{{ t('nav.repairTypes') }}</a>
        <a class="text-[#51463c]" href="#benefits" @click="isMenuOpen = false">{{ t('nav.benefits') }}</a>
        <a class="text-[#51463c]" href="#projects" @click="isMenuOpen = false">{{ t('nav.projects') }}</a>
        <a class="text-[#51463c]" href="#process" @click="isMenuOpen = false">{{ t('nav.process') }}</a>
        <a class="text-[#51463c]" href="#reviews" @click="isMenuOpen = false">{{ t('nav.reviews') }}</a>
        <a class="text-[#51463c]" href="#contact" @click="isMenuOpen = false">{{ t('nav.contact') }}</a>
        <button
          class="mt-2 inline-flex items-center justify-center rounded-full bg-[#f07a1f] px-6 py-3 text-sm font-semibold text-[#fff1e3] shadow-[0_18px_30px_rgba(34,25,18,0.25)]"
        >
          {{ t('header.cta') }}
        </button>
      </div>
    </div>
  </header>
</template>
