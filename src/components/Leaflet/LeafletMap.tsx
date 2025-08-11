"use client";

import dynamic from "next/dynamic";

const BaseLeafletMapWithNoSSR = dynamic(() => import("./BaseLeafletMap"), {
	ssr: false,
});

export default function LeafletMap() {
	if (typeof window === "undefined") {
		return null;
	}

	return <BaseLeafletMapWithNoSSR />;
}
