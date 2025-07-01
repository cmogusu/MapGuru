"use client";

import { MapLibreMap } from "@mapcomponents/react-maplibre";
import { ThreeJsLayer } from "./ThreeJsLayer";

export function MapWithAnimation() {
	const mapId = "mapId";

	return (
		<div>
			<MapLibreMap
				mapId={mapId}
				options={{
					style: "https://wms.wheregroup.com/tileserver/style/osm-bright.json",
					zoom: 4,
				}}
				style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
			/>
			<ThreeJsLayer
				mapId={mapId}
				init={() => console.log("init")}
				onDone={() => console.log("done")}
			/>
		</div>
	);
}
