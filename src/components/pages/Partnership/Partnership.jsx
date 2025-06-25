import { useTranslation } from "react-i18next";

import { Button } from "../../UI";

import { plans } from "./plans";

import { PartnershipCard } from "./PartnershipCard";

import styles from "./Partnership.module.scss";

export const PartnershipComponent = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className={styles.intro}>
        <h2 className={styles.heading}>{t("partnership.intro.heading")}</h2>
        <p className={styles.text}>{t("partnership.intro.text")}</p>
      </section>
      <section className={styles.support}>
        <h2 className={styles.heading}>{t("partnership.support.heading")}</h2>
        <p className={styles.text}>{t("partnership.support.text")}</p>
        <div className={styles.cards}>
          {plans.map((plan) => (
            <PartnershipCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              isAccent={plan.isAccent}
            />
          ))}
        </div>
      </section>
      <section className={styles.jubileeCta}>
        <h2 className={styles.heading}>
          {t("partnership.jubilee-cta.heading")}
        </h2>
        <Button type="PUEBFoundation" className={styles.btn} />
      </section>
    </main>
  );
};
