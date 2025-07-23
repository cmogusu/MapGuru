import type { ComponentType } from "react";

export type MapMetadata = {
	id: string;
	img: {
		src: string;
		alt: string;
	};
	title: string;
	description: string;
	categories: string[];
	component: ComponentType<unknown>;
};
