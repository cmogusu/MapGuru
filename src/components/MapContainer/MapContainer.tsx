"use client";

import { ImgHeightToWidthRatio } from "@/constants";
import {
	type ReactNode,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
	useSyncExternalStore,
} from "react";
import "./style.css";
import { logError } from "@/utilities";

type Props = {
	children: ReactNode;
};

export function MapContainer({ children }: Props) {
	const divRef = useRef<HTMLDivElement>(null);
	// const [width, setWidth] = useState(0);
	// const height = Math.floor(width * ImgHeightToWidthRatio);

	// const getAndUpdateWidth = useCallback(() => {
	// 	if (!divRef.current) {
	// 		logError("map component dom element not set");
	// 		return;
	// 	}
	// 	const { width } = divRef.current.getBoundingClientRect();
	// 	setWidth(width);
	// }, [])

	// const handleResize = useCallback(() => {
	// 	const newWidth = getWidth(divRef.current)
	// 	setWidth(newWidth)
	// }, [])

	const getWidth = useCallback(
		(): number =>
			divRef.current ? divRef.current.getBoundingClientRect().width : 0,
		[],
	);

	const subscribe = useCallback(() => {
		window.addEventListener("resize", getWidth);
		return () => {
			window.removeEventListener("resize", getWidth);
		};
	}, [getWidth]);

	const width = useSyncExternalStore(subscribe, getWidth);
	const height = Math.floor(width * ImgHeightToWidthRatio);

	return (
		<div ref={divRef} className="w-full">
			<div
				className="bg-red-900 map-container"
				style={{ width: `${width}px`, height: `${height}px` }}
			>
				{!!width && children}
			</div>
		</div>
	);
}
