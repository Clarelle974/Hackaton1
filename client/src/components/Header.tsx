import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="sitetitle">
        <h1>o PIRATE o</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/boardpage">Boardpage</Link>
          </li>

          <li>
            <Link to="/crew">Equipage</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/weather">Météo</Link>
          </li>
          <li>
            <Link to="/enemyships">Ennemis</Link>
          </li>
          <li>
            <Link to="/enemiesmap">Carte </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
