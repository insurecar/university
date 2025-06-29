import styles from "./Spinner.module.scss";

export const Spinner = () => (
  <div className={styles.spinnerContainer} aria-label="Loading...">
    <div className={styles.spinner} />
  </div>
);
