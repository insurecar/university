import styles from "./Logo.module.scss";
import LogoIcon from "../../../assets/LogoIcon.svg?react";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon className={styles.logoIcon} />
    </div>
  );
};
