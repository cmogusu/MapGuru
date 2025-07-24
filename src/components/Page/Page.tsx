import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/SideBar";
import { MapModal } from "@/components/MapModal";
import { ModalRenderContextProvider } from "@/context";
import type { ReactNode } from "react";
import "./style.css";

type Props = {
	children: ReactNode;
};

export const Page = (props: Props) => {
	return (
		<div className="grid min-h-screen grid-body-rows gap-6">
			<Header />
			<ModalRenderContextProvider>
				<div className="md:container min-h-full mx-auto grid grid-cols-4 sm:grid-cols-5 gap-4">
					<main className="col-start-1 col-end-5 grid md:grid-cols-2 gap-4 sm:grid-cols-1 auto-rows-min p-4">
						{props.children}
					</main>
					<aside className="col-start-5 hidden sm:block">
						<Sidebar />
					</aside>
				</div>
				<MapModal />
			</ModalRenderContextProvider>
			<Footer />
		</div>
	);
};
