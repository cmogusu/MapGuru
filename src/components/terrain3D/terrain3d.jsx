import { useEffect, useRef } from "react";
import { renderMap } from "./renderMap";

export const Terrain3d = () => {
	const divRef = useRef();
	const width = 500;
	const height = 300;

	useEffect(() => {
		if (!divRef.current || divRef.current.querySelector("canvas")) {
			return;
		}

		renderMap(divRef.current, width, height);
	}, []);

	return (
		<div style={{ position: "relative" }}>
			<div ref={divRef} />
		</div>
	);
};
