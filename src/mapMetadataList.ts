import { heatmapMetadata } from "@/components/Heatmaps";
import { tomtomMetadata } from "@/components/TomTom";
import type { MapMetadata } from "./types";

export const mapMetadataList: MapMetadata[] = [
	...tomtomMetadata,
	...heatmapMetadata,
];
