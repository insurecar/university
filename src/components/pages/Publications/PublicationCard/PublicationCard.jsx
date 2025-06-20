import styles from "./PublicationCard.module.scss";
import { Title, Text, Button } from "../../../UI";

export const PublicationCard = ({ icon, text, name, onOpen }) => {
  return (
    <li className={styles.publicationCard}>
      <div className={styles.photo} onClick={onOpen}>
        <img src={icon} className={styles.photoImg} alt={name} />
      </div>
      <div className={styles.description}>
        <Title text={name} />
        <Text text={text} />
        <Button
          type="fullBook"
          className={styles.bookButton}
          onClick={onOpen}
        ></Button>
      </div>
    </li>
  );
};
