import { createI18n } from 'vue-i18n'

import fr from './components/locales/fr.js'
import en from './components/locales/en.js'


/* =========================
   SAVED LANGUAGE
========================= */

const savedLanguage = localStorage.getItem('language')


/* =========================
   BROWSER LANGUAGE
========================= */

const browserLanguage = navigator.language
  .toLowerCase()
  .startsWith('fr')
  ? 'fr'
  : 'en'


/* =========================
   DEFAULT LANGUAGE
========================= */

const defaultLanguage =
  savedLanguage === 'fr' || savedLanguage === 'en'
    ? savedLanguage
    : browserLanguage


/* =========================
   I18N
========================= */

const i18n = createI18n({
  legacy: false,

  locale: defaultLanguage,

  fallbackLocale: 'fr',

  messages: {
    fr,
    en
  }
})


export default i18n