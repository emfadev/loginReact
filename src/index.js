import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./container/login/Login";
import "./app.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Login />
	</React.StrictMode>
);