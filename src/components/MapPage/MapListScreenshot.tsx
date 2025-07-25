"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ScreenCapture } from "@/components/ScreenCapture";
import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";

type Props = {
	mapId: string;
	moveFileToImgFolder: (v: string) => void;
};

export const MapListScreenshot = ({ mapId, moveFileToImgFolder }: Props) => {
	const index = useGetStartIndex(mapId);
	const [prevMetadata, currentMetadata, nextMetadata] =
		getActiveMetadata(index);

	if (!currentMetadata || !currentMetadata.component) {
		return null;
	}

	const MapComponent = currentMetadata.component;
	const prevMapLink = getMapLink(prevMetadata);
	const nextMapLink = getMapLink(nextMetadata);

	return (
		<div>
			<div className="flex content-center justify-between w-full mb-4">
				<div>
					{prevMapLink && (
						<Link
							className="btn btn-sm btn-outline "
							type="button"
							href={prevMapLink}
							prefetch={false}
							replace
						>
							prev
						</Link>
					)}
				</div>
				<div>
					<p>{currentMetadata.title}</p>
				</div>
				<div>
					{nextMapLink && (
						<Link
							className="btn btn-sm btn-outline"
							type="button"
							href={nextMapLink}
							prefetch={false}
							replace
						>
							next
						</Link>
					)}
				</div>
			</div>
			<ScreenCapture
				imageFileName={currentMetadata.id}
				moveFileToImgFolder={moveFileToImgFolder}
			>
				<MapComponent styleUrl={currentMetadata.styleUrl} />
			</ScreenCapture>
		</div>
	);
};

const getMapLink = (metadata: MapMetadata) =>
	metadata ? `/screenshot/${metadata?.id}` : "";

const getActiveMetadata = (index: number): MapMetadata[] => [
	mapMetadataList[index - 1],
	mapMetadataList[index],
	mapMetadataList[index + 1],
];

const useGetStartIndex = (mapId: string): number =>
	useMemo(() => {
		const index = mapMetadataList.findIndex(
			({ id }: MapMetadata) => id === mapId,
		);
		return index < 0 ? 0 : index;
	}, [mapId]);
