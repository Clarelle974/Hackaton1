import CrewCard from "../components/CrewCard";
import { equipagePirate } from "../services/data";

export default function Crew() {
  return (
    <>
      <h1 className="crew">Crew</h1>
      <section className="allcrewcards">
        {equipagePirate.map((crew) => (
          <CrewCard key={crew.nom} crew={crew} />
        ))}
      </section>
    </>
  );
}
