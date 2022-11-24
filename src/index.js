// Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Test?
import reportWebVitals from "./tests/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// Router - navbar app etc
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
