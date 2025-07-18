"use client";

import dynamic from "next/dynamic";

const DynamicApp = dynamic(() => import("./HeatMap"), {
	ssr: false,
});

export default function App(props) {
	return <DynamicApp {...props} />;
}
