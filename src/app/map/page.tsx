import { Page } from "@/components/Page";
import { MapPage } from "@/components/MapPage";
import { MapModal } from "@/components/MapModal";

export default async function Map() {
	return (
		<Page>
			<MapModal />
			<MapPage mapId={"mapId"} />
		</Page>
	);
}
