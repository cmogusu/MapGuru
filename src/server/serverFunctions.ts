"use server";

import fs from "node:fs/promises";
import path from "node:path";

import { logError, logInfo } from "@/utilities";

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

export async function moveFileToImgFolder(fileName: string) {
	// @ts-ignore
	const home: string = process.env.HOME;
	const downloadsFolder = path.join(home, "Downloads");
	const imgFolder = path.join(home, "www/mapguru/public/img");
	const oldImgPath = path.join(downloadsFolder, fileName);
	const newImgPath = path.join(imgFolder, fileName);
	await moveFile(oldImgPath, newImgPath);
}

async function moveFile(oldPath: string, newPath: string) {
	try {
		await fs.rename(oldPath, newPath);
		logInfo(`File moved successfully from ${oldPath} to ${newPath}`);
	} catch (error) {
		if (error.code === "EXDEV") {
			logError(
				"Cannot move file across different file systems. Copying instead...",
			);
			await fs.copyFile(oldPath, newPath);
			await fs.unlink(oldPath);
			logError(
				`File copied and original deleted from ${oldPath} to ${newPath}`,
			);
		} else {
			logError(`Error moving file: ${error.message}`);
			throw error;
		}
	}
}
