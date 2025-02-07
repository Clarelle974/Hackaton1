import { useEffect } from "react";
import "../styles/Weather.css";

const Weather = () => {
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="weather-container">
      <h1 className="crew">Meteo</h1>
      <div
        className="elfsight-app-a7a09335-1dfb-4d76-ae45-d79db2151f34"
        data-elfsight-app-lazy
      />
    </div>
  );
};

export default Weather;
