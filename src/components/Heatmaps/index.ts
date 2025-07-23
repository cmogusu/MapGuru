import dynamic from "next/dynamic";
import type { MapMetadata } from "@/types";
import type { ComponentType } from "react";

export * from "./App";

const HeatMapsImport: ComponentType<unknown> = dynamic(() => import("./App"));

export const metadata: MapMetadata = {
	img: {
		src: "/img/default-swimmania-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Efficient rendering of large volumes of data",
	description:
		"Map that loads and effeciently renders approximately 30MB of data containing more than 100k records.",
	id: "heatmaps",
	component: HeatMapsImport,
};
