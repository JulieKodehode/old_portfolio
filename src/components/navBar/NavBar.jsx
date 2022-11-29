// Libraries
import { NavLink } from "react-router-dom";
// CSS
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
					<li>
						<NavLink title="Link to HomePage" to="/">
							Hjem
						</NavLink>
					</li>
					<li>
						<NavLink title="Link to AboutPage" to="/About">
							Om meg
						</NavLink>
					</li>
					<li>
						<NavLink title="Link to ProjectPage" to="/Projects">
							Prosjekter
						</NavLink>
					</li>
					<li>
						<NavLink title="Link to ContactPage" to="/Contact">
							Kontakt
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
