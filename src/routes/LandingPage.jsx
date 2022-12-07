// Libraries
import { Outlet } from "react-router-dom";

// Styles
import "../styles/basic.css";
import "../styles/colors.css";
import "../styles/fontsize.css";
import "../styles/heights.css";

// Components
import NavBar from "../components/NavBar/NavBar";
import BottomWave from "../components/Wave/wave";
import Footer from "../components/Footer";

/**
 * This is the landing page of the project
 */
const LandingPage = () => {
	return (
		<>
			<NavBar />

			<Outlet />

			<BottomWave />

			<Footer />
		</>
	);
};

export default LandingPage;
