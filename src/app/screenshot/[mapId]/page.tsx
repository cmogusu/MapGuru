import { MapScreenshot } from "@/components/MapPage";
import { BlankPage } from "@/components/Page";

type Props = {
	params: Promise<{ mapId: string }>;
};

export default async function MapId({ params }: Props) {
	const { mapId } = await params;

	return (
		<BlankPage>
			<main className="md:container mx-auto w-full p-4">
				<div className="w-full">
					<MapScreenshot mapId={mapId} />
				</div>
			</main>
		</BlankPage>
	);
}
