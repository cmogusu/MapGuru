"use client";

import { ImgHeightToWidthRatio } from "@/constants";
import { useApiKeyContext } from "@/context";
import {
	Map as MapLibre,
	NavigationControl,
	FullscreenControl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MapContainer } from "@/components/MapContainer";

export default function TomTom() {
	return <MapContainer>hello map</MapContainer>;
}

export function TomTomx() {
	const { tomtomApiKey } = useApiKeyContext();
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (
			!divRef.current ||
			divRef.current.querySelector("canvas") ||
			!tomtomApiKey
		) {
			return;
		}

		renderMap(divRef.current, tomtomApiKey);
	}, [tomtomApiKey]);

	return (
		<div className="map-container w-full h-full">
			<div className="map w-full h-full" ref={divRef} />
		</div>
	);
}

export function renderMap(container: HTMLDivElement, tomtomApiKey: string) {
	const map = new MapLibre({
		container,
		zoom: 15.5,
		center: [144.96177471761524, -37.81467349847328],
		style: `https://api.tomtom.com/style/2/custom/style/dG9tdG9tQEBAY0tZOENwOFluUXE5d2hvcTtVwS6wG_5P07_frmUz3XWF.json?key=${tomtomApiKey}`,
		pitch: 0,
		maxZoom: 18,
		maxPitch: 85,
	});

	map.addControl(new FullscreenControl(), "top-left");
	map.addControl(
		new NavigationControl({
			showCompass: true,
			showZoom: true,
			visualizePitch: true,
			visualizeRoll: true,
		}),
		"top-left",
	);
}
