import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import styles from "./PastEventSlider.module.scss";
import { events } from "./pastEvents";

export const PastEventSlider = () => {
  const [start, setStart] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "pl" ? pl : enUS;
  const isPl = i18n.language === "pl";
  const formatStr = isPl ? "d MMMM yyyy" : "MMMM d, yyyy";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
      document.documentElement.style.setProperty(
        "--items-per-page",
        itemsPerPage
      );
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
      <h2 className={styles.heading}>{t("pastEvents.heading")}</h2>
      <p className={styles.subheading}>{t("pastEvents.subheading")}</p>
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
                  {format(parseISO(event.date), formatStr, { locale: lang })}
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
          <button onClick={prev} aria-label="Previous events">
            &larr;
          </button>
          <button onClick={next} aria-label="Next events">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
