"use client";

import { useMapRenderContext } from "@/context";
import { useCallback } from "react";

type Props = {
	component: string;
};

export function RenderMapButton({ component }: Props) {
	const { setMapComponent } = useMapRenderContext();

	const handleClick = useCallback(() => {
		setMapComponent(component);
	}, [component, setMapComponent]);

	return (
		<button className="btn btn-primary" onClick={handleClick} type="button">
			view
		</button>
	);
}
