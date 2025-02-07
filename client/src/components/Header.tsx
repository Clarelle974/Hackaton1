import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="sitetitle">
        <h1>o PIRATE 2.0 o</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/crew">Crew</Link>
          </li>

          <li>
            <Link to="/boardpage">Boardpage</Link>
          </li>

          <li>
            <Link to="/shop">Shop</Link>
          </li>

          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/enemyships">Enemyships</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
