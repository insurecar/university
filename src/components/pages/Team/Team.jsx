import { useTranslation } from "react-i18next";
import styles from "./Team.module.scss";
import { Subtitle, Title } from "../../UI";
import MemberCard from "./MemberCard/MemberCard";
import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers } from "../../../utils/api";

export const TeamComponent = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['teamData'],
    queryFn: fetchTeamMembers,
  });

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>{error.message}</div>;

  const { organisationCommittee, honoraryCommittee } = data;

  const [header1Word1, header1Word2] = t("team.header1").split(" ");
  const [header2Word1, header2Word2] = t("team.header2").split(" ");

  const getSubcategoryTranslationKey = (apiSubgroupName) => {
    switch (apiSubgroupName) {
      case 'COMMUNITY': return 'community-outreach';
      case 'TECHNOLOGY': return 'technology-and-infrastructure';
      default: return apiSubgroupName;
    }
  };

  return (
    <div className={styles.team}>
      <Title text="team.title" className={styles.center} />
      <Subtitle text="team.subtitle" className={styles.center} />
      <div className={styles.committees}>
        <div>
          <h3 className={styles.committeeName}>
            {header1Word1} <span className={styles.grey}>{header1Word2}</span>
          </h3>
            {organisationCommittee.map(subgroup =>
              <div className={styles.subcategory} key={subgroup.subgroupName}>
                <h3 className={styles.subcategoryName}>
                  {t(`team.subcategories.${getSubcategoryTranslationKey(subgroup.subgroupName)}`)}
                </h3>
                <div className={styles.grid}>
                  {subgroup.members.map(teamMember =>
                    <MemberCard member={teamMember} key={teamMember.id}/>
                  )}
                </div>
              </div>
            )}
        </div>
        <div>
          <h3 className={`${styles.committeeName} ${styles.rightHeader}`}>
            <span className={styles.grey}>{header2Word1}</span> {header2Word2}
          </h3>
          <div className={styles.grid}>
            {honoraryCommittee.map(teamMember =>
              <MemberCard member={teamMember} key={teamMember.id}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
