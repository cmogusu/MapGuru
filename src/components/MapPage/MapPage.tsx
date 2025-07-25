"use client";

import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";

type Props = {
	mapId: string;
};

export const MapPage = ({ mapId }: Props) => {
	const mapMetadata = mapMetadataList.find(
		({ id }: MapMetadata) => id === mapId,
	);

	if (!mapMetadata || !mapMetadata.component) {
		return null;
	}

	const MapComponent = mapMetadata.component;
	return (
		<div>
			<MapComponent styleUrl={mapMetadata.styleUrl} />
		</div>
	);
};
