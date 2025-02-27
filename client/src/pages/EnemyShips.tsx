import EnemyCard from "../components/EnemyCard.js";
import "../styles/enemy-ships.css";
import { naviresEnnemis } from "../services/data";

export default function EnemyShips() {
  console.info(naviresEnnemis);
  return (
    <>
      <div className="EnemyShips">
        <h1 className="crew">enemy ships</h1>
        <div className="shipCardContainer">
          {naviresEnnemis.map((ship) => (
            <EnemyCard key={ship.nom} ship={ship} />
          ))}
        </div>
      </div>
    </>
  );
}
