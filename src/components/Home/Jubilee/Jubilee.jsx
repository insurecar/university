import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Jubilee.module.scss";

const pluralize = (value, forms) => {
  const abs = Math.abs(value);
  if (abs === 1) return forms[0];
  if (abs % 10 >= 2 && abs % 10 <= 4 && (abs < 10 || abs >= 20))
    return forms[1];
  return forms[2];
};

const getTimeLeft = (targetDate) => {
  const diff = new Date(targetDate) - new Date();
  if (diff <= 0) return null;

  const second = Math.floor((diff / 1000) % 60);
  const minute = Math.floor((diff / 1000 / 60) % 60);
  const hour = Math.floor((diff / 1000 / 60 / 60) % 24);
  const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));
  const week = Math.floor(daysTotal / 7);
  const day = daysTotal % 7;

  return [week, day, hour, minute, second];
};

export const Jubilee = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = ["week", "day", "hour", "minute", "second"];

  return (
    timeLeft && (
      <div className={styles.jubilee}>
        <div className={styles.title}>
          {t("jubilee.title")}{" "}
          <span className={styles.titleText}>{t("jubilee.title1")}</span>
        </div>
        <ul className={styles.list}>
          {timeLeft.map((value, index) => {
            const unit = timeUnits[index];
            const forms = t(`jubilee.units.${unit}`, { returnObjects: true });
            return (
              <li key={unit} className={styles.item}>
                <div className={styles.number}>{value}</div>
                <div className={styles.value}>{pluralize(value, forms)}</div>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};
