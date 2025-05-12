import styles from "./Search.module.scss";

import { useTranslation } from "react-i18next";

export const Search = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };
  return (
    <div className={styles.search}>
      <button onClick={toggleLanguage}>
        {i18n.language === "en" ? "Pl" : "En"}
      </button>
    </div>
  );
};
