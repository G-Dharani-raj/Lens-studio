import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// Please Dont Remove this line this is for CSS from BootStrap
import "bootstrap/dist/css/bootstrap.min.css";
// ............................
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
      {/* <AllRoutes /> */}
      <Navbar />
    </div>
  );
}

export default App;
