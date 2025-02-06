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
          <h3>{article.nom}</h3>
          <p>Catégorie : {article.categorie}</p>
          <p>Prix : {article.prix}</p>
          <p>Description : {article.description}</p>
          <p>Particularité : {article.particularite}</p>
          <p>Rareté : {article.rarete}</p>
        </div>
      </div>
    </>
  );
}
