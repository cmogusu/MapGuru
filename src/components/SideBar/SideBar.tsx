import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";
import Link from "next/link";
import { useMemo } from "react";
import { categories } from "@/constants";

export const Sidebar = () => {
	const categoryCount = useMemo(() => {
		const count: Record<string, number> = {};
		mapMetadataList.forEach((mapMetadata: MapMetadata) => {
			mapMetadata.categories.forEach((categoryId: string) => {
				count[categoryId] = count[categoryId] ? count[categoryId] + 1 : 1;
			});
		});

		return Object.entries(count);
	}, []);

	return (
		<nav className="menu menu-vertical">
			<h6 className="text-large font-bold mb-2"> Categories</h6>
			{categoryCount.map(([categoryId, count]: [string, number]) => (
				<CategoryLink key={categoryId} categoryId={categoryId} count={count} />
			))}
		</nav>
	);
};

const CategoryLink = ({
	categoryId,
	count,
}: {
	categoryId: string;
	count: number;
}) => {
	const category = categories[categoryId];

	if (!category) {
		return <></>;
	}

	return (
		<Link
			className="link link-hover"
			href={`/category/${category.id}`}
			title={category.description}
		>
			{category.title}: {count}
		</Link>
	);
};
