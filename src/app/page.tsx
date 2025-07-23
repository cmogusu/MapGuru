import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MapRenderContextProvider } from "@/context";
import { MapList } from "@/components/mapList";
import { RenderMap } from "@/components/renderMap";

export default async function Home() {
	// const params = await props.params;
	// const searchParams = await props.searchParams;

	// const { MAPTILER_API_KEY } = process.env;
	return (
		<div>
			<Header />
			<main>
				<MapRenderContextProvider>
					<RenderMap />
					<MapList />
				</MapRenderContextProvider>
			</main>
			<Footer />
		</div>
	);
}
