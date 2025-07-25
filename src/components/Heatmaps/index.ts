import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { MapMetadata } from "@/types";

export * from "./App";

const HeatMapsImport: ComponentType<unknown> = dynamic(() => import("./App"));

const metadata: MapMetadata = {
	id: "heatmaps",
	img: {
		src: "/img/default-mapguru-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Efficient rendering of large volumes of data",
	description:
		"Map that loads and effeciently renders approximately 30MB of data containing more than 100k records.",
	component: HeatMapsImport,
	categories: ["maplibre", "massiveData", "clusters", "heatmap", "dog"],
};

export const heatmapMetadata: MapMetadata[] = [metadata];
