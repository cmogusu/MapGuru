import { useEffect, useRef } from "react";
import { renderMap } from "./renderMap";

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
		<div style={{ position: "relative" }}>
			<div ref={divRef} />
		</div>
	);
}
