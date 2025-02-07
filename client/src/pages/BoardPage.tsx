import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/boardpage.css";
import MiniCrewCard from "../components/MiniCrewCard";
import MiniEnemyCard from "../components/MiniEnemyCard";
import NewsCard from "../components/NewsCard";
import { equipagePirate } from "../services/data";
import { naviresEnnemis } from "../services/data";
import { articlesPirates } from "../services/data";

declare global {
  interface Window {
    myshiptracking: {
      initWidget: (id: string) => void;
    };
  }
}

export default function () {
  useEffect(() => {
    const mapContainer = document.getElementById(
      "myshiptracking-widget-container",
    );

    if (!document.getElementById("myshiptrackingscript")) {
      const script = document.createElement("script");
      script.id = "myshiptrackingscript";
      script.src = "//www.myshiptracking.com/js/widgetApi.js";
      script.async = true;
      script.defer = true;

      script.onload = () => {
        if (window.myshiptracking) {
          window.myshiptracking.initWidget("myshiptracking-widget");
        }
      };
      mapContainer?.appendChild(script);
    }
  }, []);

  return (
    <>
      <h1 className="crew">Boardpage</h1>
      <div className="page-container">
        <section className="central">
          <h2>
            <Link to="/crew">Mon equipage</Link>
          </h2>
          <div className="miniCardContainer">
            {equipagePirate.map((crew) => (
              <MiniCrewCard key={crew.nom} crew={crew} />
            ))}
          </div>
          <h2>
            <Link to="/enemyships">Mes ennemis</Link>
          </h2>
          <div className="miniCardContainer">
            {naviresEnnemis.map((ship) => (
              <MiniEnemyCard key={ship.nom} ship={ship} />
            ))}
          </div>

          <div className="enemiesMap">
            <h1>Enemies map</h1>
            <div id="myshiptracking-widget-container">
              <div id="myshiptracking-widget"> </div>
            </div>
          </div>
        </section>
        <section className="right-aside">
          <h2 className="crew2">News</h2>
          {articlesPirates.map((news) => (
            <Link to={`/news/${news.id}`} key={news.id} className="linknews">
              <NewsCard news={news} />
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}
