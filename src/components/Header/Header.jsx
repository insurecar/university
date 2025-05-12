import styles from "./Header.module.scss";
import { Logo, Search, Menu } from "./";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Menu />
      <Search />
    </div>
  );
};
