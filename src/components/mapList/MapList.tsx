import { Card } from "@/components/card";
import type { MapMetadata } from "@/types";
import { mapMetadataList } from "@/mapMetadataList";

export const MapList = () => {
	return (
		<div>
			{mapMetadataList.map((metadata: MapMetadata) => (
				<Card key={metadata.id} {...metadata} />
			))}
		</div>
	);
};
