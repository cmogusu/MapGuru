import type { ComponentType } from "react";

export type MapMetadata = {
	img: {
		src: string;
		alt: string;
	};
	title: string;
	description: string;
	id: string;
	component: ComponentType<unknown>;
};
