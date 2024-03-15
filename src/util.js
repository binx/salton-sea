import mapboxgl from "mapbox-gl";

import bathymetry from "./2007.json";
import line2024 from "./2024-simple.json";
import line2023 from "./2023-simple.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export function loadMap(map, mapContainer) {
  // const saltonSea = [
  //   [-116.17202, 33.57791],
  //   [-115.53707, 32.33173],
  // ];

  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    // style: "mapbox://styles/binx/cleyiayif000101r4z2u9y49q",
    style: "mapbox://styles/binx/cll6naxz200mc01p4dayrhbym",
    center: [-115.8, 33.4], // starting position [lng, lat]
    zoom: 9,
    fadeDuration: 0,
  });

  map.current.on("load", () => {
    if (!map.current.getSource("bathymetry")) {
      map.current.addSource("bathymetry", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: bathymetry,
        },
      });

      map.current.addLayer({
        id: "bathymetry",
        type: "line",
        source: "bathymetry",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#87E5E1", // color of the line
          "line-width": 2, // width of the line
        },
      });
    }

    if (!map.current.getSource("line2023")) {
      map.current.addSource("line2023", {
        type: "geojson",
        data: line2023,
      });

      map.current.addLayer({
        id: "line2023",
        type: "line",
        source: "line2023",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#FAED49",
          "line-width": 4,
        },
      });
    }

    if (!map.current.getSource("line2024")) {
      map.current.addSource("line2024", {
        type: "geojson",
        data: line2024,
      });

      map.current.addLayer({
        id: "line2024",
        type: "line",
        source: "line2024",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#FA8900",
          "line-width": 4,
        },
      });
    }
  });
}
