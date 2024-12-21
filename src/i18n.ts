import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALE_LIST } from './utils/localeList';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/reactionroll/locales/{{lng}}/{{ns}}.json',
    },
    debug: false,
    fallbackLng: 'en',
    supportedLngs: LOCALE_LIST.map(language => language.langCode),
  });

export default i18n;
