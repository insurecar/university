import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import styles from "./PastEventSlider.module.scss";
import bg1 from "../../../assets/images/eventBg1.png";
import bg2 from "../../../assets/images/eventBg2.jpg";
import bg3 from "../../../assets/images/eventBg3.jpg";

const backgrounds = [bg1, bg2, bg3];

const events = [
  {
    date: "2025-05-01",
    title: "AI Kickoff",
    description: "Opening summit with keynote speakers.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-05-03",
    title: "Quantum Day",
    description: "Exploring quantum computing.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-05-06",
    title: "Startup Panel",
    description: "Startups showcase innovations.",
    link: "#",
    img_url: backgrounds[2],
  },
  {
    date: "2025-05-10",
    title: "Data Science Meetup",
    description: "Latest in machine learning.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-05-15",
    title: "AI & Ethics",
    description: "Discussion on ethical AI.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-05-20",
    title: "Robotics Expo",
    description: "Robots from around the world.",
    link: "#",
    img_url: backgrounds[2],
  },
  {
    date: "2025-05-25",
    title: "Green Tech",
    description: "Sustainable technologies for future.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-06-02",
    title: "HealthTech Future",
    description: "Healthcare meets technology.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-06-05",
    title: "EdTech Talks",
    description: "Technology transforming education.",
    link: "#",
    img_url: backgrounds[2],
  },
  {
    date: "2025-06-10",
    title: "Cybersecurity Forum",
    description: "Securing the digital future.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-06-12",
    title: "FinTech Pulse",
    description: "Revolutionizing finance with technology.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-06-15",
    title: "AR/VR Showcase",
    description: "Experience augmented and virtual reality.",
    link: "#",
    img_url: backgrounds[2],
  },
  {
    date: "2025-06-18",
    title: "DevOps Summit",
    description: "Best practices in DevOps and CI/CD.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-06-20",
    title: "Women in Tech",
    description: "Empowering women in the tech industry.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-06-22",
    title: "Smart Cities Forum",
    description: "Urban planning meets innovation.",
    link: "#",
    img_url: backgrounds[2],
  },
  {
    date: "2025-06-25",
    title: "Blockchain Breakthroughs",
    description: "Exploring decentralized technologies.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-06-28",
    title: "SaaS Trends",
    description: "What's next in software as a service.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-07-01",
    title: "Cloud Conference",
    description: "Scalability and infrastructure in the cloud.",
    link: "#",
    img_url: backgrounds[2],
  },
  {
    date: "2025-07-03",
    title: "Product Design Day",
    description: "User experience and product strategy.",
    link: "#",
    img_url: backgrounds[0],
  },
  {
    date: "2025-07-06",
    title: "Tech Career Fair",
    description: "Meet employers and grow your tech career.",
    link: "#",
    img_url: backgrounds[1],
  },
  {
    date: "2025-07-10",
    title: "Hackathon Finale",
    description: "Coding competition and award ceremony.",
    link: "#",
    img_url: backgrounds[2],
  },
];

export const PastEventSlider = () => {
  const [start, setStart] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className={styles.section} id="past-events">
      <h2 className={styles.heading}>Past events</h2>
      <p className={styles.subheading}>Explore events</p>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          {visibleEvents.map((event) => (
            <div className={styles.card} key={event.date}>
              <img
                src={event.img_url}
                alt="Photo from the event"
                className={styles.cardImage}
              />
              <div className={styles.cardOverlay}>
                <div className={styles.date}>
                  {format(parseISO(event.date), "MMMM d, yyyy")}
                </div>
                <div className={styles.info}>
                  <p className={styles.title}>{event.title}</p>
                  <p className={styles.desc}>{event.description}</p>
                  <a className={styles.link} href={event.link}>
                    More details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navButtons}>
          <button onClick={prev}>&larr;</button>
          <button onClick={next}>&rarr;</button>
        </div>
      </div>
    </section>
  );
};
