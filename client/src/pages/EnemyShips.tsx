import EnemyCard from "../components/EnemyCard.js";
import { naviresEnnemis } from "../services/data";

export default function EnemyShips() {
  console.info(naviresEnnemis);
  return (
    <>
      <h1>enemy ships</h1>
      
      {naviresEnnemis.map((ship) => (
        <EnemyCard key={ship.nom} ship={ship} />
      ))}
    </>
  );
}
