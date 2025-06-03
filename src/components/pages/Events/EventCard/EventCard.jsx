import styles from "./EventCard.module.scss";
import { Title, DateMark, Text } from "../../../UI";

export const EventCard = ({ icon: Icon, date, location, text }) => {
  return (
    <li className={styles.eventCard}>
      <div className={styles.photo}>
        <Icon className={styles.photoIcon} />
      </div>
      <div className={styles.description}>
        <DateMark date={date} location={location} />
        <Title text="Academic Excellence Forum" />
        <Text text={text} />
      </div>
    </li>
  );
};
