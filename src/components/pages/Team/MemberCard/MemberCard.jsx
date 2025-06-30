import { useTranslation } from 'react-i18next';
import styles from './MemberCard.module.scss';

const MemberCard = ({ member }) => {
  const { i18n } = useTranslation();

  const functionTranslation = member.function?.[i18n.language] || member.function?.en;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={member.imageUrl} alt={member.name} className={styles.image} />
      </div>
      <h4 className={styles.name}>{member.name}</h4>
      <p className={styles.title}>{functionTranslation}</p>
    </div>
  );
};

export default MemberCard;