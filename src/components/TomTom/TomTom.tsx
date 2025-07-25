"use client";

import { API_KEY_PLACEHOLDER, BaseTomTomMap } from "./BaseTomTomMap";

export default function TomTom() {
	const styleUrl = `https://api.tomtom.com/maps/orbis/assets/styles/0.0.0-0/style.json?apiVersion=1&map=basic_mono-dark&key=${API_KEY_PLACEHOLDER}`;

	return <BaseTomTomMap styleUrlWithoutKey={styleUrl} />;
}
