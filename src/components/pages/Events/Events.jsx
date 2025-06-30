import styles from "./Events.module.scss";
import { EventCard } from "./";
import { Title, Subtitle } from "../../UI";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../../utils/api";
import { useTranslation } from "react-i18next";

export const EventsComponent = () => {
  const { i18n } = useTranslation();

  const { data: allEvents, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: fetchEvents,
  });

  if (isLoading) return <div>Loading</div>
  if (isError) return <div>Error</div>

  const mapEventToProps = (event) => {
    const langContent = event[i18n.language] || event.en;

    return {
      id: event.id,
      imageUrl: event.mainImageUrl,
      date: new Date(event.date),
      location: langContent.location,
      title: langContent.title,
      longDescription: langContent.longDescription,
    }
  }

  const upcomingEventsCards = allEvents.filter(event => !event.isFinished).map(mapEventToProps);
  const pastEventsCards = allEvents.filter(event => event.isFinished).map(mapEventToProps);

  return (
    <div className={styles.events}>
      <Title text="events.title" className={styles.center} />
      <Subtitle text="events.subtitle" className={styles.center} />
      <Title text="events.titleUpcoming" className={styles.upcomingTitle} />
      <ul className={styles.upcoming}>
        {upcomingEventsCards.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </ul>
      <Title text="events.titlePast" className={styles.upcomingTitle} />
      <ul className={styles.upcoming}>
        {pastEventsCards.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </ul>
      <div className={styles.past}></div>
    </div>
  );
};
