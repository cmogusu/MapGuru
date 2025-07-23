import { Page } from "@/components/Page";
import { Body } from "@/components/Body";
import { MapModal } from "@/components/MapModal";

export default async function Map(props) {
	const params = await props.params;
	console.log(params);

	return (
		<Page>
			<MapModal />
			<Body category={"cat"} />
		</Page>
	);
}
