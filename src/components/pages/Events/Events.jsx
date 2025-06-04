import styles from "./Events.module.scss";
import { EventCard } from "./";
import { Title, Subtitle } from "../../UI";
import First from "../../../assets/EventsIcons/First.svg?react";
import Second from "../../../assets/EventsIcons/Second.svg?react";
import Third from "../../../assets/EventsIcons/Third.svg?react";

const upComing = [
  {
    icon: First,
    date: "12.05.2025",
    location: "Krakow",
    title: "Academic Excellence Forum",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
  },
  {
    icon: Second,
    date: "15.09.2025",
    location: "Bialystok",
    title: "Academic Excellence Forum",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
  },
  {
    icon: Third,
    date: "17.11.2025",
    location: "Lodz",
    title: "Academic Excellence Forum",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
  },
];

export const EventsComponent = () => {
  return (
    <div className={styles.events}>
      <Title text="events.title" className={styles.center} />
      <Subtitle text="events.subtitle" className={styles.center} />
      <Title text="events.titleUpcoming" className={styles.upcomingTitle} />
      <ul className={styles.upcoming}>
        {upComing.map((event) => (
          <EventCard key={event.title + event.location} {...event} />
        ))}
      </ul>
      <Title text="events.titlePast" className={styles.upcomingTitle} />
      <ul className={styles.upcoming}>
        {upComing.map((event) => (
          <EventCard key={event.title + event.location} {...event} />
        ))}
      </ul>
      <div className={styles.past}></div>
    </div>
  );
};
