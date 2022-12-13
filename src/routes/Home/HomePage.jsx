// Libraries:
import React from "react";

// CSS
import styles from "./layout.module.css";

const HomePage = () => {
	return (
		<main className={styles.homeMain}>
			{/* Home */}
			<section className={styles.sectionLeft}>
				<img
					src="https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=590&h=800&7E4B4CAD-CAE1-4726-93D6A160C2B068B2"
					alt="cat? me? what?"
				/>
			</section>

			<section className={styles.sectionRight}>
				<h1>Julie</h1>
				<h2>Frontend-utvikler</h2>
				<p>
					Skal jeg putte inn informasjon på denne siden her som en introduksjon eller skal jeg la siden
					stå uten info? Går litt frem og tilbake om akkurat dette.. Hva passer best?
				</p>
			</section>
		</main>
	);
};

export default HomePage;
