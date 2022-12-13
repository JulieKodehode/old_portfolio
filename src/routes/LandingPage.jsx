// Libraries
// import { Outlet } from "react-router-dom";

// Styles
import "../styles/basic.css";
import "../styles/colors.css";
import "../styles/fontsize.css";
import "../styles/heights.css";

// Pages
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ProjectPage from "./Projects/ProjectPage";
import ContactPage from "./Contact/ContactPage";

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

			<HomePage />
			<BottomWave />

			<AboutPage />
			<BottomWave />

			<ProjectPage />
			<BottomWave />

			<ContactPage />
			<BottomWave />
			<Footer />
		</>
	);
};

export default LandingPage;
