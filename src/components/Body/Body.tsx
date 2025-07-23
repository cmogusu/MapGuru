import { Card } from "@/components/Card";
import type { MapMetadata } from "@/types";
import { mapMetadataList } from "@/mapMetadataList";
import { Sidebar } from "@/components/SideBar";
import { categories } from "@/constants";
import { useMemo } from "react";
import "./style.css";

type Props = {
	categoryId: string;
};

export const Body = ({ categoryId }: Props) => {
	const filteredMapMetadata = useFilterMetadata(categoryId);

	return (
		<div className="md:container mx-auto grid grid-body-columns">
			<main>
				{filteredMapMetadata.map((metadata: MapMetadata) => (
					<Card key={metadata.id} {...metadata} />
				))}
			</main>
			<aside>
				<Sidebar />
			</aside>
		</div>
	);
};

const useFilterMetadata = (categoryId: string | undefined) =>
	useMemo(() => {
		if (!categoryId || !categories[categoryId]) {
			return mapMetadataList;
		}

		return mapMetadataList.filter((metadata) =>
			metadata.categories.includes(categoryId),
		);
	}, [categoryId]);
