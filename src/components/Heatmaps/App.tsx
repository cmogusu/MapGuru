"use client";

// import dynamic from "next/dynamic";
import type { MapMetadata } from "@/types";

// const HeatMapsImport = dynamic(() => import("./HeatMap"), {
// 	ssr: false,
// });

export const metadata: MapMetadata = {
	img: {
		src: "/img/default-swimmania-image.jpg",
		alt: "loading large volumes of data",
	},
	title: "Efficient rendering of large volumes of data",
	description:
		"Map that loads and effeciently renders approximately 30MB of data containing more than 100k records.",
	component: "heatmaps",
};

export default function App(props) {
	return (
		<div>
			<div className="container">
				<p className="lead">
					This map is loading and rendering{" "}
					<a href="https://clived.live/street-addresses.geojson">
						this GeoJson file
					</a>{" "}
					that is approximately 30MB in size and contains 106,037 records. The
					records show the locations of street lights in the city of Melbourne
					in Australia. <br /> You can view the data{" "}
					<a href="https://data.melbourne.vic.gov.au/explore/dataset/street-lights-with-emitted-lux-level-council-owned-lights-only/information/">
						{" "}
						here
					</a>
				</p>
			</div>
			{/* <DynamicApp {...props} /> */}
		</div>
	);
}
