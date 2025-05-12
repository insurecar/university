import { Outlet } from "react-router-dom";
import { Header } from "..";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
