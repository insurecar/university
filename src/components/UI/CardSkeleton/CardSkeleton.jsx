import styles from "./CardSkeleton.module.scss";

export const CardSkeleton = () => {
  return (
    <div className={styles.card} aria-label="Loading" role="status">
      <div className={styles.imageContainer}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.textLineShort} />
      <div className={styles.textLineLong} />
    </div>
  );
};
