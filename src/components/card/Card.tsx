import Image from "next/image";
import { DefaultImage } from "@/constants";
import { RenderMapButton } from "./RenderMapButton";
import type { MapMetadata } from "@/types";
import { Suspense } from "react";
import Link from "next/link";

export const Card = ({ img, title, description, id }: MapMetadata) => {
	if (!title || !description) {
		console.error("title or description is not set");
		return "";
	}

	return (
		<div className="card w-96 shadow-sm">
			<figure>
				<Image
					src={img.src || DefaultImage.src}
					alt={img.alt || description}
					width={500}
					height={300}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<Suspense fallback={<Link href={`/map/${id}`}></Link>}>
						<RenderMapButton id={id} />
					</Suspense>
				</div>
			</div>
		</div>
	);
};
