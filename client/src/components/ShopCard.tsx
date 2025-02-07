import type { ArticleBoutique } from "../services/data";

interface ShopCardProps {
  article: ArticleBoutique;
}

export default function ShopCard({ article }: ShopCardProps) {
  return (
    <>
      <div className="ShopCard">
        <div className="imageshop">
          <img src={article.image} alt="pirate" />
        </div>
        <div className="shopdetail">
          <div className="details">
            <h4>{article.nom}</h4>
            <p>Prix : {article.prix}</p>
          </div>
          <div className="button">
            <button type="button">Achéte!</button>
          </div>
        </div>
      </div>
    </>
  );
}
