// Import

import "./styles/basic.css";

import NavBar from "./components/navBar";

function App() {
	return (
		// Routes and route here? OR ONE BIG SCROLL PAGE
		<div>
			{/* Header */}
			<NavBar />

			{/* Main */}
			<main>
				<div>
					<h1>Velkommen</h1>
				</div>

				<div>
					<h3>Om meg</h3>
					<p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
				</div>

				<div>
					<img
						style={{ height: "100px", widht: "100px" }}
						src="https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2"
						alt="cat? me? what?"
					/>
				</div>

				<div>
					<h3>Prosjekter</h3>
					<p style={{ height: "100px", width: "100px", border: "5px solid black" }}>Prosjekt A</p>
					<p style={{ height: "100px", width: "100px", border: "5px solid black" }}>Prosjekt B</p>
					<p style={{ height: "100px", width: "100px", border: "5px solid black" }}>Prosjekt C</p>
				</div>

				<div>
					<h3>Kontakt</h3>
					<p>Github link xyz</p>
					<p>Gmail xyz</p>
				</div>
			</main>

			{/* Footer */}
			<footer>
				<h4>BYE</h4>
			</footer>
		</div>
	);
}

export default App;
