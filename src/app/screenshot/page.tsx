import { MapListScreenshot } from "@/components/MapPage";
import { BlankPage } from "@/components/Page";
import { moveFileToImgFolder } from "@/server";

export default async function ScreenshotPage() {
	return (
		<BlankPage>
			<main className="md:container mx-auto w-full p-4">
				<div className="w-full">
					<MapListScreenshot moveFileToImgFolder={moveFileToImgFolder} />
				</div>
			</main>
		</BlankPage>
	);
}
