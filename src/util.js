import mapboxgl from "mapbox-gl";

import bathymetry from "./2007.json";
import line2007 from "./2007-outline.json";
import line2024 from "./2024-simple.json";
import line2023 from "./2023-simple.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export function loadMap(map, mapContainer) {
  // const saltonSea = [
  //   [-116.17202, 33.57791],
  //   [-115.53707, 32.33173],
  // ];

  // const xMax = bathymetry.geometries.filter((d) => d.coordinates.length < 10);
  // console.log(JSON.stringify(xMax));
  // // .sort((a, b) => {
  // //   return max(a.coordinates, (e) => e[0]) - max(b.coordinates, (e) => e[0]);
  // // })[0];
  // // const xMin = min(bathymetry.geometries, (d) =>
  // //   min(d.coordinates, (e) => e[0])
  // // );

  map.current = new mapboxgl.Map({
    container: mapContainer.current,
    // style: "mapbox://styles/binx/cleyiayif000101r4z2u9y49q",
    style: "mapbox://styles/binx/cll6naxz200mc01p4dayrhbym",
    center: [-115.8, 33.4], // starting position [lng, lat]
    zoom: 9,
    fadeDuration: 0,
  });

  map.current.setMinZoom(8);
  map.current.setMaxBounds([
    [-116.93090241041415, 32.56316264931766],
    [-114.92595484541746, 33.98296353112972],
  ]);

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
          "line-color": "#def",
          "line-width": 2,
        },
      });
    }

    if (!map.current.getSource("line2007")) {
      map.current.addSource("line2007", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: line2007,
        },
      });

      map.current.addLayer({
        id: "line2007",
        type: "line",
        source: "line2007",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#87E5E1",
          "line-width": 6,
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
          "line-width": 6,
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
          "line-width": 6,
        },
      });
    }

    map.current.on("click", function (e) {
      var coordinates = e.lngLat;

      console.log(JSON.stringify(coordinates));
    });
  });
}
