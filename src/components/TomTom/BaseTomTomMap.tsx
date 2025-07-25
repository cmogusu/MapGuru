"use client";

import { BaseMaplibreMap } from "@/components/MapLibre";
import { useApiKeyContext } from "@/context";

type Props = {
	styleUrlWithoutKey: string;
};

export const API_KEY_PLACEHOLDER = "XXX-API-KEY-XXX";

export function BaseTomTomMap({ styleUrlWithoutKey }: Props) {
	const { tomtomApiKey } = useApiKeyContext();
	const styleUrl = styleUrlWithoutKey.replace(
		API_KEY_PLACEHOLDER,
		tomtomApiKey,
	);

	return <BaseMaplibreMap styleUrl={styleUrl} />;
}
