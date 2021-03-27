import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import AppLangs from './AppLangs';

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    supportedLngs: Object.keys(AppLangs),
    backend: {
      /* translation file path */
      loadPath: '/assets/{{ns}}/{{lng}}.json',
    },
    fallbackLng: 'en',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
