import { Map as MapLibre, NavigationControl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function renderMap(container, width, height, mapTilerApiKey) {
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;

  const map = new MapLibre({
    container,
    zoom: 12,
    center: [144.9415469, -37.80477682],
    style:
      "https://api.maptiler.com/maps/backdrop/style.json?key=BgDl6LfLj7t7bRlYpA9b",
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
    "top-left"
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
          "text-font": ["Arial Unicode MS Bold"],
          "text-size": 8,
        },
      },
      firstSymbolId
    );

    // map.addLayer(
    //   {
    //     id: "heatmaps",
    //     type: "heatmap",
    //     source: "development-activity-source",
    //     maxzoom: 9,
    //     paint: {
    //       "heatmap-weight": [
    //         "interpolate",
    //         ["linear"],
    //         ["get", "point_count"],
    //         0,
    //         0,
    //         6,
    //         1,
    //       ],
    //       "heatmap-intensity": [
    //         "interpolate",
    //         ["linear"],
    //         ["zoom"],
    //         0,
    //         1,
    //         9,
    //         3,
    //       ],
    //       "heatmap-color": [
    //         "interpolate",
    //         ["linear"],
    //         ["heatmap-density"],
    //         0,
    //         "rgba(33,102,172,0)",
    //         0.2,
    //         "rgb(103,169,207)",
    //         0.4,
    //         "rgb(209,229,240)",
    //         0.6,
    //         "rgb(253,219,199)",
    //         0.8,
    //         "rgb(239,138,98)",
    //         1,
    //         "rgb(178,24,43)",
    //       ],
    //       "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 2, 9, 20],
    //       "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, 1, 9, 0],
    //     },
    //   },
    //   firstSymbolId
    // );
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
