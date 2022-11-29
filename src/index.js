// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

// Components
import App from "./App";

// Test?
import reportWebVitals from "./tests/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// Router - navbar app etc
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);

reportWebVitals();
