import { Sidebar } from "@/components/SideBar";
import { MapPage } from "../MapPage/MapPage";
import "./style.css";

type Props = {
	mapId: string;
};

export const MapBody = ({ mapId }: Props) => {
	return (
		<div className="md:container mx-auto grid grid-body-columns">
			<main>
				<MapPage mapId={mapId} />
			</main>
			<aside>
				<Sidebar />
			</aside>
		</div>
	);
};
