"use client";

import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from "react";
import type { ReactNode } from "react";

const ACTIVE_MAP_ID_KEY = "ACTIVE_MAP_ID";

type MapRenderContextType = {
	setActiveMapId: (val: string) => void;
	activeMapId: string;
};

const MapRenderContext = createContext<MapRenderContextType>({
	setActiveMapId: () => {},
	activeMapId: "",
});

type Props = {
	children: ReactNode;
};

export const MapRenderContextProvider = (props: Props) => {
	const storedActiveMapId = localStorage.getItem(ACTIVE_MAP_ID_KEY) || "";
	const [activeMapId, setActiveMapId] = useState<string>(storedActiveMapId);

	const setActiveMapIdWithStorage = useCallback((mapId: string) => {
		localStorage.setItem(ACTIVE_MAP_ID_KEY, mapId);
		setActiveMapId(mapId);
	}, []);

	const context = useMemo(
		() => ({
			setActiveMapId: setActiveMapIdWithStorage,
			activeMapId,
		}),
		[activeMapId, setActiveMapIdWithStorage],
	);

	return <MapRenderContext value={context}>{props.children}</MapRenderContext>;
};

export const useMapRenderContext = () => useContext(MapRenderContext);
