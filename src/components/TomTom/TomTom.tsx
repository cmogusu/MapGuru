"use client";

import { BaseTomTomMap } from "./BaseTomTomMap";

type Props = {
	styleUrl?: string;
};

export default function TomTom({ styleUrl }: Props) {
	return styleUrl ? <BaseTomTomMap styleUrlWithoutKey={styleUrl} /> : null;
}
