import styles from "./EventCard.module.scss";
import { Title, DateMark, Text } from "../../../UI";

export const EventCard = ({ imageUrl, date, location, title, longDescription }) => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const dateForDateMark = date.toLocaleDateString("pl-PL", options);

  return (
    <li className={styles.eventCard}>
      <div className={styles.photo}>
        <img src={imageUrl} className={styles.photo} />
      </div>
      <div className={styles.description}>
        <DateMark date={dateForDateMark} location={location} />
        <Title text={title} />
        <Text text={longDescription} />
      </div>
    </li>
  );
};
