import { useState, useEffect, useRef } from "react";
import styles from "./Search.module.scss";
import EarthIcon from "../../../assets/EarthIcon.svg?react";
import SearchIcon from "../../../assets/SearchIcon.svg?react";

import { useTranslation } from "react-i18next";

export const Search = () => {
  const [search, setSearch] = useState(true);
  const { i18n } = useTranslation();

  const inputRef = useRef(true);
  const containerRef = useRef(true);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pl" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setSearch(true);
      }
    };

    if (!search) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [search]);

  return (
    <div className={styles.search} ref={containerRef}>
      <button className={styles.btn} onClick={toggleLanguage}>
        <EarthIcon />
        {i18n.language === "en" ? "Pl" : "En"}
      </button>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Search"
          autoFocus={!search}
          className={`${styles.input} ${!search ? styles.inputVisible : ""}`}
        />
      </div>

      {search && (
        <button onClick={() => setSearch(false)}>
          <SearchIcon />
        </button>
      )}
    </div>
  );
};
