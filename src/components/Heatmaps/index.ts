import dynamic from "next/dynamic";
import type { MapMetadata } from "@/types";
import type { ComponentType } from "react";
import { categories } from "@/constants";

export * from "./App";

const HeatMapsImport: ComponentType<unknown> = dynamic(() => import("./App"));

export const metadata: MapMetadata = {
	img: {
		src: "/img/default-mapguru-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Efficient rendering of large volumes of data",
	description:
		"Map that loads and effeciently renders approximately 30MB of data containing more than 100k records.",
	id: "heatmaps",
	component: HeatMapsImport,
	categories: [
		categories.maplibre,
		categories.massiveData,
		categories.clusters,
		categories.heatmap,
	],
};
