"use server";

export async function getApiKeys() {
	const { MAPTILER_API_KEY, MAPBOX_ACCESS_TOKEN } = process.env;
	return new Promise((resolve) => {
		resolve({
			maptilerApiKey: MAPTILER_API_KEY,
			mapboxApiKey: MAPBOX_ACCESS_TOKEN,
		});
	});
}
