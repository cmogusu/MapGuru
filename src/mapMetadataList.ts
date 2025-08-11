import { heatmapMetadata } from "@/components/Heatmaps";
import { leafletMetadata } from "@/components/Leaflet";
import { mapboxMetadata } from "@/components/MapBox";
import { tomtomMetadata } from "@/components/TomTom";
import type { MapMetadata } from "./types";

export const mapMetadataList: MapMetadata[] = [
	...leafletMetadata,
	...mapboxMetadata,
	...tomtomMetadata,
	...heatmapMetadata,
];
