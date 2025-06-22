import styles from "./Button.module.scss";
import { useTranslation } from "react-i18next";
import ArrowIcon from "../../../assets/ArrowIcon.svg?react";
import cn from "classnames";

export const Button = ({ type, arrow = true, className, ...rest }) => {
  const { t } = useTranslation();

  const button = {
    explore: {
      text: `home.btn`,
      className: cn(styles.btn, styles.btnGreen, className),
    },
    university: {
      text: "footer.university-gadgets",
      className: cn(styles.btn, styles.btnWhite, className),
    },
    website: {
      text: "footer.website",
      className: cn(styles.btn, styles.btnWhite, className),
    },
    PUEBFoundation: {
      text: "partnership.jubilee-cta.btn",
      className: cn(styles.btn, styles.btnGreen, className),
    },
    support: {
      text: "partnership.support.cards.btn",
      className: cn(styles.btn, styles.btnWhite, className),
    },
    supportAccent: {
      text: "partnership.support.cards.btn",
    },
    fullVideo: {
      text: "alumni.btn",
      className: cn(styles.btn, styles.btnGreen, className),
    },
  };

  return (
    <button className={button[type].className} {...rest}>
      <span>{t(button[type].text)}</span>
      {arrow && (
        <span className={styles.arrowIcon}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
