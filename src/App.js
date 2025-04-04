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
        <div className="dot" style={{ backgroundColor: "#DD5800" }}>
          2025 shoreline
        </div>
        <div className="dot" style={{ backgroundColor: "#FA8900" }}>
          2024 shoreline
        </div>
        <div className="dot" style={{ backgroundColor: "#FAED49" }}>
          2023 shoreline
        </div>
        <div className="dot" style={{ backgroundColor: "#87E5E1" }}>
          2007 shoreline
        </div>
        <div className="dot" style={{ backgroundColor: "#def" }}>
          2007 bathymetry survey
        </div>
      </div>
      <div ref={mapContainer} className="map-container" />
      <div className="credits">
        <p>
          Site development by <a href="https://rachelbinx.com">Rachel Binx</a>
        </p>
        <p>
          2025, 2024, & 2023 shore outlines are from{" "}
          <a href="https://iamirondad.com/salton-sea-run/">Irondad</a>, who logs
          a run around the sea annually.
        </p>
        <p>
          Bathymetry data is from a 2007 survey by the{" "}
          <a href="https://map.dfg.ca.gov/metadata/ds0426.html">
            California Dept of Fish and Wildlife
          </a>
        </p>
        <p>
          Learn more about Bombay Beach{" "}
          <a href="https://docs.google.com/presentation/d/1-dbpDSpNh1r_1_Gv8-nYp3nx6hYEqp6lNUoTnJJyLaU/edit#slide=id.g4ecfee3f72_0_154">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
