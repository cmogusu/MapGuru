export * from "./BaseMapboxMap";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { MapMetadata } from "@/types";
import { capitalize } from "@/utilities";
import { styles } from "./mapStyles";

const MapboxMap: ComponentType<{ styleUrl: string }> = dynamic(
	() => import("./MapboxMap"),
);

const metadata: MapMetadata = {
	id: "mapbox",
	img: {
		src: "/img/default-mapguru-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Fun mapbox map",
	description: "Amazing mapbox map",
	component: MapboxMap,
	categories: ["mapbox"],
};

type MapStyle = {
	name: string;
	url: string;
};

const getId = (style: MapStyle) => `mapbox-${style.name}`;

const getTitle = (style: MapStyle) => capitalize(style.name);

export const mapboxMetadata: MapMetadata[] = styles.map((style) => {
	const id = getId(style);
	const title = getTitle(style);
	const img = {
		src: `/img/${id}.jpeg`,
		alt: title,
	};

	return {
		...metadata,
		id,
		img,
		title,
		styleUrl: style.url,
	};
});
