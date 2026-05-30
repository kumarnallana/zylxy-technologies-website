import { leadershipData } from "@/data/leadershipData";
import { leadershipStyles } from "@/styles/sections/leadership";

export default function LeadershipSection() {
  return (
    <section id="leadership-section" className={leadershipStyles.section}>
      <div className={leadershipStyles.wrapper}>
        <div className={leadershipStyles.headerRow}>
          <div className={leadershipStyles.titleArea}>
            <div className={leadershipStyles.pillLine}>
              <div className={leadershipStyles.pillLineBar} />
              <span className={leadershipStyles.pillText}>
                {leadershipData.header.pillText}
              </span>
            </div>
            <h2 className={leadershipStyles.mainHeading}>
              {leadershipData.header.mainHeading}
            </h2>
          </div>
          <p className={leadershipStyles.subHeading}>
            {leadershipData.header.subHeading}
          </p>
        </div>

        <div className={leadershipStyles.grid}>
          {leadershipData.team.map((member) => (
            <div key={member.name} className={leadershipStyles.card}>
              <div className={leadershipStyles.profileRow}>
                <div
                  className={leadershipStyles.avatarBox}
                  style={{
                    background: `linear-gradient(135deg, ${member.color}cc, ${member.color})`,
                    boxShadow: `0 4px 16px ${member.color}33`,
                  }}
                >
                  <span className={leadershipStyles.avatarText}>
                    {member.initials}
                  </span>
                </div>
                <div className={leadershipStyles.metaDetails}>
                  <h3 className={leadershipStyles.leaderName}>{member.name}</h3>
                  <div
                    className={leadershipStyles.leaderRole}
                    style={{ color: member.color }}
                  >
                    {member.role}
                  </div>
                  <div className={leadershipStyles.leaderSince}>
                    {member.since}
                  </div>
                </div>
              </div>

              <p className={leadershipStyles.leaderDesc}>{member.desc}</p>

              <div className={leadershipStyles.tagBox}>
                {member.tags.map((tag) => (
                  <span key={tag} className={leadershipStyles.tagItem}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
