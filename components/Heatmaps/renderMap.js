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
    map.addSource("development-activity-source", {
      type: "geojson",
      data: "https://clived.live/development-activity-monitor.geojson",
    });

    map.addLayer({
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
        "circle-color": [
          "interpolate",
          ["linear"],
          ["zoom"],
          1,
          "rgba(33,102,172,0)",
          2,
          "rgb(103,169,207)",
          3,
          "rgb(209,229,240)",
          4,
          "rgb(253,219,199)",
          5,
          "rgb(239,138,98)",
          6,
          "rgb(178,24,43)",
        ],
      },
      filter: ["==", "$type", "Point"],
    });

    // map.addLayer({
    //   id: 'developments-labels',
    //   type: 'symbol',
    //   source: 'developments',
    //   layout: {
    //     'text-field': ['get', 'development_key'],
    //     'text-size': 12,
    //     'text-offset': [0, 1.2],
    //     'text-anchor': 'top'
    //   },
    //   paint: {
    //     'text-color': '#333',
    //     'text-halo-color': '#fff',
    //     'text-halo-width': 1
    //   }
    // });

    // map.addLayer({
    //   "id": "Point labels",
    //   "type": "symbol",
    //   "source": "development-activity-layer",
    //   "layout": {
    //     "symbol-placement": "line",
    //     "symbol-spacing": [
    //       "step",
    //       [
    //         "zoom"
    //       ],
    //       250,
    //       21,
    //       900
    //     ],
    //     "text-field": [
    //       "coalesce",
    //       [
    //         "get",
    //         "name:en"
    //       ],
    //       [
    //         "get",
    //         "name"
    //       ]
    //     ],
    //     "text-font": [
    //       "Noto Sans Regular"
    //     ],
    //     "text-letter-spacing": 0.1,
    //     "text-rotation-alignment": "map",
    //     "text-size": [

    //       [
    //         "zoom"
    //       ],
    //       10,
    //       8,
    //       16,
    //       10,
    //       24,
    //       14
    //     ],
    //     "text-transform": "none",
    //     "visibility": "visible"
    //   }
    // })
  });
}
