import { Link } from "react-router-dom";
import type { Navire } from "../services/data";
import "../styles/mini-enemy-card.css";

interface EnemyCardProps {
  ship: Navire;
}
export default function EnemyCard({ ship }: EnemyCardProps) {
  return (
    <>
      <div className="miniShipCard">
        <Link to={`/EnemyDetails/${ship.nom}`}>
          <img src={ship.img} alt="navire" />
          {/* <h2>{ship.nom}</h2>
          <h3>{ship.capitaine}</h3> */}
        </Link>
      </div>
    </>
  );
}
