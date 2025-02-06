import type { Crew } from "../services/data";
import "../styles/minicrewcard.css";

interface CrewCardProps {
  crew: Crew;
}

export default function MiniCrewCard({ crew }: CrewCardProps) {
  return (
    <div className="mini-card">
      <img src={crew.img} alt="portrait du membre" className="crewpic" />
      <h3>{crew.surnom}</h3>
    </div>
  );
}
