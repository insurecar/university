import styles from "./AlumniCard.module.scss";
import { Title, Text, Button } from "../../../UI";
import PlayIcon from "../../../../assets/PlayIcon.svg?react";

export const AlumniCard = ({ icon: Icon, text, name, onOpen }) => {
  return (
    <li className={styles.alumniCard}>
      <div className={styles.photo} onClick={onOpen}>
        <Icon className={styles.photoIcon} />
        <button className={styles.playButton} onClick={onOpen}>
          <PlayIcon className={styles.playIcon} />
        </button>
      </div>
      <div className={styles.description}>
        <Title text={name} />
        <Text text={text} />
        <Button
          type="fullVideo"
          className={styles.videoButton}
          onClick={onOpen}
        ></Button>
      </div>
    </li>
  );
};
