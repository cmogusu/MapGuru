import type { ComponentType } from "react";

export type Category = {
	id: string;
	title: string;
	description: string;
};

export type Categories = { [k: string]: Category };

export type MapMetadata = {
	id: string;
	img: {
		src: string;
		alt: string;
	};
	title: string;
	description: string;
	categories: Array<keyof Categories>;
	component: ComponentType<unknown>;
};
