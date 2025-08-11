"use client";

// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// export default function BaseLeafletMap() {
// 	return (
// 		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
// 			<TileLayer
// 				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// 			/>
// 			<Marker position={[51.505, -0.09]}>
// 				<Popup>
// 					A pretty CSS3 popup. <br /> Easily customizable.
// 				</Popup>
// 			</Marker>
// 		</MapContainer>
// 	);
// }

import L from "leaflet";
import { useEffect, useRef } from "react";
import { MapContainer } from "@/components/MapContainer";
import { DEFAULT_MAP_CENTER_LATLNG } from "@/constants";
import "leaflet/dist/leaflet.css";
import "./style.css";

const LeafletMap = () => {
	const divRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<L.Map>(null);

	useEffect(() => {
		if (divRef.current && !mapRef.current) {
			mapRef.current = renderMap(divRef.current);
		}
	}, []);

	return <div className="w-full h-full" ref={divRef} />;
};

export default function BaseLeafletMap() {
	return (
		<MapContainer>
			<LeafletMap />
		</MapContainer>
	);
}

const renderMap = (domElement: HTMLDivElement) => {
	var map = L.map(domElement).setView(DEFAULT_MAP_CENTER_LATLNG, 13);

	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	return map;
};
