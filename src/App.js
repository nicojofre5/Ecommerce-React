import "./App.css";
import NavBar from "./components/navbar"
import BannerInicial from "./components/bannerinicial";
import ImagenInicial from "./components/imagenbanner";
import { BrowserRouter as Router} from "react-router-dom";
import Rutas from "./components/Rutas";

function App() {
  return (
    <Router>
      <BannerInicial />
      <NavBar />
      <ImagenInicial /> 
      <Rutas />
    </Router>
  );
}

export default App;
