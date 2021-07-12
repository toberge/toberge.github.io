import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import no from "./no/translations.json";
import en from "./en/translations.json";

export const initTranslations = async () => {
    await i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: "en",
            interpolation: { escapeValue: true },
            resources: {
                en: {
                    translation: { ...en },
                },
                no: {
                    translation: { ...no },
                },
            },
        });
};

export default i18n;
