import "../styles/homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="BackgroundHome">
      <ul>
        <li>
          <Link to="/boardpage" className="link-board">
            Embarquer
          </Link>
        </li>
      </ul>
    </div>
  );
}
