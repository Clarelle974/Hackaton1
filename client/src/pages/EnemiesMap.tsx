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
    <div className="EnemiesMap">
      <h1>Enemies map</h1>
      {/* <div
        id="myshiptracking-widget"
        style={{ width: "100%", height: "400px" }}
      ></div> */}
    </div>
  );
}
