import { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Team.module.scss";
import { Subtitle, Title, SkeletonGrid } from "../../UI";
import { honoraryCommittee, organisationCommittee } from "./teamData";

// const MemberCard = lazy(() => import("./MemberCard/MemberCard"));
import MemberCard from "./MemberCard/MemberCard";

export const TeamComponent = () => {
  const { t, ready: tReady } = useTranslation();
  console.log("Translation ready?", tReady);
  const [header1Word1, header1Word2] = t("team.header1").split(" ");
  const [header2Word1, header2Word2] = t("team.header2").split(" ");

  return (
    <div className={styles.team}>
      <Title text="team.title" className={styles.center} />
      <Subtitle text="team.subtitle" className={styles.center} />
      <div className={styles.committees}>
        <div>
          <h3 className={styles.committeeName}>
            {header1Word1} <span className={styles.grey}>{header1Word2}</span>
          </h3>
          {organisationCommittee.map((subcategory) => (
            <div className={styles.subcategory} key={subcategory.id}>
              <h3 className={styles.subcategoryName}>
                {t(`team.subcategories.${subcategory.id}`)}
              </h3>
              {/* <Suspense
                fallback={
                  <SkeletonGrid
                    count={subcategory.members.length}
                    className={styles.grid}
                  />
                }
              > */}
              <div className={styles.grid}>
                {subcategory.members.map((teamMember) => (
                  <MemberCard member={teamMember} key={teamMember.id} />
                ))}
              </div>
              {/* </Suspense> */}
            </div>
          ))}
        </div>
        <div>
          <h3 className={`${styles.committeeName} ${styles.rightHeader}`}>
            <span className={styles.grey}>{header2Word1}</span> {header2Word2}
          </h3>
          {/* <Suspense
            fallback={
              <SkeletonGrid
                count={honoraryCommittee.length}
                className={styles.grid}
              />
            }
          > */}
          <div className={styles.grid}>
            {honoraryCommittee.map((teamMember) => (
              <MemberCard member={teamMember} key={teamMember.id} />
            ))}
          </div>
          {/* </Suspense> */}
        </div>
      </div>
    </div>
  );
};
