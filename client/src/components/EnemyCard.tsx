import type { Navire } from "../services/data";
import { Link } from "react-router-dom";
interface EnemyCardProps {
  ship: Navire;
}
export default function EnemyCard({ ship }: EnemyCardProps) {
  return (
    <>
      <div className="shipCard">
        <Link to={`/EnemyDetails/${ship.nom}`}>
          <h2>{ship.nom}</h2>
          <h3>{ship.capitaine}</h3>
        </Link>
      </div>
    </>
  );
}
