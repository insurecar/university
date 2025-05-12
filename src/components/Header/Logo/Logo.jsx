import styles from "./Logo.module.scss";
import LogoIcon from "../../../assets/LogoIcon.svg?react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <LogoIcon className={styles.logoIcon} />
    </Link>
  );
};
