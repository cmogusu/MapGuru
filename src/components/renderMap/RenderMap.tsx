"use client";

import { useMapRenderContext } from "@/context";
import { Suspense, useCallback } from "react";
import { listOfMaps } from "@/listOfMaps";
import { Modal } from "./Modal";

export const RenderMap = () => {
	const { mapComponent, setMapComponent } = useMapRenderContext();
	const HeatMapsImport =
		mapComponent && mapComponent in listOfMaps
			? listOfMaps[mapComponent as keyof typeof listOfMaps]
			: undefined;

	const onClose = useCallback(() => {
		setMapComponent("");
	}, [setMapComponent]);

	return (
		<div>
			{!!HeatMapsImport && (
				<Suspense fallback="loading">
					<Modal
						title="title"
						description="description"
						mapComponent={mapComponent}
						onClose={onClose}
					>
						<HeatMapsImport />
					</Modal>
				</Suspense>
			)}
		</div>
	);
};
