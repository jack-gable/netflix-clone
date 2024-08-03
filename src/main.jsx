import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./context/firebase.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FirebaseContext.Provider value={{ firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</React.StrictMode>
);
