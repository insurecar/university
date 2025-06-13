import styles from './MemberCard.module.scss';

const MemberCard = ({ member }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={member.image} alt={member.name} className={styles.image} />
      </div>
      <h4 className={styles.name}>{member.name}</h4>
      <p className={styles.title}>{member.title}</p>
    </div>
  );
};

export default MemberCard;