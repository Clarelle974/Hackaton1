import { useLoaderData } from "react-router-dom";
import "../styles/newsdetails.css";
import type { News } from "../services/data";

export default function Newsdetails() {
  const news = useLoaderData() as News;

  return (
    <div className="newsdetails">
      <h1>{news.titre}</h1>
      <img src={news.img} alt="" className="picnews" />
      <p>{news.date}</p>
      <p>
        {news.contenu} {news.commentaire}
      </p>
    </div>
  );
}
