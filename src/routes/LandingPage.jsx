// Libraries
import { Outlet } from "react-router-dom";

// Styles
import "../styles/basic.css";
import "../styles/colors.css";

// Components
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";

/**
 * This is the landing page of the project
 */
const LandingPage = () => {
	return (
		<>
			<NavBar />

			<Outlet />

			<Footer />
		</>
	);
};

export default LandingPage;
