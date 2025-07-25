"use client";

import { ScreenCapture } from "@/components/ScreenCapture";
import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";

type Props = {
	mapId: string;
	moveFileToImgFolder: (v: string) => void;
};

export const MapScreenshot = ({ mapId, moveFileToImgFolder }: Props) => {
	const mapMetadata = mapMetadataList.find(
		({ id }: MapMetadata) => id === mapId,
	);

	if (!mapMetadata || !mapMetadata.component) {
		return null;
	}

	const MapComponent = mapMetadata.component;
	return (
		<div>
			<h2>{mapMetadata.id}</h2>

			<ScreenCapture
				imageFileName={mapMetadata.id}
				moveFileToImgFolder={moveFileToImgFolder}
			>
				<MapComponent />
			</ScreenCapture>
		</div>
	);
};
