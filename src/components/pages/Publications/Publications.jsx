import styles from "./Publications.module.scss";
import { Title, Subtitle } from "../../UI";
import Book from "@/assets/images/book.webp";
import { PublicationCard } from "./PublicationCard/PublicationCard";
import { useState } from "react";
import { Modal } from "../../UI/Modal/Modal";

const publicationsData = [
  {
    icon: Book,
    name: "Book Name 1",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
  },
  {
    icon: Book,
    name: "Book Name 2",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
  },
  {
    icon: Book,
    name: "Book Name 3",
    text: "A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing. A summit bringing together experts from across Europe interested in AI and supercomputing.",
  },
];

export const PublicationsComponent = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClose = () => setActiveCard(null);

  return (
    <div className={styles.publications}>
      <Title text="publications.title" className={styles.title} />
      <Subtitle text="publications.subtitle" className={styles.subtitle} />
      <Title
        text="publications.titleUpcoming"
        className={styles.upcomingTitle}
      />
      <ul className={styles.cards}>
        {publicationsData.map((alumni) => (
          <PublicationCard
            key={alumni.name}
            {...alumni}
            onOpen={() => setActiveCard(alumni)}
          />
        ))}
      </ul>
      {activeCard && (
        <Modal onClose={handleClose}>
          <img src={activeCard.icon} alt={activeCard.name} loading="lazy" />
        </Modal>
      )}
    </div>
  );
};
