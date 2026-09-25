import { computed } from 'vue'
import { useI18n } from 'vue-i18n'


export function useLanguage() {

  const { locale } = useI18n()


  /* =========================
     CURRENT LANGUAGE
  ========================= */

  const currentLanguage = computed(() => locale.value)


  /* =========================
     CHANGE LANGUAGE
  ========================= */

  const setLanguage = (language) => {

    if (language !== 'fr' && language !== 'en') {
      return
    }

    locale.value = language

    localStorage.setItem(
      'language',
      language
    )

    document.documentElement.lang = language
  }


  /* =========================
     TOGGLE LANGUAGE
  ========================= */

  const toggleLanguage = () => {

    setLanguage(
      locale.value === 'fr'
        ? 'en'
        : 'fr'
    )

  }


  /* =========================
     INITIAL HTML LANGUAGE
  ========================= */

  document.documentElement.lang = locale.value


  return {
    currentLanguage,
    setLanguage,
    toggleLanguage
  }
}