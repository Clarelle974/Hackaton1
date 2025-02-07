import { useEffect } from "react";
import "../styles/enemiesMap.css";
declare global {
  interface Window {
    myshiptracking: {
      initWidget: (id: string) => void;
    };
  }
}
export default function EnemiesMap() {
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
      <div className="enemiesMap">
        <h1>Enemies map</h1>
        <div id="myshiptracking-widget-container">
          <div id="myshiptracking-widget"> </div>
        </div>
      </div>
    </>
  );
}
