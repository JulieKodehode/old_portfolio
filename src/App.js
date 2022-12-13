// Libraries
import React from "react";
import { Route, Routes } from "react-router-dom";

// Routes
import LandingPage from "./routes/LandingPage";
import HomePage from "./routes/Home/HomePage";
import AboutPage from "./routes/About/AboutPage";
import ProjectPage from "./routes/Projects/ProjectPage";
import ContactPage from "./routes/Contact/ContactPage";

/**
 * This is the main application component
 */
function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="Home" element={<HomePage />} />
			<Route path="/About" element={<AboutPage />} />
			<Route path="/Projects" element={<ProjectPage />} />
			<Route path="/Contact" element={<ContactPage />} />
		</Routes>
	);
}

export default App;
