"use client";

import { useMapRenderContext } from "@/context";
import { useEffect } from "react";

type Props = {
	component: string;
};

export function UseHook({ component }: Props) {
	const { setActiveMapId } = useMapRenderContext();

	useEffect(() => {
		setActiveMapId(component);
	}, [setActiveMapId, component]);

	return null;
}
