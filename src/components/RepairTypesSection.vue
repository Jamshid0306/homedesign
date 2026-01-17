<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
const types = computed(() => tm('repairTypes.list') || [])
</script>

<template>
  <section id="repair-types" class="py-24">
    <div class="mx-auto w-[min(1200px,90vw)]">
      <div v-reveal class="mb-12 grid gap-3 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('repairTypes.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('repairTypes.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">{{ t('repairTypes.subtitle') }}</p>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        <article
          v-for="type in types"
          :key="type.title"
          v-reveal
          class="flex h-full flex-col gap-4 rounded-[20px] bg-white p-6 shadow-[0_24px_60px_rgba(39,28,19,0.16)]"
        >
          <div>
            <h3 class="text-[1.4rem] font-semibold text-[#2d2620]">{{ type.title }}</h3>
            <p v-if="type.duration" class="mt-1 text-sm font-semibold text-[#8b6d51]">{{ type.duration }}</p>
          </div>
          <ul class="grid gap-2 text-sm text-[#4a433b]">
            <li v-for="(item, index) in type.items" :key="index" class="flex gap-2">
              <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#b5845b]"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
