import styles from "./Menu.module.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Menu = () => {
  const { t } = useTranslation();
  const headerItems = t("header", { returnObjects: true });

  return (
    <nav className={styles.menu}>
      {Object.entries(headerItems).map(([key, value]) => (
        <Link to={key} className={styles.listItem} key={key} data-text={value}>
          {value}
        </Link>
      ))}
    </nav>
  );
};
