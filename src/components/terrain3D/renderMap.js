import {
  Map as MapLibre,
  NavigationControl,
  TerrainControl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function renderMap(container, width, height) {
  container.style.width = `${width}px`;
  container.style.height = `${height}px`;

  const map = new MapLibre({
    container,
    zoom: 12,
    center: [11.39085, 47.27574],
    style,
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

  map.addControl(
    new TerrainControl({
      source: "terrainSource",
      exaggeration: 1,
    })
  );
}

const style = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "@copy: OpenStreetMap Contributors",
      maxzoom: 19,
    },
    terrainSource: {
      type: "raster-dem",
      url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
      tileSize: 256,
    },
    hillshadeSource: {
      type: "raster-dem",
      url: "https://demotiles.maplibre.org/terrain-tiles/tiles.json",
      tileSize: 256,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm",
    },
    {
      id: "hills",
      type: "hillshade",
      source: "hillshadeSource",
      layout: { visibility: "visible" },
      paint: { "hillshade-shadow-color": "#473b24" },
    },
  ],
  terrain: {
    source: "terrainSource",
    exaggeration: 1,
  },
  sky: {},
};
