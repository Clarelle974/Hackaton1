import "../styles/news.css";
import type { News } from "../services/data";

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <section className="newspage">
      <h4>{news.titre}</h4>
    </section>
  );
}
