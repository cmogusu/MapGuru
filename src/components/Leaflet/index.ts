import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { MapMetadata } from "@/types";

const LeafletMap: ComponentType<{ styleUrl: string }> = dynamic(
	() => import("./LeafletMap"),
);

const metadata: MapMetadata = {
	id: "leaflet",
	img: {
		src: "/img/default-mapguru-image.jpg",
		alt: "Leaflet raster map",
	},
	title: "Leaflet",
	description: "Lets leaf it",
	component: LeafletMap,
	categories: ["leaflet", "raster"],
};

export const leafletMetadata: MapMetadata[] = [metadata];
