import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LogoFooterIcon from "../../assets/LogoFooterIcon.svg?react";
import { socialIcons } from "../../assets/SocialMediaIcons";
import { Button } from "../UI";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Link to="/">
            <LogoFooterIcon className={styles.logoIcon} />
          </Link>
        </div>

        <div className={styles.social}>
          <div className={styles.socialTitle}>{t("footer.social_title")}</div>
          <ul className={styles.socialWrapperOfIcons}>
            {socialIcons.map(({ icon: Icon, alt }) => (
              <li className={styles.socialIconWrap} key={alt}>
                <Icon className={styles.socialIcon} title={alt} />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.likeUs}>
          <div className={styles.likeUsTitle}>{t("footer.title")}</div>
          <Button type="university" />
          <Button type="website" />
        </div>
      </div>

      <div className={styles.policy}>{t("footer.rights")}</div>
    </footer>
  );
};
