import { Outlet } from "react-router-dom";
import { Header, Footer } from "..";

export const App = () => {
  return (
    <>
      <Header />
      {/* <main className={styles.main}>
        <Outlet />
      </main> */}
      <Footer />
    </>
  );
};
