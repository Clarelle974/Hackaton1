import { Link } from "react-router-dom";
import "../styles/header.css";
import header from "/headerpirate.webp";

export default function Header() {
  return (
    <>
      <div className="sitetitle">
        <h1>o PIRATE 2.0 o</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>

          <li>
            <Link to="/crew">Equipage</Link>
          </li>

          <li>
            <Link to="/boardpage">Tableau de bord</Link>
          </li>

          <li>
            <Link to="/shop">Boutique</Link>
          </li>

          <li>
            <Link to="/weather">Meteo</Link>
          </li>
          <li>
            <Link to="/enemyships">Bateaux ennemies</Link>
          </li>
          <li>
            <Link to="/news">Actualites</Link>
          </li>
        </ul>
      </nav>
      <div>
        <img src={header} alt="" className="headerback" />
      </div>
    </>
  );
}
