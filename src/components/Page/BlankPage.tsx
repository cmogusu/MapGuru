import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapModal } from "@/components/MapModal";
import { ApiContextProvider, ModalRenderContextProvider } from "@/context";
import { getApiKeys } from "@/server";
import type { ReactNode } from "react";
import "./style.css";

type Props = {
	children: ReactNode;
};

export const BlankPage = ({ children }: Props) => {
	return (
		<div className="grid min-h-screen grid-body-rows gap-6">
			<Header />
			<ApiContextProvider getApiKeys={getApiKeys}>
				<ModalRenderContextProvider>
					<MapModal />
					{children}
				</ModalRenderContextProvider>
			</ApiContextProvider>
			<Footer />
		</div>
	);
};
