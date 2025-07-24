"use client";

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

		renderMap(divRef.current, setZoom, mapTilerApiKey);
	}, [mapTilerApiKey]);

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
		<div
			className="map-container"
			style={{ width: `${width}px`, height: `${height}px` }}
		>
			<p>{isLoading && <span className="loading">loading...</span>}</p>
			<span className="zoom-level">Zoom: {zoom}</span>
			<div className="map" ref={divRef} />
		</div>
	);
}
