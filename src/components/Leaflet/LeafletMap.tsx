"use client";

import dynamic from "next/dynamic";
import { logError } from "@/utilities";

const BaseLeafletMapWithNoSSR = dynamic(() => import("./BaseLeafletMap"), {
	ssr: false,
});

type Props = {
	styleUrl: string;
};

export default function LeafletMap({ styleUrl }: Props) {
	if (!styleUrl) {
		logError("Mapbox style url not set");
		return;
	}

	if (typeof window === "undefined") {
		return null;
	}

	return <BaseLeafletMapWithNoSSR styleUrl={styleUrl} />;
}
