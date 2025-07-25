import { heatmapMetadata } from "@/components/Heatmaps";
import { tomtomMetadata } from "@/components/TomTom";
import { mapboxMetadata } from "./components/MapBox";
import type { MapMetadata } from "./types";

export const mapMetadataList: MapMetadata[] = [
	...mapboxMetadata,
	...tomtomMetadata,
	...heatmapMetadata,
];
