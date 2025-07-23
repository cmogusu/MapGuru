"use client";

import { useMapRenderContext } from "@/context";
import { useEffect } from "react";

type Props = {
	component: string;
};

export function UseHook({ component }: Props) {
	const { setMapComponent } = useMapRenderContext();

	useEffect(() => {
		setMapComponent(component);
	}, [setMapComponent, component]);

	return null;
}
