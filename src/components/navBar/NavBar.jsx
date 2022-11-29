// Imports

import styles from "./layout.module.css";

/**
 * Main navigation bar/menu
 */
const NavBar = () => {
	return (
		<header className={styles.navHeader}>
			<h1>JH</h1>
			<nav>
				<ul className={styles.navUl}>
					<li>Hjem</li>
					<li>Om meg</li>
					<li>Prosjekter</li>
					<li>Kontakt</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
