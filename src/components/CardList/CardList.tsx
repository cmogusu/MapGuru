import { Card } from "@/components/Card";
import type { MapMetadata } from "@/types";
import { mapMetadataList } from "@/mapMetadataList";
import { categories } from "@/constants";
import { useMemo } from "react";

type Props = {
	categoryId?: string;
};

export const CardList = ({ categoryId }: Props) => {
	const filteredMapMetadata = useMemo(() => {
		if (!categoryId || !categories[categoryId]) {
			return mapMetadataList;
		}

		return mapMetadataList.filter((metadata) =>
			metadata.categories.includes(categoryId),
		);
	}, [categoryId]);

	return (
		<>
			{filteredMapMetadata.map((metadata: MapMetadata) => (
				<Card key={metadata.id} {...metadata} />
			))}
		</>
	);
};
