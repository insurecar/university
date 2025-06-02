import styles from "./Events.module.scss";
import { EventCard } from "./";
import { Title, Subtitle } from "../../UI";

export const Events = () => {
  return (
    <div className={styles.events}>
      <Title text="events.title" className={styles.center} />
      <Subtitle text="events.subtitle" className={styles.center} />
      <Title text="events.titleUpcoming" />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      {/* <Title text="events.titlePast" /> */}
    </div>
  );
};
