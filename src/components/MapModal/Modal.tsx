import type { MapMetadata } from "@/types";
import { useCallback, useEffect, useRef } from "react";

type Props = Pick<MapMetadata, "title" | "description"> & {
	children: React.ReactElement;
	activeMapId: string;
	onClose: () => void;
};

export const Modal = ({
	title,
	description,
	activeMapId,
	onClose,
	children,
}: Props) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleClose = useCallback(() => {
		dialogRef.current?.close();
		onClose();
	}, [onClose]);

	useEffect(() => {
		activeMapId && dialogRef.current?.showModal();
		return () => {
			dialogRef.current?.close();
		};
	}, [activeMapId]);

	return (
		<dialog className="modal" ref={dialogRef}>
			<div className="modal-box bg-white modal-top w-11/12 max-w-5xl">
				<form method="dialog">
					<button
						className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						type="button"
						onClick={handleClose}
					>
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="py-4">{description}</p>
				{children}
				<div className="modal-action">
					<form method="dialog">
						<button className="btn" type="button" onClick={handleClose}>
							Close
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
};
