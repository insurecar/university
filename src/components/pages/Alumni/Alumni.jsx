import styles from "./Alumni.module.scss";
import { Title, Subtitle } from "../../UI";
import First from "../../../assets/EventsIcons/First.svg?react";
import Second from "../../../assets/EventsIcons/Second.svg?react";
import Third from "../../../assets/EventsIcons/Third.svg?react";
import { AlumniCard } from "./AlumniCard/AlumniCard";
import { useState } from "react";
import { Modal } from "../../UI/Modal/Modal";

const upComing = [
  {
    icon: First,
    name: "Name1",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
    link: "/",
    mediaType: "youtube",
    mediaSrc: "https://www.youtube.com/embed/rf8__1kUDaU",
  },
  {
    icon: Second,
    name: "Name2",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
    link: "/",
    mediaType: "video",
    mediaSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    icon: Third,
    name: "Name3",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
    link: "/",
    mediaType: "youtube",
    mediaSrc: "https://www.youtube.com/embed/_4kHxtiuML0",
  },
];

export const AlumniComponent = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClose = () => setActiveCard(null);

  const renderMedia = () => {
    if (!activeCard) return null;

    switch (activeCard.mediaType) {
      case "youtube":
        return (
          <iframe
            src={activeCard.mediaSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            height="100%"
          />
        );
      case "video":
        return (
          <video
            src={activeCard.mediaSrc}
            controls
            autoPlay
            width="100%"
            height="100%"
          />
        );
      default:
        return <p className={styles.warning}>Unsupported media type</p>;
    }
  };

  return (
    <div className={styles.alumni}>
      <Title text="alumni.title" className={styles.center} />
      <Subtitle text="alumni.subtitle" className={styles.center} />
      <ul className={styles.cards}>
        {upComing.map((alumni) => (
          <AlumniCard
            key={alumni.name}
            {...alumni}
            onOpen={() => setActiveCard(alumni)}
          />
        ))}
      </ul>
      {activeCard && <Modal onClose={handleClose}>{renderMedia()}</Modal>}
    </div>
  );
};
