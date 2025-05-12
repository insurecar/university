import styles from "./Menu.module.scss";
import { useTranslation } from "react-i18next";

export const Menu = () => {
  const { t } = useTranslation();
  const headerItems = t("header", { returnObjects: true });
  return (
    <ul className={styles.menu}>
      {Object.entries(headerItems).map(([key, value]) => (
        <li className={styles.listItem} key={key} data-text={value}>
          {value}
        </li>
      ))}
    </ul>
  );
};
