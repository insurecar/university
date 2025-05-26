import styles from "./EventCard.module.scss";
import First from "../../../../assets/EventsIcons/First.svg?react";
import { Title, DateMark } from "../../../UI";

export const EventCard = () => {
  return (
    <li className={styles.eventCard}>
      <div className={styles.photo}>
        <First className={styles.photoIcon} />
      </div>
      <div className={styles.description}>
        <DateMark date="11.05.2025" location="Lodz" />
        <Title text="Academic Excellence Forum" />
        <div className={styles.text}>
          A summit bringing together experts from across Europe interested in AI
          and supercomputing. A summit bringing together experts from across
          Europe interested in AI and supercomputing. A summit bringing together
          experts from across Europe interested in AI and supercomputing. A
          summit bringing together experts from across Europe interested in AI
          and supercomputing. A summit bringing together experts from across
          Europe interested in AI and supercomputing.
        </div>
      </div>
    </li>
  );
};
