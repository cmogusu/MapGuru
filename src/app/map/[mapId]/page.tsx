import { Page } from "@/components/Page";
import { MapBody } from "@/components/Body";
import { MapModal } from "@/components/MapModal";

type Props = {
	params: Promise<{ mapId: string }>;
};

export default async function MapId({ params }: Props) {
	const { mapId } = await params;

	return (
		<Page>
			<MapModal />
			<MapBody mapId={mapId} />
		</Page>
	);
}
