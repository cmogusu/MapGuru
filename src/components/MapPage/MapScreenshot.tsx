"use client";

import { ScreenCapture } from "@/components/ScreenCapture";
import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";
import { metadata } from "../Heatmaps";

type Props = {
	mapId: string;
};

export const MapScreenshot = ({ mapId }: Props) => {
	const mapMetadata = mapMetadataList.find(
		({ id }: MapMetadata) => id === mapId,
	);

	if (!mapMetadata || !mapMetadata.component) {
		return null;
	}

	const MapComponent = mapMetadata.component;
	return (
		<ScreenCapture imageFileName={metadata.id}>
			{/* <img src="/img/sci-fi.avif" alt="cow" /> */}
			<MapComponent />
		</ScreenCapture>
	);
};
