import styles from "./Title.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export const Title = ({ text, className = "" }) => {
  const { t } = useTranslation();

  return <div className={cn(styles.title, className)}>{t(text)}</div>;
};
