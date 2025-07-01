"use client";

import { MapComponentsProvider } from "@mapcomponents/react-maplibre";
import { MapWithAnimation } from "../components/Map";

export default function Home() {
	return (
		<MapComponentsProvider>
			<MapWithAnimation />
		</MapComponentsProvider>
	);
}
