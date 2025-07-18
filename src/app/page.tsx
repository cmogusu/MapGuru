import App from "../components/Heatmaps/App";
import Image from "next/image";
import logoImg from "./mapguru-small-logo.png";

export default function Home() {
	const { MAPTILER_API_KEY } = process.env;
	return (
		<main>
			<nav className="navbar navbar-inverse">
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
							<Image src={logoImg} alt="MapGuru logo" height={20} width={70} />
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
			<App mapTilerApiKey={MAPTILER_API_KEY} />
		</main>
	);
}
