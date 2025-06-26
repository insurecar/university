import { Subtitle, Title } from "../../UI";
import styles from "./PageNotFound.module.scss";

export const PageNotFoundComponent = () => {
  return (
    <div className={styles.pageNotFound}>
      <h1 className={styles.error404}>404</h1>
      <Title text="page-not-found.title" className={styles.title} />
      <Subtitle text="page-not-found.subtitle" className={styles.subtitle} />
    </div>
  );
};
