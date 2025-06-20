import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import styles from "./EventSlider.module.scss";
import arrowRightIcon from "../../../assets/ArrowRightIcon.svg";

const events = [
  {
    date: "2025-05-01",
    title: "AI Kickoff",
    description:
      "A summit bringing together experts from across Europe interested in AI and supercomputing.",
    link: "#",
  },
  {
    date: "2025-05-02",
    title: "AI Kickoff",
    description:
      "A summit bringing together experts from across Europe interested in AI and supercomputing.",
    link: "#",
  },
  {
    date: "2025-05-03",
    title: "Quantum Day",
    description:
      "A summit bringing together experts from across Europe interested in AI and supercomputing.",
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

const capitalizeMonths = (input) => {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
};

const getMonthName = (lang, date) => {
  const locale = lang === "pl" ? pl : enUS;
  return format(parseISO(date), "LLLL", { locale });
};

export const EventSlider = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "pl" ? "pl" : "en";
  const swiperRef = useRef(null);
  const [currentMonth, setCurrentMonth] = useState(
    getMonthName(lang, events[0].date)
  );

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    const month = getMonthName(lang, events[activeIndex].date);
    setCurrentMonth(month);
  };

  useEffect(() => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.realIndex;
      const month = getMonthName(lang, events[activeIndex].date);
      setCurrentMonth(month);
    } else {
      setCurrentMonth(getMonthName(lang, events[0].date));
    }
  }, [lang]);

  return (
    <section className={styles.section} id="calendar">
      <h2 className={styles.title}>{capitalizeMonths(currentMonth)}</h2>
      <div className={styles.line}></div>
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".calendar-next",
            prevEl: ".calendar-prev",
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={false}
          centeredSlides={false}
          spaceBetween={16}
          breakpoints={{
            425: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 6 },
          }}
          className={styles.swiper}
          aria-roledescription="carousel"
        >
          {events.map((event) => (
            <SwiperSlide
              key={`${event.date}-${event.title}`}
              className={styles.swiperSlide}
            >
              <article className={styles.card} key={event.date}>
                <div className={styles.day}>
                  {format(parseISO(event.date), "d")}
                </div>
                <div className={styles.desc}>{event.description}</div>
                <a className={styles.link} href={event.link}>
                  {t("calendar.more")}
                  <img
                    src={arrowRightIcon}
                    alt="Arrow right"
                    className={styles.icon}
                  />
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.navButtons}>
        <button
          className={`calendar-prev ${styles.button}`}
          aria-label="Previous"
        >
          ←
        </button>
        <button className={`calendar-next ${styles.button}`} aria-label="Next">
          →
        </button>
      </div>
    </section>
  );
};
