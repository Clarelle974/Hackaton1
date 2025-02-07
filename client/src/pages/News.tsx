import "../styles/news.css";
import { Link } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { articlesPirates } from "../services/data";

const news = articlesPirates.slice(1);

export default function News() {
  return (
    <section className="all-news">
      <div className="news">
        <h1 className="crew">News</h1>

        <div className="firstarticle">
          <img src={articlesPirates[0].img} alt="" className="pichead" />
          <div className="right">
            <h2 className="title-news">{articlesPirates[0].titre}</h2>
            <p>
              {articlesPirates[0].contenu} {articlesPirates[0].commentaire}
            </p>
            <p>{articlesPirates[0].date}</p>
          </div>
        </div>
      </div>
      <div className="newscomp">
        {news.map((news) => (
          <Link to={`/news/${news.id}`} key={news.id} className="linknews">
            <NewsCard key={news.titre} news={news} />
          </Link>
        ))}
      </div>
    </section>
  );
}
