import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./PastEventSlider.module.scss";
import { useTranslation } from "react-i18next";
import { format, parseISO } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { events } from "./pastEvents";

export const PastEventSlider = () => {
  const { t, i18n } = useTranslation();
  const isPl = i18n.language === "pl";
  const locale = isPl ? pl : enUS;
  const formatStr = isPl ? "d MMMM yyyy" : "MMMM d, yyyy";

  return (
    <section className={styles.section} id="past-events">
      <h2 className={styles.heading}>{t("pastEvents.heading")}</h2>
      <p className={styles.subheading}>{t("pastEvents.subheading")}</p>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={false}
          centeredSlides={false}
          spaceBetween={32}
          breakpoints={{
            480: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiper}
          aria-roledescription="carousel"
        >
          {events.map((event) => (
            <SwiperSlide key={`${event.date}-${event.title}`}>
              <article className={styles.card}>
                <img
                  src={event.img_url}
                  alt="Event"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}>
                  <div className={styles.date}>
                    {format(parseISO(event.date), formatStr, { locale })}
                  </div>
                  <div className={styles.info}>
                    <p className={styles.title}>{event.title}</p>
                    <p className={styles.desc}>{event.description}</p>
                    <a className={styles.link} href={event.link}>
                      More details →
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.navButtons}>
          <button
            className={`custom-prev ${styles.button}`}
            aria-label="Previous"
          >
            ←
          </button>
          <button className={`custom-next ${styles.button}`} aria-label="Next">
            →
          </button>
        </div>
      </div>
    </section>
  );
};
