import App from "../components/Heatmaps/App";

export default function Home() {
	const { MAPTILER_API_KEY } = process.env;
	return <App mapTilerApiKey={MAPTILER_API_KEY} />;
}
