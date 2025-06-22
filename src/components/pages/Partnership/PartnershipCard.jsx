import { Button } from "../../UI";

import styles from "./Partnership.module.scss";
export const PartnershipCard = ({ name, price, isAccent }) => (
  <div className={styles.card}>
    <div className={styles.cardInfo}>
      <p className={styles.cardName}>{name}</p>
      <p className={styles.cardPrice}>{`$${price}`}</p>
    </div>
    <Button
      type={isAccent ? "supportAccent" : "support"}
      className={styles.cardBtn}
    />
  </div>
);
