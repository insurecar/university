import styles from "./ImageSkeleton.module.scss";

export const ImageSkeleton = () => {
  return (
    <div className={styles.skeleton} aria-label="Loading" role="status"></div>
  );
};
