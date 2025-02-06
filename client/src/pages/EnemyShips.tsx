import EnemyCard from "../components/EnemyCard.js";
import "../styles/enemy-ships.css";
import { naviresEnnemis } from "../services/data";

export default function EnemyShips() {
  console.info(naviresEnnemis);
  return (
    <>
      <div className="EnemyShips">
        <h1>enemy ships</h1>

        {naviresEnnemis.map((ship) => (
          <EnemyCard key={ship.nom} ship={ship} />
        ))}
      </div>
    </>
  );
}
