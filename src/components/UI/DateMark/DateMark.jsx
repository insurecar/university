import { useTranslation } from "react-i18next";

import styles from "./DateMark.module.scss";
import cn from "classnames";

export const DateMark = ({ date, location, className }) => {
  const { t } = useTranslation();
  const [day, month, year] = date.split(".");

  return (
    <div className={cn(styles.date, className)}>
      {t(`months.${+month - 1}`)}, {day}, {year} |
      <span className={styles.point}>&#128205;</span>
      {location}
    </div>
  );
};
