import React from "react";
import "../../../../styles/careerpage/Career.css";
import { useIcon } from "../../../hooks/useIcon";

const CareerTeam: React.FC = () => {
  const {
    team1,
    teamsecond,
    teamfirst,
    teamfirsticon,
    halfguy,
    teamgal,
    teamgalicon,
  } = useIcon();
  //   const team: TeamMember[] = [
  //     { img: team1, label: "Good Vibes" },
  //     { img: team2, label: "Productivity Guru" },
  //     { img: team3, label: "Team Spirit" },
  //     { img: team4, label: "Team Spirit" },
  //   ];

  return (
    <section className="team-section">
      <div className="profile-card profile-card-0">
        <img src={teamsecond} alt="" className="teamsecond" />
        <img src={team1} alt="Team Member" className="member" />
      </div>
      <div className="profile-card profile-card-1">
        <img src={teamfirsticon} alt="" className="teamsecond2" />
        <img src={teamfirst} alt="Team Member" className="member" />
      </div>
      <div className="profile-card profile-card-2">
        <img src={halfguy} alt="Team Member" className="member1" />
      </div>
      <div className="profile-card profile-card-3">
        <img src={teamgalicon} alt="" className="teamsecond" />
        <img src={teamgal} alt="Team Member" className="member" />
      </div>
    </section>
  );
};

export default CareerTeam;
