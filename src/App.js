import { useRef, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import { loadMap } from "./util";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    loadMap(map, mapContainer);
  }, []);
  return (
    <div className="wrapper">
      <h1>the incredible shrinking salton sea</h1>
      <div className="legend">
        <div className="dot" style={{ backgroundColor: "#87E5E1" }}>
          2007 bathymetry survey
        </div>
        <div className="dot" style={{ backgroundColor: "#FAED49" }}>
          2023 irondad's run
        </div>
        <div className="dot" style={{ backgroundColor: "#FA8900" }}>
          2024 irondad's run
        </div>
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
