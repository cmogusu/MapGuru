"use client";

import { type RefObject, useCallback, useRef } from "react";
import { logError } from "@/utilities";

type Props = {
	targetElementRef: RefObject<HTMLDivElement>;
	width: number;
	height: number;
	imageFileName: string;
};

export const ScreenCapture = ({
	targetElementRef,
	width,
	height,
	imageFileName,
}: Props) => {
	const linkContainerRef = useRef<HTMLDivElement>(null);

	const handleStartCapture = useCallback(() => {
		if (targetElementRef.current && linkContainerRef.current) {
			startCapture(
				targetElementRef.current,
				linkContainerRef.current,
				width,
				height,
				imageFileName,
			);
		}
	}, [targetElementRef.current, width, height, imageFileName]);

	return (
		<div>
			<button
				type="button"
				className="btn btn-outline"
				onClick={handleStartCapture}
			>
				start
			</button>

			<div ref={linkContainerRef} />
		</div>
	);
};

const displayMediaOptions = {
	video: {
		displaySurface: "window",
	},
	preferCurrentTab: true,
	audio: false,
};

async function startCapture(
	target: HTMLDivElement,
	container: HTMLDivElement,
	width: number,
	height: number,
	imageFileName: string,
) {
	const video = createVideoElement(container, width, height);
	const link = createLinkElement(container, imageFileName);
	const canvas = createCanvasElement(width, height);

	const stream = await createVideoStream(target);
	if (!stream) {
		return;
	}

	video.srcObject = stream;

	setTimeout(() => {
		capture(video, canvas, link);
		stopCapture(video, stream);
		video.remove();
		link.remove();
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

	link.href = canvas.toDataURL("image/png");
	link.click();
}

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
	link.download = downloadFileName.includes(".png")
		? downloadFileName
		: `${downloadFileName}.png`;
	container.append(link);
	return link;
};

const createCanvasElement = (
	width: number,
	height: number,
): HTMLCanvasElement => {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	return canvas;
};

const createVideoElement = (
	container: HTMLDivElement,
	width: number,
	height: number,
): HTMLVideoElement => {
	const video = document.createElement("video");
	video.width = width;
	video.height = height;
	video.autoplay = true;
	container.append(video);
	return video;
};
