import styles from "./Title.module.scss";
import cn from "classnames";

export const Title = ({ text, className = "" }) => (
  <div className={cn(styles.title, className)}>{text}</div>
);
