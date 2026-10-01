import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("manthan_language") || "en";
  });

  const changeLanguage = (code) => {
    setLanguage(code);
    localStorage.setItem("manthan_language", code);
  };

  const t = (path) => {
    const value = path
      .split(".")
      .reduce((current, key) => current?.[key], translations[language]);

    return value ?? path;
  };

  const value = useMemo(
    () => ({
      language,
      changeLanguage,
      t,
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useTranslation must be used inside I18nProvider");
  }

  return context;
}
