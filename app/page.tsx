import App from "../components/Heatmaps/App";

export default function Home() {
	const { MAPTILER_API_KEY } = process.env;
	return (
		<main>
			<nav className="navbar navbar-inverse navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#navbar"
							aria-expanded="false"
							aria-controls="navbar"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="/">
							MapGuru
						</a>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="/">Home</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="container">
				<p className="lead">
					This map is loading and rendering{" "}
					<a href="https://clived.live/street-addresses.geojson">
						this GeoJson file
					</a>{" "}
					that is approximately 30MB. It contains data on street light in
					Melbourne Australia loaded from{" "}
					<a href="https://data.melbourne.vic.gov.au/explore/dataset/street-lights-with-emitted-lux-level-council-owned-lights-only/information/">
						{" "}
						this dataset
					</a>
				</p>
				<App mapTilerApiKey={MAPTILER_API_KEY} />
			</div>
		</main>
	);
}
