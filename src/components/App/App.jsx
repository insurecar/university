import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "..";
import styles from "./App.module.scss";

export const App = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    // <div>
    //   <h1 className={styles.hed}>{t("welcome")}</h1>
    //   <button onClick={toggleLanguage}>
    //     {i18n.language === "en" ? "Pl" : "En"}
    //   </button>
    // </div>
    <>
      <Header />
    </>
  );
};
