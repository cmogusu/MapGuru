"use client";

import dynamic from "next/dynamic";

const HeatMapsImport = dynamic(() => import("@/components/heatmaps/App"), {
	ssr: false,
});

export const listOfMaps = {
	heatmaps: HeatMapsImport,
	heatmap2: HeatMapsImport,
};
