import { useState } from "react";
import styles from "./MemberCard.module.scss";
import { ImageSkeleton } from "../../../UI";
import { useTranslation } from "react-i18next";

const MemberCard = ({ member }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { i18n } = useTranslation();

  const functionTranslation = member.function?.[i18n.language] || member.function?.en;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!isLoaded && <ImageSkeleton />}
        <img
          src={member.imageUrl}
          loading="lazy"
          alt={member.name}
          className={styles.image}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
          }}
        />
      </div>
      <h4 className={styles.name}>{member.name}</h4>
      <p className={styles.title}>{functionTranslation}</p>
    </div>
  );
};

export default MemberCard;
