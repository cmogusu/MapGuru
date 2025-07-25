"use client";

import { useCallback, useState } from "react";
import { ScreenCapture } from "@/components/ScreenCapture";
import { mapMetadataList } from "@/mapMetadataList";
import type { MapMetadata } from "@/types";

type Props = {
	moveFileToImgFolder: (v: string) => void;
};

export const MapListScreenshot = ({ moveFileToImgFolder }: Props) => {
	const [index, setIndex] = useState(0);
	const [prevMetadata, currentMetadata, nextMetadata] =
		getActiveMetadata(index);

	const handlePrev = useCallback(() => {
		setIndex((v) => v - 1);
	}, []);

	const handleNext = useCallback(() => {
		setIndex((v) => v + 1);
	}, []);

	if (!currentMetadata || !currentMetadata.component) {
		return null;
	}

	// const MapComponent = currentMetadata.component;
	return (
		<div>
			<div>
				<button
					className="btn btn-sm btn-outline"
					type="button"
					disabled={!prevMetadata}
					onClick={handlePrev}
				>
					move
				</button>
			</div>
			<div className="flex content-center justify-between w-full mb-4">
				<button
					className="btn btn-sm btn-outline"
					type="button"
					disabled={!prevMetadata}
					onClick={handlePrev}
				>
					prev
				</button>
				<div>
					<p>{currentMetadata.title}</p>
				</div>
				<button
					className="btn btn-sm btn-outline"
					type="button"
					disabled={!nextMetadata}
					onClick={handleNext}
				>
					next
				</button>
			</div>
			<ScreenCapture
				imageFileName={currentMetadata.id}
				moveFileToImgFolder={moveFileToImgFolder}
			>
				<img src="/img/sci-fi.avif" alt="cow" />
				{/* <MapComponent /> */}
			</ScreenCapture>
		</div>
	);
};

const getActiveMetadata = (index: number): MapMetadata[] => [
	mapMetadataList[index - 1],
	mapMetadataList[index],
	mapMetadataList[index + 1],
];
