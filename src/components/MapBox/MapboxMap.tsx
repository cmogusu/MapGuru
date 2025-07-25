"use client";

import { logError } from "@/utilities";
import { BaseMapboxMap } from "./BaseMapboxMap";

type Props = {
	styleUrl: string;
};

export default function Mapbox({ styleUrl }: Props) {
	if (!styleUrl) {
		logError("Mapbox style url not set");
		return;
	}

	return <BaseMapboxMap styleUrl={styleUrl} />;
}
