"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import type { ReactNode } from "react";
import { withServerSafetyHoc } from "./withServerSafetyHoc";

type MapRenderContextType = {
	maptilerApiKey: string;
	mapboxApiKey: string;
};

const MapRenderContext = createContext<MapRenderContextType>({
	maptilerApiKey: "",
	mapboxApiKey: "",
});

type Props = {
	env: {
		MAPTILER_API_KEY: string;
		MAPBOX_ACCESS_TOKEN: string;
	};
	children: ReactNode;
};

const ApiContextProviderLocal = ({ children, env }: Props) => {
	const { MAPTILER_API_KEY, MAPBOX_ACCESS_TOKEN } = env;

	const context = useMemo(
		() => ({
			maptilerApiKey: MAPTILER_API_KEY,
			mapboxApiKey: MAPBOX_ACCESS_TOKEN,
		}),
		[MAPTILER_API_KEY, MAPBOX_ACCESS_TOKEN],
	);

	return <MapRenderContext value={context}>{children}</MapRenderContext>;
};

export const useModalRenderContext = () => useContext(MapRenderContext);

export const ApiContextProvider = withServerSafetyHoc(ApiContextProviderLocal);
