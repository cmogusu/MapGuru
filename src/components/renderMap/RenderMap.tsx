"use client";

import { useMapRenderContext } from "@/context";
import { Suspense, useCallback, useMemo } from "react";
import { mapMetadataList } from "@/mapMetadataList";
import { Modal } from "./Modal";
import type { MapMetadata } from "@/types";

export const RenderMap = () => {
	const { mapComponent, setMapComponent } = useMapRenderContext();

	const metadata = useMemo(
		() =>
			mapMetadataList.find(
				(metadata: MapMetadata) => metadata.id === mapComponent,
			),
		[mapComponent],
	);

	const onClose = useCallback(() => {
		setMapComponent("");
	}, [setMapComponent]);

	if (!metadata) {
		return null;
	}

	const MapComponent = metadata.component;

	return (
		<Suspense fallback="loading">
			<Modal
				title="title"
				description="description"
				mapComponent={mapComponent}
				onClose={onClose}
			>
				<MapComponent />
			</Modal>
		</Suspense>
	);
};
