import { MapListScreenshot } from "@/components/MapPage";
import { BlankPage } from "@/components/Page";
import { moveFileToImgFolder } from "@/server";

type Props = {
	params: Promise<{ mapId: string }>;
};

export default async function ScreenshotPage({ params }: Props) {
	const { mapId } = await params;

	return (
		<BlankPage>
			<main className="md:container mx-auto w-full p-4">
				<div className="w-full">
					<MapListScreenshot
						mapId={mapId}
						moveFileToImgFolder={moveFileToImgFolder}
					/>
				</div>
			</main>
		</BlankPage>
	);
}
