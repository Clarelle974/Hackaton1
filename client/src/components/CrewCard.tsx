import type { Crew } from "../services/data";
import "../styles/crewcard.css";

interface CrewCardProps {
  crew: Crew;
}

export default function CrewCard({ crew }: CrewCardProps) {
  return (
    <div className="crew-card">
      <img src={crew.img} alt="" className="crewpic" />
      <div className="right">
        <h2 className="name-crew">Nom: {crew.nom}</h2>
        <p className="surname-crew">Surnom: {crew.surnom}</p>
        <p className="age-crew">Age: {crew.age}</p>
        <p className="role-crew">Rôle à bord: {crew.role}</p>
        <p className="motto-crew">Devise :{crew.phrasePreferee}</p>
        <p className="capacities">Capacitée: {crew.capacite}</p>
        <p className="particularities">Particularité: {crew.particularite}</p>
      </div>
    </div>
  );
}
