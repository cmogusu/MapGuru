"use server";

export async function getApiKeys() {
	const { MAPTILER_API_KEY, MAPBOX_ACCESS_TOKEN, TOMTOM_API_KEY } = process.env;
	return new Promise((resolve) => {
		resolve({
			mapboxApiKey: MAPBOX_ACCESS_TOKEN,
			maptilerApiKey: MAPTILER_API_KEY,
			tomtomApiKey: TOMTOM_API_KEY,
		});
	});
}
