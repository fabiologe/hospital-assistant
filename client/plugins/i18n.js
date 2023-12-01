import { createI18n } from 'vue-i18n'
import en from "../locales/en.json"
import fr from "../locales/fr.json"
import ar from "../locales/ar.json"
import es from "../locales/es.json"
import zh from "../locales/zh.json"

export default defineNuxtPlugin(nuxtApp => {
  const i18n = createI18n({
    globalInjection: true,
  //   // Set the initial locale
    locale: "en",

  //   // Set the fallback locale in case the current locale can't be found
    fallbackLocale: "en",

  //   // Associate each locale to a content file
    messages: {
      en,
      fr,
      ar,
      es,
      zh
    }
  });

  // nuxtApp.vueApp.i18n = i18n
  nuxtApp.vueApp.use(i18n)
})
