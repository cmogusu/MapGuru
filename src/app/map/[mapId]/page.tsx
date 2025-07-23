import { Page } from "@/components/Page";
import { MapPage } from "@/components/MapPage";

type Props = {
	params: Promise<{ mapId: string }>;
};

export default async function MapId({ params }: Props) {
	const { mapId } = await params;

	return (
		<Page>
			<MapPage mapId={mapId} />
		</Page>
	);
}
