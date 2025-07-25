import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { MapMetadata } from "@/types";
import { capitalize } from "@/utilities";
import { styles } from "./mapStyles";

const TomtomMap: ComponentType<{ styleUrl: string }> = dynamic(
	() => import("./TomtomMap"),
);

const metadata: MapMetadata = {
	id: "tomtom",
	img: {
		src: "/img/default-mapguru-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Efficient rendering of large volumes of data",
	description:
		"Map that loads and effeciently renders approximately 30MB of data containing more than 100k records.",
	component: TomtomMap,
	categories: ["tomtom"],
};

type MapStyle = {
	name: string;
	url: string;
};

const getId = (style: MapStyle) => {
	const id = style.name.replaceAll("_", "-");
	return `tomtom-${id}`;
};

const getTitle = (style: MapStyle) => {
	const title = style.name.replaceAll("_", " ").replaceAll("-", " ");
	return capitalize(title);
};

export const tomtomMetadata: MapMetadata[] = styles.map((style) => {
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
