import { createApp, watch } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)

app.directive('reveal', {
  mounted(el) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 },
    )
    el.classList.add('reveal')
    observer.observe(el)
  },
})

app.use(i18n)

watch(
  () => i18n.global.locale.value,
  (value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', value)
    }
  },
  { immediate: true },
)

app.mount('#app')
