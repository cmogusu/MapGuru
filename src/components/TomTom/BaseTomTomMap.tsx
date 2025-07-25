"use client";

import { BaseMaplibreMap } from "@/components/MapLibre";
import { API_KEY_PLACEHOLDER } from "@/constants";
import { useApiKeyContext } from "@/context";

type Props = {
	styleUrlWithoutKey: string;
};

export function BaseTomtomMap({ styleUrlWithoutKey }: Props) {
	const { tomtomApiKey } = useApiKeyContext();
	const styleUrl = styleUrlWithoutKey.replace(
		API_KEY_PLACEHOLDER,
		tomtomApiKey,
	);

	return <BaseMaplibreMap styleUrl={styleUrl} />;
}
