import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { API_KEY_PLACEHOLDERS } from "@/hooks";
import type { MapMetadata } from "@/types";

const LeafletMap: ComponentType<{ styleUrl: string }> = dynamic(
	() => import("./LeafletMap"),
);

const AZURE_PLACEHOLDER = API_KEY_PLACEHOLDERS.azureApiKey;

export const leafletMetadata: MapMetadata[] = [
	{
		id: "leaflet-openstreetmap",
		img: {
			src: "/img/default-mapguru-image.jpg",
			alt: "Leaflet with openStreetMap tiles",
		},
		title: "Leaflet with openStreetMap tiles",
		description: "Leaflet map rendering tiles fetched from openstreetmap",
		component: LeafletMap,
		categories: ["leaflet", "raster"],
		styleUrl: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
	},
	{
		id: "leaflet-azure",
		img: {
			src: "/img/default-mapguru-image.jpg",
			alt: "Leaflet with Azure tiles",
		},
		title: "Leaflet with openStreetMap tiles",
		description: "Leaflet map rendering tiles fetched from openstreetmap",
		component: LeafletMap,
		categories: ["leaflet", "raster"],
		styleUrl: `https://atlas.microsoft.com/map/tile?subscription-key=${AZURE_PLACEHOLDER}&api-version=2024-04-01&tilesetId=microsoft.base.road&zoom={z}&x={x}&y={y}&tileSize=256&view=auto`,
	},
];
