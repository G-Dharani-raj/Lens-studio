import "./App.css";
// Please Dont Remove this line this is for CSS from BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
// ............................
import AllRoutes from "./Routes/AllRoutes";
import { useEffect } from "react";
// ! For Tracking the page visits
import countapi from "countapi-js";
// ! ----END----
function App() {
	useEffect(() => {
		// * Tracking the visits

		// countapi
		// 	.update(
		// 		"lenstudio.com",
		// 		"0aa8524b-a4f6-41a7-8043-ea923f7d2a68",
		// 		-900
		// 	)
		// 	.then((result) => console.log(result));

		countapi
			.hit("lenstudio.com", "0aa8524b-a4f6-41a7-8043-ea923f7d2a69")
			.then((result) => localStorage.setItem("visits", result.value));
	}, []);
	return (
		<div>
			<AllRoutes />
		</div>
	);
}

export default App;
