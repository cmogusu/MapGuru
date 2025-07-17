import { useEffect, useState, useRef } from "react";
import { renderMap } from "./renderMap";
import "./style.css";

export default function HeatMap({ mapTilerApiKey }) {
	const divRef = useRef();
	const [isLoading, setIsLoading] = useState(true);
	const [zoom, setZoom] = useState("");
	const width = 800;
	const height = 500;

	useEffect(() => {
		if (!divRef.current || divRef.current.querySelector("canvas")) {
			return;
		}

		renderMap(divRef.current, setZoom);
	}, []);

	useEffect(() => {
		setIsLoading(true);

		fetch("https://clived.live/street-addresses.geojson")
			.then(() => {
				setIsLoading(false);
			})
			.catch((e) => {
				console.error(e);
				setIsLoading(false);
			});
	}, []);

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
				<p>{isLoading && <span className="loading">loading...</span>}</p>
			</div>
			<div
				className="map-container"
				style={{ width: `${width}px`, height: `${height}px` }}
			>
				<span className="zoom-level">Zoom: {zoom}</span>
				<div className="map" ref={divRef} />
			</div>
		</div>
	);
}
