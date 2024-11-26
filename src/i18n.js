import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: {
        title: "Hi, I'm Javier Calvo",
        description: "Passionate about technology and data.",
      },
    },
  },
  es: {
    translation: {
      home: {
        title: "Hola, soy Javier Calvo",
        description: "Apasionado de la informática y los datos.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
