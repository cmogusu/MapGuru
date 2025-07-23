import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";

type Props = {
	mapId: string;
};

export const SimilarMaps = ({ mapId }: Props) => {
	const mapMetadata = mapMetadataList.find(
		({ id }: MapMetadata) => id === mapId,
	);

	if (!mapMetadata || !mapMetadata.categories) {
		return <RandomMaps />;
	}

	return <RelatedMaps categories={mapMetadata.categories} />;
};

const RandomMaps = () => {
	return <div>Random maps</div>;
};

const RelatedMaps = ({ categories }: { categories: (string | number)[] }) => {
	return <div>Random maps {categories.length} </div>;
};
