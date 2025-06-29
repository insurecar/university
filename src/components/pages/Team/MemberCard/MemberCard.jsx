import { useState } from "react";
import styles from "./MemberCard.module.scss";
import { ImageSkeleton } from "../../../UI";

const MemberCard = ({ member }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!isLoaded && <ImageSkeleton />}
        <img
          src={member.image}
          // loading="lazy"
          alt={member.name}
          className={styles.image}
          onLoad={() => setIsLoaded(true)}
          style={{
            opacity: isLoaded ? 1 : 0,
          }}
        />
      </div>
      <h4 className={styles.name}>{member.name}</h4>
      <p className={styles.title}>{member.title}</p>
    </div>
  );
};

export default MemberCard;
