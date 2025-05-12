import styles from "./Header.module.scss";
import { Logo, Search, Menu } from "./";

export const Header = () => {
  console.log("HEADER+++++++++++");

  return (
    <div className={styles.header}>
      <Logo />
      <Menu />
      <Search />
    </div>
  );
};
