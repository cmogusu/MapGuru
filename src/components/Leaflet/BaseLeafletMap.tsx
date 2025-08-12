"use client";

import L from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer } from "@/components/MapContainer";
import { DEFAULT_MAP_CENTER_LATLNG } from "@/constants";
import "leaflet/dist/leaflet.css";
import "./style.css";
import { useReplaceApiKey } from "@/hooks";

type Props = {
	styleUrl: string;
};

function LeafletMap({ styleUrl }: Props) {
	const divRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<L.Map>(null);
	const styleUrlWithApiKey = useReplaceApiKey(styleUrl);

	useEffect(() => {
		if (divRef.current && !mapRef.current && styleUrlWithApiKey) {
			mapRef.current = renderMap(divRef.current, styleUrlWithApiKey);
		}
	}, [styleUrlWithApiKey]);

	return <div className="w-full h-full" ref={divRef} />;
}

const renderMap = (domElement: HTMLDivElement, styleUrl: string) => {
	var map = L.map(domElement).setView(DEFAULT_MAP_CENTER_LATLNG, 13);

	L.tileLayer(styleUrl, {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	return map;
};

export default function BaseLeafletMap({ styleUrl }: Props) {
	return (
		<MapContainer>
			<LeafletMap styleUrl={styleUrl} />
		</MapContainer>
	);
}
