"use client";

import {
	FullscreenControl,
	Map as MapLibre,
	NavigationControl,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";
import { MapContainer } from "@/components/MapContainer";

type Props = {
	styleUrl: string;
};

export function BaseMaplibreMap({ styleUrl }: Props) {
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (
			!styleUrl ||
			!divRef.current ||
			divRef.current.querySelector("canvas")
		) {
			return;
		}

		renderMap(divRef.current, styleUrl);
	}, [styleUrl]);

	return (
		<MapContainer>
			<div className="w-full h-full" ref={divRef} />
		</MapContainer>
	);
}

export function renderMap(container: HTMLDivElement, styleUrl: string) {
	const map = new MapLibre({
		container,
		zoom: 15.5,
		center: [144.96177471761524, -37.81467349847328],
		style: styleUrl,
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
