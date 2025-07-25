"use client";

import mapbox, {
	FullscreenControl,
	Map as MapBox,
	NavigationControl,
} from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";
import { MapContainer } from "@/components/MapContainer";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "@/constants";
import { useApiKeyContext } from "@/context";
import type { LngLat } from "@/types";
import { logInfo } from "@/utilities";

type Props = {
	styleUrl: string;
};

export function BaseMapboxMap({ styleUrl }: Props) {
	const { mapboxApiKey } = useApiKeyContext();
	const divRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<MapBox>(null);

	useEffect(() => {
		if (!divRef.current || divRef.current.querySelector("canvas")) {
			return;
		}

		logInfo("Creating maplibre map instance");
		mapRef.current = renderMap(divRef.current, styleUrl, mapboxApiKey);
		return () => {
			if (mapRef.current) {
				logInfo("Removing maplibre map map");
				mapRef.current.remove();
			}
		};
	}, [mapboxApiKey, styleUrl]);

	return (
		<MapContainer>
			<div className="w-full h-full" ref={divRef} />
		</MapContainer>
	);
}

export function renderMap(
	container: HTMLDivElement,
	styleUrl: string,
	mapboxApiKey: string,
	zoom: number = DEFAULT_MAP_ZOOM,
	center: LngLat = DEFAULT_MAP_CENTER,
) {
	mapbox.accessToken = mapboxApiKey;
	const map = new MapBox({
		container,
		zoom,
		center,
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
		}),
		"top-left",
	);

	map.on("click", (event) => {
		logInfo(event.lngLat);
	});

	map.on("zoom", () => {
		logInfo(map.getZoom());
	});

	return map;
}
