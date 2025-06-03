import styles from "./Text.module.scss";
import { useTranslation } from "react-i18next";

export const Text = ({ text }) => {
  const { t } = useTranslation();
  return <div className={styles.text}>{text}</div>;
};
