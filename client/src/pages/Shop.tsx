import { Link } from "react-router-dom";
import ShopCard from "../components/ShopCard";
import { boutiquePirate } from "../services/data";
import "../styles/shop.css";

export default function Shop() {
  return (
    <div>
      <h1 className="crew">🦜 Shop</h1>
      <div className="allshop">
        {boutiquePirate.map((article) => (
          <Link
            to={`/shop/${article.id}`}
            key={article.id}
            className="linknews"
          >
            <ShopCard key={article.nom} article={article} />
          </Link>
        ))}
      </div>
    </div>
  );
}
