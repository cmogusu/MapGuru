export const styles = [
	{
		style: "microsoft.base",
		desc: [
			"A base map is a standard map that displays roads, natural and artificial features along with the labels for those features in a vector tile.\n",
			"Supports zoom levels 0 through 22. Format: vector (pbf).",
		],
	},
	{
		style: "microsoft.base.labels",
		desc: [
			"Displays labels for roads, natural and artificial features in a vector tile.\n",
			"Supports zoom levels 0 through 22. Format: vector (pbf).",
		],
	},
	{
		style: "microsoft.base.hybrid",
		desc: [
			"Displays road, boundary and label data in a vector tile.\n",
			"Supports zoom levels 0 through 22. Format: vector (pbf).",
		],
	},
	{
		style: "microsoft.terra.main",
		desc: [
			"Shaded relief and terra layers.\n",
			"Supports zoom levels 0 through 6. Format: raster (png).",
		],
	},
	{
		style: "microsoft.base.road",
		desc: [
			"All layers with our main style.\n",
			"Supports zoom levels 0 through 22. Format: raster (png).",
		],
	},
	{
		style: "microsoft.base.darkgrey",
		desc: [
			"All layers with our dark grey style.\n",
			"Supports zoom levels 0 through 22. Format: raster (png).",
		],
	},
	{
		style: "microsoft.base.labels.road",
		desc: [
			"Label data in our main style.\n",
			"Supports zoom levels 0 through 22. Format: raster (png).",
		],
	},
	{
		style: "microsoft.base.labels.darkgrey",
		desc: [
			"Label data in our dark grey style.\n",
			"Supports zoom levels 0 through 22. Format: raster (png).",
		],
	},
	{
		style: "microsoft.base.hybrid.road",
		desc: [
			"Road, boundary and label data in our main style.\n",
			"Supports zoom levels 0 through 22. Format: raster (png).",
		],
	},
	{
		style: "microsoft.base.hybrid.darkgrey",
		desc: [
			"Road, boundary and label data in our dark grey style.\n",
			"Supports zoom levels 0 through 22. Format: raster (png).",
		],
	},
	{
		style: "microsoft.imagery",
		desc: [
			"A combination of satellite or aerial imagery. Only available in S1 and G2 pricing SKU.\n",
			"Supports zoom levels 1 through 19. Format: raster (png).",
		],
	},
	{
		style: "microsoft.weather.radar.main",
		desc: [
			"Weather radar tiles. Latest weather radar images including areas of rain, snow, ice and mixed conditions. For more information on the Azure Maps Weather service coverage, see Azure Maps weather services coverage. For more information on Radar data, see Weather services in Azure Maps.",
			"Supports zoom levels 0 through 15. Format: raster (png).",
		],
	},
	{
		style: "microsoft.weather.infrared.main",
		desc: [
			"Weather infrared tiles. Latest Infrared Satellite images shows clouds by their temperature. For more information, see Azure Maps weather services coverage. For more information about the satellite data returned, see Weather services in Azure Maps.",
			"Supports zoom levels 0 through 15. Format: raster (png).",
		],
	},
	{
		style: "microsoft.traffic.absolute",
		desc: ["absolute traffic tiles in vector"],
	},
	{
		style: "microsoft.traffic.absolute.main",
		desc: ["absolute traffic tiles in raster in our main style."],
	},
	{
		style: "microsoft.traffic.relative",
		desc: ["relative traffic tiles in vector"],
	},
	{
		style: "microsoft.traffic.relative.main",
		desc: ["relative traffic tiles in raster in our main style."],
	},
	{
		style: "microsoft.traffic.relative.dark",
		desc: ["relative traffic tiles in raster in our dark style."],
	},
	{
		style: "microsoft.traffic.delay",
		desc: ["traffic tiles in vector"],
	},
	{
		style: "microsoft.traffic.delay.main",
		desc: ["traffic tiles in raster in our main style"],
	},
	{
		style: "microsoft.traffic.reduced.main",
		desc: ["reduced traffic tiles in raster in our main style"],
	},
	{
		style: "microsoft.traffic.incident",
		desc: ["incident tiles in vector"],
	},
];
