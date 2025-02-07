import { useLoaderData } from "react-router-dom";
import type { ArticleBoutique } from "../services/data";
import "../styles/shop.css";
export default function ShopDetails() {
  const article = useLoaderData() as ArticleBoutique;
  return (
    <>
      <h2 className="title1">{article.nom}</h2>
      <section className="alldetails">
        <div>
          <img src={article.image} alt="" className="pirate" />
          <p>{article.particularite}</p>
          <p>{article.description}</p>
        </div>
        <div className="price">
          <p>{article.prix}</p>
          <button type="button" className="buttondetails">
            Ajoute ca à ta besace !
          </button>
        </div>
      </section>
    </>
  );
}
