"use client";

import { useRef } from "react";
import { ScreenCapture } from "@/components/ScreenCapture";

export function Play() {
	const divRef = useRef<HTMLDivElement>(null);
	const imageFileName = "fun-download";

	return (
		<div>
			<div ref={divRef} style={divStyle}>
				<img
					src="/img/default-mapguru-image.jpg"
					style={{ width: "400px", height: "auto" }}
					alt="small logo placeholder"
				/>
			</div>
			<ScreenCapture
				targetElementRef={divRef}
				width={400}
				height={266}
				imageFileName={imageFileName}
			/>
		</div>
	);
}

const divStyle = {
	isolation: "isolate",
	transformStyle: "flat",
	backgroundColor: "red",
	width: "400px",
	height: "266px",
};
