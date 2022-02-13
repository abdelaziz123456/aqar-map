
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';
import translationAR from './locales/ar.json';
import translationEN from './locales/en.json';

const resources={
    en: {
        translation: translationEN
      },
      ar:{
        translation: translationAR
      }
}

i18n
  .use(LanguageDetector)
 
  .use(initReactI18next) 
  .init({
  
    resources,
    
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false 
    },
    react: {
      wait: true,
      useSuspense: false,
   }, 
  });


  export default i18n ;

