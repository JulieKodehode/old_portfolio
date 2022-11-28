// Libraries
import { Outlet } from "react-router-dom";

// CSS(?)

// Components
import NavBar from "../components/navBar/NavBar";

/**
 * This is the landing page of the project
 */
const LandingPage = () => {
	return (
		<>
			<NavBar />

			<Outlet />

			{/* Footer */}
		</>
	);
};

export default LandingPage;
