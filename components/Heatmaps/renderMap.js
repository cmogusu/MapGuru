import { Map as MapLibre, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function renderMap(container, width, height, mapTilerApiKey) {
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;

  const map = new MapLibre({
    container,
    zoom: 12,
    center: [144.9415469, -37.80477682],
    style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${mapTilerApiKey || "BgDl6LfLj7t7bRlYpA9b"}`,
    pitch: 0,
    maxZoom: 18,
    maxPitch: 85,
  });

  map.addControl(
    new NavigationControl({
      showCompass: true,
      showZoom: true,
      visualizePitch: true,
      visualizeRoll: true,
    }),
    "top-right"
  );

  map.on("load", () => {
    const firstSymbolId = getFirstSymbol(map);

    map.addSource("development-activity-source", {
      type: "geojson",
      data: "https://clived.live/development-activity-monitor.geojson",
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    });

    map.addLayer(
      {
        id: "development-activity-layer",
        type: "circle",
        source: "development-activity-source",
        paint: {
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            4,
            1,
            6,
            1.5,
            8,
            2,
            12,
            2.5,
            16,
            5,
          ],
          "circle-opacity": 0.8,
          "circle-color": "#ff0000",
          // "circle-color": [
          //   "interpolate",
          //   ["linear"],
          //   ["zoom"],
          //   8,
          //   "rgba(33,102,172,0)",
          //   12,
          //   "rgb(103,169,207)",
          //   14,
          //   "rgb(209,229,240)",
          //   16,
          //   "rgb(253,219,199)",
          //   20,
          //   "rgb(239,138,98)",
          //   22,
          //   "rgb(178,24,43)",
          // ],
        },
        filter: ["==", "$type", "Point"],
        minzoom: 9,
        maxzoom: 24,
      },
      firstSymbolId
    );

    map.addLayer(
      {
        id: "clusters",
        type: "circle",
        source: "development-activity-source",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            10,
            50,
            20,
            750,
            30,
          ],
        },
      },
      firstSymbolId
    );

    map.addLayer(
      {
        id: "cluster-count",
        type: "symbol",
        source: "development-activity-source",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      },
      firstSymbolId
    );
  });
}

function getFirstSymbol(map) {
  const layers = map.getStyle().layers;

  let firstSymbolId;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol") {
      firstSymbolId = layers[i].id;
      break;
    }
  }

  return firstSymbolId;
}
