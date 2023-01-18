import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";

function App() {
	return (
		<div>
			<AllRoutes />
		</div>
	);
}

export default App;
