import { Suspense, lazy } from "react";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./PastEvents.module.scss";
import { useTranslation } from "react-i18next";

import { Spinner } from "../../UI";

const Slider = lazy(() => import("./Slider/Slider"));

export const PastEvents = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="past-events">
      <h2 className={styles.heading}>{t("pastEvents.heading")}</h2>
      <p className={styles.subheading}>{t("pastEvents.subheading")}</p>

      <div className={styles.sliderWrapper}>
        <Suspense fallback={<Spinner />}>
          <Slider />
        </Suspense>
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
