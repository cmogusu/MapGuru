"use client";

import { useMapRenderContext } from "@/context";
import { useCallback } from "react";

type Props = {
	id: string;
};

export function RenderMapButton({ id }: Props) {
	const { setActiveMapId } = useMapRenderContext();

	const handleClick = useCallback(() => {
		setActiveMapId(id);
	}, [id, setActiveMapId]);

	return (
		<button className="btn btn-primary" onClick={handleClick} type="button">
			view
		</button>
	);
}
