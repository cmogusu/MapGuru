"use client";

import { type ReactNode, useCallback, useRef } from "react";
import { logError } from "@/utilities";
import "./style.css";

type Dimensions = {
	width: number;
	height: number;
};

type Props = {
	imageFileName: string;
	children: ReactNode;
};

export const ScreenCapture = ({ imageFileName, children }: Props) => {
	const targetElementRef = useRef<HTMLDivElement>(null);
	const utilityContainerRef = useRef<HTMLDivElement>(null);

	const handleCaptureScreen = useCallback(() => {
		if (targetElementRef.current && utilityContainerRef.current) {
			startCapture(
				targetElementRef.current,
				utilityContainerRef.current,
				getDimensions(targetElementRef.current),
				imageFileName,
			);
		}
	}, [imageFileName]);

	return (
		<div>
			<div className="w-full screen-capture-container" ref={targetElementRef}>
				{children}
			</div>
			<button
				type="button"
				className="btn btn-outline ml-auto"
				onClick={handleCaptureScreen}
			>
				Take screenshot
			</button>
			<div
				className="screen-capture-utility-container bg-gray-200"
				ref={utilityContainerRef}
			/>
		</div>
	);
};

async function startCapture(
	target: HTMLDivElement,
	container: HTMLDivElement,
	dimensions: Dimensions,
	imageFileName: string,
) {
	const video = createVideoElement(container, dimensions);
	const link = createLinkElement(container, imageFileName);
	const canvas = createCanvasElement(dimensions);

	improveColors(target);
	const stream = await createVideoStream(target);
	if (!stream) {
		return;
	}

	video.srcObject = stream;

	// Give time for video to load. Taking the screen shot immediately often gives
	// blank images
	setTimeout(() => {
		capture(video, canvas, link);
		stopCapture(video, stream);
		restoreColors(target);
		video.remove();
		link.remove();
		target.style.filter = "none";
	}, 1000);
}

function stopCapture(videoElem: HTMLVideoElement, stream: MediaStream) {
	const tracks = stream.getTracks();
	tracks.forEach((track: MediaStreamTrack) => track.stop());
	videoElem.srcObject = null;
}

function capture(
	videoElem: HTMLVideoElement,
	canvas: HTMLCanvasElement,
	link: HTMLAnchorElement,
) {
	const context = canvas.getContext("2d");
	if (!context) {
		logError("unable to get canvas context");
		return;
	}

	context.drawImage(
		videoElem,
		0,
		0,
		videoElem.clientWidth,
		videoElem.clientHeight,
	);

	link.href = canvas.toDataURL("image/jpeg", 0.8);
	link.click();
}

const displayMediaOptions = {
	video: {
		displaySurface: "window",
	},
	preferCurrentTab: true,
	audio: false,
};

const createVideoStream = async (target: HTMLDivElement) => {
	try {
		const stream =
			await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
		const [track] = stream.getVideoTracks();
		// @ts-ignore
		const restrictionTarget = await RestrictionTarget.fromElement(target);
		// @ts-ignore
		await track.restrictTo(restrictionTarget);
		return stream;
	} catch (err) {
		logError(err);
	}
};

const createLinkElement = (
	container: HTMLDivElement,
	downloadFileName: string,
): HTMLAnchorElement => {
	const link = document.createElement("a");
	link.download = downloadFileName.includes(".jpeg")
		? downloadFileName
		: `${downloadFileName}.jpeg`;

	container.append(link);
	return link;
};

const createCanvasElement = (dimensions: Dimensions): HTMLCanvasElement => {
	const canvas = document.createElement("canvas");
	canvas.width = dimensions.width;
	canvas.height = dimensions.height;
	return canvas;
};

const createVideoElement = (
	container: HTMLDivElement,
	dimensions: Dimensions,
): HTMLVideoElement => {
	const video = document.createElement("video");
	video.style.width = `${dimensions.width}px`;
	video.style.height = `${dimensions.height}px`;
	video.autoplay = true;
	container.append(video);
	return video;
};

const getDimensions = (domElement: HTMLDivElement): Dimensions => {
	const { width, height } = domElement.getBoundingClientRect();
	return { width, height };
};

const improveColors = (domElement: HTMLDivElement) => {
	domElement.style.filter = "saturate(1.5) contrast(1.2)";
};

const restoreColors = (domElement: HTMLDivElement) => {
	domElement.style.filter = "none";
};
