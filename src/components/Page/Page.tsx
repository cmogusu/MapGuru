import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MapRenderContextProvider } from "@/context";
import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const Page = (props: Props) => {
	return (
		<div>
			<Header />
			<div>
				<MapRenderContextProvider>{props.children}</MapRenderContextProvider>
			</div>
			<Footer />
		</div>
	);
};
