import { EventSlider } from "../EventSlider/EventSlider";
import { useTranslation } from "react-i18next";
import styles from "./Calendar.module.scss";

export const Calendar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.calendar}>
      <div className={styles.description}>
        <h2 className={styles.title}>{t("calendar.title")}</h2>
        <p className={styles.subtitle}>{t("calendar.subtitle")}</p>
      </div>
      <EventSlider />
    </div>
  );
};
