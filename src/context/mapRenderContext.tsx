"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

type MapRenderContextType = {
	setMapComponent: (val: string) => void;
	mapComponent: string;
};

const MapRenderContext = createContext<MapRenderContextType>({
	setMapComponent: () => {},
	mapComponent: "",
});

type Props = {
	children: ReactNode;
};

export const MapRenderContextProvider = (props: Props) => {
	const [mapComponent, setMapComponent] = useState<string>("");

	const context = useMemo(
		() => ({
			setMapComponent,
			mapComponent,
		}),
		[mapComponent],
	);

	return <MapRenderContext value={context}>{props.children}</MapRenderContext>;
};

export const useMapRenderContext = () => useContext(MapRenderContext);
