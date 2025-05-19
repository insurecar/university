import { useState } from "react";
import { format, parseISO } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import styles from "./EventSlider.module.scss";

const events = [
  {
    date: "2025-05-01",
    title: "AI Kickoff",
    description: "Opening summit with keynote speakers.",
    link: "#",
  },
  {
    date: "2025-05-03",
    title: "Quantum Day",
    description: "Exploring quantum computing.",
    link: "#",
  },
  {
    date: "2025-05-06",
    title: "Startup Panel",
    description: "Startups showcase innovations.",
    link: "#",
  },
  {
    date: "2025-05-10",
    title: "Data Science Meetup",
    description: "Latest in machine learning.",
    link: "#",
  },
  {
    date: "2025-05-15",
    title: "AI & Ethics",
    description: "Discussion on ethical AI.",
    link: "#",
  },
  {
    date: "2025-05-20",
    title: "Robotics Expo",
    description: "Robots from around the world.",
    link: "#",
  },
  {
    date: "2025-05-25",
    title: "Green Tech",
    description: "Sustainable technologies for future.",
    link: "#",
  },
  {
    date: "2025-06-02",
    title: "HealthTech Future",
    description: "Healthcare meets technology.",
    link: "#",
  },
  {
    date: "2025-06-05",
    title: "EdTech Talks",
    description: "Technology transforming education.",
    link: "#",
  },
  {
    date: "2025-06-10",
    title: "Cybersecurity Forum",
    description: "Securing the digital future.",
    link: "#",
  },
  {
    date: "2025-06-12",
    title: "FinTech Pulse",
    description: "Revolutionizing finance with technology.",
    link: "#",
  },
  {
    date: "2025-06-15",
    title: "AR/VR Showcase",
    description: "Experience augmented and virtual reality.",
    link: "#",
  },
  {
    date: "2025-06-18",
    title: "DevOps Summit",
    description: "Best practices in DevOps and CI/CD.",
    link: "#",
  },
  {
    date: "2025-06-20",
    title: "Women in Tech",
    description: "Empowering women in the tech industry.",
    link: "#",
  },
  {
    date: "2025-06-22",
    title: "Smart Cities Forum",
    description: "Urban planning meets innovation.",
    link: "#",
  },
  {
    date: "2025-06-25",
    title: "Blockchain Breakthroughs",
    description: "Exploring decentralized technologies.",
    link: "#",
  },
  {
    date: "2025-06-28",
    title: "SaaS Trends",
    description: "What's next in software as a service.",
    link: "#",
  },
  {
    date: "2025-07-01",
    title: "Cloud Conference",
    description: "Scalability and infrastructure in the cloud.",
    link: "#",
  },
  {
    date: "2025-07-03",
    title: "Product Design Day",
    description: "User experience and product strategy.",
    link: "#",
  },
  {
    date: "2025-07-06",
    title: "Tech Career Fair",
    description: "Meet employers and grow your tech career.",
    link: "#",
  },
  {
    date: "2025-07-10",
    title: "Hackathon Finale",
    description: "Coding competition and award ceremony.",
    link: "#",
  },
];

const getMonthTitle = (lang, events) => {
  const locales = lang === "pl" ? pl : enUS;
  const months = Array.from(
    new Set(
      events.map((event) =>
        format(parseISO(event.date), "LLLL", { locale: locales })
      )
    )
  );
  return months.join("/");
};

export const EventSlider = () => {
  const [start, setStart] = useState(0);
  const { i18n } = useTranslation();
  const lang = i18n.language === "pl" ? "pl" : "en";
  const itemsPerPage = 6;

  const next = () => {
    if (start + itemsPerPage < events.length) {
      setStart(start + itemsPerPage);
    }
  };

  const prev = () => {
    if (start - itemsPerPage >= 0) {
      setStart(start - itemsPerPage);
    }
  };

  const visibleEvents = events.slice(start, start + itemsPerPage);

  return (
    <div className={styles.sliderWrapper}>
      <h2 className={styles.title}>{getMonthTitle(lang, visibleEvents)}</h2>
      <div className={styles.slider}>
        {visibleEvents.map((event) => (
          <div className={styles.card} key={event.date}>
            <div className={styles.day}>
              {format(parseISO(event.date), "d")}
            </div>
            <div className={styles.title}>{event.title}</div>
            <div className={styles.desc}>{event.description}</div>
            <a className={styles.link} href={event.link}>
              More details →
            </a>
          </div>
        ))}
      </div>
      <div className={styles.navButtons}>
        <button onClick={prev}>&larr;</button>
        <button onClick={next}>&rarr;</button>
      </div>
    </div>
  );
};
