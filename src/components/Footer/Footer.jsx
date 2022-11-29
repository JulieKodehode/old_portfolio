// Imports:

// CSS
import styles from "./layout.module.css";

// Components
import Waves from "../Waves/Waves";

/**
 * Main footer feature
 */
const Footer = () => {
	return (
		<>
			<Waves />
			<footer className={styles.footer}>
				<h3 className={styles.footerH3}>Julie Hauge 2022</h3>
			</footer>
		</>
	);
};

export default Footer;
