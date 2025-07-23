"use client";

import { useMapRenderContext } from "@/context";
import { useCallback } from "react";

type Props = {
	id: string;
};

export function RenderMapButton({ id }: Props) {
	const { setMapComponent } = useMapRenderContext();

	const handleClick = useCallback(() => {
		setMapComponent(id);
	}, [id, setMapComponent]);

	return (
		<button className="btn btn-primary" onClick={handleClick} type="button">
			view
		</button>
	);
}
