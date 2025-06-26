import { Outlet } from "react-router-dom";
import { Header, Footer } from "..";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
