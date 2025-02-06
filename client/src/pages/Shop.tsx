import ShopCard from "../components/ShopCard";
import { boutiquePirate } from "../services/data";
import "../styles/shop.css";

export default function Shop() {
  return (
    <div>
      <h1>🦜 Shop</h1>
      <div>
        {boutiquePirate.map((article) => (
          <ShopCard key={article.nom} article={article} />
        ))}
      </div>
    </div>
  );
}
