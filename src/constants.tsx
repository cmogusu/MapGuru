import type { Categories, LngLat } from "./types";

export const API_KEY_PLACEHOLDER = "XXX-API-KEY-XXX";
export const ImgHeightToWidthRatio = 666 / 1000;

export const DEFAULT_MAP_ZOOM = 12.3;
export const DEFAULT_MAP_CENTER: LngLat = [
	-77.02802728158858, 38.886986812976716,
];

export const DefaultImage: { src: string; alt: string } = {
	src: "/img/default-swimmania-image.jpg",
	alt: "Default Swimmania image",
};

export const categories: Categories = {
	maplibre: {
		id: "maplibre",
		title: "Maplibre",
		description: "Maps built with MapLibre",
	},
	mapbox: {
		id: "mapbox",
		title: "Mapbox",
		description: "Maps built with Mapbox",
	},
	osm: {
		id: "osm",
		title: "Open street maps",
		description: "Maps built with Open Street Maps",
	},
	google: {
		id: "google",
		title: "Google maps",
		description: "Maps built with Google Maps",
	},
	mapTiler: {
		id: "mapTiler",
		title: "Map tiler",
		description: "Maps built with MapTiler",
	},
	leaflet: {
		id: "leaflet",
		title: "Leaflet",
		description: "Maps built with Leaflet",
	},
	tomtom: {
		id: "tomtom",
		title: "TomTom",
		description: "Maps built with TomTom",
	},
	styled: {
		id: "styled",
		title: "Styled",
		description: "Styled maps",
	},
	heatmap: {
		id: "heatmap",
		title: "Heatmap",
		description: "Heatmap visualizations",
	},
	clusters: {
		id: "clusters",
		title: "Clusters",
		description: "Clustered map data",
	},
	directions: {
		id: "directions",
		title: "Directions",
		description: "Maps with directions",
	},
	massiveData: {
		id: "massiveData",
		title: "Massive data",
		description: "Maps with massive data sets",
	},
	historic: {
		id: "historic",
		title: "Historic",
		description: "Historic maps",
	},
	animated: {
		id: "animated",
		title: "Animated",
		description: "Animated maps",
	},
};
