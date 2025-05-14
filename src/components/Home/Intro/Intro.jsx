import styles from "./Intro.module.scss";
import { useTranslation } from "react-i18next";
import SignatureIcon from "../../../assets/SignatureIcon.svg?react";
import ArrowIcon from "../../../assets/ArrowIcon.svg?react";
import PersonPhoto from "../../../assets/PersonPhoto.svg?react";
import StarIcon from "../../../assets/StarIcon.svg?react";

export const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.intro}>
      <div className={styles.description}>
        <div className={styles.title}>{t("home.title")}</div>
        <div className={styles.text}>{t("home.text")}</div>
        <div className={styles.person}>
          <div className={styles.job}>
            <div className={styles.position}>{t("home.position")}</div>
            <div className={styles.name}>Lincoln Rhiel Madsen</div>
          </div>
          <div className={styles.signature}>
            <SignatureIcon className={styles.signatureIcon} />
          </div>
        </div>
        <button className={styles.btn}>
          <span>{t("home.btn")}</span>
          <span>
            <ArrowIcon />
          </span>
        </button>
      </div>
      <div className={styles.photo}>
        <PersonPhoto className={styles.svg} />
      </div>
      <div className={styles.star}>
        <StarIcon />
      </div>
    </div>
  );
};
