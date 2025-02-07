import { useEffect } from "react";
import "../styles/EnemiesMap.css";

const EnemiesMap = () => {
  useEffect(() => {
    // Vérifier si le script est déjà ajouté
    if (!document.getElementById("myshiptrackingscript")) {
      const script = document.createElement("script");
      script.id = "myshiptrackingscript";
      script.src = "//www.myshiptracking.com/js/widgetApi.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h1>Enemies map</h1>
      {/* <div
        id="myshiptracking-widget"
        style={{ width: "100%", height: "400px" }}
      ></div> */}
    </div>
  );
};

export default EnemiesMap;
