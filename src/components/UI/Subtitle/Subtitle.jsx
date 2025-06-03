import styles from "./Subtitle.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export const Subtitle = ({ text, className }) => {
  const { t } = useTranslation();
  return <div className={cn(styles.subtitle, className)}>{t(text)}</div>;
};
