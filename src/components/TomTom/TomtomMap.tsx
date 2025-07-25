"use client";

import { logError } from "@/utilities";
import { BaseTomtomMap } from "./BaseTomtomMap";

type Props = {
	styleUrl: string;
};

export default function TomtomMap({ styleUrl }: Props) {
	if (!styleUrl) {
		logError("Tomtom style url not set");
		return;
	}

	return <BaseTomtomMap styleUrlWithoutKey={styleUrl} />;
}
