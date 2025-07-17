import { useEffect, useRef } from "react";
import { renderMap } from "./renderMap";
import "./style.css";

export default function HeatMap({ mapTilerApiKey }) {
	const divRef = useRef();
	const width = 800;
	const height = 500;

	useEffect(() => {
		if (!divRef.current || divRef.current.querySelector("canvas")) {
			return;
		}

		renderMap(divRef.current, width, height, mapTilerApiKey);
	}, [mapTilerApiKey]);

	return (
		<div>
			<div className="container">
				<p className="lead">
					This map is loading and rendering{" "}
					<a href="https://clived.live/street-addresses.geojson">
						this GeoJson file
					</a>{" "}
					that is approximately 30MB. It contains data on street light in
					Melbourne Australia loaded from{" "}
					<a href="https://data.melbourne.vic.gov.au/explore/dataset/street-lights-with-emitted-lux-level-council-owned-lights-only/information/">
						{" "}
						this dataset
					</a>
				</p>
			</div>
			<div className="map-container">
				<div ref={divRef} />
			</div>
		</div>
	);
}
