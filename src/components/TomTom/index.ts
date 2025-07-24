export * from "./TomTom";
import dynamic from "next/dynamic";
import type { MapMetadata } from "@/types";
import type { ComponentType } from "react";

const TomTom: ComponentType<unknown> = dynamic(() => import("./TomTom"));

export const metadata: MapMetadata = {
	id: "tomtom",
	img: {
		src: "/img/default-mapguru-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Efficient rendering of large volumes of data",
	description:
		"Map that loads and effeciently renders approximately 30MB of data containing more than 100k records.",
	component: TomTom,
	categories: ["tomtom"],
};
