<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const projects = computed(() => tm('projects.list') || [])

const images = [
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
]
</script>

<template>
  <section id="projects" class="bg-[linear-gradient(160deg,#fdf8f3_0%,#f4e9dc_100%)] py-24">
    <div class="mx-auto w-[min(1200px,90vw)]">
      <div v-reveal class="mb-12 grid gap-3 text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d6a5a]">{{ t('projects.eyebrow') }}</p>
        <h2 class="font-['Playfair_Display'] text-[clamp(2rem,3vw,2.9rem)]">{{ t('projects.title') }}</h2>
        <p class="text-[1.05rem] leading-[1.7] text-[#4a433b]">
          {{ t('projects.subtitle') }}
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          v-reveal
          class="overflow-hidden rounded-[18px] bg-white shadow-[0_24px_60px_rgba(39,28,19,0.16)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_40px_rgba(39,28,19,0.2)]"
        >
          <div class="h-[210px]">
            <img class="h-full w-full object-cover" :src="images[index]" :alt="project.title" />
          </div>
          <div class="p-4">
            <h3 class="text-[1.2rem] font-semibold text-[#2d2620]">{{ project.title }}</h3>
            <p class="text-[#6a5d52]">{{ project.style }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
