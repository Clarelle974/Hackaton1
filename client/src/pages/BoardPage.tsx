import { Link } from "react-router-dom";
import "../styles/boardpage.css";
import MiniCrewCard from "../components/MiniCrewCard";
import MiniEnemyCard from "../components/MiniEnemyCard";
import { equipagePirate } from "../services/data";
import { naviresEnnemis } from "../services/data";

export default function () {
  return (
    <>
      <h1>Boardpage</h1>
      <div className="page-container">
        <section className="left-aside">
          <Link to="/crew">Mon equipage</Link>
          <br />
          <Link to="/enemyships">Mes ennemis</Link>
          <br />
          <Link to="/shop">Longue-Vue Shopping</Link>
          <br />
          <Link to="/weather">Meteo</Link>
          <br />
        </section>
        <section className="central">
          <h2>
            <Link to="/crew">Mon equipage</Link>
          </h2>
          <div className="miniCardContainer">
            {equipagePirate.map((crew) => (
              <MiniCrewCard key={crew.nom} crew={crew} />
            ))}
          </div>
          <h2>
            <Link to="/enemyships">Mes ennemis</Link>
          </h2>
          <div className="miniCardContainer">
            {naviresEnnemis.map((ship) => (
              <MiniEnemyCard key={ship.nom} ship={ship} />
            ))}
          </div>
        </section>
        <section className="news">
          <Link to="/news">News</Link>
        </section>
      </div>
    </>
  );
}
