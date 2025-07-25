import { tomtomMetadata } from "@/components/Heatmaps";
import { heatmapMetadata } from "@/components/TomTom";
import type { MapMetadata } from "./types";

export const mapMetadataList: MapMetadata[] = [
	...tomtomMetadata,
	...heatmapMetadata,
];
