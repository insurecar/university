import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LogoFooterIcon from "../../assets/LogoFooterIcon.svg?react";
import { socialIcons } from "../../assets/SocialMediaIcons";
import { Button } from "../UI";

export const Footer = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  console.log("TRANSLATE_________", language);

  const are = {
    id: "7f3a5a18-5e9b-4311-8599-abc123abc123",
    date: "2020-07-30T18:00:00.000Z",
    isFinished: true,
    pl: {
      title: "Dni Historii",
      shortDescription: "Święto miasta z rekonstrukcjami historycznymi.",
      longDescription: "Wydarzenie poświęcone dawnym czasom Gdańska...",
      location: "Gdańsk, Polska",
    },
    en: {
      title: "Dni Historii",
      shortDescription: "A summit bringing together experts from across Eur.",
      longDescription: "A summit bringing together experts from across Eur.",
      location: "Gdańsk, Polska",
    },
    images: "https://storage.googleapis.com/your-bucket/events/bg.jpg",
  };

  console.log("TRANSLATIONS++++++", are[language]);

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
            {socialIcons.map(({ icon: Icon, alt, className, link }) => (
              <li className={styles.socialIconWrap} key={alt}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to our ${alt} page`}
                > 
                  <Icon className={`${styles.socialIcon} ${styles[className]}`} title={alt} />
                </a>
                <span className={styles.socialIcon__tooltip}>{alt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.likeUs}>
          <div className={styles.likeUsTitle}>{t("footer.title")}</div>
          <div className={styles.likeUs__btns}>
            <Button type="university" />
            <Button type="website" />
          </div>
        </div>
      </div>

      <div className={styles.policy}>{t("footer.rights")}</div>
    </footer>
  );
};
