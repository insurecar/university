import { useState, useRef, useEffect } from "react";
import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles.burgerContainer} ref={menuRef}>
      <button
        className={`${styles.burger} ${open ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <Link to="/events" onClick={toggleMenu}>
          Events
        </Link>
        <Link to="/alumni" onClick={toggleMenu}>
          Alumni
        </Link>
        <Link to="/publications" onClick={toggleMenu}>
          Publications
        </Link>
        <Link to="/team" onClick={toggleMenu}>
          Team
        </Link>
        <Link to="/partnership" onClick={toggleMenu}>
          Partnership
        </Link>
        <Link to="/partners" onClick={toggleMenu}>
          Partners
        </Link>
        <Link to="/for-media" onClick={toggleMenu}>
          For Media
        </Link>
      </div>
    </div>
  );
};
